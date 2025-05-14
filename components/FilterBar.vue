<template>
  <div class="flex flex-wrap justify-between items-center gap-4 mb-8">
    <div class="flex flex-wrap gap-2">
      <button 
        @click="selectCategory('all')" 
        :class="[
          'btn',
          selectedCategory === 'all' 
            ? 'btn-primary' 
            : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
        ]"
      >
        All
      </button>
      <button 
        v-for="category in categories" 
        :key="category"
        @click="selectCategory(category)"
        :class="[
          'btn',
          selectedCategory === category 
            ? 'btn-primary' 
            : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
        ]"
      >
        {{ category }}
      </button>
    </div>
    
    <div class="relative">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Icon name="heroicons:magnifying-glass" class="w-5 h-5 text-neutral-500" />
      </div>
      <input 
        type="text" 
        v-model="searchQuery" 
        placeholder="Search..." 
        class="pl-10 pr-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  categories: {
    type: Array,
    required: true
  }
})

const selectedCategory = ref('all')
const searchQuery = ref('')

const emit = defineEmits(['filter-change'])

watch([selectedCategory, searchQuery], () => {
  emit('filter-change', {
    category: selectedCategory.value,
    search: searchQuery.value
  })
}, { immediate: true })

const selectCategory = (category) => {
  selectedCategory.value = category
}
</script>
