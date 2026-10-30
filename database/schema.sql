-- ATIMS Database Schema with Spatial Support
-- MySQL 8.0+ required for SPATIAL INDEX and ST_Distance_Sphere functions

-- Create database
CREATE DATABASE IF NOT EXISTS atims;
USE atims;

-- Enable spatial data types support
SET GLOBAL sql_mode = 'STRICT_ALL_TABLES,NO_ENGINE_SUBSTITUTION';

-- ============================================================================
-- Table: users
-- Extended with MFA fields for Requirement 10.6
-- ============================================================================
CREATE TABLE IF NOT EXISTS users (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(64) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('Logistics Officer', 'Field Agent', 'State Auditor', 'Executive') NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    phone VARCHAR(20),
    mfa_enabled TINYINT(1) DEFAULT 0,
    mfa_secret VARCHAR(255),
    mfa_backup_codes JSON,
    last_login TIMESTAMP NULL,
    last_ip_address VARCHAR(45),
    last_device_type VARCHAR(64),
    invitation_token VARCHAR(255),
    invitation_expires_at TIMESTAMP NULL,
    account_locked_until TIMESTAMP NULL,
    failed_login_attempts INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_users_username (username),
    INDEX idx_users_email (email),
    INDEX idx_users_role (role),
    INDEX idx_users_invitation_token (invitation_token)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- Table: categories
-- 3-tier hierarchy: General Category → Asset Group → Asset Type
-- ============================================================================
CREATE TABLE IF NOT EXISTS categories (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    code VARCHAR(64) NOT NULL UNIQUE,
    description TEXT,
    parent_id BIGINT UNSIGNED,
    tier ENUM('general', 'group', 'type') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_categories_parent (parent_id),
    INDEX idx_categories_code (code),
    CONSTRAINT fk_categories_parent 
        FOREIGN KEY (parent_id) 
        REFERENCES categories(id) 
        ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- Table: assets
-- Core asset data model with spatial support for Requirement 2.2
-- ============================================================================
CREATE TABLE IF NOT EXISTS assets (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    state_id VARCHAR(64) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    category_id BIGINT UNSIGNED NOT NULL,
    registered_location VARCHAR(255),
    latitude DECIMAL(10,8),
    longitude DECIMAL(11,8),
    location_point POINT NOT NULL SRID 4326,
    acquisition_date DATE,
    purchase_value DECIMAL(15,2),
    current_value DECIMAL(15,2),
    current_status ENUM('Fonctionnel', 'En Panne', 'Déclassé', 'Inconnu') DEFAULT 'Fonctionnel',
    parent_asset_id BIGINT UNSIGNED,
    created_by BIGINT UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    -- Spatial Index for geo-fencing and drift detection (Requirement 4)
    SPATIAL INDEX idx_assets_location_point (location_point),
    
    -- Regular indexes for query optimization
    INDEX idx_assets_state_id (state_id),
    INDEX idx_assets_category (category_id),
    INDEX idx_assets_status (current_status),
    INDEX idx_assets_parent (parent_asset_id),
    INDEX idx_assets_location (latitude, longitude),
    INDEX idx_assets_created_by (created_by),
    
    CONSTRAINT fk_assets_category 
        FOREIGN KEY (category_id) 
        REFERENCES categories(id),
    CONSTRAINT fk_assets_parent 
        FOREIGN KEY (parent_asset_id) 
        REFERENCES assets(id),
    CONSTRAINT fk_assets_created_by 
        FOREIGN KEY (created_by) 
        REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- Table: inspections
-- Field inspection workflow for Requirement 3
-- ============================================================================
CREATE TABLE IF NOT EXISTS inspections (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    asset_id BIGINT UNSIGNED NOT NULL,
    user_id BIGINT UNSIGNED NOT NULL,
    inspection_type ENUM('Routine', 'Breakdown', 'Maintenance', 'Handover') NOT NULL,
    condition_status ENUM('Fonctionnel', 'En Panne', 'Déclassé', 'Inconnu') NOT NULL,
    field_notes TEXT,
    verification_image VARCHAR(255),
    device_latitude DECIMAL(10,8),
    device_longitude DECIMAL(11,8),
    device_gps_accuracy DECIMAL(5,2),
    device_timestamp TIMESTAMP,
    haversine_distance_km DECIMAL(10,4),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    INDEX idx_inspections_asset (asset_id),
    INDEX idx_inspections_user (user_id),
    INDEX idx_inspections_type (inspection_type),
    INDEX idx_inspections_created (created_at),
    INDEX idx_inspections_asset_type (asset_id, inspection_type),
    
    CONSTRAINT fk_inspections_asset 
        FOREIGN KEY (asset_id) 
        REFERENCES assets(id),
    CONSTRAINT fk_inspections_user 
        FOREIGN KEY (user_id) 
        REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- Table: ledgers
-- Anti-Corruption Ledger for Requirement 5 - Append-only immutable audit trail
-- ============================================================================
CREATE TABLE IF NOT EXISTS ledgers (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    event_type ENUM(
        'Status Change', 
        'Asset Update', 
        'Location Drift Anomaly', 
        'Repair Closure', 
        'Inspection', 
        'Other'
    ) NOT NULL,
    table_name VARCHAR(64) NOT NULL,
    record_id BIGINT UNSIGNED NOT NULL,
    old_data JSON,
    new_data JSON,
    user_id BIGINT UNSIGNED,
    ip_address VARCHAR(45),
    device_type VARCHAR(64),
    metadata JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    -- Composite index for efficient lookup by table and record
    INDEX idx_ledgers_table_record (table_name, record_id),
    INDEX idx_ledgers_event_type (event_type),
    INDEX idx_ledgers_created_at (created_at),
    INDEX idx_ledgers_user (user_id),
    
    CONSTRAINT fk_ledgers_user 
        FOREIGN KEY (user_id) 
        REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- Table: task_queues
-- Task assignment workflow for Requirement 14
-- ============================================================================
CREATE TABLE IF NOT EXISTS task_queues (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    task_type ENUM(
        'Incident Assignment', 
        'Maintenance Schedule', 
        'Routine Inspection', 
        'Drift Review'
    ) NOT NULL,
    asset_id BIGINT UNSIGNED,
    inspection_id BIGINT UNSIGNED,
    assigned_user_id BIGINT UNSIGNED,
    global_queue_order INT,
    status ENUM('Pending', 'Assigned', 'In Progress', 'Completed', 'Cancelled') DEFAULT 'Pending',
    priority ENUM('Low', 'Medium', 'High', 'Critical') DEFAULT 'Medium',
    due_date DATE,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    assigned_at TIMESTAMP NULL,
    completed_at TIMESTAMP NULL,
    
    -- Indexes for efficient queue lookups
    INDEX idx_tasks_assigned_user (assigned_user_id, status),
    INDEX idx_tasks_global_queue (global_queue_order) WHERE global_queue_order IS NOT NULL,
    INDEX idx_tasks_asset (asset_id),
    INDEX idx_tasks_inspection (inspection_id),
    INDEX idx_tasks_status (status),
    INDEX idx_tasks_priority (priority),
    
    CONSTRAINT fk_tasks_asset 
        FOREIGN KEY (asset_id) 
        REFERENCES assets(id) 
        ON DELETE SET NULL,
    CONSTRAINT fk_tasks_inspection 
        FOREIGN KEY (inspection_id) 
        REFERENCES inspections(id) 
        ON DELETE SET NULL,
    CONSTRAINT fk_tasks_assigned_user 
        FOREIGN KEY (assigned_user_id) 
        REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- Table: attachments
-- Document upload system for Requirement 8
-- ============================================================================
CREATE TABLE IF NOT EXISTS attachments (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    asset_id BIGINT UNSIGNED NOT NULL,
    user_id BIGINT UNSIGNED NOT NULL,
    inspection_log_id BIGINT UNSIGNED,
    ledger_event_id BIGINT UNSIGNED,
    file_path VARCHAR(255) NOT NULL,
    file_name VARCHAR(255) NOT NULL,
    file_size BIGINT UNSIGNED NOT NULL,
    file_type VARCHAR(32) NOT NULL,
    file_hash VARCHAR(64),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    INDEX idx_attachments_asset (asset_id),
    INDEX idx_attachments_user (user_id),
    INDEX idx_attachments_inspection (inspection_log_id),
    INDEX idx_attachments_ledger (ledger_event_id),
    INDEX idx_attachments_created (created_at),
    
    CONSTRAINT fk_attachments_asset 
        FOREIGN KEY (asset_id) 
        REFERENCES assets(id),
    CONSTRAINT fk_attachments_user 
        FOREIGN KEY (user_id) 
        REFERENCES users(id),
    CONSTRAINT fk_attachments_inspection 
        FOREIGN KEY (inspection_log_id) 
        REFERENCES inspections(id),
    CONSTRAINT fk_attachments_ledger 
        FOREIGN KEY (ledger_event_id) 
        REFERENCES ledgers(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- Table: config
-- System configuration storage
-- ============================================================================
CREATE TABLE IF NOT EXISTS config (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    key_name VARCHAR(128) NOT NULL UNIQUE,
    value JSON NOT NULL,
    description TEXT,
    updated_by BIGINT UNSIGNED,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_config_key (key_name),
    CONSTRAINT fk_config_updated_by 
        FOREIGN KEY (updated_by) 
        REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- Table: audit_log
-- Extended audit trail for sensitive operations
-- ============================================================================
CREATE TABLE IF NOT EXISTS audit_log (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    action VARCHAR(100) NOT NULL,
    resource_type VARCHAR(64) NOT NULL,
    resource_id BIGINT UNSIGNED,
    user_id BIGINT UNSIGNED,
    ip_address VARCHAR(45),
    device_type VARCHAR(64),
    old_values JSON,
    new_values JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    INDEX idx_audit_action (action),
    INDEX idx_audit_resource (resource_type, resource_id),
    INDEX idx_audit_user (user_id),
    INDEX idx_audit_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- Insert default data
-- ============================================================================

-- Default categories (3-tier hierarchy)
INSERT INTO categories (name, code, description, tier, parent_id) VALUES
-- General Categories
('Fleet', 'FL', 'Vehicle fleet assets', 'general', NULL),
('Office Equipment', 'OE', 'Office and computing equipment', 'general', NULL),
('Infrastructure', 'IF', 'Public infrastructure', 'general', NULL),
('Furniture', 'FT', 'Office furniture and fixtures', 'general', NULL),

-- Asset Groups
('Cars', 'CAR', 'Passenger vehicles', 'group', (SELECT id FROM categories WHERE code = 'FL')),
('Trucks', 'TRK', 'Commercial vehicles', 'group', (SELECT id FROM categories WHERE code = 'FL')),
('Computers', 'CMP', 'Desktops and laptops', 'group', (SELECT id FROM categories WHERE code = 'OE')),
('Network Equipment', 'NET', 'Networking hardware', 'group', (SELECT id FROM categories WHERE code = 'OE')),

-- Asset Types
('Sedan', 'SDL', 'Sedan passenger car', 'type', (SELECT id FROM categories WHERE code = 'CAR')),
('SUV', 'SUV', 'Sport utility vehicle', 'type', (SELECT id FROM categories WHERE code = 'CAR')),
('Pickup', 'PCK', 'Pickup truck', 'type', (SELECT id FROM categories WHERE code = 'TRK')),
('Van', 'VAN', 'Cargo van', 'type', (SELECT id FROM categories WHERE code = 'TRK')),
('Desktop', 'DTP', 'Desktop computer', 'type', (SELECT id FROM categories WHERE code = 'CMP')),
('Laptop', 'LPT', 'Laptop computer', 'type', (SELECT id FROM categories WHERE code = 'CMP')),
('Switch', 'SWT', 'Network switch', 'type', (SELECT id FROM categories WHERE code = 'NET')),
('Router', 'RTR', 'Network router', 'type', (SELECT id FROM categories WHERE code = 'NET'));

-- Default user roles data (seed data for testing)
INSERT INTO users (username, email, password_hash, role, first_name, last_name, mfa_enabled) VALUES
('admin_logistics', 'admin.logistics@example.com', '$2y$10$examplehash1', 'Logistics Officer', 'Logistics', 'Admin', 0),
('admin_field', 'admin.field@example.com', '$2y$10$examplehash2', 'Field Agent', 'Field', 'Admin', 0),
('admin_auditor', 'admin.auditor@example.com', '$2y$10$examplehash3', 'State Auditor', 'Auditor', 'Admin', 0),
('admin_executive', 'admin.executive@example.com', '$2y$10$examplehash4', 'Executive', 'Executive', 'Admin', 0);

-- Sample assets with spatial data (using ST_PointFromText for MySQL geometry)
INSERT INTO assets (state_id, name, description, category_id, registered_location, latitude, longitude, location_point, acquisition_date, purchase_value, current_value, current_status, created_by) VALUES
('FLEET-000001', 'Toyota Camry Sedan', 'Fleet vehicle for administrative transport', 
 (SELECT id FROM categories WHERE code = 'SDL'), 
 'Ministry of Finance, 123 Central Avenue, Paris',
 48.8566, 2.3522,
 ST_PointFromText('POINT(2.3522 48.8566)', 4326),
 '2022-03-15', 35000.00, 30000.00, 'Fonctionnel', 1),

('FLEET-000002', 'Mercedes Sprinter Van', 'Cargo transport vehicle', 
 (SELECT id FROM categories WHERE code = 'VAN'), 
 'Central Warehouse, 456 Industrial Zone, Lyon',
 45.7640, 4.8357,
 ST_PointFromText('POINT(4.8357 45.7640)', 4326),
 '2021-08-20', 45000.00, 40000.00, 'En Panne', 1),

('OE-000001', 'Dell Precision Desktop', 'High-performance workstation for accounting', 
 (SELECT id FROM categories WHERE code = 'DTP'), 
 'Finance Department, Floor 2, Office 201',
 48.8568, 2.3524,
 ST_PointFromText('POINT(2.3524 48.8568)', 4326),
 '2023-01-10', 2500.00, 2200.00, 'Fonctionnel', 1),

('INFRA-000001', 'Street Lighting System', 'LED street lighting installation', 
 (SELECT id FROM categories WHERE code = 'SWT'), 
 'Place de la Concorde, Paris',
 48.8636, 2.3249,
 ST_PointFromText('POINT(2.3249 48.8636)', 4326),
 '2020-06-01', 150000.00, 140000.00, 'Fonctionnel', 1);

-- Sample inspection records
INSERT INTO inspections (asset_id, user_id, inspection_type, condition_status, field_notes, verification_image, device_latitude, device_longitude, device_gps_accuracy, device_timestamp, haversine_distance_km) VALUES
(1, 2, 'Routine', 'Fonctionnel', 'Regular inspection completed. Vehicle in good condition.', NULL, 48.8567, 2.3523, 5.2, '2024-01-10 10:30:00', 0.15),
(2, 2, 'Breakdown', 'En Panne', 'Engine failure reported. Vehicle non-operational. Waiting for repair.', NULL, 45.7642, 4.8359, 8.5, '2024-01-12 14:20:00', 0.28),
(3, 2, 'Routine', 'Fonctionnel', 'Desktop computer performance checked. All systems operational.', NULL, 48.8569, 2.3525, 3.1, '2024-01-11 09:15:00', 0.12);

-- Sample ledger entries for audit trail
INSERT INTO ledgers (event_type, table_name, record_id, old_data, new_data, user_id, ip_address, device_type, metadata) VALUES
('Status Change', 'assets', 2, 
 '{"current_status": "Fonctionnel"}',
 '{"current_status": "En Panne"}',
 2, '192.168.1.100', 'Mobile', '{"inspection_id": 3, "reason": "Engine failure reported"}'),

('Status Change', 'assets', 1, 
 '{"current_status": "Fonctionnel"}',
 '{"current_status": "Fonctionnel"}',
 2, '192.168.1.100', 'Mobile', '{"inspection_id": 1, "reason": "Routine inspection - no changes needed"}');

-- Sample task queue entries
INSERT INTO task_queues (task_type, asset_id, assigned_user_id, status, priority, notes, created_at) VALUES
('Incident Assignment', 2, 2, 'Assigned', 'High', 'Address engine failure for Mercedes Sprinter Van', '2024-01-12 14:25:00');

-- Sample attachments
INSERT INTO attachments (asset_id, user_id, file_path, file_name, file_size, file_type, notes, created_at) VALUES
(2, 2, 'uploads/defects/defect_2_20240112.jpg', 'defect_2_20240112.jpg', 750000, 'image/jpeg', 'Engine failure photo evidence', '2024-01-12 14:22:00');

-- Default configuration
INSERT INTO config (key_name, value, description) VALUES
('geofence_threshold_km', '2.0', 'Maximum distance from asset location for inspection (kilometers)'),
('gps_accuracy_threshold_m', '15.0', 'Maximum acceptable GPS accuracy (meters)'),
('session_timeout_minutes', '30', 'User session timeout in minutes'),
('max_failed_login_attempts', '5', 'Maximum failed login attempts before lockout'),
('login_lockout_duration_minutes', '15', 'Duration of account lockout after failed attempts'),
('image_upload_max_size_mobile_kb', '800', 'Maximum image upload size for mobile devices (KB)'),
('document_upload_max_size_desktop_mb', '5', 'Maximum document upload size for desktop (MB)'),
('inspection_reminder_days', '90', 'Days until inspection reminder warning');
