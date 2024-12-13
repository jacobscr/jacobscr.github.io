<template>
  <div class="flex flex-col items-center text-center mb-16">
    <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
        class="text-sm font-medium tracking-wider text-teal-400 mb-4"
    >
      {{ subtitle }}
    </div>
    <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
        class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neutral-100 to-neutral-400 bg-clip-text text-transparent"
    >
      {{ title }}
    </div>
  </div>
</template>

<script setup>
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
</script>