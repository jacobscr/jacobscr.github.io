// components/contact/ContactForm.vue
<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <div class="relative">
      <input-field
          v-model="form.name"
          :error="errors.name"
          label="Name"
          placeholder="Dein Name"
          required
      />
    </div>

    <div class="relative">
      <input-field
          v-model="form.email"
          :error="errors.email"
          type="email"
          label="Email"
          placeholder="deine@email.com"
          required
      />
    </div>

    <div class="relative">
      <text-area-field
          v-model="form.message"
          :error="errors.message"
          label="Nachricht"
          placeholder="Wie kann ich dir helfen?"
          rows="4"
          required
      />
    </div>

    <div class="flex items-center justify-between">
      <p class="text-sm text-neutral-500">
        Alle Felder sind erforderlich
      </p>
      <button
          type="submit"
          :disabled="isSubmitting"
          class="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg font-medium
               disabled:opacity-50 disabled:cursor-not-allowed
               hover:opacity-90 transform hover:scale-[1.02] transition-all duration-300"
      >
        <span v-if="!isSubmitting">Senden</span>
        <loader-icon v-else class="w-5 h-5 animate-spin" />
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { LoaderIcon } from 'lucide-vue-next'
import InputField from './InputField.vue'
import TextAreaField from './TextAreaField.vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)

const validateForm = () => {
  let isValid = true
  errors.name = ''
  errors.email = ''
  errors.message = ''

  if (!form.name.trim()) {
    errors.name = 'Name ist erforderlich'
    isValid = false
  }

  if (!form.email.trim()) {
    errors.email = 'Email ist erforderlich'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Ungültige Email-Adresse'
    isValid = false
  }

  if (!form.message.trim()) {
    errors.message = 'Nachricht ist erforderlich'
    isValid = false
  }

  return isValid
}

const handleSubmit = async () => {
  if (!validateForm()) return

  isSubmitting.value = true

  try {
    // Hier würde der API-Call erfolgen
    await new Promise(resolve => setTimeout(resolve, 1500)) // Simulation

    form.name = ''
    form.email = ''
    form.message = ''

    alert('Danke für deine Nachricht! Ich werde mich bald bei dir melden.')
  } catch (error) {
    alert('Ein Fehler ist aufgetreten. Bitte versuche es später erneut.')
  } finally {
    isSubmitting.value = false
  }
}
</script>