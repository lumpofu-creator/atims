<?php
declare(strict_types=1);

namespace ATIMS\Middleware;

use ATIMS\Core\Database;
use ATIMS\Core\Middleware;
use ATIMS\Core\Response;

/**
 * Authentication Middleware
 * Validates JWT tokens and user sessions
 */
class AuthMiddleware extends Middleware
{
    private Database $database;
    
    public function __construct()
    {
        $this->database = Database::getInstance();
    }
    
    /**
     * Handle authentication
     */
    public function handle(array $request, callable $next): array
    {
        $headers = $this->getHeaders();
        
        // Check for Authorization header
        $authHeader = $headers['Authorization'] ?? '';
        
        if (empty($authHeader)) {
            return Response::unauthorized('Missing Authorization header');
        }
        
        // Extract token from "Bearer <token>"
        $token = $this->extractToken($authHeader);
        
        if (empty($token)) {
            return Response::unauthorized('Invalid Authorization header format');
        }
        
        // Validate token
        $user = $this->validateToken($token);
        
        if (!$user) {
            return Response::unauthorized('Invalid or expired token');
        }
        
        // Check MFA if enabled
        if ($user['mfa_enabled'] && !$this->hasMfaVerification($headers)) {
            return Response::forbidden('MFA verification required');
        }
        
        // Add user to request
        $request['user'] = $user;
        $request['user_id'] = (int)$user['id'];
        
        // Call next handler
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
        
        $sql = "SELECT * FROM users WHERE id = :user_id";
        $user = $this->database->fetch($sql, ['user_id' => 1]);
        
        return $user ?: null;
    }
    
    /**
     * Check for MFA verification header
     */
    private function hasMfaVerification(array $headers): bool
    {
        // Check for X-MFA-Verified header or similar
        return isset($headers['X-MFA-Verified']);
    }
}
