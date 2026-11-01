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

class IncidentController extends Controller
{
    protected HaversineService $haversineService;
    protected LedgerService $ledgerService;

    public function __construct(HaversineService $haversineService, LedgerService $ledgerService)
    {
        $this->haversineService = $haversineService;
        $this->ledgerService = $ledgerService;
    }

    #[OA\Post(
        path: '/api/incidents/log',
        summary: 'Log incident with QR scan',
        description: 'Log an incident by scanning a QR code. Updates asset status to "En Panne".',
        tags: ['Incidents'],
        security: [['bearerAuth' => []]],
        requestBody: new OA\RequestBody(
            content: new OA\JsonContent(
                required: ['qr_code_data', 'field_notes'],
                properties: [
                    new OA\Property(property: 'qr_code_data', type: 'string', example: 'FLEET-000123'),
                    new OA\Property(property: 'field_notes', type: 'string', example: 'Visible damage to chassis'),
                    new OA\Property(property: 'defect_image', type: 'string', format: 'binary', nullable: true),
                ]
            )
        ),
        responses: [
            new OA\Response(
                response: 201,
                description: 'Incident logged successfully'
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
    public function log(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'qr_code_data' => 'required|string',
            'field_notes' => 'required|string|max:1000',
            'defect_image' => 'nullable|string',
        ]);

        // Find asset by state_id (from QR code)
        $asset = Asset::where('state_id', $validated['qr_code_data'])->first();

        if (!$asset) {
            return $this->notFound('Asset', $validated['qr_code_data']);
        }

        // Update asset status to "En Panne"
        $oldStatus = $asset->current_status;
        $asset->update(['current_status' => 'En Panne']);

        // Record status change in ledger
        $this->ledgerService->recordEvent(
            'Status Change',
            'assets',
            $asset->id,
            ['current_status' => $oldStatus],
            ['current_status' => 'En Panne'],
            $request->user()->id,
            $request
        );

        return $this->created('Incident logged successfully', $asset->id, [
            'asset_id' => $asset->id,
            'new_status' => 'En Panne',
            'capital_at_risk' => $this->ledgerService->calculateCapitalAtRisk(),
        ]);
    }

    #[OA\Post(
        path: '/api/incidents/verify',
        summary: 'Verify repair with GPS',
        description: 'Verify a repair by rescanning the asset. Performs Haversine distance check.',
        tags: ['Incidents'],
        security: [['bearerAuth' => []]],
        requestBody: new OA\RequestBody(
            content: new OA\JsonContent(
                required: ['qr_code_data', 'field_notes'],
                properties: [
                    new OA\Property(property: 'qr_code_data', type: 'string', example: 'FLEET-000123'),
                    new OA\Property(property: 'field_notes', type: 'string', example: 'Replaced damaged component'),
                    new OA\Property(property: 'device_latitude', type: 'number', format: 'float', example: -17.8255),
                    new OA\Property(property: 'device_longitude', type: 'number', format: 'float', example: 31.0539),
                    new OA\Property(property: 'device_timestamp', type: 'string', format: 'date-time', example: '2024-01-16T09:15:00Z'),
                ]
            )
        ),
        responses: [
            new OA\Response(
                response: 200,
                description: 'Repair verified successfully'
            ),
            new OA\Response(
                response: 403,
                description: 'Location drift anomaly detected'
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
    public function verify(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'qr_code_data' => 'required|string',
            'field_notes' => 'required|string|max:1000',
            'device_latitude' => 'required|numeric|between:-90,90',
            'device_longitude' => 'required|numeric|between:-180,180',
            'device_timestamp' => 'required|date',
        ]);

        // Find asset by state_id
        $asset = Asset::where('state_id', $validated['qr_code_data'])->first();

        if (!$asset) {
            return $this->notFound('Asset', $validated['qr_code_data']);
        }

        // Calculate Haversine distance
        $distanceKm = $this->haversineService->calculateDistance(
            $asset->latitude,
            $asset->longitude,
            $validated['device_latitude'],
            $validated['device_longitude']
        );

        // Check geofence threshold (Requirement 4.2)
        if ($this->haversineService->isGeofenceBreach($distanceKm)) {
            // Write anomaly to ledger
            $this->ledgerService->recordDriftAnomaly(
                $asset->id,
                $validated['device_latitude'],
                $validated['device_longitude'],
                (float) $asset->latitude,
                (float) $asset->longitude,
                $distanceKm
            );

            // Set status to pending forensic clearance
            $asset->update(['current_status' => 'Pending Forensic Clearance']);

            return $this->error(
                'Location Drift Anomaly',
                403,
                [
                    'distance_km' => $distanceKm,
                    'threshold_km' => 2.0,
                    'ledger_entry_id' => null,
                    'message' => 'GPS coordinates exceed 2.0km threshold. Asset placed in "Pending Forensic Clearance" state.',
                ]
            );
        }

        // Update asset status to "Fonctionnel"
        $oldStatus = $asset->current_status;
        $asset->update(['current_status' => 'Fonctionnel']);

        // Write repair closure ledger entry
        $ledgerEntry = $this->ledgerService->recordRepairClosure(
            $asset->id,
            $distanceKm,
            $request->user()->id
        );

        return $this->success([
            'status' => 'Fonctionnel',
            'ledger_entry_id' => $ledgerEntry->id,
            'distance_from_base_km' => $distanceKm,
            'message' => 'Asset verified and restored to Fonctionnel status',
        ]);
    }

