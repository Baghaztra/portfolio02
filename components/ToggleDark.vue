<template>
  <div class="flex items-center space-x-2">
    <button
      @click="toggleColorMode"
      :class="[
        'w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300',
        colorMode.value === 'dark' ? 'bg-primary-600' : 'bg-gray-300',
      ]">
      <div
        :class="[
          'w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-300',
          colorMode.value === 'dark' ? 'translate-x-6' : 'translate-x-0',
        ]"></div>
    </button>
  </div>
</template>

<script setup>
const colorMode = useColorMode();

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};
</script>
