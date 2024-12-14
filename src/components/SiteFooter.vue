<template>
  <footer class="py-12 bg-[#080B14]">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Logo & Description -->
        <div class="col-span-2">
          <motion-logo />
          <p class="mt-4 text-neutral-400 max-w-md">
            Entwicklung moderner Webanwendungen mit Fokus auf Performance,
            Benutzerfreundlichkeit und Skalierbarkeit.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-neutral-200">Quick Links</h3>
          <ul class="space-y-2">
            <li v-for="item in navigation.items" :key="item.id">
              <a
                  :href="item.href"
                  @click.prevent="navigation.scrollToSection(item.id)"
                  class="text-neutral-400 hover:text-teal-400 transition-colors duration-300"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-neutral-200">Kontakt</h3>
          <ul class="space-y-2">
            <li>
              <a
                  href="mailto:contact@jacob.schrott@htl.rennweg.at"
                  class="text-neutral-400 hover:text-teal-400 transition-colors duration-300 flex items-center"
              >
                <mail-icon class="w-4 h-4 mr-2" />
                jacob.schrott@htl.rennweg.at
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 pt-8 border-t border-neutral-800">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-neutral-500 text-sm">
            © {{ new Date().getFullYear() }} Jacob Schrott. Alle Rechte vorbehalten.
          </p>
          <div class="flex space-x-6">
            <a v-for="link in socialLinks"
               :key="link.name"
               :href="link.url"
               target="_blank"
               rel="noopener noreferrer"
               class="text-neutral-400 hover:text-teal-400 transition-colors duration-300"
            >
              <component :is="link.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useNavigation } from '@/composables/useNavigation'
import MotionLogo from './MotionLogo.vue'
import {
  MailIcon,
  PhoneIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon
} from 'lucide-vue-next'

const navigation = useNavigation()

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