<template>
    <div>
    </div>

</template>
<script>
  // import { useELNOMBRE } from '../store/_plantillaStore';
  // import { mapState } from "pinia";
  export default{
    name: 'plantillaView',
    components: {
      
    },
    data() {
      return {
        
      }
    },
    methods:{
      ejemplos() {
        // pone la primera letra en mayusculas para filtrar mejor luego
        let cancionMayuscula = "";
        for (let i = 0; i < cancion.length; i++) {
          if (i == 0) {
            cancionMayuscula = cancion[0].toUpperCase();
          }
          else {
            cancionMayuscula = cancionMayuscula + cancion[i];
          }
        }
        this.playlist.sort();

        // transforma todo en minusculas
        for (let i = 0; i < this.lista.length; i++) {
          this.lista[i] = this.lista[i].toLowerCase();
        }
        this.lista.sort();
      }
    },
    computed: {
    
     
    },
    created() {
      
    }
  }
</script>