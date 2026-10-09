<template>
  <article
    class="service-card group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-950/6 sm:p-8"
  >
    <div
      class="absolute left-0 top-0 h-1 w-0 bg-linear-to-r from-violet-500 to-indigo-500 transition-all duration-500 group-hover:w-full"
      aria-hidden="true"
    ></div>

    <div class="flex items-center justify-between">
      <div
        class="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-700 transition duration-300 group-hover:bg-violet-600 group-hover:text-white"
      >
        <svg
          v-if="icon === 'design'"
          class="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.7"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" />
          <path d="m19 14 1.1 2.9L23 18l-2.9 1.1L19 22l-1.1-2.9L15 18l2.9-1.1L19 14Z" />
        </svg>

        <svg
          v-else-if="icon === 'code'"
          class="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.7"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-11-2 14" />
        </svg>

        <svg
          v-else
          class="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.7"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M12 16V3m-5 5 5-5 5 5" />
          <path d="M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" />
        </svg>
      </div>

      <span class="text-sm font-medium tracking-wider text-slate-300">
        {{ number }}
      </span>
    </div>

    <h3 class="mt-7 text-xl font-semibold tracking-tight text-slate-900">
      {{ title }}
    </h3>

    <p class="mt-3 text-sm leading-7 text-slate-500">
      {{ description }}
    </p>

    <div
      class="mt-7 h-px w-full bg-slate-100 transition-colors duration-300 group-hover:bg-violet-100"
      aria-hidden="true"
    ></div>

    <div class="mt-5 flex items-center gap-2 text-sm font-medium text-violet-700">
      <span>Explore possibilities</span>
      <span class="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
        →
      </span>
    </div>
  </article>
</template>

<script setup>
defineProps({
  number: {
    type: String,
    default: '01',
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: 'design',
  },
})
</script>
