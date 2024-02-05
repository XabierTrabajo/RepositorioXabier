<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Curso;
use App\Models\Alumno;

class AlumnoCursoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // encuentra el id de los cursos y alumnos
        $curso1 = Curso::find(1);
        $alumno1 = Alumno::find(1);
        $alumno2 = Alumno::find(2);

        // asigna alumnos a los cursos
        $curso1->alumnos()->attach([$alumno1->id, $alumno2->id]);
        //$curso1->alumnos()->attach(1);
    }
}
