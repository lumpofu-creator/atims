# Implementation Plan: ATIMS Asset Tracking and Infrastructure Management System

## Overview

This implementation plan covers all 15 functional requirements for the Asset Tracking and Infrastructure Management System (ATIMS). The implementation follows the requirements-first workflow with infrastructure/database setup first, followed by core API/backend development, and finally frontend PWA development. All tasks reference specific requirements for traceability.

## Tasks

- [x] 1. Infrastructure and Database Setup
  - [ ] 1.1 Create MySQL database schema with spatial support
    - [ ] Create `assets` table with POINT geometry type and SPATIAL INDEX
    - [ ] Create `inspections` table with inspection_type ENUM
    - [ ] Create `ledgers` table with JSON columns for audit trail
    - [ ] Create `task_queues` table for incident assignment workflow
    - [ ] Create `attachments` index table for document management
    - [ ] Extend `users` table with MFA fields (mfa_enabled, mfa_secret, last_login)
    - _Requirements: 2.2, 3, 5.1, 14_
  
  - [ ] 1.2 Set up PHP backend project structure
    - [ ] Create directory structure: `backend/src/Models/`, `backend/src/Services/`, `backend/src/routes.php`
    - [ ] Configure `.htaccess` for URL rewriting and security headers
    - [ ] Set up Composer autoloading with PSR-4
    - [ ] Configure PHP settings for shared hosting (upload_max_filesize=8M, post_max_size=16M, max_execution_time=30)
    - _Requirements: 12.4_
  
  - [ ] 1.3 Configure Angular PWA project
    - [ ] Generate Angular project with routing and TypeScript strict mode
    - [ ] Install Leaflet.js and @asymmetrik/ngx-leaflet for map rendering
    - [ ] Install html5-qrcode for QR code scanning
    - [ ] Configure ngsw-config.json for offline support
    - [ ] Set up PWA manifest.webmanifest for installable app support
    - _Requirements: 7_

- [ ] 2. Core Backend Services Implementation
  - [ ] 2.1 Implement Haversine Service for distance calculation
    - [ ] Create `HaversineService.php` with Earth radius 6371km constant
    - [ ] Implement `calculateDistance()` method using MySQL spatial functions
    - [ ] Add unit tests with equator, poles, and date line test cases
    - [ ] Add property test: Haversine distance symmetry (Property 1)
    - _Requirements: 4.1, 4.4, 14.4_
  
  - [ ] 2.2 Implement Asset Repository with spatial queries
    - [ ] Create `AssetRepository` class extending base repository pattern
    - [ ] Implement `findByLocation()` method using ST_Distance_Sphere
    - [ ] Implement `getWithHierarchy()` for 3-tier category traversal
    - [ ] Add spatial index queries for performance optimization
    - _Requirements: 2.3, 2.2_
  
  - [ ] 2.3 Implement Ledger Service for immutable audit trail
    - [ ] Create `LedgerService.php` with append-only write method
    - [ ] Implement `recordEvent()` with JSON old_data/new_data capture
    - [ ] Add IP address and device type logging middleware integration
    - [ ] Create unit tests for ledger completeness (Property 6)
    - _Requirements: 5.2, 5.5, 14.6_
  
  - [ ] 2.4 Implement QR Code Service
    - [ ] Integrate endroid/qr-code library for generation
    - [ ] Implement `generateStateId()` with format [PREFIX]-[6 DIGITS]
    - [ ] Implement `generateQrUrl()` with simplified short URL pattern
    - [ ] Add tests for QR code readability on low-density labels
    - _Requirements: 6.1, 6.4, 15.1, 15.9_
  
  - [ ] 2.5 Implement Image Compression Service
    - [ ] Create `ImageService.php` with GD library integration
    - [ ] Implement `compressForMobile()` enforcing 800KB limit
    - [ ] Implement `compressForDesktop()` enforcing 5MB limit
    - [ ] Add property test: preserve files under 800KB (Property 7)
    - _Requirements: 8.2, 8.3_

