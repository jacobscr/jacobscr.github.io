<template>
  <div class="text-lg text-neutral-400 leading-relaxed">
    <div ref="typewriterElement" class="min-h-[200px]"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Typewriter from 'typewriter-effect/dist/core'

const props = defineProps({
  content: {
    type: String,
    required: true
  }
})

const typewriterElement = ref(null)

onMounted(() => {
  const paragraphs = props.content.split('\n').filter(p => p.trim())

  const typewriter = new Typewriter(typewriterElement.value, {
    delay: 20,
    cursor: '|',
    cursorClassName: 'text-teal-400'
  })

  paragraphs.forEach((paragraph, index) => {
    typewriter
        .typeString(paragraph)
        .pauseFor(700)

    if (index < paragraphs.length - 1) {
      typewriter.typeString('<br><br>')
    }
  })

  typewriter.start()
})
</script>

<style>
.Typewriter__cursor {
  @apply text-teal-400;
}
</style>