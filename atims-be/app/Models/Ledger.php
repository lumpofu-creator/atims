<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[fillable([
    'event_type',
    'table_name',
    'record_id',
    'old_data',
    'new_data',
    'user_id',
    'ip_address',
    'device_type',
    'metadata',
    'created_at',
])]

class Ledger extends Model
{
    use HasFactory;

    protected $fillable = [
        'event_type',
        'table_name',
        'record_id',
        'old_data',
        'new_data',
        'user_id',
        'ip_address',
        'device_type',
        'metadata',
        'created_at',
    ];

    protected $casts = [
        'old_data' => 'array',
        'new_data' => 'array',
        'metadata' => 'array',
        'created_at' => 'datetime',
    ];

    public $timestamps = false;

    /**
     * Get the user who made the change.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Scope a query to only include status change events.
     */
    public function scopeStatusChanges($query)
    {
        return $query->where('event_type', 'Status Change');
    }

    /**
     * Scope a query to only include drift anomaly events.
     */
    public function scopeDriftAnomalies($query)
    {
        return $query->where('event_type', 'Location Drift Anomaly');
    }

    /**
     * Scope a query to only include repair closure events.
     */
    public function scopeRepairClosures($query)
    {
        return $query->where('event_type', 'Repair Closure');
    }

    /**
     * Scope a query for a specific table and record.
     */
    public function scopeForRecord($query, string $tableName, int $recordId)
    {
        return $query->where('table_name', $tableName)->where('record_id', $recordId);
    }

    /**
     * Create a new ledger entry.
     *
     * @param  string  $eventType  The type of event
     * @param  string  $tableName  The table name
     * @param  int  $recordId  The record ID
     * @param  array  $oldData  The old data (if applicable)
     * @param  array  $newData  The new data
     * @param  int  $userId  The user ID
     * @param  string|null  $ipAddress  The IP address
     * @param  string|null  $deviceType  The device type
     * @param  array|null  $metadata  Additional metadata
     */
    public static function record(
        string $eventType,
        string $tableName,
        int $recordId,
        array $oldData,
        array $newData,
        int $userId,
        ?string $ipAddress = null,
        ?string $deviceType = null,
        ?array $metadata = null
    ): self {
        return self::create([
            'event_type' => $eventType,
            'table_name' => $tableName,
            'record_id' => $recordId,
            'old_data' => $oldData,
            'new_data' => $newData,
            'user_id' => $userId,
            'ip_address' => $ipAddress,
            'device_type' => $deviceType,
            'metadata' => $metadata,
        ]);
    }
}
