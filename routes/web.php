<?php

use App\Http\Controllers\Client;
use App\Http\Controllers\Masseur;
use App\Http\Controllers\Specialist;
use App\Http\Controllers\Recieption;
use App\Http\Controllers\Admin;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->middleware('guest');

Route::group(['prefix' => 'client', 'as' => 'client.', 'middleware' => ['auth', 'client']],  function () {
    Route::get('timetable', Client\TimetableController::class)->name('timetable');
    Route::get('history', Client\HistoryController::class)->name('history');
    Route::get('specialists', Client\SpecialistsController::class)->name('specialists');
    Route::get('finance', Client\FinanceController::class)->name('finance');
});

Route::group(['prefix' => 'masseur', 'as' => 'masseur.', 'middleware' => ['auth', 'masseur']],  function () {
    Route::get('timetable', Masseur\TimetableController::class)->name('timetable');
    Route::get('patients', Masseur\PatientsController::class)->name('patients');
    Route::get('specialists', Masseur\SpecialistsController::class)->name('specialists');
    Route::get('finance', Masseur\FinanceController::class)->name('finance');
});

Route::group(['prefix' => 'specialist', 'as' => 'specialist.', 'middleware' => ['auth', 'specialist']],  function () {
    Route::get('timetable', Specialist\TimetableController::class)->name('timetable');
    Route::get('patients', Specialist\PatientsController::class)->name('patients');
    Route::get('specialists', Specialist\SpecialistsController::class)->name('specialists');
    Route::get('finance', Specialist\FinanceController::class)->name('finance');
});

Route::group(['prefix' => 'admin', 'as' => 'admin.', 'middleware' => ['auth', 'admin']],  function () {
    Route::get('timetable', Admin\TimetableController::class)->name('timetable');
    Route::get('patients', Admin\PatientsController::class)->name('patients');
    Route::get('specialists', Admin\SpecialistsController::class)->name('specialists');
    Route::get('finance', Admin\FinanceController::class)->name('finance');
});

Route::group(['prefix' => 'recieption', 'as' => 'recieption.', 'middleware' => ['auth', 'recieption']],  function () {
    Route::get('timetable', Recieption\TimetableController::class)->name('timetable');
    Route::get('patients', Recieption\PatientsController::class)->name('patients');
    Route::get('specialists', Recieption\SpecialistsController::class)->name('specialists');
    Route::get('finance', Recieption\FinanceController::class)->name('finance');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

Route::get('/migrate', function () {
    Artisan::call('migrate');
    return redirect('/');
});
