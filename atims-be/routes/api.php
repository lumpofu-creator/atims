<?php

use App\Http\Controllers\Api\AssetController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\HealthCheckController;
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

// QR Code routes
Route::get('/qrcode/scan/{stateId}', [QrCodeController::class, 'scan']);
Route::get('/qrcode/verify/{stateId}', [QrCodeController::class, 'verify']);
