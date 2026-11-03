<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Hidden;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

#[Fillable(['name', 'email', 'password', 'role', 'phone'])]
#[Hidden(['password', 'remember_token'])]
class User extends Authenticatable
{
    /** @use HasFactory<UserFactory> */
    use HasFactory, Notifiable;

    public function getNameAttribute($value): string
    {
        if (is_string($value) && $value !== '') {
            return $value;
        }

        $firstName = $this->attributes['first_name'] ?? '';
        $lastName = $this->attributes['last_name'] ?? '';
        $fullName = trim($firstName.' '.$lastName);

        return $fullName !== '' ? $fullName : (string) ($this->attributes['username'] ?? '');
    }

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    /**
     * Get the assets created by this user.
     */
    public function createdAssets(): HasMany
    {
        return $this->hasMany(Asset::class, 'created_by');
    }

    /**
     * Get the inspections created by this user (Field Agent).
     */
    public function inspections(): HasMany
    {
        return $this->hasMany(Inspection::class, 'user_id');
    }

    /**
     * Get the ledger entries created by this user.
     */
    public function ledgerEntries(): HasMany
    {
        return $this->hasMany(Ledger::class, 'user_id');
    }

    /**
     * Get the attachments uploaded by this user.
     */
    public function attachments(): HasMany
    {
        return $this->hasMany(Attachment::class, 'user_id');
    }

    /**
     * Get the tasks assigned to this user.
     */
    public function assignedTasks(): HasMany
    {
        return $this->hasMany(TaskQueue::class, 'assigned_user_id');
    }

    /**
     * Check if user has a specific role.
     */
    public function hasRole(string $role): bool
    {
        return $this->role === $role;
    }

    /**
     * Check if user is a Field Agent.
     */
    public function isFieldAgent(): bool
    {
        return $this->hasRole('Field Agent');
    }

    /**
     * Check if user is a Logistics Officer.
     */
    public function isLogisticsOfficer(): bool
    {
        return $this->hasRole('Logistics Officer');
    }

    /**
     * Check if user is a State Auditor.
     */
    public function isStateAuditor(): bool
    {
        return $this->hasRole('State Auditor');
    }

    /**
     * Check if user is an Executive.
     */
    public function isExecutive(): bool
    {
        return $this->hasRole('Executive');
    }
}
