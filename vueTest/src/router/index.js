import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import PostView from '../views/PostView.vue'
import PokemonView from '../views/PokemonView.vue'
import PokemonTeamView from '../views/PokemonTeamView.vue'

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
    }
  ]
})

export default router
