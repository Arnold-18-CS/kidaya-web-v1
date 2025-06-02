<template>
  <div class="rounded-2xl p-6 shadow-sm font-urbanist flex flex-col items-center justify-center text-center" :class="[bgLight, darkMode ? bgDark : '']">
    <img v-if="image" :src="image" alt="" class="w-12 h-12 mb-4" />
    <h4 class="font-bold text-gray-900 dark:text-gray-100 text-lg mb-2">{{ title }}</h4>
    <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const darkMode = ref(false)

const observer = new MutationObserver(() => {
  darkMode.value = document.documentElement.classList.contains('dark')
})

onMounted(() => {
  darkMode.value = document.documentElement.classList.contains('dark')
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
})

onBeforeUnmount(() => {
  observer.disconnect()
})

defineProps({
  image: String,
  title: String,
  description: String,
  bgLight: String,
  bgDark: String
})
</script>