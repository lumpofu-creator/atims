<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[fillable([
    'task_type',
    'asset_id',
    'assigned_user_id',
    'global_queue_order',
    'status',
    'due_date',
    'created_at',
    'completed_at',
])]

class TaskQueue extends Model
{
    use HasFactory;

    protected $fillable = [
        'task_type',
        'asset_id',
        'assigned_user_id',
        'global_queue_order',
        'status',
        'due_date',
        'created_at',
        'completed_at',
    ];

    protected $casts = [
        'due_date' => 'date',
        'created_at' => 'datetime',
        'completed_at' => 'datetime',
    ];

    /**
     * Get the asset related to the task.
     */
    public function asset(): BelongsTo
    {
        return $this->belongsTo(Asset::class);
    }

    /**
     * Get the user assigned to the task.
     */
    public function assignedUser(): BelongsTo
    {
        return $this->belongsTo(User::class, 'assigned_user_id');
    }

    /**
     * Scope a query to only include pending tasks.
     */
    public function scopePending($query)
    {
        return $query->where('status', 'Pending');
    }

    /**
     * Scope a query to only include assigned tasks.
     */
    public function scopeAssigned($query)
    {
        return $query->where('status', 'Assigned');
    }

    /**
     * Scope a query to only include in-progress tasks.
     */
    public function scopeInProgress($query)
    {
        return $query->where('status', 'In Progress');
    }

    /**
     * Scope a query to only include tasks assigned to a specific user.
     */
    public function scopeForUser($query, int $userId)
    {
        return $query->where('assigned_user_id', $userId);
    }

    /**
     * Scope a query to only include global queue tasks (not assigned).
     */
    public function scopeGlobalQueue($query)
    {
        return $query->whereNull('assigned_user_id')->where('status', 'Pending');
    }

    /**
     * Assign a task to a user.
     */
    public function assignTo(int $userId): void
    {
        $this->update([
            'assigned_user_id' => $userId,
            'status' => 'Assigned',
            'global_queue_order' => null,
        ]);
    }

    /**
     * Mark task as completed.
     */
    public function complete(): void
    {
        $this->update([
            'status' => 'Completed',
            'completed_at' => now(),
        ]);
    }

    /**
     * Cancel a task.
     */
    public function cancel(): void
    {
        $this->update([
            'status' => 'Cancelled',
        ]);
    }
}
