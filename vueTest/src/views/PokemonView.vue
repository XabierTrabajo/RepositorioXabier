<script setup>
import {ref, onMounted} from 'vue';
import { useRoute } from 'vue-router';

const postId = ref('');

onMounted(()=>{
  const route = useRoute()
  postId.value=route.params.id
})
</script>

<template>
  <main>
    <h1>CONTIENE ERRORES!</h1>
    <form @submit.prevent>
      <label for="nombre">Buscar Pokémon</label>
      <input type="text" name="nombre" id="nombre" placeholder="nombre">
      <button class="w-28" @click="buscar">
        Buscar
      </button>
    </form><br><br><br>
    
    <div v-if="pokemonData != null">
      <span>ID Pokédex: {{ pokemonData.id }}</span><br>
      <span>Nombre: {{ pokemonData.name }}</span><br>
      <span>Tipos: 
        <div v-for="(type, key) in pokemonData.types" :key="key">
          - {{ type.type.name }}
        </div>
      </span><br>
      <span>Habilidades: 
        <div v-for="(ability, key) in pokemonData.abilities" :key="key">
          - {{ ability.ability.name }}
        </div>
      </span><br>
      <span>Imagenes: </span><br>
      <div>
        <img :src=pokemonImg alt="Macho" v-if="pokemonImg != null">
        <img :src=pokemonImgF alt="Hembra" v-if="pokemonImgF != null">
        <img :src=pokemonImgShiny alt="Macho" v-if="pokemonImgShiny != null">
        <img :src=pokemonImgShinyF alt="Hembra" v-if="pokemonImgShinyF != null">
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import {useStore} from '@/store/store'
import { mapState, mapActions } from 'pinia'
import { mapWritableState } from 'pinia'

export default {
  components: {
  },
  data() {
    return {
      pokemonData: [],
      pokemonImg: "",
      pokemonImgF: "",
      pokemonImgShiny: "",
      pokemonImgShinyF: "",
    }
  },
  computed: {
    ...mapState(useStore, ['contador','parImpar'])
  },
  methods: {
    async getAllData() {
      // obtiene mediante axios los datos del pokemon
      const allData = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/pikachu"
      );
      // guarda los datos en el array
      this.pokemonData = allData.data;
      // guarda los sprites en las variables
      this.pokemonImg = this.pokemonData.sprites.front_default;
      this.pokemonImgF = this.pokemonData.sprites.front_female;
      this.pokemonImgShiny = this.pokemonData.sprites.front_shiny;
      this.pokemonImgShinyF = this.pokemonData.sprites.front_shiny_female;
    },
    
    async buscar() {
      let nombre = document.getElementById("nombre").value;
      
      try {
        // llama a la api con el nombre del pokemon introducido
        const allData = await axios.get('https://pokeapi.co/api/v2/pokemon/'+nombre)
        console.log("Respuesta API: ");
        console.log(allData.data);
        
        // resetea los datos antiguos del pokemon y muestra los datos del nuevo
        this.resetData();
        this.pokemonData = allData.data;
        // guarda los sprites en las variables
        this.pokemonImg = this.pokemonData.sprites.front_default;
        this.pokemonImgF = this.pokemonData.sprites.front_female;
        this.pokemonImgShiny = this.pokemonData.sprites.front_shiny;
        this.pokemonImgShinyF = this.pokemonData.sprites.front_shiny_female;
      }
      catch(error) {
        console.log(error);
      }
      
    },

    resetData() {
      this.pokemonData = [];
      this.pokemonImg = "";
      this.pokemonImgF = "";
      this.pokemonImgShiny = "";
      this.pokemonImgShinyF = "";
    },

    insertar() {

    },
    //...mapWritableState(useCounterStore, ['counter']),
    ...mapActions(useStore, ['insertarSeleccionado', 'insertarPikachu', 'vaciarSeleccion', 'vaciarEquipo'])
  },
  created() {
    this.resetData();
    this.getAllData();
  }
};
</script>
