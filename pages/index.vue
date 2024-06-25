<script lang="ts" setup>
import { ref, onMounted } from 'vue';
const showAiBar = ref(false);

onMounted(() => {
  // Simulate a delay to load AiBar, can adjust or remove setTimeout as needed
  setTimeout(() => {
    showAiBar.value = true;
  }, 100); // Delay can be adjusted based on your needs
});

useHead({
  title: 'Front-End Engineer and UI/UX Designer',
  meta: [{ name: 'description', content: 'Web developer and designer based in NYC, specializing in human-centric, scalable websites using Vue, Nuxt, and Tailwind CSS. Expert in creating WCAG-compliant, user-friendly digital experiences.' }],

})
</script>

<template>
  <main class="flex items-center justify-center text-white mx-auto h-screen w-11/12 md:w-4xl">
    <div class="max-w-4xl">
      <HeroTextAnimated quote="Building Nice Things for Human Beings." class="mb-2 md:mb-4"/>
      <div class="text-white text-lg ml-auto w-full inline-block select-none">
        <nuxt-link prefetch to="/about" id="learn-more"
          class="!font-inter tracking-widest rounded-sm z-10 inline-block mr-6 md:mr-8 transition ease-in-out border-2 border-white p-2 px-3 md:p-2 md:px-4 text-base md:text-base hover:bg-white hover:!text-[#131721] hover:transition-all">
          Learn More
        </nuxt-link>
        <div aria-label="Get in Contact" class="inline-block max-h-min">
          <nuxt-link prefetch to="/contact" class="!font-inter tracking-widest group inline-block mt-6 md:mt-0 text-base md:text-base"
            id="lets-talk">Let's Talk
            <span
              class="group-hover:pl-2 group-hover:transition-all text-teal-400">&#8594;</span>
        </nuxt-link>
        </div>
      </div>
    </div>
    <div class="hidden absolute bottom-0">
      <a rel="me" href="https://mstdn.social/@letsbecomehuman">Mastodon Verification</a>
    </div>
    <transition name="ai-bar">
      <AiBar v-if="showAiBar" />
    </transition>
  </main>
</template>

<style scoped>
@keyframes slideUp {
  from {
    transform: translateY(10%); /* Start from below the visible area */
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.ai-bar-enter-active {
  animation: slideUp 0.5s ease-out forwards; /* Defines the duration and easing function */
}

.ai-bar-enter {
  opacity: 0; /* Start with the component hidden */
}
</style>
