<template>
  <section id="contact" class="py-32 relative bg-[#0F1729]">
    <div class="container mx-auto px-6">
      <section-heading
          title="Let's Connect"
          subtitle="Lass uns zusammenarbeiten"
      />

      <div class="grid md:grid-cols-2 gap-16">
        <!-- Linke Seite - Persönliche Note -->
        <div class="space-y-8">
          <h3 class="text-2xl font-bold bg-gradient-to-r from-neutral-100 to-neutral-400 bg-clip-text text-transparent">
            Immer auf der Suche nach spannenden Projekten
          </h3>
          <p class="text-neutral-400 leading-relaxed">
            Als HTL Medientechnik-Absolvent kombiniere ich technisches Know-how mit kreativem Design.
            Ich suche stets nach Möglichkeiten, innovative Weblösungen zu entwickeln und
            neue Technologien einzusetzen.
          </p>
          <div class="space-y-4">
            <h4 class="text-lg font-medium text-teal-400">Aktuelle Interessen:</h4>
            <div class="flex flex-wrap gap-3">
              <span v-for="interest in currentInterests"
                    :key="interest"
                    class="px-4 py-2 bg-teal-500/10 rounded-full text-sm text-teal-300">
                {{ interest }}
              </span>
            </div>
          </div>
        </div>

        <!-- Rechte Seite - Connect Cards -->
        <div class="grid gap-6">
          <a href="mailto:jacob.schrott@htl.rennweg.at"
             class="group p-6 bg-[#0A0F1C] rounded-xl border border-neutral-800 hover:border-teal-500/50 transition-all duration-300">
            <div class="flex items-center space-x-4">
              <div class="p-3 bg-teal-500/10 rounded-lg group-hover:bg-teal-500/20 transition-colors duration-300">
                <mail-icon class="w-6 h-6 text-teal-400" />
              </div>
              <div>
                <h4 class="font-medium text-neutral-200">Email</h4>
                <p class="text-sm text-neutral-400">jacob.schrott@htl.rennweg.at</p>
              </div>
            </div>
          </a>

          <a href="https://github.com/jacobscr" target="_blank"
             class="group p-6 bg-[#0A0F1C] rounded-xl border border-neutral-800 hover:border-teal-500/50 transition-all duration-300">
            <div class="flex items-center space-x-4">
              <div class="p-3 bg-teal-500/10 rounded-lg group-hover:bg-teal-500/20 transition-colors duration-300">
                <github-icon class="w-6 h-6 text-teal-400" />
              </div>
              <div>
                <h4 class="font-medium text-neutral-200">GitHub</h4>
                <p class="text-sm text-neutral-400">Aktuelle Projekte & Code</p>
              </div>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/jacob-schrott-754ba5341/" target="_blank"
             class="group p-6 bg-[#0A0F1C] rounded-xl border border-neutral-800 hover:border-teal-500/50 transition-all duration-300">
            <div class="flex items-center space-x-4">
              <div class="p-3 bg-teal-500/10 rounded-lg group-hover:bg-teal-500/20 transition-colors duration-300">
                <linkedin-icon class="w-6 h-6 text-teal-400" />
              </div>
              <div>
                <h4 class="font-medium text-neutral-200">LinkedIn</h4>
                <p class="text-sm text-neutral-400">Lass uns vernetzen</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <!-- Current Status -->
      <div class="mt-16 p-6 bg-teal-500/5 rounded-xl border border-teal-500/10">
        <div class="flex items-center space-x-3">
          <div class="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
          <span class="text-teal-400 font-medium">Aktueller Status:</span>
          <span class="text-neutral-400">
            Arbeite an meinem HTL-Abschlussprojekt und suche nach spannenden Berufseinstiegsmöglichkeiten
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { MailIcon, GithubIcon, LinkedinIcon } from 'lucide-vue-next'
import SectionHeading from "@/components/SectionHeading.vue";

const currentInterests = [
  'Web Animations',
  'UI/UX Design',
  'Vue.js/Nuxt',
  '3D Web',
  'Creative Coding',
  'Media Production'
]
</script>