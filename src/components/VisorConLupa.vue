<script setup lang="ts">
import { ref } from 'vue';
import { Maximize2, X, Search } from 'lucide-vue-next';

defineProps<{ 
  src: string, 
  nombre: string 
}>();

const posX = ref(0);
const posY = ref(0);
const mostrarLupa = ref(false);
const esFullscreen = ref(false);

const moverLupa = (e: MouseEvent) => {
  const container = e.currentTarget as HTMLElement;
  const { left, top, width, height } = container.getBoundingClientRect();
  // Calculamos posición para el zoom
  posX.value = ((e.clientX - left) / width) * 100;
  posY.value = ((e.clientY - top) / height) * 100;
};
</script>

<template>
  <div class="relative w-full h-full group/visor min-h-[50vh] bg-zinc-50">
    <div 
      class="relative w-full h-full overflow-hidden cursor-zoom-in flex items-center justify-center p-4"
      @mousemove="moverLupa"
      @mouseenter="mostrarLupa = true"
      @mouseleave="mostrarLupa = false"
      @click="esFullscreen = true"
    >
      <img :src="src" class="max-h-[70vh] w-full object-contain transition-all duration-500 group-hover/visor:scale-[1.02]" />
      
      <div 
        v-if="mostrarLupa"
        class="absolute pointer-events-none border-4 border-black shadow-2xl w-64 h-64 z-50 bg-white bg-no-repeat"
        :style="{
          left: `calc(${posX}% - 128px)`,
          top: `calc(${posY}% - 128px)`,
          backgroundImage: `url(${src})`,
          backgroundPosition: `${posX}% ${posY}%`,
          backgroundSize: '400%'
        }"
      >
        <div class="absolute inset-0 flex items-center justify-center opacity-10">
          <div class="w-full h-[1px] bg-black"></div>
          <div class="h-full w-[1px] bg-black absolute"></div>
        </div>
      </div>

      <div class="absolute top-4 right-4 bg-black text-white px-3 py-1 text-[10px] font-black uppercase flex items-center gap-2 border-2 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <Maximize2 :size="14" /> Expandir Arte
      </div>
    </div>

    <Teleport to="body">
      <Transition name="fade">
        <div 
          v-if="esFullscreen" 
          class="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-2 md:p-10"
          @click="esFullscreen = false"
        >
          <button class="absolute top-6 right-6 text-white p-2 border-4 border-white hover:bg-[#EE6055] hover:border-black transition-all z-[10000]">
            <X :size="40" stroke-width="3" />
          </button>
          
          <img 
            :src="src" 
            class="max-w-full max-h-[95vh] object-contain shadow-[0_0_80px_rgba(0,0,0,0.8)] border-2 border-white/10"
            @click.stop 
          />
          
          <div class="absolute bottom-6 left-6 md:left-12 bg-[#60D394] border-4 border-black px-6 py-2 font-black uppercase text-xl md:text-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            {{ nombre }}
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>