- [ ] 3. API Endpoints Implementation
  - [ ] 3.1 Implement Authentication & RBAC endpoints
    - [ ] Create `/api/auth/login` with JWT token generation
    - [ ] Create `/api/auth/logout` with session invalidation
    - [ ] Implement `RateLimitMiddleware` (5 attempts → 15-minute lockout)
    - [ ] Create `RoleGuard` for endpoint protection
    - _Requirements: 1.1, 1.2, 1.3, 11.1_
  
  - [ ] 3.2 Implement Asset Onboarding endpoints
    - [ ] Create `POST /api/assets` with full metadata validation
    - [ ] Implement 3-tier category hierarchy validation
    - [ ] Add self-referencing parent_asset_id handling
    - [ ] Auto-generate Spatial POINT from GPS coordinates
    - [ ] _Requirements: 2.1, 2.3, 2.4, 15.1, 15.3_
  
  - [ ] 3.3 Implement Inspection endpoints
    - [ ] Create `POST /api/inspections` with GPS accuracy validation
    - [ ] Add GPS accuracy check: block if > 15 meters (Requirement 3.5)
    - [ ] Return Haversine distance in response for logging
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_
  
  - [ ] 3.4 Implement Incident & Breakdown workflow endpoints
    - [ ] Create `POST /api/incidents/log` for QR scan + defect image
    - [ ] Create `POST /api/incidents/verify` for repair validation
    - [ ] Implement Haversine distance check in verification endpoint
    - [ ] Add `/api/incidents/unresolved` for Logistics Officer view
    - [ ] Add `/api/incidents/history/{assetId}` for State Auditor
    - _Requirements: 14.1, 14.2, 14.3, 14.4, 14.5, 14.6_
  
  - [ ] 3.5 Implement Task Queue endpoints
    - [ ] Create `POST /api/tasks/assign` for Logistics Officer dispatch
    - [ ] Create `GET /api/tasks?agent_id={id}` for Field Agent queue
    - [ ] Create `PUT /api/tasks/{id}` for status updates
    - [ ] Implement global queue removal on assignment
    - _Requirements: 14.3_
  
  - [ ] 3.6 Implement Document Upload endpoints
    - [ ] Create `POST /api/uploads` with MIME type validation
    - [ ] Implement file size enforcement (800KB mobile, 5MB desktop)
    - [ ] Add attachment index table insertion
    - _Requirements: 8.1, 8.4_
  
  - [ ] 3.7 Implement Executive Dashboard endpoints
    - [ ] Create `GET /api/dashboards/kpi` for real-time metrics
    - [ ] Create `GET /api/dashboards/map-pins` for delta updates
    - [ ] Implement Capital at Risk calculation endpoint
    - _Requirements: 11.2, 11.4_
  
  - [ ] 3.8 Implement Reporting & Export endpoints
    - [ ] Create `POST /api/reports/generate` with PDF, Excel, CSV formats
    - [ ] Implement date range and status filtering
    - [ ] Add French localization to all export content
    - _Requirements: 9.1, 9.2, 13.2_

- [ ] 4. Frontend Implementation
  - [ ] 4.1 Implement Authentication UI
    - [ ] Create login component with rate limit feedback
    - [ ] Implement invite-only registration (blocked self-registration)
    - [ ] Add MFA support UI (TOTP, SMS, Email OTP)
    - _Requirements: 10.1, 10.2, 10.6_
  
  - [ ] 4.2 Implement Asset Onboarding UI
    - [ ] Create asset registration form with 3-tier category selector
    - [ ] Add GPS coordinate inputs with WGS 84 validation
    - [ ] Implement parent-child asset relationship selector
    - [ ] Add QR code preview before print
    - _Requirements: 15.2, 15.4, 15.5, 15.6_
  
  - [ ] 4.3 Implement Inspection Workflow UI
    - [ ] Create QR scanner component using html5-qrcode
    - [ ] Build inspection form with condition status selection
    - [ ] Implement GPS accuracy indicator and submission blocking
    - [ ] Add image capture for defect documentation (mobile)
    - _Requirements: 6.2, 6.4, 3.1, 3.5_
  
  - [ ] 4.4 Implement Incident & Breakdown UI
    - [ ] Create incident log form with defect image upload
    - [ ] Implement dashboard map with Leaflet.js pin updates
    - [ ] Add red alert asset highlighting on map
    - [ ] Create task assignment UI for Logistics Officer
    - _Requirements: 14.1, 14.2_
  
  - [ ] 4.5 Implement Executive Dashboard UI
    - [ ] Integrate Leaflet.js map component with dynamic pins
    - [ ] Create KPI cards: Total Portfolio Value, Operational Health Rate, Capital at Risk
    - [ ] Implement pin color coding: Green/Red/Gray based on status
    - [ ] Add 90-day inspection warning flags
    - _Requirements: 11.1, 11.2, 11.3, 11.4_
  
  - [ ] 4.6 Implement Offline PWA Support
    - [ ] Configure Service Worker for API caching
    - [ ] Implement IndexedDB for offline inspection storage
    - [ ] Create sync service with connection status monitoring
    - [ ] Add auto-upload queue when connectivity restored
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_
  
  - [ ] 4.7 Implement Localization (French)
    - [ ] Create French translation files for all UI text
    - [ ] Implement translation service with fallback to English
    - [ ] Add French to all PDF/Excel/CSV exports
    - [ ] Translate all error messages
    - _Requirements: 13.1, 13.2, 13.3_

