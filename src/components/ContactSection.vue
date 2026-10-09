<template>
  <section id="contact" class="relative overflow-hidden bg-[#090b14] py-24 text-white sm:py-32">
    <div
      class="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-violet-600/15 blur-[120px]"
      aria-hidden="true"
    ></div>
    <div
      class="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-600/10 blur-[120px]"
      aria-hidden="true"
    ></div>

    <div class="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-8">
      <div class="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div class="flex flex-col justify-center">
          <p class="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
            Let's connect
          </p>

          <h2
            class="mt-4 max-w-lg text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Let's build something
            <span class="text-violet-300">great together.</span>
          </h2>

          <p class="mt-6 max-w-lg text-base leading-8 text-slate-400 sm:text-lg">
            Have an idea, a business to grow, or a project that needs a better online presence? Tell
            me about it and let's explore the possibilities.
          </p>

          <div class="mt-10 space-y-5">
            <div class="flex items-center gap-4">
              <div
                class="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-violet-300"
              >
                <svg
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.7"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-medium text-white">Have a question?</p>
                <p class="mt-1 text-sm text-slate-400">Send a message using the form.</p>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div
                class="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-violet-300"
              >
                <svg
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.7"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-medium text-white">Clear communication</p>
                <p class="mt-1 text-sm text-slate-400">
                  Every project starts with understanding your goals.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-9"
        >
          <div class="mb-7">
            <h3 class="text-xl font-semibold text-white">Tell me about your project</h3>
            <p class="mt-2 text-sm leading-6 text-slate-400">
              Fill in the details below to get started.
            </p>
          </div>

          <form @submit.prevent="submitForm" class="space-y-5" novalidate>
            <div>
              <label for="contact-name" class="mb-2 block text-sm font-medium text-slate-300">
                Your name
              </label>
              <input
                id="contact-name"
                v-model="form.name"
                type="text"
                name="name"
                autocomplete="name"
                placeholder="John Smith"
                :aria-invalid="Boolean(errors.name)"
                :aria-describedby="errors.name ? 'contact-name-error' : undefined"
                :class="inputClass(errors.name)"
                required
                minlength="3"
              />
              <p
                v-if="errors.name"
                id="contact-name-error"
                class="mt-2 text-sm text-red-400"
                role="alert"
              >
                {{ errors.name }}
              </p>
            </div>

            <div>
              <label for="contact-email" class="mb-2 block text-sm font-medium text-slate-300">
                Email address
              </label>
              <input
                id="contact-email"
                v-model="form.email"
                type="email"
                name="email"
                autocomplete="email"
                placeholder="john@company.com"
                :aria-invalid="Boolean(errors.email)"
                :aria-describedby="errors.email ? 'contact-email-error' : undefined"
                :class="inputClass(errors.email)"
                required
              />
              <p
                v-if="errors.email"
                id="contact-email-error"
                class="mt-2 text-sm text-red-400"
                role="alert"
              >
                {{ errors.email }}
              </p>
            </div>

            <div>
              <label for="contact-message" class="mb-2 block text-sm font-medium text-slate-300">
                Project details
              </label>
              <textarea
                id="contact-message"
                v-model="form.message"
                name="message"
                rows="5"
                placeholder="Tell me a little about your idea, goals, and what you need..."
                :aria-invalid="Boolean(errors.message)"
                :aria-describedby="errors.message ? 'contact-message-error' : undefined"
                :class="inputClass(errors.message)"
                required
                minlength="10"
              ></textarea>
              <p
                v-if="errors.message"
                id="contact-message-error"
                class="mt-2 text-sm text-red-400"
                role="alert"
              >
                {{ errors.message }}
              </p>
            </div>

            <button
              type="submit"
              class="group flex w-full items-center justify-center gap-3 rounded-xl bg-violet-500 px-6 py-4 font-semibold text-white shadow-lg shadow-violet-500/15 transition duration-300 hover:-translate-y-0.5 hover:bg-violet-400 hover:shadow-violet-500/25 focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-violet-400"
            >
              Send a message
              <svg
                class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
              >
                <path d="M5 12h14m-7-7 7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>

            <p
              v-if="demoNotice"
              class="rounded-lg border border-amber-300/20 bg-amber-300/6 p-3 text-sm leading-6 text-amber-200"
              role="status"
            >
              {{ demoNotice }}
            </p>

            <p class="text-center text-xs leading-5 text-slate-500">
              Demo form — messages are not transmitted or stored.
            </p>
          </form>
        </div>
      </div>

      <footer class="mt-20 border-t border-white/8 pt-7">
        <div
          class="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left"
        >
          <a href="#hero" class="text-sm font-semibold tracking-tight text-white">
            Landing<span class="text-violet-300">.</span>
          </a>
          <p class="text-xs text-slate-500">
            © {{ new Date().getFullYear() }} Landing Demo. Crafted with care.
          </p>
          <a href="#hero" class="text-xs text-slate-400 transition hover:text-white">
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useInputClass } from '@/composables/useInputClass'

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

const demoNotice = ref('')

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

  if (!emailRegex.test(form.email.trim())) {
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
  demoNotice.value = ''

  if (!validate()) return

  demoNotice.value =
    'Thanks for trying the demo! This form is not connected to an email service yet, so your message has not been sent.'
}
</script>
