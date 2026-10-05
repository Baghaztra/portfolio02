<template>
  <section class="window" :aria-label="title">
    <div class="window-bar" aria-hidden="true">
      <span>{{ title }}</span>
      <span class="window-btns">
        <span />
        <span />
        <span />
      </span>
    </div>
    <div class="window-body">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string }>();
</script>