- [ ] 5. Testing Implementation
  - [ ] 5.1 Write unit tests for core services
    - [ ] Test Haversine calculation with edge cases (poles, date line)
    - [ ] Test image compression preserve/uncompress behavior
    - [ ] Test ledger record creation with JSON data
    - _Requirements: 4, 8, 5_
  
  - [ ] 5.2 Write property-based tests
    - [ ] Property 1: Haversine distance symmetry test (1000 iterations)
    - [ ] Property 2: GPS validation threshold test (100 iterations)
    - [ ] Property 3: Status change immutability test (100 iterations)
    - [ ] Property 4: Task assignment exclusivity test (100 iterations)
    - [ ] Property 5: Capital at Risk accuracy test (100 iterations)
    - [ ] Property 6: Ledger event completeness test (100 iterations)
    - [ ] Property 7: Image compression preservation test (100 iterations)
    - [ ] Property 8: Offline sync integrity test (100 iterations)
    - _Requirements: 4, 8, 5, 14_
  
  - [ ] 5.3 Write integration tests
    - [ ] Test complete incident workflow: log → assign → verify → update
    - [ ] Test drift detection: report from >2km → forensic state
    - [ ] Test offline sync: create offline → go online → verify DB
    - [ ] Test role-based access: 403 on unauthorized operations
    - _Requirements: 14, 4, 7, 1_
  
  - [ ] 5.4 Write end-to-end tests
    - [ ] Test user provisioning workflow: invite → link → form → account
    - [ ] Test QR dual routing: authenticated vs. public
    - [ ] Test export formats: PDF, Excel, CSV with filters
    - _Requirements: 10, 6, 9_
  
  - [ ] 5.5 Write performance tests
    - [ ] Test API response time < 2.0 seconds on shared hosting
    - [ ] Test database query optimization with spatial indexes
    - [ ] Test file upload compression performance
    - _Requirements: 12.1, 12.2, 12.3_

- [ ] 6. Security Implementation
  - [ ] 6.1 Implement authentication middleware
    - [ ] Create JWT validation middleware for PHP backend
    - [ ] Add MFA verification header check for protected endpoints
    - [ ] Implement token refresh mechanism
    - _Requirements: 1.4, 10.7_
  
  - [ ] 6.2 Implement RBAC enforcement
    - [ ] Create route guards in Angular for role-based access
    - [ ] Add middleware checks in PHP for API endpoint protection
    - [ ] Test all four roles: Field Agent, Logistics Officer, State Auditor, Executive
    - _Requirements: 1.2, 1.3_
  
  - [ ] 6.3 Implement file upload security
    - [ ] Add MIME type whitelist for images and documents
    - [ ] Implement virus scanning placeholder (extensibility point)
    - [ ] Add file size validation on both client and server
    - _Requirements: 8.1, 8.2, 8.3_
  
  - [ ] 6.4 Implement audit logging
    - [ ] Add user ID, IP address, device type to all ledger entries
    - [ ] Implement immutable timestamp recording
    - _Requirements: 5.2, 5.5_

- [ ] 7. Deployment and Configuration
  - [ ] 7.1 Configure shared hosting deployment
    - [ ] Set up `.htaccess` for URL rewriting
    - [ ] Configure PHP settings (upload limits, execution time)
    - [ ] Optimize database for shared hosting constraints
    - _Requirements: 12.4, 12.5_
  
  - [ ] 7.2 Configure production deployment
    - [ ] Set up dedicated server configuration
    - [ ] Implement Redis caching for KPI calculations
    - [ ] Configure SSL/TLS for all API endpoints
    - _Requirements: 12_
  
  - [ ] 7.3 Set up monitoring
    - [ ] Configure error logging to storage/logs/
    - [ ] Add database query performance monitoring
    - [ ] Implement health check endpoint
    - _Requirements: 12_

