<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { 
  ArrowLeft, 
  X, 
  Calendar, 
  Maximize2, 
  ChevronLeft, 
  ChevronRight, 
  Play,
  BookOpen
} from 'lucide-vue-next';
import BarraDeNavegacion from '@/components/BarraDeNavegacion.vue';

// Interfaces para TypeScript
interface ItemCarrusel { 
  type: 'image'; 
  src: string; 
  label: string; 
}

interface Trabajo {
  id: string | number;
  titulo: string;
  fecha: string;
  descripcion: string;
  esCarrusel?: boolean;
  portada?: string; 
  src?: string;     
  items?: ItemCarrusel[]; 
}

// Estado del componente
const imagenSeleccionada = ref<Trabajo | null>(null);
const indiceCarrusel = ref(0);

// Listado de trabajos (Agrupando todas las páginas en un carrusel)
const trabajos: Trabajo[] = [
  { 
    id: 'articulo-cmyk', 
    esCarrusel: true,
    portada: '/Img/DisenoEditorial/Articulo_CMYK_page-0001.jpg',
    titulo: 'Diseño Editorial: Artículo CMYK', 
    fecha: '2024', 
    descripcion: 'Proyecto completo de maquetación editorial. Se trabajó la jerarquía tipográfica, el uso de retículas complejas y la gestión de color CMYK para preimpresión técnica.',
    items: [
      { type: 'image', src: '/Img/DisenoEditorial/Articulo_CMYK_page-0001.jpg', label: 'Portada del Artículo' },
      { type: 'image', src: '/Img/DisenoEditorial/Articulo_CMYK_page-0002.jpg', label: 'Páginas 2-3 (Cuerpo de texto)' },
      { type: 'image', src: '/Img/DisenoEditorial/Articulo_CMYK_page-0003.jpg', label: 'Páginas 4-5 (Infografía)' },
      { type: 'image', src: '/Img/DisenoEditorial/Articulo_CMYK_page-0004.jpg', label: 'Páginas 6-7 (Detalle visual)' },
      { type: 'image', src: '/Img/DisenoEditorial/Articulo_CMYK_page-0005.jpg', label: 'Contraportada / Cierre' },
    ]
  }
];

// Funciones de navegación del carrusel
const abrirDetalle = (trabajo: Trabajo) => {
  imagenSeleccionada.value = trabajo;
  indiceCarrusel.value = 0;
};

const cerrarDetalle = () => {
  imagenSeleccionada.value = null;
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
        <ArrowLeft :size="20" /> Volver al Portafolio
      </RouterLink>
      <h1 class="text-6xl md:text-8xl font-black uppercase tracking-tighter italic mb-12">
        EDITORIAL<span class="text-[#FBCFE8] not-italic">_DESIGN</span>
      </h1>
    </header>

    <main class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div 
          v-for="item in trabajos" 
          :key="item.id" 
          @click="abrirDetalle(item)" 
          class="group cursor-pointer"
        >
          <div class="border-4 border-black bg-white overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[12px_12px_0px_0px_rgba(251,207,232,1)] group-hover:-translate-y-1 transition-all duration-300">
            <img :src="item.portada" class="w-full h-80 object-cover" />
            
            <div class="p-4 border-t-4 border-black bg-white flex justify-between items-center">
              <div class="flex flex-col">
                <span class="font-black uppercase text-sm italic">{{ item.titulo }}</span>
                <span class="text-[10px] font-bold text-[#EE6055] uppercase tracking-tighter">Proyecto Editorial Completo</span>
              </div>
              <div class="bg-black text-white p-2">
                 <Play :size="16" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <transition name="fade">
      <div v-if="imagenSeleccionada" class="fixed inset-0 z-[200] flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-black/80 backdrop-blur-md" @click="cerrarDetalle"></div>
        
        <div class="relative bg-white border-[6px] border-black shadow-[15px_15px_0px_0px_rgba(251,207,232,1)] max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row animate-pop">
          
          <button @click="cerrarDetalle" class="absolute top-4 right-4 z-30 bg-[#FBCFE8] border-4 border-black p-1 hover:bg-black hover:text-white transition-colors">
            <X :size="24" />
          </button>

          <div class="md:w-2/3 relative bg-neutral-100 flex items-center justify-center border-b-4 md:border-b-0 md:border-r-4 border-black">
            <div class="w-full h-full flex items-center justify-center p-6">
              <img 
                :src="imagenSeleccionada.items?.[indiceCarrusel].src" 
                class="max-w-full max-h-full object-contain shadow-lg" 
              />
            </div>
            
            <button @click="anteriorSlide" class="absolute left-4 bg-white border-4 border-black p-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] active:shadow-none hover:bg-[#FBCFE8] transition-all">
              <ChevronLeft :size="32" />
            </button>
            <button @click="siguienteSlide" class="absolute right-4 bg-white border-4 border-black p-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] active:shadow-none hover:bg-[#FBCFE8] transition-all">
              <ChevronRight :size="32" />
            </button>

            <div class="absolute bottom-6 bg-black text-white px-4 py-1 font-black uppercase text-xs tracking-widest italic">
              {{ imagenSeleccionada.items?.[indiceCarrusel].label }} — {{ indiceCarrusel + 1 }} / {{ imagenSeleccionada.items?.length }}
            </div>
          </div>

          <div class="md:w-1/3 p-10 flex flex-col justify-center gap-6 bg-white">
            <div class="space-y-2">
              <h2 class="text-4xl font-black uppercase tracking-tighter leading-none italic border-l-8 border-[#FBCFE8] pl-4">
                {{ imagenSeleccionada.titulo }}
              </h2>
              <div class="flex items-center gap-2 font-black uppercase text-[12px] bg-black text-[#FBCFE8] px-3 py-1 w-fit">
                <Calendar :size="14" /> {{ imagenSeleccionada.fecha }}
              </div>
            </div>

            <p class="font-bold text-lg leading-snug text-neutral-700">
              {{ imagenSeleccionada.descripcion }}
            </p>

            <div class="bg-neutral-50 border-2 border-dashed border-black p-4 mt-2">
              <div class="flex items-center gap-2 mb-2 font-black text-sm uppercase">
                <BookOpen :size="18" /> Detalles Técnicos
              </div>
              <ul class="text-sm font-bold space-y-1 opacity-80">
                <li>• Retícula: Columnas asimétricas</li>
                <li>• Tipografía: Poppins & Montserrat</li>
                <li>• Salida: PDF/X-4 (Pre-press)</li>
              </ul>
            </div>

            <button @click="cerrarDetalle" class="mt-4 bg-white text-black font-black uppercase py-4 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FBCFE8] hover:shadow-none transition-all active:translate-x-1 active:translate-y-1">
              Cerrar Vista
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.font-poppins { font-family: 'Poppins', sans-serif; }
.animate-pop { animation: pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
@keyframes pop { 0% { transform: scale(0.9); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>