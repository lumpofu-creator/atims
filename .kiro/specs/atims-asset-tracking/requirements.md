# Requirements Document

## Introduction

The Asset Tracking and Infrastructure Management System (ATIMS) provides public sector entities, ministries, and municipal authorities with comprehensive control, tracking, and auditability over state infrastructure and physical property. The system supports four distinct user roles with role-based access control, offline-first mobile operations for field agents, an immutable anti-corruption audit ledger, and geo-fencing capabilities to detect asset drift. The target stack is Angular (Frontend PWA) | PHP (Backend API) | MySQL (Database), with staging on shared hosting and production on dedicated servers.

## Glossary

- **ATIMS**: Asset Tracking and Infrastructure Management System
- **Asset**: A physical state property or infrastructure item with unique identification and tracking capabilities
- **Asset Tag**: Unique alphanumeric code assigned to each asset for identification and QR scanning
- **Field Agent**: User role responsible for performing field audits and inspections using mobile devices
- **Logistics Officer**: User role responsible for asset onboarding, inventory management, and user provisioning
- **State Auditor**: User role responsible for forensic tracking, audit review, and compliance verification
- **Executive**: User role responsible for strategic dashboards and high-level asset oversight
- **Inspection**: Field verification event captured by Field Agents including asset condition, GPS coordinates, and supporting documentation
- **Ledger**: Append-only immutable audit trail recording all asset status changes with full forensic context
- **Geofence**: Virtual boundary defined by GPS coordinates used to detect asset drift beyond authorized locations

## Requirements

### Requirement 1: Role-Based Access Control

**User Story:** As a system administrator, I want users to have role-specific privileges, so that sensitive operations are restricted to authorized personnel.

#### Acceptance Criteria

1. WHEN a user logs into the system, THE ATIMS SHALL assign them to exactly one of four roles: Logistics Officer, Field Agent, State Auditor, or Executive
2. WHILE a user is authenticated, THE ATIMS SHALL enforce role-specific access controls on all API endpoints
3. WHERE a user attempts an unauthorized operation, THE ATIMS SHALL return HTTP 403 Forbidden with a descriptive error message
4. WHEN the system receives an authentication request, THE ATIMS SHALL validate credentials and session state before granting access

### Requirement 2: Asset Data Model

**User Story:** As a Logistics Officer, I want to register assets with complete metadata, so that state property is fully traceable from acquisition to disposal.

#### Acceptance Criteria

1. THE Asset Data Model SHALL include exactly the following attributes: Asset ID, Unique State ID, Name/Title, Description, Category ID, Registered Location, GPS Coordinates, Spatial Point, Acquisition Date, Purchase Value, Current Value, and Current Status
2. WHEN an asset is created, THE ATIMS SHALL store the Spatial Point using MySQL native geometry point data type
3. THE Asset Category Taxonomy SHALL enforce a strict 3-tier hierarchy: General Category → Asset Group → Asset Type
4. WHERE a parent-child relationship exists between assets, THE ATIMS SHALL support a self-referencing parent_asset_id foreign key to enable compound asset management

### Requirement 3: Inspection Workflow

**User Story:** As a Field Agent, I want to capture structured inspection data during field visits, so that asset conditions are consistently documented for audit purposes.

#### Acceptance Criteria

1. WHEN a Field Agent submits an inspection, THE ATIMS SHALL capture exactly six attributes: Asset Verification ID, Inspection Type, Condition Status, Field Notes, Verification Image/Document, and Device Telemetry
2. THE Inspection Type SHALL be restricted to exactly four system tokens: Routine, Breakdown, Maintenance, and Handover
3. THE Asset Status SHALL be restricted to exactly four system states: Fonctionnel, En Panne, Déclassé, and Inconnu
4. WHEN device telemetry is captured, THE ATIMS SHALL record GPS Latitude/Longitude in WGS 84 format and an automated local timestamp
5. WHILE an inspection form is open, THE ATIMS SHALL disable submission until GPS accuracy is below 15 meters

