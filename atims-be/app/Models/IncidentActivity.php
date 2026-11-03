<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class IncidentActivity extends Model
{
    use HasFactory;

    public const UPDATED_AT = null;

    protected $fillable = ['incident_id', 'user_id', 'entry_type', 'body', 'created_at'];

    protected $casts = ['created_at' => 'datetime'];

    public function incident(): BelongsTo
    {
        return $this->belongsTo(Incident::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
