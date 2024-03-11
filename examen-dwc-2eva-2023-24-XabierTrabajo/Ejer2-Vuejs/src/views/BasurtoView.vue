<template>
    <div>
      <h1>Examen 2Ev DWC Curso 2023-24</h1><br>
      <h1>Servicios Basurto</h1><br>
      
      <BasurtoWelcomeComponent /><br><br><br>
      <CuadroFavoritos /><br><br><br>
    </div>

    <br><br><br>
    <div>
      <span>Buscar por nombre: </span>
      <input type="text" v-model="busqueda" name="busqueda">
    </div>
    <table>
      <tr>
          <th>Icono</th>
          <th>Servicio</th>
          <th>Pabellón</th>
          <th>Favorito</th>
      </tr>
      <tr v-for="svc in filtroServicios">
        <!--La ruta relativa ../ no funciona en este caso por algun motivo-->
        <td v-if="svc.MOSTRAR == 1"><img v-bind:src="'src/assets/iconos/' + svc.ICONO" v-bind:alt="svc.ICONO" style="width: 35px; height: 35px;"></td>
        <td v-if="svc.MOSTRAR == 1">{{ svc.SERVICIO }}</td>
        <td v-if="svc.MOSTRAR == 1">{{ svc.ENTRADA }}</td>
        <td v-if="svc.MOSTRAR == 1">
          <img 
            @click="marcarFavorito(svc)"
            style="width: 35px; height: 35px;"

            v-bind:src="serviciosFavoritos.findIndex( e=> e.SERVICIO == svc.SERVICIO) != -1 ? 'src/assets/corazon-lleno.png' : 'src/assets/corazon-vacio.png'"
            v-bind:alt="serviciosFavoritos.findIndex( e=> e.SERVICIO == svc.SERVICIO) != -1 ? 'Favorito' : 'No favorito'"
          ><!-- Comprueba si el servicio esta marcado como favorito, si encuentra el servicio muestra el corazon lleno, si no, el vacio -->
        </td>
      </tr>
    </table>
</template>
<script>
  
  import axios from 'axios';
  import { useCounter } from '../stores/counter';
  import { mapState, mapActions } from "pinia";
  import BasurtoWelcomeComponent from '../components/BasurtoWelcomeComponent.vue';
  import CuadroFavoritos from '../components/CuadroFavoritos.vue';
  export default{
    name: 'basurto',
    components: {
      BasurtoWelcomeComponent,
      CuadroFavoritos
    },
    data() {
      return {
        servicios: [],
        busqueda: ""
      }
    },
    methods:{
      async cargarServicios() {
        // obtiene mediante axios los datos del juego
        const allData = await axios.get("/basurto.json");

        this.servicios = allData.data;

        console.log(this.servicios);
      },
      marcarFavorito(svc) {
        this.controlFavoritos(svc);
      },
      ...mapActions(useCounter, ['controlFavoritos'])

    },
    computed: {
      filtroServicios() {
        return this.servicios.filter((servicio) => servicio.SERVICIO.toUpperCase().includes(this.busqueda.toUpperCase()));
      },
      ...mapState(useCounter, ['serviciosFavoritos', 'marcado'])
    },
    created() {
      this.cargarServicios();
    }
  }
</script>