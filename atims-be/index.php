<?php
/**
 * ATIMS Backend API Entry Point
 * Handles all API requests and routes to appropriate controllers
 */

declare(strict_types=1);

// Error reporting
error_reporting(E_ALL);
ini_set('display_errors', 'Off');

// Start output buffering
ob_start();

// Define paths
define('BASE_PATH', __DIR__);
define('SRC_PATH', BASE_PATH . '/src');
define('STORAGE_PATH', BASE_PATH . '/storage');
define('CONFIG_PATH', BASE_PATH . '/config');
define('PUBLIC_PATH', BASE_PATH . '/public');

// Load Composer autoloader
$autoloader = BASE_PATH . '/vendor/autoload.php';
if (file_exists($autoloader)) {
    require_once $autoloader;
} else {
    // Fallback for development without Composer
    spl_autoload_register(function ($class) {
        $path = str_replace('\\', DIRECTORY_SEPARATOR, $class);
        $file = SRC_PATH . '/' . $path . '.php';
        
        if (file_exists($file)) {
            require_once $file;
            return true;
        }
        
        return false;
    });
}

// Load configuration
require_once CONFIG_PATH . '/config.php';

// Load routes
require_once SRC_PATH . '/routes.php';

// Get request path
$requestUri = $_SERVER['REQUEST_URI'] ?? '/';
$scriptName = basename($_SERVER['SCRIPT_NAME']);
$requestPath = parse_url($requestUri, PHP_URL_PATH);

// Remove script name from path
if ($scriptName !== '/' && strpos($requestPath, $scriptName) === 0) {
    $requestPath = substr($requestPath, strlen($scriptName));
}

// Remove leading slash and API prefix
$requestPath = ltrim($requestPath, '/');
if (strpos($requestPath, 'api/') === 0) {
    $requestPath = substr($requestPath, 4);
}

// Get HTTP method
$httpMethod = $_SERVER['REQUEST_METHOD'] ?? 'GET';

// Route request
$routes = require SRC_PATH . '/routes.php';
$routeMatched = false;

foreach ($routes as $route) {
    [$method, $pattern, $handler] = $route;
    
    // Check method match
    if (strtoupper($method) !== strtoupper($httpMethod)) {
        continue;
    }
    
    // Check pattern match
    $regex = '#^' . preg_replace('#\{(\w+)\}#', '([^/]+)', $pattern) . '$#';
    if (preg_match($regex, $requestPath, $matches)) {
        array_shift($matches); // Remove full match
        
        // Call handler
        try {
            $response = call_user_func_array($handler, [
                'params' => $matches,
                'input' => json_decode(file_get_contents('php://input'), true) ?: [],
                'files' => $_FILES,
                'query' => $_GET,
            ]);
            
            http_response_code($response['status'] ?? 200);
            
            foreach ($response['headers'] ?? [] as $header => $value) {
                header("$header: $value");
            }
            
            echo json_encode($response['body'] ?? [], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
            
            $routeMatched = true;
            break;
        } catch (Exception $e) {
            http_response_code($e->getCode() ?: 500);
            header('Content-Type: application/json');
            echo json_encode([
                'error' => $e->getMessage(),
                'code' => $e->getCode(),
                'file' => $e->getFile(),
                'line' => $e->getLine(),
            ], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
            
            // Log error
            error_log("API Error: {$e->getMessage()} in {$e->getFile()}:{$e->getLine()}");
            
            $routeMatched = true;
            break;
        }
    }
}

// Handle 404
if (!$routeMatched) {
    http_response_code(404);
    header('Content-Type: application/json');
    echo json_encode([
        'error' => 'Not Found',
        'message' => 'The requested resource was not found',
        'path' => $requestPath,
        'method' => $httpMethod,
    ], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
}

// Clean output buffer
ob_end_flush();
