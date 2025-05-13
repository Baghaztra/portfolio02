<template>
  <div class="text-center mb-12">
    <h2 class="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">{{ title }}</h2>
    <p v-if="subtitle" class="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">{{ subtitle }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  }
})
</script>