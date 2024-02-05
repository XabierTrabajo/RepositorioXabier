<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Alumno;
use App\Models\Profesor;
use App\Models\Curso;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        //$this->call(AlumnoSeeder::class);
        //Alumno::factory(10)->create();
        //$this->call(ProfesorSeeder::class);
        //$this->call(CursoSeeder::class);
        $this->call(AlumnoCursoSeeder::class);
    }
}
