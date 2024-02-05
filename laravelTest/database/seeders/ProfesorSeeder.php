<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Profesor;

class ProfesorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $profesor = new Profesor();
        $profesor -> nombreApellido = "Profesor Seeder";
        $profesor -> profesion = 18;
        $profesor -> gradoAcademico = "Grado 1";
        $profesor -> telefono = "644000000";
        $profesor -> save();
    }
}
