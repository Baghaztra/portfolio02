<template>
  <div class="card group hover:shadow-lg">
    <div class="relative overflow-hidden">
      <img :src="article.image" :alt="article.title" class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
      <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <p class="text-white text-sm">{{ formatDate(article.date) }}</p>
      </div>
    </div>
    
    <div class="p-6">
      <h3 class="text-xl font-semibold mb-2 text-neutral-800 dark:text-neutral-200">{{ article.title }}</h3>
      <p class="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3">{{ article.excerpt }}</p>
      
      <div class="flex flex-wrap gap-2 mb-6">
        <span v-for="tag in article.tags" :key="tag"
              class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-neutral-100 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-300">
          {{ tag }}
        </span>
      </div>
      
      <NuxtLink :to="`/articles/${article.slug}`"
             class="inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-500 hover:text-primary-700 dark:hover:text-primary-400">
        Read Article
        <Icon name="heroicons:arrow-right" class="w-4 h-4 ml-1" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true
  }
})

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}
</script>