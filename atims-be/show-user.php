<?php
require __DIR__ . '/vendor/autoload.php';
$app = require __DIR__ . '/bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

$user = App\Models\User::first();
echo "ID: " . $user->id . "\n";
echo "Username: " . (isset($user->username) ? $user->username : 'NULL') . "\n";
echo "Email: " . $user->email . "\n";
echo "Password hash matches 'admin': " . (Illuminate\Support\Facades\Hash::check('admin', $user->password_hash) ? "YES" : "NO") . "\n";
