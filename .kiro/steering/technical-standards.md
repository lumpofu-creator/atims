# Technical Standards

## Technology Stack

| Layer | Technology | Version | Notes |
|-------|-----------|---------|-------|
| **Backend** | PHP | 8.5+ | Required for Laravel 11 compatibility |
| **Framework** | Laravel | 11.x | Latest stable with LTS support |
| **Database** | MySQL | 8.0+ | Required for native spatial geometry support |
| **Queue** | Database | Built-in | Uses Laravel's database queue driver |
| **Caching** | Database | Built-in | Uses Laravel's database cache driver |
| **Session** | Database | Built-in | Uses Laravel's database session driver |
| **API Docs** | swagger-php | Latest | OpenAPI 3.0 specification |
| **QR Generation** | chillerlan/php-qrcode | Latest | Open-source QR code library |

## PHP Standards

- **PSR-12** coding standard enforced via Laravel Pint
- Type declarations required for all function parameters and return types
- Use PHP 8.1+ features: named arguments, constructor property promotion, union types, attributes
- Strict mode enabled: `declare(strict_types=1);` in all PHP files

## Laravel Conventions

### Architecture Pattern
- **Layered Architecture**: Controller → Service → Repository → Model
- **Dependency Injection**: All dependencies injected via constructor
- **Form Requests**: Validation moved to dedicated Form Request classes
- **Policy-based Authorization**: Use Laravel Policies for resource authorization

### Naming Conventions
- **Models**: Singular, PascalCase (e.g., `Asset`, `Inspection`, `LedgerEntry`)
- **Controllers**: PascalCase with suffix (e.g., `AssetController`, `AuthController`)
- **Migrations**: Timestamp-based with descriptive names (e.g., `2024_01_01_000000_create_assets_table`)
- **Routes**: snake_case with dot notation (e.g., `assets.index`, `assets.store`)
- **Database Tables**: Plural, snake_case (e.g., `assets`, `inspections`, `ledger_entries`)

### Database Standards

#### Spatial Data
- Use MySQL `POINT` type for GPS coordinates
- Always store coordinates in WGS 84 format (SRID 4326)
- Use `DB::raw('ST_PointFromText(?, 4326)', [$wkt])` for point creation
- Use `DB::raw('ST_Distance_Sphere(location, ?)')` for distance calculations

#### Migration Requirements
- Always define foreign key constraints with `onDelete('cascade')` or appropriate action
- Use `unsignedBigInteger` for foreign key columns
- Add indexes on foreign keys and frequently queried columns
- Use `nullable()` for optional fields
- Include `timestamps()` on all tables that track creation/modification

#### Column Naming
- Primary keys: `id` (unsignedBigInteger, autoIncrement)
- Foreign keys: `{relation}_id` (e.g., `user_id`, `asset_id`)
- Timestamps: `created_at`, `updated_at`
- Date fields: `_date` suffix (e.g., `acquisition_date`, `inspection_date`)
- Status fields: `_status` suffix (e.g., `current_status`)

### API Response Format

#### Success Responses
```php
// List with pagination
return $this->success([
    'items' => $assets->toArray(),
    'pagination' => [
        'total' => $total,
        'page' => (int) $page,
        'limit' => (int) $limit,
        'total_pages' => (int) ceil($total / $limit),
    ],
]);

// Single resource
return $this->success($asset->toArray());

// Created resource
return $this->created('Asset created successfully', $id);
```

#### Error Responses
```php
// Not found
return $this->notFound('Asset', $id);

// Validation error (handled automatically by Laravel)
// Unauthorized
return response()->json([
    'success' => false,
    'error' => 'Unauthorized',
], 401);

// Forbidden
return response()->json([
    'success' => false,
    'error' => 'Forbidden: Insufficient permissions',
], 403);

// Generic error
return $this->error('Invalid request', 400);
```

### Route Organization

- All API routes defined in `routes/api.php`
- Versioned API structure: `/api/v1/{resource}`
- Group authenticated routes with `auth:sanctum` middleware
- Role-based routing via `RoleGuard` middleware

### Service Layer Guidelines

Services should contain:
- Business logic that doesn't fit in controllers
- Complex calculations (e.g., Haversine distance)
- Third-party integrations
- File processing and transformations

## Security Standards

### Authentication
- JWT tokens with 24-hour expiration
- Rate limiting: 5 failed attempts before 15-minute lockout
- Session timeout: 30 minutes of inactivity
- MFA support for accounts with MFA enabled

### Authorization
- Role-based access control (RBAC) with four roles:
  - **Logistics Officer**: Asset management, user provisioning
  - **Field Agent**: Inspection submission, QR scanning
  - **State Auditor**: Audit review, forensic tracking
  - **Executive**: Dashboard viewing, report generation

### Input Validation
- All user input validated before processing
- File uploads: size limits, MIME type checks
- GPS coordinates: WGS 84 format validation, accuracy threshold
- Status values: strict enum validation

## Performance Requirements

- API response time: < 2.0 seconds under load
- Database queries optimized with proper indexing
- N+1 query prevention using eager loading
- Caching strategy for frequently accessed data
- Pagination on all list endpoints (default: 20 items)

## Localization

- All user-facing text in French
- API responses in French for user-facing fields
- Export reports (PDF, Excel, CSV) in French
- Error messages translated to French

## File Organization

```
app/
├── Http/
│   ├── Controllers/
│   │   └── Api/          # API controllers
│   ├── Middleware/       # Custom middleware
│   └── Requests/         # Form Request validation classes
├── Models/               # Eloquent models
├── Providers/            # Service providers
└── Services/             # Business logic services

database/
├── migrations/           # Database migrations
├── seeders/              # Database seeders
└── factories/            # Model factories

resources/
├── views/                # Blade templates (if any)
└── views/vendor/         # Package views overrides

routes/
├── api.php               # API routes
└── web.php               # Web routes (if any)
```

## Testing Requirements

- Feature tests for API endpoints
- Unit tests for services and business logic
- Test coverage for validation and authorization
- Pest framework for all tests
- Database transactions in tests for rollback

## Deployment Environment

| Setting | Value | Notes |
|---------|-------|-------|
| PHP Version | 8.5+ | Required for Laravel 11 |
| MySQL Version | 8.0+ | Required for spatial functions |
| post_max_size | 16MB | For large file uploads |
| upload_max_filesize | 8MB | For image uploads |
| max_execution_time | 30s | For long-running operations |
| Storage | 10GB SSD | Shared hosting constraint |

## API Documentation

- OpenAPI 3.0 specification
- Auto-generated from PHP attributes using swagger-php
- Available at `/api-docs` endpoint
- Versioned API documentation
