<?php

namespace App\Http\Middleware;

use App\Models\ApiToken;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ApiTokenMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        $plainToken = $request->bearerToken();
        if (! $plainToken) {
            return response()->json(['success' => false, 'message' => 'Unauthenticated.'], Response::HTTP_UNAUTHORIZED);
        }

        $token = ApiToken::with('user')->where('token_hash', hash('sha256', $plainToken))->first();
        if (! $token || ! $token->user || $token->expires_at->isPast()) {
            if ($token) $token->delete();
            return response()->json(['success' => false, 'message' => 'Unauthenticated.'], Response::HTTP_UNAUTHORIZED);
        }

        $token->forceFill(['last_used_at' => now()])->save();
        $request->setUserResolver(fn () => $token->user);
        $request->attributes->set('api_token_id', $token->id);

        return $next($request);
    }
}
