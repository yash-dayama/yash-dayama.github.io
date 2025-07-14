<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="text-gradient">Yash Dayama</h3>
          <p>Full Stack Developer passionate about creating innovative web solutions.</p>
          <div class="social-links">
            <a href="https://www.linkedin.com/in/yashdayama/" target="_blank" class="social-link">
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/yashdayama" target="_blank" class="social-link">
              <span>GitHub</span>
            </a>
            <a href="mailto:yash.dayamaa@gmail.com" class="social-link">
              <span>Email</span>
            </a>
          </div>
        </div>
        
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home" @click="scrollTo('home')">Home</a></li>
            <li><a href="#about" @click="scrollTo('about')">About</a></li>
            <li><a href="#experience" @click="scrollTo('experience')">Experience</a></li>
            <li><a href="#projects" @click="scrollTo('projects')">Projects</a></li>
            <li><a href="#contact" @click="scrollTo('contact')">Contact</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>Services</h4>
          <ul>
            <li>Web Development</li>
            <li>Frontend Development</li>
            <li>Backend Development</li>
            <li>Full Stack Solutions</li>
            <li>Technical Consulting</li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>Technologies</h4>
          <ul>
            <li>React & Vue.js</li>
            <li>Node.js & Express</li>
            <li>TypeScript</li>
            <li>MongoDB & MySQL</li>
            <li>AWS & Docker</li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Yash Dayama. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

const scrollTo = (elementId) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.footer {
  background: var(--bg-tertiary);
  color: var(--text-primary);
  padding: 60px 0 20px;
  border-top: 1px solid var(--border-color);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section h3 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.footer-section h4 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--text-secondary);
}

.footer-section p {
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 25px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: 10px;
}

.footer-section a {
  color: var(--text-muted);
  text-decoration: none;
  transition: all 0.3s ease;
}

.footer-section a:hover {
  color: #6366f1;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--bg-secondary);
  border-radius: 50%;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid var(--border-color);
}

.social-link:hover {
  background: #6366f1;
  transform: translateY(-3px);
}

.social-link span {
  font-size: 0.8rem;
}

.footer-bottom {
  border-top: 1px solid var(--border-color);
  padding-top: 30px;
  text-align: center;
  color: var(--text-muted);
}

.footer-bottom p {
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .footer-section {
    text-align: center;
  }
  
  .social-links {
    justify-content: center;
  }
}
</style>