// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: ["@vueuse/nuxt"],
  vite: {
    build: { assetsInlineLimit: 0 },
  },
});
