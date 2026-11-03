<?php
require __DIR__ . '/vendor/autoload.php';
$app = require __DIR__ . '/bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

// Simulate login request
$request = new Illuminate\Http\Request([
    'username' => 'admin',  // Change this to match what's in your DB
    'password' => 'admin',
    'remember' => false,
]);

// Validate
$validated = $request->validate([
    'username' => ['required', 'string', 'max:255'],
    'password' => ['required', 'string'],
    'remember' => ['sometimes', 'boolean'],
]);

$identifier = trim($validated['username']);
$columns = Illuminate\Support\Facades\Schema::getColumnListing('users');
$identityColumns = array_values(array_intersect(['email', 'username', 'name'], $columns));

echo "Identifier: $identifier\n";
echo "Identity columns: " . implode(', ', $identityColumns) . "\n";

$user = App\Models\User::query()->where(function ($query) use ($identityColumns, $identifier) {
    foreach ($identityColumns as $index => $column) {
        $index === 0 ? $query->where($column, $identifier) : $query->orWhere($column, $identifier);
    }
})->first();

echo "User found: " . ($user ? "YES (ID: {$user->id})" : "NO") . "\n";

if ($user) {
    echo "User email: {$user->email}\n";
    $username = isset($user->username) ? $user->username : 'N/A';
    $name = isset($user->name) ? $user->name : 'N/A';
    echo "User username: $username\n";
    echo "User name: $name\n";
    echo "Password hash matches 'admin': " . (Illuminate\Support\Facades\Hash::check('admin', $user->password_hash) ? "YES" : "NO") . "\n";
}
