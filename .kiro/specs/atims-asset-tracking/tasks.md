# Implementation Plan: ATIMS Asset Tracking and Infrastructure Management System

## Overview

This implementation plan covers all 15 functional requirements for the Asset Tracking and Infrastructure Management System (ATIMS). The implementation follows the requirements-first workflow with infrastructure/database setup first, followed by core API/backend development, and finally frontend PWA development. All tasks reference specific requirements for traceability.

**Last Updated:** 2026-11-01 (based on context gathering findings)

**Current State:** 
- **Backend:** Laravel 11 in `atims-be/` - services complete, controllers stubbed, 2 tables missing
- **Frontend:** Angular 16 PWA in `atims-ui/` - core structure complete, basic components implemented

## Tasks

### Phase 1: Infrastructure and Setup ✅ COMPLETED

- [x] 1.0 Laravel Project Setup
  - [x] Laravel 11 project created in `atims-be/` directory
  - [x] Database configured (MySQL with spatial support)
  - [x] Composer dependencies installed
  - _Requirements: 12.4_

- [x] 1.1 Base Backend Services Implemented
  - [x] `HaversineService` - Complete with 6371km Earth radius, 2.0km geofence threshold, 15m GPS accuracy check
  - [x] `ImageService` - Complete with 800KB mobile and 5MB desktop compression
  - [x] `QrCodeService` - Complete with state ID validation
  - [x] `LedgerService` - Skeleton exists, needs ledgers table integration
  - _Requirements: 4, 5, 8_

- [x] 1.2 Existing Database Tables
  - [x] `users` - Custom schema with MFA fields (mfa_enabled, mfa_secret, last_login, etc.)
  - [x] `assets` - With spatial columns (POINT geometry for location_point)
  - [x] `cache` - Laravel built-in
  - [x] `jobs` - Laravel built-in
  - [x] `sessions` - Laravel built-in

- [x] 1.3 Existing API Controllers (Stubbed)
  - [x] `HealthCheckController` - Working (DB connection test)
  - [x] `AuthController` - Placeholder (login, logout, me endpoints)
  - [x] `AssetController` - Partial (GET /api/assets working, others stubbed)
  - [x] `QrCodeController` - Placeholder (scan, verify endpoints)
  - _Requirements: All_

- [x] 1.4 Angular PWA Project Setup
  - [x] Angular 16 project created in `atims-ui/` directory
  - [x] TypeScript strict mode enabled
  - [x] PWA manifest and service worker configured
  - [x] Leaflet.js and @asymmetrik/ngx-leaflet installed
  - [x] html5-qrcode installed for QR scanning
  - _Requirements: 7, 11, 12_

### Phase 2: Database Schema (Priority: Critical) ⏳ TODO

- [ ] 2.1 Create missing database migrations
  - [ ] Create `inspections` table (Requirement 3, 14)
    - Fields: asset_id, user_id, inspection_type (ENUM), condition_status (ENUM), field_notes, verification_image, device_latitude, device_longitude, device_timestamp
  - [ ] Create `ledgers` table (Requirement 5 - Anti-Corruption Ledger)
    - Fields: event_type, table_name, record_id, old_data (JSON), new_data (JSON), user_id, ip_address, device_type, metadata (JSON), created_at
  - [ ] Create `task_queues` table (Requirement 14 - Task Assignment)
    - Fields: task_type (ENUM), asset_id, assigned_user_id, global_queue_order, status (ENUM), due_date, created_at, completed_at
  - [ ] Create `attachments` table (Requirement 8 - Document Upload)
    - Fields: asset_id, user_id, inspection_log_id, ledger_event_id, file_path, file_name, file_size, file_type, created_at
  - [ ] Create `categories` table (Requirement 2.3 - 3-tier hierarchy)
    - Fields: name, code, parent_id (self-referencing), category_type (ENUM: general_group, asset_group, asset_type)
  - _Requirements: 2.2, 2.3, 3, 5.1, 8.1, 14_

