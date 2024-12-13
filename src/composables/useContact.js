import { ref } from 'vue'

export function useContact() {
    const form = ref({
        name: '',
        email: '',
        message: ''
    })

    const isSubmitting = ref(false)
    const submitError = ref(null)

    const submitForm = async () => {
        isSubmitting.value = true
        submitError.value = null

        try {
            // API Call Simulation
            await new Promise(resolve => setTimeout(resolve, 1500))

            // Reset Form
            form.value = {
                name: '',
                email: '',
                message: ''
            }

            return { success: true }
        } catch (error) {
            submitError.value = 'Ein Fehler ist aufgetreten. Bitte versuche es später erneut.'
            return { success: false, error: submitError.value }
        } finally {
            isSubmitting.value = false
        }
    }

    return {
        form,
        isSubmitting,
        submitError,
        submitForm
    }
}