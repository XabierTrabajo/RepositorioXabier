import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import PostView from '../views/PostView.vue'
import PokemonView from '../views/PokemonView.vue'
import PokemonTeamView from '../views/PokemonTeamView.vue'
import TestPiniaView from '../views/TestPiniaView.vue'
import EjercicioPiniaN3View from '../views/EjercicioPiniaN3View.vue'
import Ejercicio1HolaMundoView from '../views/Ejercicio1HolaMundoView.vue'
import Ejercicio2TareasView from '../views/Ejercicio2TareasView.vue'
import ejercicio3PokemonsView from '../views/ejercicio3PokemonsView.vue'
import Ejercicio4aView from '../views/Ejercicio4aView.vue'
import Ejercicio4bView from '../views/Ejercicio4bView.vue'
import Ejercicio4cView from '../views/Ejercicio4cView.vue'
import Ejercicio5GatosView from '../views/Ejercicio5GatosView.vue'
import EjercicioNavidad1ListadoProductosView from '../views/EjercicioNavidad1ListadoProductosView.vue'
import EjercicioNavidad2PeliculasView from '../views/EjercicioNavidad2PeliculasView.vue'
import EjercicioNavidad3InputPiniaView from '../views/EjercicioNavidad3InputPiniaView.vue'
import EjercicioPractica1BotonView from '../views/EjercicioPractica1BotonView.vue'
import EjercicioPractica2MouseAreaView from '../views/EjercicioPractica2MouseAreaView.vue'
import EjercicioPerroGatoView from '../views/EjercicioPerroGatoView.vue'
import EjercicioListaCompraView from '../views/EjercicioListaCompraView.vue'
import EjercicioTraductorView from '../views/EjercicioTraductorView.vue'
import EjercicioConstructoresJugadoresJSView from '../views/EjercicioConstructoresJugadoresJSView.vue'
import EjercicioGimnasioView from '../views/EjercicioGimnasioView.vue'
import EjercicioConstructoresEdificioJSView from '../views/EjercicioConstructoresEdificioJSView.vue'
import EjercicioScrabbleView from '../views/EjercicioScrabbleView.vue'
import EjercicioPizzeriaView from '../views/EjercicioPizzeriaView.vue'
import EjercicioPlaylistView from '../views/EjercicioPlaylistView.vue'
import CalculadoraView from '../views/CalculadoraView.vue'
import EjercicioHighscoresAlumnosView from '../views/EjercicioHighscoresAlumnosView.vue'
import EjercicioFruteriaView from '../views/EjercicioFruteriaView.vue'
import ConversorLongitudMoneyTiempoView from '../views/ConversorLongitudMoneyTiempoView.vue'
import EjercicioHamburgueseriaView from '../views/EjercicioHamburgueseriaView.vue'
import CarruselView from '../views/CarruselView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/blog/:id',
      name: 'post',
      component: PostView
    },
    {
      path: '/pokemon',
      name: 'pokemon',
      component: PokemonView
    },
    {
      path: '/pokemonTeam',
      name: 'pokemonTeam',
      component: PokemonTeamView
    },
    {
      path: '/test',
      name: 'test',
      component: TestPiniaView
    },
    {
      path: '/pinia3',
      name: 'pinia3',
      component: EjercicioPiniaN3View
    },
    {
      path: '/ejer1HolaMundo',
      name: 'ejer1HolaMundo',
      component: Ejercicio1HolaMundoView
    },
    {
      path: '/ejercicio2Tareas',
      name: 'ejercicio2Tareas',
      component: Ejercicio2TareasView
    },
    {
      path: '/ejercicio3Pokemons',
      name: 'ejercicio3Pokemons',
      component: ejercicio3PokemonsView
    },
    {
      path: '/ejercicio4a',
      name: 'ejercicio4a',
      component: Ejercicio4aView
    },
    {
      path: '/ejercicio4b',
      name: 'ejercicio4b',
      component: Ejercicio4bView
    },
    {
      path: '/ejercicio4c',
      name: 'ejercicio4c',
      component: Ejercicio4cView
    },
    {
      path: '/ejercicio5gatos',
      name: 'ejercicio5gatos',
      component: Ejercicio5GatosView
    },
    {
      path: '/ejercicioNavidad1Listado',
      name: 'ejercicioNavidad1Listado',
      component: EjercicioNavidad1ListadoProductosView
    },
    {
      path: '/ejercicioNavidad2Peliculas',
      name: 'ejercicioNavidad2Peliculas',
      component: EjercicioNavidad2PeliculasView
    },
    {
      path: '/ejercicioNavidad3InputPinia',
      name: 'ejercicioNavidad3InputPinia',
      component: EjercicioNavidad3InputPiniaView
    },
    {
      path: '/ejercicioPractica1Boton',
      name: 'ejercicioPractica1Boton',
      component: EjercicioPractica1BotonView
    },
    {
      path: '/ejercicioPractica2MouseArea',
      name: 'ejercicioPractica2MouseArea',
      component: EjercicioPractica2MouseAreaView
    },
    {
      path: '/ejercicioPerroGato',
      name: 'ejercicioPerroGato',
      component: EjercicioPerroGatoView
    },
    {
      path: '/ejercicioListaCompra',
      name: 'ejercicioListaCompra',
      component: EjercicioListaCompraView
    },
    {
      path: '/ejercicioTraductor',
      name: 'ejercicioTraductor',
      component: EjercicioTraductorView
    },
    {
      path: '/ejercicioConstructoresJugadores',
      name: 'ejercicioConstructoresJugadores',
      component: EjercicioConstructoresJugadoresJSView
    },
    {
      path: '/ejercicioGimnasio',
      name: 'ejercicioGimnasio',
      component: EjercicioGimnasioView
    },
    {
      path: '/ejercicioConstructoresEdificio',
      name: 'ejercicioConstructoresEdificio',
      component: EjercicioConstructoresEdificioJSView
    },
    {
      path: '/ejercicioScrabble',
      name: 'ejercicioScrabble',
      component: EjercicioScrabbleView
    },
    {
      path: '/ejercicioPizzeria',
      name: 'ejercicioPizzeria',
      component: EjercicioPizzeriaView
    },
    {
      path: '/ejercicioPlaylist',
      name: 'ejercicioPlaylist',
      component: EjercicioPlaylistView
    },
    {
      path: '/ejercicioCalculadora',
      name: 'ejercicioCalculadora',
      component: CalculadoraView
    },
    {
      path: '/ejercicioHighscoresAlumnos',
      name: 'ejercicioHighscoresAlumnos',
      component: EjercicioHighscoresAlumnosView
    },
    {
      path: '/ejercicioFruteria',
      name: 'ejercicioFruteria',
      component: EjercicioFruteriaView
    },
    {
      path: '/ejercicioConversor',
      name: 'ejercicioConversor',
      component: ConversorLongitudMoneyTiempoView
    },
    {
      path: '/ejercicioBurger',
      name: 'ejercicioBurger',
      component: EjercicioHamburgueseriaView
    },
    {
      path: '/CarruselView',
      name: 'CarruselView',
      component: CarruselView
    }
  ]
})

export default router
