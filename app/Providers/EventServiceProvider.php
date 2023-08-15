<?php

namespace App\Providers;

use App\Events\NurseCreated;
use App\Events\PatientCreated;
use App\Events\RecieptionCreated;
use App\Events\SaleCreated;
use App\Events\SeniorCreated;
use App\Events\SupervisorCreated;
use App\Events\SpecialistCreated;
use App\Listeners\SendNurseCreatedNotification;
use App\Listeners\SendPatientCreatedNotification;
use App\Listeners\SendRecieptionCreatedNotification;
use App\Listeners\SendSaleCreatedNotification;
use App\Listeners\SendSeniorCreatedNotification;
use App\Listeners\SendSpecialistCreatedNotification;
use App\Listeners\SendSupervisorCreatedNotification;
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
        NurseCreated::class => [
            SendNurseCreatedNotification::class
        ],
        SaleCreated::class => [
            SendSaleCreatedNotification::class
        ],
        SeniorCreated::class => [
            SendSeniorCreatedNotification::class
        ],
        SupervisorCreated::class => [
            SendSupervisorCreatedNotification::class
        ],
        SpecialistCreated::class => [
            SendSpecialistCreatedNotification::class
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
