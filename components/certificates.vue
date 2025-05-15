<template>
  <div class="py-20">
    <div class="container-custom">
      <SectionHeading
        title="Certifications"
        subtitle="A selection of certifications and recognitions I've earned along my journey." />

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="cert in certificates"
          :key="cert.id"
          class="card group hover:shadow-lg cursor-pointer border rounded-md overflow-hidden"
          @click="openModal(cert.image)">
          <div class="relative overflow-hidden">
            <img
              :src="cert.image"
              :alt="cert.title"
              class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy" />
          </div>
          <div class="p-4">
            <h3 class="text-lg font-semibold mb-1 text-neutral-800 dark:text-neutral-200">
              {{ cert.title }}
            </h3>

            <p v-if="cert.issuer" class="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
              <strong>Issuer:</strong> {{ cert.issuer }}
            </p>

            <p v-if="cert.date" class="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
              <strong>Date:</strong> {{ new Date(cert.date).toLocaleDateString("id-ID") }}
            </p>

            <p class="text-sm text-neutral-700 dark:text-neutral-300 whitespace-pre-line">
              {{ cert.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <transition name="fade">
        <div
          v-if="showModal"
          class="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          @click.self="closeModal">
          <div class="relative max-w-4xl max-h-[90vh] w-full mx-4">
            <button
              @click="closeModal"
              class="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-1 hover:bg-opacity-80"
              aria-label="Close">
              ✕
            </button>
            <img
              :src="currentImage"
              alt="Gambar Sertifikat"
              class="w-full max-h-[90vh] object-contain rounded-md shadow-lg"
              loading="lazy" />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { certificates } from "~/utils/data";

const showModal = ref(false);
const currentImage = ref(null);

function openModal(img) {
  currentImage.value = img;
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
  currentImage.value = null;
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
