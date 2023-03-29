<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Carbon;

class Book extends Model
{
    use HasFactory;
    protected $fillable = ['date', 'status', 'time', 'service_id', 'branch_id', 'patient_id', 'specialist_id', 'recieption_id', 'duration', 'start'];

    /**
     * Interact with the user's balance.
     */
    protected function date(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => Carbon::parse($value)->format('d.m.Y')
        );
    }
    /**
     * Interact with the user's balance.
     */
    protected function time(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => substr($value, 0, 5)
        );
    }
    /**
     * Interact with the user's balance.
     */
    protected function start(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => substr($value, 0, 5)
        );
    }
    /**
     * Interact with the user's balance.
     */
    public function patient(): BelongsTo
    {
        return $this->belongsTo(User::class, 'patient_id');
    }
    /**
     * Interact with the user's balance.
     */
    public function service(): BelongsTo
    {
        return $this->belongsTo(Service::class, 'service_id');
    }
    /**
     * Interact with the user's balance.
     */
    public function payments(): HasMany
    {
        return $this->hasMany(Payment::class, 'book_id');
    }
    /**
     * Interact with the user's balance.
     */
    public function appointment(): HasOne
    {
        return $this->hasOne(Appointment::class);
    }
}
