<template>
  <div v-if="isVisible" class="fixed bottom-0 w-full flex justify-between items-center cursor-pointer transition-all shadow-lg bg-stone-950">
    <nuxt-link prefetch to="/personal-ai-site" id="learn-more"
      class="flex-grow flex justify-between items-centerf">
      <div class="text-center text-stone-900 py-3 px-4 md:px-6">
        <!-- Centered AI Stuff Link -->
        <span class="hidden md:inline-block text-teal-400 text-lg">✨ <span class="pl-1">Check out my AI demo page</span></span>
        <!-- Visible on small screens, hidden on medium screens and up -->
        <span class="inline-block md:hidden text-teal-400">✨ <span class="pl-1">View AI demo page</span></span>
      </div>
    </nuxt-link>
    <!-- X Button positioned to the right outside of nuxt-link -->
    <button @click="isVisible = false"
            class="focus:outline-none py-2 px-3 absolute right-1 tracking-wide text-stone-500  text-xs md:text-base !bg-opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"/></svg>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isVisible = ref(true);
</script>
