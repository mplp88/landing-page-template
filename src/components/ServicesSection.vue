<template>
  <section id="services" class="min-h-screen flex items-center bg-gray-50">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-12">Services</h2>

      <div class="grid md:grid-cols-3 gap-8">
        <ServiceCard title="Web Design" description="Clean and modern UI focused on usability." />
        <ServiceCard
          title="Frontend Development"
          description="Fast and maintainable Vue.js applications."
        />
        <ServiceCard
          title="Deployment"
          description="Ready-to-use websites deployed to production."
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ServiceCard from './ServiceCard.vue'
</script>
