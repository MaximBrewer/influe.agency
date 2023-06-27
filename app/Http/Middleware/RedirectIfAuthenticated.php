<?php

namespace App\Http\Middleware;

use App\Models\Branch;
use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, string ...$guards): Response
    {
        $guards = empty($guards) ? [null] : $guards;

        $branch = Branch::first();

        foreach ($guards as $guard) {
            if (Auth::guard($guard)->check()) {
                if (Auth::user()->role->name === 'admin') return redirect(RouteServiceProvider::HOME_ADMIN);
                if (Auth::user()->role->name === 'recieption') return redirect()->route('recieption.timetable', [
                    "branch" => $branch->id
                ]);
                if (Auth::user()->role->name === 'specialist') return redirect(RouteServiceProvider::HOME_SPECIALST);
                if (Auth::user()->role->name === 'masseur') return redirect(RouteServiceProvider::HOME_MASSEUR);
                return redirect(RouteServiceProvider::HOME_CLIENT);
            }
        }

        return $next($request);
    }
}
