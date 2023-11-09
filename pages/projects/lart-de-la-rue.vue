<template>
  <div class="w-full flex flex-col justify-between text-white">
    <div class="text-center text-5xl md:text-7xl font-bold mb-10 mt-24">
      L'ART DE LA RUE
    </div>
    <div class="flex justify-center">
      <div class="w-11/12 md:w-2/3">
        <!-- Top Image -->
        <img src="/lart.jpg" alt="Art Image" class="mx-auto mb-8 rounded-lg"> <!-- Adjust mb-8 to the desired margin -->

        <!-- Row of Three Images -->
        <div class="flex mx-auto w-full space-x-4 md:space-x-10 mt-8 mb-8">
          <!-- Adjust mt-8 to match the bottom margin of the top image -->
          <div class="flex-1 flex items-center">
            <img src="/lart-mobile1.jpg" alt="Art Image" class="w-full object-contain rounded-lg">
          </div>
          <div class="flex-1 flex items-center">
            <img src="/lart-mobile2.jpg" alt="Art Image" class="w-full object-contain rounded-lg">
          </div>
          <div class="flex-1 flex items-center">
            <img src="/lart-mobile3.jpg" alt="Art Image" class="w-full object-contain rounded-lg">
          </div>
        </div>
<div class="max-w-4xl">
        <h2 class="text-3xl font-bold tracking-wide mt-20 uppercase mb-8">About This Project</h2>
        <p class="text-lg md:text-xl text-white mb-4 tracking-wide">
          L'ART DE LA RUE is a boutique Jewelry shop run by Mohammad, an immigrant whose work combines his native
          country's culture with NYC to
          create unique jewelry. He needed an affordable solution to establish his brand online and begin marketing
          efforts.
          The navigation menu was strategically positioned at the bottom of the screen to enhance usability for mobile
          users and to
          facilitate quick engagement for visitors seeking to follow on Instagram or send a message. </p>
          </div>
          <div class="max-w-4xl">
        <h2 class="pt-28 text-3xl font-bold tracking-wide uppercase mb-8 ">Design</h2>
        <p class="text-lg md:text-xl text-white mb-20">
          Dortmund's bold and geometric characteristics mirror the distinctive style of the jewelry, making it an ideal
          choice for the logotype and headers to ensure they stand out in a similar fashion, while Georgia's classic
          serifs and legibility provide a seamless and clear reading experience for the body text, complementing the
          striking presence of the headers.
        </p>
        </div>
        <div class="md:grid md:grid-cols-2 w-full my-20">
          <div class="mb-4 md:mb-0 flex items-center justify-start">
            <h2 class="text-5xl font-italic text-left uppercase !opacity-90 tracking-widest"><span
                class="opacity-20">Fonts used</span></h2>
          </div>
          <div class="flex flex-col text-left justify-center">
            <h3 class="font-dortmond text-3xl md:text-[60px] leading-normal md:leading-loose">THIS IS DORTMUND</h3>
            <h3 class="lart-serif text-3xl md:text-[40px] leading-normal md:leading-loose">This is Georgia</h3>
          </div>
        </div>
        


        <div class="max-w-4xl">
        <p class="text-lg md:text-xl text-white mb-4">
          Rich, earthy tones of orange and green are used to evoke the natural elements of the jewelry, while the black
          shades were used to
          create an urban yet sophisticated feel. The colors were chosen to complement the jewelry and to create a sense
          of warmth, while using
          a dark background to allow the images to stand out.
        </p>
        </div>
        <div class="md:grid md:grid-cols-2 w-full my-20 items-center">
          <div class="mb-4 md:mb-0 flex items-center justify-start">
            <h2 class="text-5xl font-italic text-left uppercase !opacity-90 tracking-widest"><span
                class="opacity-20">COLORS</span></h2>
          </div>
          
          <div class="flex space-x-4 justify-start">
            <div class="w-16 h-16 bg-[#d77705] relative hover:bg-opacity-50">
              <div
                class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-transparent text-white text-xs transition-opacity duration-300">
                #d77705
              </div>
            </div>
            <div class="w-16 h-16 bg-[#2dd4c0] relative hover:bg-opacity-50">
              <div
                class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-transparent text-white text-xs transition-opacity duration-300">
                #2dd4c0
              </div>
            </div>
            <div class="w-16 h-16 bg-[#0f0f0f] relative hover:bg-opacity-50">
              <div
                class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-transparent text-white text-xs transition-opacity duration-300">
                #0f0f0f
              </div>
            </div>
            <div class="w-16 h-16 bg-[#1a1a1a] relative hover:bg-opacity-50">
              <div
                class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-transparent text-white text-xs transition-opacity duration-300">
                #1a1a1a
              </div>
            </div>
          </div>
        </div>

        <div class="pb-20">
          <div class="max-w-4xl">
          <h2 class="pt-28 text-3xl font-bold tracking-wide uppercase mb-8">Technology</h2>
          <p class="text-lg md:text-xl text-white mb-4">
          The site is built with <a href="https://nuxtjs.org" class="underline" target="_blank"
            rel="noopener noreferrer">Nuxt.js</a>, a powerful meta-framework of Vue.js, designed for simple, static
          deployment and optimized for high performance. It is deployed on Vercel and styled with <a
            href="https://tailwindcss.com" class="underline" target="_blank" rel="noopener noreferrer">Tailwind CSS</a>
          for a responsive, clean design.
        </p>
</div>
      </div>
    </div>
  </div>

  <MainFooter />
</div>
</template>
  