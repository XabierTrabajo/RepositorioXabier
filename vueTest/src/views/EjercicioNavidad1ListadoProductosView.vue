<template>
    <div>
      <form @submit.prevent>
        <span>Nuevo producto: </span>
        <input type="text" v-model="productoTexto"><br>
        <span>Precio: </span>
        <input type="number" v-model="precioNumero"><br>
        <button @click="guardar(productoTexto, precioNumero)">Insertar</button>
      </form>
      <br><br><br>
      <div>
        <span v-for="comprado in productosAlmacenados">Nombre articulo: {{ comprado.producto }} | Precio: {{ comprado.precio }}€ <button @click="procesar(comprado)">Procesar</button><br></span>
        <br><br>
        <span>Total almacén: {{ totalAlmacen }}€</span>
      </div>
    </div>

</template>
<script>
  import { useEjerciciosNavidadStore } from '../store/EjerciciosNavidadStore';
  import { mapState, mapActions } from "pinia";
  export default{
    name: 'EjercicioNavidad1ListadoProductosView',
    components: {
      
    },
    data() {
      return {
        productoTexto: "",
        precioNumero: null
      }
    },
    methods:{
      guardar(productoTexto, precioNumero) {
        let articulo = {
          producto: productoTexto,
          precio: precioNumero
        }

        this.guardarProductoStore(articulo);
      },
      procesar(comprado) {
        this.actualizarTotalStore(comprado);
      },

      ...mapActions(useEjerciciosNavidadStore,['guardarProductoStore','actualizarTotalStore'])
    },
    computed: {
    
      ...mapState(useEjerciciosNavidadStore,['productosAlmacenados','totalAlmacen'])
    },
    created() {
      
    }
  }
</script>