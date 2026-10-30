<?php
declare(strict_types=1);

namespace ATIMS\Core;

/**
 * Base Controller class for ATIMS API
 * Provides common functionality for all controllers
 */
abstract class Controller
{
    /**
     * Response status codes
     */
    const HTTP_OK = 200;
    const HTTP_CREATED = 201;
    const HTTP_BAD_REQUEST = 400;
    const HTTP_UNAUTHORIZED = 401;
    const HTTP_FORBIDDEN = 403;
    const HTTP_NOT_FOUND = 404;
    const HTTP_INTERNAL_ERROR = 500;
    const HTTP_UNPROCESSABLE_ENTITY = 422;
    
    /**
     * Success response
     */
    protected function success(array $data, int $status = self::HTTP_OK): array
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
    protected function error(string $message, int $status = self::HTTP_INTERNAL_ERROR, array $details = []): array
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
            'status' => self::HTTP_CREATED,
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