- [ ] 8. Documentation
  - [ ] 8.1 Create API documentation
    - [ ] Document all endpoints with request/response examples
    - [ ] Include authentication and error handling
    - _Requirements: All_
  
  - [ ] 8.2 Create user documentation
    - [ ] Create role-specific guides (Field Agent, Logistics Officer, etc.)
    - [ ] Document offline operation procedures
    - _Requirements: All_
  
  - [ ] 8.3 Create deployment documentation
    - [ ] Document shared hosting setup steps
    - [ ] Document production deployment procedures
    - _Requirements: 12_

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Property-based tests validate universal correctness properties
- Unit tests validate specific examples and edge cases
- Integration tests validate system behavior across components
- All backend code must comply with PHP 8.2+ and MySQL 8.0+ requirements
- All frontend code must be compatible with Angular 16+ and progressive web app standards
- [ ] 0. Project Structure and Separation
  - [ ] 0.1 Create separate project folders
    - [ ] Create `atims-be/` directory for PHP backend code
    - [ ] Create `atims-ui/` directory for Angular frontend PWA code
    - [ ] Create shared root `index.php` for routing to backend
    - [ ] Configure `.htaccess` in root to route `/api/*` to `atims-be/` and other routes to `atims-ui/`
    - [ ] Set up shared `.env` configuration accessible by both projects
    - _Requirements: 12.4 (Shared Hosting), 12.5 (Dedicated Server)_
  
  - [ ] 0.2 PHP Backend Structure (`atims-be/`)
    - [ ] Create `atims-be/src/Models/` for data models
    - [ ] Create `atims-be/src/Services/` for business logic (HaversineService, ImageService, QrCodeService, etc.)
    - [ ] Create `atims-be/src/Middleware/` for auth, rate limiting, RBAC
    - [ ] Create `atims-be/src/routes.php` for API endpoint definitions
    - [ ] Create `atims-be/public/` for API entry points
    - [ ] Create `atims-be/storage/` for uploads, logs, cache (outside web root)
    - [ ] Create `atims-be/config/` for database and application configuration
    - _Requirements: 12.4, 12.5_
  
  - [ ] 0.3 Angular Frontend Structure (`atims-ui/`)
    - [ ] Generate Angular project with structure: `src/app/core/`, `src/app/shared/`, `src/app/features/`
    - [ ] Create feature modules: `incidents/`, `dashboard/`, `assets/`, `tasks/`, `reports/`
    - [ ] Set up PWA manifest and service worker configuration
    - [ ] Configure API base URL to `../atims-be/public/api/`
    - _Requirements: 12.4, 12.5_
  
  - [ ] 0.4 Shared Resources
    - [ ] Create shared `shared/` directory for common constants (French translations, API error codes)
    - [ ] Set up shared database connection configuration accessible by both projects
    - [ ] Configure shared `.env.example` for deployment guidance
    - _Requirements: 12.4, 12.5_
  
  - [ ] 0.5 Deployment Configuration
    - [ ] Create shared hosting deployment structure in `atims-be/` and `atims-ui/`
    - [ ] Configure production deployment paths in `atims-be/config/db.php` and `atims-ui/src/environments/`
    - _Requirements: 12.4, 12.5, 12.6_
  
- [ ] 1. Infrastructure and Database Setup
- [ ] 2. Core Backend Services (atims-be/src/Services/)
  - [ ] 2.1 Haversine Service
    - [ ] Implement Haversine formula with Earth radius 6371km
    - [ ] Add 15m GPS accuracy buffer validation
    - [ ] Add 2.0km drift threshold check with breach protocol
    - [ ] Add spatial distance calculation using MySQL ST_Distance_Sphere
    - _Requirements: 4.2, 4.3, 14.4_
  
  - [ ] 2.2 Asset Repository
    - [ ] Implement CRUD operations for assets table
    - [ ] Implement parent-child relationship queries
    - [ ] Implement 3-tier category hierarchy validation
    - [ ] Implement spatial point generation from coordinates
    - _Requirements: 2.1, 2.2, 2.3, 2.4_