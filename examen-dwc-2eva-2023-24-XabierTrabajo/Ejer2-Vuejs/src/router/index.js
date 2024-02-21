import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import BasurtoView from '../views/BasurtoView.vue'
import FavoritosView from '../views/FavoritosView.vue'
import PabellonView from '../views/PabellonView.vue'

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
      path: '/basurto',
      name: 'basurto',
      component: BasurtoView
    },
    {
      path: '/pabellon',
      name: 'pabellon',
      component: PabellonView
    },
    {
      path: '/favoritos',
      name: 'favoritos',
      component: FavoritosView
    }
  ]
})

export default router
