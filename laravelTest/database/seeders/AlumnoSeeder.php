<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Alumno;

class AlumnoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $alumno = new Alumno();
        $alumno -> nombre_ape = "Alumno Seeder";
        $alumno -> edad = 18;
        $alumno -> telefono = "644000000";
        $alumno -> direccion = "Direccion Seeder, 1";
        $alumno -> save();
    }
}
