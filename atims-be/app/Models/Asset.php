<?php

namespace App\Models;

use App\Services\HaversineService;
use Illuminate\Database\Eloquent\Attributes\fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

#[fillable([
    'state_id',
    'name',
    'description',
    'category_id',
    'registered_location',
    'latitude',
    'longitude',
    'location_point',
    'acquisition_date',
    'purchase_value',
    'current_value',
    'current_status',
    'parent_asset_id',
    'created_by',
])]

class Asset extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'state_id',
        'name',
        'description',
        'category_id',
        'registered_location',
        'latitude',
        'longitude',
        'location_point',
        'acquisition_date',
        'purchase_value',
        'current_value',
        'current_status',
        'parent_asset_id',
        'created_by',
    ];

    protected $casts = [
        'latitude' => 'decimal:8',
        'longitude' => 'decimal:8',
        'location_point' => 'string',
        'acquisition_date' => 'date',
        'purchase_value' => 'decimal:2',
        'current_value' => 'decimal:2',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
        'deleted_at' => 'datetime',
    ];

    protected $attributes = [
        'current_status' => 'Fonctionnel',
    ];

    /**
     * Get the category that owns the asset.
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * Get the parent asset if this is a child asset.
     */
    public function parentAsset(): BelongsTo
    {
        return $this->belongsTo(Asset::class, 'parent_asset_id');
    }

    /**
     * Get the child assets.
     */
    public function childAssets(): HasMany
    {
        return $this->hasMany(Asset::class, 'parent_asset_id');
    }

    /**
     * Get the inspections for the asset.
     */
    public function inspections(): HasMany
    {
        return $this->hasMany(Inspection::class);
    }

    /**
     * Get the latest inspection for the asset.
     */
    public function latestInspection(): HasOne
    {
        return $this->hasOne(Inspection::class)->orderBy('created_at', 'desc');
    }

    /**
     * Get the attachments for the asset.
     */
    public function attachments(): HasMany
    {
        return $this->hasMany(Attachment::class);
    }

    /**
     * Get the user who created the asset.
     */
    public function createdBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    /**
     * Scope a query to only include assets with a specific status.
     */
    public function scopeStatus($query, string $status)
    {
        return $query->where('current_status', $status);
    }

    /**
     * Scope a query to only include functional assets.
     */
    public function scopeFunctional($query)
    {
        return $query->where('current_status', 'Fonctionnel');
    }

    /**
     * Scope a query to only include broken down assets.
     */
    public function scopeBrokenDown($query)
    {
        return $query->where('current_status', 'En Panne');
    }

    /**
     * Check if the asset is geographically within the threshold.
     */
    public function isWithinGeofence(float $lat, float $lon, float $thresholdKm = 2.0): bool
    {
        $haversine = app(HaversineService::class);
        $distance = $haversine->calculateDistance(
            (float) $this->latitude,
            (float) $this->longitude,
            $lat,
            $lon
        );

        return $distance <= $thresholdKm;
    }
}
