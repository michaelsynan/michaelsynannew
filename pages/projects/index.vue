<script lang="ts" setup>
import { useProjectStore } from '~/store/projectStore.js';
import { computed } from 'vue';

useHead({
  title: 'Portfolio',
})

const projectStore = useProjectStore();
const projects = computed(() => projectStore.getAllProjects);

const displayedProjects = computed(() => {
  const filteredProjects = projects.value.filter(project => project.display);
  return filteredProjects.slice().reverse(); 
});
</script>
<template>
  <div class="w-full flex flex-col justify-between">

    <div class="grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-4 w-11/12 sm:w-3/4 md:w-2/3 mx-auto mt-16 md:mt-20 mb-32 relative project">
 
      <nuxt-link v-for="(project, index) in displayedProjects" :key="index" :to="project.link" class="block overflow-hidden rounded group border border-stone-800 hover:border-stone-700 transition ease-in-out duration-200 shadow">
        <div class="relative text-white transition-all duration-200 ease-in-out">
          <div class="relative">
            <img :src="project.image" class="transition-all drop-shadow !brightness-10 bg-stone-900 hover:opacity-80 group-hover:brightness-80" :alt="project.imageAria"/>
   
            <div class="absolute bottom-0 left-0 w-full opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 ease-in-out -mb-1 font-switzer">
                            <span class=" w-full description-text bg-stone-950 tracking-wide leading-normal text-lg md:text-xl text-white px-2.5 py-3 pb-4 inline-block px-2">
               {{ project.description }}
              </span>
            </div>
         
            <div class="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#171717] to-transparent"></div>
          </div>
      
          <div class="bg-neutral-900">
            <div class="text-lg p-1 px-2 md:p-3 text-stone-200 group-hover:text-stone-50 tracking-wider">
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
