<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';
import BarraDeNavegacion from '@/components/BarraDeNavegacion.vue';

const proyectos = [
  { 
    id: 'kaoka', 
    titulo: 'Kaoka', 
    subtitulo: 'Marca de chocolate',
    desc: 'Identidad visual y packaging para chocolates premium.' 
  },
  { 
    id: 'mentecatos', 
    titulo: 'Mentecatos', 
    subtitulo: 'Juego de mesa',
    desc: 'Diseño de packaging creativo y branding.' 
  }
];
</script>

<template>
  <div class="min-h-screen bg-white font-poppins pb-20">
    <BarraDeNavegacion />
    
    <header class="max-w-7xl mx-auto px-6 pt-12">
      <RouterLink to="/portafolio" class="inline-flex items-center gap-2 font-black uppercase mb-8 bg-white px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FBCFE8] transition-all">
        <ArrowLeft :size="20" /> Volver al Portafolio
      </RouterLink>
      <h1 class="text-6xl md:text-9xl font-black uppercase tracking-tighter italic mb-12">
        PACK<span class="text-[#FBCFE8] not-italic">AGING_</span>
      </h1>
    </header>

    <main class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      <RouterLink v-for="p in proyectos" :key="p.id" :to="`/portafolio/packaging/${p.id}`" class="group">
        <div class="border-4 border-black p-10 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[15px_15px_0px_0px_rgba(251,207,232,1)] group-hover:-translate-y-2 transition-all duration-300 bg-white min-h-[300px] flex flex-col justify-between">
          
          <div>
            <h2 class="text-6xl md:text-7xl font-black uppercase italic leading-none mb-2">
              {{ p.titulo }}
            </h2>
            <div class="inline-block bg-black text-white px-4 py-1 text-xl font-black uppercase italic mb-6">
              {{ p.subtitulo }}
            </div>
            <p class="font-bold opacity-70 text-xl max-w-sm">
              {{ p.desc }}
            </p>
          </div>

          <div class="flex justify-end">
            <div class="bg-black text-white p-4 border-4 border-black group-hover:bg-[#FBCFE8] group-hover:text-black transition-colors">
              <ArrowRight :size="40" />
            </div>
          </div>
          
        </div>
      </RouterLink>
    </main>
  </div>
</template>