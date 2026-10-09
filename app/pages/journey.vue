<template>
  <div>
    <h1 class="sr-only">Background and milestones — Baghaztra Van Ril</h1>

    <WindowFrame id="journey-log" title="MILESTONE.LOG — JOURNEY">
      <p class="kicker">> cat ./journey.log</p>
      <h2 class="proj-heading">Background &amp; Milestones</h2>
      <p>Education, work, and selected milestones in chronological order.</p>
      <ol class="work-list">
        <ProjectRow
          v-for="(item, i) in journeyItems"
          :key="item.title"
          :index="String(journeyItems.length - i).padStart(3, '0')"
          :heading="item.title"
          :desc="item.desc"
          :tags="item.tags"
          :meta="item.period"
        />
      </ol>
      <NuxtLink to="/" class="more-link">> back to home_</NuxtLink>
    </WindowFrame>
  </div>
</template>

<script setup lang="ts">
import { journeyItems } from '~/data/journey';

useHead({
  title: 'Background & Milestones — Baghaztra Van Ril',
  meta: [
    { property: 'og:title', content: 'Background & Milestones — Baghaztra Van Ril' },
    { property: 'og:url', content: 'https://bgztra.my.id/journey/' }
  ],
  link: [{ rel: 'canonical', href: 'https://bgztra.my.id/journey/' }]
});
</script>
