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
  <div v-if="page && formattedDate">
    <p class="!m-0 !p-0 text-sm text-stone-400">{{ formattedDate }}</p>
  </div>
</template>
