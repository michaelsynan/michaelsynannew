<template>
  <div v-if="isVisible" class="fixed bottom-0 w-full flex justify-between items-center bg-stone-200 cursor-pointer">
    <nuxt-link prefetch to="/personal-ai-site" id="learn-more"
      class="flex-grow flex justify-between items-center hover:opacity-80">
      <div class="text-center text-stone-900 py-3 px-4">
        <!-- Centered AI Stuff Link -->
        <span class="hidden md:inline-block">Check Out the New AI Version</span>
        <!-- Visible on small screens, hidden on medium screens and up -->
        <span class="inline-block md:hidden">View AI Version</span>
      </div>
    </nuxt-link>
    <!-- X Button positioned to the right outside of nuxt-link -->
    <button @click="isVisible = false"
            class="text-stone-800 hover:text-red-600 focus:outline-none p-2 absolute right-1 rounded-sm bg-stone-50 text-xs md:text-base"
            style="border: 1.5px solid #4a5568;">
      CLOSE
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isVisible = ref(true);
</script>
