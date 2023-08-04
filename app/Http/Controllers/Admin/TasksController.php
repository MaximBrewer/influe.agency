<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\TaskStatusRequest;
use App\Http\Requests\TaskStoreRequest;
use App\Http\Requests\TaskUpdateRequest;
use App\Http\Resources\ExecutorOpton;
use App\Http\Resources\Task as ResourcesTask;
use App\Models\Task;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class TasksController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data['pagetitle'] = 'Задачи';
        $user = User::find(Auth::id());

        $data['lists'] = [
            [
                'status_id' => 1,
                'title' => 'К работе',
                'tasks' => ResourcesTask::collection($user->tasks()->where('status_id', 1)->get())
            ],
            [
                'status_id' => 2,
                'title' => 'На проверке',
                'tasks' => ResourcesTask::collection($user->tasks()->where('status_id', 2)->get())
            ],
            [
                'status_id' => 3,
                'title' => 'Выполненные',
                'tasks' => ResourcesTask::collection($user->tasks()->where('status_id', 3)->get())
            ],
        ];

        $data['executors'] = ExecutorOpton::collection(User::all());

        return Inertia::render('Admin/Tasks', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TaskStoreRequest $request)
    {
        $this->storeUpdate($request);
        return $this->index();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TaskUpdateRequest $request, string $id)
    {
        $this->storeUpdate($request, $id);
        return $this->index();
    }

    /**
     * Update the specified resource in storage.
     */
    public function status(TaskStatusRequest $request, Task $task)
    {
        $user = User::find(Auth::id());
        $task->status_id = $request->status_id;
        $task->save();
        return redirect()->route('admin.tasks.index', [], 303);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function storeUpdate(Request $request, $id = false)
    {
        $user = User::find(Auth::id());
        $data = $request->only(['title', 'desc', 'range', 'start', 'deadline']);
        if ($id) {
            $task = $user->tasks()->findOrFail($id);
            $task->update($data);
        } else {
            $task = $user->tasks()->create($data);
        }
        $index = $task->files()->count();
        $ids = [];
        if (!empty($request->file('files'))) foreach ($request->file('files') as $file) {
            ++$index;
            $fileModel = $task->files()->create([
                'sort' => $index * 100,
                'title' => $file->getClientOriginalName(),
                'link' => $file->store('tasks/' . $task->id)
            ]);
            $ids[] = $fileModel->id;
        }
        if (!empty($request->oldfiles)) {
            foreach ($request->oldfiles as $file)  $ids[] = $file['id'];
        }
        $task->files()->whereNotIn('id', $ids)->delete();
        $task->users()->sync(array_map(function ($user) {
            return $user['id'];
        }, $request->users));
        return $task;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $task = Task::findOrFail($id);
        $task->delete();
        return redirect()->route('admin.tasks.index', [], 303);
    }
}