    #[OA\Get(
        path: '/api/incidents/unresolved',
        summary: 'Get unresolved incidents',
        description: 'Get all unresolved incidents (assets in "En Panne" status)',
        tags: ['Incidents'],
        security: [['bearerAuth' => []]],
        responses: [
            new OA\Response(
                response: 200,
                description: 'List of unresolved incidents'
            ),
            new OA\Response(
                response: 401,
                description: 'Unauthorized'
            ),
        ]
    )]
    public function unresolved(Request $request): JsonResponse
    {
        $assets = Asset::where('current_status', 'En Panne')
            ->with(['latestInspection.user', 'latestInspection.asset'])
            ->get()
            ->map(function ($asset) {
                return [
                    'id' => $asset->id,
                    'state_id' => $asset->state_id,
                    'name' => $asset->name,
                    'current_value' => $asset->current_value,
                    'latitude' => $asset->latitude,
                    'longitude' => $asset->longitude,
                    'last_inspection' => $asset->latestInspection ? [
                        'id' => $asset->latestInspection->id,
                        'condition_status' => $asset->latestInspection->condition_status,
                        'field_notes' => $asset->latestInspection->field_notes,
                        'created_at' => $asset->latestInspection->created_at->toDateTimeString(),
                    ] : null,
                ];
            })->toArray();

        return $this->success([
            'total' => count($assets),
            'capital_at_risk' => $this->ledgerService->calculateCapitalAtRisk(),
            'items' => $assets,
        ]);
    }

    #[OA\Get(
        path: '/api/incidents/history/{assetId}',
        summary: 'Get incident history for asset',
        description: 'Get all inspection and ledger history for an asset',
        tags: ['Incidents'],
        security: [['bearerAuth' => []]],
        parameters: [
            new OA\Parameter(name: 'assetId', in: 'path', required: true, schema: new OA\Schema(type: 'integer')),
        ],
        responses: [
            new OA\Response(
                response: 200,
                description: 'Asset incident history'
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
    public function history($assetId): JsonResponse
    {
        $asset = Asset::find($assetId);

        if (!$asset) {
            return $this->notFound('Asset', $assetId);
        }

        // Get inspections
        $inspections = $asset->inspections()
            ->with(['user'])
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(function ($inspection) {
                return [
                    'type' => 'inspection',
                    'id' => $inspection->id,
                    'inspection_type' => $inspection->inspection_type,
                    'condition_status' => $inspection->condition_status,
                    'field_notes' => $inspection->field_notes,
                    'agent' => $inspection->user->name ?? null,
                    'created_at' => $inspection->created_at->toDateTimeString(),
                ];
            })->toArray();

        // Get ledger entries
        $ledgers = \App\Models\Ledger::forRecord('assets', $assetId)
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(function ($ledger) {
                return [
                    'type' => 'ledger',
                    'id' => $ledger->id,
                    'event_type' => $ledger->event_type,
                    'user_id' => $ledger->user_id,
                    'new_data' => $ledger->new_data,
                    'created_at' => $ledger->created_at->toDateTimeString(),
                ];
            })->toArray();

        // Combine and sort
        $history = array_merge($inspections, $ledgers);
        usort($history, function ($a, $b) {
            return strcmp($b['created_at'], $a['created_at']);
        });

        return $this->success([
            'asset_id' => $asset->id,
            'state_id' => $asset->state_id,
            'history' => $history,
            'total_entries' => count($history),
        ]);
    }
}