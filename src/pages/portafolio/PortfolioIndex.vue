<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { 
  Palette, 
  PenTool, 
  Film, 
  Box, 
  Megaphone, 
  BookOpen,
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
    title: 'Animación', 
    path: '/portafolio/animacion', 
    icon: Film, 
    color: '#000000', 
    textColor: 'text-white',
    desc: 'Motion graphics y 2D storyboards.' 
  },
  { 
    title: 'Packaging', 
    path: '/portafolio/packaging', 
    icon: Box, 
    color: '#FBCFE8', 
    desc: 'Diseño de producto y empaques únicos.' 
  },
  { 
    title: 'Campañas', 
    path: '/portafolio/campanas', 
    icon: Megaphone, 
    color: '#FFFFFF', 
    desc: 'Publicidad y dirección de arte.' 
  },
  { 
    title: 'Diseño Editorial', 
    path: '/portafolio/editorial', 
    icon: BookOpen, 
    color: '#FBCFE8', 
    desc: 'Maquetación de libros y revistas.' 
  }
];
</script>

<template>
  <div class="min-h-screen bg-white text-black font-poppins selection:bg-[#FBCFE8]">
    <BarraDeNavegacion />

    <main class="max-w-7xl mx-auto px-6 py-16 md:py-24">
      
      <div class="mb-20 space-y-4">
        <h1 class="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none italic">
          PORTA<br>FOLIO<span class="text-[#FBCFE8] not-italic">_</span>
        </h1>
        <p class="text-xl md:text-2xl font-bold max-w-2xl border-l-8 border-black pl-6">
          Explora mis trabajos por categorías. Cada proyecto es una mezcla de técnica, pasión y píxeles.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <RouterLink 
          v-for="cat in categorias" 
          :key="cat.title" 
          :to="cat.path"
          class="group relative"
        >
          <div 
            :style="{ backgroundColor: cat.color }"
            class="h-full border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between min-h-[300px]"
            :class="cat.textColor || 'text-black'"
          >
            <div>
              <component :is="cat.icon" :size="48" class="mb-6" />
              <h2 class="text-3xl font-black uppercase leading-none mb-4">
                {{ cat.title }}
              </h2>
              <p class="font-bold opacity-80">
                {{ cat.desc }}
              </p>
            </div>

            <div class="flex justify-end">
              <div 
                class="border-4 p-2 bg-white text-black group-hover:bg-[#FBCFE8] transition-colors"
                :class="cat.color === '#000000' ? 'border-white' : 'border-black'"
              >
                <ArrowUpRight :size="32" />
              </div>
            </div>
          </div>
        </RouterLink>
      </div>

    </main>

    <div class="bg-black py-8 overflow-hidden">
      <div class="flex gap-12 whitespace-nowrap animate-marquee">
        <span v-for="n in 10" :key="n" class="text-white font-black uppercase text-2xl italic">
          Selecciona una categoría <span class="text-[#FBCFE8]">✦</span>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Fuente Poppins importada globalmente o aquí */
.font-poppins { font-family: 'Poppins', sans-serif; }

/* Animación de la marquesina */
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  animation: marquee 20s linear infinite;
}

/* Ajuste para pantallas pequeñas */
h1 {
  word-break: break-all;
}

/* Transición suave para los hover */
.group:hover .shadow-custom {
  transform: translate(-4px, -4px);
}
</style>