<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ArrowRight, Star, Circle, Triangle, Square } from 'lucide-vue-next';
import BarraDeNavegacion from '@/components/BarraDeNavegacion.vue';

const campanas = [
  {
    id: 'lqnm',
    titulo: 'Lo Que Nos Mueve',
    tecnica: 'Campana integral',
    desc: 'Campaña integral con carteles, mupis y trípticos.'
  }
];
</script>

<template>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;800&family=Poppins:wght@800&display=swap" rel="stylesheet">

  <div class="min-h-screen bg-white text-black overflow-x-hidden relative">
    <BarraDeNavegacion />

    <div class="fixed inset-0 pointer-events-none z-0">
      <Star :size="400" class="absolute -top-20 -right-20 text-[#FBCFE8]/30 animate-spin-very-slow fill-current stroke-0" />
      <Circle :size="250" class="absolute top-1/4 -left-20 text-black/5 animate-levitate fill-current stroke-0" />
      <Triangle :size="300" class="absolute bottom-10 left-10 text-[#FBCFE8]/20 animate-spin-slow fill-current stroke-0" />
      <Square :size="150" class="absolute top-1/2 right-[5%] text-black/5 animate-levitate-delayed fill-current stroke-0" />
    </div>

    <main class="max-w-7xl mx-auto px-6 pt-24 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <RouterLink
          v-for="campana in campanas"
          :key="campana.id"
          :to="`/portafolio/campanas/${campana.id}`"
          class="group"
        >
          <article class="border-4 border-black p-10 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[15px_15px_0px_0px_rgba(251,207,232,1)] group-hover:-translate-y-2 transition-all duration-500 bg-[#FBCFE8] min-h-87.5 flex flex-col justify-between overflow-hidden relative">
            <div>
              <h2 class="text-6xl md:text-7xl poppins-bold uppercase leading-none mb-4 tracking-tighter">
                {{ campana.titulo }}
              </h2>
              <div class="inter-bold inline-block bg-black text-white px-4 py-1 text-sm uppercase tracking-widest mb-6">
                {{ campana.tecnica }}
              </div>
              <p class="inter-medium text-black/90 text-xl max-w-sm leading-snug">
                {{ campana.desc }}
              </p>
            </div>

            <div class="flex justify-end mt-4">
              <div class="bg-black text-white p-4 border-4 border-black group-hover:bg-white group-hover:text-black transition-colors">
                <ArrowRight :size="32" />
              </div>
            </div>
          </article>
        </RouterLink>
      </div>
    </main>
  </div>
</template>

<style scoped>
.poppins-bold { font-family: 'Poppins', sans-serif; font-weight: 800; }
.inter-regular { font-family: 'Inter', sans-serif; font-weight: 400; }
.inter-medium { font-family: 'Inter', sans-serif; font-weight: 500; }
.inter-bold { font-family: 'Inter', sans-serif; font-weight: 700; }

@keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes spin-very-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes levitate {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-40px); }
}
@keyframes levitate-delayed {
  0%, 100% { transform: translateY(0) rotate(45deg); }
  50% { transform: translateY(30px) rotate(55deg); }
}

.animate-spin-slow { animation: spin-slow 15s linear infinite; }
.animate-spin-very-slow { animation: spin-very-slow 35s linear infinite; }
.animate-levitate { animation: levitate 8s ease-in-out infinite; }
.animate-levitate-delayed { animation: levitate-delayed 10s ease-in-out infinite; }
</style>
