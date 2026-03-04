<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { ArrowLeft, X, Calendar, Info, Maximize2 } from 'lucide-vue-next';
import BarraDeNavegacion from '@/components/BarraDeNavegacion.vue';

const imagenSeleccionada = ref(null);
const modoZoom = ref(false);

const ilustraciones = [
  { 
    id: 1, 
    src: '/Img/IlustracionDigital/Comision1.jpeg', 
    titulo: 'Comisión Personaje 1', 
    fecha: 'Enero 2024', 
    descripcion: 'Una comisión detallada realizada para un cliente particular, enfocada en el diseño de vestuario y paleta de colores vibrantes.'
  },
  { 
    id: 2, 
    src: '/Img/IlustracionDigital/Comision2.jpeg', 
    titulo: 'Comisión Retrato', 
    fecha: 'Febrero 2024', 
    descripcion: 'Estudio de iluminación y sombreado digital aplicado a un retrato estilizado.' 
  },
  { 
    id: 3, 
    src: '/Img/IlustracionDigital/Comision3.jpeg', 
    titulo: 'Diseño de Criatura', 
    fecha: 'Marzo 2024', 
    descripcion: 'Exploración de formas orgánicas y texturas para una ilustración de fantasía.' 
  },
  { 
    id: 4, 
    src: '/Img/IlustracionDigital/Comision4.jpeg', 
    titulo: 'Escena Nocturna', 
    fecha: 'Abril 2024', 
    descripcion: 'Práctica de ambientes con luces de neón y contrastes fuertes en Procreate.' 
  },
  { 
    id: 5, 
    src: '/Img/IlustracionDigital/IlustracionSelva.jpg', 
    titulo: 'Expedición Selva', 
    fecha: 'Mayo 2024', 
    descripcion: 'Proyecto personal inspirado en la naturaleza tropical, trabajando capas de profundidad y vegetación.' 
  }
];

const abrirDetalle = (img) => {
  imagenSeleccionada.value = img;
};

const cerrarDetalle = () => {
  imagenSeleccionada.value = null;
  modoZoom.value = false;
};

const toggleZoom = () => {
  modoZoom.value = !modoZoom.value;
};
</script>

<template>
  <div class="min-h-screen bg-white text-black font-poppins pb-20">
    <BarraDeNavegacion />

    <header class="max-w-7xl mx-auto px-6 pt-12">
      <RouterLink to="/portafolio" class="inline-flex items-center gap-2 font-black uppercase mb-8 hover:-translate-x-1 transition-all bg-[#FBCFE8] px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <ArrowLeft :size="20" /> Volver al índice
      </RouterLink>
      
      <h1 class="text-6xl md:text-8xl font-black uppercase tracking-tighter italic mb-4">
        DIGITAL<span class="text-[#FBCFE8] not-italic">_ART</span>
      </h1>
      <p class="text-xl font-bold border-b-4 border-black pb-4 mb-12 uppercase italic">Mis creaciones digitales favoritas_</p>
    </header>

    <main class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div 
        v-for="img in ilustraciones" 
        :key="img.id"
        @click="abrirDetalle(img)"
        class="group cursor-pointer"
      >
        <div class="border-4 border-black bg-white overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[12px_12px_0px_0px_rgba(251,207,232,1)] group-hover:-translate-y-1 transition-all duration-300">
          <img :src="img.src" :alt="img.titulo" class="w-full h-80 object-cover" />
          <div class="p-4 border-t-4 border-black bg-white flex justify-between items-center">
            <span class="font-black uppercase text-sm italic">{{ img.titulo }}</span>
            <div class="bg-black text-white p-1">
               <Maximize2 :size="16" />
            </div>
          </div>
        </div>
      </div>
    </main>

    <transition name="fade">
      <div v-if="imagenSeleccionada" class="fixed inset-0 z-[200] flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-black/80 backdrop-blur-md" @click="cerrarDetalle"></div>
        
        <div v-if="!modoZoom" class="relative bg-white border-[6px] border-black shadow-[15px_15px_0px_0px_rgba(251,207,232,1)] max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row animate-pop">
          <button @click="cerrarDetalle" class="absolute top-4 right-4 z-20 bg-[#FBCFE8] border-4 border-black p-1 hover:bg-black hover:text-white transition-colors">
            <X :size="24" />
          </button>

          <div class="md:w-3/5 relative bg-neutral-100 cursor-zoom-in" @click="toggleZoom">
            <img :src="imagenSeleccionada.src" class="w-full h-full object-contain" />
          </div>

          <div class="md:w-2/5 p-8 flex flex-col justify-center gap-6 overflow-y-auto">
            <h2 class="text-4xl font-black uppercase tracking-tighter leading-none italic border-l-8 border-[#FBCFE8] pl-4">
              {{ imagenSeleccionada.titulo }}
            </h2>
            
            <div class="space-y-6">
              <div class="flex items-center gap-2 font-black uppercase text-xs bg-black text-[#FBCFE8] px-3 py-2 w-fit">
                <Calendar :size="16" /> {{ imagenSeleccionada.fecha }}
              </div>
              
              <div class="space-y-2 text-black">
                <h3 class="font-black uppercase flex items-center gap-2 text-lg">
                  <Info :size="20" class="text-[#FBCFE8]" /> Descripción_
                </h3>
                <p class="font-bold text-base leading-snug">
                  {{ imagenSeleccionada.descripcion }}
                </p>
              </div>
            </div>

            <button @click="cerrarDetalle" class="mt-4 bg-white text-black font-black uppercase py-4 border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FBCFE8] transition-all">
              Cerrar
            </button>
          </div>
        </div>

        <div v-else class="fixed inset-0 z-[210] bg-black flex items-center justify-center p-4 cursor-zoom-out animate-pop" @click="toggleZoom">
            <button @click.stop="toggleZoom" class="absolute top-6 right-6 text-white border-4 border-white p-2 hover:bg-white hover:text-black transition-colors">
                <X :size="32" />
            </button>
            <img :src="imagenSeleccionada.src" class="max-w-full max-h-full object-contain shadow-[0px_0px_50px_rgba(251,207,232,0.3)]" />
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.font-poppins { font-family: 'Poppins', sans-serif; }

.animate-pop {
  animation: pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes pop {
  0% { transform: scale(0.9); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.overflow-y-auto::-webkit-scrollbar {
  width: 8px;
}
.overflow-y-auto::-webkit-scrollbar-thumb {
  background: black;
  border-radius: 0;
}
</style>