<?php
require __DIR__ . '/vendor/autoload.php';
$app = require __DIR__ . '/bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

$user = App\Models\User::create([
    'username' => 'another_guy',
    'email' => 'another_guy@example.com',
    'password_hash' => Hash::make('admin'),
    'role' => 'logistics_officer',
    'first_name' => 'Another',
    'last_name' => 'Guy',
]);

echo "User created: ID {$user->id}\n";
echo "Username: {$user->username}\n";
echo "Password: admin\n";
