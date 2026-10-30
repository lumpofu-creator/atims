<?php
declare(strict_types=1);

return [
    // API Routes
    // Format: [HTTP_METHOD, ROUTE_PATTERN, HANDLER_CALLBACK]
    
    // Health check
    ['GET', 'health', 'ATIMS\Controllers\HealthCheckController::check'],
    ['GET', '/', fn(array $req) => ['status' => 200, 'body' => ['status' => 'ok']]],
    
    // Authentication
    ['POST', 'auth/login', 'ATIMS\Controllers\AuthController::login'],
    ['POST', 'auth/logout', 'ATIMS\Controllers\AuthController::logout'],
    ['POST', 'auth/register', 'ATIMS\Controllers\AuthController::register'],
    ['POST', 'auth/refresh', 'ATIMS\Controllers\AuthController::refreshToken'],
    ['POST', 'auth/mfa/verify', 'ATIMS\Controllers\AuthController::verifyMfa'],
    ['GET', 'auth/profile', 'ATIMS\Controllers\AuthController::getProfile'],
    
    // Assets
    ['GET', 'assets', 'ATIMS\Controllers\AssetController::getAll'],
    ['GET', 'assets/{id}', 'ATIMS\Controllers\AssetController::get'],
    ['POST', 'assets', 'ATIMS\Controllers\AssetController::create'],
    ['PUT', 'assets/{id}', 'ATIMS\Controllers\AssetController::update'],
    ['DELETE', 'assets/{id}', 'ATIMS\Controllers\AssetController::delete'],
    ['GET', 'assets/search', 'ATIMS\Controllers\AssetController::search'],
    ['GET', 'assets/category/{categoryId}', 'ATIMS\Controllers\AssetController::getByCategory'],
    
    // Inspections
    ['GET', 'inspections', 'ATIMS\Controllers\InspectionController::getAll'],
    ['GET', 'inspections/{id}', 'ATIMS\Controllers\InspectionController::get'],
    ['POST', 'inspections', 'ATIMS\Controllers\InspectionController::create'],
    ['PUT', 'inspections/{id}', 'ATIMS\Controllers\InspectionController::update'],
    ['GET', 'inspections/asset/{assetId}', 'ATIMS\Controllers\InspectionController::getByAsset'],
    
    // Incidents (Requirement 14)
    ['POST', 'incidents/log', 'ATIMS\Controllers\IncidentController::log'],
    ['POST', 'incidents/verify', 'ATIMS\Controllers\IncidentController::verify'],
    ['GET', 'incidents/unresolved', 'ATIMS\Controllers\IncidentController::getUnresolved'],
    ['GET', 'incidents/history/{assetId}', 'ATIMS\Controllers\IncidentController::getHistory'],
    
    // Task Queues
    ['POST', 'tasks/assign', 'ATIMS\Controllers\TaskController::assign'],
    ['GET', 'tasks', 'ATIMS\Controllers\TaskController::getAll'],
    ['GET', 'tasks/agent/{agentId}', 'ATIMS\Controllers\TaskController::getByAgent'],
    ['PUT', 'tasks/{id}', 'ATIMS\Controllers\TaskController::update'],
    ['DELETE', 'tasks/{id}', 'ATIMS\Controllers\TaskController::cancel'],
    ['GET', 'tasks/global-queue', 'ATIMS\Controllers\TaskController::getGlobalQueue'],
    
    // Uploads
    ['POST', 'uploads', 'ATIMS\Controllers\UploadController::upload'],
    ['GET', 'uploads/{id}', 'ATIMS\Controllers\UploadController::get'],
    ['DELETE', 'uploads/{id}', 'ATIMS\Controllers\UploadController::delete'],
    
    // Dashboards
    ['GET', 'dashboards/kpi', 'ATIMS\Controllers\DashboardController::getKpi'],
    ['GET', 'dashboards/map-pins', 'ATIMS\Controllers\DashboardController::getMapPins'],
    ['GET', 'dashboards/capital-at-risk', 'ATIMS\Controllers\DashboardController::getCapitalAtRisk'],
    
    // Reports
    ['POST', 'reports/generate', 'ATIMS\Controllers\ReportController::generate'],
    
    // QR Code
    ['GET', 'qrcode/scan/{stateId}', 'ATIMS\Controllers\QrCodeController::scan'],
    ['GET', 'qrcode/verify/{stateId}', 'ATIMS\Controllers\QrCodeController::verify'],
    ['GET', 'qrcode/generate/{stateId}', 'ATIMS\Controllers\QrCodeController::generate'],
    
    // Categories
    ['GET', 'categories', 'ATIMS\Controllers\CategoryController::getAll'],
    ['GET', 'categories/hierarchy', 'ATIMS\Controllers\CategoryController::getHierarchy'],
    ['GET', 'categories/{id}', 'ATIMS\Controllers\CategoryController::get'],
    
    // Ledgers
    ['GET', 'ledgers', 'ATIMS\Controllers\LedgerController::getAll'],
    ['GET', 'ledgers/record/{tableName}/{recordId}', 'ATIMS\Controllers\LedgerController::getByRecord'],
    ['GET', 'ledgers/user/{userId}', 'ATIMS\Controllers\LedgerController::getUserLedger'],
];
