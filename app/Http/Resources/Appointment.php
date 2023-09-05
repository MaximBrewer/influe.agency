<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class Appointment extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $array = [
            'id' => $this->id,
            'current' => $this->current,
            'book_id' => $this->book_id,
            'status_id' => $this->status_id,
            'сomplaints' => $this->сomplaints ?? '',
            'anmorbi' => $this->anmorbi ?? '',
            'anvitae' => $this->anvitae ?? '',
            'stlocalic' => $this->stlocalic ?? '',
            'traumasurgery' => $this->traumasurgery ?? '',
            'laboratorydata' => $this->laboratorydata ?? '',
            'adddiagnosticexam' => $this->adddiagnosticexam ?? '',
            'consultspecialists' => $this->consultspecialists ?? '',
            'conclusion' => $this->conclusion ?? '',
            'recommendations' => $this->recommendations ?? '',
            
            'ods' => new Ods($this->ods),

        ];
        return $array;
    }
}
