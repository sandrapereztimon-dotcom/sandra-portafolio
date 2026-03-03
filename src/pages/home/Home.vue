<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';
import { 
  ArrowRight, Star, Circle, Triangle, Square, ArrowLeft
} from 'lucide-vue-next';

// 1. IMPORTAMOS TU COMPONENTE
import BarraDeNavegacion from '@/components/BarraDeNavegacion.vue';

// Componentes Shadcn/ui
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// --- DATOS ---
const proyectosCarrusel = [
  { id: 1, titulo: 'Campaña 2026', tag: 'Cartelería', color: '#FBCFE8' },
  { id: 2, titulo: 'Sandra Art', tag: 'Ilustración', color: '#000000', textColor: 'text-white' },
  { id: 3, titulo: 'Branding Personal', tag: 'Diseño', color: '#FFFFFF' },
  { id: 4, titulo: 'Motion Graphics', tag: 'Animación', color: '#FBCFE8' },
];

// --- LÓGICA CARRUSEL ---
const apiCarrusel = ref(); 
let intervalo: any = null;

const iniciarAutoplay = () => {
  detenerAutoplay();
  intervalo = setInterval(() => { if (apiCarrusel.value) apiCarrusel.value.scrollNext(); }, 4000);
};

const detenerAutoplay = () => { if (intervalo) clearInterval(intervalo); };

onMounted(() => { iniciarAutoplay(); });
onUnmounted(() => { detenerAutoplay(); });

function setApi(val: any) { apiCarrusel.value = val; }
</script>

