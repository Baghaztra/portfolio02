<template>
  <div class="py-20">
    <div class="container-custom">
      <SectionHeading 
        title="About Me" 
        subtitle="Learn more about my background, experience, and what drives me as a developer."
      />
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <div>
          <img src="https://images.pexels.com/photos/5483064/pexels-photo-5483064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
               alt="Developer profile" 
               class="w-full h-auto rounded-lg shadow-lg" />
        </div>
        
        <div>
          <h3 class="text-2xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">Who I Am</h3>
          <p class="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
            {{ about.bio }}
          </p>
          
          <h3 class="text-2xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">Personal Information</h3>
          <ul class="space-y-3 mb-6">
            <li class="flex items-center text-neutral-600 dark:text-neutral-400">
              <Icon name="mdi:account" class="w-5 h-5 mr-3 text-primary-600 dark:text-primary-500" />
              <span><strong>Name:</strong> {{ about.name }}</span>
            </li>
            <li class="flex items-center text-neutral-600 dark:text-neutral-400">
              <Icon name="mdi:briefcase" class="w-5 h-5 mr-3 text-primary-600 dark:text-primary-500" />
              <span><strong>Role:</strong> {{ about.role }}</span>
            </li>
            <li class="flex items-center text-neutral-600 dark:text-neutral-400">
              <Icon name="mdi:map-marker" class="w-5 h-5 mr-3 text-primary-600 dark:text-primary-500" />
              <span><strong>Location:</strong> {{ about.location }}</span>
            </li>
            <li class="flex items-center text-neutral-600 dark:text-neutral-400">
              <Icon name="mdi:email" class="w-5 h-5 mr-3 text-primary-600 dark:text-primary-500" />
              <span><strong>Email:</strong> {{ about.email }}</span>
            </li>
          </ul>
          
          <div class="mt-8">
            <NuxtLink to="/contact" class="btn btn-primary">
              Contact Me
            </NuxtLink>
          </div>
        </div>
      </div>
      
      <!-- Education Section -->
      <div class="mb-20">
        <h3 class="text-2xl font-semibold mb-8 text-neutral-800 dark:text-neutral-200 text-center">Education</h3>
        
        <div class="space-y-6">
          <div v-for="(edu, index) in about.education" :key="index" 
               class="card p-6 transition-all hover:shadow-lg">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h4 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200">{{ edu.degree }}</h4>
                <p class="text-neutral-600 dark:text-neutral-400">{{ edu.institution }}</p>
              </div>
              <div class="text-neutral-500 dark:text-neutral-500 text-sm md:text-right">
                {{ edu.year }}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Experience Section -->
      <div>
        <h3 class="text-2xl font-semibold mb-8 text-neutral-800 dark:text-neutral-200 text-center">Work Experience</h3>
        
        <div class="space-y-6">
          <div v-for="(exp, index) in about.experience" :key="index" 
               class="card p-6 transition-all hover:shadow-lg">
            <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h4 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200">{{ exp.position }}</h4>
                <p class="text-neutral-600 dark:text-neutral-400 font-medium">{{ exp.company }}</p>
                <p class="text-neutral-600 dark:text-neutral-400 mt-2">{{ exp.description }}</p>
              </div>
              <div class="text-neutral-500 dark:text-neutral-500 text-sm md:text-right whitespace-nowrap">
                {{ exp.period }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { about } from '~/utils/data'

// Set page meta
useHead({
  title: 'About Me - Developer Portfolio',
  meta: [
    { name: 'description', content: 'Learn more about my experience, skills, and background as a software developer.' }
  ]
})
</script>