<script lang="ts" setup>
useHead({
  title: 'Thank You'
})
</script>

<template>
  <div class="flex items-center justify-center text-white mx-auto h-screen w-11/12 md:w-4xl">
    <div class="text-center">
      <h1 class="text-4xl md:text-6xl font-bold mb-4 tracking-wide">Thank You!</h1>
      <p class="text-xl md:text-2xl mb-8 font-switzer tracking-wide">I appreciate your message. I will be in touch soon.</p>
      <nuxt-link to="/" class="!font-inter tracking-widest rounded-sm z-10 inline-block transition ease-in-out border-2 border-white p-2 px-3 md:p-2 md:px-4 text-base md:text-base hover:bg-white hover:!text-[#131721] hover:transition-all">
        Return Home
      </nuxt-link>
      <div class="flex justify-center mt-4">
        <SocialIconGroup />
      </div>
    </div>
  </div>
</template>