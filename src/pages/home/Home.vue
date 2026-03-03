<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';
import { 
  ArrowRight, Sparkles, Instagram, Linkedin, Mail, Send, Star, Circle, Triangle
} from 'lucide-vue-next';

// Componentes Shadcn/ui
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// --- DATOS (Paleta Blanco/Rosa/Negro) ---
const proyectosCarrusel = [
  { id: 1, titulo: 'Campaña 2026', tag: 'Cartelería', color: '#FBCFE8' }, // Rosa claro
  { id: 2, titulo: 'Sandra Art', tag: 'Ilustración', color: '#000000' },   // Negro
  { id: 3, titulo: 'Branding Personal', tag: 'Diseño', color: '#FFFFFF' }, // Blanco
  { id: 4, titulo: 'Motion Graphics', tag: 'Animación', color: '#FBCFE8' },
];

// --- LÓGICA CARRUSEL ---
const apiCarrusel = ref(); 
let intervalo: any = null;
const iniciarAutoplay = () => {
  detenerAutoplay();
  intervalo = setInterval(() => { if (apiCarrusel.value) apiCarrusel.value.scrollNext(); }, 3000);
};
const detenerAutoplay = () => { if (intervalo) clearInterval(intervalo); };
onMounted(() => { iniciarAutoplay(); });
onUnmounted(() => { detenerAutoplay(); });

function setApi(val: any) { apiCarrusel.value = val; }
</script>

