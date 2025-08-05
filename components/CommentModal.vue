<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    @click.self="close"
  >
    <div
      class="relative w-full max-w-2xl rounded-lg bg-white p-8 shadow-lg dark:bg-neutral-800"
    >
      <button
        @click="close"
        class="absolute top-4 right-4 text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200"
      >
        <Icon name="mdi:close" class="h-6 w-6" />
      </button>
      <ContactForm @form-submitted="close" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["close"]);

const close = () => {
  emit("close");
};
</script>