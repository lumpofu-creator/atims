<?php

use App\Http\Controllers\Api\AssetController;
use App\Http\Controllers\Api\AttachmentController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\HealthCheckController;
use App\Http\Controllers\Api\IncidentActivityController;
use App\Http\Controllers\Api\IncidentController;
use App\Http\Controllers\Api\InspectionController;
use App\Http\Controllers\Api\QrCodeController;
use App\Http\Controllers\Api\TaskController;
use App\Http\Controllers\Api\UserController;
use App\Http\Middleware\ApiTokenMiddleware;
use Illuminate\Support\Facades\Route;

Route::get('/health', [HealthCheckController::class, 'check']);
Route::get('/', fn () => response()->json(['status' => 'ok']));
Route::post('/auth/login', [AuthController::class, 'login'])->middleware('throttle:5,1');

Route::middleware(ApiTokenMiddleware::class)->group(function () {
    Route::post('/auth/logout', [AuthController::class, 'logout']);
    Route::get('/auth/me', [AuthController::class, 'me']);
    Route::put('/auth/me', [AuthController::class, 'updateProfile']);
    Route::get('/users/field-agents', [UserController::class, 'fieldAgents']);

    Route::apiResource('assets', AssetController::class);
    Route::post('/assets/search', [AssetController::class, 'search']);
    Route::get('/assets/summary', [AssetController::class, 'summary']);
    Route::get('/assets/stale-inspections', [AssetController::class, 'staleInspections']);

    Route::apiResource('inspections', InspectionController::class);
    Route::get('/inspections/history/{inspection}', [InspectionController::class, 'history']);

    Route::get('/incidents', [IncidentController::class, 'index']);
    Route::post('/incidents/assign', [IncidentController::class, 'assign']);
    Route::get('/incidents/{incident}/activities', [IncidentActivityController::class, 'index']);
    Route::post('/incidents/{incident}/activities', [IncidentActivityController::class, 'store']);
    Route::post('/incidents/log', [IncidentController::class, 'log']);
    Route::post('/incidents/verify', [IncidentController::class, 'verify']);
    Route::get('/incidents/unresolved', [IncidentController::class, 'unresolved']);
    Route::get('/incidents/history/{assetId}', [IncidentController::class, 'history']);

    Route::post('/tasks/assign', [TaskController::class, 'assign']);
    Route::get('/tasks', [TaskController::class, 'index']);
    Route::get('/tasks/global-queue', [TaskController::class, 'globalQueue']);
    Route::post('/tasks/{task}/claim', [TaskController::class, 'claim']);
    Route::put('/tasks/{task}', [TaskController::class, 'update']);
    Route::delete('/tasks/{task}', [TaskController::class, 'destroy']);

    Route::post('/attachments', [AttachmentController::class, 'store']);
    Route::get('/attachments', [AttachmentController::class, 'index']);
    Route::get('/attachments/{attachment}', [AttachmentController::class, 'show']);
    Route::delete('/attachments/{attachment}', [AttachmentController::class, 'destroy']);

    Route::get('/dashboards/kpi', [DashboardController::class, 'kpi']);
    Route::get('/dashboards/map-pins', [DashboardController::class, 'mapPins']);
    Route::get('/dashboards/stale-inspections', [DashboardController::class, 'staleInspections']);

    Route::get('/qrcode/scan/{stateId}', [QrCodeController::class, 'scan']);
    Route::get('/qrcode/verify/{stateId}', [QrCodeController::class, 'verify']);
});
