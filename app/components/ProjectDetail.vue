<template>
  <WindowFrame
    :id="`sheet-${project.slug}`"
    :title="`SHEET — ${project.slug.toUpperCase()}`"
    v-model:maximized="maximized"
    @close="$emit('close')"
  >
    <div class="sheet-inner">
      <div class="sheet-head">
        <h2 class="proj-name">{{ project.title }}</h2>
        <p class="sheet-meta">{{ project.role }} · {{ project.year }}</p>
      </div>
      <div class="sheet-grid">
        <div v-if="project.image" class="proj-shot">
          <NuxtPicture
            :src="project.image"
            width="960"
            height="540"
            sizes="640px sm:960px"
            format="avif,webp"
            :img-attrs="{ alt: project.imageAlt, loading: 'eager', fetchpriority: 'high' }"
          />
        </div>
        <div class="sheet-info">
          <p class="sheet-summary">{{ project.summary }}</p>
          <dl class="sheet-facts">
            <template v-if="project.problem">
              <dt>Problem</dt>
              <dd>{{ project.problem }}</dd>
            </template>
            <template v-if="project.decision">
              <dt>Decision</dt>
              <dd>{{ project.decision }}</dd>
            </template>
            <template v-if="project.outcome">
              <dt>Outcome</dt>
              <dd>{{ project.outcome }}</dd>
            </template>
            <dt>Stack</dt>
            <dd>
              <ul class="tag-row" :aria-label="`Stack for ${project.title}`">
                <li v-for="t in project.stack" :key="t" class="tag">{{ t }}</li>
              </ul>
            </dd>
            <dt>Links</dt>
            <dd>
              <p class="proj-links">
                <template v-for="(r, ri) in project.repos" :key="r.url">
                  <template v-if="ri > 0"> · </template>
                  <a :href="r.url" target="_blank" rel="noopener noreferrer">{{ r.label }}</a>
                </template>
                <template v-if="project.repos.length && project.demoUrl"> · </template>
                <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank" rel="noopener noreferrer">Live demo</a>
                <span v-if="!project.repos.length && !project.demoUrl" class="proj-nolink">No public link</span>
              </p>
            </dd>
          </dl>
          <ProjectCollaborators :project="project" />
        </div>
      </div>
    </div>
  </WindowFrame>
</template>

<script setup lang="ts">
import type { Project } from '~/data/projects';

defineProps<{ project: Project }>();
defineEmits<{ close: [] }>();

// ponytail: detail opens as a modal; restoring it leaves an inline sheet under the list
const maximized = ref(true);
</script>
