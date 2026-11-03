<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;

class UserController extends Controller
{
    /**
     * Paginated list of users with optional search by username, email or name.
     */
    public function index(Request $request): JsonResponse
    {
        $page = max((int) $request->input('page', 1), 1);
        $limit = min(max((int) $request->input('limit', 20), 1), 100);
        $search = trim((string) $request->input('search', ''));
        $offset = ($page - 1) * $limit;

        $query = User::query();

        if ($search !== '') {
            $query->where(function ($q) use ($search) {
                $q->where('username', 'like', "%{$search}%")
                    ->orWhere('email', 'like', "%{$search}%")
                    ->orWhere('first_name', 'like', "%{$search}%")
                    ->orWhere('last_name', 'like', "%{$search}%");
            });
        }

        $total = (clone $query)->count();

        $users = $query->orderBy('username')
            ->skip($offset)
            ->take($limit)
            ->get()
            ->map(fn (User $user) => $this->userPayload($user))
            ->values()
            ->all();

        return $this->success([
            'items' => $users,
            'pagination' => [
                'total' => $total,
                'page' => $page,
                'limit' => $limit,
                'total_pages' => $total > 0 ? (int) ceil($total / $limit) : 0,
            ],
        ]);
    }

    /**
     * Show a single user.
     */
    public function show(int $id): JsonResponse
    {
        $user = User::find($id);

        if (! $user) {
            return $this->notFound('User', $id);
        }

        return $this->success($this->userPayload($user));
    }

    /**
     * Create a new user.
     */
    public function store(StoreUserRequest $request): JsonResponse
    {
        $validated = $request->validated();

        $user = User::create([
            'username' => $validated['username'],
            'email' => $validated['email'],
            'first_name' => $validated['first_name'] ?? null,
            'last_name' => $validated['last_name'] ?? null,
            'phone' => $validated['phone'] ?? null,
            'role' => $validated['role'],
            'password_hash' => Hash::make($validated['password']),
        ]);

        return $this->created('User created successfully', $user->id);
    }

    /**
     * Update an existing user. Password is only changed when provided.
     */
    public function update(UpdateUserRequest $request, int $id): JsonResponse
    {
        $user = User::find($id);

        if (! $user) {
            return $this->notFound('User', $id);
        }

        $validated = $request->validated();

        foreach (['username', 'email', 'first_name', 'last_name', 'phone', 'role'] as $field) {
            if (array_key_exists($field, $validated)) {
                $user->setAttribute($field, $validated[$field]);
            }
        }

        if (! empty($validated['password'])) {
            $user->setAttribute('password_hash', Hash::make($validated['password']));
        }

        $user->save();

        return $this->success(['message' => 'User updated successfully']);
    }

    /**
     * Soft delete a user.
     */
    public function destroy(int $id): JsonResponse
    {
        $user = User::find($id);

        if (! $user) {
            return $this->notFound('User', $id);
        }

        $user->delete();

        return $this->success(['message' => 'User deleted successfully']);
    }

    /**
     * Normalised user payload returned by the API (never includes secrets).
     *
     * @return array<string, mixed>
     */
    private function userPayload(User $user): array
    {
        return [
            'id' => $user->id,
            'username' => $user->username,
            'email' => $user->email,
            'first_name' => $user->first_name,
            'last_name' => $user->last_name,
            'name' => $user->name,
            'phone' => $user->phone,
            'role' => $user->role,
            'created_at' => $user->created_at?->toDateTimeString(),
            'updated_at' => $user->updated_at?->toDateTimeString(),
        ];
    }

    public function fieldAgents(): JsonResponse
    {
        $columns = ['id', 'email'];
        foreach (['name', 'first_name', 'last_name', 'username'] as $candidate) {
            if (Schema::hasColumn('users', $candidate)) {
                $columns[] = $candidate;
            }
        }
        $orderColumn = Schema::hasColumn('users', 'name')
            ? 'name'
            : (Schema::hasColumn('users', 'first_name') ? 'first_name' : 'username');

        $agents = User::query()
            ->where('role', 'Field Agent')
            ->orderBy($orderColumn)
            ->get(array_unique($columns))
            ->map(fn (User $user) => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
            ])
            ->values();

        return $this->success(['items' => $agents]);
    }
}
