<template>
  <div
      class="relative grid md:grid-cols-2 gap-8 items-center"
      :class="{ 'md:grid-flow-dense': index % 2 === 0 }"
  >
    <!-- Project Image -->
    <div
        class="relative group overflow-hidden rounded-2xl border border-neutral-800 aspect-video"
    >
      <img
          :src="`/images/${data.image}`"
          :alt="data.title"
          class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-transparent to-transparent opacity-60"></div>
    </div>

    <!-- Project Info -->
    <div class="space-y-6">
      <div class="space-y-2">
        <h3 class="text-2xl font-bold text-neutral-200">{{ data.title }}</h3>
        <p class="text-neutral-400">{{ data.description }}</p>
      </div>

      <!-- Technologies -->
      <div class="flex flex-wrap gap-2">
        <skill-tag
            v-for="tech in data.technologies"
            :key="tech"
            :label="tech"
        />
      </div>

      <!-- Links -->
      <div class="flex items-center space-x-4">
        <a
            v-if="data.demoUrl"
            :href="data.demoUrl"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center space-x-2 text-teal-400 hover:text-teal-300"
        >
          <external-link-icon class="w-4 h-4" />
          <span>Live Demo</span>
        </a>
        <a
            v-if="data.githubUrl"
            :href="data.githubUrl"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center space-x-2 text-neutral-400 hover:text-neutral-200"
        >
          <github-icon class="w-4 h-4" />
          <span>Source Code</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ExternalLinkIcon, GithubIcon } from 'lucide-vue-next'
import SkillTag from './SkillTag.vue'

defineProps({
  data: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})
</script>