<template>
  <div class="py-16 bg-neutral-100 dark:bg-neutral-800">
    <div class="container-custom">
      <SectionHeading
        title="My Skills"
        subtitle="I love to learn and grow, and I always looking for new things to learn." />

      <div class="grid md:grid-cols-3 grid-cols-1 gap-6">
        <div
          v-for="(category, index) in skills"
          :key="index"
          class="card p-6 rounded-2xl bg-white dark:bg-neutral-900 shadow transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
          <h3
            class="text-xl font-semibold mb-4 flex items-center text-neutral-800 dark:text-neutral-200">
            <Icon
              :name="category.icon"
              class="w-6 h-6 mr-2 text-primary-600 dark:text-primary-500" />
            {{ category.name }}
          </h3>
          <ul class="divide-y divide-neutral-300 dark:divide-neutral-700">
            <li
              v-for="skill in category.skills"
              :key="skill"
              class="flex items-center gap-2 py-2 text-neutral-700 dark:text-neutral-300">
              <Icon
                name="mdi:check-circle-outline"
                class="text-primary-600 dark:text-primary-500 w-5 h-5" />
              <span>{{ skill }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { skills } from "~/utils/data";
</script>
