<template>
    <BasqueTour />
    <br><br><br>
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
      <select v-model="mesSelect">
        <option value="">Todos</option>
        <option value="01">Enero</option>
        <option value="02">Febrero</option>
        <option value="03">Marzo</option>
        <option value="04">Abril</option>
        <option value="05">Mayo</option>
        <option value="06">Junio</option>
        <option value="07">Julio</option>
        <option value="08">Agosto</option>
        <option value="09">Septiembre</option>
        <option value="10">Octubre</option>
        <option value="11">Noviembre</option>
        <option value="12">Diciembre</option>
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
      <tr v-for="e in eventosFiltrados" >
        <!--La ruta relativa ../ no funciona en este caso por algun motivo-->
        <td v-bind:class="e.territory">{{ e.documentName }}</td>
        <td v-bind:class="e.territory">{{ e.eventStartDate }}</td>
        <td v-bind:class="e.territory">{{ e.territory }}</td>
        <td v-bind:class="e.territory">{{ e.documentDescription }}</td>
        <td v-bind:class="e.territory"><a v-bind:href="e.friendlyUrl">{{ e.friendlyUrl }}</a></td>
        <td v-bind:class="e.territory"><button @click="marcarFavorito(e)">Favorito</button></td>
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
  import { useStore } from '../store/Store';
  import { mapState, mapActions } from "pinia";
  import BasqueTour from '../components/BasqueTour.vue'
  export default{
    name: 'TurismoView',
    components: {
      BasqueTour
    },
    data() {
      return {
        eventos: [],
        regionSelect: "",
        mesSelect: ""
      }
    },
    methods:{
      async cargarEventos() {
        // obtiene mediante axios los datos del juego
        const allData = await axios.get("/agenda.json");

        this.eventos = allData.data;

        console.log(this.eventos);
      },

      marcarFavorito(e) {
        this.controlFavoritos(e);
      },

      ...mapActions(useStore, ['controlFavoritos'])
    },
    computed: {
      /*
      filtroProvincia() {
        return this.eventos.filter((e) => e.territory.includes(this.regionSelect));
      },
      filtroMes() {
        // split separa la fecha en un array separando por /
        // [1] indica el parametro de la fecha que debe buscar, el mes en este caso
        return this.eventos.filter((e) => e.eventStartDate.split("/")[1].includes(this.mesSelect));
      },
      */
      eventosFiltrados() {
        return this.eventos.filter(
        (e => {
          return e.territory.includes(this.regionSelect) &&
          e.eventStartDate.split("/")[1].includes(this.mesSelect)
        }));
      },
      ...mapState(useStore, ['eventosFavoritos'])
    },
    created() {
      this.cargarEventos();
    }
  }
</script>