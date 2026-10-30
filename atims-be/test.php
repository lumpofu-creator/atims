<?php
/**
 * Simple test to verify backend setup
 */
echo "PHP Version: " . phpversion() . "\n";
echo "PDO: " . (extension_loaded('pdo') ? 'loaded' : 'not loaded') . "\n";
echo "GD: " . (extension_loaded('gd') ? 'loaded' : 'not loaded') . "\n";
echo "JSON: " . (extension_loaded('json') ? 'loaded' : 'not loaded') . "\n";

// Test file paths
echo "\nFile paths:\n";
echo "BASE_PATH: " . __DIR__ . "\n";
echo "SRC_PATH exists: " . (is_dir(__DIR__ . '/src') ? 'yes' : 'no') . "\n";
echo "CONFIG_PATH exists: " . (is_dir(__DIR__ . '/config') ? 'yes' : 'no') . "\n";

echo "\nTest completed!\n";
