<template>
  <nav
    class="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo / Brand -->
        <div class="flex-shrink-0">
          <div class="flex items-center gap-2">
            <div
              class="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center"
            >
              <span class="text-white font-bold text-lg overflow-hidden">L</span>
            </div>
            <span
              class="hidden sm:inline font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-700"
            >
              Landing
            </span>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-1">
          <a
            v-for="item in items"
            :key="item.id"
            :href="`#${item.id}`"
            class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 relative group"
          >
            {{ item.label }}
            <span
              class="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"
            ></span>
          </a>
        </div>

        <!-- CTA Button (Desktop) -->
        <div class="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            class="px-6 py-2.5 rounded-lg font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 transform hover:scale-105"
          >
            Get Started
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          <svg
            class="w-6 h-6 text-gray-700 transition-transform duration-300"
            :class="{ 'rotate-90': mobileMenuOpen }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!mobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="mobileMenuOpen"
          class="md:hidden border-t border-gray-100 bg-gray-50/50 backdrop-blur-sm"
        >
          <div class="px-4 py-4 space-y-2">
            <a
              v-for="item in items"
              :key="item.id"
              :href="`#${item.id}`"
              @click="mobileMenuOpen = false"
              class="block px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
            >
              {{ item.label }}
            </a>
            <div class="border-t border-gray-200 pt-3 mt-2">
              <a
                href="#contact"
                @click="mobileMenuOpen = false"
                class="block px-4 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 text-center"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const items = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
</script>

<style scoped>
/* Optional: Add custom animations if needed */
@media (max-width: 768px) {
  :deep(nav) {
    padding-right: 0;
  }
}
</style>
