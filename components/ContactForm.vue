<template>
  <form @submit.prevent="submitForm" class="space-y-3 max-w-2xl mx-auto">
    <h3 class="text-2xl font-semibold mb-6 text-neutral-800 dark:text-neutral-200 mt-3">
      Leave a comment
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="mb-2">
        <label
          for="name"
          class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
          >Name</label
        >
        <input
          type="text"
          id="name"
          v-model="form.name"
          required
          placeholder="Let me know who sending this"
          class="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
      </div>

      <div class="mb-2">
        <label
          for="name"
          class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
          >Email</label
        >
        <input
          type="email"
          id="email"
          v-model="form.email"
          required
          placeholder="It won't display here"
          class="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
      </div>
    </div>

    <div>
      <label
        for="message"
        class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
        >Message</label
      >
      <textarea
        id="message"
        v-model="form.message"
        rows="6"
        required
        class="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"></textarea>
    </div>

    <div class="text-right">
      <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
        <span v-if="isSubmitting" class="inline-flex items-center">
          <Icon name="mingcute:loading-fill" class="animate-spin h-4 w-4 mr-2" />
          Sending...
        </span>
        <span v-else>
          <Icon name="mdi:send" />
          Post
        </span>
      </button>
    </div>

    <div
      v-if="successMessage"
      class="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-4 rounded-md">
      {{ successMessage }}
    </div>

    <div
      v-if="errorMessage"
      class="bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 p-4 rounded-md">
      {{ errorMessage }}
    </div>
  </form>
</template>

<script setup>
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useNuxtApp } from "#app";

const emit = defineEmits(["form-submitted"]);

const form = reactive({
  name: "",
  email: "",
  message: "",
});

const isSubmitting = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

const submitForm = async () => {
  isSubmitting.value = true;
  errorMessage.value = "";
  successMessage.value = "";

  try {
    const { $firestore } = useNuxtApp();

    await addDoc(collection($firestore, "messages"), {
      name: form.name,
      email: form.email,
      message: form.message,
      createdAt: serverTimestamp(),
      approved: false,
    });

    successMessage.value = "Your comment has been submitted and is awaiting approval.";

    form.name = "";
    form.email = "";
    form.message = "";
    emit("form-submitted");
  } catch (error) {
    console.error("Form submission error:", error);
    errorMessage.value = "There was an error sending your message. Please try again later.";
  } finally {
    isSubmitting.value = false;
  }
};
</script>
