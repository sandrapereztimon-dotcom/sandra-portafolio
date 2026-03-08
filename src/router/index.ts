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
    // --- NUEVAS RUTAS DE CONTACTO (Añadidas aquí) ---
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../pages/contacto/Contacto.vue')
    },
    {
      path: '/sobre-mi',
      name: 'sobre-mi',
      component: () => import('../pages/contacto/SobreMi.vue')
    },
    // --- PORTAFOLIO ---
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
          path: 'digital', 
          name: 'ilustracion-digital',
          component: () => import('../pages/portafolio/IlustracionDigital.vue')
        },
        {
          path: 'tradicional', 
          name: 'ilustracion-tradicional',
          component: () => import('../pages/portafolio/IlustracionTradicional.vue')
        },
        {
          path: 'editorial', 
          name: 'diseno-editorial',
          component: () => import('../pages/portafolio/DisenoEditorial.vue')
        },
        {
          path: 'campanas',
          name: 'campanas-index',
          component: () => import('../pages/portafolio/CampanasIndex.vue')
        },
        {
          path: 'campanas/:id',
          name: 'campana-detalle',
          component: () => import('../pages/portafolio/CampanaDetalle.vue')
        },
        {
           path: 'packaging', // Quitamos la / inicial porque es un hijo
           name: 'Packaging',
           component: () => import('../pages/portafolio/Packaging.vue')
        },
        {
           path: 'packaging/:id',
           name: 'PackagingDetalle',
           component: () => import('../pages/portafolio/PackagingDetalle.vue')
        },
        {
          path: 'carteles',
          name: 'Carteles',
          component: () => import('../pages/portafolio/Carteles.vue')
        }
      ]
    }
  ]
})

export default router