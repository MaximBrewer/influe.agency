<?php

use App\Http\Controllers\Client;
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

Route::group(['prefix' => 'admin', 'as' => 'admin.', 'middleware' => ['auth', 'admin']],  function () {
    Route::resource('recieptions', Admin\RecieptionsController::class);
    Route::resource('specialists', Admin\SpecialistsController::class);
    Route::resource('localities', Admin\LocalitiesController::class);
    Route::resource('directions', Admin\DirectionsController::class);
    Route::resource('branches', Admin\BranchesController::class);
});

Route::group(['prefix' => 'recieption', 'as' => 'recieption.', 'middleware' => ['auth', 'recieption']],  function () {
    Route::get('{branch}/timetable/{date?}', [Recieption\TimetableController::class, 'index'])->name('timetable');
    Route::get('{branch}/notifications/{date?}', [Recieption\NotificationsController::class, 'index'])->name('notifications');
    Route::get('patients', Recieption\PatientsController::class)->name('patients');
    Route::get('patient/create', [Recieption\PatientsController::class, 'create'])->name('patient.create');
    Route::get('patient/edit/{patient}', [Recieption\PatientsController::class, 'edit'])->name('patient.edit');
    Route::post('patient', [Recieption\PatientsController::class, 'store'])->name('patients.store');
    Route::patch('patient/topup/{patient}', [Recieption\PatientsController::class, 'topup'])->name('patient.topup');
    Route::patch('patient/{patient}', [Recieption\PatientsController::class, 'update'])->name('patients.update');
    Route::get('patient/card/{patient}', [Recieption\PatientsController::class, 'card'])->name('patient.card');
    Route::get('specialists', Recieption\SpecialistsController::class)->name('specialists');
    Route::get('finance', Recieption\FinanceController::class)->name('finance');

    Route::get('specialist/{specialist}/schedule', [Recieption\SpecialistsController::class, 'schedule'])->name('specialist.schedule');
    Route::patch('specialist/{specialist}/schedule', [Recieption\SpecialistsController::class, 'updateSchedule'])->name('specialist.schedule.update');

    Route::get('book/{patient}/{branch}', [Recieption\BookController::class, 'branch'])->name('book.branch');
    Route::get('book/{patient}/{branch}/direction/{direction}/{date}', [Recieption\BookController::class, 'direction'])->name('book.direction');
    Route::get('book/{patient}/{branch}/specialist/{specialist}/{year}/{week}', [Recieption\BookController::class, 'specialist'])->name('book.specialist');
    Route::post('book/{patient}/{branch}/{specialist}', [Recieption\BookController::class, 'store'])->name('book.store');
    Route::patch('book/{book}/{patient}/{branch}/{specialist}', [Recieption\BookController::class, 'update'])->name('book.update');
    Route::patch('book/{book}/status', [Recieption\BookController::class, 'status'])->name('book.status');
    Route::post('book/{book}/payment', [Recieption\BookController::class, 'payment'])->name('book.payment');
});

Route::group(['prefix' => 'client', 'as' => 'client.', 'middleware' => ['auth', 'client']],  function () {
    Route::get('timetable', Client\TimetableController::class)->name('timetable');
    Route::get('history', Client\HistoryController::class)->name('history');
    Route::get('specialists', Client\SpecialistsController::class)->name('specialists');
    Route::get('finance', Client\FinanceController::class)->name('finance');
});

Route::group(['prefix' => 'specialist', 'as' => 'specialist.', 'middleware' => ['auth', 'specialist']],  function () {
    Route::get('timetable/{date?}', [Specialist\TimetableController::class, 'index'])->name('timetable');
    Route::get('patient/{patient}', [Specialist\PatientsController::class, 'show'])->name('patient.show');
    Route::get('appointment/{book}', [Specialist\PatientsController::class, 'appointment'])->name('appointment');


    Route::get('patients', Specialist\PatientsController::class)->name('patients');
    Route::get('specialists', Specialist\SpecialistsController::class)->name('specialists');
    Route::get('finance', Specialist\FinanceController::class)->name('finance');
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
