<?php

declare(strict_types=1);

use App\Models\ApiToken;
use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/*
 * These tests exercise the real "users" schema used by the application, which
 * diverges from the bundled migrations (username / password_hash / enum role).
 * We therefore run them against the live MySQL connection and roll everything
 * back with DatabaseTransactions so no test data persists.
 */
uses(DatabaseTransactions::class);

beforeEach(function () {
    // Force the MySQL connection so the real schema (username, password_hash,
    // enum role, soft deletes) is used instead of the phpunit sqlite default.
    // The phpunit env sets DB_DATABASE=:memory:, so we also override the mysql
    // connection's host/database explicitly to reach the real atims database.
    config([
        'database.default' => 'mysql',
        'database.connections.mysql.host' => '127.0.0.1',
        'database.connections.mysql.port' => '3306',
        'database.connections.mysql.database' => 'atims',
        'database.connections.mysql.username' => 'root',
        'database.connections.mysql.password' => '',
    ]);

    DB::purge('mysql');
    DB::setDefaultConnection('mysql');
});

/**
 * Create a user directly against the real schema and return it.
 */
function makeUser(string $role, array $overrides = []): User
{
    $suffix = Str::lower(Str::random(8));

    return User::create(array_merge([
        'username' => 'test_'.$suffix,
        'email' => 'test_'.$suffix.'@example.com',
        'password_hash' => Hash::make('secret123'),
        'role' => $role,
        'first_name' => 'Test',
        'last_name' => 'User',
    ], $overrides));
}

/**
 * Mint a bearer token for a user and return the plain token string.
 */
function tokenFor(User $user): string
{
    $plain = Str::random(80);
    ApiToken::create([
        'user_id' => $user->id,
        'token_hash' => hash('sha256', $plain),
        'expires_at' => now()->addHour(),
    ]);

    return $plain;
}

it('forbids non logistics officers from listing users', function () {
    $agent = makeUser('Field Agent');
    $token = tokenFor($agent);

    $this->withToken($token)
        ->getJson('/api/users')
        ->assertStatus(403)
        ->assertJson(['success' => false]);
});

it('allows a logistics officer to list users', function () {
    $officer = makeUser('Logistics Officer');
    $token = tokenFor($officer);

    $this->withToken($token)
        ->getJson('/api/users')
        ->assertOk()
        ->assertJsonStructure([
            'success',
            'data' => ['items', 'pagination' => ['total', 'page', 'limit', 'total_pages']],
        ]);
});

it('allows a logistics officer to create a user', function () {
    $officer = makeUser('Logistics Officer');
    $token = tokenFor($officer);
    $username = 'created_'.Str::lower(Str::random(8));

    $response = $this->withToken($token)->postJson('/api/users', [
        'username' => $username,
        'email' => $username.'@example.com',
        'first_name' => 'Jane',
        'last_name' => 'Doe',
        'role' => 'Field Agent',
        'password' => 'secret123',
    ]);

    $response->assertCreated()->assertJson(['success' => true]);

    $created = User::where('username', $username)->first();
    expect($created)->not->toBeNull();
    expect($created->role)->toBe('Field Agent');
    expect(Hash::check('secret123', $created->password_hash))->toBeTrue();
});

it('rejects invalid role on create', function () {
    $officer = makeUser('Logistics Officer');
    $token = tokenFor($officer);

    $this->withToken($token)->postJson('/api/users', [
        'username' => 'bad_'.Str::lower(Str::random(6)),
        'email' => 'bad_'.Str::lower(Str::random(6)).'@example.com',
        'role' => 'Super Admin',
        'password' => 'secret123',
    ])->assertStatus(422);
});

it('updates a user without changing the password when omitted', function () {
    $officer = makeUser('Logistics Officer');
    $token = tokenFor($officer);
    $target = makeUser('Field Agent');
    $originalHash = $target->password_hash;

    $this->withToken($token)->putJson("/api/users/{$target->id}", [
        'first_name' => 'Renamed',
        'role' => 'State Auditor',
    ])->assertOk()->assertJson(['success' => true]);

    $target->refresh();
    expect($target->first_name)->toBe('Renamed');
    expect($target->role)->toBe('State Auditor');
    expect($target->password_hash)->toBe($originalHash);
});

it('soft deletes a user', function () {
    $officer = makeUser('Logistics Officer');
    $token = tokenFor($officer);
    $target = makeUser('Executive');

    $this->withToken($token)
        ->deleteJson("/api/users/{$target->id}")
        ->assertOk()
        ->assertJson(['success' => true]);

    expect(User::find($target->id))->toBeNull();
    expect(User::withTrashed()->find($target->id))->not->toBeNull();
});
