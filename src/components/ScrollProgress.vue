<template>
  <div
      class="fixed top-0 left-0 w-full h-[2px] bg-neutral-800 z-50"
      aria-hidden="true"
  >
    <div
        class="h-full bg-gradient-to-r from-teal-500 to-blue-500"
        :style="{ width: `${progress}%` }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(0)

const updateProgress = () => {
  const winScroll = window.scrollY
  const height = document.documentElement.scrollHeight - window.innerHeight
  progress.value = (winScroll / height) * 100
}

onMounted(() => {
  window.addEventListener('scroll', updateProgress)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress)
})
</script>