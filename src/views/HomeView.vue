<template>
  <Navbar />
  <main class="pt-16">
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <PortfolioSection />
    <ContactSection />
  </main>
</template>

<script setup>
import Navbar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import PortfolioSection from '@/components/PortfolioSection.vue'
import ContactSection from '@/components/ContactSection.vue'
</script>
