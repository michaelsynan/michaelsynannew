<template>
  <div class="w-full flex flex-col justify-between text-white">
    <div class="text-center text-5xl md:text-7xl font-bold mt-20 mb-10 ">
     Artificial Intelligence
    </div>
    <div class="flex justify-center">
      <div class="w-11/12 md:w-2/3">
        <div class="max-w-4xl mx-auto mb-14">
          <img src="/ai-chat-bot.webp" alt="Art Image" class="mx-auto  rounded-lg mb-4 md:mb-10">
          <div class="flex mx-auto w-full space-x-4 md:space-x-10 ">
            <div class="flex-1 flex items-center">
              <img src="/lart-mobile1.webp" alt="Art Image" class="w-full object-contain rounded-lg">
            </div>
            <div class="flex-1 flex items-center">
              <img src="/lart-mobile2.webp" alt="Art Image" class="w-full object-contain rounded-lg">
            </div>
            <div class="flex-1 flex items-center">
              <img src="/lart-mobile3.webp" alt="Art Image" class="w-full object-contain rounded-lg">
            </div>
          </div>
        </div>
        <div class="max-w-4xl mx-auto mb-14">
          <h2 class="text-3xl font-bold tracking-wide uppercase mb-4 border-b-2 border-stone-700">About This Project</h2>
          <p class="text-lg md:text-xl tracking-wide">
            L'ART DE LA RUE is a boutique Jewelry shop run by Mohammad, an immigrant whose work combines his native
            country's culture with NYC to
            create unique jewelry. He needed an affordable solution to establish his brand online and begin marketing
            efforts.
            The navigation menu was strategically positioned at the bottom of the screen to enhance usability for mobile
            users and to
            facilitate quick engagement for visitors seeking to follow on Instagram or send a message.
          </p>
        </div>
        <div class="max-w-4xl mx-auto mb-14">
          <h2 class="text-3xl font-bold tracking-wide uppercase mb-4 border-b-2 border-stone-700">Design</h2>
          <p class="text-lg md:text-xl tracking-wide">
            Dortmund's bold and geometric characteristics mirror the distinctive style of the jewelry, making it an ideal
            choice for the logotype and headers to ensure they stand out in a similar fashion, while Georgia's classic
            serifs and legibility provide a seamless and clear reading experience for the body text, complementing the
            striking presence of the headers.
          </p>
          <h3 class="text-2xl opacity-50 font-bold tracking-wide uppercase mt-8">Fonts used</h3>
          <div class="">
            <h3 class="font-dortmond text-3xl md:text-5xl leading-normal md:leading-loose">THIS IS DORTMUND</h3>
            <h3 class="lart-serif text-3xl md:text-4xl leading-normal md:leading-loose">This is Georgia</h3>
          </div>
          <h3 class="text-2xl opacity-50 font-bold tracking-wide uppercase mt-8 mb-2">Colors</h3>
          <p class="text-lg md:text-xl tracking-wide">
            Rich, earthy tones of orange and green are used to evoke the natural elements of the jewelry, while the black
            shades were used to create an urban yet sophisticated feel. The colors were chosen to complement the jewelry
            and to create a sense of warmth, while using a dark background to allow the images to stand out.
          </p>
          <div class="flex space-x-4 mt-6 mb-10">
            <div class="w-16 h-16 bg-[#d77705]"></div>
            <div class="w-16 h-16 bg-[#2dd4c0]"></div>
            <div class="w-16 h-16 bg-[#0f0f0f]"></div>
            <div class="w-16 h-16 bg-[#1a1a1a]"></div>
          </div>
        </div>
        <div class="">
          <div class="max-w-4xl mx-auto mb-16">
            <h2 class="text-3xl font-bold tracking-wide uppercase mb-4 border-b-2 border-stone-700">Technology</h2>
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
          <nuxt-link target="_blank" to="https://lart-formwork-studios.vercel.app/" id="link1"
            class="rounded-sm mb-8 z-10 inline-block mr-6 md:mr-8 transition ease-in-out border-2 border-white p-2 px-3 md:p-2 md:px-4 text-base md:text-lg hover:bg-white hover:text-[#131721] hover:transition-all">
            Visit Site <i-mdi-arrow-top-right class="inline ml-1  text-xl -mr-1" />
          </nuxt-link>
        </div>
      </div>
    </div>
    <MainFooter />
  </div>
</template>
  