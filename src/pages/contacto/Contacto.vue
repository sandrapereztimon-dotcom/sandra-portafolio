<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Mail, Instagram, Send, Star, Circle, Triangle } from 'lucide-vue-next';
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


const handleInstagramClick = (e: Event) => {
  e.preventDefault(); 
  alert("¡Próximamente disponible!");
};

const redes = [
  { 
    nombre: 'Instagram', 
    url: '#', 
    icon: Instagram, 
    action: handleInstagramClick 
  },
  { 
    nombre: 'Email', 
    url: 'mailto:sandra@ejemplo.com', 
    icon: Mail, 
    action: null 
  }
];
</script>

<template>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&family=Poppins:wght@800&display=swap" rel="stylesheet">

  <div class="min-h-screen bg-black text-white selection:bg-[#FBCFE8] selection:text-black relative overflow-hidden [&_nav_a]:text-black! [&_a]:no-underline">
    
    <BarraDeNavegacion />

    <div class="fixed inset-0 pointer-events-none z-0">
      <Star :size="400" class="absolute -bottom-20 -right-20 text-[#FBCFE8]/10 animate-spin-very-slow fill-current stroke-0" />
      <Circle :size="250" class="absolute top-1/4 -left-20 text-white/5 animate-levitate fill-current stroke-0" />
      <Triangle :size="300" class="absolute top-10 right-10 text-[#FBCFE8]/10 animate-spin-slow fill-current stroke-0" />
    </div>

    <main class="max-w-6xl mx-auto px-6 py-20 md:py-32 relative z-10 flex flex-col items-center">
      
      <div class="w-full bg-white text-black border-[6px] border-[#FBCFE8] shadow-[20px_20px_0px_0px_rgba(251,207,232,0.15)] p-8 md:p-16">
        
        <h2 class="text-4xl sm:text-5xl md:text-7xl poppins-bold uppercase leading-none tracking-tighter mb-16 text-[#FBCFE8]">
          ¿TRABAJAMOS JUNTOS?
        </h2>

        <div class="grid lg:grid-cols-2 gap-16">
          
          <form @submit.prevent="enviarFormulario" class="space-y-8">
            <div class="space-y-3">
              <label class="inter-bold uppercase text-xs tracking-widest">Tu Nombre</label>
              <input 
                v-model="formulario.nombre" 
                type="text" 
                required
                class="w-full border-4 border-black p-5 focus:bg-[#FBCFE8] transition-colors outline-none inter-regular shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-lg" 
                placeholder="Escribe tu nombre..." 
              />
            </div>

            <div class="space-y-3">
              <label class="inter-bold uppercase text-xs tracking-widest">Tu Email</label>
              <input 
                v-model="formulario.email" 
                type="email" 
                required
                class="w-full border-4 border-black p-5 focus:bg-[#FBCFE8] transition-colors outline-none inter-regular shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-lg" 
                placeholder="hola@tuemail.com" 
              />
            </div>

            <div class="space-y-3">
              <label class="inter-bold uppercase text-xs tracking-widest">¿Qué tienes en mente?</label>
              <textarea 
                v-model="formulario.mensaje" 
                rows="4" 
                required
                class="w-full border-4 border-black p-5 focus:bg-[#FBCFE8] transition-colors outline-none inter-regular shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-lg" 
                placeholder="Cuéntame tu proyecto..."
              ></textarea>
            </div>

            <Button 
              type="submit" 
              class="w-full h-20 bg-black text-white text-2xl poppins-bold uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FBCFE8] hover:text-black transition-all active:translate-y-2 active:shadow-none"
            >
              <Send class="mr-3" /> Enviar
            </Button>

            <transition name="fade">
              <p v-if="enviado" class="text-center poppins-bold uppercase text-black bg-[#FBCFE8] py-4 border-4 border-black">
                ¡Recibido! Te responderé pronto.
              </p>
            </transition>
          </form>

          <div class="flex flex-col">
            <div class="bg-black text-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(251,207,232,1)] mb-12">
               <p class="text-lg md:text-xl inter-regular leading-snug">
                Si tienes un proyecto en mente, ¡no dudes en escribirme!
              </p>
            </div>

            <div class="space-y-4">
              <h3 class="poppins-bold uppercase text-lg mb-6 text-black">O búscame en:</h3>
              <div class="grid grid-cols-1 gap-4">
                <a 
                  v-for="red in redes" 
                  :key="red.nombre" 
                  :href="red.url" 
                  @click="red.action ? red.action($event) : null"
                  class="flex items-center gap-4 p-5 bg-white border-4 border-black poppins-bold text-black uppercase hover:bg-[#FBCFE8] transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group"
                >
                  <component :is="red.icon" :size="28" class="group-hover:rotate-12 transition-transform" /> 
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

.poppins-bold { font-family: 'Poppins', sans-serif; font-weight: 800; }
.inter-regular { font-family: 'Inter', sans-serif; font-weight: 400; }
.inter-bold { font-family: 'Inter', sans-serif; font-weight: 700; }


@keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes spin-very-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes levitate {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-30px); }
}

.animate-spin-slow { animation: spin-slow 20s linear infinite; }
.animate-spin-very-slow { animation: spin-very-slow 40s linear infinite; }
.animate-levitate { animation: levitate 10s ease-in-out infinite; }


.fade-enter-active, .fade-leave-active { transition: opacity 0.5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>