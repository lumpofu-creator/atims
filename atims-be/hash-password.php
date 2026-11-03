<?php

require __DIR__ . '/vendor/autoload.php';
$app = require __DIR__ . '/bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

$password = $argv[1] ?? 'test123';
$hash = Hash::make($password);

echo "Password: $password\n";
echo "Hash: $hash\n";
echo "\n";
