<template>
    <div>
      <h1>Examen 2Ev DWC Curso 2023-24</h1><br>
      <h1>servicios pabellon</h1><br>
      <BasurtoWelcomeComponent />
    </div>
    <div>
      <select v-model="pabellonSelect">
        <option v-for="entrada in pabellones" v-bind:value="entrada">
          {{ entrada }}
        </option>
      </select>

      <br><br><br>

      <ul v-for="svc in filtroPabellones" style="list-style: none;">
        <li>
          <img v-bind:src="'src/assets/iconos/' + svc.ICONO" v-bind:alt="svc.ICONO" style="width: 35px; height: 35px;">
          {{ svc.SERVICIO }}
        </li>
      </ul>
    </div>
</template>
<script>
  
  import axios from 'axios';
  import { useCounter } from '../stores/counter';
  import { mapState } from "pinia";
  import BasurtoWelcomeComponent from '../components/BasurtoWelcomeComponent.vue'
  export default{
    name: 'pabellon',
    components: {
      BasurtoWelcomeComponent
    },
    data() {
      return {
        servicios: [],
        pabellones: [],
        pabellonSelect: ""
      }
    },
    methods:{
      async cargarServicios() {
        // obtiene mediante axios los datos del juego
        const allData = await axios.get("/basurto.json");

        this.servicios = allData.data;

        console.log(this.servicios);
      },
      async cargarPabellones() {
        // obtiene mediante axios los datos del juego
        const allData = await axios.get("/basurto.json");

        this.servicios = allData.data;

        console.log(this.servicios);

        // inserta los pabellones en el array
        for (let i = 0; i < this.servicios.length; i++) {
          // previene que se repita el mismo registro
          if (this.pabellones.includes(this.servicios[i].ENTRADA)) {
            // salta al siguiente registro
          } 
          else {
            // inserta el pabellon
            this.pabellones.push(this.servicios[i].ENTRADA);
          }
        }
            
      },
    },
    computed: {
      filtroPabellones() {
        return this.servicios.filter((servicio) => servicio.ENTRADA.includes(this.pabellonSelect));
      }
    },
    created() {
      this.cargarServicios();
      this.cargarPabellones();
    }
  }
</script>