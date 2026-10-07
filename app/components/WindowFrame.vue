<template>
  <div
    v-if="maximized && !closed"
    class="overlay"
    aria-hidden="true"
    @click="maximized = false"
  />
  <Teleport to="body" :disabled="!maximized || closed">
    <section
      v-if="!closed"
      class="window"
      :class="{ 'is-modal': maximized }"
      :aria-label="title"
      :aria-modal="maximized || undefined"
      :role="maximized ? 'dialog' : undefined"
    >
      <div class="window-bar">
        <span>{{ title }}</span>
        <span class="window-btns">
          <button
            type="button"
            :aria-label="`${minimized ? 'Expand' : 'Minimize'} ${title}`"
            :aria-expanded="!minimized"
            :data-on="minimized || undefined"
            @click="toggleMinimize"
          >
            _
          </button>
          <button
            type="button"
            :aria-label="`${maximized ? 'Restore' : 'Maximize'} ${title}`"
            :aria-expanded="maximized"
            :data-on="maximized || undefined"
            @click="toggleMaximize"
          >
            □
          </button>
          <button type="button" :aria-label="`Close ${title}`" @click="closeFrame">
            ×
          </button>
        </span>
      </div>
      <div v-show="!minimized" class="window-body">
        <slot />
      </div>
    </section>
  </Teleport>
</template>

<script setup lang="ts">
import { useClosedFrames } from '~/composables/useClosedFrames';

const props = defineProps<{ title: string; id: string }>();

// ponytail: per-instance refs only, state resets on reload
// maximized is a model so parents can force the modal open (detail sheets)
const minimized = ref(false);
const maximized = defineModel<boolean>('maximized', { default: false });
const closed = ref(false);

const emit = defineEmits<{ close: [] }>();
const { register, unregister } = useClosedFrames();

const reopen = () => {
  closed.value = false;
  unregister(props.id);
};

const closeFrame = () => {
  closed.value = true;
  maximized.value = false;
  register({ id: props.id, title: props.title, reopen });
  emit('close');
};

// ponytail: minimizing from a modal returns to the inline collapsed frame
const toggleMinimize = () => {
  minimized.value = !minimized.value;
  if (maximized.value) maximized.value = false;
};

// ponytail: maximizing an empty (minimized) frame makes no sense, restore it
const toggleMaximize = () => {
  maximized.value = !maximized.value;
  if (maximized.value) minimized.value = false;
};

const onEsc = (e: KeyboardEvent) => {
  if (e.key === 'Escape') maximized.value = false;
};

// ponytail: body scroll-lock + esc only while a modal is open
watch(maximized, (open) => {
  document.body.style.overflow = open ? 'hidden' : '';
  if (open) document.addEventListener('keydown', onEsc);
  else document.removeEventListener('keydown', onEsc);
});

onUnmounted(() => {
  unregister(props.id);
  document.body.style.overflow = '';
  document.removeEventListener('keydown', onEsc);
});
</script>
