// https://nuxt.com/docs/api/configuration/nuxt-config
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";
import tailwindTypography from '@tailwindcss/typography'

export default defineNuxtConfig({
  target: 'static',
  ssr: false,
  devtools: { enabled: false },
  app: {
    // baseURL: '/michael-synan/',  
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    ["unplugin-icons/nuxt", { autoInstall: true }],
    '@vueuse/nuxt',
    '@nuxt/content',
    '@pinia/nuxt',
  ],
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
  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.createdAt) {
        const date = new Date(document.createdAt);
        document.createdAt = date.toISOString().split('T')[0]; // Format: YYYY-MM-DD
      }
    },
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
