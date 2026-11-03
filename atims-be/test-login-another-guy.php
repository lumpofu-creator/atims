<?php
require __DIR__ . '/vendor/autoload.php';
$app = require __DIR__ . '/bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

$request = new Illuminate\Http\Request([
    'username' => 'another_guy',
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

echo "User found: " . ($user ? "YES (ID: {$user->id}, username: {$user->username})" : "NO") . "\n";

if ($user) {
    $passwordCheck = Illuminate\Support\Facades\Hash::check('admin', $user->password_hash);
    echo "Password 'admin' matches: " . ($passwordCheck ? "YES" : "NO") . "\n";
    
    if ($passwordCheck) {
        $plainToken = Illuminate\Support\Str::random(80);
        $expiresAt = $request->boolean('remember') ? now()->addDays(30) : now()->addHours(12);
        
        $apiToken = App\Models\ApiToken::create([
            'user_id' => $user->id,
            'token_hash' => hash('sha256', $plainToken),
            'expires_at' => $expiresAt,
        ]);
        
        echo "Token created: " . substr($plainToken, 0, 20) . "...\n";
        echo "Expires at: " . $expiresAt->toDateTimeString() . "\n";
    } else {
        echo "Login failed: Password does not match\n";
    }
} else {
    echo "Login failed: User not found\n";
}
