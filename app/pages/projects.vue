<template>
  <div>
    <h1 class="sr-only">Projects — Baghaztra Van Ril</h1>

    <WindowFrame title="WORK.DIR — ARCHIVE">
      <p class="kicker">> ls ./projects --all</p>
      <h2 class="proj-heading">Project archive</h2>
      <p>
        Previous builds, copied from the earlier portfolio with their original
        descriptions. Full decision write-ups for the newest work ship next.
      </p>
      <ol class="proj-grid">
        <li v-for="(p, i) in projects" :id="p.slug" :key="p.slug" class="proj-card">
          <article>
            <div class="proj-shot">
              <NuxtPicture
                :src="p.image"
                width="640"
                height="360"
                sizes="320px sm:640px"
                format="avif,webp"
                :img-attrs="{
                  alt: p.imageAlt,
                  loading: i === 0 ? 'eager' : 'lazy',
                  fetchpriority: i === 0 ? 'high' : undefined
                }"
              />
            </div>
            <h3 class="proj-name">{{ p.title }}</h3>
            <p>{{ p.purpose }}</p>
            <ul class="tag-row" :aria-label="`Stack for ${p.title}`">
              <li v-for="t in p.stack" :key="t" class="tag">{{ t }}</li>
            </ul>
            <p class="proj-links">
              <template v-for="(r, ri) in p.repos" :key="r.url">
                <template v-if="ri > 0"> · </template>
                <a :href="r.url" target="_blank" rel="noopener noreferrer">{{ r.label }}</a>
              </template>
              <template v-if="p.repos.length && p.demoUrl"> · </template>
              <a v-if="p.demoUrl" :href="p.demoUrl" target="_blank" rel="noopener noreferrer">Live demo</a>
              <span v-if="!p.repos.length && !p.demoUrl" class="proj-nolink">No public link</span>
            </p>
          </article>
        </li>
      </ol>
      <NuxtLink to="/" class="more-link">> back to home_</NuxtLink>
    </WindowFrame>
  </div>
</template>

<script setup lang="ts">
import { projects } from '~/data/portfolio';

useHead({
  title: 'Projects — Baghaztra Van Ril',
  link: [{ rel: 'canonical', href: 'https://bgztra.my.id/projects/' }]
});
</script>
