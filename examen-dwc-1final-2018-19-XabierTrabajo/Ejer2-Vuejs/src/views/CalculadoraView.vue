<template>
    <div>
      <div class="parent">
        <!-- Operadores -->
        <div class="div1 elementLayout resultado"> {{ mostrarResultado }} </div>
        <div class="div2 elementLayout" @click="pasarNumero('+')"> + </div>
        <div class="div3 elementLayout" @click="pasarNumero('-')"> - </div>
        <div class="div4 elementLayout" @click="pasarNumero('x')"> x </div>
        <div class="div5 elementLayout" @click="pasarNumero('/')"> / </div>
        <div class="div18 elementLayout" @click="clearAC"> AC </div>
        <div class="div19 elementLayout" @click="clearC"> C </div>
        <div class="div6 elementLayout" @click="operacion"> = </div>
        <div class="div7 elementLayout" @click="pasarNumero('0')"> 0 </div>
        <div class="div8 elementLayout" @click="pasarNumero(',')"><strong> , </strong></div>
        <!-- Numeros -->
        <div class="div9 elementLayout"  @click="pasarNumero('1')"> 1 </div>
        <div class="div10 elementLayout" @click="pasarNumero('2')"> 2 </div>
        <div class="div11 elementLayout" @click="pasarNumero('3')"> 3 </div>
        <div class="div12 elementLayout" @click="pasarNumero('4')"> 4 </div>
        <div class="div13 elementLayout" @click="pasarNumero('5')"> 5 </div>
        <div class="div14 elementLayout" @click="pasarNumero('6')"> 6 </div>
        <div class="div15 elementLayout" @click="pasarNumero('7')"> 7 </div>
        <div class="div16 elementLayout" @click="pasarNumero('8')"> 8 </div>
        <div class="div17 elementLayout" @click="pasarNumero('9')"> 9 </div>
      </div>
    </div>

</template>
<script>
  //import { useELNOMBRE } from '../store/_plantillaStore';
  //import { mapState } from "pinia";
  export default{
    name: 'CalculadoraView',
    components: {
      
    },
    data() {
      return {
        resultado: 0,

      }
    },
    methods:{
      pasarNumero(numero) {
        // obtiene los numeros como texto para añadirlos al numero sin sumarlos
        if (this.resultado == '0') {
          this.resultado = numero;
        }
        else {
          this.resultado += numero;
        }       
      },

      clearC() {
        // si el numero tiene una longitud de mas de un caracter borra el numero del final
        if (this.resultado.length > 1) {
          this.resultado = this.resultado.substring(0, this.resultado.length - 1);
        }
        else {
          this.resultado = '0';
        }
      },

      clearAC() {
        // borra todos los numeros
        this.resultado = '0';
      },

      operacion() {
        // defino el numero 2 para la operacion
        let num = this.resultado;
        this.resultado = num;

        // cambio el texto a operadores aritmeticos
        num = num.replace('x', '*');
        num = num.replace('/', '/');
        num = num.replace(',', '.');

        // realiza la operacion
        this.resultado = eval(num);
       
      }
      
    },
    computed: {
      mostrarResultado() {
        return this.resultado.toLocaleString('es');
      }
     
    },
    created() {
      
    }
  }
</script>
<style>
  .parent {
    width: 1000px;
    height: 600px;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    justify-items: stretch;
    align-items: stretch;

    font-weight: bold;
  }
  /* operadores */
  .div1 { grid-area: 1 / 1 / 2 / 5; }
  .div2 { grid-area: 2 / 1 / 3 / 2; }
  .div3 { grid-area: 2 / 2 / 3 / 3; }
  .div4 { grid-area: 2 / 3 / 3 / 4; }
  .div5 { grid-area: 2 / 4 / 3 / 5; }
  .div18 { grid-area: 3 / 4 / 4 / 6; }
  .div19 { grid-area: 4 / 4 / 5 / 6; }
  .div6 { grid-area: 5 / 4 / 7 / 5; }
  .div7 { grid-area: 6 / 1 / 7 / 3; }
  .div8 { grid-area: 6 / 3 / 7 / 4; }
  /* numeros */
  .div9 { grid-area: 5 / 1 / 6 / 2; }
  .div10 { grid-area: 5 / 2 / 6 / 3; }
  .div11 { grid-area: 5 / 3 / 6 / 4; }
  .div12 { grid-area: 4 / 1 / 5 / 2; }
  .div13 { grid-area: 4 / 2 / 5 / 3; }
  .div14 { grid-area: 4 / 3 / 5 / 4; }
  .div15 { grid-area: 3 / 1 / 4 / 2; }
  .div16 { grid-area: 3 / 2 / 4 / 3; }
  .div17 { grid-area: 3 / 3 / 4 / 4; }
  
  .elementLayout {
    border: 2px solid black;
    padding: 50px;

    font-family: Arial, Helvetica, sans-serif;
    font-size: xx-large;
    text-align: center;
  }

  .resultado {
    text-align: right;
  }
</style>