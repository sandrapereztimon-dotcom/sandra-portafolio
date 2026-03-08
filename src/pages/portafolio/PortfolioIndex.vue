<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { 
  Palette, 
  PenTool, 
  Box, 
  Megaphone, 
  BookOpen, 
  Ticket,
  ArrowUpRight,
  Star, Circle, Triangle, Square
} from 'lucide-vue-next';
import BarraDeNavegacion from '@/components/BarraDeNavegacion.vue';

const categorias = [
  { 
    title: 'Ilustración Tradicional', 
    path: '/portafolio/tradicional', 
    icon: Palette, 
    color: '#FBCFE8', 
    desc: 'Exploración de técnicas manuales, tinta y acuarela.' 
  },
  { 
    title: 'Ilustración Digital', 
    path: '/portafolio/digital', 
    icon: PenTool, 
    color: '#FFFFFF', 
    desc: 'Arte conceptual, pintura digital y dibujo vectorial.' 
  },
  { 
    title: 'Diseño Editorial', 
    path: '/portafolio/editorial', 
    icon: BookOpen, 
    color: '#FBCFE8', 
    desc: 'Maquetación, tipografía y composición de publicaciones.' 
  },
  { 
    title: 'Carteles', 
    path: '/portafolio/carteles', 
    icon: Ticket, 
    color: '#FFFFFF', 
    desc: 'Comunicación visual, eventos y gráfica de gran formato.' 
  },
  { 
    title: 'Packaging', 
    path: '/portafolio/packaging',
    icon: Box, 
    color: '#FBCFE8', 
    desc: 'Diseño de envases y creación de experiencias físicas.' 
  },
  { 
    title: 'Campañas', 
    path: '/portafolio/campanas', 
    icon: Megaphone, 
    color: '#FFFFFF', 
    desc: 'Proyectos integrales de branding y publicidad.' 
  }
];
</script>

<template>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;800&family=Poppins:wght@800&display=swap" rel="stylesheet">

  <div class="min-h-screen bg-white text-black overflow-x-hidden relative">
    <BarraDeNavegacion />
    
    <div class="fixed inset-0 pointer-events-none z-0">
      <Star :size="400" class="absolute -top-20 -right-20 text-[#FBCFE8]/30 animate-spin-very-slow fill-current stroke-0" />
      <Circle :size="250" class="absolute top-1/4 -left-20 text-black/5 animate-levitate fill-current stroke-0" />
      <Triangle :size="300" class="absolute bottom-10 left-10 text-[#FBCFE8]/20 animate-spin-slow fill-current stroke-0" />
      <Square :size="150" class="absolute top-1/2 right-[5%] text-black/5 animate-levitate-delayed fill-current stroke-0" />
    </div>

    <main class="max-w-7xl mx-auto px-6 py-12 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <RouterLink 
          v-for="cat in categorias" 
          :key="cat.title" 
          :to="cat.path" 
          class="group"
        >
          <div 
            :style="{ backgroundColor: cat.color }" 
            class="h-full border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all min-h-75 flex flex-col justify-between"
          >
            <div>
              <component :is="cat.icon" :size="40" class="mb-6 stroke-[2.5px]" />
              <h2 class="text-3xl poppins-bold uppercase leading-[0.9]">{{ cat.title }}</h2>
              <p class="inter-regular text-lg mt-4 leading-snug opacity-80">{{ cat.desc }}</p>
            </div>
            
            <div class="flex justify-end mt-4">
              <div class="border-4 border-black p-2 bg-white text-black group-hover:bg-black group-hover:text-white transition-colors">
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
.poppins-bold { font-family: "Poppins", sans-serif; font-weight: 800; }
.inter-regular { font-family: "Inter", sans-serif; font-weight: 400; }

/* Animaciones para mantener el dinamismo de la web */
@keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes spin-very-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes levitate {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-40px); }
}
@keyframes levitate-delayed {
  0%, 100% { transform: translateY(0) rotate(45deg); }
  50% { transform: translateY(30px) rotate(55deg); }
}

.animate-spin-slow { animation: spin-slow 15s linear infinite; }
.animate-spin-very-slow { animation: spin-very-slow 35s linear infinite; }
.animate-levitate { animation: levitate 8s ease-in-out infinite; }
.animate-levitate-delayed { animation: levitate-delayed 10s ease-in-out infinite; }
</style>