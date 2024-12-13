<template>
  <span
      class="px-4 py-2 bg-teal-500/10 text-teal-300 rounded-full text-sm
           hover:bg-teal-500/20 transition-all duration-300 cursor-default"
  >
    {{ label }}
  </span>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true
  }
})
</script>