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

<h1>Numero: {{contador}}</h1>
<button @click="incrementar">+</button>
<button @click="decrementar">-</button>
<br>
<h2>{{ parImpar }}</h2>
  
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
    ...mapState(useStore, ['contador','parImpar'])
  }, 
  methods: {
    //En esta sección se utiliza mapActions para mapear las acciones del store useStore en los métodos del componente. 
    //Se esta mapeando la accion hola mundo
    ...mapActions(useStore, ['incrementar', 'decrementar'])
  },
  created() {
    
  }
};
</script>
