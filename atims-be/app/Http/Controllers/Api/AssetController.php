<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Asset;
use App\Services\HaversineService;
use App\Services\LedgerService;
use DB;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use OpenApi\Attributes as OA;

class AssetController extends Controller
{
    protected HaversineService $haversineService;

    protected LedgerService $ledgerService;

    public function __construct(HaversineService $haversineService, LedgerService $ledgerService)
    {
        $this->haversineService = $haversineService;
        $this->ledgerService = $ledgerService;
    }

    #[OA\Get(
        path: '/api/assets',
        summary: 'List all assets',
        description: 'Returns a paginated list of assets with optional search and filtering',
        tags: ['Assets'],
        security: [['bearerAuth' => []]],
        parameters: [
            new OA\Parameter(name: 'page', in: 'query', required: false, schema: new OA\Schema(type: 'integer', default: 1, minimum: 1)),
            new OA\Parameter(name: 'limit', in: 'query', required: false, schema: new OA\Schema(type: 'integer', default: 20, minimum: 1, maximum: 100)),
            new OA\Parameter(name: 'search', in: 'query', required: false, schema: new OA\Schema(type: 'string')),
            new OA\Parameter(name: 'status', in: 'query', required: false, schema: new OA\Schema(type: 'string', enum: ['Fonctionnel', 'En Panne', 'Déclassé', 'Inconnu'])),
            new OA\Parameter(name: 'category_id', in: 'query', required: false, schema: new OA\Schema(type: 'integer')),
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
                                    new OA\Property(property: 'state_id', type: 'string', example: 'FLEET-000123'),
                                    new OA\Property(property: 'name', type: 'string', example: 'Generator Set'),
                                    new OA\Property(property: 'description', type: 'string', example: 'Main generator set'),
                                    new OA\Property(property: 'current_status', type: 'string', enum: ['Fonctionnel', 'En Panne', 'Déclassé', 'Inconnu'], example: 'Fonctionnel'),
                                    new OA\Property(property: 'latitude', type: 'number', example: -17.8255),
                                    new OA\Property(property: 'longitude', type: 'number', example: 31.0539),
                                    new OA\Property(property: 'category_id', type: 'integer', example: 1),
                                    new OA\Property(property: 'category_name', type: 'string', example: 'Vehicle / Fleet / Car'),
                                    new OA\Property(property: 'current_value', type: 'number', example: 45000.00),
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
    public function index(Request $request): JsonResponse
    {
        $page = $request->input('page', 1);
        $limit = $request->input('limit', 20);
        $search = $request->input('search');
        $status = $request->input('status');
        $categoryId = $request->input('category_id');

        $offset = ($page - 1) * $limit;

        $query = Asset::query()
            ->select('assets.*')
            ->with(['category']);

        if ($search) {
            $query->where(function ($q) use ($search) {
                $q->where('state_id', 'like', "%{$search}%")
                    ->orWhere('name', 'like', "%{$search}%");
            });
        }

        if ($status) {
            $query->where('current_status', $status);
        }

        if ($categoryId) {
            $query->where('category_id', $categoryId);
        }

        $assets = $query->skip($offset)->take($limit)->get()->map(function ($asset) {
            return [
                'id' => $asset->id,
                'state_id' => $asset->state_id,
                'name' => $asset->name,
                'description' => $asset->description,
                'current_status' => $asset->current_status,
                'latitude' => $asset->latitude,
                'longitude' => $asset->longitude,
                'category_id' => $asset->category_id,
                'category_name' => $asset->category ? $asset->category->name : null,
                'current_value' => $asset->current_value,
                'created_at' => $asset->created_at->toDateTimeString(),
            ];
        })->toArray();

        $total = $query->count();
        $totalPages = $total > 0 ? (int) ceil($total / $limit) : 0;

        return $this->success([
            'items' => $assets,
            'pagination' => [
                'total' => $total,
                'page' => (int) $page,
                'limit' => (int) $limit,
                'total_pages' => $totalPages,
            ],
        ]);
    }

    #[OA\Post(
        path: '/api/assets',
        summary: 'Create a new asset',
        description: 'Creates a new asset with full metadata. Spatial POINT is auto-generated from GPS coordinates.',
        tags: ['Assets'],
        security: [['bearerAuth' => []]],
        requestBody: new OA\RequestBody(
            content: new OA\JsonContent(
                required: ['name', 'category_id', 'latitude', 'longitude', 'current_status'],
                properties: [
                    new OA\Property(property: 'state_id', type: 'string', example: 'FLEET-000123'),
                    new OA\Property(property: 'name', type: 'string', example: 'Generator Set'),
                    new OA\Property(property: 'description', type: 'string', example: 'Main generator set'),
                    new OA\Property(property: 'category_id', type: 'integer', example: 1),
                    new OA\Property(property: 'registered_location', type: 'string', example: 'Head Office'),
                    new OA\Property(property: 'latitude', type: 'number', format: 'float', example: -17.8255),
                    new OA\Property(property: 'longitude', type: 'number', format: 'float', example: 31.0539),
                    new OA\Property(property: 'acquisition_date', type: 'string', format: 'date', example: '2024-01-15'),
                    new OA\Property(property: 'purchase_value', type: 'number', format: 'float', example: 50000.00),
                    new OA\Property(property: 'current_value', type: 'number', format: 'float', example: 45000.00),
                    new OA\Property(property: 'current_status', type: 'string', enum: ['Fonctionnel', 'En Panne', 'Déclassé', 'Inconnu'], example: 'Fonctionnel'),
                    new OA\Property(property: 'parent_asset_id', type: 'integer', example: null),
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
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'state_id' => 'nullable|string|unique:assets,state_id',
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'category_id' => 'required|integer|exists:categories,id',
            'registered_location' => 'nullable|string|max:255',
            'latitude' => 'required|numeric|between:-90,90',
            'longitude' => 'required|numeric|between:-180,180',
            'acquisition_date' => 'nullable|date',
            'purchase_value' => 'nullable|numeric|min:0',
            'current_value' => 'nullable|numeric|min:0',
            'current_status' => 'required|string|in:Fonctionnel,En Panne,Déclassé,Inconnu',
            'parent_asset_id' => 'nullable|integer|exists:assets,id',
        ]);

        if (empty($validated['state_id'])) {
            $validated['state_id'] = $this->generateStateId();
        }

        $wkt = sprintf('POINT(%s %s)', $validated['longitude'], $validated['latitude']);
        $validated['location_point'] = DB::raw("ST_PointFromText('{$wkt}', 4326)");

        $asset = Asset::create($validated);

        $this->ledgerService->recordEvent(
            'Other',
            'assets',
            $asset->id,
            [],
            $asset->toArray(),
            $request->user()->id ?? 0,
            $request
        );

        return $this->created('Asset created successfully', $asset->id);
    }

    #[OA\Get(
        path: '/api/assets/{asset}',
        summary: 'Get asset by ID',
        description: 'Returns a specific asset by its ID with full details',
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
                            new OA\Property(property: 'state_id', type: 'string', example: 'FLEET-000123'),
                            new OA\Property(property: 'name', type: 'string', example: 'Generator Set'),
                            new OA\Property(property: 'description', type: 'string', example: 'Main generator set'),
                            new OA\Property(property: 'current_status', type: 'string', example: 'Fonctionnel'),
                            new OA\Property(property: 'latitude', type: 'number', example: -17.8255),
                            new OA\Property(property: 'longitude', type: 'number', example: 31.0539),
                            new OA\Property(property: 'category_id', type: 'integer', example: 1),
                            new OA\Property(property: 'category_name', type: 'string', example: 'Vehicle / Fleet / Car'),
                            new OA\Property(property: 'parent_asset_id', type: 'integer', example: null),
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
    public function show($id): JsonResponse
    {
        $asset = Asset::with(['category'])->find($id);

        if (! $asset) {
            return $this->notFound('Asset', $id);
        }

        $data = [
            'id' => $asset->id,
            'state_id' => $asset->state_id,
            'name' => $asset->name,
            'description' => $asset->description,
            'current_status' => $asset->current_status,
            'latitude' => $asset->latitude,
            'longitude' => $asset->longitude,
            'category_id' => $asset->category_id,
            'category_name' => $asset->category ? $asset->category->name : null,
            'registered_location' => $asset->registered_location,
            'acquisition_date' => $asset->acquisition_date?->toDateString(),
            'purchase_value' => $asset->purchase_value,
            'current_value' => $asset->current_value,
            'parent_asset_id' => $asset->parent_asset_id,
            'created_at' => $asset->created_at->toDateTimeString(),
            'updated_at' => $asset->updated_at->toDateTimeString(),
        ];

        return $this->success($data);
    }

    #[OA\Put(
        path: '/api/assets/{asset}',
        summary: 'Update asset',
        description: 'Updates an existing asset. Records change in audit ledger.',
        tags: ['Assets'],
        security: [['bearerAuth' => []]],
        parameters: [
            new OA\Parameter(name: 'asset', in: 'path', required: true, schema: new OA\Schema(type: 'integer')),
        ],
        requestBody: new OA\RequestBody(
            content: new OA\JsonContent(
                properties: [
                    new OA\Property(property: 'name', type: 'string', example: 'Updated Generator Set'),
                    new OA\Property(property: 'description', type: 'string', example: 'Updated description'),
                    new OA\Property(property: 'current_status', type: 'string', enum: ['Fonctionnel', 'En Panne', 'Déclassé', 'Inconnu'], example: 'En Panne'),
                    new OA\Property(property: 'current_value', type: 'number', format: 'float', example: 40000.00),
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
                        new OA\Property(property: 'message', type: 'string', example: 'Asset updated successfully'),
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
    public function update(Request $request, $id): JsonResponse
    {
        $asset = Asset::find($id);

        if (! $asset) {
            return $this->notFound('Asset', $id);
        }

        $oldData = $asset->toArray();

        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'description' => 'nullable|string',
            'category_id' => 'sometimes|integer|exists:categories,id',
            'current_status' => 'sometimes|string|in:Fonctionnel,En Panne,Déclassé,Inconnu',
            'current_value' => 'sometimes|numeric|min:0',
            'registered_location' => 'nullable|string|max:255',
            'acquisition_date' => 'nullable|date',
            'parent_asset_id' => 'nullable|integer|exists:assets,id',
        ]);

        if ($request->filled('latitude') && $request->filled('longitude')) {
            $validated['latitude'] = $request->input('latitude');
            $validated['longitude'] = $request->input('longitude');
            $wkt = sprintf('POINT(%s %s)', $validated['longitude'], $validated['latitude']);
            $validated['location_point'] = DB::raw("ST_PointFromText('{$wkt}', 4326)");
        }

        $asset->update($validated);

        $this->ledgerService->recordEvent(
            'Status Change',
            'assets',
            $asset->id,
            $oldData,
            $asset->toArray(),
            $request->user()->id ?? 0,
            $request
        );

        return $this->success(['message' => 'Asset updated successfully']);
    }

    #[OA\Delete(
        path: '/api/assets/{asset}',
        summary: 'Delete asset',
        description: 'Soft deletes an asset (does not remove from database - anti-corruption requirement)',
        tags: ['Assets'],
        security: [['bearerAuth' => []]],
        parameters: [
            new OA\Parameter(name: 'asset', in: 'path', required: true, schema: new OA\Schema(type: 'integer')),
        ],
        responses: [
            new OA\Response(
                response: 200,
                description: 'Asset soft deleted successfully',
                content: new OA\JsonContent(
                    properties: [
                        new OA\Property(property: 'success', type: 'boolean', example: true),
                        new OA\Property(property: 'message', type: 'string', example: 'Asset soft deleted successfully'),
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
    public function destroy($id): JsonResponse
    {
        $asset = Asset::find($id);

        if (! $asset) {
            return $this->notFound('Asset', $id);
        }

        $asset->delete();

        return $this->success(['message' => 'Asset soft deleted successfully']);
    }

    /**
     * Generate a unique state ID in format [PREFIX]-[6 DIGITS]
     */
    private function generateStateId(): string
    {
        $prefixes = ['FLEET', 'EQUIP', 'BUILD', 'LAND', 'MACH'];
        $prefix = $prefixes[array_rand($prefixes)];

        $number = DB::table('assets')->max('id') + 1;
        $number = max($number, 1);

        return sprintf('%s-%06d', $prefix, $number);
    }

    /**
     * Search assets by query
     */
    #[OA\Post(
        path: '/api/assets/search',
        summary: 'Search assets',
        description: 'Search assets by state_id, name, or description',
        tags: ['Assets'],
        security: [['bearerAuth' => []]],
        requestBody: new OA\RequestBody(
            content: new OA\JsonContent(
                required: ['query'],
                properties: [
                    new OA\Property(property: 'query', type: 'string', example: 'generator'),
                ]
            )
        ),
        responses: [
            new OA\Response(
                response: 200,
                description: 'Search results',
                content: new OA\JsonContent(
                    properties: [
                        new OA\Property(property: 'success', type: 'boolean', example: true),
                        new OA\Property(property: 'data', type: 'array', items: new OA\Items(
                            properties: [
                                new OA\Property(property: 'id', type: 'integer'),
                                new OA\Property(property: 'state_id', type: 'string'),
                                new OA\Property(property: 'name', type: 'string'),
                                new OA\Property(property: 'current_status', type: 'string'),
                            ]
                        )),
                    ]
                )
            ),
        ]
    )]
    public function search(Request $request): JsonResponse
    {
        $query = $request->input('query');

        if (! $query) {
            return $this->error('Search query is required', 400);
        }

        $assets = Asset::where(function ($q) use ($query) {
            $q->where('state_id', 'like', "%{$query}%")
                ->orWhere('name', 'like', "%{$query}%")
                ->orWhere('description', 'like', "%{$query}%");
        })->select('id', 'state_id', 'name', 'current_status')->get();

        return $this->success($assets);
    }

    /**
     * Get asset summary statistics
     */
    #[OA\Get(
        path: '/api/assets/summary',
        summary: 'Get assets summary',
        description: 'Get summary statistics for all assets',
        tags: ['Assets'],
        security: [['bearerAuth' => []]],
        responses: [
            new OA\Response(
                response: 200,
                description: 'Summary statistics',
                content: new OA\JsonContent(
                    properties: [
                        new OA\Property(property: 'success', type: 'boolean', example: true),
                        new OA\Property(property: 'data', type: 'object', properties: [
                            new OA\Property(property: 'total_assets', type: 'integer', example: 100),
                            new OA\Property(property: 'functional_assets', type: 'integer', example: 85),
                            new OA\Property(property: 'broken_down_assets', type: 'integer', example: 10),
                            new OA\Property(property: 'total_portfolio_value', type: 'number', example: 5000000.00),
                            new OA\Property(property: 'capital_at_risk', type: 'number', example: 500000.00),
                            new OA\Property(property: 'operational_health_rate', type: 'number', example: 85.0),
                        ]),
                    ]
                )
            ),
        ]
    )]
    public function summary(): JsonResponse
    {
        $summary = [
            'total_assets' => Asset::count(),
            'functional_assets' => Asset::where('current_status', 'Fonctionnel')->count(),
            'broken_down_assets' => Asset::where('current_status', 'En Panne')->count(),
            'declassified_assets' => Asset::where('current_status', 'Déclassé')->count(),
            'total_portfolio_value' => Asset::sum('current_value'),
            'capital_at_risk' => Asset::where('current_status', 'En Panne')->sum('current_value'),
            'operational_health_rate' => 0.0,
        ];

        if ($summary['total_assets'] > 0) {
            $summary['operational_health_rate'] = round(
                ($summary['functional_assets'] / $summary['total_assets']) * 100,
                1
            );
        }

        return $this->success($summary);
    }
}
