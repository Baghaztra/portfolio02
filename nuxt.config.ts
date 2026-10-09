// https://nuxt.com/docs/api/configuration/nuxt-config
import { profile } from './app/data/portfolio';

const siteUrl = 'https://bgztra.my.id';
const shareImage = `${siteUrl}${profile.image}`;

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Baghaztra Van Ril | Software Engineer',
      meta: [
        { name: 'description', content: 'Portfolio of Baghaztra Van Ril, a software engineer.' },
        { name: 'theme-color', content: '#ece7db' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Baghaztra Van Ril | Software Engineer' },
        { property: 'og:image', content: shareImage },
        { property: 'og:image:alt', content: profile.imageAlt },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: shareImage },
        { name: 'twitter:image:alt', content: profile.imageAlt }
      ],
      link: [
        { rel: 'icon', type: 'image/jpeg', href: profile.image },
        { rel: 'apple-touch-icon', href: profile.image }
      ]
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