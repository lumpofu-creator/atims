<?php
declare(strict_types=1);

/**
 * Database connection configuration
 * Loads from .env file or uses defaults
 */

return [
    'host' => $_ENV['DB_HOST'] ?? 'localhost',
    'port' => (int)($_ENV['DB_PORT'] ?? '3306'),
    'name' => $_ENV['DB_NAME'] ?? 'atims',
    'username' => $_ENV['DB_USER'] ?? 'root',
    'password' => $_ENV['DB_PASSWORD'] ?? '',
    'charset' => 'utf8mb4',
];
