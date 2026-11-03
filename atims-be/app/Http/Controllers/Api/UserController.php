<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Schema;

class UserController extends Controller
{
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
