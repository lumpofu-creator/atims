<?php
/**
 * Test script to verify ATIMS backend setup
 */

error_reporting(E_ALL);
ini_set('display_errors', '1');

// Define paths
define('BASE_PATH', __DIR__);
define('SRC_PATH', BASE_PATH . '/src');
define('CONFIG_PATH', BASE_PATH . '/config');

// Simple autoloader
spl_autoload_register(function ($class) {
    $path = str_replace('\\', DIRECTORY_SEPARATOR, $class);
    $file = SRC_PATH . '/' . $path . '.php';
    
    if (file_exists($file)) {
        require_once $file;
        return true;
    }
    
    return false;
});

// Load configuration
require_once CONFIG_PATH . '/config.php';
require_once CONFIG_PATH . '/db.php';

echo "=== ATIMS Backend Test ===\n\n";

// Test 1: Configuration loaded
echo "1. Configuration: ";
$config = require CONFIG_PATH . '/config.php';
if ($config && isset($config['database'])) {
    echo "✅ PASSED\n";
} else {
    echo "❌ FAILED\n";
    exit(1);
}

// Test 2: Database config loaded
echo "2. Database Config: ";
$dbConfig = require CONFIG_PATH . '/db.php';
if ($dbConfig && isset($dbConfig['host'])) {
    echo "✅ PASSED\n";
} else {
    echo "❌ FAILED\n";
    exit(1);
}

// Test 3: Core classes
echo "3. Core Classes: ";
$coreFiles = [
    'Controller',
    'Database',
    'Response',
    'Middleware',
    'DatabaseException',
    'MiddlewareException'
];

$allCoreLoaded = true;
foreach ($coreFiles as $className) {
    if (!class_exists("ATIMS\\Core\\$className")) {
        $allCoreLoaded = false;
        break;
    }
}

if ($allCoreLoaded) {
    echo "✅ PASSED\n";
} else {
    echo "❌ FAILED (Some core classes not found)\n";
    exit(1);
}

// Test 4: Database connection (without full PDO setup)
echo "4. Database Class: ";
if (class_exists('ATIMS\\Core\\Database')) {
    echo "✅ PASSED\n";
} else {
    echo "❌ FAILED\n";
    exit(1);
}

// Test 5: HealthCheckController
echo "5. HealthCheckController: ";
if (class_exists('ATIMS\\Controllers\\HealthCheckController')) {
    echo "✅ PASSED\n";
} else {
    echo "❌ FAILED\n";
    exit(1);
}

// Test 6: Routes file
echo "6. Routes File: ";
$routes = require SRC_PATH . '/routes.php';
if (is_array($routes) && count($routes) > 0) {
    echo "✅ PASSED (" . count($routes) . " routes defined)\n";
} else {
    echo "❌ FAILED\n";
    exit(1);
}

// Test 7: Swagger files
echo "7. Swagger Files: ";
$swaggerFiles = [
    BASE_PATH . '/swagger/index.html',
    BASE_PATH . '/swagger/openapi.json'
];

$swaggerOK = true;
foreach ($swaggerFiles as $file) {
    if (!file_exists($file)) {
        $swaggerOK = false;
        break;
    }
}

if ($swaggerOK) {
    echo "✅ PASSED\n";
} else {
    echo "❌ FAILED\n";
    exit(1);
}

// Test 8: Storage directories
echo "8. Storage Directories: ";
$storageDirs = [
    BASE_PATH . '/storage/logs',
    BASE_PATH . '/storage/uploads'
];

$storageOK = true;
foreach ($storageDirs as $dir) {
    if (!is_dir($dir)) {
        $storageOK = false;
        break;
    }
}

if ($storageOK) {
    echo "✅ PASSED\n";
} else {
    echo "❌ FAILED\n";
    exit(1);
}

echo "\n=== All Tests Passed! ===\n";
echo "\nBackend is ready for use.\n";
echo "Access API at: http://localhost/atims-be/\n";
echo "Access Swagger at: http://localhost/atims-be/swagger/\n";
