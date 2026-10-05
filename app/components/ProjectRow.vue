<template>
  <li class="work-item">
    <span class="work-index">[{{ project.index }}]</span>
    <div>
      <h3 class="work-name">{{ project.file }}</h3>
      <p class="work-desc">
        <strong>{{ project.name }}</strong> — {{ project.purpose }}
      </p>
      <div class="work-meta">
        <ul class="tag-row" :aria-label="`Technologies for ${project.name}`">
          <li v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</li>
        </ul>
        <span class="work-year">{{ project.year }}</span>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import type { FeaturedProject } from '~/data/portfolio';

defineProps<{ project: FeaturedProject }>();
</script>
