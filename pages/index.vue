<script lang="ts" setup>
useHead({
  title: 'Front-End Engineer and UI/UX Designer',
  meta: [{ name: 'description', content: 'Web developer and designer based in NYC, specializing in human-centric, scalable websites using Vue, Nuxt, and Tailwind CSS. Expert in creating WCAG-compliant, user-friendly digital experiences.' }],

})
</script>

<template>
  <main class="flex items-center justify-center text-white mx-auto h-screen w-11/12 md:w-4xl">
    <div class="max-w-4xl">
      <HeroTextAnimated quote="Building Nice Things for Human Beings." class="mb-2 md:mb-4"/>
      <div class=" text-white text-lg ml-auto w-full inline-block select-none">
        <nuxt-link prefetch to="/about" id="learn-more"
          class="!font-inter tracking-widest rounded-sm z-10 inline-block mr-6 md:mr-8 transition ease-in-out border-2 border-white p-2 px-3 md:p-2 md:px-4 text-base md:text-base hover:bg-white hover:!text-[#131721] hover:transition-all">
          Learn More
        </nuxt-link>
        <div aria-label="Get in Contact" class="inline-block max-h-min">
          <a href="https://airtable.com/shrTD2l45wB1qa6Pb" class="!font-inter tracking-widest group inline-block mt-6 md:mt-0 text-base md:text-base"
            id="lets-talk" target="_blank">Let's Talk
            <span
              class="group-hover:pl-2 group-hover:transition-all text-bluegreen group-hover:text-bluegreen-light">&#8594;</span>
          </a>
        </div>
      </div>
    </div>
    <div class="hidden absolute bottom-0">
      <a rel="me" href="https://mstdn.social/@letsbecomehuman">Mastodon Verification</a>
    </div>
  </main>
</template>

<style scoped></style>
