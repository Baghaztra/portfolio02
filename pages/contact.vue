<template>
  <div class="py-20">
    <div class="container-custom">
      <SectionHeading 
        title="Get In Touch" 
        subtitle="Feel free to reach out if you have any questions or want to work together."
      />
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div v-for="sm in about.socialLinks">
          <a :href="sm.url" target="_blank" class="card p-6 flex flex-col items-center text-center">
            <div class="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-500 rounded-full flex items-center justify-center mb-4">
              <Icon :name="sm.icon" class="w-7 h-7" />
            </div>
            <h3 class="text-xl font-semibold mb-2 text-neutral-800 dark:text-neutral-200 hover:text-primary-600 hover:dark:text-primary-500 hover:underline">
              {{ sm.name }}
            </h3>
          </a>
        </div>
      </div>
      
      <div class="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-5">
        <div class="flex justify-end mb-4">
          <button @click="showModal = true" class="btn btn-primary">
            <Icon name="mdi:plus" />
            Leave a Comment
          </button>
        </div>
        <CommentsList />
      </div>
      <CommentModal :show="showModal" @close="showModal = false" />
    </div>
  </div>
</template>

<script setup>
import { about } from '~/utils/data';
import { ref } from "vue";
import CommentModal from '~/components/CommentModal.vue';

const showModal = ref(false);

useHead({
  title: 'Contact | Baghaztra',
  meta: [
    { name: 'description', content: 'Get in touch with me for project inquiries or collaboration opportunities.' },
    { name: 'robots', content: 'noindex' }
  ]
})
</script>