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
        <button @click="toggleMenu" class="hamburger md:hidden zfix my-1">
    <span :class="['hamburger-line', menuOpen ? 'transform' : 'ml-auto']"></span>
    <span :class="['hamburger-line', menuOpen ? 'transform' : 'ml-auto']"></span>
    <span :class="['hamburger-line', menuOpen ? 'transform' : 'ml-auto']"></span>
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
.zfix { z-index: 100000 !important; }

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;
  /* Only show on small screens */
  @media (min-width: 768px) {
    display: none;
  }
}

.hamburger-line {
  width: 100%;
  height: 2px;
  background: white;
  border-radius: 10px;
  margin-left: auto; /* Align right by default */
  transition: all 0.3s linear;
  position: relative;
}

/* Adjust widths for unequal line lengths */
.hamburger-line:nth-child(1) { width: 70%; }
.hamburger-line:nth-child(2) { width: 100%; }
.hamburger-line:nth-child(3) { width: 50%; }

/* Transformations when menu is open */
.transform:nth-child(1),
.transform:nth-child(3) {
  width: 100%; /* Equal width when menu is open */
  transform-origin: 50%; /* Centering the rotation point */
}

.transform:nth-child(1) {
  transform: translateY(8px) rotate(45deg); /* Adjust translateY for perfect intersection */
}

.transform:nth-child(2) {
  opacity: 0;
}

.transform:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg); /* Adjust translateY for perfect intersection */
}
</style>
