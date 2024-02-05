<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Curso;

class Alumno extends Model
{
    use HasFactory;

    protected $table = "alumnos";
    protected $primaryKey = "id";
    protected $fillable = ['nombre_ape', 'edad', 'telefono', 'dirección'];
    protected $hidden = ['id'];

    // si es necesario las timestamps se pueden quitar
    // public $timestamps = false;


    public function obtenerAlumnos() {
        return Alumno::all();
    }

    public function obtenerAlumnoPorId($id) {
        return Alumno::find($id);
    }

    public function cursos() {
        return $this->belongsToMany(Curso::class);
    }
}
