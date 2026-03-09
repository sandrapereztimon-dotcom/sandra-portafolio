<script setup lang="ts">
import { RouterLink } from 'vue-router';
import {
  ArrowLeft, GraduationCap, Star,
  Circle, Triangle, Square, Palette, Code
} from 'lucide-vue-next';
import BarraDeNavegacion from '@/components/BarraDeNavegacion.vue';
</script>

<template>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;800&family=Poppins:wght@800&display=swap" rel="stylesheet">

  <div class="min-h-screen bg-[#FBCFE8] text-black overflow-x-hidden selection:bg-white relative">

    <BarraDeNavegacion />

    <div class="fixed inset-0 pointer-events-none z-0">
      <Star :size="400" class="absolute -top-20 -right-20 text-white/40 animate-spin-very-slow fill-current stroke-0" />
      <Circle :size="250" class="absolute top-1/4 -left-20 text-black/5 animate-levitate fill-current stroke-0" />
      <Triangle :size="300" class="absolute bottom-10 left-10 text-white/30 animate-spin-slow fill-current stroke-0" />
      <Square :size="150" class="absolute top-1/2 right-[5%] text-black/5 animate-levitate-delayed fill-current stroke-0" />
    </div>

    <div class="max-w-6xl mx-auto px-6 py-12 md:py-20 relative z-10">

      <RouterLink to="/" class="inline-flex items-center gap-2 inter-bold uppercase mb-12 hover:bg-black hover:text-white transition-all bg-white px-6 py-3 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-none">
        <ArrowLeft :size="20" /> Inicio
      </RouterLink>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        <div class="lg:col-span-5 flex justify-center">
          <div class="relative animate-drop-in">
            <div class="w-72 h-96 md:w-95 md:h-120 bg-white border-8 border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
              <img
                src="/Img/Contacto/FotoPortafolio.jpg"
                alt="Sandra Pérez"
                class="w-full h-full object-cover"
              />
            </div>

            <div class="absolute -bottom-6 -right-6 bg-black border-4 border-white px-8 py-4 inter-bold text-white uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-xl">
              Sandra Pérez
            </div>
          </div>
        </div>

        <div class="lg:col-span-7 space-y-8 animate-fade-in-up">

          <div class="bg-white border-4 border-black p-8 md:p-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <p class="text-xl md:text-2xl inter-regular leading-snug mb-8">
              Soy una estudiante de diseño apasionada por la ilustración y la animación. Soy muy comprometida y perfeccionista, y me encanta mezclar el trabajo tradicional con el digital para crear piezas con personalidad.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t-4 border-black">
              <div class="space-y-3">
                <h3 class="poppins-bold uppercase flex items-center gap-2 text-xl">
                  <GraduationCap :size="22" class="text-[#FBCFE8] fill-black" /> Formación
                </h3>
                <div class="inter-regular text-base space-y-3">
                  <p><span class="font-bold uppercase tracking-tight">Bachillerato</span></p>
                  <p>
                    <span class="font-bold uppercase tracking-tight">Grado en Diseño y Tecnologías Creativas</span><br>
                    <span class="opacity-80">UPV - Actualmente cursando</span>
                  </p>
                  <p><span class="font-bold uppercase tracking-tight">Inglés C1</span></p>
                </div>
              </div>

              <div class="space-y-3">
                <h3 class="poppins-bold uppercase flex items-center gap-2 text-xl">
                  <Code :size="22" class="text-[#FBCFE8] fill-black" /> Habilidades
                </h3>
                <div class="flex flex-wrap gap-2">
                  <span class="software-pill bg-[#ff9a00] text-black">Ai</span>
                  <span class="software-pill bg-[#001e36] text-[#31a8ff]">Ps</span>
                  <span class="software-pill bg-[#49021f] text-[#ff3366]">Id</span>
                  <span class="software-pill bg-[#00005b] text-[#9999ff]">Ae</span>
                </div>
                <ul class="inter-regular text-base space-y-1 pt-1">
                  <li>• Illustrator</li>
                  <li>• Photoshop</li>
                  <li>• InDesign</li>
                  <li>• After Effects</li>
                  <li>• Técnicas tradicionales</li>
                </ul>
              </div>

              <div class="space-y-3 md:col-span-2">
                <h3 class="poppins-bold uppercase flex items-center gap-2 text-xl">
                  <Palette :size="22" class="text-[#FBCFE8] fill-black" /> Qué hago
                </h3>
                <p class="inter-regular text-base leading-relaxed">
                  Desarrollo proyectos de ilustración, animación y diseño visual combinando técnica manual y herramientas digitales para lograr resultados expresivos y bien cuidados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.poppins-bold { font-family: 'Poppins', sans-serif; font-weight: 800; }
.inter-regular { font-family: 'Inter', sans-serif; font-weight: 400; }
.inter-bold { font-family: 'Inter', sans-serif; font-weight: 800; }
.software-pill {
  border: 2px solid black;
  padding: 0.25rem 0.5rem;
  font-family: 'Poppins', sans-serif;
  font-size: 0.75rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

/* Animaciones de levitación */
@keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes spin-very-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes levitate {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-40px); }
}
@keyframes levitate-delayed {
  0%, 100% { transform: translateY(0) rotate(45deg); }
  50% { transform: translateY(30px) rotate(55deg); }
}

.animate-spin-slow { animation: spin-slow 15s linear infinite; }
.animate-spin-very-slow { animation: spin-very-slow 35s linear infinite; }
.animate-levitate { animation: levitate 8s ease-in-out infinite; }
.animate-levitate-delayed { animation: levitate-delayed 10s ease-in-out infinite; }

/* Animaciones de entrada */
@keyframes dropIn {
  0% { transform: translateY(-50px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}
@keyframes fadeInUp {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.animate-drop-in { animation: dropIn 0.8s ease-out forwards; }
.animate-fade-in-up { animation: fadeInUp 0.6s ease-out 0.3s both; }
</style>
