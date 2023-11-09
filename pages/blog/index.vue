<template>
  <main>
    <ContentList path="/blog" v-slot="{ list }">
      <div class="mx-auto prose !prose-stone !prose-invert prose-sm sm:prose lg:prose-lg mb-20 px-4 lg:px-12">
        <div v-for="article in list" :key="article._path" class="text-white mb-10">
          <NuxtLink :to="article._path">
            <h2 class="!mb-4">{{ article.title }}</h2>
          </NuxtLink>
          <p class="!py-2">{{ formatDate(article.createdAt) }}</p>
          <p>{{ article.description }}</p>
        </div>
      </div>
    </ContentList>
  </main>
</template>


<script setup>
import { ref } from 'vue';

const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
</script>
