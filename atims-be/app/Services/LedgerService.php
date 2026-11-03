<?php

namespace App\Services;

use App\Models\Ledger;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

/**
 * Ledger Service for Immutable Audit Trail
 * Implements Requirement 5 - Anti-Corruption Ledger
 */
class LedgerService
{
    /**
     * Record a ledger entry for any database change
     *
     * @param  string  $eventType  Type of event (Status Change, Asset Update, Location Drift Anomaly, Repair Closure, Other)
     * @param  string  $tableName  Name of the table affected
     * @param  int  $recordId  ID of the record affected
     * @param  array  $oldData  Previous state of the record
     * @param  array  $newData  New state of the record
     * @param  int|null  $userId  ID of the user who made the change, if authenticated
     * @param  Request|null  $request  Request object for IP and device detection
     */
    public function recordEvent(
        string $eventType,
        string $tableName,
        int $recordId,
        array $oldData,
        array $newData,
        ?int $userId,
        ?Request $request = null
    ): Ledger {
        $ipAddress = $request ? $request->ip() : null;
        $deviceType = $this->getDeviceType($request);

        return Ledger::record(
            $eventType,
            $tableName,
            $recordId,
            $oldData,
            $newData,
            $userId,
            $ipAddress,
            $deviceType
        );
    }

    /**
     * Detect device type from request
     */
    private function getDeviceType(?Request $request): ?string
    {
        if (! $request) {
            return null;
        }

        $userAgent = $request->header('User-Agent', '');

        if (str_contains($userAgent, 'Mobile') || str_contains($userAgent, 'Android') || str_contains($userAgent, 'iPhone')) {
            return 'mobile';
        }

        if (str_contains($userAgent, 'iPad') || str_contains($userAgent, 'Tablet')) {
            return 'tablet';
        }

        return 'desktop';
    }

    /**
     * Get ledger entries for a specific record
     */
    public function getEntriesForRecord(string $tableName, int $recordId): array
    {
        return Ledger::forRecord($tableName, $recordId)
            ->orderBy('created_at', 'desc')
            ->get()
            ->toArray();
    }

    /**
     * Get recent ledger entries (for audit dashboard)
     */
    public function getRecentEntries(int $limit = 50): array
    {
        return Ledger::orderBy('created_at', 'desc')
            ->take($limit)
            ->get()
            ->toArray();
    }

    /**
     * Get drift anomaly entries
     */
    public function getDriftAnomalies(int $limit = 20): array
    {
        return Ledger::driftAnomalies()
            ->orderBy('created_at', 'desc')
            ->take($limit)
            ->get()
            ->toArray();
    }

    /**
     * Get all status changes for an asset
     */
    public function getStatusChangesForAsset(int $assetId): array
    {
        return Ledger::forRecord('assets', $assetId)
            ->statusChanges()
            ->orderBy('created_at', 'desc')
            ->get()
            ->toArray();
    }

    /**
     * Get repair closures for an asset
     */
    public function getRepairClosuresForAsset(int $assetId): array
    {
        return Ledger::forRecord('assets', $assetId)
            ->repairClosures()
            ->orderBy('created_at', 'desc')
            ->get()
            ->toArray();
    }

    /**
     * Check if an asset has had a status change by a specific user
     */
    public function hasStatusChangedByUser(int $assetId, int $userId): bool
    {
        return Ledger::forRecord('assets', $assetId)
            ->statusChanges()
            ->where('user_id', $userId)
            ->exists();
    }

    /**
     * Calculate capital at risk from broken-down assets
     */
    public function calculateCapitalAtRisk(): float
    {
        // Get all assets with 'En Panne' status
        $assets = DB::table('assets')
            ->where('current_status', 'En Panne')
            ->sum('current_value');

        return (float) $assets;
    }

    /**
     * Calculate operational health rate
     */
    public function calculateOperationalHealthRate(): float
    {
        $total = DB::table('assets')->count();
        $functional = DB::table('assets')
            ->where('current_status', 'Fonctionnel')
            ->count();

        if ($total === 0) {
            return 0.0;
        }

        return round(($functional / $total) * 100, 1);
    }

    /**
     * Record location drift anomaly
     */
    public function recordDriftAnomaly(
        int $assetId,
        float $inspectionLat,
        float $inspectionLon,
        float $assetLat,
        float $assetLon,
        float $distanceKm
    ): Ledger {
        $ledger = Ledger::record(
            'Location Drift Anomaly',
            'assets',
            $assetId,
            [],
            [
                'inspection_latitude' => $inspectionLat,
                'inspection_longitude' => $inspectionLon,
                'asset_latitude' => $assetLat,
                'asset_longitude' => $assetLon,
                'distance_km' => $distanceKm,
                'threshold_km' => 2.0,
                'breach' => true,
            ],
            auth()->id() ?? 0
        );

        return $ledger;
    }

    /**
     * Record repair closure
     */
    public function recordRepairClosure(
        int $assetId,
        float $distanceKm,
        int $userId
    ): Ledger {
        $ledger = Ledger::record(
            'Repair Closure',
            'assets',
            $assetId,
            ['status' => 'En Panne'],
            ['status' => 'Fonctionnel'],
            $userId,
            request()->ip() ?? null,
            $this->getDeviceType(request())
        );

        return $ledger;
    }
}
