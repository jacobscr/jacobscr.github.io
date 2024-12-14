<template>
  <div class="relative min-h-screen overflow-x-hidden bg-[#0A0F1C] text-neutral-200 selection:bg-teal-500/20 selection:text-teal-300">

    <!-- Navigation -->
    <nav class="fixed w-full backdrop-blur-md bg-[#0A0F1C]/70 z-40 border-b border-neutral-800/50">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <motion-logo />
          <div class="hidden md:flex space-x-8">
            <nav-link v-for="item in navigation.items"
                      :key="item.id"
                      :href="item.href"
                      :label="item.label" />
          </div>
          <theme-toggle />
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="min-h-screen flex items-center justify-center relative pt-20">
      <canvas ref="webglCanvas" class="absolute inset-0 z-0" />
      <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <!-- Initial versteckt durch style -->
        <div
            ref="roleText"
            class="text-sm font-medium tracking-wider text-teal-400 mb-4"
            style="transform: translateY(20px); opacity: 0;"
        >
          FULLSTACK ENTWICKLER
        </div>

        <h1
            ref="nameText"
            class="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-neutral-100 to-neutral-400 bg-clip-text text-transparent"
            style="transform: translateY(20px); opacity: 0;"
        >
          Jacob Schrott
        </h1>

        <p
            ref="descText"
            class="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-8"
            style="transform: translateY(20px); opacity: 0;"
        >
          Ich entwickle elegante Lösungen an der Schnittstelle von Design und Technologie.
        </p>

        <div
            ref="buttonContainer"
            class="flex flex-wrap justify-center gap-4"
            style="transform: translateY(20px); opacity: 0;"
        >
          <primary-button @click="navigation.scrollToSection('projects')">
            <code-icon class="w-5 h-5 mr-2" />
            Projekte erkunden
          </primary-button>
          <secondary-button @click="navigation.scrollToSection('contact')">
            <mail-icon class="w-5 h-5 mr-2" />
            Kontakt
          </secondary-button>
        </div>

        <scroll-indicator class="mt-12" />
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-32 relative">
      <div class="container mx-auto px-6">
        <section-heading title="Über mich" subtitle="Mein Werdegang" />

        <div class="grid md:grid-cols-2 gap-12 items-center mt-16">
          <div class="space-y-6">
            <animated-text-paragraph :content="about.description" />

            <div class="flex flex-wrap gap-3">
              <skill-tag
                  v-for="interest in about.interests"
                  :key="interest"
                  :label="interest"
              />
            </div>
          </div>

          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div class="relative bg-[#0F1729] p-8 rounded-2xl border border-neutral-800">
              <h3 class="text-2xl font-bold mb-6 text-teal-400">Ausbildung</h3>
              <timeline-item
                  v-for="edu in about.education"
                  :key="edu.id"
                  :data="edu"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-32 relative bg-[#0F1729]">
      <div class="container mx-auto px-6">
        <section-heading
            title="Fähigkeiten"
            subtitle="Technologie-Stack"
        />

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <skill-card
              v-for="(skills, category) in skillsData.categories"
              :key="category"
              :title="category"
              :skills="skills"
          />
        </div>
      </div>
    </section>

    <section id="projects" class="py-32 relative">
      <div class="container mx-auto px-6">
        <section-heading
            title="Projekte"
            subtitle="Ausgewählte Arbeiten"
        />

        <div class="mt-16 space-y-32">
          <project-card
              v-for="(project, idx) in projects.projects"
              :key="project.id"
              :data="project"
              :index="idx"
          />
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-32 relative bg-[#0F1729]">
      <div class="container mx-auto px-6">
        <section-heading
            title="Kontakt"
            subtitle="Lass uns zusammenarbeiten"
        />

        <div class="max-w-2xl mx-auto mt-16">
          <contact-form />
        </div>
      </div>
    </section>

    <!-- Footer -->
    <site-footer />

    <!-- Fixed Elements -->
    <social-links />
    <scroll-progress />
  </div>
</template>

<script setup>
// Imports
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { useMotion } from '@vueuse/motion'
import { useMouseInElement } from '@vueuse/core'
import { useIntersectionObserver } from '@vueuse/core'

// UI Components
import MotionLogo from '../components/MotionLogo.vue'
import NavLink from '../components/NavLink.vue'
import ThemeToggle from '../components/ThemeToggle.vue'
import ScrollIndicator from '../components/ScrollIndicator.vue'
import ScrollProgress from '../components/ScrollProgress.vue'
import PrimaryButton from '../components/PrimaryButton.vue'
import SecondaryButton from '../components/SecondaryButton.vue'
import SectionHeading from '../components/SectionHeading.vue'
import AnimatedTextParagraph from '../components/AnimatedTextParagraph.vue'
import SkillTag from '../components/SkillTag.vue'

// Section Components
import TimelineItem from '../components/TimeLineItem.vue'
import SkillCard from '../components/SkillCard.vue'
import ProjectCard from '../components/ProjectCard.vue'
import ContactForm from '../components/ContactForm.vue'
import SiteFooter from '../components/SiteFooter.vue'
import SocialLinks from '../components/SocialLinks.vue'

// Icons
import { CodeIcon, MailIcon } from 'lucide-vue-next'

// Composables
import { useNavigation } from '../composables/useNavigation'
import { useAbout } from '../composables/useAbout'
import { useSkills } from '../composables/useSkills'
import { useProjects } from '../composables/useProjects'
import { useContact } from '../composables/useContact'
import { useWebGL } from '../composables/useWebGL'

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

const textContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2
    }
  }
}

// Template Refs
const webglCanvas = ref(null)
const cursor = ref(null)
const roleText = ref(null)
const nameText = ref(null)
const descText = ref(null)
const buttonContainer = ref(null)

// Composables
const navigation = useNavigation()
const about = useAbout()
const skillsData = useSkills()
const projects = useProjects()
const contact = useContact()
const { initWebGL, destroyWebGL } = useWebGL()

// Lifecycle Hooks
onMounted(() => {
  initWebGL(webglCanvas.value)
  const tl = gsap.timeline({
    defaults: {
      duration: 1,
      ease: "power3.out"
    }
  })

  tl.to([roleText.value, nameText.value, descText.value, buttonContainer.value], {
    y: 0,
    opacity: 1,
    stagger: 0.15,
    clearProps: "all" // Wichtig: Entfernt inline styles nach der Animation
  })
})

onUnmounted(() => {
  destroyWebGL()
})
</script>

<style>
html, body {
  overflow-x: hidden;
  width: 100%;
  margin: 0;
  padding: 0;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #0A0F1C;
}

::-webkit-scrollbar-thumb {
  background: #1F2937;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #374151;
}

/* Ensure smooth animations */
* {
  @apply transition-all duration-300;
}

/* Text selection */
::selection {
  @apply bg-teal-500/20 text-teal-300;
}
</style>