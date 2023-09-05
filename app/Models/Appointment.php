<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Appointment extends Model
{
    use HasFactory;

    protected $fillable = [
        'сomplaints',
        'anmorbi',
        'anvitae',
        'stlocalic',
        'traumasurgery',
        'laboratorydata',
        'adddiagnosticexam',
        'consultspecialists',
        'conclusion',
        'recommendations',
    ];

    public function ods(): HasOne
    {
        return $this->hasOne(Ods::class);
    }
}
