<template>
  <div>
    <h1 class="sr-only">Baghaztra Van Ril — Software Engineer</h1>

    <!-- Hero -->
    <WindowFrame id="home-whoami" title="HOME.SYS — WHOAMI">
      <div class="hero-grid">
        <div>
          <p class="kicker">> whoami</p>
          <h2>{{ profile.name }}</h2>
          <p class="role">{{ profile.role }}</p>
          <p>{{ profile.intro }}</p>
          <p>Based in {{ profile.location }}. Open to collaboration and freelance work.</p>
          <div class="btn-row">
            <NuxtLink to="/projects" class="btn btn-primary">> view_my_work</NuxtLink>
            <NuxtLink to="/journey" class="btn">> background</NuxtLink>
          </div>
          <p class="contact-line">
            contact:
            <a :href="profile.github" target="_blank" rel="noopener noreferrer">GitHub</a>
            ·
            <a :href="profile.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
        </div>
        <div class="profile-frame">
          <NuxtPicture
            src="/images/profile.jpeg"
            :img-attrs="{ alt: profile.imageAlt, fetchpriority: 'high' }"
            width="480"
            height="480"
            sizes="320px sm:400px 480px"
            format="avif,webp"
          />
        </div>
      </div>
    </WindowFrame>

    <!-- Selected work -->
    <WindowFrame id="home-selected" title="WORK.DIR — SELECTED">
      <ProjectList :projects="featuredProjects" featured />
      <NuxtLink to="/projects" class="more-link">> open full directory_</NuxtLink>
    </WindowFrame>

    <!-- Continue -->
    <WindowFrame id="home-goto" title="GOTO — CONTINUE">
      <ul class="goto-list">
        <li v-for="link in homeGotoLinks" :key="link.title">
          <NuxtLink v-if="link.to" :to="link.to">
            <span class="goto-title">{{ link.title }}</span>
            {{ link.desc }}
          </NuxtLink>
          <a v-else :href="link.href" target="_blank" rel="noopener noreferrer">
            <span class="goto-title">{{ link.title }}</span>
            {{ link.desc }}
          </a>
        </li>
      </ul>
    </WindowFrame>
  </div>
</template>

<script setup lang="ts">
import { profile, homeGotoLinks } from '~/data/portfolio';
import { featuredProjects } from '~/data/projects';

useHead({
  title: 'Baghaztra Van Ril — Software Engineer',
  meta: [
    { property: 'og:title', content: 'Baghaztra Van Ril — Software Engineer' },
    { property: 'og:url', content: 'https://bgztra.my.id/' }
  ],
  link: [{ rel: 'canonical', href: 'https://bgztra.my.id/' }]
});
</script>
