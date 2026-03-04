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
          path: '', 
          name: 'portafolio',
          component: () => import('../pages/portafolio/PortfolioIndex.vue')
        },
        {
          path: ':category', 
          name: 'categoria-detalle',
          component: () => import('../pages/portafolio/IlustracionDigital.vue'),
          props: true
        }
      ]
    },
    // --- NUEVA RUTA SOBRE MÍ ---
    {
      path: '/sobre-mi',
      name: 'sobre-mi',
      // Ajusta la ruta del archivo según dónde lo hayas guardado (ej: pages/sobre-mi/SobreMi.vue)
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