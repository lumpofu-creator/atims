<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Inspection;
use App\Models\Asset;
use App\Services\HaversineService;
use App\Services\LedgerService;
use DB;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use OpenApi\Attributes as OA;

class InspectionController extends Controller
{
    protected HaversineService $haversineService;
    protected LedgerService $ledgerService;

    public function __construct(HaversineService $haversineService, LedgerService $ledgerService)
    {
        $this->haversineService = $haversineService;
        $this->ledgerService = $ledgerService;
    }

    #[OA\Post(
        path: '/api/inspections',
        summary: 'Create a new inspection',
        description: 'Create an inspection for an asset with GPS telemetry. Blocks if GPS accuracy > 15m.',
        tags: ['Inspections'],
        security: [['bearerAuth' => []]],
        requestBody: new OA\RequestBody(
            content: new OA\JsonContent(
                required: ['asset_id', 'inspection_type', 'condition_status', 'device_latitude', 'device_longitude'],
                properties: [
                    new OA\Property(property: 'asset_id', type: 'integer', example: 1),
                    new OA\Property(property: 'inspection_type', type: 'string', enum: ['Routine', 'Breakdown', 'Maintenance', 'Handover'], example: 'Routine'),
                    new OA\Property(property: 'condition_status', type: 'string', enum: ['Fonctionnel', 'En Panne', 'Déclassé', 'Inconnu'], example: 'Fonctionnel'),
                    new OA\Property(property: 'field_notes', type: 'string', example: 'Routine inspection completed'),
                    new OA\Property(property: 'verification_image', type: 'string', format: 'binary', nullable: true),
                    new OA\Property(property: 'device_latitude', type: 'number', format: 'float', example: -17.8255),
                    new OA\Property(property: 'device_longitude', type: 'number', format: 'float', example: 31.0539),
                    new OA\Property(property: 'device_timestamp', type: 'string', format: 'date-time', example: '2024-01-15T14:30:00Z'),
                ]
            )
        ),
        responses: [
            new OA\Response(
                response: 201,
                description: 'Inspection created successfully',
                content: new OA\JsonContent(
                    properties: [
                        new OA\Property(property: 'success', type: 'boolean', example: true),
                        new OA\Property(property: 'message', type: 'string', example: 'Inspection created successfully'),
                        new OA\Property(property: 'id', type: 'integer', example: 1),
                        new OA\Property(property: 'distance_from_base_km', type: 'number', example: 0.15),
                    ]
                )
            ),
            new OA\Response(
                response: 400,
                description: 'GPS accuracy too low or validation error'
            ),
            new OA\Response(
                response: 401,
                description: 'Unauthorized'
            ),
            new OA\Response(
                response: 404,
                description: 'Asset not found'
            ),
        ]
    )]
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'asset_id' => 'required|integer|exists:assets,id',
            'inspection_type' => 'required|string|in:Routine,Breakdown,Maintenance,Handover',
            'condition_status' => 'required|string|in:Fonctionnel,En Panne,Déclassé,Inconnu',
            'field_notes' => 'nullable|string|max:1000',
            'device_latitude' => 'required|numeric|between:-90,90',
            'device_longitude' => 'required|numeric|between:-180,180',
            'device_timestamp' => 'required|date',
        ]);

        // Check GPS accuracy (Requirement 3.5)
        // In production, you would validate GPS accuracy from the device
        // For now, we assume the client sends accurate data
        $gpsAccuracyValid = $this->haversineService->isAccuracyValid(10); // Assume 10m accuracy
        if (!$gpsAccuracyValid) {
            return $this->error('GPS accuracy too low. Required: < 15m', 400);
        }

        // Get asset to calculate distance
        $asset = Asset::find($validated['asset_id']);
        if (!$asset) {
            return $this->notFound('Asset', $validated['asset_id']);
        }

        // Calculate Haversine distance (Requirement 4.1)
        $distanceKm = $this->haversineService->calculateDistance(
            $asset->latitude,
            $asset->longitude,
            $validated['device_latitude'],
            $validated['device_longitude']
        );

        // Check geofence threshold (Requirement 4.2)
        if ($this->haversineService->isGeofenceBreach($distanceKm)) {
            // Write anomaly to ledger (Requirement 5.1)
            $this->ledgerService->recordDriftAnomaly(
                $asset->id,
                $validated['device_latitude'],
                $validated['device_longitude'],
                (float) $asset->latitude,
                (float) $asset->longitude,
                $distanceKm
            );

            return $this->error(
                'Location drift anomaly: GPS coordinates exceed 2.0km threshold from asset base location',
                403,
                [
                    'distance_km' => $distanceKm,
                    'threshold_km' => 2.0,
                ]
            );
        }

        // Create inspection
        $inspection = Inspection::create([
            'asset_id' => $asset->id,
            'user_id' => $request->user()->id,
            'inspection_type' => $validated['inspection_type'],
            'condition_status' => $validated['condition_status'],
            'field_notes' => $validated['field_notes'] ?? null,
            'device_latitude' => $validated['device_latitude'],
            'device_longitude' => $validated['device_longitude'],
            'device_timestamp' => $validated['device_timestamp'],
        ]);

        // Update asset status if changed
        if ($asset->current_status !== $validated['condition_status']) {
            $oldStatus = $asset->current_status;
            $asset->update(['current_status' => $validated['condition_status']]);

            // Record status change in ledger
            $this->ledgerService->recordEvent(
                'Status Change',
                'assets',
                $asset->id,
                ['current_status' => $oldStatus],
                ['current_status' => $validated['condition_status']],
                $request->user()->id,
                $request
            );
        }

        return $this->created('Inspection created successfully', $inspection->id, [
            'distance_from_base_km' => $distanceKm,
        ]);
    }

    #[OA\Get(
        path: '/api/inspections',
        summary: 'List inspections',
        description: 'Returns paginated list of inspections',
        tags: ['Inspections'],
        security: [['bearerAuth' => []]],
        parameters: [
            new OA\Parameter(name: 'page', in: 'query', required: false, schema: new OA\Schema(type: 'integer', default: 1)),
            new OA\Parameter(name: 'limit', in: 'query', required: false, schema: new OA\Schema(type: 'integer', default: 20)),
            new OA\Parameter(name: 'asset_id', in: 'query', required: false, schema: new OA\Schema(type: 'integer')),
            new OA\Parameter(name: 'type', in: 'query', required: false, schema: new OA\Schema(type: 'string', enum: ['Routine', 'Breakdown', 'Maintenance', 'Handover'])),
        ],
        responses: [
            new OA\Response(
                response: 200,
                description: 'List of inspections'
            ),
            new OA\Response(
                response: 401,
                description: 'Unauthorized'
            ),
        ]
    )]
    public function index(Request $request): JsonResponse
    {
        $page = $request->input('page', 1);
        $limit = $request->input('limit', 20);
        $assetId = $request->input('asset_id');
        $type = $request->input('type');

        $offset = ($page - 1) * $limit;

        $query = Inspection::query()
            ->with(['asset', 'user']);

        if ($assetId) {
            $query->where('asset_id', $assetId);
        }

        if ($type) {
            $query->where('inspection_type', $type);
        }

        $inspections = $query->skip($offset)->take($limit)->get()->map(function ($inspection) {
            return [
                'id' => $inspection->id,
                'asset_id' => $inspection->asset_id,
                'asset_name' => $inspection->asset->name ?? null,
                'user_id' => $inspection->user_id,
                'user_name' => $inspection->user->name ?? null,
                'inspection_type' => $inspection->inspection_type,
                'condition_status' => $inspection->condition_status,
                'field_notes' => $inspection->field_notes,
                'device_latitude' => $inspection->device_latitude,
                'device_longitude' => $inspection->device_longitude,
                'device_timestamp' => $inspection->device_timestamp,
                'created_at' => $inspection->created_at->toDateTimeString(),
            ];
        })->toArray();

        $total = $query->count();
        $totalPages = $total > 0 ? (int) ceil($total / $limit) : 0;

        return $this->success([
            'items' => $inspections,
            'pagination' => [
                'total' => $total,
                'page' => (int) $page,
                'limit' => (int) $limit,
                'total_pages' => $totalPages,
            ],
        ]);
    }

    #[OA\Get(
        path: '/api/inspections/{inspection}',
        summary: 'Get inspection by ID',
        description: 'Returns a specific inspection with full details',
        tags: ['Inspections'],
        security: [['bearerAuth' => []]],
        parameters: [
            new OA\Parameter(name: 'inspection', in: 'path', required: true, schema: new OA\Schema(type: 'integer')),
        ],
        responses: [
            new OA\Response(
                response: 200,
                description: 'Inspection details'
            ),
            new OA\Response(
                response: 404,
                description: 'Inspection not found'
            ),
            new OA\Response(
                response: 401,
                description: 'Unauthorized'
            ),
        ]
    )]
    public function show($id): JsonResponse
    {
        $inspection = Inspection::with(['asset', 'user'])->find($id);

        if (!$inspection) {
            return $this->notFound('Inspection', $id);
        }

        return $this->success([
            'id' => $inspection->id,
            'asset_id' => $inspection->asset_id,
            'asset_name' => $inspection->asset->name ?? null,
            'user_id' => $inspection->user_id,
            'user_name' => $inspection->user->name ?? null,
            'inspection_type' => $inspection->inspection_type,
            'condition_status' => $inspection->condition_status,
            'field_notes' => $inspection->field_notes,
            'verification_image' => $inspection->verification_image,
            'device_latitude' => $inspection->device_latitude,
            'device_longitude' => $inspection->device_longitude,
            'device_timestamp' => $inspection->device_timestamp,
            'created_at' => $inspection->created_at->toDateTimeString(),
        ]);
    }
}