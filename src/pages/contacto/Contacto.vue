<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { Button } from '@/components/ui/button';
import { Mail, Instagram, Linkedin, ArrowLeft, Send, Star, Circle } from 'lucide-vue-next';
import BarraDeNavegacion from '@/components/BarraDeNavegacion.vue';

const formulario = ref({ nombre: '', email: '', mensaje: '' });
const enviado = ref(false);

const enviarFormulario = () => {
  enviado.value = true;
  setTimeout(() => {
    enviado.value = false;
    formulario.value = { nombre: '', email: '', mensaje: '' };
  }, 4000);
};

const redes = [
  { nombre: 'Instagram', url: '#', icon: Instagram },
  { nombre: 'LinkedIn', url: '#', icon: Linkedin },
  { nombre: 'Email', url: 'mailto:sandra@ejemplo.com', icon: Mail }
];
</script>

<template>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;900&display=swap" rel="stylesheet">

  <div class="min-h-screen bg-black text-white font-poppins selection:bg-[#FBCFE8] selection:text-black relative overflow-hidden">
    
    <BarraDeNavegacion />

    <div class="fixed inset-0 pointer-events-none z-0">
      <Star :size="400" class="absolute -bottom-20 -right-20 text-[#FBCFE8]/10 animate-spin-slow fill-current stroke-0" />
      <Circle :size="150" class="absolute top-1/4 -left-10 text-white/5 fill-current stroke-0" />
    </div>

    <main class="max-w-6xl mx-auto px-6 py-12 md:py-20 relative z-10 flex flex-col items-center">
      
      <RouterLink to="/" class="self-start mb-12 flex items-center gap-2 font-black uppercase hover:-translate-x-1 transition-all bg-[#FBCFE8] text-black px-6 py-3 border-4 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] active:shadow-none active:translate-x-1 active:translate-y-1">
        <ArrowLeft :size="20" /> Volver
      </RouterLink>

      <div class="w-full bg-white text-black border-[6px] border-[#FBCFE8] shadow-[20px_20px_0px_0px_rgba(251,207,232,0.3)] p-8 md:p-16">
        <h2 class="text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-12">
          ¿TRABAJAMOS <br> <span class="bg-black text-[#FBCFE8] px-4 italic">JUNTOS?</span>
        </h2>

        <div class="grid lg:grid-cols-2 gap-16">
          
          <form @submit.prevent="enviarFormulario" class="space-y-8 text-black">
            <div class="space-y-3">
              <label class="font-black uppercase text-sm tracking-widest italic">Tu Nombre</label>
              <input 
                v-model="formulario.nombre" 
                type="text" 
                required
                class="w-full border-4 border-black p-5 focus:bg-[#FBCFE8] transition-colors outline-none font-bold shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-lg" 
                placeholder="Sandra Pérez..." 
              />
            </div>

            <div class="space-y-3">
              <label class="font-black uppercase text-sm tracking-widest italic">Tu Email</label>
              <input 
                v-model="formulario.email" 
                type="email" 
                required
                class="w-full border-4 border-black p-5 focus:bg-[#FBCFE8] transition-colors outline-none font-bold shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-lg" 
                placeholder="hola@tuemail.com" 
              />
            </div>

            <div class="space-y-3">
              <label class="font-black uppercase text-sm tracking-widest italic">¿Qué tienes en mente?</label>
              <textarea 
                v-model="formulario.mensaje" 
                rows="4" 
                required
                class="w-full border-4 border-black p-5 focus:bg-[#FBCFE8] transition-colors outline-none font-bold shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-lg" 
                placeholder="Cuéntame tu proyecto..."
              ></textarea>
            </div>

            <Button 
              type="submit" 
              class="w-full h-20 bg-black text-white text-2xl font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FBCFE8] hover:text-black transition-all active:translate-y-2 active:shadow-none"
            >
              <Send class="mr-3" /> Enviar Mensaje_
            </Button>

            <transition name="fade">
              <p v-if="enviado" class="text-center font-black uppercase text-black bg-[#FBCFE8] py-4 border-4 border-black">
                ¡Recibido! Te responderé pronto.
              </p>
            </transition>
          </form>

          <div class="flex flex-col text-black">
            <div class="bg-black text-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(251,207,232,1)] mb-12">
               <p class="text-2xl font-bold italic leading-tight">
                "Si tienes un proyecto en mente o simplemente quieres decir hola, ¡no dudes en escribirme!"
              </p>
            </div>

            <div class="space-y-4">
              <h3 class="font-black uppercase text-xl mb-6 flex items-center gap-2">
                O búscame en:
              </h3>
              <div class="grid grid-cols-1 gap-4">
                <a v-for="red in redes" :key="red.nombre" :href="red.url" 
                  class="flex items-center gap-4 p-5 bg-white border-4 border-black font-black uppercase hover:bg-[#FBCFE8] transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group">
                  <component :is="red.icon" :size="28" class="group-hover:scale-110 transition-transform" /> 
                  <span class="text-lg">{{ red.nombre }}</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.font-poppins { font-family: 'Poppins', sans-serif; }

@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-spin-slow {
  animation: spin-slow 25s linear infinite;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

input::placeholder, textarea::placeholder {
  color: rgba(0,0,0,0.3);
  font-style: italic;
}
</style>