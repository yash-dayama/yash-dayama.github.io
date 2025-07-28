<template>
  <section id="projects" class="projects section-padding">
    <div class="container">
      <div class="section-header" ref="sectionHeader">
        <h2 class="text-gradient">Featured Projects</h2>
        <p>Some of my recent work that I'm proud of</p>
      </div>
      
      <div class="projects-grid" ref="projectsGrid">
        <div class="project-card" v-for="(project, index) in projects" :key="index" ref="projectCards">
          <div class="project-image">
            <div class="image-placeholder">
              <span>{{ project.title.charAt(0) }}</span>
            </div>
            <!-- <div class="project-overlay">
              <a :href="project.demo" target="_blank" class="btn-primary">Live Demo</a>
            </div> -->
          </div>
          
          <div class="project-content">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            
            <div class="project-features">
              <h4>Key Features:</h4>
              <ul>
                <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
              </ul>
            </div>
            
            <div class="project-tech">
              <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="projects-cta" ref="projectsCta">
        <h3>Want to see more?</h3>
        <p>Check out my GitHub for more projects and contributions</p>
        <a href="https://github.com/yash-dayama" target="_blank" class="btn-primary">
          View All Projects
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const config = useRuntimeConfig();

const trackProjectClick = (projectName) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'project_click', {
      event_category: 'Portfolio_Engagement',
      event_label: projectName,
      send_to: config.public.googleAnalytics.id
    });
  }
};
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionHeader = ref(null)
const projectsGrid = ref(null)
const projectCards = ref([])
const projectsCta = ref(null)

const projects = [
  {
    title: "OnWard Education",
    description: "OnWard-AI is an AI-powered exam platform designed to revolutionize the examination process. By integrating OpenAI APIs, it provides intelligent scoring with up to 90% accuracy, allowing for efficient and fair assessment. The platform’s scalable admin panel built with React.js ensures real-time analytics and reporting, while high-performance APIs handle concurrent exam submissions effortlessly.",
    features: [
      "Developed an intelligent scoring system integrating OpenAI APIs",
      "Built a scalable admin panel for real-time analytics and reporting.",
      "Engineered high-performance APIs capable of processing concurrent exam submissions."
    ],
    technologies: ["React", "Node.js", "MongoDB", "OpenAI", "AWS S3"],
    demo: "https://www.onward-education.com/"
  },
  {
    title: "ULearn School Management System",
    description: "ULearn is a comprehensive school management system built to enhance communication and streamline administrative processes. By architecting a microservices-based backend, I supported 3 web apps and 2 mobile apps, ensuring seamless functionality across multiple platforms. I also implemented real-time chat using Socket.IO, enabling teacher-parent communication with notifications for enhanced engagement.",
    features: [
      "Student enrollment and management",
      "Architected a microservices-based backend supporting 3 web apps and 2 mobile apps.",
      "Grade management system",
      "Automated report generation",
      "Parent-teacher communication portal"
    ],
    technologies: ["Node.js", "Express.js", "Socket.IO", "MongoDB", "Microservices", "Chart.js"],
    demo: "https://ulearn.tz",
  },
  {
    title: "Bondorbit",
    description: "A modern chat application with real-time messaging, file sharing, and group conversations. Built with scalability and performance in mind.",
    features: [
      "Real-time messaging",
      "File and image sharing",
      "Group chat functionality",
      "Message encryption",
      "Online status indicators"
    ],
    technologies: ["React", "Socket.io", "Node.js", "Redis", "MongoDB"],
    demo: "#",
  },
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce solution with payment integration, inventory management, and admin dashboard for online businesses.",
    features: [
      "Product catalog management",
      "Shopping cart and checkout",
      "Payment gateway integration",
      "Order tracking system",
      "Admin dashboard with analytics"
    ],
    technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS", "Vercel"],
    demo: "#",
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
  
  // Project cards animation
  gsap.fromTo(projectCards.value,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: projectsGrid.value,
        start: "top 80%"
      }
    }
  )
  
  // CTA animation
  gsap.fromTo(projectsCta.value.children,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: projectsCta.value,
        start: "top 80%"
      }
    }
  )
})
</script>

<style scoped>
.projects {
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
  margin-bottom: 80px;
}

.project-card {
  background: var(--card-bg);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px var(--shadow-light);
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px var(--shadow-medium);
}

.project-image {
  position: relative;
  height: 250px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.image-placeholder {
  font-size: 4rem;
  font-weight: 700;
  color: white;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  opacity: 0;
  transition: all 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-content {
  padding: 30px;
}

.project-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 15px;
}

.project-content p {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 25px;
}

.project-features h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 15px;
}

.project-features ul {
  list-style: none;
  padding: 0;
  margin-bottom: 25px;
}

.project-features li {
  position: relative;
  padding-left: 25px;
  margin-bottom: 8px;
  color: var(--text-secondary);
  line-height: 1.6;
}

.project-features li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #6366f1;
  font-weight: bold;
  font-size: 1.2rem;
}

.project-tech {
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

.projects-cta {
  text-align: center;
  padding: 60px 40px;
  background: var(--bg-secondary);
  border-radius: 20px;
  border: 1px solid var(--border-color);
}

.projects-cta h3 {
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 15px;
}

.projects-cta p {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 30px;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .section-header h2 {
    font-size: 2.5rem;
  }
  
  .project-overlay {
    opacity: 1;
    background: rgba(0, 0, 0, 0.6);
  }
  
  .projects-cta {
    padding: 40px 20px;
  }
  
  .projects-cta h3 {
    font-size: 1.8rem;
  }
}
</style>
