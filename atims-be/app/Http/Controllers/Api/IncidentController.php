<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Asset;
use App\Models\Incident;
use App\Models\IncidentActivity;
use App\Models\Ledger;
use App\Models\TaskQueue;
use App\Models\User;
use App\Services\HaversineService;
use App\Services\LedgerService;
use DB;
use Illuminate\Database\Eloquent\Builder;
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
    public function index(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'page' => 'sometimes|integer|min:1',
            'limit' => 'sometimes|integer|min:1|max:100',
            'search' => 'sometimes|string|max:255',
            'include_history' => 'sometimes|boolean',
        ]);
        $query = Incident::query()->with(['asset', 'assignedUser']);
        if (! ($validated['include_history'] ?? false)) {
            $query->whereIn('status', ['open', 'pending_forensic_clearance']);
        }
        if (! empty($validated['search'])) {
            $term = $validated['search'];
            $query->where(function (Builder $query) use ($term) {
                $query->where('field_notes', 'like', "%{$term}%")
                    ->orWhereHas('asset', function (Builder $assetQuery) use ($term) {
                        $assetQuery->where('state_id', 'like', "%{$term}%")
                            ->orWhere('name', 'like', "%{$term}%");
                    });
            });
        }
        $page = $query->latest()->paginate($validated['limit'] ?? 10, ['*'], 'page', $validated['page'] ?? 1);

        return $this->success([
            'items' => $page->getCollection()->map(fn (Incident $incident) => [
                'id' => $incident->id,
                'asset_id' => $incident->asset_id,
                'state_id' => $incident->asset?->state_id ?? '',
                'asset_name' => $incident->asset?->name ?? 'Deleted asset',
                'field_notes' => $incident->field_notes,
                'status' => $incident->status,
                'reported_at' => $incident->created_at?->toISOString(),
                'resolved_at' => $incident->resolved_at?->toISOString(),
                'resolution_notes' => $incident->resolution_notes,
                'assigned_user_id' => $incident->assigned_user_id,
                'assigned_user_name' => $incident->assignedUser?->name,
            ])->values(),
            'pagination' => [
                'total' => $page->total(), 'page' => $page->currentPage(),
                'limit' => $page->perPage(), 'total_pages' => $page->lastPage(),
            ],
        ]);
    }

    public function log(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'qr_code_data' => 'required|string',
            'field_notes' => 'required|string|max:1000',
            'device_latitude' => 'nullable|numeric|between:-90,90',
            'device_longitude' => 'nullable|numeric|between:-180,180',
            'device_timestamp' => 'nullable|date',
        ]);
        $asset = Asset::where('state_id', $validated['qr_code_data'])->first();
        if (! $asset) {
            return $this->notFound('Asset', $validated['qr_code_data']);
        }

        $incident = DB::transaction(function () use ($request, $validated, $asset) {
            $incident = Incident::create([
                'asset_id' => $asset->id,
                'reported_by' => $request->user()?->id,
                'field_notes' => $validated['field_notes'],
                'status' => 'open',
                'device_latitude' => $validated['device_latitude'] ?? null,
                'device_longitude' => $validated['device_longitude'] ?? null,
                'device_timestamp' => $validated['device_timestamp'] ?? null,
            ]);
            TaskQueue::create([
                'task_type' => 'Incident Assignment',
                'incident_id' => $incident->id,
                'asset_id' => $asset->id,
                'assigned_user_id' => null,
                'status' => 'Pending',
            ]);
            $oldStatus = $asset->current_status;
            $asset->update(['current_status' => 'En Panne']);
            $this->ledgerService->recordEvent(
                'Status Change', 'assets', $asset->id,
                ['current_status' => $oldStatus], ['current_status' => 'En Panne'],
                $request->user()?->id, $request
            );

            return $incident;
        });

        return $this->created('Incident logged successfully', $asset->id, [
            'asset_id' => $asset->id,
            'incident_id' => $incident->id,
            'new_status' => 'En Panne',
            'capital_at_risk' => $this->ledgerService->calculateCapitalAtRisk(),
        ]);
    }

    public function assign(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'incident_ids' => 'required|array|min:1|max:100',
            'incident_ids.*' => 'required|integer|distinct|exists:incidents,id',
            'assigned_user_id' => 'required|integer|exists:users,id',
        ]);

        $agent = User::query()->where('role', 'Field Agent')->find($validated['assigned_user_id']);
        if (!$agent) {
            return $this->error('The selected user is not a Field Agent', 422);
        }

        $incidents = Incident::query()
            ->whereIn('id', $validated['incident_ids'])
            ->whereIn('status', ['open', 'pending_forensic_clearance'])
            ->get();
        if ($incidents->count() !== count($validated['incident_ids'])) {
            return $this->error('One or more incidents are no longer open for assignment', 422);
        }

        DB::transaction(function () use ($incidents, $agent, $request) {
            foreach ($incidents as $incident) {
                $incident->update([
                    'assigned_user_id' => $agent->id,
                    'assigned_by_user_id' => $request->user()?->id,
                ]);

                $task = $incident->task;
                if (!$task) {
                    $task = TaskQueue::globalQueue()
                        ->where('task_type', 'Incident Assignment')
                        ->where('asset_id', $incident->asset_id)
                        ->whereNull('incident_id')
                        ->oldest()
                        ->first();
                }
                if (!$task) {
                    $task = new TaskQueue([
                        'task_type' => 'Incident Assignment',
                        'asset_id' => $incident->asset_id,
                        'status' => 'Pending',
                    ]);
                }
                $task->incident_id = $incident->id;
                $task->asset_id = $incident->asset_id;
                $task->save();
                $task->assignTo($agent->id);
                IncidentActivity::create([
                    'incident_id' => $incident->id,
                    'user_id' => $request->user()?->id,
                    'entry_type' => 'assignment',
                    'body' => 'Assigned to '.$agent->name,
                ]);
            }
        });

        return $this->success([
            'message' => 'Incidents assigned successfully',
            'assigned_count' => $incidents->count(),
            'assigned_user_id' => $agent->id,
            'assigned_user_name' => $agent->name,
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
            'incident_id' => 'sometimes|integer|exists:incidents,id',
            'qr_code_data' => 'required|string',
            'field_notes' => 'required|string|max:1000',
            'device_latitude' => 'required|numeric|between:-90,90',
            'device_longitude' => 'required|numeric|between:-180,180',
            'device_timestamp' => 'required|date',
        ]);
        $asset = Asset::where('state_id', $validated['qr_code_data'])->first();
        if (! $asset) {
            return $this->notFound('Asset', $validated['qr_code_data']);
        }
        $incident = isset($validated['incident_id'])
            ? Incident::where('asset_id', $asset->id)->find($validated['incident_id'])
            : Incident::where('asset_id', $asset->id)->whereIn('status', ['open', 'pending_forensic_clearance'])->latest()->first();
        if (! $incident || ! in_array($incident->status, ['open', 'pending_forensic_clearance'], true)) {
            return $this->error('No open incident was found for this asset', 404);
        }

        $distanceKm = $this->haversineService->calculateDistance(
            (float) $asset->latitude, (float) $asset->longitude,
            (float) $validated['device_latitude'], (float) $validated['device_longitude']
        );
        $incident->forceFill([
            'device_latitude' => $validated['device_latitude'],
            'device_longitude' => $validated['device_longitude'],
            'device_timestamp' => $validated['device_timestamp'],
        ])->save();

        if ($this->haversineService->isGeofenceBreach($distanceKm)) {
            $this->ledgerService->recordDriftAnomaly(
                $asset->id, (float) $validated['device_latitude'], (float) $validated['device_longitude'],
                (float) $asset->latitude, (float) $asset->longitude, $distanceKm
            );
            // Asset status is constrained to the values accepted by AssetController.
            // Keep the asset out of service; the incident record carries the review state.
            $asset->update(['current_status' => 'En Panne']);
            $incident->update(['status' => 'pending_forensic_clearance', 'resolution_notes' => $validated['field_notes']]);
            IncidentActivity::create([
                'incident_id' => $incident->id,
                'user_id' => $request->user()?->id,
                'entry_type' => 'status',
                'body' => 'Location review required: GPS reading was '.round($distanceKm, 2).' km from the registered asset location.',
            ]);

            return $this->error('Location Drift Anomaly', 403, [
                'distance_km' => $distanceKm,
                'threshold_km' => HaversineService::GEOFENCE_THRESHOLD_KM,
                'message' => 'GPS coordinates exceed '.HaversineService::GEOFENCE_THRESHOLD_KM.'km threshold. The incident is pending forensic clearance.',
            ]);
        }

        $asset->update(['current_status' => 'Fonctionnel']);
        $ledgerEntry = $this->ledgerService->recordRepairClosure($asset->id, $distanceKm, $request->user()?->id);
        $incident->update([
            'status' => 'resolved',
            'resolution_notes' => $validated['field_notes'],
            'resolved_by' => $request->user()?->id,
            'resolved_at' => now(),
        ]);
        $incident->task?->complete();

        return $this->success([
            'status' => 'Fonctionnel', 'incident_id' => $incident->id,
            'ledger_entry_id' => $ledgerEntry->id, 'distance_from_base_km' => $distanceKm,
            'message' => 'Incident resolved and asset restored to Fonctionnel status',
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

        if (! $asset) {
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
        $ledgers = Ledger::forRecord('assets', $assetId)
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
