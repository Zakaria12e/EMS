<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DestinataireController;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/login', [AuthController::class, 'login'])->name('login');
Route::post('/login', [AuthController::class, 'post'])->name('login');

Route::get('/admin/{view?}', [ApplicationController::class, 'admin'])->where('view', '.*')->name('admin.pages');



Route::post('/api/create-reception', [DestinataireController::class, 'store']);
Route::post('/api/check-unique-fields', [DestinataireController::class, 'checkUniqueFields']);
