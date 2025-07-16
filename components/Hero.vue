<template>
  <section id="home" class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 ref="heroTitle">
            <span class="greeting">Hi, I'm</span>
            <span class="name text-gradient">Yash Dayama</span>
            <span class="title">Full Stack Developer</span>
          </h1>

          <p ref="heroDescription">
            Passionate developer with 3+ years of experience creating innovative
            web solutions. I specialize in React, Node.js, and modern web
            technologies to build scalable applications.
          </p>

          <div class="hero-buttons" ref="heroButtons">
            <a
              href="https://drive.google.com/file/d/1Tv8dRQyjZwagTD5hrW1uXcqXUuqhG531/view?usp=sharing"
              class="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              @click="trackCVDownload"
              >Download CV</a
            >
            <a
              href="#contact"
              class="btn-secondary"
              @click="scrollTo('contact')"
              >Get In Touch</a
            >
          </div>

          <div class="hero-stats" ref="heroStats">
            <div class="stat">
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>
            <div class="stat">
              <h3>12+</h3>
              <p>Projects Completed</p>
            </div>
            <div class="stat">
              <h3>10+</h3>
              <p>Technologies</p>
            </div>
          </div>
        </div>

        <div class="hero-visual" ref="heroVisual">
          <div class="floating-elements">
            <div class="element element-1">React.js</div>
            <div class="element element-2">Vue.js</div>
            <div class="element element-3">Node.js</div>
            <div class="element element-4">TypeScript</div>
            <div class="element element-5">MongoDB</div>
            <div class="element element-6">AWS</div>
            <div class="element element-7">Docker</div>
          </div>
        </div>
      </div>
    </div>

    <div class="scroll-indicator" ref="scrollIndicator">
      <div class="scroll-arrow"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);
gsap.config({
  nullTargetWarn: false,
});

const heroTitle = ref(null);
const heroDescription = ref(null);
const heroButtons = ref(null);
const heroStats = ref(null);
const heroVisual = ref(null);
const scrollIndicator = ref(null);
const codeSnippet = ref(null);

const scrollTo = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const trackCVDownload = () => {
  window.gtag("event", "cv_download", {
    event_category: "engagement",
    event_label: "CV Download Button Click",
  });
};

onMounted(() => {
  const tl = gsap.timeline();

  // Hero title animation
  tl.fromTo(
    heroTitle.value.children,
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
  );

  // Description animation
  tl.fromTo(
    heroDescription.value,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
    "-=0.5"
  );

  // Buttons animation
  tl.fromTo(
    heroButtons.value.children,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
    "-=0.3"
  );

  // Stats animation
  tl.fromTo(
    heroStats.value.children,
    { scale: 0, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.7)",
    },
    "-=0.3"
  );

  // Visual elements animation
  tl.fromTo(
    heroVisual.value,
    { x: 100, opacity: 0 },
    { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
    "-=1"
  );

  // Floating elements animation
  gsap.fromTo(
    ".element",
    { scale: 0, rotation: 180 },
    {
      scale: 1,
      rotation: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "back.out(1.7)",
      delay: 0.5,
    }
  );

  // Scroll indicator animation
  gsap.fromTo(
    scrollIndicator.value,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, delay: 2.5, ease: "power3.out" }
  );

  // Continuous floating animation for elements
  gsap.to(".element", {
    y: -20,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut",
    stagger: 0.2,
    delay: 1.5,
  });
});
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background: linear-gradient(
    135deg,
    var(--bg-secondary) 0%,
    var(--bg-tertiary) 100%
  );
  padding: 80px 0;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.hero-text h1 {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 30px;
}

.hero-text h1 span {
  display: block;
}

.greeting {
  font-size: 1.5rem;
  color: #64748b;
  font-weight: 400;
}

.name {
  font-size: 5rem;
  margin: 10px 0;
}

.title {
  font-size: 2.5rem;
  color: var(--text-secondary);
}

.hero-text p {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 40px;
  line-height: 1.8;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  margin-bottom: 60px;
}

.hero-stats {
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  gap: 40px;
}