<template>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;900&family=Radley:ital,wght@0,400;1,400&display=swap" rel="stylesheet">

  <div class="min-h-screen bg-white text-black overflow-x-hidden selection:bg-[#FBCFE8] poppins-regular relative">
    
    <BarraDeNavegacion />

    <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <Star :size="300" class="absolute -top-20 -right-20 text-[#FBCFE8]/30 animate-spin-slow fill-current stroke-0" />
      <Triangle :size="150" class="absolute top-1/3 left-10 text-black/5 animate-morph fill-current stroke-0" />
      <Circle :size="200" class="absolute bottom-1/4 -right-10 text-[#FBCFE8]/20 animate-bounce-custom fill-current stroke-0" />
      <Square :size="100" class="absolute top-20 left-1/4 text-black/5 rotate-12 fill-current stroke-0" />
      <Star :size="80" class="absolute bottom-10 left-1/2 text-[#FBCFE8]/40 animate-pulse fill-current stroke-0" />
      <Triangle :size="120" class="absolute top-3/4 left-1/4 text-black/5 -rotate-12 fill-current stroke-0" />
    </div>

    <section class="min-h-[90vh] flex flex-col md:flex-row items-center justify-center px-8 md:px-20 py-24 relative z-10">
      
      <div class="w-full md:w-1/2 flex justify-center md:justify-start mb-16 md:mb-0">
        <RouterLink to="/sobre-mi" class="relative group">
          <div class="w-80 h-80 md:w-[500px] md:h-[550px] bg-white border-[10px] border-black shadow-[25px_25px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-all duration-700 group-hover:shadow-none group-hover:translate-x-4 group-hover:translate-y-4">
            <img src="/Img/Contacto/FotoPortafolio.jpg" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>
          <div class="absolute -top-8 -left-8 bg-black text-white poppins-black px-8 py-4 border-8 border-white -rotate-12 uppercase text-xl shadow-lg z-20">
            SOBRE MÍ →
          </div>
        </RouterLink>
      </div>

      <div class="w-full md:w-1/2 text-black md:pl-16 flex flex-col justify-center">
        <h1 class="text-6xl sm:text-7xl lg:text-[8.5rem] poppins-black leading-[0.85] tracking-tighter uppercase break-words">
          DISEÑO E <br> 
          <span class="radley-regular-italic lowercase text-[0.8em] tracking-normal block md:inline">Ilustración.</span>
        </h1>
        
        <div class="mt-10 space-y-8 max-w-xl">
          <p class="text-xl md:text-2xl poppins-regular text-black/80 leading-snug">
            Creamos piezas visuales únicas. Especializada en <span class="radley-regular-italic">Motion Graphics</span> y Branding.
          </p>
          <Button as-child class="rounded-none border-4 border-black bg-black text-white hover:bg-white hover:text-black transition-all px-10 py-8 poppins-black uppercase tracking-tighter text-lg shadow-[8px_8px_0px_0px_rgba(242,207,232,1)]">
            <RouterLink to="/contacto">¡Hablemos!</RouterLink>
          </Button>
        </div>
      </div>
    </section>

    <section class="py-32 bg-white/50 backdrop-blur-sm relative z-10">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-end mb-20 border-b-4 border-black pb-10 gap-8">
          <div class="flex flex-col">
            <span class="radley-regular-italic text-2xl mb-2 opacity-60">Selección 2026</span>
            <h2 class="text-7xl md:text-9xl poppins-black tracking-tighter uppercase italic leading-none">Work.</h2>
          </div>
          
          <div class="flex gap-4">
            <button @click="apiCarrusel?.scrollPrev()" class="p-4 border-4 border-black hover:bg-[#FBCFE8] transition-colors bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1">
              <ArrowLeft :size="32" />
            </button>
            <button @click="apiCarrusel?.scrollNext()" class="p-4 border-4 border-black hover:bg-[#FBCFE8] transition-colors bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1">
              <ArrowRight :size="32" />
            </button>
          </div>
        </div>
        
        <Carousel @init-api="setApi" class="w-full" :opts="{ loop: true }" @mouseenter="detenerAutoplay" @mouseleave="iniciarAutoplay">
          <CarouselContent class="-ml-10">
            <CarouselItem v-for="pro in proyectosCarrusel" :key="pro.id" class="pl-10 md:basis-1/2 lg:basis-1/3">
              <Card class="rounded-none border-4 border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group overflow-hidden">
                <CardContent class="aspect-[4/5] p-0 flex flex-col">
                  <div :style="{ backgroundColor: pro.color }" class="flex-1 flex items-center justify-center relative">
                    <span class="poppins-black text-9xl opacity-10 group-hover:scale-125 transition-transform duration-700 uppercase" :class="pro.textColor || 'text-black'">{{ pro.tag[0] }}</span>
                  </div>
                  <div class="p-8 border-t-4 border-black bg-white">
                    <h3 class="poppins-black uppercase text-3xl leading-none">{{ pro.titulo }}</h3>
                    <p class="radley-regular-italic mt-2 text-xl opacity-60">{{ pro.tag }}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>

    <section class="py-40 bg-black text-white relative z-10 overflow-hidden text-center">
      <Star :size="400" class="absolute -bottom-20 -left-20 text-white/5 animate-spin-slow fill-current stroke-0" />
      
      <div class="container mx-auto px-6 relative z-20">
        <h2 class="text-5xl md:text-8xl poppins-black uppercase leading-none mb-10 tracking-tighter">
          ¿Tienes alguna idea <br> en mente? <br>
          <span class="radley-regular-italic text-[#FBCFE8] lowercase tracking-normal">¡hagámosla realidad!</span>
        </h2>
        <p class="text-xl md:text-2xl radley-regular opacity-70 mb-16 max-w-2xl mx-auto">
          Estoy disponible para nuevos proyectos y colaboraciones creativas.
        </p>
        <Button as-child class="h-24 px-16 bg-[#FBCFE8] text-black poppins-black text-2xl rounded-none hover:bg-white transition-all shadow-[10px_10px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-none">
          <RouterLink to="/contacto">Escríbeme_</RouterLink>
        </Button>
      </div>
    </section>

    <div class="py-12 bg-[#FBCFE8] border-t-4 border-black z-10 relative">
      <div class="flex gap-24 poppins-black text-5xl uppercase animate-marquee whitespace-nowrap text-black tracking-wider">
        <span v-for="n in 4" :key="n" class="flex items-center gap-10">
          SANDRA PÉREZ <Circle :size="20" class="fill-current" /> <span class="radley-regular-italic lowercase tracking-normal">creative studio</span> <Star :size="30" class="fill-current" /> 2026
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.poppins-regular { font-family: "Poppins", sans-serif; font-weight: 400; }
.poppins-black { font-family: "Poppins", sans-serif; font-weight: 900; }
.radley-regular { font-family: "Radley", serif; font-weight: 400; }
.radley-regular-italic { font-family: "Radley", serif; font-weight: 400; font-style: italic; }

@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
@keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes bounce-custom { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-30px); } }
@keyframes morph { 0%, 100% { transform: scale(1) rotate(0); } 50% { transform: scale(1.1) rotate(5deg); } }

.animate-marquee { animation: marquee 30s linear infinite; }
.animate-spin-slow { animation: spin-slow 25s linear infinite; }
.animate-bounce-custom { animation: bounce-custom 10s ease-in-out infinite; }
.animate-morph { animation: morph 12s ease-in-out infinite; }

h1 { overflow-wrap: break-word; }

::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-track { background: white; }
::-webkit-scrollbar-thumb { background: black; }
</style>