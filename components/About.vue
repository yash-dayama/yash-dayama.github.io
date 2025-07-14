<template>
  <section id="about" class="about section-padding">
    <div class="container">
      <div class="section-header" ref="sectionHeader">
        <h2 class="text-gradient">About Me</h2>
        <p>Get to know more about my journey and expertise</p>
      </div>
      
      <div class="about-content">
        <div class="about-text" ref="aboutText">
          <h3>Hi, I'm Yash Dayama, a seasoned Full Stack Developer</h3>
          <p>
            With over 3+ years of experience in the tech industry, I've had the privilege of working 
            with startups and established companies to build innovative web solutions. My journey 
            started with a passion for creating digital experiences that make a difference.
          </p>
          <p>
            I specialize in modern web technologies including React, Node.js, TypeScript, and cloud 
            platforms. I believe in writing clean, maintainable code and following best practices 
            to deliver high-quality software solutions.
          </p>
          
          <div class="contact-info">
            <div class="contact-item">
              <strong>Email:</strong> yash.dayamaa@gmail.com
            </div>
            <div class="contact-item">
              <strong>Phone:</strong> +91 9023755762
            </div>
            <div class="contact-item">
              <strong>Location:</strong> India
            </div>
          </div>
        </div>
        
        <div class="skills-section" ref="skillsSection">
          <h3>Technical Skills</h3>
          <div class="skills-grid">
            <div class="skill-category" v-for="(category, index) in skills" :key="index" ref="skillCategories">
              <h4>{{ category.name }}</h4>
              <div class="skill-items">
                <span v-for="skill in category.items" :key="skill" class="skill-tag">
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="achievements" ref="achievements">
        <h3>Achievements & Certifications</h3>
        <div class="achievements-grid">
          <div class="achievement-card" v-for="achievement in achievementsData" :key="achievement.title">
            <div class="achievement-icon">🏆</div>
            <h4>{{ achievement.title }}</h4>
            <p>{{ achievement.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionHeader = ref(null)
const aboutText = ref(null)
const skillsSection = ref(null)
const skillCategories = ref([])
const achievements = ref(null)

const skills = [
  {
    name: "Frontend",
    items: ["React", "Vue.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "SASS"]
  },
  {
    name: "Backend",
    items: ["Node.js", "Express.js", "Nest.js", "Python","REST APIs", "GraphQL", "Microservices"]
  },
  {
    name: "Database",
    items: ["MongoDB", "PostgreSQL", "Redis", "Firebase"]
  },
  {
    name: "Cloud & DevOps",
    items: ["AWS", "Docker", "CI/CD", "Jenkins", "Git"]
  }
]

const achievementsData = [
  {
    title: "Synergic Team Q1, 2025",
    description: "Successfully delivered the project across various industries and technologies"
  },
  {
    title: "Team player Q3, 2024",
    description: "Led development teams and mentored junior developers in best practices"
  },
  {
    title: "MongoDB Node.js Developer Path",
    description: "Completed comprehensive web development internship with hands-on projects"
  },
  {
    title: "Data Science with Python",
    description: "Certified in data science fundamentals and machine learning techniques"
  }
]

onMounted(() => {
  // Section header animation
  gsap.fromTo(sectionHeader.value.children,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionHeader.value,
        start: "top 80%"
      }
    }
  )
  
  // About text animation
  gsap.fromTo(aboutText.value.children,
    { x: -100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: aboutText.value,
        start: "top 80%"
      }
    }
  )
  
  // Skills section animation
  gsap.fromTo(skillsSection.value,
    { x: 100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: skillsSection.value,
        start: "top 80%"
      }
    }
  )
  
  // Skill categories animation
  gsap.fromTo(skillCategories.value,
    { scale: 0, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: skillsSection.value,
        start: "top 70%"
      }
    }
  )
  
  // Achievements animation
  gsap.fromTo(achievements.value.children,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: achievements.value,
        start: "top 80%"
      }
    }
  )
})
</script>

<style scoped>
.about {
  background: var(--bg-primary);
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-header h2 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.section-header p {
  font-size: 1.2rem;
  color: var(--text-secondary);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  margin-bottom: 80px;
}

.about-text h3 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 30px;
  color: var(--text-primary);
}

.about-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 25px;
}

.contact-info {
  margin-top: 40px;
  padding: 30px;
  background: var(--bg-secondary);
  border-radius: 15px;
  border-left: 4px solid #6366f1;
}

.contact-item {
  margin-bottom: 15px;
  font-size: 1.1rem;
}

.contact-item strong {
  color: var(--text-primary);
  margin-right: 10px;
}

.skills-section h3 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 40px;
  color: var(--text-primary);
}

.skills-grid {
  display: grid;
  gap: 30px;
}

.skill-category {
  background: var(--bg-secondary);
  padding: 30px;
  border-radius: 15px;
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
}

.skill-category:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px var(--shadow-light);
}

.skill-category h4 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #6366f1;
}

.skill-items {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill-tag {
  background: var(--card-bg);
  color: var(--text-primary);
  padding: 8px 16px;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background: #6366f1;
  color: white;
  transform: translateY(-2px);
}

.achievements h3 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 40px;
  color: var(--text-primary);
  text-align: center;
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.achievement-card {
  background: var(--card-bg);
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 30px var(--shadow-light);
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
}

.achievement-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px var(--shadow-medium);
}

.achievement-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.achievement-card h4 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--text-primary);
}

.achievement-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .section-header h2 {
    font-size: 2.5rem;
  }
  
  .about-text h3,
  .skills-section h3,
  .achievements h3 {
    font-size: 1.8rem;
  }
  
  .achievements-grid {
    grid-template-columns: 1fr;
  }
}
</style>