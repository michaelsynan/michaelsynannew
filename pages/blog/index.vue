<template>
  <div class="w-full flex flex-col justify-between text-white min-h-screen">
    <div>
      <div class="text-left w-11/12 md:w-2/3 mx-auto max-w-4xl text-3xl md:text-4xl font-bold mt-20 mb-10 relative">
      
      <!-- Adjusted for z-index -->
      <div class="relative" id="blogtitle" style="z-index: 2;">
        <h1 class="mb-0 pb-0">From Front to Back</h1>
        <h2 class="text-stone-400 text-lg md:!text-xl">Perspectives on Full Stack Development</h2>
      </div>

      <!-- Adjusted for z-index -->
      <div style="white-space: nowrap; z-index: 1;" class=" hidden md:inline opacity-40 border-rounded h-10 w-14 -left-24 absolute bottom-0 text-7xl -top-4 mt-2 text-stone-800 shadow top-2 text-black inline-block rotate-90" id="blogheader">
        <span style="font-size: 250px;" class="pr-0 inline font-dortmond">BLOG</span>
      </div>
    </div>
      <div class="flex justify-center">
        <div class="w-11/12 md:w-2/3">
          <div class="max-w-4xl mx-auto mb-14">
            <ContentList path="/blog" v-slot="{ list }">
              <div class="mx-auto">
                <div v-for="article in list" :key="article._path" class="mb-10">
                  <NuxtLink :to="article._path">
                    <h2 class="font-bold">{{ article.title }}</h2> <!-- Adjusted margin-bottom -->
                  </NuxtLink>
                  <p class="py-0 text-sm text-gray-400">{{ formatDate(article.createdAt) }}</p>
                  <!-- Adjusted padding and added styling -->
                  <p class="pt-4">{{ article.description }}</p> <!-- Added padding-top -->
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



