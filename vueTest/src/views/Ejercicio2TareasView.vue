<template>
    <div>
      <h1>Lista de Tareas</h1>
      <h2>Añade una tarea usando el cuadro de texto</h2>
      <br><br><br>
      <form @submit.prevent></form>
        <label for="text">Tarea: </label>
        <input type="text" v-model="text">
        <button @click="insertarTexto">Insertar</button>
    </div>
    <div>
      <ul v-for="tarea in tareasGuardadas">
        <li>{{ tarea }} <button @click="eliminar(tarea)">Eliminar</button></li>
      </ul>
    </div>
    
    <Ejercicio4ListaTareas />
</template>
<script>
  import Ejercicio4ListaTareas from '../components/Ejercicio4ListaTareas.vue'
  // import { useELNOMBRE } from '../store/_plantillaStore';
  // import { mapState } from "pinia";
  export default{
    name: 'Ejercicio2TareasView',
    components: {
      Ejercicio4ListaTareas
    },
    data() {
      return {
        text: "",
        tareasGuardadas: []
      }
    },
    methods:{
      insertarTexto() {
        this.tareasGuardadas.push(this.text);
        this.text = "";
      },
      eliminar(tarea) {
      // si el array es basico con el parametro e ya basta
      const i = this.tareasGuardadas.findIndex(e => e === tarea);
      this.tareasGuardadas.splice(i , 1);
     }
    },
    computed: {
    
     
    },
    created() {
      
    }
  }
</script>