<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[fillable([
    'asset_id',
    'user_id',
    'inspection_log_id',
    'ledger_event_id',
    'file_path',
    'file_name',
    'file_size',
    'file_type',
])]

class Attachment extends Model
{
    use HasFactory;

    protected $fillable = [
        'asset_id',
        'user_id',
        'inspection_log_id',
        'ledger_event_id',
        'file_path',
        'file_name',
        'file_size',
        'file_type',
    ];

    protected $casts = [
        'file_size' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the asset that owns the attachment.
     */
    public function asset(): BelongsTo
    {
        return $this->belongsTo(Asset::class);
    }

    /**
     * Get the user who uploaded the attachment.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the inspection log related to the attachment.
     */
    public function inspectionLog(): BelongsTo
    {
        return $this->belongsTo(Inspection::class, 'inspection_log_id');
    }

    /**
     * Get the ledger event related to the attachment.
     */
    public function ledgerEvent(): BelongsTo
    {
        return $this->belongsTo(Ledger::class, 'ledger_event_id');
    }

    /**
     * Get the full file path.
     */
    public function getFullPathAttribute(): string
    {
        return storage_path('app/'.$this->file_path);
    }

    /**
     * Check if the file is an image.
     */
    public function isImage(): bool
    {
        $imageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

        return in_array($this->file_type, $imageTypes);
    }

    /**
     * Check if the file is a document.
     */
    public function isDocument(): bool
    {
        $documentTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

        return in_array($this->file_type, $documentTypes);
    }

    /**
     * Scope a query to only include image files.
     */
    public function scopeImages($query)
    {
        $imageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

        return $query->whereIn('file_type', $imageTypes);
    }

    /**
     * Scope a query to only include document files.
     */
    public function scopeDocuments($query)
    {
        $documentTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

        return $query->whereIn('file_type', $documentTypes);
    }
}
