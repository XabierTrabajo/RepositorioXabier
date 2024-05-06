import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import TurismoView from '../views/TurismoView.vue'
import FavoritosView from '../views/FavoritosView.vue'
import turismoModificado from '../views/TurismoViewFiltroModificado.vue'

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
      component: AboutView
    },
    {
      path: '/turismo',
      name: 'turismo',
      component: TurismoView
    },
    {
      path: '/favoritos',
      name: 'favoritos',
      component: FavoritosView
    },
    {
      path: '/turismoModificado',
      name: 'turismoModificado',
      component: turismoModificado
    }
  ]
})

export default router
