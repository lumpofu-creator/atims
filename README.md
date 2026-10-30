# ATIMS - Asset Tracking and Infrastructure Management System

Asset Tracking and Infrastructure Management System for public sector entities, ministries, and municipal authorities.

## Project Structure

```
atims/
├── atims-be/                    # PHP Backend API
│   ├── config/                  # Configuration files
│   │   └── config.php           # Application configuration
│   ├── src/                     # Source code
│   │   ├── Core/                # Core abstractions
│   │   │   ├── Controller.php
│   │   │   ├── Database.php
│   │   │   ├── Repository.php
│   │   │   ├── Middleware.php
│   │   │   └── Response.php
│   │   ├── Middleware/          # HTTP middleware
│   │   │   ├── AuthMiddleware.php
│   │   │   ├── RateLimitMiddleware.php
│   │   │   └── RoleGuard.php
│   │   ├── Services/            # Business logic services
│   │   │   ├── HaversineService.php
│   │   │   ├── LedgerService.php
│   │   │   ├── QrCodeService.php
│   │   │   └── ImageService.php
│   │   └── routes.php           # API route definitions
│   ├── storage/                 # Storage directory (uploads, logs, cache)
│   │   ├── logs/
│   │   ├── uploads/
│   │   └── cache/
│   ├── vendor/                  # Composer dependencies
│   ├── .htaccess                # Apache configuration
│   └── index.php                # API entry point
│
├── atims-ui/                    # Angular PWA Frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── core/            # Core modules
│   │   │   ├── shared/          # Shared components
│   │   │   │   ├── qr-scanner/
│   │   │   │   ├── offline-sync/
│   │   │   │   └── offline-indicator/
│   │   │   ├── features/        # Feature modules
│   │   │   │   ├── dashboard/
│   │   │   │   ├── assets/
│   │   │   │   ├── incidents/
│   │   │   │   ├── tasks/
│   │   │   │   └── reports/
│   │   │   ├── app.component.ts
│   │   │   ├── app.config.ts
│   │   │   └── app.routes.ts
│   │   ├── assets/              # Static assets
│   │   │   └── icons/           # Icons and images
│   │   ├── environments/        # Environment configurations
│   │   ├── index.html
│   │   ├── main.ts
│   │   ├── styles.scss
│   │   └── manifest.webmanifest
│   ├── ngsw-config.json         # Service worker configuration
│   ├── package.json
│   └── angular.json
│
├── database/
│   ├── schema.sql               # Main database schema
│   └── migrations/              # Database migrations
│       └── 001_add_mfa_fields.sql
│
├── .env.example                 # Environment variables example
└── README.md                    # This file
```

## Requirements

### Backend Requirements
- PHP 8.2+
- MySQL 8.0+ with spatial support
- Apache with mod_rewrite enabled
- GD extension for image processing
- JSON extension

### Frontend Requirements
- Node.js 18+
- Angular CLI 16+

## Installation

### Backend Setup

1. Copy `.env.example` to `.env` and configure:
```bash
cp .env.example .env
```

2. Install Composer dependencies:
```bash
cd atims-be
composer install
```

3. Import database schema:
```bash
mysql -u root -p < database/schema.sql
```

4. Configure Apache:
```apache
<VirtualHost *:80>
    ServerName atims.local
    DocumentRoot "C:/xampp/htdocs/atims"
    
    <Directory "C:/xampp/htdocs/atims/atims-be">
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

### Frontend Setup

1. Install dependencies:
```bash
cd atims-ui
npm install
```

2. Run development server:
```bash
ng serve
```

3. For production build:
```bash
ng build --configuration production
```

## Features

### Core Features
- **Asset Management**: Track state property with unique State IDs
- **Inspection Workflow**: Field inspections with GPS verification
- **Geo-Fencing**: Distance-based drift detection (Haversine formula)
- **Anti-Corruption Ledger**: Immutable audit trail
- **QR Code Scanning**: Dual routing for public/field agents
- **Offline-First PWA**: Mobile operations without connectivity
- **Task Queues**: Incident assignment workflow
- **Document Upload**: File management with size limits

### User Roles
1. **Field Agent**: Perform inspections and incident logging
2. **Logistics Officer**: Asset management and user provisioning
3. **State Auditor**: Forensic tracking and compliance verification
4. **Executive**: Strategic dashboards and KPI monitoring

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/profile` - Get user profile

### Assets
- `GET /api/assets` - List all assets
- `GET /api/assets/{id}` - Get asset details
- `POST /api/assets` - Create new asset
- `PUT /api/assets/{id}` - Update asset
- `GET /api/assets/search` - Search assets

### Inspections
- `POST /api/inspections` - Create inspection
- `GET /api/inspections/asset/{assetId}` - Get asset inspections

### Incidents (Requirement 14)
- `POST /api/incidents/log` - Log incident with QR scan
- `POST /api/incidents/verify` - Verify repair
- `GET /api/incidents/unresolved` - Get unresolved incidents
- `GET /api/incidents/history/{assetId}` - Get incident history

### Task Queues
- `POST /api/tasks/assign` - Assign task
- `GET /api/tasks/agent/{agentId}` - Get agent tasks
- `PUT /api/tasks/{id}` - Update task status

### Dashboards
- `GET /api/dashboards/kpi` - Get KPI metrics
- `GET /api/dashboards/map-pins` - Get map pins
- `GET /api/dashboards/capital-at-risk` - Get capital at risk

## Security Features

- **JWT Authentication**: Token-based authentication
- **MFA Support**: TOTP, SMS, and email OTP
- **Rate Limiting**: 5 attempts → 15-minute lockout
- **Role-Based Access Control**: Four role types with granular permissions
- **File Upload Validation**: MIME type and size checks
- **Immutable Ledger**: Anti-corruption audit trail

## Performance

- **Backend**: API responses under 2.0 seconds
- **Database**: Spatial indexes for geo-fencing queries
- **Frontend**: PWA with offline support and caching
- **Caching**: Redis for KPI calculations (production)

## Localization

- **French Language**: All user-facing text in French
- **API**: Error messages in French
- **Reports**: PDF/Excel/CSV exports in French

## Deployment

### Shared Hosting
- PHP 8.2+ with required extensions
- MySQL 8.0+ with spatial support
- File upload limits: 8MB mobile, 5MB desktop
- Storage: 10GB SSD

### Production
- Dedicated server with Redis caching
- SSL/TLS for all API endpoints
- Monitoring and health checks

## Testing

### Backend
```bash
cd atims-be
phpunit
```

### Frontend
```bash
cd atims-ui
ng test
ng lint
```

## Troubleshooting

### Backend Issues
- Check `atims-be/storage/logs/php_errors.log` for errors
- Ensure mod_rewrite is enabled in Apache
- Verify database connection in `.env`

### Frontend Issues
- Clear browser cache and try again
- Check browser console for errors
- Verify service worker registration

## Contributing

1. Follow PSR-12 coding standard
2. Write unit tests for new features
3. Update documentation as needed
4. Test on both mobile and desktop

## License

This project is proprietary and confidential.

## Support

For issues and questions, contact the development team.
