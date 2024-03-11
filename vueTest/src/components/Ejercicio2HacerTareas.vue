<script>
  export default {
      name: 'Ejercicio2HacerTareas',
      data() {
        return {
            tareas: [],
            mostrar: false
        }
      },
      methods: {
            nuevaTrea(){
              let tareasId = document.getElementById("tareasId").value;
              this.tareas.push(tareasId);
              this.mostrar = true;
              document.getElementById("tareasId").value=""
            }
      },
  }
</script>


<template>
  <div id="app">
    <h1>Lista de Tareas por Realizar</h1>
    <h2>Crea una nueva tarea:</h2>
    <p>Tarea<input type="text" id="tareasId" @keyup.enter="nuevaTrea"><button @click="nuevaTrea">Crear</button></p>
    <h2>Lista</h2>
    <ul v-show="mostrar">
      <li v-for="(item, index) in tareas" :key="index">{{item}}</li>
    </ul>
    <p v-show="!mostrar">Aun no se han cargado tareas por realizar</p>
  </div> 
</template>
