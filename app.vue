<template>
  <div class="app-wrapper">
    <NuxtRouteAnnouncer />
    <Header />
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const { initTheme } = useTheme()

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // Initialize theme
  initTheme()
  
  // Smooth scrolling for the entire page
  gsap.registerPlugin(ScrollTrigger)
  
  // Add scroll-triggered animations for sections
  gsap.utils.toArray('section').forEach((section) => {
    gsap.fromTo(section, 
      { opacity: 0.8 },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play none none reverse"
        }
      }
    )
  })
})
</script>

<style>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
  width: 100%;
  position: relative;
}

main {
  flex: 1;
  width: 100%;
  overflow-x: hidden;
  padding-top: 60px;
}

/* Add CSS variable for RGB values needed for rgba() */
:root {
  --bg-primary-rgb: 255, 255, 255;
}

.dark {
  --bg-primary-rgb: 15, 23, 42;
}

/* Global styles are in assets/css/main.css */
</style>
