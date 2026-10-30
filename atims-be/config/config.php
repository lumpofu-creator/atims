<?php
declare(strict_types=1);

// ATIMS Configuration
// Load from environment variables or use defaults

return [
    // Database
    'database' => [
        'host' => $_ENV['DB_HOST'] ?? 'localhost',
        'port' => (int)($_ENV['DB_PORT'] ?? '3306'),
        'name' => $_ENV['DB_NAME'] ?? 'atims',
        'user' => $_ENV['DB_USER'] ?? 'root',
        'password' => $_ENV['DB_PASSWORD'] ?? '',
        'charset' => 'utf8mb4',
    ],
    
    // Application
    'app' => [
        'name' => 'ATIMS',
        'version' => '1.0.0',
        'env' => $_ENV['APP_ENV'] ?? 'development',
        'debug' => (bool)($_ENV['APP_DEBUG'] ?? false),
        'url' => $_ENV['APP_URL'] ?? 'http://localhost',
    ],
    
    // Security
    'security' => [
        'jwt_secret' => $_ENV['JWT_SECRET'] ?? 'your-secret-key-change-in-production',
        'jwt_algorithm' => 'HS256',
        'session_timeout' => (int)($_ENV['SESSION_TIMEOUT'] ?? 1800), // 30 minutes
        'session_cookie_name' => 'atims_session',
        'session_cookie_secure' => $_ENV['APP_ENV'] === 'production',
    ],
    
    // File Uploads
    'uploads' => [
        'max_size_mobile_kb' => 800,
        'max_size_desktop_mb' => 5,
        'allowed_types' => [
            'images' => ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'],
            'documents' => ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
        ],
        'storage_path' => __DIR__ . '/../storage/uploads',
    ],
    
    // Geofencing
    'geofencing' => [
        'threshold_km' => 2.0,
        'gps_accuracy_threshold_m' => 15.0,
        'earth_radius_km' => 6371,
    ],
    
    // Logging
    'logging' => [
        'enabled' => true,
        'path' => __DIR__ . '/../storage/logs',
        'level' => $_ENV['LOG_LEVEL'] ?? 'debug',
    ],
    
    // QR Code
    'qrcode' => [
        'size' => 256,
        'format' => 'png',
        'error_correction' => 'M',
        'margin' => 1,
    ],
];
