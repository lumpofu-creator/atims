<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Asset;
use App\Services\LedgerService;
use Illuminate\Http\JsonResponse;
use OpenApi\Attributes as OA;

class DashboardController extends Controller
{
    protected LedgerService $ledgerService;

    public function __construct(LedgerService $ledgerService)
    {
        $this->ledgerService = $ledgerService;
    }

    #[OA\Get(
        path: '/api/dashboards/kpi',
        summary: 'Get real-time KPIs',
        description: 'Get executive dashboard KPI metrics',
        tags: ['Dashboards'],
        security: [['bearerAuth' => []]],
        responses: [
            new OA\Response(
                response: 200,
                description: 'KPI metrics',
                content: new OA\JsonContent(
                    properties: [
                        new OA\Property(property: 'success', type: 'boolean', example: true),
                        new OA\Property(property: 'data', type: 'object', properties: [
                            new OA\Property(property: 'total_portfolio_value', type: 'number', example: 5000000.00),
                            new OA\Property(property: 'operational_health_rate', type: 'number', example: 85.0),
                            new OA\Property(property: 'capital_at_risk', type: 'number', example: 500000.00),
                            new OA\Property(property: 'total_assets', type: 'integer', example: 100),
                            new OA\Property(property: 'functional_assets', type: 'integer', example: 85),
                            new OA\Property(property: 'broken_down_assets', type: 'integer', example: 10),
                            new OA\Property(property: 'declassified_assets', type: 'integer', example: 5),
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
    public function kpi(): JsonResponse
    {
        $totalAssets = Asset::count();
        $functionalAssets = Asset::where('current_status', 'Fonctionnel')->count();
        $brokenDownAssets = Asset::where('current_status', 'En Panne')->count();
        $declassifiedAssets = Asset::where('current_status', 'Déclassé')->count();
        $totalPortfolioValue = Asset::sum('current_value');
        $capitalAtRisk = $this->ledgerService->calculateCapitalAtRisk();

        $healthRate = 0.0;
        if ($totalAssets > 0) {
            $healthRate = round(($functionalAssets / $totalAssets) * 100, 1);
        }

        return $this->success([
            'total_portfolio_value' => $totalPortfolioValue,
            'operational_health_rate' => $healthRate,
            'capital_at_risk' => $capitalAtRisk,
            'total_assets' => $totalAssets,
            'functional_assets' => $functionalAssets,
            'broken_down_assets' => $brokenDownAssets,
            'declassified_assets' => $declassifiedAssets,
        ]);
    }

    #[OA\Get(
        path: '/api/dashboards/map-pins',
        summary: 'Get map pins for dashboard',
        description: 'Get all assets with status for map rendering',
        tags: ['Dashboards'],
        security: [['bearerAuth' => []]],
        responses: [
            new OA\Response(
                response: 200,
                description: 'Map pins data',
                content: new OA\JsonContent(
                    properties: [
                        new OA\Property(property: 'success', type: 'boolean', example: true),
                        new OA\Property(property: 'data', type: 'array', items: new OA\Items(
                            properties: [
                                new OA\Property(property: 'asset_id', type: 'integer'),
                                new OA\Property(property: 'name', type: 'string'),
                                new OA\Property(property: 'status', type: 'string', enum: ['Fonctionnel', 'En Panne', 'Déclassé', 'Inconnu']),
                                new OA\Property(property: 'latitude', type: 'number'),
                                new OA\Property(property: 'longitude', type: 'number'),
                                new OA\Property(property: 'value', type: 'number'),
                            ]
                        )),
                    ]
                )
            ),
            new OA\Response(
                response: 401,
                description: 'Unauthorized'
            ),
        ]
    )]
    public function mapPins(): JsonResponse
    {
        $pins = Asset::select('id', 'name', 'current_status', 'latitude', 'longitude', 'current_value')
            ->get()
            ->map(function ($asset) {
                return [
                    'asset_id' => $asset->id,
                    'name' => $asset->name,
                    'status' => $asset->current_status,
                    'latitude' => $asset->latitude,
                    'longitude' => $asset->longitude,
                    'value' => $asset->current_value,
                ];
            })->toArray();

        return $this->success($pins);
    }

    #[OA\Get(
        path: '/api/dashboards/stale-inspections',
        summary: 'Get assets with stale inspections',
        description: 'Get assets that haven\'t been inspected in the last 90 days',
        tags: ['Dashboards'],
        security: [['bearerAuth' => []]],
        responses: [
            new OA\Response(
                response: 200,
                description: 'Stale inspection report'
            ),
            new OA\Response(
                response: 401,
                description: 'Unauthorized'
            ),
        ]
    )]
    public function staleInspections(): JsonResponse
    {
        $staleAssets = DB::table('assets')
            ->whereDoesntHave('inspections', function ($query) {
                $query->where('created_at', '>=', now()->subDays(90));
            })
            ->get()
            ->map(function ($asset) {
                return [
                    'id' => $asset->id,
                    'state_id' => $asset->state_id,
                    'name' => $asset->name,
                    'last_inspection' => null,
                ];
            })->toArray();

        return $this->success([
            'total' => count($staleAssets),
            'items' => $staleAssets,
        ]);
    }
}