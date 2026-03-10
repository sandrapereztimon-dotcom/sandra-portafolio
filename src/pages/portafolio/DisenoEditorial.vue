<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { X, Maximize2, ChevronLeft, ChevronRight, Play, Star, Circle } from 'lucide-vue-next';
import BarraDeNavegacion from '@/components/BarraDeNavegacion.vue';


interface ItemCarrusel { 
  type: 'image'; 
  src: string; 
  label: string; 
}

interface Trabajo {
  id: string | number;
  titulo: string;
  tecnica: string;
  esCarrusel?: boolean;
  portada?: string; 
  src?: string;      
  items?: ItemCarrusel[]; 
}


const imagenSeleccionada = ref<Trabajo | null>(null);
const modoZoom = ref(false);
const indicesGrid = ref<Record<string | number, number>>({});
const indiceDetalle = ref(0);
let timerGlobal: number | null = null;


const trabajos: Trabajo[] = [
  { 
    id: 'articulo-cmyk', 
    esCarrusel: true,
    portada: '/Img/DisenoEditorial/Articulo_CMYK_page-0001.jpg',
    titulo: 'Artículo CMYK', 
    tecnica: 'InDesign',
    items: [
      { type: 'image', src: '/Img/DisenoEditorial/Articulo_CMYK_page-0001.jpg', label: 'Portada' },
      { type: 'image', src: '/Img/DisenoEditorial/Articulo_CMYK_page-0002.jpg', label: 'Páginas 2-3' },
      { type: 'image', src: '/Img/DisenoEditorial/Articulo_CMYK_page-0003.jpg', label: 'Páginas 4-5' },
      { type: 'image', src: '/Img/DisenoEditorial/Articulo_CMYK_page-0004.jpg', label: 'Páginas 6-7' },
      { type: 'image', src: '/Img/DisenoEditorial/Articulo_CMYK_page-0005.jpg', label: 'Contraportada' },
    ]
  }
];


trabajos.forEach(t => { 
  if(t.esCarrusel) indicesGrid.value[t.id] = 0; 
});

onMounted(() => {
  timerGlobal = window.setInterval(() => {
    trabajos.forEach(t => {
      if (t.esCarrusel && t.items) {
        const currentIdx = indicesGrid.value[t.id] ?? 0;
        indicesGrid.value[t.id] = (currentIdx + 1) % t.items.length;
      }
    });
  }, 2500); 
});

onUnmounted(() => { if(timerGlobal) clearInterval(timerGlobal); });


const abrirDetalle = (trabajo: Trabajo) => {
  imagenSeleccionada.value = trabajo;
  indiceDetalle.value = trabajo.esCarrusel ? (indicesGrid.value[trabajo.id] ?? 0) : 0;
};

const cerrarDetalle = () => {
  imagenSeleccionada.value = null;
  modoZoom.value = false;
};

