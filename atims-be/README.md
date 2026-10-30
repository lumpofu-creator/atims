# ATIMS Backend API

Asset Tracking and Inventory Management System - PHP Backend

## Prerequisites

- PHP 8.2 or higher
- MySQL 8.0+ with spatial data support
- Composer (for dependency management)
- Apache/Nginx with mod_rewrite enabled
- GD extension for image processing

## Installation

### 1. Database Setup

1. Create MySQL database:
   ```sql
   CREATE DATABASE atims;
   ```

2. Import the schema:
   ```bash
   mysql -u root -p atims < ../database/schema.sql
   ```

### 2. Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd atims-be
   ```

2. Install dependencies:
   ```bash
   composer install
   ```

3. Configure environment:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and configure your settings:
   ```
   APP_ENV=development
   APP_DEBUG=true
   DB_HOST=localhost
   DB_PORT=3306
   DB_NAME=atims
   DB_USER=root
   DB_PASSWORD=
   JWT_SECRET=your-secret-key-change-in-production
   ```

4. Ensure storage directories are writable:
   ```bash
   chmod -R 775 storage/
   ```

### 3. XAMPP Setup

1. Copy the `atims-be` folder to `C:\xampp\htdocs\atims\atims-be`

2. Ensure Apache has mod_rewrite enabled:
   - Open `C:\xampp\apache\conf\httpd.conf`
   - Uncomment: `LoadModule rewrite_module modules/mod_rewrite.so`

3. Start XAMPP Apache server

4. Access the API at: `http://localhost/atims-be/`

## API Documentation

### Swagger UI

API documentation is available at:
- **Development**: `http://localhost/atims-be/swagger/`

The Swagger UI provides:
- Interactive API documentation
- Try-it-out functionality for testing endpoints
- Request/response examples

## API Endpoints

### Health Check
- `GET /health` - Check API and database status

### Authentication
- `POST /auth/login` - User login
- `POST /auth/register` - User registration
- `GET /auth/profile` - Get user profile (requires authentication)

### Assets
- `GET /assets` - List all assets
- `POST /assets` - Create new asset
- `GET /assets/{id}` - Get asset details
- `PUT /assets/{id}` - Update asset
- `DELETE /assets/{id}` - Delete asset

### Inspections
- `GET /inspections` - List inspections
- `POST /inspections` - Create inspection

### Incidents
- `POST /incidents/log` - Log incident
- `GET /incidents/unresolved` - Get unresolved incidents

### Dashboard
- `GET /dashboards/kpi` - Get KPIs
- `GET /dashboards/map-pins` - Get map pins

## Configuration

### Database

The database connection is configured in `.env`:
```
DB_HOST=localhost
DB_PORT=3306
DB_NAME=atims
DB_USER=root
DB_PASSWORD=
```

### Security

- JWT tokens for authentication
- Environment-based configuration
- HTTPS recommended for production

## Project Structure

```
atims-be/
├── config/           # Configuration files
├── src/
│   ├── Core/         # Core classes
│   ├── Controllers/  # API controllers
│   ├── Middleware/   # Request middleware
│   └── Services/     # Business logic services
├── storage/
│   ├── logs/         # Application logs
│   └── uploads/      # File uploads
├── swagger/          # API documentation
├── vendor/           # Composer dependencies
├── .htaccess         # Apache configuration
├── composer.json     # Dependencies
└── index.php         # Entry point
```

## Development

### Running Tests
```bash
composer test
```

### Code Analysis
```bash
composer stan
```

### Code Fixing
```bash
composer fix
```

## Troubleshooting

### 404 Errors
- Ensure mod_rewrite is enabled in Apache
- Check `.htaccess` is being read

### Database Connection Errors
- Verify database credentials in `.env`
- Ensure MySQL service is running
- Check database exists and schema is imported

### CORS Errors
- Verify CORS headers in `.htaccess`
- Check `APP_URL` in `.env`

## Support

For issues or questions, contact: support@atims.local
