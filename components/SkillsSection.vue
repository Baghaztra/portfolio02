<template>
  <div class="py-16 bg-neutral-50 dark:bg-neutral-850">
    <div class="container-custom">
      <h2 class="text-3xl font-bold text-center mb-12 text-neutral-800 dark:text-neutral-200">My Skills</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="(category, index) in skillCategories" :key="index" class="card p-6">
          <h3 class="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200 flex items-center">
            <Icon :name="category.icon" class="w-6 h-6 mr-2 text-primary-600 dark:text-primary-500" />
            {{ category.name }}
          </h3>
          
          <div class="space-y-4">
            <div v-for="skill in category.skills" :key="skill.name" class="space-y-1">
              <div class="flex justify-between">
                <span class="text-neutral-700 dark:text-neutral-300">{{ skill.name }}</span>
                <span class="text-neutral-500 dark:text-neutral-400 text-sm">{{ skill.level }}</span>
              </div>
              <div class="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                <div class="bg-primary-600 dark:bg-primary-500 h-2 rounded-full" :style="{ width: skill.percentage + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const skillCategories = [
  {
    name: 'Frontend Development',
    icon: 'mdi:code-tags',
    skills: [
      { name: 'HTML/CSS', level: 'Expert', percentage: 90 },
      { name: 'JavaScript', level: 'Advanced', percentage: 85 },
      { name: 'Vue.js/Nuxt.js', level: 'Advanced', percentage: 80 },
      { name: 'React', level: 'Intermediate', percentage: 70 },
      { name: 'Tailwind CSS', level: 'Advanced', percentage: 85 }
    ]
  },
  {
    name: 'Backend Development',
    icon: 'mdi:server',
    skills: [
      { name: 'Node.js', level: 'Intermediate', percentage: 75 },
      { name: 'Python', level: 'Intermediate', percentage: 70 },
      { name: 'APIs', level: 'Advanced', percentage: 80 },
      { name: 'SQL Databases', level: 'Intermediate', percentage: 65 },
      { name: 'NoSQL Databases', level: 'Beginner', percentage: 50 }
    ]
  },
  {
    name: 'Other Skills',
    icon: 'mdi:tools',
    skills: [
      { name: 'Git/GitHub', level: 'Advanced', percentage: 85 },
      { name: 'Responsive Design', level: 'Expert', percentage: 90 },
      { name: 'UI/UX Fundamentals', level: 'Intermediate', percentage: 70 },
      { name: 'Testing', level: 'Intermediate', percentage: 65 },
      { name: 'DevOps Basics', level: 'Beginner', percentage: 50 }
    ]
  }
]
</script>