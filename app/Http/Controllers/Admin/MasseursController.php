<?php

namespace App\Http\Controllers\Admin;

use App\Events\MasseurCreated;
use App\Http\Controllers\Controller;
use App\Http\Requests\MasseurStoreRequest;
use App\Http\Requests\MasseurUpdateRequest;
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

class MasseursController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data['masseurs'] = User::where('role_id', 5)->get();
        $data['pagetitle'] = 'Массажисты';
        return Inertia::render('Admin/Masseurs', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $data = [];
        $this->getCommonData($data);
        $data['pagetitle'] = 'Новый массажист';
        $data['masseur'] = null;
        $data['directions'] = ResourcesDirection::collection(Direction::all());
        return Inertia::render('Admin/Masseur', $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(MasseurStoreRequest $request)
    {
        $data = $request->all();
        $data['password'] = Hash::make(Str::random(8));
        $masseur = User::create($data);
        $masseur->role_id = 5;
        $masseur->save();
        $masseur->directions()->sync($request->directions);
        event(new MasseurCreated($masseur));
        return redirect()->route('admin.masseurs.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(User $masseur)
    {
        $data['pagetitle'] = 'Массажист';
        $data['masseur'] = $masseur;
        return Inertia::render('Admin/Masseur', $data);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $masseur)
    {
        $data = [];
        $this->getCommonData($data);
        $data['pagetitle'] = 'Массажист';
        $data['masseur'] = $masseur;
        $data['directions'] = ResourcesDirection::collection(Direction::all());
        return Inertia::render('Admin/Masseur', $data);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(MasseurUpdateRequest $request, User $masseur)
    {
        $data = $request->all();
        $masseur->update($data);
        $masseur->directions()->sync($request->directions);
        return redirect()->route('admin.masseurs.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $masseur)
    {
        $masseur->delete();
        return redirect()->route('admin.masseurs.index');
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
