<template>
  <div class="fixed left-6 bottom-0 z-40 hidden lg:block">
    <div class="flex flex-col items-center space-y-6">
      <a v-for="link in socialLinks"
         :key="link.name"
         :href="link.url"
         :aria-label="link.name"
         target="_blank"
         rel="noopener noreferrer"
         class="text-neutral-400 hover:text-teal-400 hover:transform hover:translate-y-[-2px] transition-all duration-300"
      >
        <component :is="link.icon" class="w-5 h-5" />
      </a>
      <div class="w-[1px] h-24 bg-neutral-700"></div>
    </div>
  </div>
</template>

<script setup>
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon
} from 'lucide-vue-next'

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/jacobscr',
    icon: GithubIcon
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jacob-schrott-754ba5341/',
    icon: LinkedinIcon
  },
]
</script>