- [ ] 2.2 Run migrations and verify schema
  - [ ] Execute `php artisan migrate`
  - [ ] Verify spatial index on assets.location_point
  - [ ] Verify all foreign key constraints
  - [ ] Test database connection with `php artisan tinker`

### Phase 3: Models and Repositories ⏳ TODO

- [ ] 3.1 Create Eloquent models
  - [ ] Create `Asset` model with spatial attributes and relationships
  - [ ] Create `Inspection` model with asset/user relationships
  - [ ] Create `Ledger` model for audit trail
  - [ ] Create `TaskQueue` model for assignment workflow
  - [ ] Create `Attachment` model for file tracking
  - [ ] Create `Category` model for 3-tier hierarchy
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 3, 5, 14_

- [ ] 3.2 Implement AssetRepository with spatial queries
  - [ ] Implement CRUD operations for assets table
  - [ ] Implement `findByLocation()` method using ST_Distance_Sphere
  - [ ] Implement `getWithHierarchy()` for 3-tier category traversal
  - [ ] Add spatial index queries for performance optimization
  - _Requirements: 2.2, 2.3_

- [ ] 3.3 Complete LedgerService for immutable audit trail
  - [ ] Implement `recordEvent()` with JSON old_data/new_data capture
  - [ ] Add IP address and device type logging
  - [ ] Create unit tests for ledger completeness
  - _Requirements: 5.2, 5.5, 14.6_

### Phase 4: API Endpoints Implementation ⏳ TODO

- [ ] 4.1 Complete AssetController with real database operations
  - [ ] Implement `store()` with full metadata validation and spatial point generation
  - [ ] Implement `update()` with history tracking
  - [ ] Implement `destroy()` (soft delete only - anti-corruption ledger requirement)
  - [ ] Add pagination, filtering, and sorting
  - _Requirements: 2.1, 2.3, 2.4, 15.1, 15.3_

- [ ] 4.2 Implement Inspection endpoints
  - [ ] Create `InspectionController` with `POST /api/inspections`
  - [ ] Add GPS accuracy check: block if > 15 meters (Requirement 3.5)
  - [ ] Calculate and return Haversine distance in response
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

- [ ] 4.3 Implement Incident & Breakdown workflow endpoints
  - [ ] Create `IncidentController`
  - [ ] Implement `POST /api/incidents/log` for QR scan + defect image
  - [ ] Implement `POST /api/incidents/verify` for repair validation with Haversine check
  - [ ] Add `GET /api/incidents/unresolved` for Logistics Officer view
  - [ ] Add `GET /api/incidents/history/{assetId}` for State Auditor
  - _Requirements: 14.1, 14.2, 14.3, 14.4, 14.5, 14.6_

- [ ] 4.4 Implement Task Queue endpoints
  - [ ] Create `TaskController`
  - [ ] Implement `POST /api/tasks/assign` for Logistics Officer dispatch
  - [ ] Implement `GET /api/tasks?agent_id={id}` for Field Agent queue
  - [ ] Implement `PUT /api/tasks/{id}` for status updates
  - _Requirements: 14.3_

- [ ] 4.5 Implement Document Upload endpoints
  - [ ] Create `AttachmentController`
  - [ ] Implement `POST /api/uploads` with MIME type validation
  - [ ] Implement file size enforcement (800KB mobile, 5MB desktop)
  - _Requirements: 8.1, 8.4_

- [ ] 4.6 Implement Executive Dashboard endpoints
  - [ ] Create `DashboardController`
  - [ ] Implement `GET /api/dashboards/kpi` for real-time metrics
  - [ ] Implement `GET /api/dashboards/map-pins` for delta updates
  - [ ] Implement `Capital at Risk` calculation
  - _Requirements: 11.2, 11.4_

### Phase 5: Authentication and Security ⏳ TODO

