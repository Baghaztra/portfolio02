// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "nuxt-icon"],
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "light",
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Portfolio | Baghaztra",
      link: [{ rel: "icon", href: "/icon.ico" }],
    },
  },
  runtimeConfig: {
    public: {
      FB_API_KEY: process.env.FB_API_KEY,
      FB_AUTH_DOMAIN: process.env.FB_AUTH_DOMAIN,
      FB_PROJECT_ID: process.env.FB_PROJECT_ID,
      FB_STORAGE_BUCKET: process.env.FB_STORAGE_BUCKET,
      FB_MESSAGING_SENDER_ID: process.env.FB_MESSAGING_SENDER_ID,
      FB_APP_ID: process.env.FB_APP_ID,
      FB_MEASUREMENT_ID: process.env.FB_MEASUREMENT_ID,
    }
  },
});
