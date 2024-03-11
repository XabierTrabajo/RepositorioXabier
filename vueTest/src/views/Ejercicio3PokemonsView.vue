<template>
    <div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1920px-International_Pok%C3%A9mon_logo.svg.png" alt="Pokeapi" width="300">
      <br><br><br>
      <form @submit.prevent>
        <span>Filtrar por nombre: </span><br>
        <input type="text" v-model="inputNombre">
        <br><br><br>
        <span>Pokemons encontrados: </span><br>
        <select v-model="pokemonSeleccionado">
          <option 
            v-for="pokemon in nombresFiltrados" v-bind:value="pokemon.name">
            {{ pokemon.name }}
        </option>
        </select>
        <button @click="buscarSeleccionado(pokemonSeleccionado)">Ver detalles</button>
      </form>
      <br><br><br>
      <div>
        <h2>Nombre: {{ datosPokemon.name }}</h2>
        <br><br>
        <h2>Tipo: </h2>
          <div v-for="tipo in datosPokemon.types">
            <span>{{ tipo.type.name }}</span><br>
          </div>
        <br><br>
        <h2>Habilidades: </h2>
          <div v-for="habilidad in datosPokemon.abilities">
            <span>{{ habilidad.ability.name }}</span><br>
          </div>
        <br><br>
        <h2>Movimientos: </h2>
        <div>
          <select>
            <option v-for="movimiento in datosPokemon.moves">
              {{ movimiento.move.name }}
            </option>
          </select>
        </div>
        <br><br>
        <div>
          <img :src=pokemonImg alt="Macho" v-if="pokemonImg != null">
          <img :src=pokemonImgF alt="Hembra" v-if="pokemonImgF != null">
          <img :src=pokemonImgShiny alt="Macho" v-if="pokemonImgShiny != null">
          <img :src=pokemonImgShinyF alt="Hembra" v-if="pokemonImgShinyF != null">
        </div>
      </div>
    </div>

</template>
<script>
  // import { useELNOMBRE } from '../store/_plantillaStore';
  // import { mapState } from "pinia";
  import axios from 'axios';
  export default{
    name: 'Ejercicio3PokemonsView',
    components: {
      
    },
    data() {
      return {
        datosPokemon: [],
        datosNombres: [],
        inputNombre: "",
        pokemonSeleccionado: "",
        pokemonImg: "",
        pokemonImgF: "",
        pokemonImgShiny: "",
        pokemonImgShinyF: ""
      }
    },
    methods:{
      async cargarPikachu() {
        const allData = await axios.get("https://pokeapi.co/api/v2/pokemon/pikachu");
        this.datosPokemon = allData.data;
        console.log(this.datosPokemon);
        
        // guarda los sprites en las variables
        this.pokemonImg = this.datosPokemon.sprites.front_default;
        this.pokemonImgF = this.datosPokemon.sprites.front_female;
        this.pokemonImgShiny = this.datosPokemon.sprites.front_shiny;
        this.pokemonImgShinyF = this.datosPokemon.sprites.front_shiny_female;
      },
      async cargarNombres() {
        const allData = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
        // https://pokeapi.co/api/v2/pokemon/ --------------------------------------20
        // https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0 -----------------1000+
        this.datosNombres = allData.data.results;
        console.log(this.datosNombres);
      },
      async buscarSeleccionado(pokemon) {
        // para que funcione se pone asincrono
        const allData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        this.datosPokemon = allData.data;
        console.log(this.datosPokemon);

        // guarda los sprites en las variables
        this.pokemonImg = this.datosPokemon.sprites.front_default;
        this.pokemonImgF = this.datosPokemon.sprites.front_female;
        this.pokemonImgShiny = this.datosPokemon.sprites.front_shiny;
        this.pokemonImgShinyF = this.datosPokemon.sprites.front_shiny_female;
      }
    },
    computed: {
      nombresFiltrados() {
        return this.datosNombres.filter((pokemon) => pokemon.name.toUpperCase().includes(this.inputNombre.toUpperCase()));
      }
     
    },
    created() {
      this.cargarNombres();
      this.cargarPikachu();
    }
  }
</script>