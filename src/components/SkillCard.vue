<template>
  <div
      ref="card"
      class="group relative bg-[#0F1729] p-8 rounded-2xl border border-neutral-800 overflow-hidden"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
  >
    <div class="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    <h3 class="text-xl font-bold mb-6 text-teal-400">{{ title }}</h3>

    <ul class="space-y-4">
      <li
          v-for="skill in skills"
          :key="skill.name"
          class="space-y-2"
      >
        <div class="flex justify-between text-sm">
          <span class="text-neutral-300">{{ skill.name }}</span>
          <span class="text-teal-400">{{ skill.level }}%</span>
        </div>
        <div class="w-full bg-neutral-800 rounded-full h-1.5 overflow-hidden">
          <div
              class="h-full bg-gradient-to-r from-teal-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
              :style="{ width: isVisible ? `${skill.level}%` : '0%' }"
          ></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  skills: {
    type: Array,
    required: true
  }
})

const card = ref(null)
const isVisible = ref(false)

// Intersection Observer
onMounted(() => {
  const { stop } = useIntersectionObserver(card, ([{ isIntersecting }]) => {
    if (isIntersecting) {
      isVisible.value = true
      stop()
    }
  })
})

// 3D Hover Effect
const handleMouseMove = (e) => {
  const { left, top, width, height } = card.value.getBoundingClientRect()
  const x = (e.clientX - left) / width
  const y = (e.clientY - top) / height

  const rotateX = (y - 0.5) * 10
  const rotateY = (x - 0.5) * 10

  card.value.style.transform = `
    perspective(1000px)
    rotateX(${-rotateX}deg)
    rotateY(${rotateY}deg)
    scale3d(1.02, 1.02, 1.02)
  `
}

const handleMouseLeave = () => {
  card.value.style.transform = `
    perspective(1000px)
    rotateX(0deg)
    rotateY(0deg)
    scale3d(1, 1, 1)
  `
}
</script>