<template>
  <div class="min-h-screen bg-neutral-50 py-8 print:p-0 print:bg-white">
    <div class="w-[21cm] h-[29.7cm] mx-auto bg-white shadow-lg relative print:shadow-none">
      <!-- Header -->
      <header class="px-8 pt-4 pb-5 bg-gradient-to-r from-teal-50 to-blue-50">
        <div class="flex justify-between">
          <div class="flex flex-col justify-between">
            <h1 class="text-3xl font-bold text-teal-600">Jacob Schrott</h1>
            <p class="text-neutral-600">Fullstack Entwickler & Medientechniker</p>
          </div>
          <div class="flex flex-col justify-between mt-3">
            <a href="mailto:jacob.schrott@htl.rennweg.at" 
               class="text-sm text-neutral-600 hover:text-teal-600 transition-colors flex items-center justify-end gap-2">
              <span>jacob.schrott@htl.rennweg.at</span>
              <mail-icon class="w-4 h-4" />
            </a>
            <a href="https://github.com/jacobscr" 
               class="text-sm text-neutral-600 hover:text-teal-600 transition-colors flex items-center justify-end gap-2">
              <span>github.com/jacobscr</span>
              <github-icon class="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      <!-- Persönliche Daten & Sprachen -->
      <div class="pl-8 pr-12 py-4 border-b border-neutral-100">
        <div class="grid grid-cols-[1.75fr_1.25fr_auto] gap-8">
          <!-- Persönliche Daten -->
          <section class="flex flex-col justify-center">
            <h2 class="text-lg font-semibold text-teal-600 mb-2">Persönliche Daten</h2>
            <div class="flex flex-col gap-2">
              <div class="flex gap-3">
                <span class="text-sm text-neutral-400 w-20">Geboren</span>
                <span class="text-sm text-neutral-600">16.02.2006</span>
              </div>
              <div class="flex gap-3">
                <span class="text-sm text-neutral-400 w-20">Adresse</span>
                <span class="text-sm text-neutral-600">Ocwirkgasse 11/8/1</span>
              </div>
              <div class="flex gap-3">
                <span class="text-sm text-neutral-400 w-20">Telefon</span>
                <span class="text-sm text-neutral-600">+43 676 4601552</span>
              </div>
              <div class="flex gap-3">
                <span class="text-sm text-neutral-400 w-20">Nationalität</span>
                <span class="text-sm text-neutral-600">Österreich</span>
              </div>
            </div>
          </section>

          <!-- Sprachen -->
          <section class="flex flex-col">
            <div class="flex flex-col" style="margin-top: calc(50% - 5.5rem);">
              <h2 class="text-lg font-semibold text-teal-600 mb-2">Sprachen</h2>
              <div class="flex flex-col gap-2">
                <div class="flex gap-3">
                  <span class="text-sm text-neutral-400 w-20">Deutsch</span>
                  <span class="text-sm text-neutral-600">Muttersprache</span>
                </div>
                <div class="flex gap-3">
                  <span class="text-sm text-neutral-400 w-20">Englisch</span>
                  <span class="text-sm text-neutral-600">B2</span>
                </div>
              </div>
            </div>
          </section>

          <!-- Profilbild -->
          <div class="flex items-start justify-end">
            <div class="w-36 h-44 rounded-lg overflow-hidden border-3 border-neutral-200">
              <img 
                :src="profileImage" 
                alt="Profilbild"
                class="w-full h-full object-cover"
                @error="handleImageError"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="px-8 py-5 grid grid-cols-3 gap-6">
        <!-- Left Column -->
        <div class="col-span-1">
          <!-- Profile -->
          <section>
            <h2 class="text-lg font-semibold text-teal-600 mb-3">Profil</h2>
            <p class="text-sm text-neutral-600 leading-relaxed">
              {{ about.description }}
            </p>
          </section>

          <!-- Skills -->
          <section class="mt-5">
            <h2 class="text-lg font-semibold text-teal-600 mb-4">Fähigkeiten</h2>
            <div class="space-y-6">
              <div>
                <h3 class="text-sm font-medium text-neutral-700 mb-3">Frontend Development</h3>
                <div class="space-y-3">
                  <div class="group">
                    <div class="flex items-center justify-between mb-1">
                      <span class="text-sm text-neutral-600">Vue.js / Nuxt</span>
                      <div class="flex gap-1.5">
                        <div v-for="i in 5" :key="i"
                             class="w-2.5 h-2.5 rounded-full"
                             :class="{
                               'bg-teal-300': i <= 5 && i === 1,
                               'bg-teal-400': i <= 5 && i === 2,
                               'bg-teal-500': i <= 5 && i === 3,
                               'bg-teal-600': i <= 5 && i === 4,
                               'bg-teal-700': i <= 5 && i === 5,
                               'bg-neutral-200': i > 5
                             }">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="group">
                    <div class="flex items-center justify-between mb-1">
                      <span class="text-sm text-neutral-600">JavaScript / TypeScript</span>
                      <div class="flex gap-1.5">
                        <div v-for="i in 5" :key="i"
                             class="w-2.5 h-2.5 rounded-full"
                             :class="{
                               'bg-teal-300': i <= 4 && i === 1,
                               'bg-teal-400': i <= 4 && i === 2,
                               'bg-teal-500': i <= 4 && i === 3,
                               'bg-teal-600': i <= 4 && i === 4,
                               'bg-teal-700': i <= 4 && i === 5,
                               'bg-neutral-200': i > 4
                             }">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="group">
                    <div class="flex items-center justify-between mb-1">
                      <span class="text-sm text-neutral-600">HTML5 / Tailwind</span>
                      <div class="flex gap-1.5">
                        <div v-for="i in 5" :key="i"
                             class="w-2.5 h-2.5 rounded-full"
                             :class="{
                               'bg-teal-300': i <= 4 && i === 1,
                               'bg-teal-400': i <= 4 && i === 2,
                               'bg-teal-500': i <= 4 && i === 3,
                               'bg-teal-600': i <= 4 && i === 4,
                               'bg-teal-700': i <= 4 && i === 5,
                               'bg-neutral-200': i > 4
                             }">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 class="text-sm font-medium text-neutral-700 mb-3">Backend Development</h3>
                <div class="space-y-3">
                  <div class="group">
                    <div class="flex items-center justify-between mb-1">
                      <span class="text-sm text-neutral-600">PHP / Symfony</span>
                      <div class="flex gap-1.5">
                        <div v-for="i in 5" :key="i"
                             class="w-2.5 h-2.5 rounded-full"
                             :class="{
                               'bg-teal-300': i <= 3 && i === 1,
                               'bg-teal-400': i <= 3 && i === 2,
                               'bg-teal-500': i <= 3 && i === 3,
                               'bg-teal-600': i <= 3 && i === 4,
                               'bg-teal-700': i <= 3 && i === 5,
                               'bg-neutral-200': i > 3
                             }">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="group">
                    <div class="flex items-center justify-between mb-1">
                      <span class="text-sm text-neutral-600">MySQL / SQLite</span>
                      <div class="flex gap-1.5">
                        <div v-for="i in 5" :key="i"
                             class="w-2.5 h-2.5 rounded-full"
                             :class="{
                               'bg-teal-300': i <= 3 && i === 1,
                               'bg-teal-400': i <= 3 && i === 2,
                               'bg-teal-500': i <= 3 && i === 3,
                               'bg-teal-600': i <= 3 && i === 4,
                               'bg-teal-700': i <= 3 && i === 5,
                               'bg-neutral-200': i > 3
                             }">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="group">
                    <div class="flex items-center justify-between mb-1">
                      <span class="text-sm text-neutral-600">RESTful APIs</span>
                      <div class="flex gap-1.5">
                        <div v-for="i in 5" :key="i"
                             class="w-2.5 h-2.5 rounded-full"
                             :class="{
                               'bg-teal-300': i <= 4 && i === 1,
                               'bg-teal-400': i <= 4 && i === 2,
                               'bg-teal-500': i <= 4 && i === 3,
                               'bg-teal-600': i <= 4 && i === 4,
                               'bg-teal-700': i <= 4 && i === 5,
                               'bg-neutral-200': i > 4
                             }">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 class="text-sm font-medium text-neutral-700 mb-3">Tools & Methods</h3>
                <div class="space-y-3">
                  <div class="group">
                    <div class="flex items-center justify-between mb-1">
                      <span class="text-sm text-neutral-600">Git / GitHub</span>
                      <div class="flex gap-1.5">
                        <div v-for="i in 5" :key="i"
                             class="w-2.5 h-2.5 rounded-full"
                             :class="{
                               'bg-teal-300': i <= 4 && i === 1,
                               'bg-teal-400': i <= 4 && i === 2,
                               'bg-teal-500': i <= 4 && i === 3,
                               'bg-teal-600': i <= 4 && i === 4,
                               'bg-teal-700': i <= 4 && i === 5,
                               'bg-neutral-200': i > 4
                             }">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="group">
                    <div class="flex items-center justify-between mb-1">
                      <span class="text-sm text-neutral-600">Agile / Scrum</span>
                      <div class="flex gap-1.5">
                        <div v-for="i in 5" :key="i"
                             class="w-2.5 h-2.5 rounded-full"
                             :class="{
                               'bg-teal-300': i <= 3 && i === 1,
                               'bg-teal-400': i <= 3 && i === 2,
                               'bg-teal-500': i <= 3 && i === 3,
                               'bg-teal-600': i <= 3 && i === 4,
                               'bg-teal-700': i <= 3 && i === 5,
                               'bg-neutral-200': i > 3
                             }">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="group">
                    <div class="flex items-center justify-between mb-1">
                      <span class="text-sm text-neutral-600">CI/CD</span>
                      <div class="flex gap-1.5">
                        <div v-for="i in 5" :key="i"
                             class="w-2.5 h-2.5 rounded-full"
                             :class="{
                               'bg-teal-300': i <= 3 && i === 1,
                               'bg-teal-400': i <= 3 && i === 2,
                               'bg-teal-500': i <= 3 && i === 3,
                               'bg-teal-600': i <= 3 && i === 4,
                               'bg-teal-700': i <= 3 && i === 5,
                               'bg-neutral-200': i > 3
                             }">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- Right Column -->
        <div class="col-span-2 space-y-6">
          <!-- Timeline Section -->
          <section>
            <h2 class="text-lg font-semibold text-teal-600 mb-4">Timeline</h2>
            <div class="">
              <!-- HTL Rennweg -->
              <div class="relative pl-6 group">
                <div class="absolute left-0 top-0 bottom-0 w-[2px] bg-neutral-200 group-hover:bg-gradient-to-b group-hover:from-teal-500 group-hover:to-blue-500 transition-all duration-300"></div>
                <div class="absolute left-[-4px] top-1.5 w-[10px] h-[10px] rounded-full border-2 border-teal-500 bg-white group-hover:bg-teal-500 transition-all duration-300"></div>
                <div class="pb-4">
                  <h3 class="text-sm font-medium text-neutral-800">HTL Rennweg</h3>
                  <p class="text-xs text-teal-600 mt-0.5">Informationstechnologie, Medientechnik</p>
                  <p class="text-xs text-neutral-500 mt-0.5">2020 - jetzt</p>
                  <p class="text-xs text-neutral-600 mt-1">Fokus auf Softwareentwicklung, Webentwicklung und IT-Projektmanagement</p>
                </div>
              </div>
              <!-- IT-Praktikum -->
              <div class="relative pl-6 group">
                <div class="absolute left-0 top-0 bottom-0 w-[2px] bg-neutral-200 group-hover:bg-gradient-to-b group-hover:from-teal-500 group-hover:to-blue-500 transition-all duration-300"></div>
                <div class="absolute left-[-4px] top-1.5 w-[10px] h-[10px] rounded-full border-2 border-teal-500 bg-white group-hover:bg-teal-500 transition-all duration-300"></div>
                <div class="pb-4">
                  <h3 class="text-sm font-medium text-neutral-800">IT-Praktikum - Fonds Soziales Wien</h3>
                  <p class="text-xs text-teal-600 mt-0.5">Netzwerktechnik & Systemadministration</p>
                  <p class="text-xs text-neutral-500 mt-0.5">Juli - August 2023</p>
                  <p class="text-xs text-neutral-600 mt-1">Konfiguration von Netzwerkkomponenten, Verkabelung von Serverräumen und IT-Support</p>
                </div>
              </div>

              <!-- Ella Lingens Gymnasium -->
              <div class="relative pl-6 group">
                <div class="absolute left-0 top-0 bottom-0 w-[2px] bg-neutral-200 group-hover:bg-gradient-to-b group-hover:from-teal-500 group-hover:to-blue-500 transition-all duration-300"></div>
                <div class="absolute left-[-4px] top-1.5 w-[10px] h-[10px] rounded-full border-2 border-teal-500 bg-white group-hover:bg-teal-500 transition-all duration-300"></div>
                <div class="pb-4">
                  <h3 class="text-sm font-medium text-neutral-800">Ella Lingens Gymnasium</h3>
                  <p class="text-xs text-teal-600 mt-0.5">Realgymnasium</p>
                  <p class="text-xs text-neutral-500 mt-0.5">2016 - 2020</p>
                  <p class="text-xs text-neutral-600 mt-1">Mit Fokus auf darstellender Geometrie</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Projects -->
          <section>
            <h2 class="text-lg font-semibold text-teal-600 mb-4">Projekte</h2>
            <div class="space-y-4">
              <div class="p-4 rounded-lg border border-neutral-200 hover:border-teal-200 transition-all duration-300">
                <h3 class="font-medium text-neutral-800">KLUGes Management - Verwaltungstool für Nachhilfeunternehmen</h3>
                <p class="text-sm text-neutral-600 mt-1">Webbasierte Applikation zur Verwaltung von Mitarbeitern, Kunden und Terminen. Features: Wochenpläne, Anwesenheitsverfolgung und Lehrmaterialordner.</p>
                <div class="flex flex-wrap gap-2 mt-2">
                  <span v-for="tech in ['Vue.js', 'Tailwind CSS', 'Symfony', 'Rest', 'MySQL']" :key="tech"
                        class="px-2 py-0.5 text-xs bg-gradient-to-r from-teal-100 to-blue-100 
                               text-teal-700 rounded-full border border-teal-200/50 hover:border-teal-300 
                               hover:from-teal-200 hover:to-blue-200 transition-all duration-300">
                    {{ tech }}
                  </span>
                </div>
              </div>

              <div class="p-4 rounded-lg border border-neutral-200 hover:border-teal-200 transition-all duration-300">
                <h3 class="font-medium text-neutral-800">Unlock the Enigma - Eine digitale Schnitzeljagd</h3>
                <p class="text-sm text-neutral-600 mt-1">Kryptographische Schnitzeljagd mit Rätseln wie Verschlüsselungen und Steganografie zur Förderung von kreativem Denken und Teamarbeit.</p>
                <div class="flex flex-wrap gap-2 mt-2">
                  <span v-for="tech in ['Symfony', 'Twig', 'JavaScript', 'Tailwind CSS']" :key="tech"
                        class="px-2 py-0.5 text-xs bg-gradient-to-r from-teal-100 to-blue-100 
                               text-teal-700 rounded-full border border-teal-200/50 hover:border-teal-300 
                               hover:from-teal-200 hover:to-blue-200 transition-all duration-300">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <!-- Fußzeile -->
      <footer class="absolute bottom-6 w-full px-8 text-center">
        <p class="text-xs text-neutral-500">
          Besuchen Sie mein Webportfolio unter 
          <a href="https://jacobscr.github.io/" 
             class="text-teal-600 hover:text-teal-700 transition-colors">
            jacobscr.github.io
          </a> 
          für weitere Einblicke in meine Arbeit
        </p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { MailIcon, GithubIcon, DownloadIcon, PrinterIcon } from 'lucide-vue-next'
