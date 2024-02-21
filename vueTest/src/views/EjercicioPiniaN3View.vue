<template>
    <div class="about">

      <span v-for="num in arrayNumeros">{{ num }}, </span>
      <br><br><br>
      <form @submit.prevent>
        <input type="number" v-model="numero">
        <button @click="añadirNumero">Añadir numero</button>
      </form>
    </div>

</template>
<script>
  import { useTestPinia } from '../store/TestPiniaPruebas';
  import { mapState, mapWritableState, mapActions } from "pinia";
  export default{
    name: 'EjercicioPiniaN3View',
    components: {
      
    },
    data() {
      return {
        //arrayNumeros: [],
        numero: 0
      }
    },
    methods:{
      añadirNumero() {
        this.guardarNumero(this.numero);
      },
      
      ...mapActions(useTestPinia,['guardarNumero'])
      
    },
    computed: {
      
      ...mapState(useTestPinia,['arrayNumeros']),
     
    },
    created() {
      
    }
  }
</script>