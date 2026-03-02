<script setup lang="ts">
import { RouterLink } from 'vue-router';
// Importaciones basadas en tus capturas de pantalla (navigation-menu)
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger, 
  navigationMenuTriggerStyle 
} from '@/components/ui/navigation-menu';
import { Home, Mail, Image as ImageIcon } from 'lucide-vue-next';

const categoriasPortafolio = [
  { title: 'Ilustración', href: '/portafolio/ilustracion', desc: 'Mis trabajos de arte digital.' },
  { title: 'Carteles', href: '/portafolio/carteles', desc: 'Diseño gráfico y posters.' },
  { title: 'Branding', href: '/portafolio/branding', desc: 'Identidad y logotipos.' }
];
</script>

<template>
  <header class="w-full bg-white border-b-4 border-black sticky top-0 z-100 p-4 flex justify-center shadow-[0px_4px_0px_0px_rgba(0,0,0,1)]">
    <NavigationMenu>
      <NavigationMenuList class="gap-2 md:gap-6">
        
        <NavigationMenuItem>
          <NavigationMenuLink as-child :class="navigationMenuTriggerStyle()" class="bg-transparent font-black uppercase hover:bg-[#FFD97D] border-2 border-transparent hover:border-black transition-all">
            <RouterLink to="/" class="flex items-center gap-2">
              <Home :size="18" /> <span class="hidden md:inline">Inicio</span>
            </RouterLink>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger class="bg-transparent font-black uppercase border-2 border-transparent hover:border-black transition-all">
            <div class="flex items-center gap-2">
              <ImageIcon :size="18" /> Trabajos
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul class="grid w-60 md:w-[320px] gap-3 p-4 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <li v-for="item in categoriasPortafolio" :key="item.title">
                <NavigationMenuLink as-child>
                  <RouterLink :to="item.href" class="block p-3 hover:bg-[#60D394] border-2 border-transparent hover:border-black transition-all group">
                    <div class="font-black uppercase text-sm italic group-hover:translate-x-1 transition-transform">
                      {{ item.title }}
                    </div>
                    <p class="text-xs font-bold opacity-60 leading-tight mt-1">
                      {{ item.desc }}
                    </p>
                  </RouterLink>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink as-child :class="navigationMenuTriggerStyle()" class="bg-transparent font-black uppercase hover:bg-[#EE6055] hover:text-white border-2 border-transparent hover:border-black transition-all">
            <RouterLink to="/contacto" class="flex items-center gap-2">
              <Mail :size="18" /> <span class="hidden md:inline">Contacto</span>
            </RouterLink>
          </NavigationMenuLink>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  </header>
</template>