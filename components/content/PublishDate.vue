<script setup lang="ts">
const { navigation, page, surround, globals } = useContent()
definePageMeta({
  documentDriven: {
    page: {
      _path: '/blog'
    },
    // surround will use `{ _path: '/foo/bar' }`
  }
})

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
    <h1 class="!mb-0 text-3xl md:text-4xl">{{ page.title }}</h1>
    <p class="m-0 !my-0 text-left text-sm md:text-lg text-stone-300">
   {{ formatDate(page.createdAt) }}
    </p>
    <div class="flex mt-4">
      <div v-for="(tag, index) in page.tag" :key="index" class="font-inter mr-2 bg-primary-dark bg-opacity-60 text-xs md:text-sm py-0.5 px-2.5 shadow rounded-full lowercase text-stone-100 cursor-pointer border-primary-light border border-opacity-50">{{ tag }}</div>
    </div>
  </div>
</template>
