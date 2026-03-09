<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import { X, Maximize2, ChevronLeft, ChevronRight, Play, Star, Circle, ArrowLeft } from 'lucide-vue-next';
import BarraDeNavegacion from '@/components/BarraDeNavegacion.vue';

const route = useRoute();
const campanaId = route.params.id as string;

interface GaleriaItem {
  id: string;
  titulo: string;
  tecnica: string;
  fotos: string[];
}

interface Campana {
  titulo: string;
  descripcion: string;
  galeria: GaleriaItem[];
}

const imagenSeleccionada = ref<GaleriaItem | null>(null);
const modoZoom = ref(false);
const indicesGrid = ref<Record<string, number>>({});
const indiceDetalle = ref(0);
let timerGlobal: number | null = null;

const campanasData: Record<string, Campana> = {
  lqnm: {
    titulo: 'Lo Que Nos Mueve',
    descripcion: 'Campaña visual con sistema de piezas para cartelería, mupis y trípticos.',
    galeria: [
      {
        id: 'carteles',
        titulo: 'Carteles',
        tecnica: 'Diseño editorial',
        fotos: [
          '/Img/Proyectos/LQNM/Cartel A3 transversal def def amarillo.jpg',
          '/Img/Proyectos/LQNM/Cartel A3 transversal def def naranja.jpg',
          '/Img/Proyectos/LQNM/Cartel A3 transversal def def rosa.jpg'
        ]
      },
      {
        id: 'mupis',
        titulo: 'Mupis',
        tecnica: 'Publicidad exterior',
        fotos: [
          '/Img/Proyectos/LQNM/MupiAmarillo.jpg',
          '/Img/Proyectos/LQNM/MupiNaranja.jpg',
          '/Img/Proyectos/LQNM/MupiRosa.jpg'
        ]
      },
      {
        id: 'tripticos',
        titulo: 'Trípticos',
        tecnica: 'Pieza editorial',
        fotos: [
          '/Img/Proyectos/LQNM/TrípticoAmarilloDelante.jpg',
          '/Img/Proyectos/LQNM/TrípticoAmarilloDetrás.jpg',
          '/Img/Proyectos/LQNM/TrípticoNaranjaDelante.jpg',
          '/Img/Proyectos/LQNM/TrípticoNaranjaDetrás.jpg',
          '/Img/Proyectos/LQNM/TrípticoRosaDelante.jpg',
          '/Img/Proyectos/LQNM/TrípticoRosaDetrás.jpg'
        ]
      }
    ]
  }
};

const data = computed(() => campanasData[campanaId]);

if (data.value) {
  data.value.galeria.forEach((item) => {
    if (item.fotos.length > 1) indicesGrid.value[item.id] = 0;
  });
}

onMounted(() => {
  timerGlobal = window.setInterval(() => {
    if (data.value) {
      data.value.galeria.forEach((item) => {
        if (item.fotos.length > 1) {
          const currentIdx = indicesGrid.value[item.id] ?? 0;
          indicesGrid.value[item.id] = (currentIdx + 1) % item.fotos.length;
        }
      });
    }
  }, 2500);
});

onUnmounted(() => {
  if (timerGlobal) clearInterval(timerGlobal);
});

const abrirDetalle = (item: GaleriaItem) => {
  imagenSeleccionada.value = item;
  indiceDetalle.value = item.fotos.length > 1 ? (indicesGrid.value[item.id] ?? 0) : 0;
};

const cerrarDetalle = () => {
  imagenSeleccionada.value = null;
  modoZoom.value = false;
};

const cambiarSlide = (dir: number) => {
  if (imagenSeleccionada.value?.fotos) {
    const total = imagenSeleccionada.value.fotos.length;
    indiceDetalle.value = (indiceDetalle.value + dir + total) % total;
  }
};
</script>

