<template>
  <div class="w-full flex flex-col justify-between text-white">
    <div class="text-left  text-5xl md:text-7xl font-bold mt-20 mb-10 w-11/12 md:w-2/3  mx-auto">
      NUXT TAILWIND STARTER
    </div>
    <div class="flex justify-center">
      <div class="w-11/12 md:w-2/3">
        <div class="max-w-4xl mx-auto mb-14">
          <img src="/nuxt-tailwind-starter-template.webp" alt="nuxt-tailwind-starter" />
        </div>
        <div class="max-w-4xl mx-auto mb-14">
          <h2 class="text-3xl font-bold tracking-wide uppercase mb-4 border-b-2 border-stone-700">About This Project</h2>
          <p class="mb-4 text-lg md:text-xl text-white tracking-wide">
            While numerous component libraries are readily available, starter templates are less common. The Nuxt Tailwind
            Starter template offers a curated collection of components, along with a foundational template that
            facilitates
            rapid prototyping and the development of projects ready for production.
          </p>
          <p class="mb-4 text-lg md:text-xl text-white tracking-wide">
            This starter template currently contains over 20 components from navigation bars to buttons that can accept
            multiple props.
          </p>
          <p class="mb-4 text-lg md:text-xl text-white tracking-wide">
            The idea is to help new developers get started quickly.
          </p>
        </div>
        <div class="">
          <div class="max-w-4xl mx-auto mb-16">
            <h2 class="text-3xl font-bold tracking-wide uppercase mb-4 border-b-2 border-stone-700">Technology</h2>
            <p class="text-lg md:text-xl text-white ">
              The site is built with <a href="https://nuxtjs.org" class="underline" target="_blank"
                rel="noopener noreferrer">Nuxt.js</a>, a powerful meta-framework of Vue.js, designed for simple, static
              deployment and optimized for high performance. It is deployed on GitHub Pages and styled with <a
                href="https://tailwindcss.com" class="underline" target="_blank" rel="noopener noreferrer">Tailwind
                CSS</a> for a responsive, clean design.
            </p>
          </div>
        </div>
        <div class="max-w-4xl mx-auto mb-32">
          <nuxt-link target="_blank" to="https://formwork-studios.github.io/nuxt-tailwind-starter/" id="link1"
            class="rounded-sm mb-8 z-10 inline-block mr-6 md:mr-8 transition ease-in-out border-2 border-white p-2 px-3 md:p-2 md:px-4 text-base md:text-lg hover:bg-white hover:text-[#131721] hover:transition-all">
            Visit Site <i-mdi-arrow-top-right class="inline mb-1 text-xl -mr-1" />
          </nuxt-link>
          <nuxt-link target="_blank" to="https://github.com/Formwork-Studios/nuxt-tailwind-starter" id="link2"
            class="rounded-sm mb-8 z-10 inline-block mr-6 md:mr-8 transition ease-in-out border-2 border-white p-2 px-3 md:p-2 md:px-4 text-base md:text-lg hover:bg-white hover:text-[#131721] hover:transition-all">
            Star on GitHub <i-mdi-github class="inline ml-1  text-xl -mr-1" />
          </nuxt-link>
        </div>
      </div>
    </div>
    <MainFooter />
  </div>
</template>