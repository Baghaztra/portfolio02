<template>
  <div>
    <!-- Hero Section -->
    <section class="felx h-screen md:px-6 inset-0 bg-gradient-to-br from-primary-500/20 to-primary-700/30 dark:from-primary-900/30 dark:to-primary-950/50">
        <div class="container-custom flex flex-col justify-center h-full">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="animate-slide-up">
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-2">
                Hi, I'm {{ about.name }}!
              </h1>
              <p class="text-primary-600 dark:text-primary-500 text-xl mb-6">
                {{ about.role }}
              </p>
              <p class="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 mb-8 max-w-2xl">
                {{ about.bio }}
              </p>
  
              <div class="flex flex-wrap gap-4">
                <NuxtLink to="/projects" class="btn btn-primary"> View My Work </NuxtLink>
                <NuxtLink to="/contact" class="btn btn-outline"> Get In Touch </NuxtLink>
              </div>
            </div>
  
            <div class="relative hidden lg:block">
              <div
                class="w-full h-96 rounded-lg bg-white dark:bg-neutral-800 shadow-xl overflow-hidden relative">
                <img
                  src="assets/images/profile.jpg"
                  alt="Profile Picture"
                  class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
    </section>

    <!-- Featured Projects Section -->
    <section class="py-20">
      <div class="container-custom">
        <SectionHeading title="Projects" subtitle="Here are some of my recent projects." />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard v-for="project in featuredProjects" :key="project.id" :project="project" />
        </div>

        <div class="mt-12 text-center">
          <NuxtLink to="/projects" class="btn btn-primary"> View All Projects </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <SkillsSection />

    <section class="py-20">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
          Let’s Collaborate and Learn Together!
        </h2>
        <p class="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
          I'm currently looking to expand my skills by collaborating on real projects, learning from
          others, and sharing ideas. If you have a project, idea, or just want to connect, feel free
          to reach out!
        </p>
        <NuxtLink to="/contact" class="btn btn-primary px-8 py-3"> Contact Me </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { about, projects } from "~/utils/data";

const featuredProjects = computed(() => projects.slice(0, 3));

useHead({
  title: 'Portfolio | Baghaztra',
  link: [
    {
      rel: 'canonical',
      href: 'https://bgztra.my.id/'
    }
  ]
})
</script>
