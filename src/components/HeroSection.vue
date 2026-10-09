<template>
  <section id="hero" class="hero-section relative isolate overflow-hidden bg-[#090b14] text-white">
    <!-- Ambient background -->
    <div class="hero-glow hero-glow-one" aria-hidden="true"></div>
    <div class="hero-glow hero-glow-two" aria-hidden="true"></div>
    <div class="hero-grid" aria-hidden="true"></div>

    <div
      class="relative mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-14 px-6 pb-20 pt-28 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:py-24"
    >
      <!-- Copy -->
      <div class="hero-copy relative z-10 max-w-2xl">
        <div
          class="hero-reveal mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm text-slate-300 backdrop-blur"
          style="--delay: 100ms"
        >
          <span class="relative flex h-2 w-2">
            <span
              class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60"
            ></span>
            <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
          </span>
          Thoughtful design. Better digital experiences.
        </div>

        <h1
          class="hero-reveal text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
          style="--delay: 200ms"
        >
          Your business
          <br />
          deserves a
          <span class="headline-accent">better website.</span>
        </h1>

        <p
          class="hero-reveal mt-7 max-w-lg text-base leading-7 text-slate-400 sm:text-lg sm:leading-8"
          style="--delay: 300ms"
        >
          Modern, responsive websites designed to make your brand stand out, build trust, and turn
          visitors into customers.
        </p>

        <div
          class="hero-reveal mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          style="--delay: 400ms"
        >
          <a
            href="#contact"
            class="primary-cta group inline-flex items-center justify-center gap-3 rounded-xl bg-violet-500 px-6 py-4 font-medium text-white shadow-lg shadow-violet-500/20 transition duration-300 hover:-translate-y-1 hover:bg-violet-400 hover:shadow-xl hover:shadow-violet-500/30 focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-violet-400"
          >
            Let's work together
            <svg
              class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              aria-hidden="true"
            >
              <path d="M5 12h14m-7-7 7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>

          <a
            href="#portfolio"
            class="inline-flex items-center justify-center rounded-xl border border-white/10 px-6 py-4 font-medium text-slate-200 transition duration-300 hover:border-white/25 hover:bg-white/5 focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-violet-400"
          >
            Explore our work
          </a>
        </div>

        <div
          class="hero-reveal mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400"
          style="--delay: 500ms"
        >
          <span class="flex items-center gap-2">
            <svg
              class="h-4 w-4 text-violet-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="13" rx="2" />
              <path d="M8 21h8m-4-4v4" />
            </svg>
            Fully responsive
          </span>

          <span class="flex items-center gap-2">
            <svg
              class="h-4 w-4 text-violet-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              aria-hidden="true"
            >
              <path d="M13 2 4 14h7l-1 8 10-12h-7z" />
            </svg>
            Performance focused
          </span>
        </div>
      </div>

      <!-- Visual -->
      <div
        class="hero-visual relative mx-auto w-full max-w-xl lg:ml-auto"
        aria-label="Preview of a modern professional website"
      >
        <div class="visual-halo" aria-hidden="true"></div>

        <!-- Main website preview -->
        <div
          class="website-card relative overflow-hidden rounded-2xl border border-white/15 bg-[#121522] shadow-2xl shadow-black/50"
        >
          <div class="flex h-11 items-center gap-1.5 border-b border-white/10 px-4">
            <span class="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]"></span>
            <span class="h-2.5 w-2.5 rounded-full bg-[#ffd166]"></span>
            <span class="h-2.5 w-2.5 rounded-full bg-[#06d6a0]"></span>
            <div
              class="mx-auto w-2/3 rounded-md bg-white/6 px-3 py-1 text-center text-[10px] text-slate-500"
            >
              yourbrand.com
            </div>
          </div>

          <div class="relative min-h-75 overflow-hidden sm:min-h-87.5">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85"
              alt="Bright, modern workspace with a professional interior"
              class="preview-image absolute inset-0 h-full w-full object-cover"
              fetchpriority="high"
            />

            <div
              class="absolute inset-0 bg-linear-to-r from-[#10121b]/95 via-[#10121b]/65 to-[#10121b]/10"
            ></div>

            <div class="relative flex min-h-75 flex-col justify-center p-7 sm:min-h-87.5 sm:p-10">
              <span
                class="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-violet-300 sm:text-xs"
              >
                Built around your vision
              </span>

              <p class="max-w-65 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Make your
                <span class="text-violet-300">next move</span>
                count.
              </p>

              <p class="mt-4 max-w-57.5 text-xs leading-6 text-slate-300 sm:text-sm">
                A digital presence designed to move your business forward.
              </p>

              <div
                class="mt-6 flex w-fit items-center gap-3 rounded-lg bg-white px-4 py-2.5 text-xs font-semibold text-slate-900"
              >
                Discover more
                <span aria-hidden="true">↗</span>
              </div>
            </div>
          </div>

          <div
            class="flex items-center justify-between border-t border-white/10 px-4 py-3 text-[10px] text-slate-400 sm:px-6"
          >
            <span>Thoughtfully crafted</span>
            <span class="flex items-center gap-2">
              <span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              Responsive by design
            </span>
          </div>
        </div>

        <!-- Floating detail card -->
        <div
          class="floating-card floating-card-top absolute -right-2 top-10 rounded-xl border border-white/15 bg-[#191b2a]/90 p-4 shadow-xl backdrop-blur-xl sm:-right-5 sm:top-14"
        >
          <div class="flex items-center gap-3">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300"
            >
              <svg
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.7"
                aria-hidden="true"
              >
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <path d="M3 9h18M9 9v11" />
              </svg>
            </div>
            <div>
              <p class="text-xs font-medium text-white">Custom design</p>
              <p class="mt-1 text-[10px] text-slate-400">Made for your brand</p>
            </div>
          </div>
        </div>

        <div
          class="floating-card floating-card-bottom absolute -bottom-5 left-2 rounded-xl border border-white/15 bg-[#191b2a]/95 p-4 shadow-xl backdrop-blur-xl sm:-left-5 sm:bottom-8"
        >
          <div class="flex items-center gap-3">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300"
            >
              <svg
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.7"
                aria-hidden="true"
              >
                <path d="m5 12 4 4L19 6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div>
              <p class="text-xs font-medium text-white">Every screen</p>
              <p class="mt-1 text-[10px] text-slate-400">Desktop · Tablet · Mobile</p>
            </div>
          </div>
        </div>

        <span class="visual-spark visual-spark-one" aria-hidden="true"></span>
        <span class="visual-spark visual-spark-two" aria-hidden="true"></span>
      </div>
    </div>

    <!-- Bottom transition -->
    <div class="relative border-t border-white/8">
      <div
        class="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5 sm:px-10 lg:px-8"
      >
        <p class="text-xs tracking-wide text-slate-500">DESIGN THAT WORKS AS HARD AS YOU DO</p>
        <a
          href="#about"
          class="group flex items-center gap-2 text-xs text-slate-400 transition hover:text-white"
        >
          Discover the difference
          <span class="transition-transform group-hover:translate-y-1" aria-hidden="true">↓</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  background-image: radial-gradient(ellipse at 50% 0%, rgba(124, 58, 237, 0.08), transparent 55%);
}