### Requirement 4: Geo-Fencing and Drift Detection

**User Story:** As a State Auditor, I want the system to detect when field workers report assets from unauthorized locations, so that potential fraud or loss is identified immediately.

#### Acceptance Criteria

1. WHEN a Field Agent submits an inspection with GPS coordinates, THE ATIMS SHALL calculate the distance between the submitted coordinates and the asset's registered base location using the Haversine formula
2. IF the calculated distance exceeds 2.0 kilometers, THEN THE ATIMS SHALL trigger three security events: write a high-priority "Location Drift Anomaly" to the Anti-Corruption Ledger, flash an urgent red warning on the Executive Dashboard, and divert the status update to "Pending Forensic Clearance" state
3. WHERE GPS accuracy exceeds 15 meters, THE ATIMS SHALL block inspection submission until precision improves
4. WHEN calculating geofence distance, THE ATIMS SHALL use Earth radius of 6371 kilometers in the Haversine computation

### Requirement 5: Anti-Corruption Ledger

**User Story:** As a State Auditor, I want an immutable audit trail of all asset changes, so that forensic investigations can trace who made changes, when, and why.

#### Acceptance Criteria

1. THE ATIMS SHALL implement an append-only ledger that blocks all asset deletion operations
2. WHEN any attribute of an asset is modified, THE ATIMS SHALL record a ledger entry containing: old data, new data, user ID, network IP address, and device type
3. IF a user attempts to change an asset's status to "Scrapped" or "Written Off" without uploading supporting documentation, THEN THE ATIMS SHALL block the operation
4. WHERE an asset status change requires justification, THE ATIMS SHALL require PDF report or photo proof upload before completing the status transition
5. THE ATIMS SHALL store all ledger entries in chronological order with immutable timestamps

### Requirement 6: QR Code Generation and Dual Routing

**User Story:** As a Field Agent, I want to scan physical QR tags using my mobile camera, so that asset identification is fast and accurate in the field.

#### Acceptance Criteria

1. THE ATIMS SHALL generate QR code labels with simplified, low-density URL patterns optimized for scanning on low-end smartphone cameras
2. WHEN a QR code is scanned by a logged-in Field Agent, THE ATIMS SHALL open the operational check form interface
3. WHEN a QR code is scanned by the general public, THE ATIMS SHALL open a clean read-only webpage verifying the asset is legitimate registered government property
4. THE QR code SHALL decode instantly into an Asset Verification ID for processing

### Requirement 7: Offline-First Mobile Operations

**User Story:** As a Field Agent working in remote areas, I want to capture inspection data without network connectivity, so that my field work is not interrupted by poor signal coverage.

#### Acceptance Criteria

1. WHEN cellular network access drops completely, THE ATIMS SHALL block standard web requests and automatically write inspection data to the mobile phone's built-in local browser storage
2. A background worker SHALL constantly monitor the phone's connection status
3. WHEN cellular signal returns, THE background worker SHALL automatically upload the saved offline inspection queue to the backend database
4. AFTER successful upload, THE ATIMS SHALL clear the phone's temporary cache
5. WHEN the device regains connectivity, THE ATIMS SHALL preserve the integrity of queued inspection data without loss

### Requirement 8: Document Upload System

**User Story:** As a Logistics Officer, I want to attach supporting documentation to asset records, so that change requests have proper justification and audit trails.

#### Acceptance Criteria

1. THE ATIMS SHALL accept image formats (.jpg, .jpeg, .png) for Field Agent condition logging and documentation formats (.pdf, .docx) for administrative records
2. WHERE a Field Agent uploads a photo from mobile, THE ATIMS SHALL enforce a maximum file size of 800 KB and automatically compress images before transmission
3. WHERE a Logistics Officer uploads a document from desktop, THE ATIMS SHALL enforce a maximum file size of 5.0 MB
4. WHEN a file is uploaded, THE ATIMS SHALL store the file path in a dedicated attachments index table linked to the Asset ID, User ID, and relevant inspection_log_id or ledger_event_id

