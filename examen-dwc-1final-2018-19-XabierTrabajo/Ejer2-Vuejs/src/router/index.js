import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ComprasView from '../views/ComprasView.vue'
import LoginView from '../views/LoginView.vue'
import CochesView from '../views/CochesView.vue'
import CalculadoraView from '../views/CalculadoraView.vue'


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
      path: '/compras',
      name: 'compras',
      component: ComprasView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/coches',
      name: 'coches',
      component: CochesView
    },
    {
      path: '/calculadora',
      name: 'calculadora',
      component: CalculadoraView
    },

  ]
})

export default router
