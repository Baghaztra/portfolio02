<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    
    <main class="flex-grow">
      <NuxtPage />
    </main>
    
    <Footer />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Portfolio | Baghaztra',
  description: 'The official portfolio of Baghaztra, a Software Engineering Technology student with a particular interest in programming logic. Explore my projects and feel free to connect!',
  ogTitle: 'Portfolio | Baghaztra',
  ogDescription: 'Welcome to my portfolio!',
  ogImage: 'https://bgztra.my.id/_nuxt/profile.B8ILKl6i.jpg',
  ogUrl: 'https://portfolio.bgztra.my.id',
  twitterCard: 'summary_large_image'
})
</script>
