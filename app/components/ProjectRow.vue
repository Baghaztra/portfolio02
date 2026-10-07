<template>
  <li class="work-item" :class="{ 'is-clickable': clickable }">
    <span class="work-index">[{{ index }}]</span>
    <div>
      <h3 class="work-name">{{ heading }}</h3>
      <p class="work-desc">
        <template v-if="strong"><strong>{{ strong }}</strong> — </template>{{ desc }}
      </p>
      <div class="work-meta">
        <ul class="tag-row" :aria-label="`Technologies for ${heading}`">
          <li v-for="tag in tags" :key="tag" class="tag">{{ tag }}</li>
        </ul>
        <span class="work-year">{{ meta }}</span>
      </div>
    </div>
    <button
      v-if="clickable"
      type="button"
      class="row-hit"
      :aria-label="`Open details for ${heading}`"
      @click="$emit('open')"
    />
  </li>
</template>

<script setup lang="ts">
defineProps<{
  index: string;
  heading: string;
  strong?: string;
  desc: string;
  tags: string[];
  meta: string;
  clickable?: boolean;
}>();

defineEmits<{ open: [] }>();
</script>
