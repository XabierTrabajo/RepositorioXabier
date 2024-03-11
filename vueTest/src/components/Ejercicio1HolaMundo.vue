<script>
  export default {
      name: 'Ejercicio1HolaMundo',
      components: {},
      data() {
        return {
          contador: 0,
          inicio: 0,
          x: 0,
          y: 0
        }
    },
    methods: {
      sumar(dos){
        this.contador += dos;
      },
      cambioContador(){
        this.contador = this.inicio;
      },
      valoresXY(evento){
        this.x = evento.clientX;
        this.y = evento.clientY;
      }
    },
  }
</script>


<template>
  <input type="text" v-model.number="inicio" @keyup="cambioContador">
    <button @click="sumar(2)">Sumar + 2</button>
    <p v-text="contador"></p>
    <p @mousemove="valoresXY">
      valor de x: {{x}} <br>
      valor de y: {{y}}
    </p>
</template>