.hero-grid {
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: linear-gradient(to bottom, black, transparent 85%);
}

.hero-glow {
  position: absolute;
  z-index: -1;
  width: 28rem;
  height: 28rem;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
  animation: glow-drift 12s ease-in-out infinite alternate;
}

.hero-glow-one {
  top: 5%;
  right: -10rem;
  background: rgba(109, 40, 217, 0.2);
}

.hero-glow-two {
  bottom: -15rem;
  left: 5%;
  background: rgba(37, 99, 235, 0.13);
  animation-delay: -5s;
}

.headline-accent {
  display: inline-block;
  color: #c4b5fd;
  background: linear-gradient(110deg, #ddd6fe 5%, #a78bfa 45%, #818cf8 90%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-reveal {
  opacity: 0;
  animation: reveal-up 800ms cubic-bezier(0.2, 0.7, 0.2, 1) forwards;
  animation-delay: var(--delay, 0ms);
}

.hero-visual {
  animation: visual-enter 1000ms cubic-bezier(0.2, 0.7, 0.2, 1) both;
  animation-delay: 250ms;
}

.website-card {
  transform: perspective(1200px) rotateY(-4deg) rotateX(2deg);
  transition:
    transform 500ms ease,
    border-color 500ms ease;
}

.hero-visual:hover .website-card {
  transform: perspective(1200px) rotateY(0) rotateX(0) translateY(-3px);
  border-color: rgba(196, 181, 253, 0.4);
}

.preview-image {
  animation: image-enter 1200ms ease-out both;
}

.floating-card {
  z-index: 2;
  animation:
    float-in 900ms ease-out both,
    float-gentle 5s ease-in-out 1s infinite;
}

.floating-card-top {
  animation-delay: 650ms, 1550ms;
}

.floating-card-bottom {
  animation-delay: 850ms, 1750ms;
}

.visual-halo {
  position: absolute;
  inset: 10%;
  border-radius: 50%;
  background: rgba(124, 58, 237, 0.22);
  filter: blur(70px);
}

.visual-spark {
  position: absolute;
  z-index: 1;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #c4b5fd;
  box-shadow: 0 0 16px 4px rgba(167, 139, 250, 0.35);
  animation: sparkle 3s ease-in-out infinite;
}

.visual-spark-one {
  top: 16%;
  left: -2%;
}

.visual-spark-two {
  right: 7%;
  bottom: 18%;
  animation-delay: 1.4s;
}

@keyframes reveal-up {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes visual-enter {
  from {
    opacity: 0;
    transform: translateY(24px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes image-enter {
  from {
    opacity: 0.5;
    transform: scale(1.06);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes float-in {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float-gentle {
  0%,
  100% {
    translate: 0 0;
  }
  50% {
    translate: 0 -7px;
  }
}

@keyframes glow-drift {
  from {
    transform: translate3d(0, 0, 0) scale(1);
  }
  to {
    transform: translate3d(-24px, 18px, 0) scale(1.08);
  }
}

@keyframes sparkle {
  0%,
  100% {
    opacity: 0.35;
    scale: 0.8;
  }
  50% {
    opacity: 1;
    scale: 1.3;
  }
}

@media (max-width: 640px) {
  .website-card {
    transform: none;
  }

  .hero-visual:hover .website-card {
    transform: none;
  }

  .floating-card {
    padding: 0.65rem;
  }

  .floating-card .h-10 {
    height: 2rem;
    width: 2rem;
  }

  .hero-glow {
    width: 18rem;
    height: 18rem;
    filter: blur(75px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-section *,
  .hero-section *::before,
  .hero-section *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  .hero-reveal {
    opacity: 1;
  }

  .hero-visual {
    opacity: 1;
  }
}
</style>
