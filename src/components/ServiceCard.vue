<template>
  <div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition">
    <h3 class="font-semibold text-xl mb-3">{{ title }}</h3>
    <p class="text-gray-600">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
})
</script>
