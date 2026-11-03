<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Asset;
use App\Models\Attachment;
use App\Models\Incident;
use App\Services\ImageService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use OpenApi\Attributes as OA;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

class AttachmentController extends Controller
{
    protected ImageService $imageService;

    public function __construct(ImageService $imageService)
    {
        $this->imageService = $imageService;
    }

    #[OA\Post(
        path: '/api/attachments',
        summary: 'Upload attachment',
        description: 'Upload a file attachment for an asset, inspection, or ledger entry',
        tags: ['Attachments'],
        security: [['bearerAuth' => []]],
        requestBody: new OA\RequestBody(
            content: new OA\MediaType(
                mediaType: 'multipart/form-data',
                schema: new OA\Schema(
                    required: ['asset_id'],
                    properties: [
                        new OA\Property(property: 'asset_id', type: 'integer', example: 1),
                        new OA\Property(property: 'inspection_log_id', type: 'integer', example: null),
                        new OA\Property(property: 'ledger_event_id', type: 'integer', example: null),
                        new OA\Property(property: 'file', type: 'string', format: 'binary'),
                    ]
                )
            )
        ),
        responses: [
            new OA\Response(
                response: 201,
                description: 'Attachment uploaded successfully'
            ),
            new OA\Response(
                response: 400,
                description: 'File type or size validation error'
            ),
            new OA\Response(
                response: 404,
                description: 'Asset not found'
            ),
            new OA\Response(
                response: 401,
                description: 'Unauthorized'
            ),
        ]
    )]
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'asset_id' => 'required|integer|exists:assets,id',
            'inspection_log_id' => 'nullable|integer|exists:inspections,id',
            'incident_id' => 'nullable|integer|exists:incidents,id',
            'ledger_event_id' => 'nullable|integer|exists:ledgers,id',
            'file' => 'required|file|max:5120', // 5MB max
        ]);

        $asset = Asset::find($validated['asset_id']);
        if (! $asset) {
            return $this->notFound('Asset', $validated['asset_id']);
        }

        if (! empty($validated['incident_id']) && ! Incident::whereKey($validated['incident_id'])->where('asset_id', $asset->id)->exists()) {
            return $this->error('Incident does not belong to this asset', 422);
        }

        $file = $request->file('file');
        $fileType = $file->getMimeType();
        $fileName = $file->getClientOriginalName();
        $fileSize = $file->getSize();

        // Validate file type
        $allowedImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
        $allowedDocumentTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

        if (! in_array($fileType, $allowedImageTypes) && ! in_array($fileType, $allowedDocumentTypes)) {
            return $this->error('Invalid file type. Allowed: images (.jpg, .jpeg, .png, .gif, .webp) and documents (.pdf, .docx)', 400);
        }

        // Determine file size limit (800KB for mobile, 5MB for desktop)
        $maxSize = in_array($fileType, $allowedImageTypes) ? 800 * 1024 : 5 * 1024 * 1024;

        if ($fileSize > $maxSize) {
            return $this->error('File too large. Maximum: '.($maxSize / 1024 / 1024).'MB', 400);
        }

        // Store file
        $filePath = $file->store('attachments', 'private');

        // Compress image if needed
        if (in_array($fileType, $allowedImageTypes)) {
            $filePath = $this->imageService->compress($filePath, $maxSize);
        }

        // Create attachment record
        $attachment = Attachment::create([
            'asset_id' => $asset->id,
            'user_id' => $request->user()?->id,
            'inspection_log_id' => $validated['inspection_log_id'] ?? null,
            'incident_id' => $validated['incident_id'] ?? null,
            'ledger_event_id' => $validated['ledger_event_id'] ?? null,
            'file_path' => $filePath,
            'file_name' => $fileName,
            'file_size' => $fileSize,
            'file_type' => $fileType,
        ]);

        return $this->created('Attachment uploaded successfully', $attachment->id);
    }

    #[OA\Get(
        path: '/api/attachments',
        summary: 'List attachments',
        description: 'Get all attachments for the authenticated user or a specific asset',
        tags: ['Attachments'],
        security: [['bearerAuth' => []]],
        parameters: [
            new OA\Parameter(name: 'asset_id', in: 'query', required: false, schema: new OA\Schema(type: 'integer')),
            new OA\Parameter(name: 'page', in: 'query', required: false, schema: new OA\Schema(type: 'integer', default: 1)),
            new OA\Parameter(name: 'limit', in: 'query', required: false, schema: new OA\Schema(type: 'integer', default: 20)),
        ],
        responses: [
            new OA\Response(
                response: 200,
                description: 'List of attachments'
            ),
            new OA\Response(
                response: 401,
                description: 'Unauthorized'
            ),
        ]
    )]
    public function index(Request $request): JsonResponse
    {
        $userId = $request->user()->id;
        $assetId = $request->input('asset_id');
        $page = $request->input('page', 1);
        $limit = $request->input('limit', 20);

        $offset = ($page - 1) * $limit;

        $query = Attachment::query()
            ->where('user_id', $userId)
            ->with(['asset', 'inspectionLog', 'ledgerEvent']);

        if ($assetId) {
            $query->where('asset_id', $assetId);
        }

        $attachments = $query->skip($offset)->take($limit)->get()->map(function ($attachment) {
            return [
                'id' => $attachment->id,
                'asset_id' => $attachment->asset_id,
                'asset_name' => $attachment->asset->name ?? null,
                'inspection_log_id' => $attachment->inspection_log_id,
                'ledger_event_id' => $attachment->ledger_event_id,
                'file_path' => $attachment->file_path,
                'file_name' => $attachment->file_name,
                'file_size' => $attachment->file_size,
                'file_type' => $attachment->file_type,
                'is_image' => $attachment->isImage(),
                'created_at' => $attachment->created_at->toDateTimeString(),
            ];
        })->toArray();

        $total = $query->count();
        $totalPages = $total > 0 ? (int) ceil($total / $limit) : 0;

        return $this->success([
            'items' => $attachments,
            'pagination' => [
                'total' => $total,
                'page' => (int) $page,
                'limit' => (int) $limit,
                'total_pages' => $totalPages,
            ],
        ]);
    }

    #[OA\Get(
        path: '/api/attachments/{attachment}',
        summary: 'Get attachment by ID',
        description: 'Download or view an attachment',
        tags: ['Attachments'],
        security: [['bearerAuth' => []]],
        parameters: [
            new OA\Parameter(name: 'attachment', in: 'path', required: true, schema: new OA\Schema(type: 'integer')),
        ],
        responses: [
            new OA\Response(
                response: 200,
                description: 'Attachment details',
                headers: [
                    new OA\Header(header: 'Content-Type', description: 'File MIME type', schema: new OA\Schema(type: 'string')),
                    new OA\Header(header: 'Content-Disposition', description: 'Inline or attachment', schema: new OA\Schema(type: 'string')),
                ]
            ),
            new OA\Response(
                response: 404,
                description: 'Attachment not found'
            ),
            new OA\Response(
                response: 401,
                description: 'Unauthorized'
            ),
        ]
    )]
    public function show(Request $request, $id): JsonResponse|BinaryFileResponse
    {
        $attachment = Attachment::with(['asset'])->find($id);

        if (! $attachment) {
            return $this->notFound('Attachment', $id);
        }

        // Check ownership
        if ($attachment->user_id !== $request->user()->id) {
            return $this->forbidden('You do not have permission to view this attachment');
        }

        $filePath = storage_path('app/'.$attachment->file_path);

        if (! file_exists($filePath)) {
            return $this->error('File not found on server', 404);
        }

        return response()->file($filePath, [
            'Content-Type' => $attachment->file_type,
            'Content-Disposition' => 'inline; filename="'.$attachment->file_name.'"',
        ]);
    }

    #[OA\Delete(
        path: '/api/attachments/{attachment}',
        summary: 'Delete attachment',
        description: 'Delete an attachment',
        tags: ['Attachments'],
        security: [['bearerAuth' => []]],
        parameters: [
            new OA\Parameter(name: 'attachment', in: 'path', required: true, schema: new OA\Schema(type: 'integer')),
        ],
        responses: [
            new OA\Response(
                response: 200,
                description: 'Attachment deleted successfully'
            ),
            new OA\Response(
                response: 404,
                description: 'Attachment not found'
            ),
            new OA\Response(
                response: 401,
                description: 'Unauthorized'
            ),
        ]
    )]
    public function destroy(Request $request, $id): JsonResponse
    {
        $attachment = Attachment::find($id);

        if (! $attachment) {
            return $this->notFound('Attachment', $id);
        }

        // Check ownership
        if ($attachment->user_id !== $request->user()->id) {
            return $this->forbidden('You do not have permission to delete this attachment');
        }

        // Delete file
        $filePath = storage_path('app/'.$attachment->file_path);
        if (file_exists($filePath)) {
            unlink($filePath);
        }

        $attachment->delete();

        return $this->success(['message' => 'Attachment deleted successfully']);
    }
}
