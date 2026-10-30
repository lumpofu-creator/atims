# ATIMS Backend XAMPP Setup Guide

This guide walks you through setting up the ATIMS PHP backend on XAMPP.

## Step 1: Verify XAMPP Installation

Ensure XAMPP has the following components:
- ✅ Apache (web server)
- ✅ MySQL (database)
- ✅ PHP 8.2+

Verify PHP version:
```bash
C:\xampp\php\php.exe -v
```

## Step 2: Start XAMPP Services

1. Open XAMPP Control Panel
2. Start **Apache** (should show green)
3. Start **MySQL** (should show green)

Verify services are running by accessing:
- Apache: `http://localhost`
- PHP: `http://localhost/phpinfo.php` (if phpinfo.php exists)

## Step 3: Database Setup

### Create Database

1. Open phpMyAdmin: `http://localhost/phpmyadmin`
2. Click "New" in the left sidebar
3. Database name: `atims`
4. Collation: `utf8mb4_unicode_ci`
5. Click "Create"

### Import Schema

1. Select the `atims` database in phpMyAdmin
2. Click "Import" tab
3. Choose file: `C:\xampp\htdocs\atims\database\schema.sql`
4. Click "Go"

Alternatively, using command line:
```bash
C:\xampp\mysql\bin\mysql.exe -u root -p atims < C:\xampp\htdocs\atims\database\schema.sql
```

## Step 4: Backend Setup

### 1. Copy Backend Files

The backend should already be at:
```
C:\xampp\htdocs\atims\atims-be\
```

### 2. Create Environment File

Copy `.env.example` to `.env`:
```bash
cd C:\xampp\htdocs\atims\atims-be
copy .env.example .env
```

### 3. Configure Database Connection

Edit `C:\xampp\htdocs\atims\atims-be\.env`:

```env
# Database (XAMPP defaults)
DB_HOST=localhost
DB_PORT=3306
DB_NAME=atims
DB_USER=root
DB_PASSWORD=

# Application
APP_ENV=development
APP_DEBUG=true
APP_URL=http://localhost/atims-be

# JWT Secret (change in production!)
JWT_SECRET=your-secret-key-change-in-production-use-a-strong-random-key
```

### 4. Set Permissions

Right-click `C:\xampp\htdocs\atims\atims-be\storage` folder:
- Properties → Security → Edit
- Add " Everyone" or your user account
- Check "Full control"
- Apply

## Step 5: Enable mod_rewrite

XAMPP's Apache typically has mod_rewrite enabled by default, but verify:

1. Open `C:\xampp\apache\conf\httpd.conf`
2. Find: `#LoadModule rewrite_module modules/mod_rewrite.so`
3. Remove the `#` to uncomment: `LoadModule rewrite_module modules/mod_rewrite.so`
4. Save the file

Also ensure:
```apache
<Directory "C:/xampp/htdocs">
    Options Indexes FollowSymLinks Includes ExecCGI
    AllowOverride All
    Require all granted
</Directory>
```

## Step 6: Test Backend

### Test API Health

Open browser and visit:
```
http://localhost/atims-be/health
```

Expected response:
```json
{
    "status": 200,
    "headers": {
        "Content-Type": "application/json"
    },
    "body": {
        "success": true,
        "data": {
            "status": "healthy",
            "database": "connected",
            "timestamp": "2024-01-15 10:30:00",
            "version": "1.0.0"
        }
    }
}
```

### Test Swagger UI

Open browser and visit:
```
http://localhost/atims-be/swagger/
```

You should see the Swagger UI with all API endpoints documented.

## Step 7: Test Authentication

### Register Test User

Using Swagger UI or curl:

```bash
curl -X POST http://localhost/atims-be/api/auth/register ^
  -H "Content-Type: application/json" ^
  -d "{\"username\":\"test_user\",\"email\":\"test@example.com\",\"password\":\"test123\",\"role\":\"Field Agent\"}"
```

### Login

```bash
curl -X POST http://localhost/atims-be/api/auth/login ^
  -H "Content-Type: application/json" ^
  -d "{\"username\":\"test_user\",\"password\":\"test123\"}"
```

Copy the JWT token from the response and store it.

### Test Protected Endpoint

```bash
curl -X GET http://localhost/atims-be/api/assets ^
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## Step 8: Troubleshooting

### 404 Not Found

**Problem**: API routes return 404

**Solution**: 
1. Verify `.htaccess` exists in `atims-be/`
2. Check Apache error log: `C:\xampp\apache\logs\error.log`
3. Ensure mod_rewrite is enabled

### Database Connection Failed

**Problem**: Health check shows database disconnected

**Solution**:
1. Verify MySQL is running in XAMPP
2. Check database name exists: `atims`
3. Verify schema was imported
4. Check `.env` credentials

### CORS Errors

**Problem**: Browser blocks API requests

**Solution**:
1. Verify `APP_URL` in `.env` matches your URL
2. Check CORS headers in `.htaccess`
3. Ensure you're using the correct URL (localhost vs 127.0.0.1)

### Permission Denied

**Problem**: Cannot write to storage directories

**Solution**:
1. Check `storage/logs/` and `storage/uploads/` permissions
2. Ensure Apache user has write access
3. Set folder permissions to 775 or 777 (temporarily for testing)

## Verify Installation

Once everything is set up, verify:

1. ✅ Database `atims` exists with all tables
2. ✅ `http://localhost/atims-be/health` returns healthy status
3. ✅ `http://localhost/atims-be/swagger/` shows API documentation
4. ✅ Authentication endpoints work
5. ✅ Protected endpoints return data with valid token

Your backend is now ready for development! 🎉
