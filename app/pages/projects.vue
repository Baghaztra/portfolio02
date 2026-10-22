<template>
  <div>
    <h1 class="sr-only">Projects — Baghaztra Van Ril</h1>

    <WindowFrame id="projects-archive" title="WORK.DIR — ARCHIVE">
      <p class="kicker">> ls ./projects --all</p>
      <h2 class="proj-heading">Project archive</h2>
      <p>
        Everything I've built, from passion projects to paid work, whether solo or as part of a team.
      </p>
      <ProjectList :projects="archiveProjects" />
      <NuxtLink to="/" class="more-link">> back to home_</NuxtLink>
    </WindowFrame>
  </div>
</template>

<script setup lang="ts">
import { archiveProjects } from '~/data/projects';

useHead({
  title: 'Projects — Baghaztra Van Ril',
  meta: [
    { property: 'og:title', content: 'Projects — Baghaztra Van Ril' },
    { property: 'og:url', content: 'https://bgztra.my.id/projects/' }
  ],
  link: [{ rel: 'canonical', href: 'https://bgztra.my.id/projects/' }]
});
</script>
