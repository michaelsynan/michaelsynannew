<template>
  <div class="w-full flex flex-col justify-between text-white ">
    <div class="text-left text-5xl md:text-7xl font-bold mt-20 mb-10 w-11/12 md:w-2/3 mx-auto">
     Artificial Intelligence
    </div>
    <div class="flex justify-center">
      <div class="w-11/12 md:w-2/3">
        <div class="max-w-4xl mx-auto mb-14">
          <img src="/ai-chat-bot.webp" alt="Art Image" class="mx-auto  rounded-lg mb-4 md:mb-10 border-stone-700 border">
        </div>
        <div class="max-w-4xl mx-auto mb-14">
          <h2 class="text-3xl font-bold tracking-wide uppercase mb-4 border-b-2 border-stone-700">About This Project</h2>
          <p class="text-lg md:text-xl tracking-wide">
            I created an AI chatbot for my personal website that uses OpenAI's GPT-4o model along with the context inside of the prompt. This practice allows the chatbot to provide contact information, social media links, and other relevant information.
          </p>
        </div>
        <div class="max-w-4xl mx-auto mb-14">
          <h2 class="text-3xl font-bold tracking-wide uppercase mb-4 border-b-2 border-stone-700">Design</h2>
          <p class="text-lg md:text-xl tracking-wide">
            Custom tailwind components were created to facilitate chat. These component take input from the user and passes them to the backend API which uses OpenAI's GPT-4o model to generate a response.
          </p>
        
          
        </div>
        <div class="">
          <div class="max-w-4xl mx-auto mb-16">
            <h2 class="text-3xl font-bold tracking-wide uppercase mb-4 border-b-2 border-stone-700">Backend</h2>
            <p class="text-lg md:text-xl ">
              The site is built with <a href="https://nuxtjs.org" class="underline" target="_blank"
                rel="noopener noreferrer">Nuxt.js</a>, a powerful meta-framework of Vue.js, designed for simple, static
              deployment and optimized for high performance. It is deployed on Vercel and styled with <a
                href="https://tailwindcss.com" class="underline" target="_blank" rel="noopener noreferrer">Tailwind
                CSS</a>
              for a responsive, clean design.
            </p>
          </div>
        </div>
        <div class="max-w-4xl mx-auto mb-32">
          <nuxt-link to="/personal-ai-site" id="link1"
            class="rounded-sm mb-8 z-10 inline-block mr-6 md:mr-8 transition ease-in-out border-2 border-white p-2 px-3 md:p-2 md:px-4 text-base md:text-lg hover:bg-white hover:text-[#131721] hover:transition-all">
            Use Chatbot <i-mdi-arrow-top-right class="inline ml-1  text-xl -mr-1" />
          </nuxt-link>
        </div>
      </div>
    </div>
    <MainFooter />
  </div>
</template>
  

<script setup>

useHead({
  title: "Personal AI Chatbot",
  meta: [{ name: 'description', content: 'I created a personal AI chatbot that uses OpenAI\'s GPT-4o model. Copy my code on GitHub.' }],
});

</script>