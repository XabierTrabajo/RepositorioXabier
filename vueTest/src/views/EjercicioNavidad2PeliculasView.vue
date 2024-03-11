<template>
    <div>
      <div v-for="pelicula in peliculasAlmacenadas">
        <h2>{{ pelicula.titulo }}</h2>
        <button @click="restarLike(pelicula)" style="background-color: red; color: white;">Dislike</button>  {{ pelicula.likes }}  <button @click="sumarLike(pelicula)" style="background-color: greenyellow;">Like</button>
      </div>
      <br><br>
      <h2>Total likes: {{ totalLikesAlmacen }}</h2>
    </div>

</template>
<script>
  import { useEjerciciosNavidadStore } from '../store/EjerciciosNavidadStore';
  import { mapState, mapActions } from "pinia";
  export default{
    name: 'EjercicioNavidad2PeliculasView',
    components: {
      
    },
    data() {
      return {
        
      }
    },
    methods:{
      restarLike(pelicula) {
        this.restarLikeStore(pelicula);
      },

      sumarLike(pelicula) {
        this.sumarLikeStore(pelicula);
      },

      ...mapActions(useEjerciciosNavidadStore,['restarLikeStore','sumarLikeStore'])
    },
    computed: {
    
      ...mapState(useEjerciciosNavidadStore,['peliculasAlmacenadas','totalLikesAlmacen','calcularTotalLikesStore'])
    },
    created() {
      
    }
  }
</script>