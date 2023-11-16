<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

watch(route, () => {
  menuOpen.value = false;
});
</script>

<template>
  <div class="w-full flex flex-col items-center bg-stone-900 text-white mb-4 shadow-sm bg-opacity-50 !z-100 fixed zfix">
    <div class="w-full px-4 md:px-6 flex flex-col md:flex-row justify-between text-lg">
      <div class="flex justify-between items-center w-full md:mb-0">
        <NuxtLink :to="'/'" class="font-medium zfix text-xl tracking-wider">MICHAEL SYNAN</NuxtLink>
        
        <!-- Hamburger Menu -->
        <button @click="toggleMenu" class="md:hidden zfix my-1">
          <i-mdi-close v-if="menuOpen" class="w-8 h-8"></i-mdi-close>
          <i-mdi-menu v-else class="w-8 h-8"></i-mdi-menu>
        </button>
      </div>

      <!-- Desktop Navigation Links -->
      <div class="hidden md:flex">
        <NuxtLink to="/" activeClass="!bg-zinc-700" class="!font-inter px-4 py-2 text-base font-medium tracking-widest text-gray-300 hover:text-gray-100 transition-colors hover:bg-zinc-800">Home</NuxtLink>
        <NuxtLink to="/about" activeClass="!bg-zinc-700" class="!font-inter px-4 py-2 text-base font-medium tracking-widest text-gray-300 hover:text-gray-100 transition-colors hover:bg-zinc-800">About</NuxtLink>
        <NuxtLink to="/projects" activeClass="!bg-zinc-700" class="!font-inter px-4 py-2 text-base font-medium tracking-widest text-gray-300 hover:text-gray-100 transition-colors hover:bg-zinc-800">Projects</NuxtLink>
        <NuxtLink to="/blog" activeClass="!bg-zinc-700" class="!font-inter px-4 py-2 text-base font-medium tracking-widest text-gray-300 hover:text-gray-100 transition-colors hover:bg-zinc-800">Blog</NuxtLink>
      </div>

      <!-- Mobile Navigation Links -->
<!-- Mobile Navigation Links -->
<div :class="{ 'opacity-0 pointer-events-none': !menuOpen, 'opacity-100 pointer-events-auto': menuOpen }" 
  class="fixed inset-0 bg-stone-900 flex flex-col items-center justify-center space-y-8 transition-opacity duration-300 ease-in-out pt-20 md:pt-10 text-2xl">
  <NuxtLink to="/" activeClass="underline" class="hover:underline transition-all duration-100 text-center">Home</NuxtLink>
  <NuxtLink to="/about" activeClass="underline" class="hover:underline transition-all duration-100 text-center">About</NuxtLink>
  <NuxtLink to="/projects" activeClass="underline" class="hover:underline transition-all duration-100 text-center">Projects</NuxtLink>
  <NuxtLink to="/blog" activeClass="underline" class="hover:underline transition-all duration-100 text-center">Blog</NuxtLink>
</div>

    </div>
  </div>
</template>

<style scoped>
.zfix {z-index: 100000 !important;}
</style>
