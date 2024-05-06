<template>
  <div>
    <h1>Total presentados: {{ notasExamen.length }}</h1>
    <h1>Nota de corte (3 mejores): {{ corte.toFixed(2) }}</h1>
    <table>
      <tr>
        <th>Nombre</th>
        <th>Nota</th>
      </tr>
      <tr v-for="examen in notasExamen" v-show="examen.nota > corte">
        <td>{{ examen.alumno }}</td>
        <td>{{ examen.nota }}</td>
      </tr>
    </table>

    <button @click="filtroNota">Ordenar por nota</button>
    <button @click="filtroNombre">Ordenar por nombre</button>
  </div>

</template>
<script>
import { useELNOMBRE } from '../store/_plantillaStore';
import { mapState } from "pinia";
export default {
  name: 'plantillaView',
  components: {

  },
  data() {
    return {
      corte: 0,
      notasExamen: [
        {
          alumno: "Alumno A",
          nota: 75
        },
        {
          alumno: "Alumno B",
          nota: 57
        },
        {
          alumno: "Alumno C",
          nota: 120
        },
        {
          alumno: "Alumno D",
          nota: 0
        },
        {
          alumno: "Alumno E",
          nota: 20
        },
        {
          alumno: "Alumno F",
          nota: 98
        },
        {
          alumno: "Alumno G",
          nota: 69
        },
        {
          alumno: "Alumno H",
          nota: 101
        },
        {
          alumno: "Alumno I",
          nota: 105
        },
        {
          alumno: "Alumno J",
          nota: 72
        },
        {
          alumno: "Alumno K",
          nota: 92
        },
      ]
    }
  },
  methods: {
    filtroNota() {
      // filtra de mayor a menor
      this.notasExamen.sort((a, b) => b.nota - a.nota);
      

    },

    filtroNombre() {
      this.notasExamen.sort((a, b) => {
        const nameA = a.alumno.toUpperCase(); // ignore upper and lowercase
        const nameB = b.alumno.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      });
    },

    notaCorte() {
      // obtener las notas y filtrar desde la mas alta a la mas baja
      let notaMaxima = this.notasExamen;
      notaMaxima.sort((a, b) => b.nota - a.nota);

      // el corte es la mitad de la mejor nota sacada
      //this.corte = notas[0].nota / 2; // el 50%
      this.corte = notaMaxima[0].nota / 1.6; // el 60%

    },

    mediaCorte() {
      // obtener las notas y filtrar desde la mas alta a la mas baja
      let notaMaxima = this.notasExamen;
      notaMaxima.sort((a, b) => b.nota - a.nota);

      // el corte es la media de las 3 mejor notas sacada
      this.corte = (notaMaxima[0].nota + notaMaxima[1].nota + notaMaxima[2].nota) / 3; // media de las 3 mejores
      this.corte = this.corte / 1.6; // el 60% de la media de las 3 mejores

    }
  },
  computed: {


  },
  created() {
    this.mediaCorte();
  }
}
</script>