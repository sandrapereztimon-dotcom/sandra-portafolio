<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ArrowLeft, GraduationCap, Code2, Heart } from 'lucide-vue-next';
import BarraDeNavegacion from '@/components/BarraDeNavegacion.vue'; // Asegúrate de que esta ruta sea correcta
</script>

<template>
  <BarraDeNavegacion />
  <div class="min-h-screen bg-[#FFD97D] p-6 md:p-12 lg:p-20 font-poppins text-black">
    
    <div class="max-w-5xl mx-auto">
      <RouterLink to="/" class="inline-flex items-center gap-2 font-black uppercase mb-12 hover:-translate-x-1 transition-all bg-white px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <ArrowLeft :size="20" /> Volver al inicio
      </RouterLink>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div class="lg:col-span-4 flex flex-col items-center">
          <div class="relative">
            <div class="w-64 h-64 bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-center p-4">
               <span class="font-black uppercase italic">Tu Foto Aquí</span>
            </div>
            <div class="absolute -bottom-4 -right-4 bg-[#EE6055] border-4 border-black px-6 py-2 font-black text-white rotate-3 uppercase">
              Sandra Pérez
            </div>
          </div>
        </div>

        <div class="lg:col-span-8 space-y-8">
          <h1 class="text-6xl md:text-8xl font-black uppercase leading-[0.8] tracking-tighter">
            SOBRE <span class="text-white decoration-black">MÍ_</span>
          </h1>
          
          <div class="bg-white border-4 border-black p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
            <p class="text-xl font-bold leading-tight mb-6">
              ¡Hola! Soy Sandra, diseñadora e ilustradora. Me especializo en crear contenido visual que no pase desapercibido.
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t-4 border-black/10">
              <div>
                <h3 class="font-black uppercase flex items-center gap-2 mb-3">
                  <GraduationCap /> Formación
                </h3>
                <p class="font-bold text-sm">Diseño y Artes Plásticas</p>
                <p class="opacity-60 text-xs uppercase font-black">2024 - 2026</p>
              </div>
              <div>
                <h3 class="font-black uppercase flex items-center gap-2 mb-3">
                  <Heart /> Intereses
                </h3>
                <p class="font-bold text-sm">Ilustración, UI/UX, Animación</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;900&display=swap');
.font-poppins { font-family: 'Poppins', sans-serif; }
</style>