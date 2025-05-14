<template>
  <div class="py-20">
    <div class="container-custom">
      <SectionHeading 
        title="Get In Touch" 
        subtitle="Feel free to reach out if you have any questions or want to work together."
      />
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div class="card p-6 flex flex-col items-center text-center">
          <div class="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-500 rounded-full flex items-center justify-center mb-4">
            <Icon name="mdi:email" class="w-7 h-7" />
          </div>
          <h3 class="text-xl font-semibold mb-2 text-neutral-800 dark:text-neutral-200">Email</h3>
          <p class="text-neutral-600 dark:text-neutral-400 mb-4">{{ about.email }}</p>
          <a :href="`mailto:${about.email}`" class="text-primary-600 dark:text-primary-500 hover:underline">Send an email</a>
        </div>
        
        <div class="card p-6 flex flex-col items-center text-center">
          <div class="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-500 rounded-full flex items-center justify-center mb-4">
            <Icon name="mdi:map-marker" class="w-7 h-7" />
          </div>
          <h3 class="text-xl font-semibold mb-2 text-neutral-800 dark:text-neutral-200">Location</h3>
          <p class="text-neutral-600 dark:text-neutral-400">{{ about.location }}</p>
        </div>
        
        <div class="card p-6 flex flex-col items-center text-center">
          <div class="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-500 rounded-full flex items-center justify-center mb-4">
            <Icon name="mdi:github" class="w-7 h-7" />
          </div>
          <h3 class="text-xl font-semibold mb-2 text-neutral-800 dark:text-neutral-200">GitHub</h3>
          <p class="text-neutral-600 dark:text-neutral-400 mb-4">github.com/username</p>
          <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" class="text-primary-600 dark:text-primary-500 hover:underline">View Profile</a>
        </div>
      </div>
      
      <div class="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-8">
        <h3 class="text-2xl font-semibold mb-6 text-neutral-800 dark:text-neutral-200">Send Me a Message</h3>
        <ContactForm />
      </div>
    </div>
  </div>
</template>

<script setup>
import { about } from '~/utils/data'

useHead({
  title: 'Contact | Baghaztra',
  meta: [
    { name: 'description', content: 'Get in touch with me for project inquiries or collaboration opportunities.' }
  ]
})
</script>