<template>
  <div v-if="isVisible" class="fixed bottom-0 w-full flex justify-between items-center cursor-pointer transition-all shadow-lg bg-stone-950">
    <nuxt-link prefetch to="/personal-ai-site" id="learn-more"
      class="flex-grow flex justify-between items-centerf">
      <div class="text-center text-stone-900 py-3 px-4 md:px-6">
        <!-- Centered AI Stuff Link -->
        <span class="hidden md:inline-block text-teal-400 text-lg">✨ Check out my AI demo page</span>
        <!-- Visible on small screens, hidden on medium screens and up -->
        <span class="inline-block md:hidden text-teal-400">✨ View AI demo page</span>
      </div>
    </nuxt-link>
    <!-- X Button positioned to the right outside of nuxt-link -->
    <button @click="isVisible = false"
            class="text-stone-100 focus:outline-none py-2 px-3 absolute right-1 border border-stone-700 border-opacity-50 tracking-wide bg-stone-900 hover:bg-stone-800  text-xs md:text-base !bg-opacity-100">
      close
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isVisible = ref(true);
</script>
