<script setup lang="ts">
/** * SECCIÓN DETALLE COMENTADA TEMPORALMENTE
 * import { useRoute, RouterLink } from 'vue-router';
import { ArrowLeft, Tag, Calendar } from 'lucide-vue-next';
import BarraDeNavegacion from '@/components/BarraDeNavegacion.vue';

const route = useRoute();
const campanaId = route.params.id;

const infoCampana = {
  'lqnm': {
    titulo: 'Lo Que Nos Mueve',
    cliente: 'Identidad Visual / LQNM',
    año: '2024',
    descripcion: 'Una propuesta visual vibrante que explora el movimiento a través del color...',
    secciones: [
      {
        nombre: 'Cartelería Principal',
        fotos: [
          '/Img/Proyectos/LQNM/Cartel A3 transversal def def amarillo.jpeg',
          '/Img/Proyectos/LQNM/Cartel A3 transversal def def naranja.jpeg',
          '/Img/Proyectos/LQNM/Cartel A3 transversal def def rosa.jpeg'
        ]
      },
      {
        nombre: 'Mupis Publicitarios',
        fotos: [
          '/Img/Proyectos/LQNM/MupiAmarillo.jpeg',
          '/Img/Proyectos/LQNM/MupiNaranja.jpeg',
          '/Img/Proyectos/LQNM/MupiRosa.jpeg'
        ]
      },
      {
        nombre: 'Material Editorial',
        fotos: [
          '/Img/Proyectos/LQNM/TripticoAmarilloDelante.png',
          '/Img/Proyectos/LQNM/TripticoAmarilloDetras.png',
          '/Img/Proyectos/LQNM/TripticoNaranjaDelante.png',
          '/Img/Proyectos/LQNM/TripticoNaranjaDetras.png',
          '/Img/Proyectos/LQNM/TripticoRosaDelante.png',
          '/Img/Proyectos/LQNM/TripticoRosaDetras.png'
        ]
      }
    ]
  }
};

const data = infoCampana[campanaId as keyof typeof infoCampana];
*/
</script>

<template>
  <div class="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
    <div class="border-8 border-black p-12 bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
      <h1 class="text-5xl md:text-7xl font-black uppercase italic mb-4">Ajustando detalles_</h1>
      <p class="text-xl font-bold uppercase tracking-tight max-w-md">Estamos preparando el despliegue visual de esta campaña.</p>
    </div>
    <a href="/portafolio/campanas" class="mt-8 font-black uppercase underline decoration-4 underline-offset-8 hover:text-[#FBCFE8] transition-colors">
      Volver a Campañas
    </a>
  </div>
</template>

<style scoped>
/* Estilos guardados
.text-stroke { -webkit-text-stroke: 0.5px black; }
*/
</style>