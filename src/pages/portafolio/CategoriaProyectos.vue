<script setup lang="ts">
import { RouterLink } from 'vue-router';
defineProps(['category']); // Recibe 'juegos', 'logotipos', etc.
</script>

<template>
  <div class="p-10 md:p-20 bg-white min-h-screen">
    <h1 class="text-5xl font-black uppercase">Viendo: {{ category }}</h1>
    <p class="mt-4 font-bold opacity-60 italic">Próximamente verás aquí los trabajos de esta sección...</p>
    <router-link to="/portafolio" class="inline-block mt-10 underline font-black uppercase">← Volver</router-link>
  </div>
</template>