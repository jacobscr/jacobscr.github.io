<template>
  <div class="relative pl-8 pb-8 last:pb-0">
    <!-- Timeline Line -->
    <div class="absolute left-0 top-2 bottom-0 w-[2px] bg-neutral-800">
      <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-teal-400 border-4 border-[#0F1729]"></div>
    </div>

    <!-- Content -->
    <div class="relative group">
      <!-- Institution & Period -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
        <h4 class="text-lg font-semibold text-neutral-200">
          {{ data.institution }}
        </h4>
        <span class="text-teal-400 text-sm">{{ data.period }}</span>
      </div>

      <!-- Department -->
      <p class="text-neutral-400 mb-2">{{ data.department }}</p>

      <!-- Description -->
      <p class="text-sm text-neutral-500">{{ data.description }}</p>

      <!-- Hover Effect -->
      <div class="absolute -inset-2 bg-neutral-800/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    required: true,
    validator: (value) => {
      return [
        'institution',
        'department',
        'period',
        'description'
      ].every(key => key in value)
    }
  }
})
</script>