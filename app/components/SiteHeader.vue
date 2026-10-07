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
      <div v-if="frames.length" class="nav-chips" aria-label="Closed windows">
        <button
          v-for="f in frames"
          :key="f.id"
          type="button"
          class="nav-chip"
          @click="f.reopen"
        >
          [+] {{ f.title }}
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useClosedFrames } from '~/composables/useClosedFrames';
import { useSysMenu } from '~/composables/useSysMenu';

const { frames } = useClosedFrames();

const { state, openAt } = useSysMenu();

const openHere = (e: MouseEvent) => {
  // ponytail: anchor to brand left edge, SysMenu clamps to viewport
  const btn = e.currentTarget as HTMLElement;
  const r = btn.getBoundingClientRect();
  openAt(Math.max(8, r.left), r.bottom + 8, 'brand');
};
</script>
