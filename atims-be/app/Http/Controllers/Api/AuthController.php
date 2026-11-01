<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use OpenApi\Attributes as OA;

class AuthController extends Controller
{
    #[OA\Post(
        path: '/api/auth/login',
        summary: 'Login user and return authentication token',
        description: 'Authenticate user with username and password, returns JWT token',
        tags: ['Authentication'],
        requestBody: new OA\RequestBody(
            content: new OA\JsonContent(
                required: ['username', 'password'],
                properties: [
                    new OA\Property(property: 'username', type: 'string', example: 'admin'),
                    new OA\Property(property: 'password', type: 'string', example: 'password123'),
                ]
            )
        ),
        responses: [
            new OA\Response(
                response: 200,
                description: 'Successful login',
                content: new OA\JsonContent(
                    properties: [
                        new OA\Property(property: 'success', type: 'boolean', example: true),
                        new OA\Property(property: 'data', type: 'object', properties: [
                            new OA\Property(property: 'token', type: 'string', example: 'fake-jwt-token'),
                            new OA\Property(property: 'expires_at', type: 'string', example: '2026-11-02 10:00:00'),
                            new OA\Property(property: 'user', type: 'object', properties: [
                                new OA\Property(property: 'id', type: 'integer', example: 1),
                                new OA\Property(property: 'username', type: 'string', example: 'admin'),
                                new OA\Property(property: 'email', type: 'string', example: 'admin@example.com'),
                                new OA\Property(property: 'role', type: 'string', example: 'admin'),
                            ]),
                        ]),
                    ]
                )
            ),
            new OA\Response(
                response: 401,
                description: 'Invalid credentials',
                content: new OA\JsonContent(
                    properties: [
                        new OA\Property(property: 'success', type: 'boolean', example: false),
                        new OA\Property(property: 'error', type: 'string', example: 'Unauthorized'),
                    ]
                )
            ),
        ]
    )]
    public function login(Request $request)
    {
        $validated = $request->validate([
            'username' => 'required|string',
            'password' => 'required|string',
        ]);

        // Example implementation - replace with actual authentication
        $user = [
            'id' => 1,
            'username' => $validated['username'],
            'email' => 'admin@example.com',
            'role' => 'admin',
        ];

        return $this->success([
            'token' => 'fake-jwt-token', // In production, generate JWT token
            'expires_at' => now()->addHours(24)->toDateTimeString(),
            'user' => $user,
        ]);
    }

    #[OA\Post(
        path: '/api/auth/logout',
        summary: 'Logout user and invalidate token',
        description: 'Revoke user authentication token',
        tags: ['Authentication'],
        security: [['bearerAuth' => []]],
        responses: [
            new OA\Response(
                response: 200,
                description: 'Successfully logged out',
                content: new OA\JsonContent(
                    properties: [
                        new OA\Property(property: 'success', type: 'boolean', example: true),
                        new OA\Property(property: 'data', type: 'object', properties: [
                            new OA\Property(property: 'message', type: 'string', example: 'Logged out successfully'),
                        ]),
                    ]
                )
            ),
            new OA\Response(
                response: 401,
                description: 'Unauthorized'
            ),
        ]
    )]
    public function logout(Request $request)
    {
        // Example implementation - replace with actual logout logic
        $request->user()->tokens()->delete();

        return $this->success(['message' => 'Logged out successfully']);
    }

    #[OA\Get(
        path: '/api/auth/me',
        summary: 'Get current authenticated user',
        description: 'Returns the authenticated user details',
        tags: ['Authentication'],
        security: [['bearerAuth' => []]],
        responses: [
            new OA\Response(
                response: 200,
                description: 'User details',
                content: new OA\JsonContent(
                    properties: [
                        new OA\Property(property: 'success', type: 'boolean', example: true),
                        new OA\Property(property: 'data', type: 'object', properties: [
                            new OA\Property(property: 'id', type: 'integer', example: 1),
                            new OA\Property(property: 'username', type: 'string', example: 'admin'),
                            new OA\Property(property: 'email', type: 'string', example: 'admin@example.com'),
                            new OA\Property(property: 'role', type: 'string', example: 'admin'),
                        ]),
                    ]
                )
            ),
            new OA\Response(
                response: 401,
                description: 'Unauthorized'
            ),
        ]
    )]
    public function me(Request $request)
    {
        return $this->success($request->user());
    }
}
