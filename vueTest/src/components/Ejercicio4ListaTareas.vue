<script>
  export default {
      name: 'Ejercicio4ListaTareas',
      components: {},
      data() {
        return {
          //tareasGuardadas: []
        }
    },
    props: {
      tareasGuardadas: []
    },
    methods: {
     eliminar(tarea) {
      const i = this.tareasGuardadas.findIndex(this.tareasGuardadas.includes(tarea));
      this.tareasGuardadas.splice(i , 1);
     }
    },
  }
</script>


<template>
  <ul v-for="tarea in tareasGuardadas">
    <li>{{ tarea }} <button @click="eliminar(tarea)">Eliminar</button></li>
  </ul>
</template>