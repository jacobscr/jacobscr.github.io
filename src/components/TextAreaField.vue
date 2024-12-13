<template>
  <div class="space-y-2">
    <label :for="id" class="block text-sm font-medium text-neutral-300">
      {{ label }}
    </label>
    <textarea
        :id="id"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="w-full px-4 py-3 bg-[#0F1729] border border-neutral-800 rounded-lg
             focus:border-teal-500 focus:ring-1 focus:ring-teal-500 focus:outline-none
             transition-all duration-300 resize-none"
        :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': error }"
        v-bind="$attrs"
    ></textarea>
    <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: String,
  label: String,
  error: String
})

defineEmits(['update:modelValue'])

const id = computed(() => `textarea-${Math.random().toString(36).slice(2, 11)}`)
</script>