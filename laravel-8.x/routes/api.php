<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegistrationController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group(['prefix' => '/login'], function() {
    Route::get('/', [LoginController::class, 'index']);
    Route::post('login', 'AuthController@login');
    Route::post('/update/{email_address, pass_word}', [LoginController::class,'update']);
    Route::post('/create', [LoginController::class, 'create']);
});
Route::group(['prefix' => '/registration'], function() {
    Route::get('/', [RegistrationController::class, 'index']);
    Route::post('/update/{domain_add}', [RegistrationController::class,'update']);
    Route::post('register', 'AuthController@registration');
    Route::post('/create', [RegistrationController::class, 'create']);
});
Route::group(['middleware' => ['auth:api']], function () {
    Route::get('user', 'UserController@show');
});
