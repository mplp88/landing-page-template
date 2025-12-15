<template>
  <nav class="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b border-gray-200">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo / Name -->
      <span class="font-bold text-lg text-gray-900"> Landing Page </span>

      <!-- Links -->
      <ul class="hidden md:flex gap-6 text-sm font-medium text-gray-700">
        <li v-for="item in items" :key="item.id">
          <a :href="`#${item.id}`" class="hover:text-blue-600 transition">
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
const items = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
</script>