<template>
  <div class="min-h-screen font-poppins bg-white text-black overflow-x-hidden selection:bg-[#FBCFE8] selection:text-black">
    
    <nav class="w-full p-8 flex justify-between items-center bg-white sticky top-0 z-50">
      <div class="font-black text-2xl tracking-tighter">sandra.perez</div>
      <NavigationMenu>
        <NavigationMenuList class="gap-8">
          <NavigationMenuItem v-for="link in ['Home', 'About', 'Portfolio', 'Contact']" :key="link">
            <NavigationMenuLink as-child :class="navigationMenuTriggerStyle()" class="font-bold text-sm border-b-2 border-transparent hover:border-black transition-all bg-transparent uppercase tracking-widest">
              <RouterLink :to="link === 'Home' ? '/' : `/${link.toLowerCase()}`">{{ link }}</RouterLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>

    <section class="bg-[#FBCFE8] min-h-[85vh] flex flex-col md:flex-row items-center justify-center px-8 md:px-20 py-24 relative overflow-hidden overflow-y-hidden">
      <Star :size="250" class="absolute -top-10 -right-10 text-white animate-spin-slow stroke-0 fill-current opacity-50 z-0" />
      <Circle :size="150" class="absolute bottom-10 left-1/2 text-black animate-bounce-custom stroke-0 fill-current opacity-5 z-0" />

      <div class="w-full md:w-1/2 flex justify-center md:justify-start relative z-10 mb-16 md:mb-0">
        <RouterLink to="/sobre-mi" class="relative group">
          <div class="w-80 h-80 md:w-[500px] md:h-[500px] bg-white border-[10px] border-black shadow-[25px_25px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-all duration-500 group-hover:shadow-none group-hover:translate-x-5 group-hover:translate-y-5">
            <img 
              src="/Img/Contacto/FotoPortafolio.jpg" 
              alt="Sandra Pérez - Haz clic para saber más" 
              class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div class="absolute bottom-0 left-0 w-full bg-black py-3 overflow-hidden">
               <div class="animate-marquee-fast whitespace-nowrap text-white font-black uppercase text-xs tracking-widest">
                 SANDRA PÉREZ • CREATIVE VISUALS • MOTION DESIGN • 2026 • 
               </div>
            </div>
          </div>
          <div class="absolute -top-8 -left-8 bg-black text-white font-black px-8 py-4 border-8 border-white -rotate-12 uppercase text-xl shadow-[10px_10px_0px_0px_rgba(255,255,255,1)]">
            SOBRE MÍ →
          </div>
        </RouterLink>
      </div>

      <div class="w-full md:w-1/2 space-y-12 z-10 text-black md:pl-16">
        <h1 class="text-8xl md:text-[11rem] font-black leading-[0.8] tracking-tighter text-black">
          Strategic <br> creative.
        </h1>
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <p class="text-2xl md:text-3xl font-medium max-w-lg text-black/80 leading-tight">
            Design + motion services <br> to grow your brand.
          </p>
          <Button as-child class="rounded-full px-12 py-8 border-2 border-black bg-black text-white hover:bg-transparent hover:text-black transition-all text-xl font-black uppercase tracking-tighter">
            <RouterLink to="/contacto">Book a consult</RouterLink>
          </Button>
        </div>
      </div>
    </section>

    <section class="py-32 bg-white text-black relative">
      <div class="container mx-auto px-6 relative z-10">
        <div class="flex justify-between items-end mb-20 border-b-2 border-black pb-10">
          <h2 class="text-7xl md:text-9xl font-black tracking-tighter italic">The Work.</h2>
          <RouterLink to="/portafolio" class="font-black text-xl hover:line-through transition-all">ALL PROJECTS →</RouterLink>
        </div>
        
        <Carousel @init-api="setApi" class="w-full" :opts="{ loop: true }" @mouseenter="detenerAutoplay" @mouseleave="iniciarAutoplay">
          <CarouselContent class="-ml-10">
            <CarouselItem v-for="pro in proyectosCarrusel" :key="pro.id" class="pl-10 md:basis-1/2 lg:basis-1/3">
              <Card class="rounded-none border-0 bg-white shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden group">
                <CardContent class="aspect-[4/5] p-0 flex flex-col text-black">
                  <div :style="{ backgroundColor: pro.color }" class="flex-1 flex items-center justify-center relative">
                    <div class="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity z-0" style="background-image: repeating-linear-gradient(45deg, #000 0, #000 20px, transparent 20px, transparent 40px);"></div>
                    <span class="font-black text-9xl text-black opacity-10 group-hover:scale-125 transition-transform duration-1000 z-10">{{ pro.tag[0] }}</span>
                  </div>
                  <div class="p-10 bg-white text-black z-10">
                    <h3 class="font-black uppercase text-4xl leading-tight">{{ pro.titulo }}</h3>
                    <div class="w-16 h-3 bg-black mt-5 rounded-full group-hover:w-full transition-all duration-500"></div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <div class="hidden md:block">
            <CarouselPrevious class="bg-black text-white border-2 border-black rounded-none h-14 w-14 -left-7 hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]" />
            <CarouselNext class="bg-black text-white border-2 border-black rounded-none h-14 w-14 -right-7 hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]" />
          </div>
        </Carousel>
      </div>
    </section>

    <section class="bg-black text-white py-40 px-8 md:px-20 relative overflow-hidden">
      <Star :size="400" class="absolute -bottom-20 -right-20 text-white/5 animate-spin-slow stroke-0 fill-current" />
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
        <div class="space-y-12">
          <h2 class="text-8xl font-black tracking-tighter leading-none">The <br> Method.</h2>
          <p class="text-3xl font-medium opacity-60 leading-relaxed">Bespoke design for a <br> select global clientele.</p>
          <Button class="rounded-full px-12 py-8 border-2 border-[#FBCFE8] bg-transparent text-[#FBCFE8] hover:bg-[#FBCFE8] hover:text-black transition-all text-xl font-bold uppercase">
            Start a project
          </Button>
        </div>
        <div class="divide-y-2 divide-white/10">
          <div v-for="skill in ['Strategic Thinking', 'Motion Graphics', 'Visual Identity', 'Digital Design']" :key="skill" class="py-10 flex justify-between items-center group cursor-pointer">
            <span class="text-3xl font-black opacity-40 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-500 uppercase tracking-tighter">{{ skill }}</span>
            <ArrowRight :size="40" class="opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 transition-all duration-500 text-[#FBCFE8]" />
          </div>
        </div>
      </div>
    </section>

    <div class="py-16 bg-[#FBCFE8] overflow-hidden border-t-2 border-black z-10 relative">
      <div class="flex gap-24 font-black text-6xl uppercase animate-marquee whitespace-nowrap text-black tracking-wider">
        <span v-for="n in 4" :key="n" class="flex items-center gap-10">
          SANDRA PÉREZ <Circle :size="30" class="fill-current" /> 2026 <Star :size="40" class="fill-current stroke-black" /> STUDIO
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap');
.font-poppins { font-family: 'Poppins', sans-serif; }

/* ANIMACIONES MOTION GRAPHICS */
@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
@keyframes marquee-fast { 0% { transform: translateX(0); } 100% { transform: translateX(-33%); } }
@keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes bounce-custom { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-40px); } }
@keyframes morph { 
  0%, 100% { border-radius: 0%; transform: scale(1) rotate(0deg); } 
  50% { border-radius: 50%; transform: scale(1.3) rotate(180deg); } 
}

.animate-marquee { animation: marquee 25s linear infinite; }
.animate-marquee-fast { animation: marquee-fast 12s linear infinite; }
.animate-spin-slow { animation: spin-slow 30s linear infinite; }
.animate-bounce-custom { animation: bounce-custom 8s ease-in-out infinite; }
.animate-morph { animation: morph 6s ease-in-out infinite; }

::-webkit-scrollbar { width: 12px; }
::-webkit-scrollbar-track { background: white; }
::-webkit-scrollbar-thumb { background: black; border-radius: 0px; }
</style>