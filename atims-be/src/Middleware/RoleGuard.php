<?php
declare(strict_types=1);

namespace ATIMS\Middleware;

use ATIMS\Core\Middleware;
use ATIMS\Core\Response;

/**
 * Role-Based Access Control Guard
 * Implements Requirement 1.3 - Enforce role-specific access controls
 */
class RoleGuard extends Middleware
{
    /**
     * Check if user has required role
     */
    public function handle(array $request, callable $next, array $requiredRoles): array
    {
        // Check if user is authenticated
        if (!isset($request['user'])) {
            return Response::unauthorized('Authentication required');
        }
        
        $userRole = $request['user']['role'] ?? '';
        
        if (!in_array($userRole, $requiredRoles)) {
            return Response::forbidden(
                'Access denied. Required role: ' . implode(', ', $requiredRoles)
            );
        }
        
        return $next($request);
    }
    
    /**
     * Check if user has any of the required roles
     */
    public function hasAnyRole(array $request, array $requiredRoles): bool
    {
        if (!isset($request['user'])) {
            return false;
        }
        
        return in_array($request['user']['role'] ?? '', $requiredRoles);
    }
    
    /**
     * Get allowed roles as comma-separated string
     */
    public function formatRoles(array $roles): string
    {
        return implode(', ', $roles);
    }
}
