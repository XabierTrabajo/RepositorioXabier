<script setup>

</script>

<template>
  <main>
    <h1>El blog</h1> 
    <ul>
      <li><RouterLink :to="{name:'post', params:{id:1}}">Post 1</RouterLink></li>
      <li><RouterLink :to="{name:'post', params:{id:2}}">Post 2</RouterLink></li>
      <li><RouterLink :to="{name:'post', params:{id:3}}">Post 3</RouterLink></li>
    </ul>
  </main>
</template>
