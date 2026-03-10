<script setup lang="ts">
import { 
  Star, Circle, Triangle, Square} from 'lucide-vue-next';
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

    <div class="max-w-6xl mx-auto px-6 py-12 md:py-24 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        <div class="lg:col-span-5 flex justify-center">
          <div class="relative animate-drop-in">
            <div class="w-72 h-96 md:w-96 md:h-120 bg-white border-8 border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
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
          <div class="bg-white border-4 border-black p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            
            <p class="text-lg md:text-xl inter-regular leading-relaxed mb-10 text-gray-900">
              Estudiante de diseño con un enfoque centrado en la ilustración tradicional y digital. Mi trabajo se define por el compromiso con el detalle y una búsqueda constante de la perfección, fusionando técnicas tradicionales con herramientas digitales para dotar a cada pieza de una personalidad única.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8 border-t-4 border-black">
              
              <div class="space-y-4">
                <h3 class="poppins-bold uppercase flex items-center gap-2 text-xl border-b-2 border-black pb-2">
                  Formación
                </h3>
                <div class="inter-regular text-base space-y-4">
                  <div>
                    <p class="uppercase text-xs inter-bold tracking-widest text-gray-500 mb-1">Secundaria</p>
                    <p>Bachillerato artístico</p>
                  </div>
                  <div>
                    <p class="uppercase text-xs inter-bold tracking-widest text-gray-500 mb-1">Grado Universitario</p>
                    <p>Diseño y Tecnologías Creativas</p>
                    <p class="text-sm opacity-70">UPV — Actualmente cursando</p>
                  </div>
                  <div>
                    <p class="uppercase text-xs inter-bold tracking-widest text-gray-500 mb-1">Idiomas</p>
                    <p>Inglés nivel C1 certificado</p>
                  </div>
                </div>
              </div>

              <div class="space-y-4">
                <h3 class="poppins-bold uppercase flex items-center gap-2 text-xl border-b-2 border-black pb-2">
                  Herramientas
                </h3>
                <ul class="inter-regular text-base space-y-2">
                  <li class="flex items-center gap-2"> Adobe Illustrator</li>
                  <li class="flex items-center gap-2"> Adobe Photoshop</li>
                  <li class="flex items-center gap-2"> Adobe InDesign</li>
                  <li class="flex items-center gap-2"> Adobe After Effects</li>
                  <li class="flex items-center gap-2"> Técnicas pictóricas tradicionales</li>
                </ul>
              </div>

              <div class="space-y-4 md:col-span-2">
                <h3 class="poppins-bold uppercase flex items-center gap-2 text-xl border-b-2 border-black pb-2">
                  Mi enfoque
                </h3>
                <p class="inter-regular text-base leading-relaxed">
                  Me especializo en el desarrollo de proyectos visuales a través de todos los lenguajes visuales. Me apasiona explorar cómo las texturas manuales pueden enriquecer el diseño digital.
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