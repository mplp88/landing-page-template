<template>
  <header class="fixed inset-x-0 top-0 z-50">
    <nav
      class="border-b border-white/8 bg-[#090b14]/85 shadow-lg shadow-black/5 backdrop-blur-xl"
      aria-label="Main navigation"
    >
      <div
        class="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-10 lg:h-20 lg:px-8"
      >
        <a
          href="#hero"
          class="group flex items-center gap-3"
          aria-label="Landing home"
          @click="closeMenu"
        >
          <span
            class="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-violet-400 to-indigo-600 text-lg font-bold text-white shadow-lg shadow-violet-500/20 transition duration-300 group-hover:rotate-3 group-hover:scale-105"
          >
            L
          </span>
          <span class="text-lg font-semibold tracking-tight text-white">
            Landing<span class="text-violet-300">.</span>
          </span>
        </a>

        <div class="hidden items-center gap-1 md:flex">
          <a
            v-for="item in items"
            :key="item.id"
            :href="`#${item.id}`"
            class="nav-link rounded-lg px-3 py-2 text-sm font-medium text-slate-400 transition duration-200 hover:text-white lg:px-4"
          >
            {{ item.label }}
          </a>
        </div>

        <a
          href="#contact"
          class="hidden items-center gap-2 rounded-xl bg-violet-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/15 transition duration-300 hover:-translate-y-0.5 hover:bg-violet-400 hover:shadow-violet-500/25 focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-violet-400 md:inline-flex"
        >
          Let's talk
          <svg
            class="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <path d="M7 17 17 7M7 7h10v10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>

        <button
          type="button"
          class="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-200 transition hover:bg-white/5 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-violet-400 md:hidden"
          :aria-expanded="mobileMenuOpen"
          aria-controls="mobile-navigation"
          :aria-label="mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <svg
            v-if="!mobileMenuOpen"
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            aria-hidden="true"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>

          <svg
            v-else
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            aria-hidden="true"
          >
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>
      </div>

      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="mobileMenuOpen"
          id="mobile-navigation"
          class="border-t border-white/8 bg-[#0d101b]/98 px-6 pb-5 pt-3 backdrop-blur-xl md:hidden"
        >
          <a
            v-for="item in items"
            :key="item.id"
            :href="`#${item.id}`"
            class="block rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            @click="closeMenu"
          >
            {{ item.label }}
          </a>

          <a
            href="#contact"
            class="mt-3 flex items-center justify-center rounded-xl bg-violet-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
            @click="closeMenu"
          >
            Let's talk
          </a>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const items = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
]

const closeMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<style scoped>
.nav-link {
  position: relative;
}

.nav-link::after {
  position: absolute;
  right: 1rem;
  bottom: 0.3rem;
  left: 1rem;
  height: 1px;
  content: '';
  background: #a78bfa;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 200ms ease;
}

.nav-link:hover::after {
  transform: scaleX(1);
}

@media (prefers-reduced-motion: reduce) {
  .nav-link::after {
    transition: none;
  }
}
</style>
