<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Curso;
use App\Models\Profesor;

class CursoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // busca el profesor en base a los parametros introducidos
        // columna y contenido de ella
        $profesor =  Profesor::where('nombreApellido', 'Profesor Seeder')->first();

        $curso = new Curso();
        $curso -> nombre = "Curso Seeder";
        $curso -> nivel = 18;
        $curso -> horasAcademicas = "Grado 1";
        $curso -> profesor_id = $profesor->id;
        $curso -> save();
    }
}
