<template>
  <header class="site-header">
    <div class="site-header-inner">
      <NuxtLink to="/" class="brand">BAGHAZTRA:/</NuxtLink>
      <nav class="site-nav" aria-label="Primary">
        <NuxtLink to="/">HOME</NuxtLink>
        <NuxtLink to="/projects">PROJECTS</NuxtLink>
        <NuxtLink to="/journey">JOURNEY</NuxtLink>
      </nav>
      <button
        type="button"
        class="menu-btn"
        aria-haspopup="menu"
        :aria-expanded="state.open"
        @click="openHere"
      >
        ≡ MENU
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useSysMenu } from '~/composables/useSysMenu';

const { state, openAt } = useSysMenu();

const openHere = (e: MouseEvent) => {
  // ponytail: fixed anchor near header, SysMenu clamps to viewport
  const btn = e.currentTarget as HTMLElement;
  const r = btn.getBoundingClientRect();
  openAt(Math.max(8, r.right - 240), r.bottom + 8);
};
</script>
