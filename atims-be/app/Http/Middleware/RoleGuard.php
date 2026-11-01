<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RoleGuard
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next, ...$roles): Response
    {
        $user = $request->user ?? $request->user();

        if (! $user) {
            return response()->json([
                'success' => false,
                'error' => 'Authentication required',
            ], Response::HTTP_UNAUTHORIZED);
        }

        $userRole = $user->role ?? '';

        if (! in_array($userRole, $roles)) {
            return response()->json([
                'success' => false,
                'error' => 'Access denied. Required role: '.implode(', ', $roles),
            ], Response::HTTP_FORBIDDEN);
        }

        return $next($request);
    }

    /**
     * Check if user has any of the required roles
     */
    public function hasAnyRole($user, array $requiredRoles): bool
    {
        if (! $user) {
            return false;
        }

        return in_array($user->role ?? '', $requiredRoles);
    }

    /**
     * Get allowed roles as comma-separated string
     */
    public function formatRoles(array $roles): string
    {
        return implode(', ', $roles);
    }
}
