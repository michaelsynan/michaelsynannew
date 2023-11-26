<template>
  <div>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import '~/assets/css/main.css';

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `Michael Synan | ${titleChunk}` : 'Michael Synan';
  }
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.1s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(.7rem);
}
</style>