### Requirement 9: Reporting and Export Engine

**User Story:** As an Executive, I want to generate structured reports for decision-making and compliance, so that asset health and financial impact are clearly presented.

#### Acceptance Criteria

1. THE ATIMS SHALL support export of structured database views into three formats: PDF (form templates), Excel (.xlsx), and CSV (data dumps)
2. WHERE a user compiles a report, THE ATIMS SHALL allow filtering by exactly three variables: Target Department/Ministry, Asset Status Selection, and Specific Date Range Window
3. WHEN a high-priority breach occurs (geographic drift or unauthorized records), THE ATIMS SHALL display an instantaneous visual red banner warning in the active Angular user layout
4. WHERE standard routine flags are generated (maintenance schedules), THE ATIMS SHALL batch notifications into a nightly digest email delivered to supervisors each morning

### Requirement 10: Invite-Only User Provisioning

**User Story:** As a Logistics Officer, I want to provision new users through a controlled invitation workflow, so that only authorized personnel gain system access.

#### Acceptance Criteria

1. THE ATIMS SHALL operate as a closed, invite-only platform that blocks all self-registration attempts
2. WHEN a Logistics Officer initiates a user invitation, THE ATIMS SHALL generate an invitation email with a secure, time-limited link (24-hour expiration) to a provisioning portal
3. WHERE an invitee clicks the provisioning link, THE ATIMS SHALL direct them to a secure form requiring username, strong password (minimum 12 characters with mixed case, numbers, and symbols), and government-issued ID or organizational badge number for identity verification
4. WHEN an account is created, THE ATIMS SHALL set the initial session timeout to 30 minutes of inactivity
5. WHERE a user attempts login, THE ATIMS SHALL rate-limit attempts to 5 failed attempts before triggering a 15-minute lockout
6. WHERE MFA is enabled by the user, THE ATIMS SHALL support TOTP via authenticator apps, SMS-based OTP, and email-based OTP as fallback methods
7. IF MFA is enabled on an account, THEN THE ATIMS SHALL block MFA disable without administrator approval

### Requirement 11: Executive Dashboard

**User Story:** As an Executive, I want high-level asset overview dashboards, so that I can monitor operational health and financial risk at a glance.

#### Acceptance Criteria

1. THE ATIMS SHALL integrate an interactive map using open-source Leaflet.js to display all registered asset locations geographically without requiring paid external map API services
2. WHERE an asset's operational state changes, THE ATIMS SHALL dynamically update map pin colors: Green (Functional), Red (Broken Down), Gray (Unverified)
3. THE dashboard header SHALL feature real-time KPI cards displaying: Total Portfolio Value, Operational Health Rate, and Capital at Risk
4. WHEN an asset has not received a physical field inspection within 90 calendar days, THE ATIMS SHALL trigger a warning flag in the dashboard

### Requirement 12: Performance and Hosting Constraints

**User Story:** As a system operator, I want the application to perform reliably on shared hosting during staging, so that demos and stakeholder presentations are not interrupted.

#### Acceptance Criteria

1. ALL backend API responses SHALL execute in under 2.0 seconds to maintain high app responsiveness during shared hosting staging
2. THE ATIMS SHALL communicate via lightweight data payloads to preserve mobile bandwidth for field workers
3. CORE database lookups SHALL be optimized to maintain page load times under 2 seconds even on basic shared hosting servers
4. WHERE shared hosting is used, THE ATIMS SHALL enforce runtime constraints: PHP 8.2+, MySQL 8.0+ (with native spatial geometry support), post_max_size 16MB, upload_max_filesize 8MB, max_execution_time 30 seconds
5. WHERE shared hosting is used, THE ATIMS SHALL respect storage limits of 10GB shared SSD storage pool allocation

### Requirement 13: Localization

**User Story:** As a regional administrator, I want the system interface and reports in French, so that they comply with local administrative requirements.

