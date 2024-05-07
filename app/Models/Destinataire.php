<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Destinataire extends Model
{
    use HasFactory;
    protected $fillable = [
        'nom_dest',
        'prenom_dest',
        'telephone_dest',
        'first_email',
        'second_email',
        'role_id',
        'department_id',
        'structure_id',
    ];

    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function structure()
    {
        return $this->belongsTo(Structure::class);
    }
}
