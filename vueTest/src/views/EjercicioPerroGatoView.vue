<template>
    <div>
      <h1>¿PERRO O GATO?</h1>
      <select v-model="seleccion">
        <option value="perro">Perro</option>
        <option value="gato">Gato</option>
      </select>
      <br><br><br>
      <div v-show="seleccion != ''">
        <img v-bind:src="'src/assets/img/'+seleccion+'.png'" alt="seleccion" width="300"><br>
        <span v-show="seleccion == 'perro'">Guau!</span>
        <span v-show="seleccion == 'gato'">Miau!</span>
      </div>
      
    </div>

</template>
<script>
  // import { useELNOMBRE } from '../store/_plantillaStore';
  // import { mapState } from "pinia";
  export default{
    name: 'EjercicioPerroGatoView',
    components: {
      
    },
    data() {
      return {
        seleccion: ""
      }
    },
    methods:{
    
    },
    computed: {
    
     
    },
    created() {
      
    }
  }
</script>