#### Acceptance Criteria

1. WHILE the system engineering specification remains in English for development, THE ATIMS SHALL display all user-facing typography, buttons, titles, and printable data sheets in standard French
2. ALL export reports (PDF, Excel, CSV) SHALL present data in French when user-facing fields are displayed
3. WHERE error messages appear, THE ATIMS SHALL provide French translations for all user-facing text

### Requirement 14: Incident & Breakdown Operational Workflow

**User Story:** As a Logistics Officer, I want a closed-loop incident management workflow that tracks asset breakdowns from reporting through repair verification, so that asset availability and forensic history are maintained.

#### Acceptance Criteria

1. WHEN a Field Agent scans an asset QR tag with status 'En Panne' and uploads a defect image (max 800KB), THE ATIMS SHALL log an inspection entry and force the core asset 'current_status' to 'En Panne'
2. WHERE an asset status changes to 'En Panne', THE ATIMS SHALL immediately update the Leaflet.js dashboard without full page refresh: map pin turns Red and 'Capital at Risk' card recalculates to include the asset's Current Value
3. WHEN a Logistics Officer selects a red alert and assigns a Field Agent, THE ATIMS SHALL remove the task from the global queue and populate it directly onto the assigned Field Agent's mobile PWA checklist
4. WHEN a Field Agent rescans an asset for repair verification (inspection type 'Maintenance'), THE ATIMS SHALL execute the Haversine equation to match hardware GPS against the asset's registered coordinates
5. IF the Haversine distance d > 2.0 kilometers, THEN THE ATIMS SHALL execute the breach protocol (Ledger anomaly, Executive warning, Forensic clearance state) and block the database save
6. IF the Haversine calculation clears (d <= 2.0 km), THEN THE ATIMS SHALL update the asset status to 'Fonctionnel', write a permanent ledger entry: "Asset ID [X] status reverted to Fonctionnel by User ID [Y]. Spatial telemetry verified.", and update the dashboard (pin turns Green, value removed from 'Capital at Risk' card)

## Acceptance Criteria Summary

| Requirement | Test Type | Notes |
|-------------|-----------|-------|
| Role-Based Access Control | Unit, Integration | Verify all four roles and access control enforcement |
| Asset Data Model | Integration | Validate 3-tier hierarchy and spatial point storage |
| Inspection Workflow | Unit, Integration | Verify all six attributes captured correctly |
| Geo-Fencing | Integration | Test Haversine calculation and drift detection thresholds |
| Anti-Corruption Ledger | Integration, PBT | Verify append-only behavior and forensic data capture |
| QR Code Routing | Integration | Test dual routing based on authentication state |
| Offline Operations | Integration | Verify data persistence and auto-sync behavior |
| Document Upload | Integration | Test file size limits and compression |
| Reporting Engine | Integration | Verify PDF, Excel, CSV export formats |
| User Provisioning | Integration | Test invitation workflow and MFA support |
| Executive Dashboard | Integration | Verify KPI calculations and map rendering |
| Performance Constraints | Integration | Validate timing requirements under load |
| Localization | Integration | Verify French translations in UI and exports |

## Special Notes

### PBT Considerations

The following requirements are candidates for property-based testing:

1. **Geo-Fencing**: Test Haversine calculation with various coordinate combinations (equator, poles, date line crossings) to verify distance accuracy across global deployments

2. **Anti-Corruption Ledger**: Test that ledger entries are immutable and complete forensic data is captured for arbitrary asset modification sequences

3. **Document Upload Compression**: Test that images under 800KB remain unchanged, while images over 800KB are properly compressed

4. **Offline Sync**: Test that queued inspections are not lost during sync and handle race conditions when multiple sync attempts occur

5. **Round Trip Parsing**: If QR code generation includes encoded structured data, verify parse-generate-parse round-trip consistency

### Non-Property-Based Testing Guidance

The following requirements are better tested with integration/unit tests rather than PBT:

