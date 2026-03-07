<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { 
  Palette, 
  PenTool, 
  Box, 
  Megaphone, 
  BookOpen, 
  Ticket,
  ArrowUpRight 
} from 'lucide-vue-next';
import BarraDeNavegacion from '@/components/BarraDeNavegacion.vue';

const categorias = [
  { 
    title: 'Ilustración Tradicional', 
    path: '/portafolio/tradicional', 
    icon: Palette, 
    color: '#FBCFE8', 
    desc: 'Tinta, acuarela y técnicas manuales.' 
  },
  { 
    title: 'Ilustración Digital', 
    path: '/portafolio/digital', 
    icon: PenTool, 
    color: '#FFFFFF', 
    desc: 'Arte conceptual y pintura digital.' 
  },
  { 
    title: 'Diseño Editorial', 
    path: '/portafolio/editorial', 
    icon: BookOpen, 
    color: '#FBCFE8', 
    desc: 'Maquetación de libros y revistas.' 
  },
  { 
    title: 'Carteles', 
    path: '/portafolio/carteles', 
    icon: Ticket, 
    color: '#FFFFFF', 
    desc: 'Diseño de posters, eventos y gráfica de gran formato.' 
  },
  { 
    title: 'Packaging', 
    path: '/portafolio/packaging',
    icon: Box, 
    color: '#FBCFE8', 
    desc: 'Diseño de envases y experiencia de unboxing.' 
  },
  { 
    title: 'Campañas', 
    path: '/portafolio/campanas', 
    icon: Megaphone, 
    color: '#FFFFFF', 
    desc: 'Publicidad, branding y proyectos integrales.' 
  }
];
</script>

<template>
  <div class="min-h-screen bg-white text-black font-poppins pb-20">
    <BarraDeNavegacion />
    
    <main class="max-w-7xl mx-auto px-6 py-16">
      <h1 class="text-7xl md:text-9xl font-black uppercase italic mb-12">
        PORTA<br>FOLIO<span class="text-[#FBCFE8] not-italic">_</span>
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <RouterLink 
          v-for="cat in categorias" 
          :key="cat.title" 
          :to="cat.path" 
          class="group"
        >
          <div 
            :style="{ backgroundColor: cat.color }" 
            class="h-full border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all min-h-[300px] flex flex-col justify-between"
          >
            <div>
              <component :is="cat.icon" :size="48" class="mb-4" />
              <h2 class="text-3xl font-black uppercase italic">{{ cat.title }}</h2>
              <p class="font-bold opacity-80 mt-2">{{ cat.desc }}</p>
            </div>
            
            <div class="flex justify-end mt-4">
              <div class="border-4 border-black p-2 bg-white text-black group-hover:bg-[#FBCFE8] transition-colors">
                <ArrowUpRight :size="24" />
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
    </main>
  </div>
</template>

<style scoped>
.font-poppins { font-family: 'Poppins', sans-serif; }
</style>