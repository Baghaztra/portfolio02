<template>
  <div class="card group hover:shadow-lg">
    <div class="relative overflow-hidden">
      <img :src="project.image" :alt="project.title" class="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105" />
      <div class="absolute top-3 right-3 flex flex-wrap gap-2 justify-end">
        <span v-for="category in project.categories" :key="category" 
              class="text-xs px-2 py-1 rounded-full bg-neutral-800/70 text-white backdrop-blur-sm">
          {{ category }}
        </span>
      </div>
    </div>
    
    <div class="p-6">
      <h3 class="text-xl font-semibold mb-2 text-neutral-800 dark:text-neutral-200">{{ project.title }}</h3>
      <p class="text-neutral-600 dark:text-neutral-400 mb-4">{{ project.description }}</p>
      
      <div class="flex flex-wrap gap-2 mb-6">
        <span v-for="tech in project.technologies" :key="tech"
              class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
          {{ tech }}
        </span>
      </div>
      
      <div class="flex space-x-4">
        <a v-if="project.repository" :href="project.repository" target="_blank" rel="noopener noreferrer"
           class="inline-flex items-center text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-500">
          <Icon name="mdi:github" class="w-5 h-5 mr-1" />
          Repository
        </a>
        <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank" rel="noopener noreferrer"
           class="inline-flex items-center text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-500">
          <Icon name="heroicons:globe-alt" class="w-5 h-5 mr-1" />
          Live Demo
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>