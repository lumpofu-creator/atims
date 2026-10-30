<?php
declare(strict_types=1);

namespace ATIMS\Services;

use ATIMS\Core\Database;

/**
 * Anti-Corruption Ledger Service
 * Implements Requirement 5 - Append-only immutable audit trail
 */
class LedgerService
{
    private Database $database;
    
    public function __construct()
    {
        $this->database = Database::getInstance();
    }
    
    /**
     * Record an event in the ledger
     * All ledger entries are append-only and immutable
     * 
     * @param string $eventType Event type from enum
     * @param string $tableName Table name where change occurred
     * @param int $recordId ID of affected record
     * @param array|null $oldData Previous state (null for new records)
     * @param array|null $newData New state (null for deletions)
     * @param int $userId User ID who made the change
     * @param string|null $ipAddress Network IP address
     * @param string|null $deviceType Device type (mobile/desktop)
     * @param array|null $metadata Additional event-specific data
     * @return int Ledger entry ID
     */
    public function recordEvent(
        string $eventType,
        string $tableName,
        int $recordId,
        ?array $oldData,
        ?array $newData,
        int $userId,
        ?string $ipAddress = null,
        ?string $deviceType = null,
        ?array $metadata = null
    ): int {
        // Validate event type
        $validEventTypes = [
            'Status Change',
            'Asset Update',
            'Location Drift Anomaly',
            'Repair Closure',
            'Inspection',
            'Other'
        ];
        
        if (!in_array($eventType, $validEventTypes)) {
            throw new \InvalidArgumentException("Invalid event type: $eventType");
        }
        
        // Insert ledger entry
        $sql = "INSERT INTO ledgers 
                (event_type, table_name, record_id, old_data, new_data, user_id, ip_address, device_type, metadata)
                VALUES 
                (:event_type, :table_name, :record_id, :old_data, :new_data, :user_id, :ip_address, :device_type, :metadata)";
        
        $params = [
            'event_type' => $eventType,
            'table_name' => $tableName,
            'record_id' => $recordId,
            'old_data' => $oldData ? json_encode($oldData, JSON_THROW_ON_ERROR) : null,
            'new_data' => $newData ? json_encode($newData, JSON_THROW_ON_ERROR) : null,
            'user_id' => $userId,
            'ip_address' => $ipAddress,
            'device_type' => $deviceType,
            'metadata' => $metadata ? json_encode($metadata, JSON_THROW_ON_ERROR) : null,
        ];
        
        $stmt = $this->database->getConnection()->prepare($sql);
        $stmt->execute($params);
        
        return (int)$this->database->getConnection()->lastInsertId();
    }
    
    /**
     * Record ledger entry for asset status change
     * 
     * @param int $assetId Asset ID
     * @param string $oldStatus Previous status
     * @param string $newStatus New status
     * @param int $userId User ID
     * @param string|null $ipAddress IP address
     * @param string|null $deviceType Device type
     * @param array|null $metadata Additional data
     * @return int Ledger entry ID
     */
    public function recordStatusChange(
        int $assetId,
        string $oldStatus,
        string $newStatus,
        int $userId,
        ?string $ipAddress = null,
        ?string $deviceType = null,
        ?array $metadata = null
    ): int {
        $oldData = ['current_status' => $oldStatus];
        $newData = ['current_status' => $newStatus];
        
        return $this->recordEvent(
            'Status Change',
            'assets',
            $assetId,
            $oldData,
            $newData,
            $userId,
            $ipAddress,
            $deviceType,
            $metadata
        );
    }
    
    /**
     * Record ledger entry for location drift anomaly
     * 
     * @param int $assetId Asset ID
     * @param float $distance Distance from base location
     * @param float $threshold Threshold exceeded
     * @param int $userId User ID
     * @param string|null $ipAddress IP address
     * @param string|null $deviceType Device type
     * @return int Ledger entry ID
     */
    public function recordLocationDrift(
        int $assetId,
        float $distance,
        float $threshold,
        int $userId,
        ?string $ipAddress = null,
        ?string $deviceType = null
    ): int {
        $metadata = [
            'distance_km' => $distance,
            'threshold_km' => $threshold,
            'breach' => true,
        ];
        
        return $this->recordEvent(
            'Location Drift Anomaly',
            'assets',
            $assetId,
            null,
            $metadata,
            $userId,
            $ipAddress,
            $deviceType
        );
    }
    
    /**
     * Record ledger entry for repair closure
     * 
     * @param int $assetId Asset ID
     * @param int $inspectionId Inspection ID
     * @param float $distance Distance from base location
     * @param int $userId User ID
     * @param string|null $ipAddress IP address
     * @param string|null $deviceType Device type
     * @return int Ledger entry ID
     */
    public function recordRepairClosure(
        int $assetId,
        int $inspectionId,
        float $distance,
        int $userId,
        ?string $ipAddress = null,
        ?string $deviceType = null
    ): int {
        $metadata = [
            'inspection_id' => $inspectionId,
            'distance_km' => $distance,
            'verified' => $distance <= 2.0,
        ];
        
        return $this->recordEvent(
            'Repair Closure',
            'assets',
            $assetId,
            null,
            $metadata,
            $userId,
            $ipAddress,
            $deviceType
        );
    }
    
    /**
     * Get ledger entries for a specific record
     * 
     * @param string $tableName Table name
     * @param int $recordId Record ID
     * @return array Ledger entries
     */
    public function getRecordLedger(string $tableName, int $recordId): array
    {
        $sql = "SELECT * FROM ledgers 
                WHERE table_name = :table_name AND record_id = :record_id 
                ORDER BY created_at DESC";
        
        return $this->database->fetchAll($sql, [
            'table_name' => $tableName,
            'record_id' => $recordId,
        ]);
    }
    
    /**
     * Get recent ledger entries
     * 
     * @param int $limit Number of entries
     * @param string|null $eventType Filter by event type
     * @return array Ledger entries
     */
    public function getRecentEntries(int $limit = 50, ?string $eventType = null): array
    {
        $sql = "SELECT * FROM ledgers";
        
        if ($eventType) {
            $sql .= " WHERE event_type = :event_type";
        }
        
        $sql .= " ORDER BY created_at DESC LIMIT :limit";
        
        $params = ['limit' => $limit];
        
        if ($eventType) {
            $params['event_type'] = $eventType;
        }
        
        return $this->database->fetchAll($sql, $params);
    }
}
