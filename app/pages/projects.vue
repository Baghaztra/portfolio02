<template>
  <div>
    <h1 class="sr-only">Projects — Baghaztra Van Ril</h1>

    <WindowFrame id="projects-archive" title="WORK.DIR — ARCHIVE">
      <p class="kicker">> ls ./projects --all</p>
      <h2 class="proj-heading">Project archive</h2>
      <p>
        Everything I've built, from passion projects to paid work, whether solo or as part of a team.
      </p>
      <ol class="work-list">
        <ProjectRow
          v-for="(p, i) in archiveProjects"
          :key="p.slug"
          :index="String(i + 1).padStart(3, '0')"
          :heading="p.title"
          :desc="p.summary"
          :tags="p.stack"
          :meta="`${p.role} · ${p.year}`"
          clickable
          @open="openProject(p)"
        />
      </ol>
      <NuxtLink to="/" class="more-link">> back to home_</NuxtLink>
    </WindowFrame>

    <!-- ponytail: mounted on demand, image loads only when a row opens it -->
    <WindowFrame
      v-if="active"
      :key="active.slug"
      :id="`sheet-${active.slug}`"
      :title="`SHEET — ${active.slug.toUpperCase()}`"
      v-model:maximized="detailOpen"
      @close="active = null"
    >
      <div v-if="active.image" class="proj-shot">
        <NuxtPicture
          :src="active.image"
          width="960"
          height="540"
          sizes="640px sm:960px"
          format="avif,webp"
          :img-attrs="{ alt: active.imageAlt, loading: 'eager', fetchpriority: 'high' }"
        />
      </div>
      <h2 class="proj-name">{{ active.title }}</h2>
      <ProjectCollaborators :project="active" />
      <p>{{ active.summary }}</p>
      <ul class="tag-row" :aria-label="`Stack for ${active.title}`">
        <li v-for="t in active.stack" :key="t" class="tag">{{ t }}</li>
      </ul>
      <p class="proj-links">
        <template v-for="(r, ri) in active.repos" :key="r.url">
          <template v-if="ri > 0"> · </template>
          <a :href="r.url" target="_blank" rel="noopener noreferrer">{{ r.label }}</a>
        </template>
        <template v-if="active.repos.length && active.demoUrl"> · </template>
        <a v-if="active.demoUrl" :href="active.demoUrl" target="_blank" rel="noopener noreferrer">Live demo</a>
        <span v-if="!active.repos.length && !active.demoUrl" class="proj-nolink">No public link</span>
      </p>
    </WindowFrame>
  </div>
</template>

<script setup lang="ts">
import { archiveProjects, type Project } from '~/data/projects';

const active = ref<Project | null>(null);
const detailOpen = ref(false);

const openProject = (p: Project) => {
  active.value = p;
  detailOpen.value = true;
};

useHead({
  title: 'Projects — Baghaztra Van Ril',
  link: [{ rel: 'canonical', href: 'https://bgztra.my.id/projects/' }]
});
</script>
