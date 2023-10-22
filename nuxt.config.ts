// https://nuxt.com/docs/api/configuration/nuxt-config
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";

export default defineNuxtConfig({
  app: {
    baseURL: '/nuxt-tailwind-starter/',
    buildAssetsDir: 'assets',
  },
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    ["unplugin-icons/nuxt", { autoInstall: true }],
    '@vueuse/nuxt',
],
postcss: {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
},
tailwindcss: {
  cssPath: '~/assets/css/main.css',
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
