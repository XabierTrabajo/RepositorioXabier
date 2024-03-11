<template>
    <div>
      <h1>{{ arrayNumerosAlmacenados }}</h1>
      <form @submit.prevent>
        <span>Introduce un número: </span>
        <input type="number" v-model="numeroInput">
        <button @click="introducir">Introducir</button>
      </form>
    </div>

</template>
<script>
  import { useEjerciciosNavidadStore } from '../store/EjerciciosNavidadStore';
  import { mapState, mapActions } from "pinia";
  export default{
    name: 'EjercicioNavidad3InputPiniaView',
    components: {
      
    },
    data() {
      return {
        numeroInput: null
      }
    },
    methods:{
      introducir() {
        this.guardarNumeroStore(this.numeroInput);
      },

      ...mapActions(useEjerciciosNavidadStore,['guardarNumeroStore'])
    },
    computed: {
    
      ...mapState(useEjerciciosNavidadStore,['arrayNumerosAlmacenados'])
    },
    created() {
      
    }
  }
</script>