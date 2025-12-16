<template>
  <section id="portfolio" class="min-h-screen flex items-center bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-12">Portfolio</h2>

      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="i in 3"
          class="h-64 w-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center text-gray-500"
        >
          Project preview
        </div>
      </div>
    </div>
  </section>
</template>
