<template>
  <div class="bg-[#0F1729] p-8 rounded-2xl border border-neutral-800 hover:border-teal-500/50 transition-all duration-300">
    <h3 class="text-xl font-bold mb-6 text-teal-400">{{ title }}</h3>

    <div class="space-y-6">
      <div v-for="skill in skills" :key="skill.name" class="group">
        <div class="flex items-start justify-between mb-2">
          <div>
            <h4 class="text-neutral-200 font-medium">{{ skill.name }}</h4>
            <p class="text-sm text-neutral-400 mt-1">{{ skill.description }}</p>
          </div>
          <div class="text-right">
            <span class="text-sm text-teal-400">{{ skill.experience }}</span>
          </div>
        </div>

        <!-- Verwendete Technologien -->
        <div class="flex flex-wrap gap-2 mt-2">
          <span
              v-for="tech in skill.technologies"
              :key="tech"
              class="px-2 py-1 text-xs bg-neutral-800/50 text-neutral-300 rounded-full"
          >
            {{ tech }}
          </span>
        </div>

        <!-- Projekte/Erfahrungen -->
        <div v-if="skill.highlights" class="mt-3 pl-4 border-l-2 border-teal-500/20 group-hover:border-teal-500/40 transition-colors duration-300">
          <ul class="space-y-1">
            <li
                v-for="highlight in skill.highlights"
                :key="highlight"
                class="text-sm text-neutral-400"
            >
              {{ highlight }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  skills: {
    type: Array,
    required: true
  }
})
</script>