<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { 
  Mail, 
  Instagram, 
  Linkedin, 
  ArrowLeft, 
  GraduationCap, 
  Code2, 
  Send 
} from 'lucide-vue-next';

// --- 1. DATOS EMBEBIDOS Y TYPESCRIPT (Requisito: Gestión de contenido) ---
interface Estudio {
  titulo: string;
  centro: string;
  año: string;
}

interface RedSocial {
  nombre: string;
  url: string;
  icon: any;
}

const estudios: Estudio[] = [
  { titulo: "Grado en Diseño", centro: "Escuela de Arte", año: "2024 - 2026" },
  { titulo: "Bachillerato Artístico", centro: "IES Creativo", año: "2022 - 2024" }
];

const habilidades: string[] = [
  "Ilustración Digital", 
  "Animación 2D", 
  "UI/UX Design", 
  "Vue.js & TypeScript",
  "Tailwind CSS"
];

const redes: RedSocial[] = [
  { nombre: 'Instagram', url: '#', icon: Instagram },
  { nombre: 'LinkedIn', url: '#', icon: Linkedin },
  { nombre: 'Email', url: 'mailto:sandra@ejemplo.com', icon: Mail }
];

// --- 2. LOGICA REACTIVA (Requisito: Variables reactivas y TypeScript) ---
const formulario = ref({
  nombre: '',
  email: '',
  mensaje: ''
});

const enviado = ref(false);

const enviarFormulario = () => {
  // Manejo de eventos para el control de acciones
  console.log('Formulario enviado:', formulario.value);
  enviado.value = true;
  
  setTimeout(() => {
    enviado.value = false;
    formulario.value = { nombre: '', email: '', mensaje: '' };
  }, 4000);
};
</script>

<template>
  <div class="min-h-screen bg-[#60D394] p-6 md:p-12 lg:p-20 flex flex-col items-center justify-center font-poppins text-black">
    
    <RouterLink to="/" class="self-start mb-8 flex items-center gap-2 font-black uppercase hover:translate-x-[-5px] transition-all">
      <ArrowLeft :size="20" /> Volver al inicio
    </RouterLink>

    <Card class="w-full max-w-6xl border-4 border-black bg-white shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] rounded-none overflow-hidden">
      <div class="flex flex-col lg:flex-row">
        
        <div class="lg:w-5/12 bg-[#FFD97D] border-b-4 lg:border-b-0 lg:border-r-4 border-black p-8 md:p-12">
          <div class="space-y-8">
            
            <div class="flex flex-col items-center">
              <div class="relative">
                <div class="w-48 h-48 md:w-64 md:h-64 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-2xl flex items-center justify-center text-center p-4">
                  <span class="font-black uppercase text-sm italic">Foto<br>Sandra Pérez</span>
                </div>
                <div class="absolute -bottom-3 -right-3 bg-[#EE6055] border-4 border-black px-4 py-1 font-black text-white rotate-3 uppercase text-xs">
                  Estudiante
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <h3 class="flex items-center gap-2 font-black uppercase text-xl border-b-2 border-black pb-1">
                <GraduationCap :size="24" /> Formación
              </h3>
              <div v-for="(item, index) in estudios" :key="index">
                <p class="font-black text-lg leading-tight">{{ item.titulo }}</p>
                <p class="font-bold opacity-70 text-sm">{{ item.centro }} | {{ item.año }}</p>
              </div>
            </div>

            <div class="space-y-4">
              <h3 class="flex items-center gap-2 font-black uppercase text-xl border-b-2 border-black pb-1">
                <Code2 :size="24" /> Habilidades
              </h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="skill in habilidades" :key="skill" 
                  class="bg-black text-white px-3 py-1 text-[10px] font-black uppercase border-2 border-black">
                  {{ skill }}
                </span>
              </div>
            </div>

            <div class="flex justify-center gap-4 pt-4">
              <a v-for="red in redes" :key="red.nombre" :href="red.url" 
                class="p-3 bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-all hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <component :is="red.icon" :size="24" />
              </a>
            </div>
          </div>
        </div>

        <div class="lg:w-7/12 p-8 md:p-12">
          <CardHeader class="p-0 mb-10">
            <CardTitle class="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter">
              DIME <span class="text-[#EE6055]">HOLA</span>.
            </CardTitle>
          </CardHeader>

          <CardContent class="p-0">
            <form @submit.prevent="enviarFormulario" class="space-y-6">
              <div class="space-y-2">
                <label class="font-black uppercase text-xs">Nombre completo</label>
                <input v-model="formulario.nombre" type="text" required 
                  class="w-full border-4 border-black p-4 focus:bg-[#FFD97D] outline-none font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" 
                  placeholder="Tu nombre..." />
              </div>

              <div class="space-y-2">
                <label class="font-black uppercase text-xs">Tu Email</label>
                <input v-model="formulario.email" type="email" required 
                  class="w-full border-4 border-black p-4 focus:bg-[#FFD97D] outline-none font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" 
                  placeholder="tu@email.com" />
              </div>

              <div class="space-y-2">
                <label class="font-black uppercase text-xs">Mensaje</label>
                <textarea v-model="formulario.mensaje" rows="4" required 
                  class="w-full border-4 border-black p-4 focus:bg-[#FFD97D] outline-none font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" 
                  placeholder="Escribe aquí..."></textarea>
              </div>

              <Button type="submit" 
                class="w-full h-16 bg-black text-white text-xl font-black uppercase hover:bg-[#EE6055] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all rounded-none">
                <Send class="mr-2" :size="24" /> Enviar Mensaje
              </Button>

              <p v-if="enviado" class="text-center font-black uppercase text-[#EE6055] animate-pulse">
                ¡Recibido! Me pondré en contacto pronto.
              </p>
            </form>
          </CardContent>
        </div>
      </div>
    </Card>
  </div>
</template>

<style scoped>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>