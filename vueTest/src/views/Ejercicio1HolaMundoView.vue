<template>
    <div class="about">
      <Ejercicio1HolaMundo />
      <br><br><br>
      <Ejercicio2HacerTareas />
      <br><br><br>
      <Ejercicio3CuentaAtras />
    </div>

</template>
<script>
import Ejercicio1HolaMundo from '../components/Ejercicio1HolaMundo.vue'
import Ejercicio2HacerTareas from '../components/Ejercicio2HacerTareas.vue'
import Ejercicio3CuentaAtras from '../components/Ejercicio3CuentaAtras.vue'
  // import { useELNOMBRE } from '../store/_plantillaStore';
  // import { mapState } from "pinia";
  export default{
    name: 'Ejercicio1HolaMundoView',
    components: {
      Ejercicio1HolaMundo,
      Ejercicio2HacerTareas,
      Ejercicio3CuentaAtras
    },
    data() {
      return {
        
      }
    },
    methods:{
    
    },
    computed: {
    
     
    },
    created() {
      
    }
  }
</script>