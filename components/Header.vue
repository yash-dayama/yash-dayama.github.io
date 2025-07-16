<template>
  <header class="header" ref="header">
    <nav class="nav">
      <div class="container">
        <div class="nav-content">
          <div class="logo" ref="logo">
            <h2 class="text-gradient">YD</h2>
          </div>

          <ul class="nav-menu" ref="navMenu">
            <li><a href="#home" @click="scrollTo('home')">Home</a></li>
            <li><a href="#about" @click="scrollTo('about')">About</a></li>
            <li>
              <a href="#experience" @click="scrollTo('experience')"
                >Experience</a
              >
            </li>
            <li>
              <a href="#projects" @click="scrollTo('projects')">Projects</a>
            </li>
            <li><a href="#contact" @click="scrollTo('contact')">Contact</a></li>
          </ul>

          <div class="nav-actions">
            <ThemeToggle />
          </div>

          <div class="nav-toggle" @click="toggleMenu" ref="navToggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

const header = ref(null);
const logo = ref(null);
const navMenu = ref(null);
const navToggle = ref(null);

const scrollTo = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const toggleMenu = () => {
  navMenu.value.classList.toggle("active");
  navToggle.value.classList.toggle("active");
};

onMounted(() => {
  // Animate header on load
  gsap.fromTo(
    header.value,
    { y: -100, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
  );

  gsap.fromTo(
    logo.value,
    { scale: 0, rotation: 180 },
    { scale: 1, rotation: 0, duration: 1, delay: 0.3, ease: "back.out(1.7)" }
  );

  gsap.fromTo(
    navMenu.value.children,
    { y: -50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay: 0.5,
      stagger: 0.1,
      ease: "power3.out",
    }
  );
});
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(var(--bg-primary-rgb), 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}

.logo h2 {
  font-size: 2rem;
  font-weight: 700;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 40px;
}

.nav-menu a {
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
}

.nav-menu a:hover {
  color: #6366f1;
}

.nav-menu a::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gradient-primary);
  transition: width 0.3s ease;
}

.nav-menu a:hover::after {
  width: 100%;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;
}

.nav-toggle span {
  width: 25px;
  height: 3px;
  background: var(--text-primary);
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    top: 80px;
    left: -100%;
    width: 100%;
    height: calc(100vh - 80px);
    background: var(--bg-primary);
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 50px;
    transition: left 0.3s ease;
    border-top: 1px solid var(--border-color);
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-toggle {
    display: flex;
  }

  .nav-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .nav-toggle.active span:nth-child(2) {
    opacity: 0;
  }

  .nav-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }

  .nav-actions {
    position: absolute;
    top: 29px;
    right: 60px;
  }
}
</style>
