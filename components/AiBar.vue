<template>
  <div v-if="isVisible" class="fixed bottom-0 w-full flex justify-between items-center cursor-pointer hover:opacity-80 transition-all shadow-lg bg-stone-950">
    <nuxt-link prefetch to="/personal-ai-site" id="learn-more"
      class="flex-grow flex justify-between items-center hover:opacity-80">
      <div class="text-center text-stone-900 py-3 px-4 md:px-6">
        <!-- Centered AI Stuff Link -->
        <span class="hidden md:inline-block text-teal-700 text-lg">✨ Check Out the New AI Version</span>
        <!-- Visible on small screens, hidden on medium screens and up -->
        <span class="inline-block md:hidden text-teal-700">✨ View AI Version</span>
      </div>
    </nuxt-link>
    <!-- X Button positioned to the right outside of nuxt-link -->
    <button @click="isVisible = false"
            class="text-stone-100 focus:outline-none p-2 absolute right-1 rounded-sm !bg-stone-800  text-xs md:text-base !bg-opacity-100">
      CLOSE
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isVisible = ref(true);
</script>
