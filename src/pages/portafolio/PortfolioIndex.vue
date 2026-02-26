<script setup lang="ts">
import { RouterLink } from 'vue-router';
const categorias = [
  { nombre: 'Juegos de Mesa', slug: 'juegos', color: '#EE6055' },
  { nombre: 'Logotipos', slug: 'logotipos', color: '#60D394' },
  { nombre: 'Ilustración', slug: 'ilustracion', color: '#FFD97D' }
];
</script>

<template>
  <div class="p-10 md:p-20 bg-white min-h-screen">
    <h1 class="text-6xl font-black mb-12 uppercase tracking-tighter">Categorías</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <RouterLink v-for="cat in categorias" :key="cat.slug" :to="'/portafolio/' + cat.slug">
        <div :style="{ backgroundColor: cat.color }" class="p-12 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all">
          <h2 class="text-4xl font-black uppercase">{{ cat.nombre }}</h2>
        </div>
      </RouterLink>
    </div>
  </div>
</template>