<template>
  <ol class="work-list" :class="{ 'work-list--featured': featured }">
    <ProjectRow
      v-for="row in rows"
      :key="row.project.slug"
      :index="row.index"
      :heading="row.heading"
      :strong="row.strong"
      :desc="row.desc"
      :tags="row.tags"
      :meta="row.meta"
      clickable
      @open="active = row.project"
    />
  </ol>

  <!-- ponytail: mounted on demand, image loads only when a row opens it -->
  <ProjectDetail v-if="active" :key="active.slug" :project="active" @close="active = null" />
</template>

<script setup lang="ts">
import type { Project } from '~/data/projects';

const props = defineProps<{ projects: Project[]; featured?: boolean }>();

const active = ref<Project | null>(null);

// ponytail: rows show a short summary, the full text lives in ProjectDetail
const clip = (text: string, max = 175) => {
  if (text.length <= max) return text;
  const cut = text.lastIndexOf(' ', max);
  return `${text.slice(0, cut > 0 ? cut : max).trimEnd()}...`;
};

// ponytail: featured rows keep the compact home format, the rest use the archive format
const rows = computed(() =>
  props.projects.map((p, i) =>
    props.featured && p.featured
      ? {
          project: p,
          index: p.featured.index,
          heading: p.featured.file,
          strong: p.title,
          desc: clip(p.summary),
          tags: p.featured.tags,
          meta: p.year
        }
      : {
          project: p,
          index: String(i + 1).padStart(3, '0'),
          heading: p.title,
          strong: '',
          desc: clip(p.summary),
          tags: p.stack,
          meta: `${p.role} · ${p.year}`
        }
  )
);
</script>
