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
  <H1>CONTIENE ERRORES!</H1>
    <form @submit.prevent>
      <div v-if="pokemonTeamData.length == 10">
        <label for="listaPokemon">Ver Pokémon</label>
        <select name="listaPokemon" id="listaPokemon">
          <option v-for="pokemon in pokemonTeamData" v-bind:value="index">
            {{ pokemon.name }}
          </option>
        </select>
      </div>
      
      <button @click="store.insertarPikachu()">Insertar Pikachu</button>
      <button @click="store.vaciarSeleccion()">Borrar seleccionado</button>
      <button @click="store.vaciarEquipo()">Borrar equipo</button>
    </form><br><br><br>


    <div v-if="pokemonTeamData.length!=0">
      <span>ID Pokédex: {{ pokemonTeamData[index].id }}</span><br>
      <span>Nombre: {{ pokemonTeamData[index].name }}</span><br>
      <span>Tipos: 
        <div v-for="(type, key) in pokemonTeamData[index].types" :key="key">
          - {{ type.type.name }}
        </div>
      </span><br>
      <span>Habilidades: 
        <div v-for="(ability, key) in pokemonTeamData[index].abilities" :key="key">
          - {{ ability.ability.name }}
        </div>
      </span><br>
      <span>Imagenes: </span><br>
      <div>
        <img :src=pokemonTeamSprites[index].front_default alt="Macho" v-if="pokemonTeamSprites[index].front_default != null">
        <img :src=pokemonTeamSprites[index].front_female alt="Hembra" v-if="pokemonTeamSprites[index].front_female != null">
        <img :src=pokemonTeamSprites[index].front_shiny alt="Macho" v-if="pokemonTeamSprites[index].front_shiny != null">
        <img :src=pokemonTeamSprites[index].front_shiny_female alt="Hembra" v-if="pokemonTeamSprites[index].front_shiny_female != null">
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";

//Se están importando las funciones mapState y mapActions de Pinia, 
//que se utilizan para mapear las propiedades del estado y 
//las acciones de un store en las propiedades computadas y métodos de un componente.
import {useStore} from '@/store/store'
import { mapState, mapActions } from 'pinia'
import { mapWritableState } from 'pinia'

export default {
  components: {
  },
  data() {
    return {
      
    }
  },
  computed: {
    //En esta sección se utiliza mapState para mapear las propiedades del estado del store useStore en las propiedades computadas del componente. 
    //En este caso, se están mapeando las propiedades contador y parImpar del store al componente.
    ...mapState(useStore, ['pokemonTeamData','pokemonTeamSprites','index'])
  }, 
  methods: {
    //En esta sección se utiliza mapActions para mapear las acciones del store useStore en los métodos del componente. 
    //Se esta mapeando la accion hola mundo
    ...mapActions(useStore, ['insertarSeleccionado', 'insertarPikachu', 'vaciarSeleccion', 'vaciarEquipo'])
  },
  mounted() {
    
  }
};
</script>
