<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-vue-next';
import BarraDeNavegacion from '@/components/BarraDeNavegacion.vue';

const route = useRoute();
const proyectoId = route.params.id as string;

// Control de índices para los mini-carruseles
const indices = ref<{ [key: string]: number }>({});

const moverFoto = (id: string, direccion: number, total: number) => {
  if (!indices.value[id]) indices.value[id] = 0;
  indices.value[id] = (indices.value[id] + direccion + total) % total;
};

const proyectosData: any = {
  'kaoka': {
    titulo: 'KAOKA',
    cliente: 'Packaging Design / Kaoka',
    año: '2024',
    descripcion: 'Identidad visual y packaging para una línea de chocolates premium y café.',
    galeria: [
      { id: 'chocolates', titulo: 'Gama de Sabores', fotos: [
        '/Img/Proyectos/Kaoka/ChocolateAmarilllo.png', 
        '/Img/Proyectos/Kaoka/ChocolateMarrón.png', 
        '/Img/Proyectos/Kaoka/ChocolateRosa.png', 
        '/Img/Proyectos/Kaoka/ChocolateVerde.png'
      ]},
      { id: 'tarjetas', titulo: 'Tarjetas Visita', fotos: [
        '/Img/Proyectos/Kaoka/TarjetaPresentacionDelante.png', 
        '/Img/Proyectos/Kaoka/TarjetaPresentacionDetras.png'
      ]},
      { id: 'caja', titulo: 'Caja Kaoka', fotos: ['/Img/Proyectos/Kaoka/CajaKaoka.png'] },
      { id: 'mockup', titulo: 'Mockup General', fotos: ['/Img/Proyectos/Kaoka/MockupChocolates.png'] },
      { id: 'tote', titulo: 'Tote Bag', fotos: ['/Img/Proyectos/Kaoka/ToteBag.png'] }
    ]
  },
  'mentecatos': {
    titulo: 'MENTECATOS',
    cliente: 'Board Game Design / Mentecatos',
    año: '2024',
    descripcion: 'Diseño integral de juego de mesa: desde el packaging de la caja hasta el mazo de cartas y el tablero.',
    galeria: [
      { 
        id: 'cartas', 
        titulo: 'Mazo de Cartas', 
        // Corregido: Ruta con "Proyectos" y pad de 4 dígitos para coincidir con tus archivos
        fotos: Array.from({length: 12}, (_, i) => {
          const num = (i + 1).toString().padStart(4, '0');
          return `/Img/Proyectos/Mentecatos/cartas finales organizadas_page-${num}.jpg`;
        }) 
      },
      { 
        id: 'mockups', 
        titulo: 'Mockups Juego', 
        fotos: [
          '/Img/Proyectos/Mentecatos/Mock up 1.jpg', 
          '/Img/Proyectos/Mentecatos/MockUp2.jpg', 
          '/Img/Proyectos/Mentecatos/MockUp3.jpg', 
          '/Img/Proyectos/Mentecatos/MockUp4.jpg'
        ]
      },
      { 
        id: 'caja_frontal_trasera', 
        titulo: 'Packaging Caja', 
        fotos: [
          '/Img/Proyectos/Mentecatos/CajaDelante.jpg', 
          '/Img/Proyectos/Mentecatos/CajaMaqueta.jpg'
        ]
      },
      { 
        id: 'tablero', 
        titulo: 'Tablero de Juego', 
        fotos: ['/Img/Proyectos/Mentecatos/TableroMentecatos.jpg'] 
      }
    ]
  }
};

const data = computed(() => proyectosData[proyectoId]);
</script>

<template>
  <div v-if="data" class="min-h-screen bg-white font-poppins pb-32 text-black">
    <BarraDeNavegacion />
    
    <main class="max-w-7xl mx-auto px-6 pt-12">
      <RouterLink to="/portafolio/packaging" class="inline-flex items-center gap-2 font-black uppercase mb-12 bg-white px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FBCFE8] transition-colors">
        <ArrowLeft :size="20" /> Volver a Packaging
      </RouterLink>

      <div class="grid md:grid-cols-3 gap-12 mb-16 border-b-4 border-black pb-12">
        <div class="md:col-span-2">
          <h1 class="text-7xl md:text-9xl font-black uppercase italic leading-[0.85] mb-6">
            {{ data.titulo }}<span class="text-[#FBCFE8] not-italic">_</span>
          </h1>
          <p class="text-xl font-bold max-w-2xl opacity-80 italic">{{ data.descripcion }}</p>
        </div>
        <div class="bg-[#FBCFE8] p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] h-fit">
          <div class="space-y-2 font-black uppercase text-xs">
            <div class="flex justify-between"><span>Proyecto:</span> <span>{{ data.cliente }}</span></div>
            <div class="flex justify-between border-t-2 border-black pt-2"><span>Año:</span> <span>{{ data.año }}</span></div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div v-for="item in data.galeria" :key="item.id" 
             class="group border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(251,207,232,1)] transition-all flex flex-col">
          
          <div class="aspect-square overflow-hidden border-b-4 border-black bg-neutral-100 relative flex items-center justify-center">
            <img :src="item.fotos[indices[item.id] || 0]" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

            <div v-if="item.fotos.length > 1" class="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button @click.prevent="moverFoto(item.id, -1, item.fotos.length)" class="bg-white border-2 border-black p-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FBCFE8]">
                <ChevronLeft :size="20" />
              </button>
              <button @click.prevent="moverFoto(item.id, 1, item.fotos.length)" class="bg-white border-2 border-black p-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FBCFE8]">
                <ChevronRight :size="20" />
              </button>
            </div>

            <div v-if="item.fotos.length > 1" class="absolute top-2 right-2 bg-black text-white text-[10px] px-2 py-1 font-black">
              {{ (indices[item.id] || 0) + 1 }} / {{ item.fotos.length }}
            </div>
          </div>

          <div class="p-4 flex justify-between items-center bg-white italic font-black uppercase text-xs">
            <div>
              <div class="text-black">{{ item.titulo }}</div>
              <div class="text-[#FBCFE8] text-[10px]">{{ data.titulo }} / PACKAGING</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>