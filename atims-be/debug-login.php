<?php
require __DIR__ . '/vendor/autoload.php';
$app = require __DIR__ . '/bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

// Simulate the login request exactly as sent
$request = new Illuminate\Http\Request([
    'username' => 'another_guy',
    'password' => 'admin',
    'remember' => false,
]);

// Step by step through the login logic
$validated = $request->validate([
    'username' => ['required', 'string', 'max:255'],
    'password' => ['required', 'string'],
    'remember' => ['sometimes', 'boolean'],
]);

echo "1. Validation passed\n";

$identifier = trim($validated['username']);
echo "2. Identifier: '$identifier'\n";

$columns = Illuminate\Support\Facades\Schema::getColumnListing('users');
echo "3. Columns: " . implode(', ', $columns) . "\n";

$identityColumns = array_values(array_intersect(['email', 'username', 'name'], $columns));
echo "4. Identity columns: " . implode(', ', $identityColumns) . "\n";

if ($identityColumns === []) {
    echo "5. ERROR: No identity columns configured\n";
    exit;
}
echo "5. Identity columns check passed\n";

// Build the query
$userQuery = App\Models\User::query()->where(function ($query) use ($identityColumns, $identifier) {
    foreach ($identityColumns as $index => $column) {
        $index === 0 ? $query->where($column, $identifier) : $query->orWhere($column, $identifier);
    }
});

echo "6. Query: " . $userQuery->toSql() . "\n";
echo "7. bindings: " . json_encode($userQuery->getBindings()) . "\n";

$user = $userQuery->first();

if (!$user) {
    echo "8. ERROR: User not found\n";
    exit;
}

echo "8. User found: ID {$user->id}, username: {$user->username}\n";
echo "9. Password hash from DB: " . $user->password_hash . "\n";
echo "10. Hash matches 'admin': " . (Illuminate\Support\Facades\Hash::check('admin', $user->password_hash) ? "YES" : "NO") . "\n";

if (!Hash::check($validated['password'], $user->password)) {
    echo "11. ERROR: Password check failed\n";
    exit;
}

echo "11. Password check passed\n";