<template>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&family=Poppins:wght@800&display=swap" rel="stylesheet">

  <div v-if="data" class="min-h-screen bg-white text-black font-poppins selection:bg-[#FBCFE8] relative overflow-x-hidden pb-20">
    <BarraDeNavegacion />

    <div class="fixed inset-0 pointer-events-none z-0">
      <div class="absolute inset-0 bg-[#FBCFE8]/10"></div>
      <Star :size="400" class="absolute -top-20 -right-20 text-[#FBCFE8]/30 animate-spin-very-slow fill-current stroke-0" />
      <Circle :size="150" class="absolute bottom-10 left-10 text-black/5 fill-current stroke-0" />
    </div>

    <header class="max-w-7xl mx-auto px-6 pt-24 relative z-10">
      <RouterLink to="/portafolio/campanas" class="inline-flex items-center gap-2 font-black uppercase text-xs mb-8 bg-white px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FBCFE8] hover:translate-x-1 hover:-translate-y-1 transition-all">
        <ArrowLeft :size="18" /> Volver a Campañas
      </RouterLink>

      <h1 class="font-black uppercase tracking-tighter leading-none mb-4 text-6xl md:text-8xl">
        {{ data.titulo }}<span class="text-[#FBCFE8]">_</span>
      </h1>
      <p class="inter-medium text-lg md:text-xl opacity-70 max-w-2xl leading-snug">{{ data.descripcion }}</p>
    </header>

    <main class="max-w-7xl mx-auto px-6 pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
      <div v-for="item in data.galeria" :key="item.id" @click="abrirDetalle(item)" class="group cursor-pointer">
        <div class="border-4 border-black bg-neutral-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[12px_12px_0px_0px_rgba(251,207,232,1)] group-hover:-translate-y-2 transition-all duration-500 overflow-hidden relative">

          <div class="aspect-square w-full relative overflow-hidden bg-neutral-100 flex items-center justify-center">
            <template v-if="item.fotos.length > 1">
              <transition-group name="slide-fade">
                <img v-for="(img, idx) in item.fotos" v-show="indicesGrid[item.id] === idx" :key="img" :src="img" class="absolute inset-0 w-full h-full object-cover" />
              </transition-group>
            </template>
            <template v-else>
              <img :src="item.fotos[0]" class="w-full h-full object-cover" />
            </template>
          </div>

          <div class="p-4 border-t-4 border-black bg-white flex justify-between items-center relative z-10">
            <div class="flex flex-col">
              <span class="poppins-bold uppercase text-[11px] leading-tight mb-0.5 tracking-tight">{{ item.titulo }}</span>
              <span class="inter-regular text-[9px] text-gray-500 uppercase tracking-widest">{{ item.tecnica }}</span>
            </div>
            <div class="bg-black text-white p-1">
              <component :is="item.fotos.length > 1 ? Play : Maximize2" :size="14" />
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

          <div class="md:w-3/5 relative bg-neutral-950 flex items-center justify-center p-4 overflow-hidden">
            <template v-if="imagenSeleccionada.fotos && imagenSeleccionada.fotos.length > 1">
              <div class="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-[#FBCFE8] px-3 py-1 text-xs poppins-bold uppercase z-10">
                {{ indiceDetalle + 1 }} / {{ imagenSeleccionada.fotos.length }}
              </div>
              <img :src="imagenSeleccionada.fotos[indiceDetalle]" class="max-w-full max-h-[70vh] object-contain shadow-2xl cursor-zoom-in" @click="modoZoom = true" />
              <button @click.stop="cambiarSlide(-1)" class="absolute left-4 bg-white border-4 border-black p-2 hover:bg-[#FBCFE8] transition-all"><ChevronLeft :size="24" /></button>
              <button @click.stop="cambiarSlide(1)" class="absolute right-4 bg-white border-4 border-black p-2 hover:bg-[#FBCFE8] transition-all"><ChevronRight :size="24" /></button>
            </template>
            <template v-else-if="imagenSeleccionada.fotos">
              <img :src="imagenSeleccionada.fotos[0]" class="max-w-full max-h-[70vh] object-contain cursor-zoom-in" @click="modoZoom = true" />
            </template>
          </div>

          <div class="md:w-2/5 p-10 flex flex-col justify-center bg-white border-l-4 border-black">
            <h2 class="text-3xl md:text-4xl poppins-bold uppercase leading-tight mb-4 tracking-tighter">{{ imagenSeleccionada?.titulo }}</h2>
            <p class="inter-bold text-sm uppercase tracking-wider text-black">Técnica: {{ imagenSeleccionada?.tecnica }}</p>
          </div>
        </div>

        <div v-if="modoZoom" class="fixed inset-0 z-210 bg-black flex items-center justify-center p-4 cursor-zoom-out" @click="modoZoom = false">
          <img v-if="imagenSeleccionada?.fotos" :src="imagenSeleccionada.fotos[indiceDetalle]" class="max-w-full max-h-full object-contain" />
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.poppins-bold { font-family: 'Poppins', sans-serif; font-weight: 800; }
.inter-regular { font-family: 'Inter', sans-serif; font-weight: 400; }
.inter-medium { font-family: 'Inter', sans-serif; font-weight: 500; }
.inter-bold { font-family: 'Inter', sans-serif; font-weight: 700; }

.slide-fade-enter-active, .slide-fade-leave-active { transition: all 0.7s cubic-bezier(0.65, 0, 0.35, 1); }
.slide-fade-enter-from { transform: translateX(100%); }
.slide-fade-leave-to { transform: translateX(-100%); }

.animate-pop { animation: pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
@keyframes pop { 0% { transform: scale(0.95); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }

.fade-enter-active, .fade-leave-active { transition: opacity 0.4s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@keyframes spin-very-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
.animate-spin-very-slow { animation: spin-very-slow 40s linear infinite; }
</style>
