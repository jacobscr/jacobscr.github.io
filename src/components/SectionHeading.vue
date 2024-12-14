<template>
  <div class="flex flex-col items-center text-center mb-16">
    <div
        class="text-sm font-medium tracking-wider text-teal-400 mb-4 pb-1 opacity-0"
        ref="subtitleRef"
    >
      {{ subtitle }}
    </div>
    <div
        class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neutral-100 to-neutral-400 bg-clip-text text-transparent pb-2 opacity-0"
        ref="titleRef"
    >
      {{ title }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  }
})

const subtitleRef = ref(null)
const titleRef = ref(null)

onMounted(() => {
  // Animation für Subtitle
  gsap.fromTo(subtitleRef.value,
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: subtitleRef.value,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
  )

  // Animation für Title
  gsap.fromTo(titleRef.value,
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.2,
        delay: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.value,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
  )
})
</script>