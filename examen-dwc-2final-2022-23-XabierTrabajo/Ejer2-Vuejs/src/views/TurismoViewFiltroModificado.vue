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
      <br>
      <span>Del: </span>
      <input type="date" v-model="diaL">
      <span> Al: </span>
      <input type="date" v-model="diaR">
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
    name: 'TurismoViewFiltroModificado',
    components: {
      BasqueTour
    },
    data() {
      return {
        eventos: [],
        regionSelect: "",
        diaL: "",
        diaR: ""
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
        // ordenar los eventos por fecha
        this.eventos.sort(function (a, b) {
          if (a.eventSearchDate1 > b.eventSearchDate1) {
            return 1;
          }
          if (b.eventSearchDate1 > a.eventSearchDate1) {
            return -1;
          }
          return 0;

        });

        // cambia de date a string
        let txtL = this.diaL.toString();
        let txtR = this.diaR.toString();

        // elimino los guiones para que pueda comparar las fechas mejor
        // /contenido/g reemplaza todo lo que encuentre
        txtL = txtL.replace(/-/g, "");
        txtR = txtR.replace(/-/g, "");

        console.log("txtL: " + txtL);
        console.log("txtR: " + txtR);
        
        // filtro por fecha seleccionada y region
        return this.eventos.filter(
        (e => {
          return e.territory.includes(this.regionSelect) &&
          (e.eventSearchDate1 >= txtL && e.eventSearchDate1 <= txtR)
        }));
      },

      ...mapState(useStore, ['eventosFavoritos'])
    },
    created() {
      this.cargarEventos();
    }
  }
</script>