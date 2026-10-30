<?php
declare(strict_types=1);

namespace ATIMS\Core;

/**
 * Middleware base class
 * Provides common functionality for request filtering
 */
abstract class Middleware
{
    /**
     * Handle request
     */
    abstract public function handle(array $request, callable $next): array;
    
    /**
     * Get request body
     */
    protected function getBody(array $request): array
    {
        return $request['input'] ?? [];
    }
    
    /**
     * Get request query parameters
     */
    protected function getQuery(array $request): array
    {
        return $request['query'] ?? [];
    }
    
    /**
     * Get request parameters
     */
    protected function getParams(array $request): array
    {
        return $request['params'] ?? [];
    }
    
    /**
     * Get request headers
     */
    protected function getHeaders(): array
    {
        $headers = [];
        
        if (function_exists('getallheaders')) {
            $headers = getallheaders();
        } else {
            // Fallback for CGI environments
            foreach ($_SERVER as $key => $value) {
                if (strpos($key, 'HTTP_') === 0) {
                    $header = str_replace(' ', '-', ucwords(strtolower(str_replace('_', ' ', substr($key, 5)))));
                    $headers[$header] = $value;
                }
            }
        }
        
        return $headers;
    }
}
