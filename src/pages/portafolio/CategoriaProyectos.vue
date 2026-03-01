<script setup lang="ts">
import { computed } from 'vue'; // Para filtrar los datos automáticamente
import { RouterLink } from 'vue-router';
import { ArrowLeft, ZoomIn, Palette } from 'lucide-vue-next';
import { Card, CardContent } from '@/components/ui/card';
import BarraDeNavegacion from '@/components/BarraDeNavegacion.vue';

// Requisito Técnico: TypeScript - Recibimos la prop de la ruta
const props = defineProps<{
  category: string 
}>();

// --- 1. GESTIÓN DE CONTENIDO (Datos Embebidos) ---
// Centralizamos todas las fotos. Puedes añadir más categorías aquí.
const todosLosTrabajos = [
  // ILUSTRACIONES
  { id: 1, cat: 'ilustracion', src: '/Img/Ilustraciones/ComicBN.jpg', nombre: 'Cómic B/N' },
  { id: 2, cat: 'ilustracion', src: '/Img/Ilustraciones/ComicColor.jpg', nombre: 'Cómic Color' },
  { id: 3, cat: 'ilustracion', src: '/Img/Ilustraciones/Comision1.jpeg', nombre: 'Personaje I' },
  { id: 4, cat: 'ilustracion', src: '/Img/Ilustraciones/Comision2.jpeg', nombre: 'Personaje II' },
  { id: 5, cat: 'ilustracion', src: '/Img/Ilustraciones/DoblePaginaLibro.jpg', nombre: 'Libro Arte' },
  { id: 6, cat: 'ilustracion', src: '/Img/Ilustraciones/IlustracionSelva.jpg', nombre: 'Selva Digital' },
  
  // CARTELERÍA (Añade aquí las de la carpeta Carteles)
  { id: 101, cat: 'carteles', src: '/Img/Carteles/ejemplo.jpg', nombre: 'Poster Evento' },
];

// --- 2. LÓGICA DE FILTRADO (Requisito: TypeScript - Vue) ---
// Esta variable reactiva solo mostrará las fotos de la categoría actual
const trabajosFiltrados = computed(() => {
  return todosLosTrabajos.filter(trabajo => trabajo.cat === props.category);
});

// Títulos personalizados según la categoría
const tituloSeccion = computed(() => {
  const titulos: Record<string, string> = {
    ilustracion: 'Arte & Ilustración',
    carteles: 'Diseño de Cartelería',
    branding: 'Identidad Visual'
  };
  return titulos[props.category] || props.category;
});
</script>

<template>
  <BarraDeNavegacion />
  <div class="min-h-screen bg-white p-6 md:p-12 font-poppins text-black">
    
    <header class="max-w-7xl mx-auto mb-16 border-b-8 border-black pb-8">
      <RouterLink to="/portafolio" class="inline-flex items-center gap-2 font-black uppercase mb-8 hover:-translate-x-2 transition-transform bg-[#FFD97D] px-4 py-1 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <ArrowLeft :size="18" /> Volver al Portafolio
      </RouterLink>
      
      <div class="flex items-center gap-4 text-[#EE6055] mb-2">
        <Palette :size="32" />
        <span class="font-black uppercase tracking-[0.2em] text-sm">Categoría Seleccionada</span>
      </div>
      
      <h1 class="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none break-words">
        {{ tituloSeccion }}
      </h1>
    </header>

    <div v-if="trabajosFiltrados.length > 0" class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div v-for="trabajo in trabajosFiltrados" :key="trabajo.id" class="group">
        <Card class="rounded-none border-4 border-black bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-all group-hover:-translate-y-2 group-hover:shadow-[15px_15px_0px_0px_rgba(96,211,148,1)]">
          <CardContent class="p-0">
            <div class="aspect-[3/4] overflow-hidden border-b-4 border-black relative bg-gray-100">
              <img 
                :src="trabajo.src" 
                :alt="trabajo.nombre" 
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <ZoomIn :size="48" class="text-white" />
              </div>
            </div>
            
            <div class="p-5 flex justify-between items-center bg-white">
              <h3 class="font-black uppercase text-xl">{{ trabajo.nombre }}</h3>
              <div class="h-8 w-8 rounded-full border-2 border-black flex items-center justify-center font-bold text-xs bg-[#60D394]">
                +
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>

    <div v-else class="max-w-7xl mx-auto py-20 text-center border-4 border-dashed border-black">
      <p class="text-3xl font-black uppercase opacity-30 italic">No hay trabajos en esta sección todavía...</p>
    </div>

  </div>
</template>

<style scoped>
.font-poppins { font-family: 'Poppins', sans-serif; }
</style>