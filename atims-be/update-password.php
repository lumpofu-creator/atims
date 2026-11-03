<?php
require __DIR__ . '/vendor/autoload.php';
$app = require __DIR__ . '/bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

$user = App\Models\User::find(6); // change ID as needed
$user->password_hash = Hash::make('admin');
print($user->password_hash);
$user->save();
echo "Password updated for user {$user->id}\n";