<template>
  <div class="w-full flex flex-col justify-between text-white min-h-screen">
    <div>
      <div class="text-left w-11/12 md:w-2/3 mx-auto max-w-4xl text-3xl md:text-4xl font-bold mt-20 mb-10 relative">
      
      <!-- Adjusted for z-index -->
      <div class="relative" id="blogtitle" style="z-index: 2;">
        <h1 class="mb-0 pb-0 text-stone-100 tracking-wider">Full Stack Musings</h1>
      </div>

      <!-- Adjusted for z-index -->
  
    </div>
      <div class="flex justify-center">
        <div class="w-11/12 md:w-2/3">
          <div class="max-w-4xl mx-auto mb-14">
            <ContentList path="/blog" v-slot="{ list }">
              <div class="mx-auto">
                <div v-for="article in list" :key="article._path" class="mb-10">
                  <NuxtLink :to="article._path">
                    <h2 class="font-bold pb-0.5 mb-4 tracking-wide hover:border-b-stone-300 border-opacity-50 transition-all ease-in-out duration-100 border-transparent border inline">{{ article.title }}</h2> <!-- Adjusted margin-bottom -->
                  </NuxtLink>
                  <p class="py-0 pt-1.5 text-sm text-stone-400">{{ formatDate(article.createdAt) }}</p>
                  <!-- Adjusted padding and added styling -->
                  <p class="pt-4 tracking-wide">{{ article.description }}</p> <!-- Added padding-top -->
                </div>
              </div>
            </ContentList>

          </div>
        </div>
      </div>
    </div>
    <!-- Ensure the footer stretches full width and utilize mt-auto if necessary -->
    <MainFooter class="w-full mt-auto" />
  </div>
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



