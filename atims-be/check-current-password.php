<?php
require __DIR__ . '/vendor/autoload.php';
$app = require __DIR__ . '/bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

$user = App\Models\User::where('username', 'another_guy')->first();
if (!$user) {
    echo "User 'another_guy' NOT FOUND in database!\n";
    exit;
}

echo "User found: ID {$user->id}, username: {$user->username}\n";
echo "Current password_hash: " . substr($user->password_hash, 0, 40) . "...\n";
echo "Hash matches 'admin': " . (Hash::check('admin', $user->password_hash) ? "YES" : "NO") . "\n";

// Check if password_hash column has the right data
echo "Full password_hash length: " . strlen($user->password_hash) . " (should be 60)\n";
