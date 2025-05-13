<template>
  <form @submit.prevent="submitForm" class="space-y-6 max-w-2xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label for="name" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Name</label>
        <input 
          type="text" 
          id="name" 
          v-model="form.name" 
          required
          class="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
      
      <div>
        <label for="email" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Email</label>
        <input 
          type="email" 
          id="email" 
          v-model="form.email" 
          required
          class="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
    </div>
    
    <div>
      <label for="subject" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Subject</label>
      <input 
        type="text" 
        id="subject" 
        v-model="form.subject" 
        required
        class="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
      />
    </div>
    
    <div>
      <label for="message" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Message</label>
      <textarea 
        id="message" 
        v-model="form.message" 
        rows="6" 
        required
        class="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
      ></textarea>
    </div>
    
    <div class="text-right">
      <button 
        type="submit" 
        class="btn btn-primary"
        :disabled="isSubmitting"
      >
        <span v-if="isSubmitting" class="inline-flex items-center">
          <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Sending...
        </span>
        <span v-else>Send Message</span>
      </button>
    </div>
    
    <div v-if="successMessage" class="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-4 rounded-md">
      {{ successMessage }}
    </div>
    
    <div v-if="errorMessage" class="bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 p-4 rounded-md">
      {{ errorMessage }}
    </div>
  </form>
</template>

<script setup>
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const submitForm = async () => {
  isSubmitting.value = true
  errorMessage.value = ''
  successMessage.value = ''
  
  try {
    // In a real application, you would send data to your backend or a form service
    // For now, we'll simulate a successful submission after a delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    successMessage.value = 'Your message has been sent successfully! I will get back to you soon.'
    
    // Reset form
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  } catch (error) {
    console.error('Form submission error:', error)
    errorMessage.value = 'There was an error sending your message. Please try again later.'
  } finally {
    isSubmitting.value = false
  }
}
</script>