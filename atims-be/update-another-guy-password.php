<?php
require __DIR__ . '/vendor/autoload.php';
$app = require __DIR__ . '/bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

$user = App\Models\User::where('username', 'another_guy')->first();
if (!$user) {
    echo "User 'another_guy' not found.\n";
    exit;
}

$user->password_hash = Hash::make('admin');
$user->save();

echo "Password reset for user: {$user->username}\n";
echo "New password: admin\n";
echo "Hash matches 'admin': " . (Hash::check('admin', $user->password_hash) ? "YES" : "NO") . "\n";
