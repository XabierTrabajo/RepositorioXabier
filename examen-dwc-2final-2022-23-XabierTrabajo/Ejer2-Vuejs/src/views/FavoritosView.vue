<template>
    <BasqueTour />
    <br><br><br>
    <div>
      <h1>Creación de ruta turística</h1><br>
      <h2 v-if="eventosFavoritos.length == 0">Todavía no has seleccionado actividades favoritas</h2>
    </div>
    <table v-if="eventosFavoritos.length > 0">
      <tr>
          <th>Evento</th>
          <th>Fecha</th>
          <th>Territorio</th>
          <th>Descripción</th>
          <th>Más info</th>
          <th>Favoritos</th>
      </tr>
      <tr v-for="e in eventosFavoritos" >
        <!--La ruta relativa ../ no funciona en este caso por algun motivo-->
        <td v-bind:class="e.territory">{{ e.documentName }}</td>
        <td v-bind:class="e.territory">{{ e.eventStartDate }}</td>
        <td v-bind:class="e.territory">{{ e.territory }}</td>
        <td v-bind:class="e.territory">{{ e.documentDescription }}</td>
        <td v-bind:class="e.territory"><a v-bind:href="e.friendlyUrl">{{ e.friendlyUrl }}</a></td>
        <td v-bind:class="e.territory"><button @click="marcarFavorito(e)">Quitar Favorito</button></td>
      </tr>
    </table>
</template>
<script>
  import { useStore } from '../store/Store';
  import { mapState, mapActions } from "pinia";
  import BasqueTour from '../components/BasqueTour.vue'
  export default{
    name: 'FavoritosView',
    components: {
      BasqueTour
    },
    data() {
      return {
        
      }
    },
    methods:{
      
      marcarFavorito(e) {
        this.controlFavoritos(e);
      },

      ...mapActions(useStore, ['controlFavoritos'])
    },
    computed: {
    
      ...mapState(useStore, ['eventosFavoritos'])
    },
    created() {
      
    }
  }
</script>