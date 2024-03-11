<template>
    <div>
      <h1>Lista de la compra</h1>

      <form @submit.prevent @submit="insertar()">
        <input type="text" v-model="articulo">
      </form>
      <br><br><br>
      <ul v-for="articulo in ListaCompra">
        <li>{{ articulo }}</li>
      </ul>
    </div>
</template>
<script>
  // import { useELNOMBRE } from '../store/_plantillaStore';
  // import { mapState } from "pinia";
  export default{
    name: 'EjercicioListaCompraView',
    components: {
      
    },
    data() {
      return {
        ListaCompra: [
          "Manzanas",
          "Huevos",
          "Pan",
          "Leche"
        ],
        articulo: ""
      }
    },
    methods:{
      insertar() {
        this.ListaCompra.push(this.articulo);
        this.articulo = "";
      }
    },
    computed: {
    
     
    },
    created() {
      
    }
  }
</script>