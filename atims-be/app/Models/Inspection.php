<?php

namespace App\Models;

use App\Services\HaversineService;
use Illuminate\Database\Eloquent\Attributes\fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[fillable([
    'asset_id',
    'user_id',
    'inspection_type',
    'condition_status',
    'field_notes',
    'verification_image',
    'device_latitude',
    'device_longitude',
    'device_timestamp',
])]

class Inspection extends Model
{
    use HasFactory;

    protected $fillable = [
        'asset_id',
        'user_id',
        'inspection_type',
        'condition_status',
        'field_notes',
        'verification_image',
        'device_latitude',
        'device_longitude',
        'device_timestamp',
    ];

    protected $casts = [
        'device_latitude' => 'decimal:8',
        'device_longitude' => 'decimal:8',
        'device_timestamp' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the asset that owns the inspection.
     */
    public function asset(): BelongsTo
    {
        return $this->belongsTo(Asset::class);
    }

    /**
     * Get the user (Field Agent) who created the inspection.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the attachments for this inspection.
     */
    public function attachments()
    {
        return $this->hasMany(Attachment::class, 'inspection_log_id');
    }

    /**
     * Scope a query to only include inspections of a specific type.
     */
    public function scopeType($query, string $type)
    {
        return $query->where('inspection_type', $type);
    }

    /**
     * Scope a query to only include routine inspections.
     */
    public function scopeRoutine($query)
    {
        return $query->where('inspection_type', 'Routine');
    }

    /**
     * Scope a query to only include breakdown inspections.
     */
    public function scopeBreakdown($query)
    {
        return $query->where('inspection_type', 'Breakdown');
    }

    /**
     * Scope a query to only include maintenance inspections.
     */
    public function scopeMaintenance($query)
    {
        return $query->where('inspection_type', 'Maintenance');
    }

    /**
     * Scope a query to only include handover inspections.
     */
    public function scopeHandover($query)
    {
        return $query->where('inspection_type', 'Handover');
    }

    /**
     * Check if GPS accuracy meets the threshold (15m).
     */
    public function isGpsAccuracyValid(): bool
    {
        $haversine = app(HaversineService::class);

        // For validation, we check if the device GPS accuracy would be valid
        // In practice, you'd store the accuracy value in a column
        return true; // Placeholder - would need actual accuracy field
    }
}
