<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { ArrowLeft, X, Calendar, Info, Maximize2, ChevronLeft, ChevronRight, Play } from 'lucide-vue-next';
import BarraDeNavegacion from '@/components/BarraDeNavegacion.vue';

// 1. Definimos la estructura de un Trabajo para que TypeScript no se queje
interface ItemCarrusel {
  type: 'image' | 'video';
  src: string;
  label: string;
}

interface Trabajo {
  id: string | number;
  titulo: string;
  fecha: string;
  descripcion: string;
  esCarrusel?: boolean;
  portada?: string; // Solo para proyectos con carrusel
  src?: string;     // Para imágenes individuales
  items?: ItemCarrusel[]; // Solo para proyectos con carrusel
}

// 2. Aplicamos el tipo a la referencia (puede ser un Trabajo o null)
const imagenSeleccionada = ref<Trabajo | null>(null);
const modoZoom = ref(false);
const indiceCarrusel = ref(0);

// 3. Lista de trabajos con sus tipos correctos
const trabajos: Trabajo[] = [
  { 
    id: 'animacion-letras', 
    esCarrusel: true,
    portada: '/Img/IlustracionDigital/A.jpg',
    titulo: 'Animación de Letras', 
    fecha: '2024', 
    descripcion: 'Estudio de tipografía dinámica. Incluye el proceso de diseño de las letras A, P y T, y su posterior animación final.',
    items: [
      { type: 'image', src: '/Img/IlustracionDigital/A.jpg', label: 'Letra A' },
      { type: 'image', src: '/Img/IlustracionDigital/P.jpg', label: 'Letra P' },
      { type: 'image', src: '/Img/IlustracionDigital/T.jpg', label: 'Letra T' },
      { type: 'video', src: '/Img/IlustracionDigital/Animacion_Letras.mp4', label: 'Animación Final' },
    ]
  },
  { id: 1, src: '/Img/IlustracionDigital/Comision1.jpeg', titulo: 'Comisión Personaje 1', fecha: '2024', descripcion: 'Diseño de personaje detallado.' },
  { id: 2, src: '/Img/IlustracionDigital/Comision2.jpeg', titulo: 'Comisión Retrato', fecha: '2024', descripcion: 'Estudio de luz en retrato.' },
  { id: 3, src: '/Img/IlustracionDigital/Comision3.jpeg', titulo: 'Diseño de Criatura', fecha: '2024', descripcion: 'Fantasía digital.' },
  { id: 4, src: '/Img/IlustracionDigital/Comision4.jpeg', titulo: 'Escena Nocturna', fecha: '2024', descripcion: 'Ambiente neón.' },
  { id: 5, src: '/Img/IlustracionDigital/IlustracionSelva.jpg', titulo: 'Expedición Selva', fecha: '2024', descripcion: 'Naturaleza orgánica.' }
];

const abrirDetalle = (trabajo: Trabajo) => {
  imagenSeleccionada.value = trabajo;
  indiceCarrusel.value = 0;
};

const cerrarDetalle = () => {
  imagenSeleccionada.value = null;
  modoZoom.value = false;
};

const siguienteSlide = () => {
  if (imagenSeleccionada.value?.items) {
    indiceCarrusel.value = (indiceCarrusel.value + 1) % imagenSeleccionada.value.items.length;
  }
};

const anteriorSlide = () => {
  if (imagenSeleccionada.value?.items) {
    indiceCarrusel.value = (indiceCarrusel.value - 1 + imagenSeleccionada.value.items.length) % imagenSeleccionada.value.items.length;
  }
};
</script>

