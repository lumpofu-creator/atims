<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;
use Symfony\Component\HttpFoundation\Response;

class RateLimitMiddleware
{
    // Configuration
    const MAX_ATTEMPTS = 5;

    const LOCKOUT_DURATION_MINUTES = 15;

    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next): Response
    {
        $ipAddress = $request->ip();

        if ($this->isLockedOut($ipAddress)) {
            return response()->json([
                'success' => false,
                'error' => 'Account temporarily locked due to too many failed attempts',
                'details' => [
                    'retry_after_minutes' => self::LOCKOUT_DURATION_MINUTES,
                ],
            ], Response::HTTP_TOO_MANY_REQUESTS);
        }

        if ($this->isLoginRequest($request)) {
            return $this->handleLoginAttempt($request, $next, $ipAddress);
        }

        return $next($request);
    }

    /**
     * Check if request is a login attempt
     */
    private function isLoginRequest(Request $request): bool
    {
        return str_contains($request->path(), 'auth/login');
    }

    /**
     * Handle login attempt with rate limiting
     */
    private function handleLoginAttempt(Request $request, Closure $next, string $ipAddress): Response
    {
        $username = $request->input('username');

        if (empty($username)) {
            return response()->json([
                'success' => false,
                'error' => 'Username is required',
            ], Response::HTTP_BAD_REQUEST);
        }

        $isValid = $this->validateCredentials($username, $request->input('password'));

        if ($isValid) {
            $this->resetFailedAttempts($ipAddress);

            return $next($request);
        }

        $this->recordFailedAttempt($ipAddress);

        return response()->json([
            'success' => false,
            'error' => 'Invalid credentials',
        ], Response::HTTP_UNAUTHORIZED);
    }

    /**
     * Validate credentials
     */
    private function validateCredentials(string $username, string $password): bool
    {
        // Placeholder for actual credential validation
        // In production, verify password hash against database

        return false;
    }

    /**
     * Record failed login attempt
     */
    private function recordFailedAttempt(string $ipAddress): void
    {
        $key = "rate_limit:{$ipAddress}";
        $attempts = Redis::get($key) ?: 0;
        Redis::setex($key, self::LOCKOUT_DURATION_MINUTES * 60, $attempts + 1);

        if (($attempts + 1) >= self::MAX_ATTEMPTS) {
            Redis::setex("rate_limit:locked:{$ipAddress}", self::LOCKOUT_DURATION_MINUTES * 60, '1');
        }
    }

    /**
     * Reset failed attempts
     */
    private function resetFailedAttempts(string $ipAddress): void
    {
        $key = "rate_limit:{$ipAddress}";
        Redis::del($key);
    }

    /**
     * Check if IP is locked out
     */
    private function isLockedOut(string $ipAddress): bool
    {
        return Redis::exists("rate_limit:locked:{$ipAddress}");
    }
}
