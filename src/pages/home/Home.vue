<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { 
  Star, Circle, Triangle, Square, ArrowRight, MessageCircle
} from 'lucide-vue-next';

import BarraDeNavegacion from '@/components/BarraDeNavegacion.vue';
import { Button } from '@/components/ui/button';
</script>

<template>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;800&family=Poppins:wght@800&display=swap" rel="stylesheet">

  <div class="min-h-screen bg-white text-black overflow-x-hidden selection:bg-[#FBCFE8] relative">
    
    <BarraDeNavegacion />

    <div class="fixed inset-0 pointer-events-none z-0">
      <Star :size="400" class="absolute -top-20 -right-20 text-[#FBCFE8]/30 animate-spin-very-slow fill-current stroke-0" />
      <Circle :size="250" class="absolute top-1/4 -left-20 text-black/5 animate-levitate fill-current stroke-0" />
      <Triangle :size="300" class="absolute bottom-10 left-10 text-[#FBCFE8]/20 animate-spin-slow fill-current stroke-0" />
      <Square :size="150" class="absolute top-1/2 right-[5%] text-black/5 animate-levitate-delayed fill-current stroke-0" />
    </div>

    <section class="min-h-[90vh] flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-24 relative z-10">
      
      <div class="w-full md:w-1/2 flex justify-center md:justify-start mb-12 md:mb-0">
        <RouterLink to="/sobre-mi" class="relative group">
          <div class="w-72 h-72 md:w-105 md:h-120 bg-white border-8 border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-all duration-700 group-hover:shadow-none group-hover:translate-x-2 group-hover:translate-y-2">
            <img src="/Img/Contacto/FotoPortafolio.jpg" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>
          <div class="absolute -top-6 -left-6 bg-black text-white inter-bold px-6 py-3 border-4 border-white -rotate-12 uppercase text-lg z-20 group-hover:bg-[#FBCFE8] group-hover:text-black transition-colors shadow-xl">
            Sobre mí →
          </div>
        </RouterLink>
      </div>

      <div class="w-full md:w-1/2 text-black md:pl-10 flex flex-col justify-center">
        <h1 class="text-5xl sm:text-6xl lg:text-[5rem] poppins-bold leading-[0.95] tracking-tighter uppercase mb-4 wrap-break-word">
          PORTAFOLIO <br> 
          CREATIVO <span class="inter-light tracking-normal lowercase text-[0.9em]">2026</span>
        </h1>
        
        <div class="space-y-10 max-w-xl">
          <p class="text-xl md:text-2xl poppins-bold text-[#FBCFE8] uppercase tracking-widest">
            Estudiante de diseño
          </p>
          
          <div class="flex flex-wrap gap-4 pt-4">
            <Button as-child class="rounded-none border-[3px] border-black bg-white text-black hover:bg-[#FBCFE8] hover:text-black transition-all px-8 py-6 poppins-bold uppercase shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
              <RouterLink to="/contacto" class="flex items-center gap-2">
                <MessageCircle :size="20" /> ¡Hablemos!
              </RouterLink>
            </Button>

            <Button as-child variant="outline" class="rounded-none border-[3px] border-black bg-white text-black hover:bg-[#FBCFE8] hover:text-black transition-all px-8 py-6 poppins-bold uppercase shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
              <RouterLink to="/portafolio" class="flex items-center gap-2">
                Ver Trabajos <ArrowRight :size="20" />
              </RouterLink>
            </Button>
          </div>
        </div>
      </div>
    </section>

    <section class="py-40 bg-black text-white relative z-10 overflow-hidden text-center">
      <Star :size="250" class="absolute -top-20 -left-10 text-white/10 animate-spin-slow fill-current stroke-0" />
      <Circle :size="200" class="absolute -bottom-10 right-[5%] text-[#FBCFE8]/10 animate-levitate fill-current stroke-0" />
      
      <div class="container mx-auto px-6 relative z-20">
        <h2 class="text-4xl md:text-7xl poppins-bold uppercase leading-none mb-10 tracking-tighter">
          ¿Tienes alguna idea? <br>
          <span class="inter-light text-[#FBCFE8] lowercase tracking-normal">¡hagámosla realidad!</span>
        </h2>
        
        <Button as-child class="h-20 px-12 bg-[#FBCFE8] text-black inter-bold text-xl rounded-none hover:bg-white transition-all shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]">
          <RouterLink to="/contacto">Escríbeme</RouterLink>
        </Button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.poppins-bold { font-family: "Poppins", sans-serif; font-weight: 800; }
.inter-light { font-family: "Inter", sans-serif; font-weight: 300; }
.inter-bold { font-family: "Inter", sans-serif; font-weight: 800; }


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