1. **Role-Based Access Control**: Use integration tests with each role type to verify endpoint authorization

2. **Executive Dashboard**: Use integration tests with representative KPI values and map rendering

3. **Document Upload Formats**: Use unit tests with file format libraries to verify accepted extensions

4. **Session Management**: Use integration tests with rate limiting and lockout scenarios

5. **QR Code Scanning**: Use integration tests with actual QR libraries to verify decoding
### Requirement 15: Asset Onboarding Module

**User Story:** As a Logistics Officer, I want to register new assets into the system with unique identification and generate physical QR tags, so that assets can be tracked and verified in the field.

#### Acceptance Criteria

1. WHEN a Logistics Officer initiates asset onboarding, THE ATIMS SHALL generate a unique alphanumeric State ID (serial number) following a standardized format: [PREFIX]-[6 DIGITS] (e.g., FLEET-000123)
2. THE ATIMS SHALL capture all required asset metadata: Name/Title, Description, Category ID (3-tier hierarchy), Registered Location, GPS Coordinates (WGS 84), Acquisition Date, Purchase Value, and Current Status (initially 'Fonctionnel')
3. WHERE GPS coordinates are entered, THE ATIMS SHALL validate they are within WGS 84 format and automatically generate the MySQL Spatial Point data type
4. THE ATIMS SHALL enforce the 3-tier category hierarchy: General Category → Asset Group → Asset Type during category selection
5. WHEN parent-child relationships are defined, THE ATIMS SHALL accept a self-referencing parent_asset_id to create compound assets (e.g., Water Micro-Plant with child sub-assets)
6. WHEN the asset is saved, THE ATIMS SHALL generate a low-density QR code label with a simplified short URL pattern optimized for scanning on low-end smartphone cameras
7. THE ATIMS SHALL enable print-ready tag templates for physical identification tags including: State ID, Asset Name, Category, and QR code
8. WHERE an asset has children, THE ATIMS SHALL generate individual QR codes for each child sub-asset while maintaining the parent-child relationship visibility in the interface
9. WHEN a QR code is printed, THE ATIMS SHALL ensure it contains only the asset State ID (not financial or sensitive data) for security and scan reliability

## Acceptance Criteria Summary

| Requirement | Test Type | Notes |
|-------------|-----------|-------|
| Role-Based Access Control | Unit, Integration | Verify all four roles and access control enforcement |
| Asset Data Model | Integration | Validate 3-tier hierarchy and spatial point storage |
| Inspection Workflow | Unit, Integration | Verify all six attributes captured correctly |
| Geo-Fencing | Integration | Test Haversine calculation and drift detection thresholds |
| Anti-Corruption Ledger | Integration, PBT | Verify append-only behavior and forensic data capture |
| QR Code Routing | Integration | Test dual routing based on authentication state |
| Offline Operations | Integration | Verify data persistence and auto-sync behavior |
| Document Upload | Integration | Test file size limits and compression |
| Reporting Engine | Integration | Verify PDF, Excel, CSV export formats |
| User Provisioning | Integration | Test invitation workflow and MFA support |
| Executive Dashboard | Integration | Verify KPI calculations and map rendering |
| Performance Constraints | Integration | Validate timing requirements under load |
| Localization | Integration | Verify French translations in UI and exports |
| Asset Onboarding | Integration | Verify State ID generation, category hierarchy, and QR code output |

### Non-Property-Based Testing Guidance

The following requirements are better tested with integration/unit tests rather than PBT:

1. **Role-Based Access Control**: Use integration tests with each role type to verify endpoint authorization

2. **Executive Dashboard**: Use integration tests with representative KPI values and map rendering

3. **Document Upload Formats**: Use unit tests with file format libraries to verify accepted extensions

4. **Session Management**: Use integration tests with rate limiting and lockout scenarios

5. **QR Code Scanning**: Use integration tests with actual QR libraries to verify decoding

6. **Asset Onboarding**: Use integration tests to verify State ID format, category hierarchy enforcement, and QR code generation