<?php
require __DIR__ . '/vendor/autoload.php';
$app = require __DIR__ . '/bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

$user = App\Models\User::find(1);
echo "User found: " . ($user ? "YES (ID: {$user->id})" : "NO") . "\n";
echo "Current password_hash: " . substr($user->password_hash, 0, 30) . "...\n";
echo "Checking 'admin' against hash: " . (Hash::check('admin', $user->password_hash) ? "MATCH" : "NO MATCH") . "\n";
echo "Checking 'mypassword123' against hash: " . (Hash::check('mypassword123', $user->password_hash) ? "MATCH" : "NO MATCH") . "\n";
