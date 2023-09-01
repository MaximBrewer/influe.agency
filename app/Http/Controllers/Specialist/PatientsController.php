<?php

namespace App\Http\Controllers\Specialist;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateAppointmentRequest;
use App\Http\Resources\Appointment;
use App\Http\Resources\PatientCardSpecialist;
use App\Models\Book;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PatientsController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $data['pagetitle'] = 'Пациенты';
        return Inertia::render('Specialist/Patients', $data);
    }

    /**
     * Handle the incoming request.
     */
    public function show(Request $request, User $patient)
    {
        $data['pagetitle'] = 'Карточка пациента';
        $data['patient'] = new PatientCardSpecialist($patient);
        return Inertia::render('Specialist/Patient/Card', $data);
    }

    /**
     * Handle the incoming request.
     */
    public function appointment(Request $request, Book $book)
    {
        $book->appointment()->firstOrCreate([]);
        $data['pagetitle'] = 'Запись №-(Жолжаксинов Арман Тасбулатович)';
        $data['patient'] = new PatientCardSpecialist($book->patient);
        $data['appointment'] = new Appointment($book->appointment);
        $data['scrollpage'] = true;
        return Inertia::render('Specialist/Patient/Appointment', $data);
    }

    /**
     * Handle the incoming request.
     */
    public function appointmentUpdate(UpdateAppointmentRequest $request, Book $book)
    {
        $book->appointment()->update($request->except([
            'id',
            'book_id'
        ]));
        return redirect()->route('specialist.appointment', [
            'book' => $book->id
        ]);
    }
}
