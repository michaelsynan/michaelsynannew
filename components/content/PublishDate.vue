<script setup lang="ts">
const { page } = useContent()
function formatDate(date) {
  return new Date(date).toLocaleDateString('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}   
</script>

<template>
  <div>
    <h1 class="!mb-0">{{ page.title }}</h1>
    <p class="m-0 !my-0 text-left text-sm md:text-lg text-zinc-500">
      {{ formatDate(page.createdAt) }}
    </p>
    <div class="flex mt-2">
    <div v-for="(tag, index) in page.tag" :key="index" class="mr-2 bg-primary-dark text-sm py-0.5 px-2.5 shadow rounded-full lowercase text-stone-300 opacity-60">{{ tag }}</div>
    </div>
  </div>
</template>
