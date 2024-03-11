<template>
    <div>
      <h1>Traductor</h1>
      <form @submit.prevent @submit="traductor()">
        <input type="text" v-model="palabra">
      </form>
      <span v-show="traduccion != ''">Traducción: {{ traduccion }}</span>
    </div>

</template>
<script>
  // import { useELNOMBRE } from '../store/_plantillaStore';
  // import { mapState } from "pinia";
  export default{
    name: 'EjercicioTraductorView',
    components: {
      
    },
    data() {
      return {
        palabras: [
          {
            es: "hola",
            en: "hello"
          },
          {
            es: "adios",
            en: "goodbye"
          },
          {
            es: "rojo",
            en: "red"
          },
          {
            es: "verde",
            en: "green"
          },
          {
            es: "amarillo",
            en: "yellow"
          },
          {
            es: "azul",
            en: "blue"
          }
        ],
        palabra: "",
        traduccion: ""
      }
    },
    methods:{
      traductor() {
        // findIndex busca la palabra introducida
        // si lo encuentra su valor es la posicion en el array pero si no lo encuentra devuelve -1
        const i = this.palabras.findIndex(element => element.es === this.palabra);

        // si ya esta lo traduzco
        if (i > -1) {
          this.traduccion = this.palabras[i].en;
        }

        else {
          this.traduccion = "Error. Palabra no encontrada en la base de datos.";
        }

      }
    },
    computed: {
    
     
    },
    created() {
      
    }
  }
</script>