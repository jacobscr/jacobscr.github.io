<template>
  <div class="relative h-[600px] w-full">
    <!-- Radar Container -->
    <div class="absolute inset-0" ref="radarContainer">
      <canvas ref="radarCanvas" class="w-full h-full"></canvas>
    </div>

    <!-- Radar Labels -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="relative w-full h-full">
          <span class="absolute top-[15%] left-1/2 -translate-x-1/2 text-sm text-neutral-400">Expert</span>
          <span class="absolute top-[35%] left-1/2 -translate-x-1/2 text-sm text-neutral-400">Proficient</span>
          <span class="absolute top-[55%] left-1/2 -translate-x-1/2 text-sm text-neutral-400">Advanced</span>
          <span class="absolute top-[75%] left-1/2 -translate-x-1/2 text-sm text-neutral-400">Learning</span>
        </div>
      </div>
    </div>

    <!-- Quadrant Labels -->
    <div class="absolute inset-0 pointer-events-none">
      <span class="absolute top-[10%] left-1/2 -translate-x-1/2 text-sm font-medium text-teal-400">Frontend</span>
      <span class="absolute top-1/2 left-[90%] -translate-y-1/2 text-sm font-medium text-teal-400">Backend</span>
      <span class="absolute bottom-[10%] left-1/2 -translate-x-1/2 text-sm font-medium text-teal-400">DevOps</span>
      <span class="absolute top-1/2 left-[10%] -translate-y-1/2 text-sm font-medium text-teal-400">Data</span>
    </div>

    <!-- Legend -->
    <div class="absolute top-4 right-4 bg-[#0F1729]/90 backdrop-blur-sm p-4 rounded-lg border border-neutral-800">
      <h4 class="text-sm font-medium text-neutral-300 mb-3">Technologie-Status</h4>
      <div class="space-y-2">
        <div v-for="(color, status) in statusColors" :key="status" class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full" :style="{ backgroundColor: color }"></span>
          <span class="text-sm text-neutral-400">{{ status }}</span>
        </div>
      </div>
    </div>

    <!-- Stats -->
    <div class="absolute bottom-4 left-4 bg-[#0F1729]/90 backdrop-blur-sm p-4 rounded-lg border border-neutral-800">
      <div class="space-y-1">
        <div class="text-sm text-neutral-300">
          Aktive Technologien: {{ getCurrentTechCount() }}
        </div>
        <div class="text-xs text-neutral-500">
          In Entwicklung: {{ getLearningTechCount() }}
        </div>
      </div>
    </div>

    <!-- Tooltip -->
    <div
        v-if="hoveredTech"
        class="absolute bg-[#0F1729]/90 backdrop-blur-sm p-4 rounded-lg border border-neutral-800 shadow-xl z-10 min-w-[200px]"
        :style="tooltipStyle"
    >
      <h4 class="text-teal-400 font-medium mb-1">{{ hoveredTech.name }}</h4>
      <p class="text-sm text-neutral-400 mb-2">{{ hoveredTech.description }}</p>
      <div class="flex items-center gap-2 text-xs">
        <span class="px-2 py-1 rounded-full bg-neutral-800 text-neutral-300">
          {{ hoveredTech.group }}
        </span>
        <span v-if="hoveredTech.experience" class="text-neutral-500">
          {{ hoveredTech.experience }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as THREE from 'three'
import { gsap } from 'gsap'

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})

const radarContainer = ref(null)
const radarCanvas = ref(null)
const hoveredTech = ref(null)
const tooltipStyle = ref({
  left: '0px',
  top: '0px',
  display: 'none'
})

// Three.js variables
let scene, camera, renderer, radarGroup
let isInitialized = false
let animationFrameId = null

const statusColors = {
  'Aktiv im Einsatz': '#2dd4bf',
  'In Entwicklung': '#3b82f6',
  'Zukünftig geplant': '#6366f1'
}

const getCurrentTechCount = () => {
  return props.data.filter(tech => tech.group === 'Current').length
}

const getLearningTechCount = () => {
  return props.data.filter(tech => tech.group === 'Learning').length
}

const getColorForGroup = (group) => {
  switch (group) {
    case 'Current':
      return 0x2dd4bf
    case 'Learning':
      return 0x3b82f6
    case 'Interested':
      return 0x6366f1
    default:
      return 0x2dd4bf
  }
}

const createTechPoint = (tech) => {
  const geometry = new THREE.CircleGeometry(0.05, 32)
  const material = new THREE.MeshBasicMaterial({
    color: getColorForGroup(tech.group),
    transparent: true,
    opacity: 0.8
  })
  const point = new THREE.Mesh(geometry, material)

  point.position.x = Math.cos(tech.angle) * (tech.distance * 2)
  point.position.y = Math.sin(tech.angle) * (tech.distance * 2)
  point.userData = tech

  return point
}

