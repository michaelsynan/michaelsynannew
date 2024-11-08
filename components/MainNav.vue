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
  <nav
    class="w-full flex flex-col items-center bg-stone-900 text-white mb-4 shadow-sm bg-opacity-50 !z-100 fixed zfix p-2 md:p-0 backdrop-blur"
    aria-label="Main navigation">
    <div class="w-full px-2 md:px-6 flex flex-col md:flex-row justify-between text-lg">
      <div class="flex justify-between items-center w-full md:mb-0">
        <NuxtLink :to="'/'" class="font-medium zfix text-xl tracking-wider">MICHAEL SYNAN</NuxtLink>
        <button @click="toggleMenu" class="hamburger md:hidden zfix my-1" aria-label="Open menu">
          <span :class="['hamburger-line', menuOpen ? 'transform' : 'ml-auto mt-0.5']"></span>
          <span :class="['hamburger-line', menuOpen ? 'transform' : 'ml-auto !w-4']"></span>
          <span :class="['hamburger-line', menuOpen ? 'transform' : 'ml-auto !w-3']"></span>
        </button>

      </div>
      <div class="hidden md:flex">
        <NuxtLink to="/" activeClass="!bg-zinc-700"
          class="!font-inter px-4 py-2 text-base font-medium tracking-widest text-gray-300 hover:text-gray-100 transition-colors hover:bg-zinc-800">
          Home</NuxtLink>
        <NuxtLink to="/personal-ai-site" activeClass="!bg-zinc-700"
          class="!font-inter px-4 py-2 text-base font-medium tracking-widest text-gray-300 hover:text-gray-100 transition-colors hover:bg-zinc-800">
          AI</NuxtLink>
        <NuxtLink to="/about" prefetch activeClass="!bg-zinc-700"
          class="!font-inter px-4 py-2 text-base font-medium tracking-widest text-gray-300 hover:text-gray-100 transition-colors hover:bg-zinc-800">
          About</NuxtLink>
        <NuxtLink to="/projects" prefetch activeClass="!bg-zinc-700"
          class="!font-inter px-4 py-2 text-base font-medium tracking-widest text-gray-300 hover:text-gray-100 transition-colors hover:bg-zinc-800">
          Projects</NuxtLink>
        <NuxtLink to="/blog" prefetch activeClass="!bg-zinc-700"
          class="!font-inter px-4 py-2 text-base font-medium tracking-widest text-gray-300 hover:text-gray-100 transition-colors hover:bg-zinc-800">
          Blog</NuxtLink>
        <NuxtLink to="/contact" activeClass="underline"
          class="!font-inter px-4 py-2 text-base font-medium tracking-widest text-gray-300 hover:text-gray-100 transition-colors hover:bg-zinc-800"
          prefetch>Contact</NuxtLink>
      </div>
      <div id="mobile-nav"
        :class="{ 'opacity-0 pointer-events-none': !menuOpen, 'opacity-100 pointer-events-auto': menuOpen }"
        class="fixed inset-0 bg-gradient-to-bl from-stone-950 to-stone-900 flex flex-col items-start px-4 justify-center  space-y-8 transition-opacity duration-300 ease-in-out pt-0 text-2xl h-screen max-h-screen">
        <div class="flex flex-col items-start gap-8 -mt-8 pb-8">
          <NuxtLink to="/" activeClass="underline"
            class="hover:underline transition-all duration-100 text-center tracking-wide">Home</NuxtLink>
          <NuxtLink to="/personal-ai-site" activeClass="underline"
            class="hover:underline transition-all duration-100 text-center tracking-wide" prefetch>AI</NuxtLink>
          <NuxtLink to="/about" activeClass="underline"
            class="hover:underline transition-all duration-100 text-center tracking-wide" prefetch>About</NuxtLink>
          <NuxtLink to="/projects" activeClass="underline"
            class="hover:underline transition-all duration-100 text-center tracking-wide" prefetch>Projects</NuxtLink>
          <NuxtLink to="/blog" activeClass="underline"
            class="hover:underline transition-all duration-100 text-center tracking-wide" prefetch>Blog</NuxtLink>
          <NuxtLink to="/contact" activeClass="underline"
            class="hover:underline transition-all duration-100 text-center tracking-wide" prefetch>Contact</NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.zfix {
  z-index: 100000 !important;
}

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 25px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;

  @media (min-width: 768px) {
    display: none;
  }
}

.hamburger-line {
  width: 100%;
  height: 2px;
  background: white;
  border-radius: 10px;
  transition: all 0.25s linear;
}

.transform:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.transform:nth-child(2) {
  opacity: 0;
  transform: translateX(20px) translateY(2px);
}

.transform:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg)
}
</style>
