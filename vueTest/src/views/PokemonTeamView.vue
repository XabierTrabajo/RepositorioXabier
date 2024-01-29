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
    <form @submit.prevent>
      <label for="listaPokemon">Ver Pokémon</label>
      <select name="listaPokemon" id="listaPokemon">
        <option v-for="pokemon in pokemonTeamData" value="">
          {{ pokemon.name }}
        </option>
      </select>
    </form><br><br><br>
<button @click="showTest">test</button>

    <div v-if="pokemonTeamData != null">
      <span>ID Pokédex: {{ pokemonTeamData.id }}</span><br>
      <span>Nombre: {{ pokemonTeamData.name }}</span><br>
      <span>Tipos: 
        <div v-for="(type, key) in pokemonTeamData.types" :key="key">
          - {{ type.type.name }}
        </div>
      </span><br>
      <span>Habilidades: 
        <div v-for="(ability, key) in pokemonTeamData.abilities" :key="key">
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
  methods: {
    //En esta sección se utiliza mapActions para mapear las acciones del store useCounterStore en los métodos del componente. Se están mapeando las acciones incrementar y decrementar.
    ...mapActions(useStore,['showTest'])
  },
  computed: {
    //En esta sección se utiliza mapState para mapear las propiedades del estado del store useCounterStore en las propiedades computadas del componente. En este caso, se están mapeando las propiedades contador y parImpar del store al componente.
    ...mapState(useStore, ['test'])
  },
  created() {
    
  }
};
</script>
