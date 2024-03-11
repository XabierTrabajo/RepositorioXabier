<template>
    <div>
      <h1>Hola mundo!</h1>
      <button @click="pulsar">Mostrar/Ocultar texto</button>
      <br><br>
      <p v-show="mostrado == true">
        <h2>Has pulsado el boton!</h2>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>

</template>
<script>
  // import { useELNOMBRE } from '../store/_plantillaStore';
  // import { mapState } from "pinia";
  export default{
    name: 'EjercicioPractica1BotonView',
    components: {
      
    },
    data() {
      return {
        mostrado: false
      }
    },
    methods:{
      pulsar() {
        this.mostrado = !this.mostrado;
      }
    },
    computed: {
    
     
    },
    created() {
      
    }
  }
</script>