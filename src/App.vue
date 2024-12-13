<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-gray-100">
    <!-- Navigation -->
    <nav class="fixed w-full backdrop-blur-sm bg-slate-950/70 z-50">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="group">
            <a href="#" class="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              JS<span class="text-blue-400">.</span>
            </a>
            <div class="h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300"></div>
          </div>
          <div class="hidden md:flex space-x-8">
            <a v-for="item in navigation.items"
               :key="item"
               @click="navigation.scrollToSection(item.toLowerCase())"
               class="relative cursor-pointer group">
              <span class="text-gray-300 hover:text-white transition-colors duration-300">{{item}}</span>
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Header -->
    <header class="h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      <div class="absolute inset-0 z-0">
        <div id="particles" class="absolute inset-0"></div>
        <!-- Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950"></div>
      </div>

      <div class="text-center z-10 max-w-3xl mx-auto space-y-6">
        <p class="text-blue-400 font-medium mb-2">Willkommen zu meinem Portfolio</p>
        <h1 class="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-blue-100 bg-clip-text text-transparent">
          Jacob Schrott
        </h1>
        <p class="text-xl text-gray-400 mb-8">
          Full-Stack Entwickler mit Leidenschaft für moderne Webtechnologien und innovative Lösungen
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <button @click="navigation.scrollToSection('projects')"
                  class="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-all duration-300 transform hover:scale-105">
            Meine Projekte
          </button>
          <button @click="navigation.scrollToSection('contact')"
                  class="px-6 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400/10 rounded-lg transition-all duration-300 transform hover:scale-105">
            Kontakt aufnehmen
          </button>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </header>

    <!-- About Section -->
    <section id="about" class="py-20">
      <div class="container mx-auto px-6">
        <div class="flex flex-col items-center mb-16">
          <h2 class="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Über Mich
          </h2>
          <div class="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
        </div>

        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <p class="text-lg text-gray-300 leading-relaxed">
              {{ about.description }}
            </p>
            <div class="flex flex-wrap gap-4">
              <span v-for="interest in about.interests"
                    :key="interest"
                    class="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                {{ interest }}
              </span>
            </div>
          </div>
          <div class="bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-blue-900/30">
            <h3 class="text-2xl font-bold mb-6 text-blue-400">Ausbildung</h3>
            <div class="space-y-4">
              <div class="relative pl-8">
                <div class="absolute left-0 top-2 w-2 h-2 bg-blue-400 rounded-full"></div>
                <p class="text-xl font-medium">{{ about.education.school }}</p>
                <p class="text-gray-400">{{ about.education.department }}</p>
                <p class="text-blue-400">{{ about.education.year }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20 bg-slate-900/50">
      <div class="container mx-auto px-6">
        <div class="flex flex-col items-center mb-16">
          <h2 class="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Technische Fähigkeiten
          </h2>
          <div class="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(skills, category) in skillsData.categories"
               :key="category"
               class="bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-blue-900/30 hover:border-blue-400/30 transition-all duration-300 group">
            <h3 class="text-xl font-bold mb-6 text-blue-400">{{category}}</h3>
            <ul class="space-y-4">
              <li v-for="skill in skills"
                  :key="skill.name"
                  class="space-y-2">
                <div class="flex justify-between text-sm">
                  <span>{{skill.name}}</span>
                  <span class="text-blue-400">{{skill.level}}%</span>
                </div>
                <div class="w-full bg-slate-800 rounded-full h-1.5">
                  <div class="bg-gradient-to-r from-blue-400 to-cyan-400 h-1.5 rounded-full transition-all duration-1000"
                       :style="{width: '0%'}"
                       :class="{'group-hover:!width': skill.level + '%'}"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20">
      <div class="container mx-auto px-6">
        <div class="flex flex-col items-center mb-16">
          <h2 class="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Meine Projekte
          </h2>
          <div class="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in projects"
               :key="project.title"
               class="group bg-slate-900/50 backdrop-blur-sm rounded-xl border border-blue-900/30 overflow-hidden">
            <div class="relative h-48 overflow-hidden">
              <img :src="project.image" :alt="project.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 text-blue-400">{{project.title}}</h3>
              <p class="text-gray-400 mb-4">{{project.description}}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tech in project.technologies"
                      :key="tech"
                      class="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                  {{tech}}
                </span>
              </div>
              <a :href="project.link" target="_blank"
                 class="inline-block px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300">
                Projekt ansehen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-slate-900/50">
      <div class="container mx-auto px-6">
        <div class="flex flex-col items-center mb-16">
          <h2 class="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Kontakt
          </h2>
          <div class="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
        </div>

        <div class="max-w-lg mx-auto">
          <form @submit.prevent="contact.submitForm"
                class="bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-blue-900/30">
            <div class="space-y-6">
              <div>
                <label class="block text-sm font-medium mb-2 text-gray-300">Name</label>
                <input type="text" v-model="contact.form.name"
                       class="w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-blue-900/30 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all duration-300">
              </div>
              <div>
                <label class="block text-sm font-medium mb-2 text-gray-300">Email</label>
                <input type="email" v-model="contact.form.email"
                       class="w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-blue-900/30 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all duration-300">
              </div>
              <div>
                <label class="block text-sm font-medium mb-2 text-gray-300">Nachricht</label>
                <textarea v-model="contact.form.message" rows="4"
                          class="w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-blue-900/30 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all duration-300"></textarea>
              </div>
              <button type="submit"
                      class="w-full px-6 py-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg text-white font-medium hover:from-blue-500 hover:to-cyan-500 transform hover:scale-105 transition-all duration-300">
                Nachricht senden
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

// Navigation
const navigation = {
  items: ['About', 'Skills', 'Projects', 'Contact'],
  scrollToSection: (sectionId) => {
    const element = document.getElementById(sectionId)
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// About data
const about = {
  description: 'Als angehender Absolvent der HTL Rennweg bringe ich nicht nur eine fundierte technische Ausbildung mit, sondern auch praktische Erfahrung aus verschiedenen Projekten. Meine Leidenschaft gilt der Entwicklung moderner, skalierbarer Webanwendungen und der kontinuierlichen Erforschung neuer Technologien.',
  interests: [
    'Web Development',
    'UI/UX Design',
    'Cloud Computing',
    'DevOps',
    'Mobile Development',
    'Machine Learning'
  ],
  education: {
    school: 'HTL Rennweg',
    department: 'Informationstechnologie, Medientechnik',
    year: '5. Jahrgang (2023/24)'
  }
}

// Skills data
const skillsData = {
  categories: {
    'Backend Development': [
      { name: 'Java & Spring', level: 90 },
      { name: 'PHP & Symfony', level: 85 },
      { name: 'Kotlin', level: 80 },
      { name: 'SQL & Oracle', level: 85 }
    ],
    'Frontend Development': [
      { name: 'JavaScript/TypeScript', level: 90 },
      { name: 'Vue.js & Nuxt', level: 85 },
      { name: 'HTML5 & CSS3', level: 90 },
      { name: 'Tailwind CSS', level: 85 }
    ],
    'Tools & Technologies': [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Docker & Kubernetes', level: 80 },
      { name: 'CI/CD Pipelines', level: 85 },
      { name: 'Cloud Services', level: 80 }
    ]
  }
}

// Projects data
const projects = [
  {
    title: 'E-Learning Platform',
    description: 'Eine moderne Lernplattform mit interaktiven Kursen, Live-Bewertungen und personalisierten Lernpfaden.',
    image: '/api/placeholder/800/600',
    technologies: ['Vue.js', 'Spring Boot', 'PostgreSQL', 'Docker'],
    link: '#'
  },
  {
    title: 'Task Management System',
    description: 'Ein kollaboratives Projektmanagement-Tool mit Echtzeit-Updates und automatisierter Ressourcenplanung.',
    image: '/api/placeholder/800/600',
    technologies: ['Nuxt.js', 'Symfony', 'MySQL', 'WebSockets'],
    link: '#'
  },
  {
    title: 'IoT Dashboard',
    description: 'Ein reaktives Dashboard zur Visualisierung und Analyse von IoT-Sensordaten in Echtzeit.',
    image: '/api/placeholder/800/600',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'MQTT'],
    link: '#'
  }
]

// Contact form
const contact = {
  form: ref({
    name: '',
    email: '',
    message: ''
  }),
  submitForm: () => {
    console.log('Form submitted:', contact.form.value)
    alert('Danke für deine Nachricht! Ich werde mich bald bei dir melden.')
    contact.form.value = {
      name: '',
      email: '',
      message: ''
    }
  }
}

// Particles animation with modern effect
const createParticles = () => {
  const particlesContainer = document.getElementById('particles')
  const particleCount = 30
  const particles = []

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div')
    particle.className = 'absolute rounded-full bg-gradient-to-r from-blue-400 to-cyan-400'

    // Variiere die Größe der Partikel
    const size = Math.random() * 3 + 1
    particle.style.width = `${size}px`
    particle.style.height = `${size}px`

    // Setze Startposition
    particle.style.left = Math.random() * 100 + '%'
    particle.style.top = Math.random() * 100 + '%'

    // Füge Blur-Effekt hinzu
    particle.style.filter = 'blur(1px)'

    particlesContainer.appendChild(particle)
    particles.push(particle)

    // Animiere jedes Partikel
    gsap.to(particle, {
      x: 'random(-100, 100)',
      y: 'random(-100, 100)',
      opacity: 'random(0.3, 0.7)',
      duration: 'random(3, 7)',
      repeat: -1,
      yoyo: true,
      ease: 'none',
      delay: Math.random() * 2
    })
  }

  // Interaktiver Mauseffekt
  document.addEventListener('mousemove', (e) => {
    particles.forEach((particle, index) => {
      const rect = particlesContainer.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      if (index % 3 === 0) { // Nur jedes dritte Partikel reagiert auf die Maus
        gsap.to(particle, {
          x: (x / rect.width) * 50 - 25,
          y: (y / rect.height) * 50 - 25,
          duration: 1,
          ease: 'power2.out'
        })
      }
    })
  })
}

// Initialize particles on mount
onMounted(() => {
  createParticles()
})
</script>

<style>
html {
  scroll-behavior: smooth;
}

/* Smooth transition for all hover effects */
* {
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #0f172a;
}

::-webkit-scrollbar-thumb {
  background: #3b82f6;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #2563eb;
}
</style>