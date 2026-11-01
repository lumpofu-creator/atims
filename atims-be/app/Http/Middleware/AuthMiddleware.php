<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AuthMiddleware
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next): Response
    {
        $authHeader = $request->headers->get('Authorization');

        if (empty($authHeader)) {
            return response()->json([
                'success' => false,
                'error' => 'Missing Authorization header',
            ], Response::HTTP_UNAUTHORIZED);
        }

        $token = $this->extractToken($authHeader);

        if (empty($token)) {
            return response()->json([
                'success' => false,
                'error' => 'Invalid Authorization header format',
            ], Response::HTTP_UNAUTHORIZED);
        }

        $user = $this->validateToken($token);

        if (! $user) {
            return response()->json([
                'success' => false,
                'error' => 'Invalid or expired token',
            ], Response::HTTP_UNAUTHORIZED);
        }

        $request->merge(['user' => $user]);
        $request->merge(['user_id' => (int) $user['id']]);

        return $next($request);
    }

    /**
     * Extract token from Authorization header
     */
    private function extractToken(string $authHeader): string
    {
        if (preg_match('/Bearer\s+(\S+)/', $authHeader, $matches)) {
            return $matches[1];
        }

        return '';
    }

    /**
     * Validate JWT token
     */
    private function validateToken(string $token): ?array
    {
        // For now, return a placeholder user
        // In production, decode and validate JWT here
        // Return ['id' => 1, 'username' => 'admin', 'role' => 'admin'] as example

        return null;
    }
}
