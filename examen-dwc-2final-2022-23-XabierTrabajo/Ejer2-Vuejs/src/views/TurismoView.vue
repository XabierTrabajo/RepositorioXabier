<template>
    <div>
      <h1>Creación de ruta turística</h1><br>
      <h2>Filtros</h2><br>

      <span>Selecciona provincia: </span>
      <select v-model="regionSelect">
        <option value="">Todas</option>
        <option value="Bizkaia">Bizkaia</option>
        <option value="Gipuzkoa">Gipuzkoa</option>
        <option value="Araba">Araba</option>
      </select>
      <span>Selecciona mes: </span>
      <select>
        <option >
          
        </option>
      </select>
    </div>
    <table>
      <tr>
          <th>Evento</th>
          <th>Fecha</th>
          <th>Territorio</th>
          <th>Descripción</th>
          <th>Más info</th>
          <th>Favoritos</th>
      </tr>
      <tr v-for="e in filtroProvincia" >
        <!--La ruta relativa ../ no funciona en este caso por algun motivo-->
        <td v-bind:class="e.territory">{{ e.documentName }}</td>
        <td v-bind:class="e.territory">{{ e.eventStartDate }}</td>
        <td v-bind:class="e.territory">{{ e.territory }}</td>
        <td v-bind:class="e.territory">{{ e.documentDescription }}</td>
        <td v-bind:class="e.territory"><a v-bind:href="e.friendlyUrl">{{ e.friendlyUrl }}</a></td>
        <td v-bind:class="e.territory"><button>Favorito</button></td>
      </tr>
    </table>
</template>
<style>
  .Gipuzkoa {
    background-color: darkolivegreen;
  }
  .Bizkaia {
    background-color: burlywood;
  }
  .Araba {
    background-color: orangered;
  }
</style>
<script>
  import axios from 'axios'
  //import { useELNOMBRE } from '../store/_plantillaStore';
  import { mapState } from "pinia";
  export default{
    name: 'TurismoView',
    components: {
      
    },
    data() {
      return {
        eventos: [],
        regionSelect: ""
      }
    },
    methods:{
      async cargarEventos() {
        // obtiene mediante axios los datos del juego
        const allData = await axios.get("/agenda.json");

        this.eventos = allData.data;

        console.log(this.eventos);
      },
    },
    computed: {
      filtroProvincia() {
        return this.eventos.filter((e) => e.territory.includes(this.regionSelect));
      },
     
    },
    created() {
      this.cargarEventos();
    }
  }
</script>