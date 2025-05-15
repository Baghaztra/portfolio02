// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon'
  ],
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light'
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Portfolio | Baghaztra',
      link: [
        { rel: 'icon', href: '/icon.png' }
      ]
    }
  }
})
