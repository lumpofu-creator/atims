-- Migration: Add MFA fields to users table
-- Version: 1.0
-- Description: Adds multi-factor authentication fields to support Requirement 10.6

USE atims;

-- Add MFA fields to users table
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS mfa_backup_codes JSON AFTER mfa_secret,
ADD COLUMN IF NOT EXISTS invitation_token VARCHAR(255) AFTER last_device_type,
ADD COLUMN IF NOT EXISTS invitation_expires_at TIMESTAMP NULL AFTER invitation_token,
ADD COLUMN IF NOT EXISTS account_locked_until TIMESTAMP NULL AFTER failed_login_attempts,
ADD COLUMN IF NOT EXISTS failed_login_attempts INT DEFAULT 0 AFTER account_locked_until,
ADD COLUMN IF NOT EXISTS last_ip_address VARCHAR(45) AFTER last_login,
ADD COLUMN IF NOT EXISTS last_device_type VARCHAR(64) AFTER last_ip_address;

-- Create indexes for new fields
CREATE INDEX IF NOT EXISTS idx_users_invitation_token ON users (invitation_token);
CREATE INDEX IF NOT EXISTS idx_users_invitation_expires ON users (invitation_expires_at);

-- Add device IP tracking to ledgers if not exists
ALTER TABLE ledgers 
ADD COLUMN IF NOT EXISTS ip_address VARCHAR(45) AFTER user_id;

-- Add device IP tracking to audit_log if not exists
ALTER TABLE audit_log 
ADD COLUMN IF NOT EXISTS ip_address VARCHAR(45) AFTER user_id;

-- Update ledgers with device info from inspections
UPDATE ledgers l
JOIN inspections i ON l.record_id = i.id AND l.table_name = 'inspections'
SET l.device_type = 'Mobile'
WHERE l.device_type IS NULL;
