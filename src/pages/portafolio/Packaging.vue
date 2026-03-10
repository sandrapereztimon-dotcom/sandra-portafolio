<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ArrowRight, Star, Circle } from 'lucide-vue-next';
import BarraDeNavegacion from '@/components/BarraDeNavegacion.vue';

// --- 1. INTERFAZ PARA EL PROYECTO ---
interface ProyectoIndex {
  id: string;
  titulo: string;
  desc: string;
  tecnica: string; // Añadimos esto porque lo usas en el template
}

// --- 2. DATOS TIPADOS ---
const proyectos: ProyectoIndex[] = [
  { 
    id: 'kaoka', 
    titulo: 'Kaoka', 
    tecnica: 'Packaging',
    desc: 'Creación de la identidad visual de una marca de chocolates.' 
  },
  { 
    id: 'mentecatos', 
    titulo: 'Mentecatos', 
    tecnica: 'Packaging',
    desc: 'Creación de la identidad visual de un juego de mesa.' 
  }
];
</script>

<template>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&family=Poppins:wght@800&display=swap" rel="stylesheet">

  <div class="min-h-screen bg-white text-black font-poppins selection:bg-[#FBCFE8] relative overflow-x-hidden pb-20">
    <BarraDeNavegacion />

    <div class="fixed inset-0 pointer-events-none z-0">
      <div class="absolute inset-0 bg-[#FBCFE8]/10"></div>
      <Star :size="400" class="absolute -top-20 -right-20 text-[#FBCFE8]/30 animate-spin-very-slow fill-current stroke-0" />
      <Circle :size="150" class="absolute bottom-10 left-10 text-black/5 fill-current stroke-0" />
    </div>

    <main class="max-w-7xl mx-auto px-6 pt-24 grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
      <RouterLink v-for="p in proyectos" :key="p.id" :to="`/portafolio/packaging/${p.id}`" class="group">
        <div class="border-4 border-black p-10 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[15px_15px_0px_0px_rgba(251,207,232,1)] group-hover:-translate-y-2 transition-all duration-500 bg-[#FBCFE8] min-h-87.5 flex flex-col justify-between overflow-hidden relative">
          
          <div>
            <h2 class="text-6xl md:text-7xl font-black uppercase leading-none mb-4 tracking-tighter">
              {{ p.titulo }}
            </h2>
            
            <div class="inter-bold inline-block bg-black text-white px-4 py-1 text-sm uppercase tracking-widest mb-6">
              {{ p.tecnica }}
            </div>
            
            <p class="inter-medium text-black/90 text-xl max-w-sm leading-snug">
              {{ p.desc }}
            </p>
          </div>

          <div class="flex justify-end mt-4">
            <div class="bg-black text-white p-4 border-4 border-black group-hover:bg-white group-hover:text-black transition-colors">
              <ArrowRight :size="32" />
            </div>
          </div>
          
        </div>
      </RouterLink>
    </main>
  </div>
</template>

<style scoped>
.inter-medium { font-family: 'Inter', sans-serif; font-weight: 500; }
.inter-bold { font-family: 'Inter', sans-serif; font-weight: 700; }

h2 {
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  font-style: normal;
}

@keyframes spin-very-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-spin-very-slow {
  animation: spin-very-slow 40s linear infinite;
}
</style>