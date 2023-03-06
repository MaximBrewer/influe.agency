<?php

namespace App\Http\Controllers\Recieption;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SpecialistsController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $data['pagetitle'] = 'Специалисты';
        return Inertia::render('Recieption/Specialists', $data);
    }
}
