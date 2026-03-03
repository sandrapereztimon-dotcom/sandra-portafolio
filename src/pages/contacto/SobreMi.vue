<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ArrowLeft, GraduationCap, Heart, Sparkles, Star } from 'lucide-vue-next';
// Importación corregida de tu componente
import BarraDeNavegacion from '@/components/BarraDeNavegacion.vue'; 
</script>

<template>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;900&display=swap" rel="stylesheet">

  <div class="min-h-screen bg-white text-black font-poppins overflow-hidden relative">
    
    <BarraDeNavegacion />

    <div class="fixed inset-0 pointer-events-none z-0">
      <Star :size="300" class="absolute -top-20 -right-20 text-[#FBCFE8]/30 animate-spin-slow fill-current stroke-0" />
      <div class="absolute bottom-1/4 -left-10 w-40 h-40 bg-[#FBCFE8]/20 rounded-full animate-pulse"></div>
    </div>

    <div class="max-w-6xl mx-auto px-6 py-12 md:py-20 relative z-10">
      
      <RouterLink to="/" class="inline-flex items-center gap-2 font-black uppercase mb-12 hover:-translate-x-1 transition-all bg-[#FBCFE8] px-6 py-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1">
        <ArrowLeft :size="20" /> Inicio
      </RouterLink>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <div class="lg:col-span-5 flex justify-center">
          <div class="relative animate-drop-in">
            <div class="w-72 h-96 md:w-[400px] md:h-[500px] bg-white border-[8px] border-black shadow-[20px_20px_0px_0px_rgba(251,207,232,1)] overflow-hidden">
              <img 
                src="/Img/Contacto/FotoPortafolio.jpg" 
                alt="Sandra Pérez" 
                class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            <div class="absolute -top-6 -left-6 bg-[#60D394] border-4 border-black p-3 rotate-12 animate-bounce-slow shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Sparkles :size="32" class="text-black" />
            </div>

            <div class="absolute -bottom-6 -right-6 bg-black border-4 border-white px-8 py-4 font-black text-white -rotate-3 uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-xl">
              Sandra Pérez
            </div>
          </div>
        </div>

        <div class="lg:col-span-7 space-y-10 animate-fade-in-up">
          <h1 class="text-7xl md:text-[10rem] font-black uppercase leading-[0.75] tracking-tighter italic">
            HOLA<span class="text-[#FBCFE8] not-italic">!</span><br>
            <span class="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">SOY YO_</span>
          </h1>
          
          <div class="bg-white border-4 border-black p-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative">
            <p class="text-2xl font-bold leading-tight mb-8">
              ¡Hola! Soy Sandra, diseñadora e ilustradora. Me especializo en crear contenido visual que no pase desapercibido, mezclando lo digital con lo artesanal.
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t-4 border-black">
              <div class="space-y-3">
                <h3 class="font-black uppercase flex items-center gap-2 text-xl">
                  <GraduationCap class="text-[#FBCFE8] fill-black" /> Formación
                </h3>
                <p class="font-bold">Diseño y Artes Plásticas</p>
                <p class="bg-black text-white inline-block px-3 py-1 text-xs font-black tracking-widest uppercase">2024 - 2026</p>
              </div>
              <div class="space-y-3">
                <h3 class="font-black uppercase flex items-center gap-2 text-xl">
                  <Heart class="text-[#FBCFE8] fill-black" /> Intereses
                </h3>
                <p class="font-bold">Ilustración, UI/UX, Animación 2D</p>
              </div>
            </div>
          </div>

          <div class="inline-block bg-[#FBCFE8] text-black font-black px-8 py-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] uppercase italic text-xl">
            "Diseñando el futuro, un píxel a la vez"
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.font-poppins { font-family: 'Poppins', sans-serif; }

/* Animación de entrada de la foto */
@keyframes dropIn {
  0% { transform: translateY(-150px) rotate(-10deg); opacity: 0; }
  100% { transform: translateY(0) rotate(0deg); opacity: 1; }
}

/* Animación de subida del texto */
@keyframes fadeInUp {
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes bounceSlow {
  0%, 100% { transform: translateY(0) rotate(12deg); }
  50% { transform: translateY(-15px) rotate(15deg); }
}

@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-drop-in {
  animation: dropIn 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out 0.5s both;
}

.animate-bounce-slow {
  animation: bounceSlow 4s infinite ease-in-out;
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}
</style>