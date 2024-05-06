<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
        <RouterLink to="/pokemon">Pokédex</RouterLink>
        <RouterLink to="/pokemonTeam">PokéTeam</RouterLink>
        <RouterLink to="/test">Test Pinia</RouterLink>
        <RouterLink to="/pinia3">Ejercicio Pinia 3</RouterLink>
        <RouterLink to="/ejer1HolaMundo">Ejercicio 1 Hola Mundo</RouterLink>
        <RouterLink to="/ejercicio2Tareas">Ejercicio 2 Tareas</RouterLink>
        <RouterLink to="/ejercicio3Pokemons">Ejercicio 3 Pokemons</RouterLink>
        <RouterLink to="/ejercicio4a">Ejercicio 4 Inicio</RouterLink>
        <RouterLink to="/ejercicio4b">Ejercicio 4 Requisitos</RouterLink>
        <RouterLink to="/ejercicio4c">Ejercicio 4 Contacto</RouterLink>
        <RouterLink to="/ejercicio5gatos">Ejercicio 5 Gatos</RouterLink>
        <RouterLink to="/ejercicioNavidad1Listado">Ejercicio Navidad 1 Listado</RouterLink>
        <RouterLink to="/ejercicioNavidad2Peliculas">Ejercicio Navidad 2 Peliculas</RouterLink>
        <RouterLink to="/ejercicioNavidad3InputPinia">Ejercicio Navidad 3 Input Pinia</RouterLink>
        <RouterLink to="/ejercicioPractica1Boton">Ejercicio Practica 1 Boton</RouterLink>
        <RouterLink to="/ejercicioPractica2MouseArea">Ejercicio Practica 2 Mouse Area</RouterLink>
        <RouterLink to="/ejercicioPerroGato">Ejercicio Perro Gato</RouterLink>
        <RouterLink to="/ejercicioListaCompra">Ejercicio Lista Compra</RouterLink>
        <RouterLink to="/ejercicioTraductor">Ejercicio Traductor</RouterLink>
        <RouterLink to="/ejercicioConstructoresJugadores">Ejercicio Constructores Jugadores</RouterLink>
        <RouterLink to="/ejercicioGimnasio">Ejercicio Gimnasio</RouterLink>
        <RouterLink to="/ejercicioConstructoresEdificio">Ejercicio Constructores Edificio</RouterLink>
        <RouterLink to="/ejercicioScrabble">Ejercicio Scrabble</RouterLink>
        <RouterLink to="/ejercicioPizzeria">Ejercicio Pizzeria</RouterLink>
        <RouterLink to="/ejercicioPlaylist">Ejercicio Playlist</RouterLink>
        <RouterLink to="/ejercicioCalculadora">Ejercicio Calculadora</RouterLink>
        <RouterLink to="/ejercicioHighscoresAlumnos">Ejercicio Highscores Alumnos</RouterLink>
        <RouterLink to="/ejercicioFruteria">Ejercicio Fruteria</RouterLink>
        <RouterLink to="/ejercicioConversor">Ejercicio Conversor de Longitud, Money, Tiempo</RouterLink>
        <RouterLink to="/ejercicioBurger">Ejercicio Hamburgueseria</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