import { useAbout } from '../composables/useAbout'
import { useProjects } from '../composables/useProjects'
import { useSkills } from '../composables/useSkills'
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'
import { ref } from 'vue'

const about = useAbout()
const projects = useProjects()
const skillsData = useSkills()

const profileImage = ref('/images/90350720200133.jpg')

const handleImageError = (e) => {
  e.target.src = '/path/to/fallback-profile.jpg'
}

function getRating(skill) {
  return Math.min(Math.ceil(skill.technologies.length / 1.2), 5)
}

function print() {
  window.print()
}

async function printPDF() {
  // Temporär Gradient-Text für PDF-Export anpassen
  const element = document.querySelector('.resume-a4-page')
  const nameElement = element.querySelector('.gradient-text')
  const originalStyle = nameElement.style.cssText
  
  // Setze temporär solide Textfarbe für den Export
  nameElement.style.cssText = `
    background: none !important;
    background-clip: none !important;
    -webkit-background-clip: none !important;
    -webkit-text-fill-color: #0F766E !important; /* teal-700 */
    color: #0F766E !important;
  `

  try {
    await document.fonts.ready
    
    const canvas = await html2canvas(element, {
      scale: 3,
      useCORS: true,
      allowTaint: true,
      scrollX: 0,
      scrollY: 0,
      width: 793, // A4 width in pixels at 96 DPI
      height: 1122, // A4 height in pixels at 96 DPI
      onclone: (clonedDoc) => {
        const clonedElement = clonedDoc.querySelector('.resume-a4-page')
        // Stelle sicher, dass das geklonte Element die richtigen Dimensionen hat
        clonedElement.style.width = '210mm'
        clonedElement.style.height = '297mm'
        clonedElement.style.padding = '0'
        clonedElement.style.margin = '0'
        
        // Fixiere alle relativen Positionierungen
        clonedElement.querySelectorAll('*').forEach(el => {
          if (getComputedStyle(el).position === 'relative') {
            el.style.position = 'static'
          }
        })
      }
    })

    const imgData = canvas.toDataURL('image/jpeg', 1.0)
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    })

    pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297, '', 'FAST')
    pdf.save('lebenslauf-jacob-schrott.pdf')
  } finally {
    // Stelle den ursprünglichen Gradient-Style wieder her
    nameElement.style.cssText = originalStyle
  }
}
</script>

<style>
/* Nur Scrollbar verstecken */
::-webkit-scrollbar {
  display: none !important;
}

* {
  -ms-overflow-style: none !important;
  scrollbar-width: none !important;
}

/* Entferne alle Seitenränder beim Drucken */
@page {
  size: A4;
  margin: 0;
  padding: 0;
}

@media print {
  /* Entferne Browser-Margins */
  html, body {
    margin: 0 !important;
    padding: 0 !important;
    background-color: white !important;
  }

  /* Stelle sicher, dass das A4-Format exakt eingehalten wird */
  .w-[21cm] {
    width: 210mm !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .h-[29.7cm] {
    height: 297mm !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  /* Entferne Schatten und Hintergrundfarben */
  .shadow-lg {
    box-shadow: none !important;
  }

  /* Stelle sicher, dass alle Farben korrekt gedruckt werden */
  * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
    color-adjust: exact !important;
  }

  /* Verstecke nicht-druckbare Elemente */
  .print\:hidden {
    display: none !important;
  }

  /* Entferne alle Transformationen */
  * {
    transform: none !important;
  }
}
</style> 