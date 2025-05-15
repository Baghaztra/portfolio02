<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-neutral-900/80">
    <div class="container-custom mx-auto flex items-center justify-between p-4">
      <h1 class="text-xl font-bold text-neutral-800 dark:text-neutral-100">My Portfolio</h1>

      <!-- Mobile button -->
      <button
        @click="isOpen = true"
        type="button"
        class="inline-flex p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none">
        <Icon name="heroicons:bars-3" class="w-6 h-6" />
      </button>

      <!-- Desktop menu -->
      <nav class="hidden md:flex space-x-6">
        <NuxtLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          :class="[
            'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-500 transition-colors',
            isActive(item.path) ? 'text-primary-600 dark:text-primary-500' : ''
          ]">
          {{ item.name }}
        </NuxtLink>
        <ToggleDark />
      </nav>
    </div>

    <!-- Overlay -->
    <div
      v-if="isOpen"
      @click="isOpen = false"
      class="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"></div>

    <!-- Mobile menu -->
    <div
      :class="[ 
        'fixed top-0 right-0 z-50 w-64 h-full bg-white/80 dark:bg-neutral-900/80 shadow-lg transform transition-transform duration-300 md:hidden',
        isOpen ? 'translate-x-0' : 'translate-x-full',
      ]">
      <div
        class="flex justify-end items-center p-4 border-b border-neutral-200 dark:border-neutral-800 gap-3">
        <h2 class="text-lg font-semibold text-neutral-800 dark:text-neutral-100">Menu</h2>
        <button
          @click="isOpen = false"
          class="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
          <Icon name="heroicons:x-mark" class="w-6 h-6" />
        </button>
      </div>
      <div class="flex flex-col p-4 mb-10 pr-8 space-y-4 text-end">
        <NuxtLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          @click="isOpen = false"
          :class="[
            'text-neutral-800 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-500',
            isActive(item.path) ? 'text-primary-600 dark:text-primary-500' : ''
          ]">
          {{ item.name }}
        </NuxtLink>
      </div>
      <div class="absolute bottom-0 left-0 w-full p-4 border-t border-neutral-200 dark:border-neutral-800">
        <div class="flex items-center justify-end gap-3">
          <span class="text-sm text-neutral-600 dark:text-neutral-400">Dark Mode</span>
          <ToggleDark />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const isOpen = ref(false);

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const isActive = (path) => {
  return route.path === path;
};
</script>
