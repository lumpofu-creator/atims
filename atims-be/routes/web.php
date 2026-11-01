<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// Swagger UI Route - serves documentation
Route::get('/swagger', function () {
    return redirect('/docs');
});
