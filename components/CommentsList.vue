<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useNuxtApp } from "#app";
import type { Firestore, Unsubscribe } from "firebase/firestore";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

interface Comment {
  id: string;
  name: string;
  message: string;
  createdAt: { seconds: number; nanoseconds: number } | null;
}

const nuxtApp = useNuxtApp();
const firestore = nuxtApp.$firestore as Firestore;

const comments = ref<Comment[]>([]);
const loading = ref(true);
const error = ref("");

let unsubscribe: Unsubscribe | null = null;

onMounted(() => {
  try {
    const commentsCol = collection(firestore, "messages");
    const q = query(commentsCol, orderBy("createdAt", "desc"));

    unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        comments.value = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Comment[];
        loading.value = false;
      },
      (err) => {
        error.value = "Failed to load comments.";
        loading.value = false;
        console.error(err);
      }
    );
  } catch (e) {
    error.value = "Unexpected error.";
    loading.value = false;
  }
});

onUnmounted(() => {
  if (unsubscribe) unsubscribe();
});
</script>

<template>
  <section class="max-w-3xl mx-auto bg-white dark:bg-neutral-900 rounded-md shadow-md">
    <h2 class="text-2xl mb-4 mt-6">Comments</h2>

    <div v-if="loading" class="flex items-center space-x-2 text-primary-900 dark:text-primary-200">
      <nuxt-icon name="mdi:loading" class="animate-spin w-5 h-5" />
      <span>Loading comments...</span>
    </div>

    <div v-if="error" class="flex items-center space-x-2 text-red-600 dark:text-red-400">
      <nuxt-icon name="mdi:alert-circle" class="w-5 h-5" />
      <span>{{ error }}</span>
    </div>

    <div
      v-if="!loading && !error"
      class="space-y-4 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-primary-500 scrollbar-track-transparent">
      <div
        v-for="comment in comments"
        :key="comment.id"
        class="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-800 transition-all hover:shadow-lg">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <h4 class="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
              {{ comment.name }}
            </h4>
            <p class="text-neutral-700 dark:text-neutral-300 mt-1 whitespace-pre-wrap">
              {{ comment.message }}
            </p>
          </div>
          <div class="text-xs text-neutral-500 dark:text-neutral-400 md:text-right mt-2 md:mt-0">
            {{
              comment.createdAt
                ? new Date(comment.createdAt.seconds * 1000).toLocaleString()
                : "Unknown date"
            }}
          </div>
        </div>
      </div>
    </div>

    <p
      v-if="!loading && comments.length === 0"
      class="text-neutral-500 dark:text-neutral-400 text-center mt-4">
      No comments yet.
    </p>
  </section>
</template>
