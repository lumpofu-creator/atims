<?php
declare(strict_types=1);

namespace ATIMS\Core;

/**
 * Response builder
 * Handles API response formatting
 */
class Response
{
    /**
     * Success response
     */
    public static function success(mixed $data, int $status = 200): array
    {
        return [
            'status' => $status,
            'headers' => [
                'Content-Type' => 'application/json',
            ],
            'body' => [
                'success' => true,
                'data' => $data,
            ],
        ];
    }
    
    /**
     * Error response
     */
    public static function error(string $message, int $status = 500, array $details = []): array
    {
        return [
            'status' => $status,
            'headers' => [
                'Content-Type' => 'application/json',
            ],
            'body' => [
                'success' => false,
                'error' => $message,
                'details' => $details,
            ],
        ];
    }
    
    /**
     * Validation error response
     */
    public static function validationError(string $message, array $errors): array
    {
        return self::error(
            $message,
            422,
            ['validation_errors' => $errors]
        );
    }
    
    /**
     * Not found response
     */
    public static function notFound(string $resource, int $id): array
    {
        return self::error(
            "$resource not found",
            404,
            ['resource' => $resource, 'id' => $id]
        );
    }
    
    /**
     * Unauthorized response
     */
    public static function unauthorized(string $message = 'Unauthorized'): array
    {
        return self::error($message, 401);
    }
    
    /**
     * Forbidden response
     */
    public static function forbidden(string $message = 'Forbidden'): array
    {
        return self::error($message, 403);
    }
    
    /**
     * Created response with location header
     */
    public static function created(string $message, int $id): array
    {
        return [
            'status' => 201,
            'headers' => [
                'Content-Type' => 'application/json',
                'Location' => "/api/v1/resource/$id",
            ],
            'body' => [
                'success' => true,
                'message' => $message,
                'id' => $id,
            ],
        ];
    }
}
