<script setup lang="ts">
const { data: content } = await useAsyncData(() => queryCollection('content').path('/kopi').first())

</script>

<template>
  <ContentRenderer v-if="content" :value="content" />
  <div v-else>Content not found</div>
</template>
