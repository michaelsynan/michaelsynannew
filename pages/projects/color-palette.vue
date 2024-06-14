<template>
    <div class="w-full flex flex-col justify-between text-white">
        <div class="text-left  text-4xl md:text-6xl font-bold mt-20 mb-10 w-11/12 md:w-2/3 mx-auto ">
            COLOR PALETTE GENERATOR
        </div>
        <div class="flex justify-center">
            <div class="w-11/12 md:w-2/3">
                <div class="max-w-4xl mx-auto mb-14">
                    <img src="/colorpalette_collage.png" alt="Art Image" class="mx-auto  rounded-lg mb-4 md:mb-10">
                </div>
                <div class="max-w-4xl mx-auto mb-10">
                    <p class="text-lg md:text-xl mb-4">The Color Palette Generator uses Chroma.js to effortlessly create and export color palettes. 
                        Designed for those who integrate Tailwind CSS into their projects, it offers up to eight base colors, a color scheme picker, 
                        and a range of shades. Planned features include palette saving, a component library, and gradient creation.</p>
                        <p class="text-lg md:text-xl">This project will be relaunching soon, stay tuned.</p>
                </div>
                <div class="max-w-4xl mx-auto mb-32">
                    <nuxt-link target="_blank" to="https://colors.formworkstudios.com/" id="link1"
                        class="rounded-sm mb-8 z-10 inline-block mr-6 md:mr-8 transition ease-in-out border-2 border-white p-2 px-3 md:p-2 md:px-4 text-base md:text-lg hover:bg-white hover:text-[#131721] hover:transition-all">
                        Visit Site <i-mdi-arrow-top-right class="inline ml-1 -mr-1 text-xl" />
                    </nuxt-link>
                    <nuxt-link target="_blank" to="https://github.com/michaelsynan/nuxt-color-palette" id="link2"
                        class="rounded-sm mb-8 z-10 inline-block mr-6 md:mr-8 transition ease-in-out border-2 border-white p-2 px-3 md:p-2 md:px-4 text-base md:text-lg hover:bg-white hover:text-[#131721] hover:transition-all">
                        Star on GitHub <i-mdi-github class="inline ml-1 text-xl -mr-1" />
                    </nuxt-link>
                </div>
            </div>
        </div>
        <MainFooter />
    </div>
</template>