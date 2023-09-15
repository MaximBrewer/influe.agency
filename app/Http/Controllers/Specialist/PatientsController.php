<?php

namespace App\Http\Controllers\Specialist;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateAppointmentRequest;
use App\Http\Resources\Appointment;
use App\Http\Resources\PatientCardSpecialist;
use App\Models\Appointment as ModelsAppointment;
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
        $appointment = $book->appointment()->firstOrCreate([]);

        if (!$appointment->ods) {
            $appointment->ods()->create([]);
            $appointment = $book->appointment()->first();
        }
        if (!$appointment->painmap) {
            $book->appointment->painmap()->create([]);
            $appointment = $book->appointment()->first();
        }
        if (!$appointment->oda) {
            $book->appointment->oda()->create([]);
            $appointment = $book->appointment()->first();
        }
        if (!$appointment->kinesio) {
            $book->appointment->kinesio()->create([]);
            $appointment = $book->appointment()->first();
        }
        if (!$appointment->kinesio->interview) {
            $book->appointment->kinesio->interview()->create([]);
            $appointment = $book->appointment()->first();
        }
        $data['pagetitle'] = 'Запись №-(Жолжаксинов Арман Тасбулатович)';
        $data['patient'] = new PatientCardSpecialist($book->patient);
        $data['appointment'] = new Appointment($appointment);
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
            'book_id',
            'tab',
            'painmap',
            'ods',
            'kinesio',
            'oda'
        ]));

        $book->appointment->oda->update($request->oda);

        $book->appointment->ods->update($request->ods);

        $book->appointment->painmap->update($request->painmap);

        $book->appointment->kinesio->update($request->kinesio);

        $book->appointment->kinesio->interview->update($request->kinesio['interview']);

        return redirect()->route('specialist.appointment', [
            'book' => $book->id
        ]);
    }
}
