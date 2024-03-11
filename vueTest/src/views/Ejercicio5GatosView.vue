<template>
    <div>
      <h1>Ejercicio 5 Gatos</h1>
      <div>
        <form @submit.prevent>
          <span>Titulo: </span>
          <input type="text" v-model="text"><br>
          <span>Filtro: </span>
          <select v-model="filtroSelect">
            <option value="mono">Blanco y negro</option>
            <option value="negate">Colores invertidos</option>
            <option value="custom">Custom</option>
          </select><br>
          <span>Tamaño: </span>
          <input type="number" v-model="filtroTamano"><br>

          <br><br>
          <button @click="cargarGato">Mostrar gato</button>
        </form>
        <br><br><br>
        <img v-bind:src="datosGato" alt="Foto gato" v-bind:width="filtroTamano">
      </div>
    </div>

</template>
<script>
  import axios from 'axios';
  // import { useELNOMBRE } from '../store/_plantillaStore';
  // import { mapState } from "pinia";
  export default{
    name: 'Ejercicio5GatosView',
    components: {
      
    },
    data() {
      return {
        datosGato: "",
        filtroSelect: "",
        filtroTamano: 250,
        text: ""
      }
    },
    methods:{
      async cargarGato() {
 
        const allData = await axios.get(`https://cataas.com/cat/says/${this.text}?fontSize=75&filter=${this.filtroSelect}`);
        // https://cataas.com/cat
        this.datosGato = allData.request.responseURL;
        console.log(this.datosGato);
      },
    },
    computed: {
    
     
    },
    created() {
    }
  }
</script>