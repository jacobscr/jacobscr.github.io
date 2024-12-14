<template>
  <a
      @click.prevent="scrollToSection"
      class="relative group"
  >
    <span class="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent select-none">
      JS<span class="text-teal-400">.</span>
    </span>
    <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
  </a>
</template>

<script setup>
const scrollToSection = () => {
  const element = document.querySelector('#landing')
  element?.scrollIntoView({ behavior: 'smooth' })
}
</script>