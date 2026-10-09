<template>
  <section
    id="services"
    class="relative overflow-hidden bg-[#f7f7fb] py-24 text-slate-900 sm:py-32"
  >
    <div class="mx-auto max-w-7xl px-6 sm:px-10 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
          What I offer
        </p>

        <h2 class="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Everything your website needs.
        </h2>

        <p class="mt-5 text-base leading-7 text-slate-500 sm:text-lg">
          From the first visual concept to a polished, production-ready experience.
        </p>
      </div>

      <div class="mt-14 grid gap-5 md:grid-cols-3 lg:mt-20">
        <ServiceCard
          number="01"
          title="Thoughtful Web Design"
          description="Clean layouts, strong visual hierarchy, and a consistent design system tailored to your brand."
          icon="design"
        />

        <ServiceCard
          number="02"
          title="Frontend Development"
          description="Responsive, interactive interfaces built with modern technologies and maintainable code."
          icon="code"
        />

        <ServiceCard
          number="03"
          title="Launch & Deployment"
          description="A production-ready website configured for deployment on platforms such as Vercel or Netlify."
          icon="launch"
        />
      </div>

      <div class="mt-12 text-center">
        <a
          href="#contact"
          class="group inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-violet-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500"
        >
          Let's discuss your project
          <span class="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import ServiceCard from './ServiceCard.vue'
</script>
