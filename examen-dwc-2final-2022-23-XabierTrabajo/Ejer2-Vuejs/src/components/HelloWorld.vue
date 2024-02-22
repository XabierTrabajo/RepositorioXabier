<script>
  //import axios from 'axios'
  export default {
      name: 'HelloWorld',
      components: {},
      data(){
          return{

          }
      },
      methods:{
          
      }
  }
</script>


<template>
  <div>
    <img src="../assets/TX.jpg" alt="TX">
    <img src="../assets/euskadi-azul.jpg" alt="euskadi">
    <h2>Ongi etorri CIFP Txurdinaga LHII-ko turismo orrira</h2>
    <h3>
      Esta aplicación utiliza datos abiertos del Gobierno Vasco, Open Data Euskadi, para su desarrollo
    </h3>
  </div> 
</template>

<style scoped>
div{
  text-align: center;
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
