<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ArrowLeft, GraduationCap, Heart, Sparkles } from 'lucide-vue-next';
// Asegúrate de que esta ruta sea la correcta en tu proyecto
import BarraDeNavegacion from '@/components/ui/navigation-menu/NavigationMenu.vue'; 
</script>

<template>
  <div class="min-h-screen bg-[#FFD97D] p-6 md:p-12 lg:p-20 font-poppins text-black overflow-hidden">
    
    <div class="max-w-5xl mx-auto">
      <RouterLink to="/" class="inline-flex items-center gap-2 font-black uppercase mb-12 hover:-translate-x-1 transition-all bg-white px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <ArrowLeft :size="20" /> Volver al inicio
      </RouterLink>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <div class="lg:col-span-4 flex flex-col items-center">
          <div class="relative animate-drop-in">
            <div class="w-64 h-80 bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
              <img 
                src="/Img/Contacto/FotoPortafolio.jpg" 
                alt="Sandra Pérez" 
                class="w-full h-full object-cover"
              />
            </div>
            
            <div class="absolute -top-4 -left-4 bg-[#60D394] border-4 border-black p-2 rotate-12 animate-bounce-slow">
              <Sparkles class="text-black" />
            </div>

            <div class="absolute -bottom-4 -right-4 bg-[#EE6055] border-4 border-black px-6 py-2 font-black text-white -rotate-3 uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Sandra Pérez
            </div>
          </div>
        </div>

        <div class="lg:col-span-8 space-y-8 animate-fade-in-up">
          <h1 class="text-6xl md:text-8xl font-black uppercase leading-[0.8] tracking-tighter">
            SOBRE <span class="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">MÍ_</span>
          </h1>
          
          <div class="bg-white border-4 border-black p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
            <p class="text-xl font-bold leading-tight mb-6">
              ¡Hola! Soy Sandra, diseñadora e ilustradora. Me especializo en crear contenido visual que no pase desapercibido.
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t-4 border-black/10">
              <div class="space-y-2">
                <h3 class="font-black uppercase flex items-center gap-2 text-[#EE6055]">
                  <GraduationCap /> Formación
                </h3>
                <p class="font-bold text-sm">Diseño y Artes Plásticas</p>
                <p class="opacity-60 text-xs uppercase font-black tracking-widest">2024 - 2026</p>
              </div>
              <div class="space-y-2">
                <h3 class="font-black uppercase flex items-center gap-2 text-[#60D394]">
                  <Heart /> Intereses
                </h3>
                <p class="font-bold text-sm">Ilustración, UI/UX, Animación</p>
              </div>
            </div>
          </div>

          <div class="inline-block bg-black text-white font-black px-6 py-3 border-4 border-black shadow-[6px_6px_0px_0px_rgba(96,211,148,1)] uppercase italic">
            "Diseñando el futuro, un píxel a la vez"
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;900&display=swap');
.font-poppins { font-family: 'Poppins', sans-serif; }

/* Animación para que la foto caiga desde arriba */
@keyframes dropIn {
  0% {
    transform: translateY(-200px) rotate(-10deg);
    opacity: 0;
  }
  60% {
    transform: translateY(20px) rotate(5deg);
  }
  100% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
}

/* Animación para el contenido */
@keyframes fadeInUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes bounceSlow {
  0%, 100% { transform: translateY(0) rotate(12deg); }
  50% { transform: translateY(-10px) rotate(15deg); }
}

.animate-drop-in {
  animation: dropIn 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out 0.3s both;
}

.animate-bounce-slow {
  animation: bounceSlow 3s infinite ease-in-out;
}
</style>