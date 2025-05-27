<template>
  <div class="py-20">
    <div class="container-custom">
      <SectionHeading 
        title="My Projects" 
        subtitle="A showcase of my development work, personal projects, and contributions."
      />
      
      <FilterBar 
        :categories="uniqueCategories" 
        @filter-change="handleFilterChange"
      />
      
      <div v-if="filteredProjects.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard 
          v-for="project in filteredProjects" 
          :key="project.id" 
          :project="project"
        />
      </div>
      
      <div v-else class="text-center py-12">
        <p class="text-neutral-600 dark:text-neutral-400 text-lg mb-4">No projects found matching your criteria.</p>
        <button @click="resetFilters" class="btn btn-outline">
          Reset Filters
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { projects } from '~/utils/data'

const filters = reactive({
  category: 'all',
  search: ''
})

// Extract all unique categories from projects
const uniqueCategories = computed(() => {
  const categories = new Set()
  projects.forEach(project => {
    project.categories.forEach(category => {
      categories.add(category)
    })
  })
  return Array.from(categories)
})

// Filter projects based on selected category and search query
const filteredProjects = computed(() => {
  return projects.filter(project => {
    // Filter by category
    const categoryMatch = filters.category === 'all' || project.categories.includes(filters.category)
    
    // Filter by search query
    const searchQuery = filters.search.toLowerCase()
    const searchMatch = !searchQuery || 
      project.title.toLowerCase().includes(searchQuery) ||
      project.description.toLowerCase().includes(searchQuery) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchQuery))
    
    return categoryMatch && searchMatch
  })
})

const handleFilterChange = (newFilters) => {
  filters.category = newFilters.category
  filters.search = newFilters.search
}

const resetFilters = () => {
  filters.category = 'all'
  filters.search = ''
}

useHead({
  title: 'Projects | Baghaztra',
  meta: [
    { name: 'description', content: 'Showcase of my projects across various categories and technologies.' },
    { name: 'robots', content: 'noindex' }
  ]
})
</script>