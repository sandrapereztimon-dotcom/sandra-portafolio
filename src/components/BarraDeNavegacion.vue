<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { 
  NavigationMenu, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList 
} from '@/components/ui/navigation-menu';
</script>

<template>
  <header class="w-full bg-white/90 border-b-4 border-black sticky top-0 z-[100] px-8 py-4 flex justify-between items-center backdrop-blur-md">
    
    <RouterLink to="/" class="poppins-black text-2xl tracking-tighter uppercase hover:scale-105 transition-transform duration-300">
      Sandra Pérez
    </RouterLink>

    <NavigationMenu>
      <NavigationMenuList class="gap-2 md:gap-4">
        
        <NavigationMenuItem v-for="item in [
          { name: 'Inicio', path: '/' },
          { name: 'Trabajos', path: '/portafolio' },
          { name: 'Sobre mí', path: '/sobre-mi' },
          { name: 'Contacto', path: '/contacto' }
        ]" :key="item.name">
          <NavigationMenuLink as-child>
            <RouterLink 
              :to="item.path" 
              class="poppins-regular text-xs uppercase tracking-[0.2em] px-5 py-2 border-2 border-transparent transition-all duration-300 ease-in-out hover:border-black flex items-center justify-center"
              active-class="active-link"
            >
              {{ item.name }}
            </RouterLink>
          </NavigationMenuLink>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  </header>
</template>

<style scoped>
/* Estilo Poppins (asegúrate de que los pesos 400 y 900 estén cargados en tu proyecto) */
.poppins-regular { font-family: "Poppins", sans-serif; font-weight: 400; }
.poppins-black { font-family: "Poppins", sans-serif; font-weight: 900; }

/* CLASE ACTIVA: Se aplica automáticamente gracias a RouterLink */
.active-link {
  background-color: #FBCFE8 !important; /* El rosa que elegiste */
  border-color: black !important;
  box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
  transform: translate(-2px, -2px);
  font-weight: 700; /* Un poquito más de peso para resaltar */
}

/* Ajustes para limpiar estilos por defecto de Shadcn si interfieren */
:deep(.navigationMenuTriggerStyle) {
  background: transparent !important;
}
</style>