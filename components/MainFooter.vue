<template>
  <footer class="flex justify-center items-start">
    <div class="mx-5 border-t-2 border-stone-600  w-11/12 sm:w-3/4 md:w-2/3">
      <div class="py-4 text-white justify-between flex w-full">
        <div class="flex items-start group"  aria-label="Get in Contact" title="Contact Form">
<NuxtLink to="/contact"
          class="inline-block align-text-top text-stone-400 group-hover:text-stone-200 text-base">
  Send me a message <i-mdi-arrow-top-right-thick class="inline text-stone-400 group-hover:text-stone-200"></i-mdi-arrow-top-right-thick>
</NuxtLink>
        </div>
        <div><SocialIconGroup small class="pt-0"/></div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>

</script>

<style scoped></style>