- [ ] 5.1 Implement Sanctum authentication
  - [ ] Set up Sanctum for API token authentication
  - [ ] Implement `POST /api/auth/login` with JWT/Sanctum token generation
  - [ ] Implement `POST /api/auth/logout` with session invalidation
  - [ ] Implement `GET /api/auth/me` for user details
  - _Requirements: 1.1, 1.2, 1.4_

- [ ] 5.2 Implement Rate Limiting
  - [ ] Configure RateLimitMiddleware (5 attempts → 15-minute lockout)
  - [ ] Implement per-user rate limiting
  - _Requirements: 10.5_

- [ ] 5.3 Implement Role-based Access Control
  - [ ] Update RoleGuard middleware for route protection
  - [ ] Protect routes with role requirements (Field Agent, Logistics Officer, State Auditor, Executive)
  - _Requirements: 1.2, 1.3_

### Phase 6: QR Code and External Services ⏳ TODO

- [ ] 6.1 Complete QrCodeController
  - [ ] Implement `GET /api/qrcode/scan/{stateId}` for authenticated field agents
  - [ ] Implement `GET /api/qrcode/verify/{stateId}` for public verification
  - [ ] Add asset lookup from database
  - _Requirements: 6.2, 6.4_

### Phase 7: Testing (Optional for MVP) ⏳ TODO

- [ ] 7.1 Write integration tests
  - [ ] Test complete incident workflow: log → assign → verify → update
  - [ ] Test drift detection: report from >2km → forensic state
  - [ ] Test role-based access: 403 on unauthorized operations
  - _Requirements: 14, 4, 1_

- [ ] 7.2 Write API endpoint tests
  - [ ] Test all Asset endpoints
  - [ ] Test all Inspection endpoints
  - [ ] Test all Incident endpoints
  - _Requirements: All_

---

## Frontend Tasks (atims-ui/) ✅ PARTIALLY COMPLETE

### Phase 8: Core Angular Components ✅ COMPLETED

- [x] 8.1 Main Application Structure
  - [x] Angular 16 project with routing
  - [x] Feature modules: assets, dashboard, incidents
  - [x] Shared services and components
  - [x] Environment configuration with API base URL
  - _Requirements: 12_

- [x] 8.2 Dashboard Module
  - [x] Dashboard component with KPI cards (Total Value, Health Rate, Capital at Risk)
  - [x] Map component with Leaflet.js integration
  - [x] Map service for pin management
  - [x] KPI service for metrics calculation
  - _Requirements: 11.1, 11.2_

- [x] 8.3 Assets Module
  - [x] Assets list component with search
  - [x] Asset service with CRUD operations
  - [x] Status badges with French labels
  - _Requirements: 2_

- [x] 8.4 Incidents Module
  - [x] Incident log component with QR scanner
  - [x] GPS accuracy indicator (15m threshold)
  - [x] Image upload with 800KB limit
  - [x] Incident service for API integration
  - _Requirements: 3, 6, 14_

- [x] 8.5 Offline PWA Support
  - [x] PWA manifest with icons and installable
  - [x] Service Worker configuration
  - [x] Offline service for local storage
  - [x] Sync service for auto-upload
  - [x] Offline indicator banner
  - _Requirements: 7_

- [x] 8.6 QR Scanner Component
  - [x] QR scanner using html5-qrcode
  - [x] Visual scanner overlay
  - [x] Success/error event handling
  - _Requirements: 6.2_

- [x] 8.7 Shared Services
  - [x] OfflineService - Local storage operations
  - [x] SyncService - Auto sync coordination
  - [x] MapService - Map pin management
  - [x] KpiService - KPI calculations
  - [x] AssetService - Asset CRUD operations
  - [x] IncidentService - Incident workflow
  - _Requirements: All_

### Phase 9: Frontend Components to Complete ⏳ TODO

- [ ] 9.1 Tasks Module
  - [ ] Tasks list component
  - [ ] Task assignment UI for Logistics Officer
  - [ ] Task detail view
  - _Requirements: 14.3_

