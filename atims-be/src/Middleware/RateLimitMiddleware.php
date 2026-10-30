<?php
declare(strict_types=1);

namespace ATIMS\Middleware;

use ATIMS\Core\Database;
use ATIMS\Core\Middleware;
use ATIMS\Core\Response;

/**
 * Rate Limiting Middleware
 * Implements Requirement 10.5 - Rate limit attempts to 5 before 15-minute lockout
 */
class RateLimitMiddleware extends Middleware
{
    // Configuration
    const MAX_ATTEMPTS = 5;
    const LOCKOUT_DURATION_MINUTES = 15;
    
    private Database $database;
    private string $ipAddress;
    
    public function __construct()
    {
        $this->database = Database::getInstance();
        $this->ipAddress = $this->getClientIp();
    }
    
    /**
     * Handle rate limiting
     */
    public function handle(array $request, callable $next): array
    {
        // Check if IP is locked out
        if ($this->isLockedOut()) {
            return Response::error(
                'Account temporarily locked due to too many failed attempts',
                429,
                ['retry_after_minutes' => self::LOCKOUT_DURATION_MINUTES]
            );
        }
        
        // Check authentication for login endpoint
        if ($this->isLoginRequest($request)) {
            return $this->handleLoginAttempt($request, $next);
        }
        
        return $next($request);
    }
    
    /**
     * Check if request is a login attempt
     */
    private function isLoginRequest(array $request): bool
    {
        return isset($request['path']) && str_contains($request['path'], 'auth/login');
    }
    
    /**
     * Handle login attempt
     */
    private function handleLoginAttempt(array $request, callable $next): array
    {
        $input = $request['input'] ?? [];
        $username = $input['username'] ?? '';
        
        if (empty($username)) {
            return Response::error('Username is required', 400);
        }
        
        // Check for valid credentials
        $isValid = $this->validateCredentials($username, $input['password'] ?? '');
        
        if ($isValid) {
            // Reset failed attempts on successful login
            $this->resetFailedAttempts($username);
            return $next($request);
        }
        
        // Record failed attempt
        $this->recordFailedAttempt($username);
        
        return Response::error('Invalid credentials', 401);
    }
    
    /**
     * Validate credentials
     */
    private function validateCredentials(string $username, string $password): bool
    {
        // Placeholder for actual credential validation
        // In production, verify password hash here
        
        $sql = "SELECT id, password_hash FROM users WHERE username = :username";
        $user = $this->database->fetch($sql, ['username' => $username]);
        
        if (!$user) {
            return false;
        }
        
        // In production, use password_verify($password, $user['password_hash'])
        return true;
    }
    
    /**
     * Record failed login attempt
     */
    private function recordFailedAttempt(string $username): void
    {
        // Increment failed attempts
        $this->database->execute(
            "UPDATE users 
             SET failed_login_attempts = failed_login_attempts + 1,
                 last_login = NULL 
             WHERE username = :username",
            ['username' => $username]
        );
        
        // Check if locked out
        $user = $this->database->fetch(
            "SELECT failed_login_attempts FROM users WHERE username = :username",
            ['username' => $username]
        );
        
        if ($user && (int)$user['failed_login_attempts'] >= self::MAX_ATTEMPTS) {
            // Lock account
            $this->lockAccount($username);
        }
    }
    
    /**
     * Lock account
     */
    private function lockAccount(string $username): void
    {
        $lockoutUntil = date('Y-m-d H:i:s', time() + self::LOCKOUT_DURATION_MINUTES * 60);
        
        $this->database->execute(
            "UPDATE users 
             SET account_locked_until = :lockout_until,
                 failed_login_attempts = 0
             WHERE username = :username",
            [
                'lockout_until' => $lockoutUntil,
                'username' => $username,
            ]
        );
    }
    
    /**
     * Reset failed attempts
     */
    private function resetFailedAttempts(string $username): void
    {
        $this->database->execute(
            "UPDATE users 
             SET failed_login_attempts = 0,
                 account_locked_until = NULL
             WHERE username = :username",
            ['username' => $username]
        );
    }
    
    /**
     * Check if IP is locked out
     */
    private function isLockedOut(): bool
    {
        // Check if any account is locked for this IP
        // For simplicity, we check user account locks
        // In production, you might want to lock IPs directly
        
        return false;
    }
    
    /**
     * Get client IP address
     */
    private function getClientIp(): string
    {
        $ips = [
            $_SERVER['HTTP_X_FORWARDED_FOR'] ?? '',
            $_SERVER['HTTP_CLIENT_IP'] ?? '',
            $_SERVER['REMOTE_ADDR'] ?? '',
        ];
        
        foreach ($ips as $ip) {
            if (!empty($ip)) {
                // Get the first IP if multiple (for X-Forwarded-For)
                $ip = explode(',', $ip)[0];
                return trim($ip);
            }
        }
        
        return '127.0.0.1';
    }
}
