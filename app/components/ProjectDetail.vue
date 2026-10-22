<template>
  <WindowFrame
    :id="`sheet-${project.slug}`"
    :title="`SHEET — ${project.slug.toUpperCase()}`"
    v-model:maximized="maximized"
    @close="$emit('close')"
  >
    <div class="sheet-inner">
      <div class="sheet-head">
        <p class="proj-eyebrow">Project &middot; {{ project.year }}</p>
        <h2 class="proj-name">{{ project.title }}</h2>
        <ul class="tag-row proj-meta" :aria-label="`Role and stack for ${project.title}`">
          <li class="tag tag--role">{{ project.role }}</li>
          <li v-for="t in project.stack" :key="t" class="tag">{{ t }}</li>
        </ul>
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

          <ProjectCollaborators :project="project" />
        </div>
        
      </div>

      <div v-if="project.problem || project.decision || project.outcome" class="insight-grid">
        <div v-if="project.problem" class="insight-card insight-card--1">
          <span class="insight-num">01</span>
          <span class="insight-label">Problem</span>
          <p>{{ project.problem }}</p>
        </div>
        <div v-if="project.decision" class="insight-card insight-card--2">
          <span class="insight-num">02</span>
          <span class="insight-label">Decision</span>
          <p>{{ project.decision }}</p>
        </div>
        <div v-if="project.outcome" class="insight-card insight-card--3">
          <span class="insight-num">03</span>
          <span class="insight-label">Outcome</span>
          <p>{{ project.outcome }}</p>
        </div>
      </div>

      <div class="cta-row">
        <a
          v-if="project.demoUrl"
          class="cta-btn cta-btn--primary"
          :href="project.demoUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live demo &rarr;
        </a>
        <a
          v-for="r in project.repos"
          :key="r.url"
          class="cta-btn cta-btn--secondary"
          :href="r.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ r.label }}
        </a>
        <span v-if="!project.repos.length && !project.demoUrl" class="proj-nolink">No public link</span>
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

<style scoped>
/* ponytail: all detail-sheet layout lives here; main.css keeps only shared primitives. */

.sheet-inner {
  max-width: 62rem;
  margin-inline: auto;
}

.sheet-head {
  display: grid;
  gap: 0.35rem;
  margin-bottom: 1.5rem;
}

.proj-eyebrow {
  margin: 0;
  font-family: var(--mono);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-soft);
}

.proj-name {
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  line-height: 1.05;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  margin: 0;
  overflow-wrap: anywhere;
  text-wrap: balance;
}

.proj-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin: 0.4rem 0 0;
}

.tag--role {
  background: #e0a526;
  color: var(--ink);
}

.sheet-grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 1.5rem;
  align-items: start;
}

.sheet-info {
  min-width: 0;
}

.sheet-info:only-child {
  grid-column: 1 / -1;
}

.sheet-summary {
  max-width: 60ch;
  line-height: 1.65;
  margin: 0;
  margin-bottom: 1rem;
}

.proj-shot {
  background: var(--paper-dim);
  border: 1px solid var(--border);
  border-radius: 12px;
  line-height: 0;
  overflow: hidden;
  box-shadow: 0 8px 24px #0000001a;
}

.proj-shot img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  object-position: top;
}

.insight-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
  gap: 1.5rem;
  margin-top: 2.5rem;
}

.insight-card {
  border: 3px solid var(--ink);
  box-shadow: 6px 6px 0 var(--ink);
  padding: 1.25rem;
  box-sizing: border-box;
  color: var(--ink);
}

.insight-card--1 {
  background: #e0a526;
}

.insight-card--2 {
  background: var(--red);
  color: var(--paper);
}

.insight-card--3 {
  background: #d9532b;
  color: var(--paper);
}

.insight-num {
  display: block;
  font-family: var(--mono);
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1;
}

.insight-label {
  display: block;
  font-family: var(--mono);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.85;
  margin-top: 0.4rem;
}

.insight-card p {
  margin: 0.75rem 0 0;
  font-size: 0.95rem;
  line-height: 1.5;
}

.cta-row {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.cta-btn {
  font-family: var(--mono);
  font-weight: 700;
  text-decoration: none;
  border: 3px solid var(--ink);
  box-shadow: 4px 4px 0 var(--ink);
  padding: 0.75rem 1.25rem;
  transition: transform 0.1s ease;
}

.cta-btn:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 var(--ink);
}

.cta-btn--primary {
  background: var(--red);
  color: var(--paper);
}

.cta-btn--secondary {
  background: var(--paper);
  color: var(--ink);
}

.cta-row + .collab {
  margin-top: 1rem;
}

.proj-nolink {
  font-family: var(--mono);
  color: var(--ink-soft);
  align-self: center;
}

@media (max-width: 44rem) {
  .sheet-grid {
    grid-template-columns: 1fr;
  }

  .proj-shot {
    max-width: 28rem;
    justify-self: center;
    width: 100%;
  }
}

@media (max-width: 30rem) {
  .cta-row {
    flex-direction: column;
  }

  .cta-btn {
    text-align: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cta-btn:hover {
    transform: none;
  }
}
</style>
