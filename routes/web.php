<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DestinataireController;
use App\Http\Controllers\DepartmentController;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/login', [AuthController::class, 'login'])->name('login');
Route::post('/login', [AuthController::class, 'postlogin'])->name('postlogin');
Route::get('/signup', [AuthController::class, 'signup'])->name('signup');
Route::post('/register', [AuthController::class, 'postsignup'])->name('signup.store');
Route::get('/logout', [AuthController::class, 'logout'])->name('logout');

Route::get('/admin/{view?}', [ApplicationController::class, 'admin'])->where('view', '.*')->name('admin.pages');



Route::post('/api/create-reception', [DestinataireController::class, 'store']);
Route::post('/api/check-unique-fields', [DestinataireController::class, 'checkUniqueFields']);
Route::post('/api/create-departments', [DepartmentController::class, 'store']);
Route::get('/api/getdepartments', [DepartmentController::class, 'index']);
Route::get('/api/getroles', [DepartmentController::class, 'getroles']);


Route::get('/api/destinataires', [DestinataireController::class, 'index']);
Route::get('/api/getEmaildestinataire/{id}', [DestinataireController::class, 'getEmail']);

