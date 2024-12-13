<template>
  <a
      :href="href"
      class="relative group cursor-pointer"
      @click.prevent="scrollToSection"
  >
    <span class="text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300">
      {{ label }}
    </span>
    <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300"></span>
  </a>
</template>

<script setup>
const props = defineProps({
  href: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})

const scrollToSection = () => {
  const element = document.querySelector(props.href)
  element?.scrollIntoView({ behavior: 'smooth' })
}
</script>