@media screen and (min-width: 576px) {
  .hero-stats {
    flex-direction: row;
  }
}

.stat {
  text-align: center;
}

.stat h3 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #6366f1;
  margin-bottom: 5px;
}

.stat p {
  color: var(--text-secondary);
  font-weight: 500;
}

.hero-visual {
  position: relative;
  height: 600px;
  z-index: 0;
}

.floating-elements {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 11;
}

.element {
  position: absolute;
  background: var(--card-bg);
  padding: 15px 25px;
  border-radius: 50px;
  font-weight: 600;
  color: #6366f1;
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;
}

.element:hover {
  transform: scale(1.1);
  box-shadow: 0 15px 40px rgba(99, 102, 241, 0.3);
}

.element-1 {
  top: 10%;
  left: 20%;
}
.element-2 {
  top: 20%;
  right: 10%;
}
.element-3 {
  top: 30%;
  left: 10%;
}
.element-4 {
  top: 40%;
  right: 20%;
}
.element-5 {
  bottom: 30%;
  left: 30%;
}
.element-6 {
  bottom: 20%;
  right: 20%;
}
.element-7 {
  bottom: 10%;
  right: 35%;
}

.profile-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--card-bg);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 20px 50px var(--shadow-light);
  width: 350px;
  z-index: 10;
}

.profile-image {
  text-align: center;
  margin-bottom: 20px;
}

.image-placeholder {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: white;
  font-size: 2rem;
  font-weight: 700;
}

.code-snippet {
  background: var(--bg-tertiary);
  border-radius: 10px;
  padding: 20px;
  font-family: "Fira Code", monospace;
  font-size: 0.9rem;
  color: var(--text-secondary);
  overflow: hidden;
  border: 1px solid var(--border-color);
  white-space: pre-wrap;
  word-wrap: break-word;
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}

.scroll-arrow {
  width: 30px;
  height: 30px;
  border: 2px solid #6366f1;
  border-top: none;
  border-right: none;
  transform: rotate(-45deg);
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0) rotate(-45deg);
  }
  40% {
    transform: translateY(-10px) rotate(-45deg);
  }
  60% {
    transform: translateY(-5px) rotate(-45deg);
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 40px 0;
    min-height: calc(100vh - 60px);
    margin-top: 60px;
  }

  .hero-content {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .element-1 {
    top: 5%;
    left: 10%;
  }
  .element-2 {
    top: 15%;
    right: 10%;
  }
  .element-3 {
    top: 25%;
    left: 15%;
  }
  .element-4 {
    top: 35%;
    right: 15%;
  }
  .element-5 {
    top: 45%;
    left: 10%;
  }
  .element-6 {
    top: 55%;
    right: 10%;
  }
  .element-7 {
    top: 65%;
    left: 15%;
  }

  .hero-text h1 {
    font-size: 2.5rem;
  }

  .name {
    font-size: 3rem !important;
  }

  .title {
    font-size: 1.8rem !important;
  }

  .hero-buttons {
    justify-content: center;
    flex-wrap: wrap;
  }

  .hero-stats {
    justify-content: center;
  }

  .hero-visual {
    height: 400px;
  }

  .profile-card {
    width: 280px;
  }

  .element {
    padding: 10px 15px;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 20px 0;
    margin-top: 40px;
  }

  .hero-text h1 {
    font-size: 2rem;
  }

  .name {
    font-size: 2.5rem !important;
  }

  .title {
    font-size: 1.5rem !important;
  }

  .hero-text p {
    font-size: 1rem;
  }

  .hero-visual {
    height: 300px;
  }

  .element {
    padding: 8px 12px;
    font-size: 0.8rem;
  }
}

@media (max-width: 320px) {
  .hero {
    padding: 15px 0;
    margin-top: 30px;
  }

  .hero-text h1 {
    font-size: 1.8rem;
  }

  .name {
    font-size: 2.2rem !important;
  }

  .title {
    font-size: 1.3rem !important;
  }

  .hero-visual {
    height: 250px;
  }

  .element {
    padding: 6px 10px;
    font-size: 0.75rem;
  }
}
</style>
