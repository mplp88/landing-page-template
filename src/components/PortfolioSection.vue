<template>
  <section id="portfolio" class="relative overflow-hidden bg-[#0d101b] py-24 text-white sm:py-32">
    <div class="mx-auto max-w-7xl px-6 sm:px-10 lg:px-8">
      <div class="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div class="max-w-2xl">
          <p class="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
            Selected concepts
          </p>
          <h2 class="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Ideas brought to life.
          </h2>
          <p class="mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
            A glimpse into what's possible with thoughtful design, modern development, and a clear
            vision.
          </p>
        </div>

        <a
          href="#contact"
          class="group inline-flex w-fit items-center gap-2 font-medium text-violet-300 transition hover:text-violet-200"
        >
          Have a project in mind?
          <span class="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
        </a>
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        <article
          v-for="project in projects"
          :key="project.title"
          class="portfolio-card group overflow-hidden rounded-2xl border border-white/10 bg-[#141725] transition duration-500 hover:-translate-y-2 hover:border-violet-400/30 hover:shadow-2xl hover:shadow-violet-950/20"
        >
          <div class="relative aspect-4/3 overflow-hidden bg-slate-800">
            <img
              :src="project.image"
              :alt="project.alt"
              loading="lazy"
              class="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
            />

            <div
              class="absolute inset-0 bg-linear-to-t from-[#0d101b]/70 via-transparent to-transparent opacity-70 transition duration-300 group-hover:opacity-90"
            ></div>

            <span
              class="absolute left-4 top-4 rounded-full border border-white/15 bg-[#090b14]/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md"
            >
              {{ project.category }}
            </span>

            <span
              class="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
              aria-hidden="true"
            >
              ↗
            </span>
          </div>

          <div class="p-6 sm:p-7">
            <div class="flex items-start justify-between gap-4">
              <div>
                <h3 class="text-xl font-semibold tracking-tight text-white">
                  {{ project.title }}
                </h3>
                <p class="mt-2 text-sm leading-6 text-slate-400">
                  {{ project.description }}
                </p>
              </div>
              <span class="mt-1 text-xs font-medium text-slate-500">
                {{ project.number }}
              </span>
            </div>

            <div class="mt-5 flex flex-wrap gap-2">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="rounded-md border border-white/8 bg-white/3 px-2.5 py-1 text-xs text-slate-400"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </article>
      </div>

      <p class="mt-8 text-center text-xs leading-5 text-slate-500">
        Concept projects for demonstration purposes. Final designs are tailored to each client.
      </p>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    number: '01',
    title: 'Nova Analytics',
    category: 'SaaS & Technology',
    description: 'A confident, conversion-focused concept for a modern analytics platform.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85',
    alt: 'Analytics dashboard displayed on a computer screen',
    tags: ['SaaS', 'Modern UI', 'Responsive'],
  },
  {
    number: '02',
    title: 'Studio Form',
    category: 'Personal Brand',
    description:
      'A refined digital presence built around strong typography and visual storytelling.',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85',
    alt: 'Bright professional studio interior',
    tags: ['Branding', 'Editorial', 'Minimal'],
  },
  {
    number: '03',
    title: 'Atelier Creative',
    category: 'Creative Studio',
    description:
      'An expressive concept combining bold imagery, elegant layouts, and subtle motion.',
    image:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85',
    alt: 'Contemporary creative workspace',
    tags: ['Creative', 'Visual Design', 'Motion'],
  },
]
</script>

<style scoped>
.portfolio-card {
  will-change: transform;
}

@media (prefers-reduced-motion: reduce) {
  .portfolio-card,
  .portfolio-card img,
  .portfolio-card span {
    transition-duration: 0.01ms !important;
  }

  .portfolio-card:hover {
    transform: none;
  }
}
</style>