<template>
  <div class="min-h-screen bg-white text-black font-poppins pb-20">
    <BarraDeNavegacion />

    <header class="max-w-7xl mx-auto px-6 pt-12">
      <RouterLink to="/portafolio" class="inline-flex items-center gap-2 font-black uppercase mb-8 hover:-translate-x-1 transition-all bg-[#FBCFE8] px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <ArrowLeft :size="20" /> Volver
      </RouterLink>
      <h1 class="text-6xl md:text-8xl font-black uppercase tracking-tighter italic mb-12">
        DIGITAL<span class="text-[#FBCFE8] not-italic">_ART</span>
      </h1>
    </header>

    <main class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div 
        v-for="item in trabajos" 
        :key="item.id" 
        @click="abrirDetalle(item)" 
        class="group cursor-pointer"
      >
        <div class="border-4 border-black bg-white overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[12px_12px_0px_0px_rgba(251,207,232,1)] group-hover:-translate-y-1 transition-all duration-300">
          <img :src="item.portada || item.src" class="w-full h-80 object-cover" />
          
          <div class="p-4 border-t-4 border-black bg-white flex justify-between items-center">
            <div class="flex flex-col">
              <span class="font-black uppercase text-sm italic">{{ item.titulo }}</span>
              <span v-if="item.esCarrusel" class="text-[10px] font-bold text-[#EE6055] uppercase tracking-tighter">Proyecto Multi-formato</span>
            </div>
            <div class="bg-black text-white p-1">
               <component :is="item.esCarrusel ? Play : Maximize2" :size="16" />
            </div>
          </div>
        </div>
      </div>
    </main>

    <transition name="fade">
      <div v-if="imagenSeleccionada" class="fixed inset-0 z-[200] flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-black/80 backdrop-blur-md" @click="cerrarDetalle"></div>
        
        <div v-if="!modoZoom" class="relative bg-white border-[6px] border-black shadow-[15px_15px_0px_0px_rgba(251,207,232,1)] max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row animate-pop">
          <button @click="cerrarDetalle" class="absolute top-4 right-4 z-30 bg-[#FBCFE8] border-4 border-black p-1 hover:bg-black hover:text-white transition-colors">
            <X :size="24" />
          </button>

          <div class="md:w-3/5 relative bg-neutral-100 flex items-center justify-center">
            
            <template v-if="imagenSeleccionada.esCarrusel && imagenSeleccionada.items">
              <div class="w-full h-full flex items-center justify-center p-4">
                <template v-if="imagenSeleccionada.items[indiceCarrusel].type === 'image'">
                  <img :src="imagenSeleccionada.items[indiceCarrusel].src" class="max-w-full max-h-full object-contain" />
                </template>
                <template v-else>
                  <video :src="imagenSeleccionada.items[indiceCarrusel].src" controls class="max-w-full max-h-full border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]"></video>
                </template>
              </div>
              
              <button @click="anteriorSlide" class="absolute left-2 bg-white border-2 border-black p-1 shadow-[2px_2px_0px_rgba(0,0,0,1)] active:shadow-none transition-all hover:bg-[#FBCFE8]">
                <ChevronLeft :size="24" />
              </button>
              <button @click="siguienteSlide" class="absolute right-2 bg-white border-2 border-black p-1 shadow-[2px_2px_0px_rgba(0,0,0,1)] active:shadow-none transition-all hover:bg-[#FBCFE8]">
                <ChevronRight :size="24" />
              </button>

              <div class="absolute bottom-4 bg-black text-white px-3 py-1 text-xs font-black uppercase tracking-widest italic shadow-[4px_4px_0px_rgba(251,207,232,1)]">
                {{ imagenSeleccionada.items[indiceCarrusel].label }}
              </div>
            </template>

            <template v-else>
              <img :src="imagenSeleccionada.src" class="w-full h-full object-contain cursor-zoom-in" @click="modoZoom = true" />
            </template>
          </div>

          <div class="md:w-2/5 p-8 flex flex-col justify-center gap-6 overflow-y-auto">
            <h2 class="text-4xl font-black uppercase tracking-tighter leading-none italic border-l-8 border-[#FBCFE8] pl-4">
              {{ imagenSeleccionada.titulo }}
            </h2>
            <div class="space-y-4">
              <div class="flex items-center gap-2 font-black uppercase text-[10px] bg-black text-[#FBCFE8] px-2 py-1 w-fit">
                <Calendar :size="14" /> {{ imagenSeleccionada.fecha }}
              </div>
              <p class="font-bold text-base leading-snug">{{ imagenSeleccionada.descripcion }}</p>
            </div>
            <button @click="cerrarDetalle" class="mt-4 bg-white text-black font-black uppercase py-4 border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FBCFE8] transition-all">Cerrar</button>
          </div>
        </div>

        <div v-if="modoZoom" class="fixed inset-0 z-[210] bg-black flex items-center justify-center p-4 cursor-zoom-out" @click="modoZoom = false">
            <img :src="imagenSeleccionada?.src" class="max-w-full max-h-full object-contain shadow-[0px_0px_50px_rgba(251,207,232,0.3)]" />
        </div>
      </div>
    </transition>
  </div>
</template>