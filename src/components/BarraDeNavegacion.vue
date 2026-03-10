<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';
import { Menu, X } from 'lucide-vue-next';
import { 
  NavigationMenu, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList 
} from '@/components/ui/navigation-menu';

const menuAbierto = ref(false);

const enlaces = [
  { name: 'Inicio', path: '/' },
  { name: 'Trabajos', path: '/portafolio' },
  { name: 'Sobre mí­', path: '/sobre-mi' },
  { name: 'Contacto', path: '/contacto' }
];

const cerrarMenu = () => {
  menuAbierto.value = false;
};

// FunciÃ³n para cerrar el menÃº si la pantalla se hace grande
const handleResize = () => {
  if (window.innerWidth >= 768) { // 768px es el breakpoint 'md' de Tailwind
    cerrarMenu();
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <header class="w-full bg-white/90 border-b-4 border-black sticky top-0 z-100 px-8 py-4 flex justify-between items-center backdrop-blur-md">
    
    <RouterLink to="/" class="poppins-black text-2xl tracking-tighter uppercase text-black hover:scale-105 transition-transform duration-300 relative z-110">
      Sandra Pérez
    </RouterLink>

    <button 
      @click="menuAbierto = !menuAbierto" 
      class="md:hidden p-2 border-4 border-black bg-[#FBCFE8] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all z-110"
    >
      <Menu v-if="!menuAbierto" :size="24" />
      <X v-else :size="24" />
    </button>

    <NavigationMenu class="hidden md:block">
      <NavigationMenuList class="gap-4">
        <NavigationMenuItem v-for="item in enlaces" :key="item.name">
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

    <transition name="slide-right">
      <div 
        v-if="menuAbierto" 
        class="fixed top-20 right-4 w-64 bg-white border-4 border-black p-8 flex flex-col gap-6 z-105 shadow-[10px_10px_0px_0px_rgba(251,207,232,1)] md:hidden"
      >
        <RouterLink 
          v-for="item in enlaces" 
          :key="item.name"
          :to="item.path"
          @click="cerrarMenu"
          class="poppins-bold text-sm uppercase tracking-widest px-4 py-3 border-2 border-transparent transition-all duration-300 flex justify-center text-center"
          active-class="active-link"
        >
          {{ item.name }}
        </RouterLink>
      </div>
    </transition>

    <div 
      v-if="menuAbierto" 
      @click="cerrarMenu" 
      class="fixed inset-0 bg-black/10 backdrop-blur-sm z-100 md:hidden"
    ></div>
  </header>
</template>

<style scoped>
.poppins-regular { font-family: "Poppins", sans-serif; font-weight: 400; }
.poppins-bold { font-family: "Poppins", sans-serif; font-weight: 700; }
.poppins-black { font-family: "Poppins", sans-serif; font-weight: 900; }

/* CLASE ACTIVA (Fondo rosa + Sombra negra) */
.active-link {
  background-color: #FBCFE8 !important;
  border-color: black !important;
  box-shadow: 4px 4px 0px 0px rgba(0,0,0,1) !important;
  transform: translate(-2px, -2px);
  font-weight: 900;
  border-style: solid;
  border-width: 2px;
}

/* AnimaciÃ³n de entrada/salida tipo "Pop" desde la derecha */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(30px) scale(0.9);
  opacity: 0;
}

:deep(.navigationMenuTriggerStyle) {
  background: transparent !important;
}
</style>
