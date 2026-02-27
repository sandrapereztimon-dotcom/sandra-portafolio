<script setup lang="ts">
import { Button } from '@/components/ui/button';
</script>

<template>
  <div class="min-h-screen bg-[#60D394] p-10 md:p-20 flex flex-col md:flex-row gap-16 items-center">
    <div class="md:w-1/2 space-y-6">
      <h1 class="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none">DIME <br> HOLA.</h1>
      <p class="text-2xl font-bold max-w-sm">¿Tienes una idea, un proyecto o solo quieres saludar? ¡Escríbeme!</p>
    </div>

    <div class="md:w-1/2 w-full bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
      <form class="space-y-6" @submit.prevent>
        <div>
          <label class="block font-black uppercase text-sm mb-2">Nombre</label>
          <input type="text" class="w-full border-4 border-black p-4 focus:bg-[#FFD97D] outline-none font-bold" placeholder="Tu nombre...">
        </div>
        <div>
          <label class="block font-black uppercase text-sm mb-2">Email</label>
          <input type="email" class="w-full border-4 border-black p-4 focus:bg-[#FFD97D] outline-none font-bold" placeholder="tu@email.com">
        </div>
        <div>
          <label class="block font-black uppercase text-sm mb-2">Mensaje</label>
          <textarea rows="4" class="w-full border-4 border-black p-4 focus:bg-[#FFD97D] outline-none font-bold" placeholder="¿En qué puedo ayudarte?"></textarea>
        </div>
        <Button class="w-full h-16 bg-black text-white text-xl font-black uppercase hover:bg-[#EE6055] transition-colors rounded-none">
          Enviar Mensaje
        </Button>
      </form>
    </div>
  </div>
</template>