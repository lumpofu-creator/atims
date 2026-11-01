<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\HaversineService;
use DB;
use Illuminate\Http\Request;
use OpenApi\Attributes as OA;

class AssetController extends Controller
{
    protected HaversineService $haversineService;

    public function __construct(HaversineService $haversineService)
    {
        $this->haversineService = $haversineService;
    }

    #[OA\Get(
        path: '/api/assets',
        summary: 'List all assets',
        description: 'Returns a paginated list of assets',
        tags: ['Assets'],
        security: [['bearerAuth' => []]],
        parameters: [
            new OA\Parameter(name: 'page', in: 'query', required: false, schema: new OA\Schema(type: 'integer', default: 1)),
            new OA\Parameter(name: 'limit', in: 'query', required: false, schema: new OA\Schema(type: 'integer', default: 20)),
        ],
        responses: [
            new OA\Response(
                response: 200,
                description: 'List of assets',
                content: new OA\JsonContent(
                    properties: [
                        new OA\Property(property: 'success', type: 'boolean', example: true),
                        new OA\Property(property: 'data', type: 'object', properties: [
                            new OA\Property(property: 'items', type: 'array', items: new OA\Items(
                                properties: [
                                    new OA\Property(property: 'id', type: 'integer'),
                                    new OA\Property(property: 'name', type: 'string'),
                                    new OA\Property(property: 'state_id', type: 'string'),
                                    new OA\Property(property: 'current_status', type: 'string', enum: ['Fonctionnel', 'En Panne', 'Déclassé', 'Inconnu']),
                                    new OA\Property(property: 'latitude', type: 'number'),
                                    new OA\Property(property: 'longitude', type: 'number'),
                                    new OA\Property(property: 'category_id', type: 'integer'),
                                ]
                            )),
                            new OA\Property(property: 'pagination', type: 'object', properties: [
                                new OA\Property(property: 'total', type: 'integer', example: 10),
                                new OA\Property(property: 'page', type: 'integer', example: 1),
                                new OA\Property(property: 'limit', type: 'integer', example: 20),
                                new OA\Property(property: 'total_pages', type: 'integer', example: 1),
                            ]),
                        ]),
                    ]
                )
            ),
            new OA\Response(
                response: 401,
                description: 'Unauthorized'
            ),
        ]
    )]
    public function index(Request $request)
    {
        $page = $request->input('page', 1);
        $limit = $request->input('limit', 20);
        $offset = ($page - 1) * $limit;

        $assets = DB::table('assets')->skip($offset)->take($limit)->get()->map(function ($asset) {
            return (array) $this->sanitizeUtf8($asset);
        })->toArray();
        $total = DB::table('assets')->count();

        return $this->success([
            'items' => $assets,
            'pagination' => [
                'total' => $total,
                'page' => (int) $page,
                'limit' => (int) $limit,
                'total_pages' => $total > 0 ? (int) ceil($total / $limit) : 0,
            ],
        ]);
    }

    private function sanitizeUtf8($data)
    {
        if (is_object($data)) {
            $data = (array) $data;
        }

        if (is_array($data)) {
            return array_map([$this, 'sanitizeUtf8'], $data);
        }

        if (is_string($data)) {
            // Try to detect and convert non-UTF8 strings
            if (!mb_check_encoding($data, 'UTF-8')) {
                // Try converting from Windows-1252 (common on Windows MySQL)
                $converted = mb_convert_encoding($data, 'UTF-8', 'Windows-1252');
                if ($converted !== false) {
                    return $converted;
                }
                // Fallback: remove invalid characters
                return mb_convert_encoding($data, 'UTF-8', 'UTF-8');
            }
            return $data;
        }

        return $data;
    }

    #[OA\Post(
        path: '/api/assets',
        summary: 'Create a new asset',
        description: 'Creates a new asset in the system',
        tags: ['Assets'],
        security: [['bearerAuth' => []]],
        requestBody: new OA\RequestBody(
            content: new OA\JsonContent(
                required: ['name', 'category_id', 'latitude', 'longitude', 'current_status'],
                properties: [
                    new OA\Property(property: 'name', type: 'string', example: 'Generator Set'),
                    new OA\Property(property: 'category_id', type: 'integer', example: 1),
                    new OA\Property(property: 'latitude', type: 'number', format: 'float', example: -17.8255),
                    new OA\Property(property: 'longitude', type: 'number', format: 'float', example: 31.0539),
                    new OA\Property(property: 'current_status', type: 'string', enum: ['Fonctionnel', 'En Panne', 'Déclassé', 'Inconnu'], example: 'Fonctionnel'),
                    new OA\Property(property: 'state_id', type: 'string', nullable: true, example: 'ASSET-001'),
                    new OA\Property(property: 'description', type: 'string', nullable: true, example: 'Main generator set'),
                    new OA\Property(property: 'registered_location', type: 'string', nullable: true, example: 'Head Office'),
                    new OA\Property(property: 'acquisition_date', type: 'string', format: 'date', nullable: true, example: '2024-01-15'),
                    new OA\Property(property: 'purchase_value', type: 'number', format: 'float', nullable: true, example: 50000.00),
                    new OA\Property(property: 'current_value', type: 'number', format: 'float', nullable: true, example: 45000.00),
                ]
            )
        ),
        responses: [
            new OA\Response(
                response: 201,
                description: 'Asset created successfully',
                content: new OA\JsonContent(
                    properties: [
                        new OA\Property(property: 'success', type: 'boolean', example: true),
                        new OA\Property(property: 'message', type: 'string', example: 'Asset created successfully'),
                        new OA\Property(property: 'id', type: 'integer', example: 1),
                    ]
                )
            ),
            new OA\Response(
                response: 400,
                description: 'Validation error'
            ),
            new OA\Response(
                response: 401,
                description: 'Unauthorized'
            ),
        ]
    )]
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'category_id' => 'required|integer',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
            'current_status' => 'required|string|in:Fonctionnel,En Panne,Déclassé,Inconnu',
            'state_id' => 'nullable|string',
            'description' => 'nullable|string',
            'registered_location' => 'nullable|string',
            'acquisition_date' => 'nullable|date',
            'purchase_value' => 'nullable|numeric',
            'current_value' => 'nullable|numeric',
        ]);

        // Example implementation - replace with actual database insert
        return $this->created('Asset created successfully', 1);
    }

    #[OA\Get(
        path: '/api/assets/{asset}',
        summary: 'Get asset by ID',
        description: 'Returns a specific asset by its ID',
        tags: ['Assets'],
        security: [['bearerAuth' => []]],
        parameters: [
            new OA\Parameter(name: 'asset', in: 'path', required: true, schema: new OA\Schema(type: 'integer')),
        ],
        responses: [
            new OA\Response(
                response: 200,
                description: 'Asset details',
                content: new OA\JsonContent(
                    properties: [
                        new OA\Property(property: 'success', type: 'boolean', example: true),
                        new OA\Property(property: 'data', type: 'object', properties: [
                            new OA\Property(property: 'id', type: 'integer', example: 1),
                            new OA\Property(property: 'name', type: 'string', example: 'Generator Set'),
                            new OA\Property(property: 'state_id', type: 'string', example: 'ASSET-001'),
                            new OA\Property(property: 'current_status', type: 'string', example: 'Fonctionnel'),
                            new OA\Property(property: 'latitude', type: 'number', example: -17.8255),
                            new OA\Property(property: 'longitude', type: 'number', example: 31.0539),
                            new OA\Property(property: 'category_id', type: 'integer', example: 1),
                        ]),
                    ]
                )
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
    public function show($id)
    {
        // Example implementation - replace with actual database query
        $asset = []; // Fetch from database

        if (! $asset) {
            return $this->notFound('Asset', $id);
        }

        return $this->success($asset);
    }

    #[OA\Put(
        path: '/api/assets/{asset}',
        summary: 'Update asset',
        description: 'Updates an existing asset',
        tags: ['Assets'],
        security: [['bearerAuth' => []]],
        parameters: [
            new OA\Parameter(name: 'asset', in: 'path', required: true, schema: new OA\Schema(type: 'integer')),
        ],
        requestBody: new OA\RequestBody(
            content: new OA\JsonContent(
                properties: [
                    new OA\Property(property: 'name', type: 'string', example: 'Updated Generator Set'),
                    new OA\Property(property: 'current_status', type: 'string', enum: ['Fonctionnel', 'En Panne', 'Déclassé', 'Inconnu'], example: 'En Panne'),
                ]
            )
        ),
        responses: [
            new OA\Response(
                response: 200,
                description: 'Asset updated successfully',
                content: new OA\JsonContent(
                    properties: [
                        new OA\Property(property: 'success', type: 'boolean', example: true),
                        new OA\Property(property: 'data', type: 'object', properties: [
                            new OA\Property(property: 'message', type: 'string', example: 'Asset updated successfully'),
                        ]),
                    ]
                )
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
    public function update(Request $request, $id)
    {
        // Example implementation - replace with actual database update
        $asset = []; // Fetch from database

        if (! $asset) {
            return $this->notFound('Asset', $id);
        }

        return $this->success(['message' => 'Asset updated successfully']);
    }

    #[OA\Delete(
        path: '/api/assets/{asset}',
        summary: 'Delete asset',
        description: 'Deletes an asset from the system',
        tags: ['Assets'],
        security: [['bearerAuth' => []]],
        parameters: [
            new OA\Parameter(name: 'asset', in: 'path', required: true, schema: new OA\Schema(type: 'integer')),
        ],
        responses: [
            new OA\Response(
                response: 200,
                description: 'Asset deleted successfully',
                content: new OA\JsonContent(
                    properties: [
                        new OA\Property(property: 'success', type: 'boolean', example: true),
                        new OA\Property(property: 'data', type: 'object', properties: [
                            new OA\Property(property: 'message', type: 'string', example: 'Asset deleted successfully'),
                        ]),
                    ]
                )
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
    public function destroy($id)
    {
        // Example implementation - replace with actual database delete
        $asset = []; // Fetch from database

        if (! $asset) {
            return $this->notFound('Asset', $id);
        }

        return $this->success(['message' => 'Asset deleted successfully']);
    }
}
