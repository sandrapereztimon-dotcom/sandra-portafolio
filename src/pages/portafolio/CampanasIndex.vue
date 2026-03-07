<script setup lang="ts">
/**
 * SECCIÓN COMENTADA TEMPORALMENTE
 * import { RouterLink } from 'vue-router';
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';
import BarraDeNavegacion from '@/components/BarraDeNavegacion.vue';

const campanas = [
  { 
    id: 'lqnm', 
    titulo: 'Lo Que Nos Mueve', 
    portada: '/Img/Proyectos/LQNM/LogoLQNM.jpg',
    desc: 'Campaña integral: cartelería, mupis y trípticos.' 
  }
];
*/
</script>

<template>
  <div class="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
    <div class="border-8 border-black p-12 bg-[#FBCFE8] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
      <h1 class="text-5xl md:text-7xl font-black uppercase italic mb-4">Próximamente_</h1>
      <p class="text-xl font-bold uppercase tracking-tight">Estamos optimizando las imágenes para que la web vuele.</p>
    </div>
    <a href="/portafolio" class="mt-8 font-black uppercase underline decoration-4 underline-offset-8 hover:text-[#FBCFE8] transition-colors">
      Volver al portafolio
    </a>
  </div>
</template>

<style scoped>
/* Estilos locales si fueran necesarios */
</style>