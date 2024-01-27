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
    <h1>El post {{ postId }}</h1> 
  </main>
</template>