const cambiarSlide = (dir: number) => {
  if (imagenSeleccionada.value?.items) {
    const total = imagenSeleccionada.value.items.length;
    indiceDetalle.value = (indiceDetalle.value + dir + total) % total;
  }
};
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

    <main class="max-w-7xl mx-auto px-6 pt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
      <div v-for="item in trabajos" :key="item.id" @click="abrirDetalle(item)" class="group cursor-pointer">
        <div class="border-4 border-black bg-neutral-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[12px_12px_0px_0px_rgba(251,207,232,1)] group-hover:-translate-y-2 group-hover:scale-[1.03] transition-all duration-500 ease-out overflow-hidden relative">
          
          <div class="h-80 w-full relative overflow-hidden bg-neutral-100">
            <template v-if="item.esCarrusel && item.items">
              <transition-group name="slide-fade">
                <img v-for="(img, idx) in item.items" v-show="indicesGrid[item.id] === idx" :key="img.src" :src="img.src" class="absolute inset-0 w-full h-full object-cover object-center" />
              </transition-group>
            </template>
            <template v-else>
              <img :src="item.portada || item.src" class="w-full h-80 object-cover object-center" />
            </template>
          </div>
          
          <div class="p-4 border-t-4 border-black bg-white flex justify-between items-center relative z-10">
            <div class="flex flex-col gap-1">
              <span class="poppins-bold uppercase text-xs leading-none">{{ item.titulo }}</span>
              <span class="inter-regular text-[10px] text-gray-700 uppercase tracking-tighter leading-none">Técnica: {{ item.tecnica }}</span>
            </div>
            <div class="bg-black text-white p-1">
               <component :is="item.esCarrusel ? Play : Maximize2" :size="16" />
            </div>
          </div>
        </div>
      </div>
    </main>

    <transition name="fade">
      <div v-if="imagenSeleccionada" class="fixed inset-0 z-200 flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-black/90 backdrop-blur-sm" @click="cerrarDetalle"></div>
        
        <div v-if="!modoZoom" class="relative bg-white border-[6px] border-black shadow-[15px_15px_0px_0px_rgba(251,207,232,1)] max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row animate-pop">
          <button @click="cerrarDetalle" class="absolute top-4 right-4 z-30 bg-[#FBCFE8] border-4 border-black p-1 hover:bg-black hover:text-white transition-colors">
            <X :size="24" />
          </button>

          <div class="md:w-3/5 relative bg-neutral-950 flex items-center justify-center p-2 overflow-hidden">
            <template v-if="imagenSeleccionada.esCarrusel && imagenSeleccionada.items">
              <div class="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-[#FBCFE8] px-3 py-1 text-xs poppins-bold uppercase tracking-widest border-2 border-black/30 z-10">
                {{ indiceDetalle + 1 }} / {{ imagenSeleccionada.items.length }}
              </div>

              <img :src="imagenSeleccionada.items[indiceDetalle]?.src" class="max-w-full max-h-[70vh] object-contain shadow-2xl cursor-zoom-in" @click="modoZoom = true" />
              
              <button @click.stop="cambiarSlide(-1)" class="absolute left-4 bg-white border-4 border-black p-2 hover:bg-[#FBCFE8] transition-all"><ChevronLeft :size="24" /></button>
              <button @click.stop="cambiarSlide(1)" class="absolute right-4 bg-white border-4 border-black p-2 hover:bg-[#FBCFE8] transition-all"><ChevronRight :size="24" /></button>
            </template>
            <template v-else>
              <img :src="imagenSeleccionada.src || imagenSeleccionada.portada" class="max-w-full max-h-[70vh] object-contain cursor-zoom-in" @click="modoZoom = true" />
            </template>
          </div>

          <div class="md:w-2/5 p-10 flex flex-col justify-center bg-white border-l-4 border-black">
            <h2 class="text-4xl poppins-bold uppercase leading-tight mb-4 tracking-tighter">{{ imagenSeleccionada?.titulo }}</h2>
            <p class="inter-bold text-sm uppercase tracking-wider text-black">Técnica: {{ imagenSeleccionada?.tecnica }}</p>
          </div>
        </div>

        <div v-if="modoZoom" class="fixed inset-0 z-210 bg-black flex items-center justify-center p-4 cursor-zoom-out" @click="modoZoom = false">
            <img :src="imagenSeleccionada.esCarrusel && imagenSeleccionada.items ? imagenSeleccionada.items[indiceDetalle]?.src : (imagenSeleccionada.src || imagenSeleccionada.portada)" class="max-w-full max-h-full object-contain" />
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.poppins-bold { font-family: 'Poppins', sans-serif; font-weight: 800; }
.inter-regular { font-family: 'Inter', sans-serif; font-weight: 400; }
.inter-bold { font-family: 'Inter', sans-serif; font-weight: 700; }


.slide-fade-enter-active, .slide-fade-leave-active { 
  transition: all 0.7s cubic-bezier(0.65, 0, 0.35, 1); 
}
.slide-fade-enter-from { transform: translateX(100%); }
.slide-fade-leave-to { transform: translateX(-100%); }


.animate-pop { animation: pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
@keyframes pop { 0% { transform: scale(0.95); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }

.fade-enter-active, .fade-leave-active { transition: opacity 0.4s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }


@keyframes spin-very-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
.animate-spin-very-slow { animation: spin-very-slow 40s linear infinite; }
</style>