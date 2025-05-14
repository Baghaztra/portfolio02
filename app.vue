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
  title: 'portfolio | Baghaztra',
  description: 'Welcome to my portfolio! I am a passionate developer with a love for creating beautiful and functional web applications. Explore my projects and get in touch!',
  image: '/assets/images/informal.jpg',
  url: 'https://yourwebsite.com',
  type: 'website'
})
</script>
