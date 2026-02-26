<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import { Button } from '@/components/ui/button';
import { Sparkles, Palette, MousePointer2, Rocket } from 'lucide-vue-next'; 

// Tus colores de la paleta
// Coral: #EE6055, Menta: #60D394, Amarillo: #FFD97D
</script>

<template>
  <div class="min-h-screen font-poppins bg-[#FF9B85] text-black overflow-x-hidden">
    
    <section class="min-h-screen flex flex-col md:flex-row items-center justify-center p-6 md:p-12 gap-16">
      
      <div class="w-full md:w-1/2 flex justify-center order-first md:order-none">
        <RouterLink to="/contacto" class="relative group cursor-pointer">
          
          <div class="w-64 h-64 md:w-96 md:h-96 bg-[#FFD97D] border-4 border-black rounded-3xl flex flex-col items-center justify-center p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 ease-in-out group-hover:-translate-y-6 group-hover:rotate-3 group-hover:bg-[#60D394]">
            
            <div class="w-full h-full bg-white border-4 border-dashed border-black rounded-2xl flex items-center justify-center text-black font-black text-center p-4">
              FOTO DE <br> SANDRA PÉREZ <br> (clic para info)
            </div>
            
            <Sparkles class="absolute -top-6 -right-6 text-black group-hover:animate-bounce" :size="40" />
          </div>

          <div class="absolute inset-0 border-4 border-black rounded-3xl -z-10 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all"></div>
        </RouterLink>
      </div>

      <div class="w-full md:w-1/2 text-left space-y-8">
        <div class="inline-flex items-center gap-2 bg-black text-white px-4 py-1 rounded-full text-sm font-bold mb-2 uppercase tracking-widest">
          <Rocket :size="16" /> Estudiante de Diseño
        </div>
        
        <h1 class="text-5xl md:text-8xl font-black leading-none tracking-tighter uppercase">
          HOLA, SOY <br>
          <span class="text-white underline decoration-[12px] decoration-black/20">SANDRA</span>
        </h1>
        
        <p class="text-xl md:text-3xl font-bold max-w-lg leading-tight">
          Me apasiona la <span class="text-[#EE6055]">ilustración</span>, la animación y resolver <span class="italic">retos creativos</span>.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-6 pt-6">
          <Button as-child class="h-16 px-10 text-xl bg-black hover:bg-[#EE6055] text-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all rounded-none font-black uppercase">
            <RouterLink to="/portafolio">Mis Trabajos</RouterLink>
          </Button>
          
          <Button as-child variant="outline" class="h-16 px-10 text-xl bg-white hover:bg-[#FFD97D] border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all rounded-none font-black uppercase">
            <RouterLink to="/contacto">Contacto</RouterLink>
          </Button>
        </div>
      </div>
    </section>

    <div class="bg-black text-white py-8 border-y-4 border-black flex overflow-hidden select-none">
      <div class="animate-marquee flex whitespace-nowrap gap-8 items-center italic font-black text-3xl uppercase">
        <span v-for="i in 10" :key="i" class="flex items-center gap-8">
          Sandra Pérez Portfolio 2026 <Palette :size="32" class="text-[#60D394]" />
        </span>
      </div>
    </div>

  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  animation: marquee 40s linear infinite;
}

h1 {
  text-shadow: 4px 4px 0px rgba(0,0,0,0.1);
}
</style>