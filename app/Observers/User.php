<?php

namespace App\Observers;

use App\Models\User as ModelsUser;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class User
{
    public function created(ModelsUser $model)
    {
        if ($model->user->role->name === 'client') {
            $this->sendUserTo1c($model);
        }
        return true;
    }

    public function updated(ModelsUser $model)
    {
        if ($model->user->role->name === 'client') {
            if ($model->wasChanged(['name', 'tin', 'phone'])) {
                $this->sendUserTo1c($model);
            }
        }
        return true;
    }

    private function sendUserTo1c(ModelsUser $model)
    {
        $url = '';
        $data = [
            'name' => $model->name, // наименование клиента
            'BIN' => $model->tin, // индивидуальный идентификационный номер клиента
            'tel' => $model->phone, // телефон клиента
            'entity' => false, // »стина - юридическое лицо, Ћожь - физическое лицо
            'extId' => $model->id, // GUID в системе CRM
        ];
        $response = Http::withBody(json_encode($data), 'application/json')->post($url);

        // GUID - GUID созданного в 1— объекта, string
        // CRMGUID - GUID клиента в CRM, string
        // created - »стина - клиент создан, Ћожь - клиент не создан, boolean
        // message - описание ошибки, если есть, string

        if ($json = $response->json()) {
            if ($json->GUID) {
                $model->external_id = $json->GUID;
                $model->saveQuietly();
            } else {
                if ($json->message)
                    Log::error($json->message);
            }
        }
    }
}
