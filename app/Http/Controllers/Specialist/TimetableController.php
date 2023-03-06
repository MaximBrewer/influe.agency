<?php

namespace App\Http\Controllers\Specialist;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TimetableController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $data['pagetitle'] = 'Расписание';
        return Inertia::render('Specialist/Timetable', $data);
    }
}
