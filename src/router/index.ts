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
      // Mantenemos el Layout que envuelve las páginas de portafolio
      component: () => import('../pages/portafolio/PortfolioLayout.vue'),
      children: [
        {
          path: '', 
          name: 'portafolio',
          component: () => import('../pages/portafolio/PortfolioIndex.vue')
        },
        {
          // URL: /portafolio/digital
          path: 'digital', 
          name: 'ilustracion-digital',
          component: () => import('../pages/portafolio/IlustracionDigital.vue')
        },
        {
          // URL: /portafolio/tradicional
          path: 'tradicional', 
          name: 'ilustracion-tradicional',
          component: () => import('../pages/portafolio/IlustracionTradicional.vue')
        }
      ]
    },
    {
      path: '/sobre-mi',
      name: 'sobre-mi',
      component: () => import('../pages/contacto/SobreMi.vue') 
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../pages/contacto/Contacto.vue')
    }
  ]
})

export default router