<?php

use App\Http\Controllers\Api\AssetController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\HealthCheckController;
use App\Http\Controllers\Api\InspectionController;
use App\Http\Controllers\Api\IncidentController;
use App\Http\Controllers\Api\TaskController;
use App\Http\Controllers\Api\AttachmentController;
use App\Http\Controllers\Api\QrCodeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Public routes
Route::get('/health', [HealthCheckController::class, 'check']);
Route::get('/', fn () => response()->json(['status' => 'ok']));

// Authentication routes
Route::post('/auth/login', [AuthController::class, 'login']);
Route::post('/auth/logout', [AuthController::class, 'logout']);
Route::get('/auth/me', [AuthController::class, 'me']);

// API Resources
Route::apiResource('assets', AssetController::class);

// Search and summary endpoints
Route::post('/assets/search', [AssetController::class, 'search']);
Route::get('/assets/summary', [AssetController::class, 'summary']);
Route::get('/assets/stale-inspections', [AssetController::class, 'staleInspections']);

// Inspection endpoints
Route::apiResource('inspections', InspectionController::class);
Route::get('/inspections/history/{inspection}', [InspectionController::class, 'history']);

// Incident endpoints
Route::post('/incidents/log', [IncidentController::class, 'log']);
Route::post('/incidents/verify', [IncidentController::class, 'verify']);
Route::get('/incidents/unresolved', [IncidentController::class, 'unresolved']);
Route::get('/incidents/history/{assetId}', [IncidentController::class, 'history']);

// Task endpoints
Route::post('/tasks/assign', [TaskController::class, 'assign']);
Route::get('/tasks', [TaskController::class, 'index']);
Route::get('/tasks/global-queue', [TaskController::class, 'globalQueue']);
Route::put('/tasks/{task}', [TaskController::class, 'update']);
Route::delete('/tasks/{task}', [TaskController::class, 'destroy']);

// Attachment endpoints
Route::post('/attachments', [AttachmentController::class, 'store']);
Route::get('/attachments', [AttachmentController::class, 'index']);
Route::get('/attachments/{attachment}', [AttachmentController::class, 'show']);
Route::delete('/attachments/{attachment}', [AttachmentController::class, 'destroy']);

// Dashboard endpoints
Route::get('/dashboards/kpi', [DashboardController::class, 'kpi']);
Route::get('/dashboards/map-pins', [DashboardController::class, 'mapPins']);
Route::get('/dashboards/stale-inspections', [DashboardController::class, 'staleInspections']);

// QR Code routes
Route::get('/qrcode/scan/{stateId}', [QrCodeController::class, 'scan']);
Route::get('/qrcode/verify/{stateId}', [QrCodeController::class, 'verify']);
