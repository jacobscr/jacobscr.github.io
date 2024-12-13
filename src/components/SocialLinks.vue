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
    url: 'https://github.com/jacobschrott',
    icon: GithubIcon
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/jacobschrott',
    icon: LinkedinIcon
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/jacobschrott',
    icon: TwitterIcon
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/jacobschrott',
    icon: InstagramIcon
  }
]
</script>