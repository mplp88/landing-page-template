<template>
  <section id="about" class="relative overflow-hidden bg-[#0d101b] py-24 text-white sm:py-32">
    <div
      class="absolute -left-32 top-20 h-80 w-80 rounded-full bg-violet-600/10 blur-[100px]"
      aria-hidden="true"
    ></div>

    <div
      class="relative mx-auto grid max-w-7xl items-center gap-14 px-6 sm:px-10 lg:grid-cols-2 lg:gap-20 lg:px-8"
    >
      <div class="relative">
        <div class="relative overflow-hidden rounded-2xl border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85"
            alt="Modern workspace with a collaborative design environment"
            loading="lazy"
            class="h-85 w-full object-cover transition duration-700 hover:scale-105 sm:h-110"
          />
          <div
            class="absolute inset-0 bg-linear-to-t from-[#0d101b]/70 via-transparent to-transparent"
          ></div>

          <div class="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7">
            <p class="text-xs font-medium uppercase tracking-[0.25em] text-violet-300">
              Thoughtfully designed
            </p>
            <p class="mt-2 max-w-sm text-2xl font-semibold tracking-tight sm:text-3xl">
              Good design makes things feel effortless.
            </p>
          </div>
        </div>

        <div
          class="absolute md:-bottom-6 -bottom-11 right-3 z-10 rounded-xl border border-white/10 bg-[#191b2a] px-4 py-3 shadow-2xl sm:-right-5 sm:px-5 sm:py-4"
        >
          <p class="text-sm font-semibold text-white">Design meets technology</p>
          <p class="mt-1 text-xs text-slate-400">Built with purpose, not clutter.</p>
        </div>
      </div>

      <div class="pt-3">
        <p class="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
          A better digital presence
        </p>

        <h2 class="max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Your website should do more than
          <span class="text-violet-300">look good.</span>
        </h2>

        <p class="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
          It should communicate your value, earn trust, and make it easy for people to take the next
          step. Every detail has a purpose, from the first impression to the final interaction.
        </p>

        <div class="mt-9 space-y-5">
          <div class="flex gap-4">
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/10 text-violet-300"
            >
              <svg
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.7"
                aria-hidden="true"
              >
                <path d="M4 5h16v14H4zM8 9h8M8 13h5" stroke-linecap="round" />
              </svg>
            </div>
            <div>
              <h3 class="font-medium text-white">Clarity first</h3>
              <p class="mt-1 text-sm leading-6 text-slate-400">
                Clear messaging and intuitive layouts that guide your visitors.
              </p>
            </div>
          </div>

          <div class="flex gap-4">
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/10 text-violet-300"
            >
              <svg
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.7"
                aria-hidden="true"
              >
                <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8m0-12.8L5.6 18.4" />
              </svg>
            </div>
            <div>
              <h3 class="font-medium text-white">Details that matter</h3>
              <p class="mt-1 text-sm leading-6 text-slate-400">
                Thoughtful spacing, polished interactions, and consistent visuals.
              </p>
            </div>
          </div>

          <div class="flex gap-4">
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/10 text-violet-300"
            >
              <svg
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.7"
                aria-hidden="true"
              >
                <rect x="3" y="4" width="18" height="13" rx="2" />
                <path d="M8 21h8m-4-4v4" stroke-linecap="round" />
              </svg>
            </div>
            <div>
              <h3 class="font-medium text-white">Made for every screen</h3>
              <p class="mt-1 text-sm leading-6 text-slate-400">
                A seamless experience across desktop, tablet, and mobile.
              </p>
            </div>
          </div>
        </div>

        <a
          href="#services"
          class="group mt-9 inline-flex items-center gap-2 font-medium text-violet-300 transition hover:text-violet-200"
        >
          Discover what I can build
          <span class="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </section>
</template>
