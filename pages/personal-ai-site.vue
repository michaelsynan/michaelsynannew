<template>
  <div class="flex flex-col flex-grow text-white place-content-center min-h-screen pb-40">
    <div class="mx-auto w-11/12 sm:w-2/3 md:w-2/3 lg:w-1/2">
      <div class="text-center">Coming soon</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

definePageMeta({ layout: 'default' });

const isImageLoaded = ref(false);

useHead({
  title: "About",
  meta: [{ name: 'description', content: 'I\'m into programming, jazz and chess. Check out my awesome links!' }],
});

</script>