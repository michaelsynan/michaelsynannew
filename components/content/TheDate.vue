<script setup lang="ts">
import { computed } from 'vue';
const { page } = useContent();

const formattedDate = computed(() => {
  if (page.value && page.value.createdAt) {
    const date = new Date(page.value.createdAt);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
  return '';
});
</script>

<template>
  <div v-if="page">
    <p class="py-0 pt-1.5 text-sm text-stone-400">{{ formattedDate }}</p>
  </div>
</template>
