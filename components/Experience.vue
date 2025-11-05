<template>
  <section id="experience" class="experience section-padding">
    <div class="container">
      <div class="section-header" ref="sectionHeader">
        <h2 class="text-gradient">Experience</h2>
        <p>My professional journey and key accomplishments</p>
      </div>
      
      <div class="timeline" ref="timeline">
        <div class="timeline-item" v-for="(job, index) in experiences" :key="index" ref="timelineItems">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="job-header">
              <h3>{{ job.title }}</h3>
              <div class="company">{{ job.company }}</div>
              <div class="duration">{{ job.duration }}</div>
            </div>
            <p class="job-description">{{ job.description }}</p>
            <div class="achievements">
              <h4>Key Achievements:</h4>
              <ul>
                <li v-for="achievement in job.achievements" :key="achievement">
                  {{ achievement }}
                </li>
              </ul>
            </div>
            <div class="technologies">
              <span v-for="tech in job.technologies" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>
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
const timeline = ref(null)
const timelineItems = ref([])

const experiences = [
  {
  "title": "Senior Software Developer",
  "company": "Agile Infoways",
  "duration": "August 2025 - Present",
  "summary": "Full-stack development leader and mentor driving enterprise web applications within **Agile/Scrum** environments. Expertise spans **React, Node.js, and Python**, recently fortified with **Java/Spring Boot** for building scalable microservices and cloud solutions.",
  "achievements": [
  "Successfully onboarded and established new Java/Spring Boot service templates and coding standards.",
    "Contributed to the design and planning phase for a major microservices migration project.",
    "Established initial deployment configurations for new services using Docker and internal cloud infrastructure.",
  ],
  "technologies": [
    "Java",
    "Spring Boot",
    "React",
    "Node.js",
    "TypeScript",
    "Python",
    "AWS",
    "Docker",
    "MongoDB",
    "Agile/Scrum"
  ]
},
  {
    title: "Full Stack Developer",
    company: "Impero IT Services",
    duration: "July 2023 - July 2025",
    description: "Leading development of enterprise web applications and mentoring junior developers. Responsible for architecture decisions and implementing best practices across the development team.",
    achievements: [
      "Led a team of 5 developers in building a comprehensive e-learning platform",
      "Improved application performance by 40% through code optimization",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored 3 junior developers who were promoted to mid-level positions"
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "MongoDB", "Docker"]
  },
  {
    title: "Software Engineer Trainee",
    company: "Impero IT Services",
    duration: "Jan 2023 - July 2023",
    description: "As a Software Engineer Intern, I contributed to the development of key features for client-facing applications, gaining hands-on experience in full-stack development and working closely with senior developers to refine my skills.",
    achievements: [
      "Completed 3 end-to-end features for a TODO app project within defined timelines.",
      "Achieved a 90% score in the internal Node.js assessment after completing extensive training."
    ],
    technologies: ["Node.js", "MongoDB", "React.js", "JavaScript", "HTML", "CSS"]
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
  
  // Timeline items animation
  timelineItems.value.forEach((item, index) => {
    gsap.fromTo(item,
      { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%"
        }
      }
    )
  })
  
  // Timeline line animation
  gsap.fromTo(".timeline::before",
    { scaleY: 0 },
    {
      scaleY: 1,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: timeline.value,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1
      }
    }
  )
})
</script>

<style scoped>
.experience {
  background: var(--bg-secondary);
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

.timeline {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--gradient-primary);
  transform: translateX(-50%);
  transform-origin: top;
}

.timeline-item {
  position: relative;
  margin-bottom: 60px;
  width: 50%;
}

.timeline-item:nth-child(odd) {
  left: 0;
  padding-right: 40px;
}

.timeline-item:nth-child(even) {
  left: 50%;
  padding-left: 40px;
}

.timeline-marker {
  position: absolute;
  width: 20px;
  height: 20px;
  background: #6366f1;
  border: 4px solid var(--bg-primary);
  border-radius: 50%;
  top: 20px;
  box-shadow: 0 0 0 4px #6366f1;
}

.timeline-item:nth-child(odd) .timeline-marker {
  right: -10px;
}

.timeline-item:nth-child(even) .timeline-marker {
  left: -10px;
}

.timeline-content {
  background: var(--card-bg);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px var(--shadow-light);
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
}

.timeline-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px var(--shadow-medium);
}

.job-header {
  margin-bottom: 20px;
}

.job-header h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 10px;
}

.company {
  font-size: 1.2rem;
  font-weight: 500;
  color: #6366f1;
  margin-bottom: 5px;
}

.duration {
  font-size: 1rem;
  color: #64748b;
  font-weight: 500;
}

.job-description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 25px;
}

.achievements h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 15px;
}

.achievements ul {
  list-style: none;
  padding: 0;
  margin-bottom: 25px;
}

.achievements li {
  position: relative;
  padding-left: 25px;
  margin-bottom: 10px;
  color: var(--text-secondary);
  line-height: 1.6;
}

.achievements li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #10b981;
  font-weight: bold;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tech-tag {
  background: var(--bg-secondary);
  color: #6366f1;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: #6366f1;
  color: white;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .timeline::before {
    left: 20px;
  }
  
  .timeline-item {
    width: 100%;
    left: 0 !important;
    padding-left: 60px !important;
    padding-right: 0 !important;
  }
  
  .timeline-marker {
    left: 10px !important;
    right: auto !important;
  }
  
  .section-header h2 {
    font-size: 2.5rem;
  }
  
  .job-header h3 {
    font-size: 1.3rem;
  }
  
  .company {
    font-size: 1.1rem;
  }
}
</style>