- [ ] 9.2 Settings Module
  - [ ] User profile settings
  - [ ] MFA configuration
  - [ ] Notification preferences
  - _Requirements: 10.6_

- [ ] 9.3 Reports Module
  - [ ] Report generation UI
  - [ ] PDF export functionality
  - [ ] Excel export functionality
  - [ ] CSV export functionality
  - _Requirements: 9.1, 9.2_

- [ ] 9.4 Authentication UI
  - [ ] Login component
  - [ ] Invite-only registration form
  - [ ] MFA verification UI (TOTP, SMS, Email OTP)
  - _Requirements: 10.1, 10.2, 10.6_

- [ ] 9.5 Asset Detail Component
  - [ ] Asset details view
  - [ ] Asset edit form
  - [ ] Asset photos/attachments display
  - _Requirements: 2.1, 2.4, 8_

- [ ] 9.6 Asset Onboarding Form
  - [ ] Asset registration form
  - [ ] 3-tier category selector
  - [ ] Parent-child relationship selector
  - [ ] QR code preview
  - _Requirements: 15.2, 15.4, 15.5, 15.6_

- [ ] 9.7 Incident History Component
  - [ ] Incident history timeline
  - [ ] Ledger entries display
  - [ ] Asset status changes history
  - _Requirements: 14.6_

### Phase 10: Localization (French) ⏳ TODO

- [ ] 10.1 French Translations
  - [ ] Create French translation files (fr.json)
  - [ ] Implement translation service with fallback
  - [ ] Translate all UI text to French
  - _Requirements: 13.1_

- [ ] 10.2 Export Localization
  - [ ] French labels in PDF exports
  - [ ] French headers in Excel exports
  - [ ] French headers in CSV exports
  - _Requirements: 13.2_

- [ ] 10.3 Error Messages
  - [ ] Translate all error messages to French
  - _Requirements: 13.3_

### Phase 11: Testing (Frontend) ⏳ TODO

- [ ] 11.1 Unit Tests
  - [ ] Test all components with Jest
  - [ ] Test services with Jest
  - _Requirements: All_

- [ ] 11.2 E2E Tests
  - [ ] Test complete user workflows with Cypress
  - [ ] Test offline sync behavior
  - _Requirements: All_

### Phase 12: Deployment ⏳ TODO

- [ ] 12.1 Frontend Build and Deploy
  - [ ] Configure production build (ng build --configuration=production)
  - [ ] Deploy to shared hosting or CDN
  - [ ] Configure API base URL to backend
  - _Requirements: 12_

- [ ] 12.2 Backend-Frontend Integration
  - [ ] Configure CORS on backend for frontend origin
  - [ ] Set up shared `.env` configuration accessible by both projects
  - _Requirements: 12.4_

## Implementation Status

| Phase | Status | Notes |
|-------|--------|-------|
| Backend Infrastructure | ✅ Complete | Laravel app, services, controllers stubbed |
| Backend Database | ⏳ Pending | Missing: inspections, ledgers, task_queues, attachments, categories |
| Backend Models | ⏳ Pending | Need 6 Eloquent models |
| Backend API Endpoints | ⏳ Pending | Complete controllers with real DB |
| Backend Auth & Security | ⏳ Pending | Sanctum, rate limiting, RBAC |
| Frontend Structure | ✅ Complete | Angular 16 PWA, all routes configured |
| Frontend Components | ⏳ Partial | Dashboard, Assets, Incidents done; Tasks, Settings, Reports pending |
| Frontend Localization | ⏳ Pending | French translations needed |
| Frontend Testing | ⏳ Optional | Unit and E2E tests |

## Notes

- Tasks marked with `✅` are completed
- Tasks marked with `⏳` are pending
- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Backend implementation should use Laravel best practices and PSR-12 coding standard
- All database tables must use MySQL 8.0+ spatial geometry functions
- All API responses should use standardized format with success/error states
- Frontend uses Angular 16 with PWA support, Leaflet.js for maps, html5-qrcode for QR scanning