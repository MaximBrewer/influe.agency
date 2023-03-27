<?php

namespace App\Listeners;

class SendMasseurCreatedNotification
{
    /**
     * Handle the event.
     *
     * @param  \App\Events\MasseurCreated  $event
     * @return void
     */
    public function handle(\App\Events\MasseurCreated $event)
    {
        if ($event->user->role === 'masseur') {
            $event->user->sendCreatedNotification();
        }
    }
}
