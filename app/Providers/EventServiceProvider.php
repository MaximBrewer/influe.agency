<?php

namespace App\Providers;

use App\Events\MasseurCreated;
use App\Events\PatientCreated;
use App\Events\RecieptionCreated;
use App\Events\SpecialistCreated;
use App\Listeners\SendMasseurCreatedNotification;
use App\Listeners\SendPatientCreatedNotification;
use App\Listeners\SendRecieptionCreatedNotification;
use App\Listeners\SendSpecialistCreatedNotification;
use App\Models\Payment;
use App\Models\TopUp;
use App\Observers\Payment as ObserversPayment;
use App\Observers\TopUp as ObserversTopUp;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event to listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        SpecialistCreated::class => [
            SendSpecialistCreatedNotification::class
        ],
        MasseurCreated::class => [
            SendMasseurCreatedNotification::class
        ],
        RecieptionCreated::class => [
            SendRecieptionCreatedNotification::class
        ],
        PatientCreated::class => [
            SendPatientCreatedNotification::class
        ]
    ];

    /**
     * Register any events for your application.
     */
    public function boot(): void
    {
        TopUp::observe(ObserversTopUp::class);
        Payment::observe(ObserversPayment::class);
    }

    /**
     * Determine if events and listeners should be automatically discovered.
     */
    public function shouldDiscoverEvents(): bool
    {
        return false;
    }
}
