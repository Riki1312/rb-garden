// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: "@nuxt-themes/typography",
  modules: ["@nuxt/content"],
  content: {
    documentDriven: true,
    highlight: {
      preload: ["vue", "ts"],
      theme: {
        dark: "github-dark",
        default: "github-light",
      },
    },
  },
});
