<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use OpenApi\Attributes as OA; // <--- Add this import

#[OA\Info(
    title: 'ATIMS Laravel API Documentation',
    version: '1.0.0',
    description: 'This is the auto-generated Swagger API documentation for ATIMS.'
)]
#[OA\Server(
    url: 'http://localhost:8000',
    description: 'Local Development Environment'
)]
class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    // Response status codes
    const HTTP_OK = 200;

    const HTTP_CREATED = 201;

    const HTTP_BAD_REQUEST = 400;

    const HTTP_UNAUTHORIZED = 401;

    const HTTP_FORBIDDEN = 403;

    const HTTP_NOT_FOUND = 404;

    const HTTP_INTERNAL_ERROR = 500;

    const HTTP_UNPROCESSABLE_ENTITY = 422;

    const HTTP_TOO_MANY_REQUESTS = 429;

    /**
     * Dummy Endpoint to satisfy Swagger's requirement for at least one route.
     */
    #[OA\Get(
        path: '/api/health-check',
        summary: 'Check API availability status',
        responses: [
            new OA\Response(response: 200, description: 'API is online and operational'),
        ]
    )]
    public function healthCheck()
    {
        return response()->json(['status' => 'healthy']);
    }

    /**
     * Success response
     */
    protected function success(array $data, int $status = self::HTTP_OK): array
    {
        return [
            'success' => true,
            'data' => $data,
        ];
    }

    /**
     * Error response
     */
    protected function error(string $message, int $status = self::HTTP_INTERNAL_ERROR, array $details = []): array
    {
        return [
            'success' => false,
            'error' => $message,
            'details' => $details,
        ];
    }

    /**
     * Validation error response
     */
    protected function validationError(string $message, array $errors): array
    {
        return $this->error(
            $message,
            self::HTTP_UNPROCESSABLE_ENTITY,
            ['validation_errors' => $errors]
        );
    }

    /**
     * Not found response
     */
    protected function notFound(string $resource, int $id): array
    {
        return $this->error(
            "$resource not found",
            self::HTTP_NOT_FOUND,
            ['resource' => $resource, 'id' => $id]
        );
    }

    /**
     * Unauthorized response
     */
    protected function unauthorized(string $message = 'Unauthorized'): array
    {
        return $this->error($message, self::HTTP_UNAUTHORIZED);
    }

    /**
     * Forbidden response
     */
    protected function forbidden(string $message = 'Forbidden'): array
    {
        return $this->error($message, self::HTTP_FORBIDDEN);
    }

    /**
     * Create response with location header
     */
    protected function created(string $message, int $id): array
    {
        return [
            'success' => true,
            'message' => $message,
            'id' => $id,
        ];
    }
}
