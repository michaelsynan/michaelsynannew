<template>
  <div class="flex flex-col justify-center items-center text-white min-h-screen">
    <div class="flex-grow w-full flex items-center justify-center">
      <!-- Vertically and horizontally centered message -->
      <div class="text-center text-2xl tracking-wide">{{ msg }}</div>
    </div>
    <!-- Responsive input container -->
    <div class="w-full px-4 pb-10 md:w-2/3 lg:w-1/2 mx-auto">
      <input class="w-full p-3 rounded-lg bg-gray-800 placeholder-gray-500 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Type your message..." />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

definePageMeta({ layout: 'default' });

const isImageLoaded = ref(false);

const msg = ref("Let's start your project today."); 

setTimeout(() => {
  msg.value = "How can I help you?";
}, 2500);

useHead({
  title: "About",
  meta: [{ name: 'description', content: 'I\'m into programming, jazz and chess. Check out my awesome links!' }],
});
</script>
