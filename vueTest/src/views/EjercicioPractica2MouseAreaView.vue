<template>
    
    <div style="border: 10px solid green;" @mousemove="mouseArea">
      <h4>
        Mueve el raton dentro del cuadrado para saber sus coordenadas: <br>
        X: {{ mouseX }}  Y: {{ mouseY }}
      </h4>
    </div>

</template>
<script>
  // import { useELNOMBRE } from '../store/_plantillaStore';
  // import { mapState } from "pinia";
  export default{
    name: 'EjercicioPractica2MouseAreaView',
    components: {
      
    },
    data() {
      return {
        mouseX: '0',
        mouseY: '0'
      }
    },
    methods:{
      mouseArea(event) {
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
      }
    },
    computed: {
      
     
    },
    created() {
      
    }
  }
</script>