<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ApiToken;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $validated = $request->validate([
            'username' => ['required', 'string', 'max:255'],
            'password' => ['required', 'string'],
            'remember' => ['sometimes', 'boolean'],
        ]);

        $identifier = trim($validated['username']);
        $columns = Schema::getColumnListing('users');
        $identityColumns = array_values(array_intersect(['email', 'username', 'name'], $columns));
        if ($identityColumns === []) {
            return $this->unauthorized('No login identifier is configured for user accounts.');
        }

        $user = User::query()->where(function ($query) use ($identityColumns, $identifier) {
            foreach ($identityColumns as $index => $column) {
                $index === 0 ? $query->where($column, $identifier) : $query->orWhere($column, $identifier);
            }
        })->first();
        if (! $user || ! Hash::check($validated['password'], $user->password_hash)) {
            return $this->unauthorized('The email/username or password is incorrect.');
        }

        $plainToken = Str::random(80);
        $expiresAt = $request->boolean('remember') ? now()->addDays(30) : now()->addHours(12);
        ApiToken::create([
            'user_id' => $user->id,
            'token_hash' => hash('sha256', $plainToken),
            'expires_at' => $expiresAt,
        ]);

        return $this->success([
            'token' => $plainToken,
            'expires_at' => $expiresAt->toDateTimeString(),
            'user' => $this->userPayload($user),
        ]);
    }

    public function logout(Request $request)
    {
        ApiToken::whereKey($request->attributes->get('api_token_id'))->delete();
        return $this->success(['message' => 'Logged out successfully']);
    }

    public function me(Request $request)
    {
        return $this->success($this->userPayload($request->user()));
    }

    public function updateProfile(Request $request)
    {
        $validated = $request->validate([
            'username' => ['sometimes', 'nullable', 'string', 'max:255'],
            'name' => ['sometimes', 'nullable', 'string', 'max:255'],
            'phone' => ['sometimes', 'nullable', 'string', 'max:40'],
        ]);
        $user = $request->user();
        $columns = Schema::getColumnListing('users');
        $displayName = $validated['username'] ?? $validated['name'] ?? null;
        if ($displayName !== null) {
            if (in_array('username', $columns, true)) $user->setAttribute('username', $displayName);
            elseif (in_array('name', $columns, true)) $user->setAttribute('name', $displayName);
        }
        if (array_key_exists('phone', $validated) && in_array('phone', $columns, true)) {
            $user->setAttribute('phone', $validated['phone']);
        }
        $user->save();
        return $this->success($this->userPayload($user->fresh()));
    }

    private function userPayload(User $user): array
    {
        return [
            'id' => $user->id,
            'name' => $user->name,
            'username' => $user->username ?? $user->name,
            'email' => $user->email,
            'phone' => $user->phone,
            'role' => $user->role,
            'mfa_enabled' => false,
        ];
    }
}
