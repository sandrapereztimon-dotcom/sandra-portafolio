<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';
import { Rocket, Sparkles, Mail, Instagram, Linkedin, Send } from 'lucide-vue-next';

// Componentes Shadcn/ui
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// --- DATOS ---
const categoriasProyectos = [
  { title: 'Cartelería', href: '/portafolio/carteles', description: 'Diseño de posters y comunicación visual.' },
  { title: 'Ilustración', href: '/portafolio/ilustracion', description: 'Arte digital y personajes.' },
  { title: 'Branding', href: '/portafolio/branding', description: 'Identidad visual y logotipos.' },
];

const proyectosCarrusel = [
  { id: 1, titulo: 'Campaña 2026', tag: 'Cartelería', color: '#FFD97D' },
  { id: 2, titulo: 'Sandra Art', tag: 'Ilustración', color: '#60D394' },
  { id: 3, titulo: 'Branding Personal', tag: 'Diseño', color: '#EE6055' },
  { id: 4, titulo: 'Motion Graphics', tag: 'Animación', color: '#FF9B85' },
];

// --- LÓGICA CARRUSEL ---
const apiCarrusel = ref(); 
let intervalo: any = null;

const iniciarAutoplay = () => {
  detenerAutoplay();
  intervalo = setInterval(() => {
    if (apiCarrusel.value) apiCarrusel.value.scrollNext();
  }, 3000);
};

const detenerAutoplay = () => { if (intervalo) clearInterval(intervalo); };

onMounted(() => { iniciarAutoplay(); });
onUnmounted(() => { detenerAutoplay(); });

function setApi(val: any) { apiCarrusel.value = val; }
</script>

