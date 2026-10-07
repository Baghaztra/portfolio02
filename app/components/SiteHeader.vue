<template>
  <header class="site-header">
    <div class="site-header-inner">
      <button
        type="button"
        class="brand brand-btn"
        aria-haspopup="menu"
        :aria-expanded="state.open"
        @click="openHere"
      >
        BAGHAZTRA:/
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useSysMenu } from '~/composables/useSysMenu';

const { state, openAt } = useSysMenu();

const openHere = (e: MouseEvent) => {
  // ponytail: anchor to brand left edge, SysMenu clamps to viewport
  const btn = e.currentTarget as HTMLElement;
  const r = btn.getBoundingClientRect();
  openAt(Math.max(8, r.left), r.bottom + 8, 'brand');
};
</script>
