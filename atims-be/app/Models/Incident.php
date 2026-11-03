<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Incident extends Model
{
    use HasFactory;

    protected $fillable = [
        'asset_id', 'reported_by', 'assigned_user_id', 'assigned_by_user_id', 'field_notes', 'status',
        'device_latitude', 'device_longitude', 'device_timestamp',
        'resolution_notes', 'resolved_by', 'resolved_at',
    ];

    protected $casts = [
        'device_latitude' => 'decimal:8',
        'device_longitude' => 'decimal:8',
        'device_timestamp' => 'datetime',
        'resolved_at' => 'datetime',
    ];

    public function asset(): BelongsTo
    {
        return $this->belongsTo(Asset::class);
    }

    public function reporter(): BelongsTo
    {
        return $this->belongsTo(User::class, 'reported_by');
    }

    public function resolver(): BelongsTo
    {
        return $this->belongsTo(User::class, 'resolved_by');
    }

    public function assignedUser(): BelongsTo
    {
        return $this->belongsTo(User::class, 'assigned_user_id');
    }

    public function assignedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'assigned_by_user_id');
    }

    public function task(): HasOne
    {
        return $this->hasOne(TaskQueue::class);
    }

    public function activities(): HasMany
    {
        return $this->hasMany(IncidentActivity::class);
    }

    public function attachments(): HasMany
    {
        return $this->hasMany(Attachment::class);
    }
}
