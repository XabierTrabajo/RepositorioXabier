<template>
  <div>
    <h1>Examen 2Ev DWC Curso 2023-24</h1><br>
    <h1>Servicios favoritos</h1>
    <BasurtoWelcomeComponent />
  </div>
  <div>
    <span>
      Tienes {{ serviciosFavoritos.length }}
      <span v-if="serviciosFavoritos.length == 1">servicio favorito</span>
      <span v-else>servicios favoritos</span>
    </span>
<!-- 
    <br><br><br>
    <ul v-for="svc in serviciosFavoritos" style="list-style: none;">
      <li>
        <img v-bind:src="'src/assets/iconos/' + svc.ICONO" v-bind:alt="svc.ICONO" style="width: 35px; height: 35px;">
        {{ svc.SERVICIO }}
        <img src="../assets/eliminar.png" alt="eliminar.png" style="width: 35px; height: 35px;"
          @click="borrarFavorito(svc)">
      </li>
    </ul>
-->
    <br><br><br>
    <table>
      <tr>
        <th>Icono</th>
        <th>Servicio</th>
        <th>Pabellón</th>
        <th>Acción</th>
      </tr>
      <tr v-for="svc in serviciosFavoritos">
        <!--La ruta relativa ../ no funciona en este caso por algun motivo-->
        <td v-if="svc.MOSTRAR == 1"><img v-bind:src="'src/assets/iconos/' + svc.ICONO" v-bind:alt="svc.ICONO"style="width: 35px; height: 35px;"></td>
        <td v-if="svc.MOSTRAR == 1">{{ svc.SERVICIO }}</td>
        <td v-if="svc.MOSTRAR == 1">{{ svc.ENTRADA }}</td>
        <td v-if="svc.MOSTRAR == 1">
          <img src="../assets/eliminar.png" alt="eliminar.png" style="width: 35px; height: 35px;" @click="borrarFavorito(svc)">
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
  
  
  import { useCounter } from '../stores/counter';
  import { mapState, mapActions } from "pinia";
  import BasurtoWelcomeComponent from '../components/BasurtoWelcomeComponent.vue'
  export default{
    name: 'favoritos',
    components: {
      BasurtoWelcomeComponent
    },
    data() {
      return {
        
      }
    },
    methods:{
      borrarFavorito(svc) {
        this.controlFavoritos(svc);
      },
      ...mapActions(useCounter, ['controlFavoritos'])
    },
    computed: {
    
      ...mapState(useCounter, ['serviciosFavoritos'])
    },
    created() {
      
    }
  }
</script>