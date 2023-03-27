<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Notifications\UserCreatedNotification;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Carbon;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{

    use HasApiTokens, HasFactory, Notifiable;

    public static $dayShedule = [
        '09:00' => 'free',
        '09:15' => 'free',
        '09:30' => 'free',
        '09:45' => 'free',
        '10:00' => 'free',
        '10:15' => 'free',
        '10:30' => 'free',
        '10:45' => 'free',
        '11:00' => 'free',
        '11:15' => 'free',
        '11:30' => 'free',
        '11:45' => 'free',
        '12:00' => 'free',
        '12:15' => 'free',
        '12:30' => 'free',
        '12:45' => 'free',
        '13:00' => 'free',
        '13:15' => 'free',
        '13:30' => 'free',
        '13:45' => 'free',
        '14:00' => 'free',
        '14:15' => 'free',
        '14:30' => 'free',
        '14:45' => 'free',
        '15:00' => 'free',
        '15:15' => 'free',
        '15:30' => 'free',
        '15:45' => 'free',
        '16:00' => 'free',
        '16:15' => 'free',
        '16:30' => 'free',
        '16:45' => 'free',
        '17:00' => 'free',
        '17:15' => 'free',
        '17:30' => 'free',
        '17:45' => 'free',
        '18:00' => 'free',
        '18:15' => 'free',
        '18:30' => 'free',
        '18:45' => 'free',
        '19:00' => 'free',
        '19:15' => 'free',
        '19:30' => 'free',
        '19:45' => 'free',
        '20:00' => 'free',
        '20:15' => 'free',
        '20:30' => 'free',
        '20:45' => 'free',
        '21:00' => 'free',
        '21:15' => 'free',
        '21:30' => 'free',
        '21:45' => 'free',
    ];
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'phone',
        'surname',
        'lastname',
        'tin',
        'addon',
        'role',
        'gender',
        'birthdate',
        'schedule',
        'locality_id',
        'branch_id',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'schedule' => 'array'
    ];

    /**
     * The "booted" method of the model.
     */
    protected static function booted(): void
    {
        static::addGlobalScope('withDirections', function (Builder $builder) {
            $builder->with('directions')->with('locality');
        });
    }

    /**
     * The "booted" method of the model.
     */
    public static function getDayArray($rest = false): array
    {
        $times = [];
        foreach (self::$dayShedule as $time => $status) {
            $times[] = [
                'time' => $time,
                'days' => [
                    $status,
                    $status,
                    $status,
                    $status,
                    $status,
                    'rest',
                    'rest',
                ]
            ];
        }
        return $times;
    }

    /**
     * Interact with the user's balance.
     */
    protected function balance(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => (int)$value / 100,
            set: fn ($value) => (float)$value * 100,
        );
    }

    /**
     * Interact with the user's balance.
     */
    public function booksSpecialist(): HasMany
    {
        return $this->hasMany(Book::class, 'specialist_id')->with('patient');
    }

    /**
     * Interact with the user's balance.
     */
    public function booksRecieption(): HasMany
    {
        return $this->hasMany(Book::class, 'recieption_id');
    }

    /**
     * Interact with the user's balance.
     */
    public function booksPatient(): HasMany
    {
        return $this->hasMany(Book::class, 'patient_id');
    }

    /**
     * Interact with the user's balance.
     */
    protected function birthdate(): Attribute
    {
        return Attribute::make(
            get: function ($value) {
                if (!$value) return $value;
                $date = Carbon::parse($value)->subCenturies(10);
                return $date;
            },
            set: function ($value) {
                $date = Carbon::parse($value)->addCenturies(10);
                return $date->format('Y-m-d');
            }
        );
    }

    /**
     * Interact with the user's balance.
     */
    protected function fullName(): Attribute
    {
        return Attribute::make(
            get: function () {
                return $this->lastname . ' ' . $this->name . ' ' . $this->surname;
            }
        );
    }

    /**
     * Interact with the user's balance.
     */
    protected function fio(): Attribute
    {
        return Attribute::make(
            get: function () {
                $return = '';
                if ($this->lastname) {
                    $return .= $this->lastname;
                }
                if ($this->name) {
                    $return .= ' ' . mb_substr($this->name, 0, 1) . '.';
                }
                if ($this->surname) {
                    $return .= ' ' . mb_substr($this->surname, 0, 1) . '.';
                }
                return $return;
            }
        );
    }

    /**
     * The users that belong to the role.
     */
    public function locality(): BelongsTo
    {
        return $this->belongsTo(Locality::class);
    }

    /**
     * The users that belong to the role.
     */
    public function branch(): BelongsTo
    {
        return $this->belongsTo(Branch::class);
    }

    /**
     * The users that belong to the role.
     */
    public function directions(): BelongsToMany
    {
        return $this->belongsToMany(Direction::class, 'user_direction')->withPivot(['base']);
    }

    /**
     * Send the email created notification.
     *
     * @return void
     */
    public function sendCreatedNotification()
    {
        $this->notify(new UserCreatedNotification);
    }
}
