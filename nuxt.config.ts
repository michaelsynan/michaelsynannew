// https://nuxt.com/docs/api/configuration/nuxt-config
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";
import tailwindTypography from '@tailwindcss/typography'

export default defineNuxtConfig({
  target: 'static',
  ssr: false,
  devtools: { enabled: false },
  runtimeConfig: {
    openaiApiKey: process.env.OPENAI_API_KEY
  },
  app: { 
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    ["unplugin-icons/nuxt", { autoInstall: true }],
    '@vueuse/nuxt',
    '@nuxt/content',
    '@pinia/nuxt',
    '@nuxt-alt/markdown-it'
  ],
  markdownit: {
    runtime: true
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },

  },
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
    config: {
      plugins: [tailwindTypography],
    }
  },
  content: {
    documentDriven: true
  },
  vite: {
    plugins: [
      Components({
        resolvers: IconsResolver(),
      }),
      Icons(),
    ],
    optimizeDeps: { exclude: ["fsevents"] },
  },
})
