<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { ArrowLeft, ZoomIn, Palette, Info } from 'lucide-vue-next';
import { Card, CardContent } from '@/components/ui/card';
import BarraDeNavegacion from '@/components/BarraDeNavegacion.vue';
import VisorConLupa from '@/components/VisorConLupa.vue'; // <--- IMPORTANTE
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const props = defineProps<{
  category: string 
}>();

const todosLosTrabajos = [
  { 
    id: 1, cat: 'ilustracion', src: '/Img/Ilustraciones/ComicBN.jpg', 
    nombre: 'Cómic B/N', horizontal: true, 
    descripcion: 'Página de cómic entintada tradicionalmente y terminada en digital. Enfoque en narrativa visual.' 
  },
  { 
    id: 2, cat: 'ilustracion', src: '/Img/Ilustraciones/ComicColor.jpg', 
    nombre: 'Cómic Color', horizontal: true,
    descripcion: 'Exploración de paletas vibrantes para narrativa juvenil.'
  },
  { 
    id: 3, cat: 'ilustracion', src: '/Img/Ilustraciones/Comision1.jpeg', 
    nombre: 'Personaje I', horizontal: false,
    descripcion: 'Diseño de personaje para encargo privado.'
  },
  { 
    id: 5, cat: 'ilustracion', src: '/Img/Ilustraciones/DoblePaginaLibro.jpg', 
    nombre: 'Libro Arte', horizontal: true,
    descripcion: 'Maquetación de doble página para libro ilustrado de botánica.'
  },
  { 
    id: 6, cat: 'ilustracion', src: '/Img/Ilustraciones/IlustracionSelva.jpg', 
    nombre: 'Selva Digital', horizontal: false,
    descripcion: 'Ilustración conceptual de entorno natural.'
  },
  { 
    id: 101, cat: 'carteles', src: '/Img/Carteles/ejemplo.jpg', 
    nombre: 'Poster Evento', horizontal: false,
    descripcion: 'Cartel publicitario para festival de música.'
  },
];

const trabajosFiltrados = computed(() => {
  return todosLosTrabajos.filter(trabajo => trabajo.cat === props.category);
});

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
        <span class="font-black uppercase tracking-[0.2em] text-sm">Galería Detallada</span>
      </div>
      
      <h1 class="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none wrap-break-word">
        {{ tituloSeccion }}
      </h1>
    </header>

    <div v-if="trabajosFiltrados.length > 0" class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div 
        v-for="trabajo in trabajosFiltrados" 
        :key="trabajo.id" 
        :class="[trabajo.horizontal ? 'md:col-span-2 lg:col-span-2' : '']"
        class="group"
      >
        <Dialog>
          <DialogTrigger as-child>
            <Card class="rounded-none border-4 border-black bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-all group-hover:-translate-y-2 group-hover:shadow-[15px_15px_0px_0px_rgba(96,211,148,1)] cursor-pointer">
              <CardContent class="p-0">
                <div :class="[trabajo.horizontal ? 'aspect-video' : 'aspect-3/4']" class="overflow-hidden border-b-4 border-black relative bg-gray-100">
                  <img :src="trabajo.src" :alt="trabajo.nombre" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <ZoomIn :size="48" class="text-white" />
                  </div>
                </div>
                
                <div class="p-5 flex justify-between items-center bg-white">
                  <div>
                    <h3 class="font-black uppercase text-xl leading-none">{{ trabajo.nombre }}</h3>
                    <span v-if="trabajo.horizontal" class="text-[10px] font-bold bg-black text-white px-2 mt-1 inline-block uppercase">Formato Horizontal</span>
                  </div>
                  <div class="h-10 w-10 rounded-full border-2 border-black flex items-center justify-center font-bold bg-[#60D394] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    +
                  </div>
                </div>
              </CardContent>
            </Card>
          </DialogTrigger>

          <DialogContent class="sm:max-w-[95vw] md:max-w-[85vw] border-4 border-black rounded-none shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] p-0 bg-white">
            <div class="flex flex-col lg:flex-row min-h-[60vh]">
              <div class="lg:w-2/3 border-b-4 lg:border-b-0 lg:border-r-4 border-black">
                <VisorConLupa :src="trabajo.src" :nombre="trabajo.nombre" />
              </div>
              
              <div class="lg:w-1/3 p-8 flex flex-col justify-center bg-[#FFD97D]">
                <DialogHeader>
                  <div class="flex items-center gap-2 mb-4">
                    <Info :size="24" class="text-black" />
                    <span class="font-black uppercase text-xs tracking-widest">Información Técnica</span>
                  </div>
                  <DialogTitle class="text-4xl font-black uppercase mb-4 leading-none">{{ trabajo.nombre }}</DialogTitle>
                  <DialogDescription class="text-black font-bold text-lg leading-snug">
                    {{ trabajo.descripcion }}
                  </DialogDescription>
                </DialogHeader>
                
                <div class="mt-8 pt-8 border-t-2 border-black/20 flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-black text-white text-[10px] font-black uppercase italic">Detalle Interactivo</span>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
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