const createHaloEffect = (tech) => {
  const geometry = new THREE.RingGeometry(0.08, 0.1, 32)
  const material = new THREE.MeshBasicMaterial({
    color: getColorForGroup(tech.group),
    transparent: true,
    opacity: 0.3
  })
  const halo = new THREE.Mesh(geometry, material)

  halo.position.x = Math.cos(tech.angle) * (tech.distance * 2)
  halo.position.y = Math.sin(tech.angle) * (tech.distance * 2)

  gsap.to(material, {
    opacity: 0.1,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
  })

  return halo
}

const init = () => {
  if (!radarCanvas.value || !radarContainer.value) return

  // Scene setup
  scene = new THREE.Scene()

  const aspect = radarContainer.value.clientWidth / radarContainer.value.clientHeight
  camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000)
  camera.position.z = 5

  renderer = new THREE.WebGLRenderer({
    canvas: radarCanvas.value,
    alpha: true,
    antialias: true
  })
  renderer.setSize(radarContainer.value.clientWidth, radarContainer.value.clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  radarGroup = new THREE.Group()
  scene.add(radarGroup)

  // Add circles
  const circles = [0.5, 1, 1.5, 2]
  circles.forEach(radius => {
    const geometry = new THREE.RingGeometry(radius - 0.01, radius, 32)
    const material = new THREE.MeshBasicMaterial({
      color: 0x2dd4bf,
      transparent: true,
      opacity: 0.1
    })
    const circle = new THREE.Mesh(geometry, material)
    radarGroup.add(circle)

    // Add quadrant lines
    for (let i = 0; i < 4; i++) {
      const angle = (i * Math.PI / 2)
      const lineGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector2(0, 0),
        new THREE.Vector2(Math.cos(angle) * 2.5, Math.sin(angle) * 2.5)
      ])
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x2dd4bf,
        transparent: true,
        opacity: 0.1
      })
      const line = new THREE.Line(lineGeometry, lineMaterial)
      radarGroup.add(line)
    }
  })

  // Add tech points
  props.data.forEach(tech => {
    const point = createTechPoint(tech)
    radarGroup.add(point)

    if (tech.group === 'Current') {
      const halo = createHaloEffect(tech)
      radarGroup.add(halo)
    }
  })

  isInitialized = true
}

const animate = () => {
  if (!isInitialized || !renderer || !scene || !camera) return

  animationFrameId = requestAnimationFrame(animate)

  radarGroup.rotation.z += 0.001
  renderer.render(scene, camera)
}

const handleResize = () => {
  if (!radarContainer.value || !camera || !renderer) return

  const width = radarContainer.value.clientWidth
  const height = radarContainer.value.clientHeight

  camera.aspect = width / height
  camera.updateProjectionMatrix()

  renderer.setSize(width, height)
}

const cleanup = () => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }

  if (renderer) {
    renderer.dispose()
  }

  if (radarGroup) {
    radarGroup.clear()
  }

  if (scene) {
    scene.clear()
  }

  isInitialized = false
}

// Mouse interaction
const mouse = new THREE.Vector2()
const raycaster = new THREE.Raycaster()

const handleMouseMove = (event) => {
  if (!radarContainer.value || !camera || !scene) return

  const rect = radarContainer.value.getBoundingClientRect()
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

  raycaster.setFromCamera(mouse, camera)
  const intersects = raycaster.intersectObjects(radarGroup.children)

  if (intersects.length > 0 && intersects[0].object.userData.name) {
    hoveredTech.value = intersects[0].object.userData
    tooltipStyle.value = {
      left: `${event.clientX - rect.left + 10}px`,
      top: `${event.clientY - rect.top + 10}px`,
      display: 'block'
    }
  } else {
    hoveredTech.value = null
    tooltipStyle.value.display = 'none'
  }
}

onMounted(() => {
  init()
  animate()
  window.addEventListener('resize', handleResize)
  radarContainer.value?.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  cleanup()
  window.removeEventListener('resize', handleResize)
  radarContainer.value?.removeEventListener('mousemove', handleMouseMove)
})

watch(() => props.data, () => {
  cleanup()
  init()
  animate()
}, { deep: true })
</script>

<style scoped>
canvas {
  cursor: pointer;
}

.tooltip-enter-active,
.tooltip-leave-active {
  transition: all 0.3s ease;
}

.tooltip-enter-from,
.tooltip-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>