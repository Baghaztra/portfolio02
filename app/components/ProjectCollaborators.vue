<template>
  <p v-if="team.length" class="collab">
    <span>With: </span>
    <template v-for="(p, i) in team" :key="p.name">
      <a v-if="p.site" :href="p.site" target="_blank" rel="noopener noreferrer">{{ p.name }}</a>
      <span v-else>{{ p.name }}</span>
      <span v-if="i < team.length - 1"> · </span>
    </template>
  </p>
</template>

<script setup lang="ts">
import { getCollaborators, type Project } from '~/data/projects';

const props = defineProps<{ project: Project }>();
const team = computed(() => getCollaborators(props.project));
</script>
