<?php

namespace App\Http\Controllers\Admin;

use App\Events\SupervisorCreated;
use App\Http\Controllers\Controller;
use App\Http\Requests\SupervisorStoreRequest;
use App\Http\Requests\SupervisorUpdateRequest;
use App\Http\Resources\Direction as ResourcesDirection;
use App\Http\Resources\Locality as ResourcesLocality;
use App\Models\Direction;
use App\Models\Locality;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Inertia\Inertia;

class SupervisorsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data['supervisors'] = User::where('role_id', 10)->get();
        $data['pagetitle'] = 'Старший администратор';
        return Inertia::render('Admin/Supervisors', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $data = [];
        $this->getCommonData($data);
        $data['pagetitle'] = 'Новый старший администратор';
        $data['supervisor'] = null;
        $data['directions'] = ResourcesDirection::collection(Direction::all());
        return Inertia::render('Admin/Supervisor', $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SupervisorStoreRequest $request)
    {
        $data = $request->all();
        $data['password'] = Hash::make(Str::random(8));
        $supervisor = User::create($data);
        $supervisor->role_id = 10;
        $supervisor->save();
        $supervisor->directions()->sync($request->directions);
        event(new SupervisorCreated($supervisor));
        return redirect()->route('admin.supervisors.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(User $supervisor)
    {
        $data['pagetitle'] = 'Старший администратор';
        $data['supervisor'] = $supervisor;
        return Inertia::render('Admin/Supervisor', $data);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $supervisor)
    {
        $data = [];
        $this->getCommonData($data);
        $data['pagetitle'] = 'Старший администратор';
        $data['supervisor'] = $supervisor;
        $data['directions'] = ResourcesDirection::collection(Direction::all());
        return Inertia::render('Admin/Supervisor', $data);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(SupervisorUpdateRequest $request, User $supervisor)
    {
        $data = $request->all();
        $supervisor->update($data);
        $supervisor->directions()->sync($request->directions);
        return redirect()->route('admin.supervisors.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $supervisor)
    {
        $supervisor->delete();
        return redirect()->route('admin.supervisors.index');
    }

    private function getCommonData(&$data)
    {
        $data['genders'] = [
            [
                'value' => 'male',
                'label' => 'Мужской',
            ], [
                'value' => 'female',
                'label' => 'Женский'
            ]
        ];

        $data['localities'] = ResourcesLocality::collection(Locality::all());
    }
}
