<?php
/**
 * Simple API endpoint to test backend without .htaccess
 */

// Set response headers
header('Content-Type: application/json');
http_response_code(200);

// Return simple response
echo json_encode([
    'status' => 'ok',
    'message' => 'Backend is running',
    'timestamp' => date('Y-m-d H:i:s'),
    'path' => __DIR__,
], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
