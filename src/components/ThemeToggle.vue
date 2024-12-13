<template>
  <button
      @click="toggleTheme"
      class="relative p-2 rounded-lg hover:bg-neutral-800/50 transition-colors duration-300"
      aria-label="Toggle theme"
  >
    <sun-icon v-if="isDark" class="w-5 h-5 text-neutral-400" />
    <moon-icon v-else class="w-5 h-5 text-neutral-400" />
  </button>
</template>

<script setup>
import { computed } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { SunIcon, MoonIcon } from 'lucide-vue-next'

const isDark = useDark()
const toggleTheme = useToggle(isDark)
</script>