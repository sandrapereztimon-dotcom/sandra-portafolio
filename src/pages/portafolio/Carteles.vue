<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { ArrowLeft, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-vue-next';
import BarraDeNavegacion from '@/components/BarraDeNavegacion.vue';

// Control de índice para el carrusel de Envidia
const indiceEnvidia = ref(0);

const moverFoto = (direccion: number, total: number) => {
  indiceEnvidia.value = (indiceEnvidia.value + direccion + total) % total;
};

const serieEnvidia = [
  '/Img/Carteles/CartelEnvidiaFotp.jpg',
  '/Img/Carteles/CartelEnvidiaGeo.jpg',
  '/Img/Carteles/CartelEnvidiaText.jpg'
];

const otrosCarteles = [
  { 
    titulo: 'Teatro Flumen', 
    src: '/Img/Carteles/CartelTeatroFlumen.png', 
    tags: ['Evento', 'Teatro'] 
  },
  { 
    titulo: 'Fabricación Digital', 
    src: '/Img/Carteles/Creación Y Fabricación Digital.jpg', 
    tags: ['Flyer', 'Tech'] 
  }
];
</script>

<template>
  <div class="min-h-screen bg-white font-poppins pb-32 text-black">
    <BarraDeNavegacion />
    
    <main class="max-w-7xl mx-auto px-6 pt-12">
      <RouterLink to="/portafolio" class="inline-flex items-center gap-2 font-black uppercase mb-12 bg-white px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FBCFE8] transition-all">
        <ArrowLeft :size="20" /> Volver al Portafolio
      </RouterLink>

      <header class="mb-16">
        <h1 class="text-7xl md:text-9xl font-black uppercase italic leading-none">
          CART<span class="text-[#FBCFE8] not-italic">ELES_</span>
        </h1>
        <p class="text-xl font-bold mt-4 opacity-70 italic max-w-2xl">
          Selección de piezas gráficas y comunicación visual. Serie "Envidia" y proyectos por encargo.
        </p>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        <div class="group border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(251,207,232,1)] transition-all flex flex-col">
          <div class="relative overflow-hidden border-b-4 border-black bg-neutral-100 aspect-[3/4] flex items-center justify-center">
            <img 
              :src="serieEnvidia[indiceEnvidia]" 
              class="w-full h-full object-cover transition-transform duration-700" 
            />
            
            <div class="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button @click.prevent="moverFoto(-1, serieEnvidia.length)" class="bg-white border-2 border-black p-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FBCFE8]">
                <ChevronLeft :size="20" />
              </button>
              <button @click.prevent="moverFoto(1, serieEnvidia.length)" class="bg-white border-2 border-black p-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FBCFE8]">
                <ChevronRight :size="20" />
              </button>
            </div>

            <div class="absolute top-2 right-2 bg-black text-white text-[10px] px-2 py-1 font-black">
              {{ indiceEnvidia + 1 }} / {{ serieEnvidia.length }}
            </div>
          </div>

          <div class="p-6 bg-white">
            <h2 class="text-2xl font-black uppercase italic leading-tight mb-3">Serie Envidia</h2>
            <div class="flex gap-2">
              <span class="text-[10px] font-black uppercase tracking-widest border-2 border-black px-2 py-0.5 bg-[#FBCFE8]">Tríptico</span>
              <span class="text-[10px] font-black uppercase tracking-widest border-2 border-black px-2 py-0.5 bg-white">Experimental</span>
            </div>
          </div>
        </div>

        <div v-for="item in otrosCarteles" :key="item.src" 
             class="group border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(251,207,232,1)] transition-all flex flex-col">
          
          <div class="relative overflow-hidden border-b-4 border-black bg-neutral-100 aspect-[3/4]">
            <img :src="item.src" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          </div>

          <div class="p-6 bg-white">
            <h2 class="text-2xl font-black uppercase italic leading-tight mb-3">
              {{ item.titulo }}
            </h2>
            <div class="flex gap-2">
              <span v-for="tag in item.tags" :key="tag" 
                    class="text-[10px] font-black uppercase tracking-widest border-2 border-black px-2 py-0.5 bg-[#FBCFE8]">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>

      </div>
    </main>
  </div>
</template>

<style scoped>
/* Estilo para que las columnas de diferentes alturas encajen bien */
.columns-1 { column-count: 1; }
@media (min-width: 768px) { .columns-2 { column-count: 2; } }
@media (min-width: 1024px) { .columns-3 { column-count: 3; } }
</style>