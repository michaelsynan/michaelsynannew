<script lang="ts" setup>
import { useProjectStore } from '~/store/projectStore.js';
import { computed } from 'vue';

useHead({
  title: 'Portfolio',
})

const projectStore = useProjectStore();
const projects = computed(() => projectStore.getAllProjects);

// Create a new computed property that filters and reverses the projects
const displayedProjects = computed(() => {
  const filteredProjects = projects.value.filter(project => project.display);
  return filteredProjects.slice().reverse();  // Create a copy and reverse it
});
</script>
<template>
  <div class="w-full flex flex-col justify-between">

    
    <!-- Grid Container -->
    <div class="grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-4 w-11/12 sm:w-3/4 md:w-2/3 mx-auto mt-20 mb-32 relative">
      <!-- Loop through each project -->

      <nuxt-link v-for="(project, index) in displayedProjects" :key="index" :to="project.link" class="block overflow-hidden rounded group border border-stone-800 hover:border-stone-700 transition ease-in-out duration-200 shadow">
        <div class="relative text-white transition-all duration-200 ease-in-out">
          <!-- Image with Gradient Overlay -->
          <div class="relative">
            <img :src="project.image" class="transition-all drop-shadow !brightness-10 bg-stone-900 hover:opacity-80 group-hover:brightness-80" :alt="project.imageAria"/>
            <!-- Description Overlay -->
         <!--   <div class="absolute bottom-0 left-0 p-4 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 ease-in-out ">
                            <span class="description-text bg-stone-950 tracking-wide rounded-tr rounded-br leading-normal text-lg md:text-xl text-white px-2.5 border-l-primary-dark border-l-4 py-2.5 inline-block">
                {{ project.description }}
              </span>
            </div> -->
            <div class="absolute bottom-0 left-0 w-full opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 ease-in-out -mb-1 ">
                            <span class=" w-full description-text bg-stone-950 tracking-wide rounded-tr rounded-br leading-normal text-lg md:text-xl text-white px-2.5 py-2.5 pb-4 inline-block px-2">
               <div class="h-4 w-12 -mb-0.5 bg-primary-dark inline-block hidden"></div> {{ project.description }}
              </span>
            </div>
            <!-- Gradient Overlay -->
            <div class="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#171717] to-transparent"></div>
          </div>
          <!-- Project Name -->
          <div class="bg-neutral-900">
            <div class="text-lg p-1 px-2 md:p-3">
              {{ project.name }}
            </div>
          </div>
        </div>
      </nuxt-link>
      
    </div>
    <MainFooter />
  </div>
</template>

<style scoped>
.description-text {
  transition: transform 0.3s ease-in-out;
}

.group:hover .description-text {
  transform: translateY(-5px);
}
</style>
