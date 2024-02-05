<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Alumno;
use App\Models\Profesor;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cursos', function (Blueprint $table) {
            $table->id();
            $table->string("nombre",75);
            $table->string("nivel",35);
            $table->string("horasAcademicas",35)->nullable();

            // clave foranea
            $table->unsignedBigInteger("profesor_id");
            $table->foreign('profesor_id')->references('id')->on('profesors');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cursos');
    }
};
