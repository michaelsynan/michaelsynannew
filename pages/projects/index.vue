<script lang="ts" setup>
import { useProjectStore } from '~/store/projectStore.js';
import { computed } from 'vue';

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
    <div>My Projects</div>
    <!-- Grid Container -->
    <div class="grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-4 w-11/12 sm:w-3/4 md:w-2/3 mx-auto mt-20 mb-32">
      <!-- Loop through each project -->
      <nuxt-link v-for="(project, index) in displayedProjects" :key="index" :to="project.link" class="block overflow-hidden rounded">
        <div class="relative text-white mainborder group transition-all duration-200 ease-in-out">
          <!-- Image with Gradient Overlay -->
          <div class="relative">
            <img :src="project.image"
                 class="transition-all drop-shadow brightness-[.90] group-hover:brightness-100"
                 :alt="project.imageAria"/>
            <div class="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#171717] to-transparent"></div>
          </div>
          <!-- Project Name -->
          <div class="mt-1 px-1 py-1 md:px-3 md:py-2 bg-neutral-900">
            <div class="text-lg">
              {{ project.name }}
            </div>
          </div>
        </div>
      </nuxt-link>
    </div>
    <MainFooter />
  </div>
</template>
