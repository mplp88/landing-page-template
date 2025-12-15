<template>
  <section
    id="contact"
    class="min-h-screen flex items-center bg-gradient-to-br from-gray-900 to-gray-800 text-white"
  >
    <div class="max-w-xl mx-auto w-full p-6">
      <h2 class="text-3xl font-bold mb-6 text-center">Contact</h2>

      <form @submit.prevent="submitForm" class="space-y-4 bg-white/5 p-6 rounded-2xl backdrop-blur">
        <!-- Name -->
        <div>
          <input
            v-model="form.name"
            type="text"
            placeholder="Your name"
            :class="inputClass(errors.name)"
          />
          <p v-if="errors.name" class="text-red-400 text-sm mt-1">
            {{ errors.name }}
          </p>
        </div>

        <!-- Email -->
        <div>
          <input
            v-model="form.email"
            type="text"
            placeholder="Your email"
            :class="inputClass(errors.email)"
          />
          <p v-if="errors.email" class="text-red-400 text-sm mt-1">
            {{ errors.email }}
          </p>
        </div>

        <!-- Message -->
        <div>
          <textarea
            v-model="form.message"
            rows="4"
            placeholder="Your message"
            :class="inputClass(errors.message)"
          ></textarea>
          <p v-if="errors.message" class="text-red-400 text-sm mt-1">
            {{ errors.message }}
          </p>
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold transition"
        >
          Send message
        </button>
      </form>
    </div>

    <!-- Toast -->
    <div
      v-if="showToast"
      class="fixed bottom-6 right-6 bg-green-600/75 text-white px-6 py-3 rounded-xl shadow-lg transition"
    >
      Message sent successfully!
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useInputClass } from '@/composables/useInputClass'
import iziToast from 'izitoast'

const { inputClass } = useInputClass()

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const errors = reactive({
  name: '',
  email: '',
  message: '',
})

const showToast = ref(false)

// Regex simple y efectivo
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const validate = () => {
  errors.name = ''
  errors.email = ''
  errors.message = ''

  let isValid = true

  if (form.name.trim().length < 3) {
    errors.name = 'Name must be at least 3 characters.'
    isValid = false
  }

  if (!emailRegex.test(form.email)) {
    errors.email = 'Please enter a valid email address.'
    isValid = false
  }

  if (form.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.'
    isValid = false
  }

  return isValid
}

const submitForm = () => {
  if (!validate()) return

  iziToast.success({
    title: 'Success',
    message: 'Your message has been sent!',
    position: 'bottomRight',
    timeout: 3000,
  })

  // Reset form
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>
