// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Baghaztra Van Ril — Software Engineer',
      meta: [
        { name: 'description', content: 'Portfolio of Baghaztra Van Ril, a software engineer building web apps, backend and API systems, AI-powered workflows, and IoT devices.' },
        { name: 'theme-color', content: '#ece7db' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  image: {
    format: ['avif', 'webp']
  },
  experimental: {
    // ponytail: static content only, skip .payload.json files entirely
    payloadExtraction: false
  }
})