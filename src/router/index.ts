import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/home/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/portafolio',
      component: () => import('../pages/portafolio/PortfolioLayout.vue'),
      children: [
        {
          path: '', // Página de las opciones (Logos, Juegos...)
          name: 'portafolio',
          component: () => import('../pages/portafolio/PortfolioIndex.vue')
        },
        {
          path: ':category', // Página donde se ven los trabajos de esa categoría
          name: 'categoria-detalle',
          component: () => import('../pages/portafolio/CategoriaProyectos.vue'),
          props: true
        }
      ]
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../pages/contacto/Contacto.vue')
    }
  ]
})

export default router