<template>
  <div class="flex flex-col flex-grow text-white place-content-start md:place-content-center pb-40 min-h-screen">
    <div class="mx-auto w-11/12 sm:w-2/3 md:w-2/3 lg:1/2">
      <section role="region" aria-label="About Section">
        <div class="grid grid-cols-3 gap-4 md:gap-8 pb-0 pt-16 md:pt-8">
          <div class="about1 relative col-span-3 pb-1/1 md:col-span-1 drop-shadow-sm">
            <img class="rounded-sm absolute top-0 object-cover object-center w-full h-full" v-if="!isImageLoaded"
              src="/placeholder1.webp" alt="Loading" />
            <img class="rounded-sm absolute top-0 object-cover object-center w-full h-full" @load="isImageLoaded = true"
              v-show="isImageLoaded" src="/michael_synan.webp"
              alt="Profile picture of Michael Synan, front-end engineer and UI/UX designer." />
          </div>
          <div
            class="floating-box tracking-wide about2 col-span-2 align-middle sm:col-span-3 xs:col-span-3 md:col-span-2 pl-0 md:pl-4">
            <h2 class="text-2xl md:text-4xl font-bold  pt-0 tracking-wider">A Little About Me</h2>
            <p
              class="pb-6 mr-0 md:mr-10 text-lg md:text-xl pb-6 text-stone-200 leading-relaxed md:leading-loose tracking-wide font-switzer">
              I'm Michael, I help create meaningful online experiences from the ground up—design to code.
              I'm a long-time Linux user, philosophy nerd, and open-source advocate.
              My Master’s degree in Urban Affairs and Bachelor’s degree in Psychology inform my approach to
              understanding
              the human side of technology. </ br>
            <p class="pt-2">I'm the founder of <nuxt-link to="https://formworkstudios.com" target="_blank"
                class="">Formwork
                Studios</nuxt-link>.</p>
            </p>
            <nuxt-link to="/projects" id="link1"
              class="!font-inter tracking-widest rounded-sm z-10 mb-4 inline-block mr-6 md:mr-8 transition ease-in-out border-2 border-white p-2 px-3 md:p-2 md:px-4 text-sm md:text-base hover:bg-white hover:!text-[#131721] hover:transition-all">
              View Portfolio
            </nuxt-link>
            <SocialIconGroup class="mt-1" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

definePageMeta({ layout: 'default' });

const isImageLoaded = ref(false);

useHead({
  title: "About",
  meta: [{ name: 'description', content: 'I\'m into programming, jazz and chess. Check out my awesome links!' }],
});

</script>