<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { Button } from '@/components/ui/button';
import { Mail, Instagram, Linkedin, ArrowLeft, Send } from 'lucide-vue-next';

const formulario = ref({ nombre: '', email: '', mensaje: '' });
const enviado = ref(false);

const enviarFormulario = () => {
  enviado.value = true;
  setTimeout(() => enviado.value = false, 4000);
};

const redes = [
  { nombre: 'Instagram', url: '#', icon: Instagram },
  { nombre: 'LinkedIn', url: '#', icon: Linkedin },
  { nombre: 'Email', url: 'mailto:sandra@ejemplo.com', icon: Mail }
];
</script>

<template>
  <div class="min-h-screen bg-[#60D394] p-6 md:p-12 lg:p-20 flex flex-col items-center justify-center font-poppins text-black">
    
    <RouterLink to="/" class="self-start mb-8 flex items-center gap-2 font-black uppercase hover:-translate-x-1.25 transition-all">
      <ArrowLeft :size="20" /> Volver
    </RouterLink>

    <div class="w-full max-w-4xl bg-white border-8 border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] p-8 md:p-16">
      <h2 class="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter mb-10">
        ¿TRABAJAMOS <span class="text-[#EE6055]">JUNTOS</span>?
      </h2>

      <div class="grid lg:grid-cols-2 gap-12">
        <form @submit.prevent="enviarFormulario" class="space-y-6">
          <div class="space-y-2">
            <label class="font-black uppercase text-xs italic">Nombre</label>
            <input v-model="formulario.nombre" type="text" class="w-full border-4 border-black p-4 focus:bg-[#FFD97D] outline-none font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" placeholder="Tu nombre..." />
          </div>
          <div class="space-y-2">
            <label class="font-black uppercase text-xs italic">Email</label>
            <input v-model="formulario.email" type="email" class="w-full border-4 border-black p-4 focus:bg-[#FFD97D] outline-none font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" placeholder="tu@email.com" />
          </div>
          <div class="space-y-2">
            <label class="font-black uppercase text-xs italic">Mensaje</label>
            <textarea v-model="formulario.mensaje" rows="4" class="w-full border-4 border-black p-4 focus:bg-[#FFD97D] outline-none font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" placeholder="Tu idea..."></textarea>
          </div>
          <Button type="submit" class="w-full h-16 bg-black text-white text-xl font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(238,96,85,1)] hover:bg-[#EE6055] transition-all active:translate-y-1">
            <Send class="mr-2" /> Enviar
          </Button>
          <p v-if="enviado" class="text-center font-black uppercase text-[#EE6055]">¡Mensaje enviado!</p>
        </form>

        <div class="flex flex-col justify-between">
          <p class="text-xl font-bold italic mb-8">
            Si tienes un proyecto en mente o simplemente quieres decir hola, ¡no dudes en escribirme!
          </p>
          <div class="grid grid-cols-1 gap-4">
            <a v-for="red in redes" :key="red.nombre" :href="red.url" 
              class="flex items-center gap-4 p-4 bg-white border-4 border-black font-black uppercase hover:bg-black hover:text-white transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <component :is="red.icon" :size="24" /> {{ red.nombre }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>