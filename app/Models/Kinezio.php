<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Kinezio extends Model
{
    use HasFactory;

    public function interview(): HasOne
    {
        return $this->hasOne(Interview::class);
    }
}
