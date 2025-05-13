<template>
  <footer class="bg-neutral-100 dark:bg-neutral-800 lg:px-40 md:px-16 py-6 mt-20">
    <div class="container-custom">
      <div class="flex flex-row items-center">
        <div class="flex-grow">
          <p class="text-neutral-600 dark:text-neutral-400">
            Let's connect!
          </p>
        </div>
        <div class="flex flex-row gap-4">
          <a
            href="https://github.com/Baghaztra"
            target="_blank"
            rel="noopener noreferrer"
            class="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
            <Icon name="mdi:github" class="w-6 h-6" />
            <span class="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/baghaztra-van-ril-8011b0294"
            target="_blank"
            rel="noopener noreferrer"
            class="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
            <Icon name="mdi:linkedin" class="w-6 h-6" />
            <span class="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://www.instagram.com/baghaztra"
            target="_blank"
            rel="noopener noreferrer"
            class="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
            <Icon name="mdi:instagram" class="w-6 h-6" />
            <span class="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>

      <div
        class="mt-5 pt-8 border-t border-neutral-200 dark:border-neutral-700 text-center text-neutral-600 dark:text-neutral-400">
        <p>&copy; {{ new Date().getFullYear() }} Baghaztra. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