<template>
  <div class="min-h-screen font-poppins bg-[#FF9B85] text-black overflow-x-hidden">
    
    <nav class="w-full p-4 flex justify-center border-b-4 border-black bg-white sticky top-0 z-50 shadow-[0px_4px_0px_0px_rgba(0,0,0,1)]">
      <NavigationMenu>
        <NavigationMenuList class="gap-2 md:gap-6">
          <NavigationMenuItem>
            <NavigationMenuTrigger class="font-black uppercase bg-transparent text-lg border-2 border-transparent hover:border-black transition-all">
              Proyectos
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="grid w-64 gap-3 p-4 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <li v-for="cat in categoriasProyectos" :key="cat.title">
                  <NavigationMenuLink as-child>
                    <RouterLink :to="cat.href" class="block p-3 hover:bg-[#FFD97D] border-2 border-transparent hover:border-black transition-all">
                      <div class="font-black uppercase text-sm">{{ cat.title }}</div>
                      <p class="text-xs font-bold opacity-70 leading-tight">{{ cat.description }}</p>
                    </RouterLink>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink as-child :class="navigationMenuTriggerStyle()" class="font-black uppercase bg-transparent text-lg border-2 border-transparent hover:border-black transition-all">
              <RouterLink to="/sobre-mi">Sobre Mí</RouterLink>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink as-child :class="navigationMenuTriggerStyle()" class="font-black uppercase bg-transparent text-lg border-2 border-transparent hover:border-black transition-all">
              <RouterLink to="/contacto">Contacto</RouterLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>

    <section class="flex flex-col md:flex-row items-center justify-center p-8 md:p-20 gap-12 min-h-[80vh]">
      <div class="w-full md:w-1/2 flex justify-center">
        <RouterLink to="/sobre-mi" class="relative group">
          <div class="w-64 h-64 md:w-80 md:h-80 bg-[#FFD97D] border-4 border-black rounded-3xl flex items-center justify-center p-4 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all group-hover:-translate-y-4 group-hover:rotate-3 group-hover:shadow-[16px_16px_0px_0px_rgba(96,211,148,1)]">
            <div class="w-full h-full bg-white border-4 border-dashed border-black rounded-2xl flex flex-col items-center justify-center font-black text-center text-xl italic p-4">
              <span class="text-sm not-italic opacity-50 mb-2 underline">Haz clic para conocerme</span>
              PORTAFOLIO <br> SANDRA PÉREZ
            </div>
          </div>
          <div class="absolute -bottom-2 -left-4 bg-[#EE6055] text-white font-black px-4 py-1 border-4 border-black -rotate-6 uppercase text-xs opacity-0 group-hover:opacity-100 transition-opacity">
            Sobre Mí →
          </div>
        </RouterLink>
      </div>

      <div class="w-full md:w-1/2 space-y-6">
        <div class="inline-flex items-center gap-2 bg-black text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
          <Rocket :size="14" /> Diseño & Creatividad
        </div>
        <h1 class="text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter">
          HOLA, SOY <br> <span class="text-white underline decoration-black/20">SANDRA</span>
        </h1>
        <p class="text-xl font-bold max-w-lg">Transformo ideas en experiencias visuales neobrutalistas. Bienvenida a mi rincón creativo.</p>
        <Button as-child class="h-14 px-8 text-lg bg-black text-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-none font-black uppercase hover:bg-[#60D394] hover:text-black transition-all active:shadow-none">
          <RouterLink to="/portafolio">Explorar Trabajos</RouterLink>
        </Button>
      </div>
    </section>

    <section class="py-24 bg-black text-white">
      <div class="container mx-auto px-6">
        <div class="flex justify-between items-end mb-12">
          <h2 class="text-5xl md:text-7xl font-black uppercase tracking-tighter italic text-[#60D394]">
            Proyectos_
          </h2>
        </div>
        
        <Carousel 
          @init-api="setApi" 
          class="w-full" 
          :opts="{ loop: true }"
          @mouseenter="detenerAutoplay"
          @mouseleave="iniciarAutoplay"
        >
          <CarouselContent class="-ml-4">
            <CarouselItem v-for="pro in proyectosCarrusel" :key="pro.id" class="pl-4 md:basis-1/2 lg:basis-1/3">
              <Card class="rounded-none border-4 border-white bg-white shadow-[8px_8px_0px_0px_rgba(238,96,85,1)] transition-transform hover:scale-[1.02]">
                <CardContent class="aspect-4/5 p-0 flex flex-col text-black">
                  <div :style="{ backgroundColor: pro.color }" class="flex-1 border-b-4 border-black flex items-center justify-center overflow-hidden">
                    <span class="font-black opacity-10 text-6xl uppercase rotate-12">{{ pro.tag }}</span>
                  </div>
                  <div class="p-6">
                    <h3 class="font-black uppercase text-2xl mb-1">{{ pro.titulo }}</h3>
                    <div class="flex items-center gap-2 text-xs font-bold uppercase text-[#EE6055]">
                      <span>Ver detalles</span>
                      <Sparkles :size="14" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <div class="hidden md:block">
            <CarouselPrevious class="bg-[#FFD97D] text-black border-4 border-black rounded-none h-12 w-12 -left-6 hover:bg-white" />
            <CarouselNext class="bg-[#FFD97D] text-black border-4 border-black rounded-none h-12 w-12 -right-6 hover:bg-white" />
          </div>
        </Carousel>
      </div>
    </section>

    <section class="bg-white border-t-8 border-black p-10 md:p-20">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div class="space-y-4">
          <h2 class="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter">
            ¿TIENES UNA <br> <span class="bg-[#60D394] border-4 border-black px-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">IDEA?</span>
          </h2>
          <p class="text-xl font-bold italic opacity-70">Hagamos algo increíble juntos.</p>
        </div>

        <div class="flex flex-col gap-4 w-full md:w-auto">
          <Button as-child class="h-16 px-10 bg-black text-white border-4 border-black rounded-none font-black text-xl uppercase shadow-[8px_8px_0px_0px_rgba(238,96,85,1)] hover:bg-[#EE6055] transition-all">
            <RouterLink to="/contacto" class="flex items-center gap-3">
              <Send /> Escríbeme ahora
            </RouterLink>
          </Button>
          
          <div class="flex justify-center md:justify-start gap-4 mt-4">
            <a href="#" class="p-3 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
              <Instagram />
            </a>
            <a href="#" class="p-3 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
              <Linkedin />
            </a>
            <a href="mailto:hola@sandra.com" class="p-3 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
              <Mail />
            </a>
          </div>
        </div>
      </div>
    </section>

    <div class="bg-black text-white border-t-4 border-black py-4 flex overflow-hidden">
      <div class="flex gap-10 font-black text-xl uppercase animate-marquee whitespace-nowrap">
        <span v-for="n in 10" :key="n">Sandra Pérez • Portfolio 2026 • Diseño Web • TypeScript • Vue •</span>
      </div>
    </div>

  </div>
</template>

<style scoped>
.font-poppins { font-family: 'Poppins', sans-serif; }

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  display: inline-flex;
  animation: marquee 25s linear infinite;
}
</style>