<template>
  <section id="contact" class="contact section-padding">
    <div class="container">
      <div class="section-header" ref="sectionHeader">
        <h2 class="text-gradient">Get In Touch</h2>
        <p>Let's discuss your next project or opportunity</p>
      </div>
      
      <div class="contact-content">
        <div class="contact-info" ref="contactInfo">
          <h3>Let's Connect</h3>
          <p>
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div class="contact-methods">
            <div class="contact-method">
              <div class="contact-icon">📧</div>
              <div class="contact-details">
                <h4>Email</h4>
                <a href="mailto:yash.dayamaa@gmail.com">yash.dayamaa@gmail.com</a>
              </div>
            </div>
            
            <div class="contact-method">
              <div class="contact-icon">📱</div>
              <div class="contact-details">
                <h4>Phone</h4>
                <a href="tel:+919023755762">+91 9023755762</a>
              </div>
            </div>
            
            <div class="contact-method">
              <div class="contact-icon">💼</div>
              <div class="contact-details">
                <h4>LinkedIn</h4>
                <a href="https://www.linkedin.com/in/yashdayama/" target="_blank">linkedin.com/in/yashdayama</a>
              </div>
            </div>
            
            <div class="contact-method">
              <div class="contact-icon">🌐</div>
              <div class="contact-details">
                <h4>GitHub</h4>
                <a href="https://github.com/yash-dayama" target="_blank">github.com/yash-dayama</a>
              </div>
            </div>
          </div>
          
          <div class="availability">
            <h4>Current Status</h4>
            <div class="status-indicator">
              <span class="status-dot"></span>
              Available for new opportunities
            </div>
          </div>
        </div>
        
        <div class="contact-form" ref="contactForm">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Name</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name" 
                required 
                placeholder="Your full name"
              >
            </div>
            
            <div class="form-group">
              <label for="email">Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                required 
                placeholder="your.email@example.com"
              >
            </div>
            
            <div class="form-group">
              <label for="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                v-model="form.subject" 
                required 
                placeholder="What's this about?"
              >
            </div>
            
            <div class="form-group">
              <label for="message">Message</label>
              <textarea 
                id="message" 
                v-model="form.message" 
                required 
                rows="6"
                placeholder="Tell me about your project or opportunity..."
              ></textarea>
            </div>
            
            <button type="submit" class="btn-primary" :disabled="isSubmitting">
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import emailjs from '@emailjs/browser'

const config = useRuntimeConfig()
gsap.registerPlugin(ScrollTrigger)

emailjs.init(config.public.emailjs.publicKey)

const sectionHeader = ref(null)
const contactInfo = ref(null)
const contactForm = ref(null)
const isSubmitting = ref(false)

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    const templateParams = {
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message
    }

    await emailjs.send(
      config.public.emailjs.serviceId,
      config.public.emailjs.templateId,
      templateParams
    )

    alert('Message sent successfully!')
    
    // Reset form
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  } catch (error) {
    console.error('Error sending email:', error)
    alert('Sorry, there was an error sending your message. Please try again later.')
  } finally {
    isSubmitting.value = false
  }
}

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
  
  // Contact info animation
  gsap.fromTo(contactInfo.value.children,
    { x: -100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: contactInfo.value,
        start: "top 80%"
      }
    }
  )
  
  // Contact form animation
  gsap.fromTo(contactForm.value,
    { x: 100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: contactForm.value,
        start: "top 80%"
      }
    }
  )
})
</script>

<style scoped>
.contact {
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

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-info h3 {
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 20px;
}

.contact-info p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 40px;
}

.contact-methods {
  margin-bottom: 40px;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
  padding: 20px;
  background: var(--card-bg);
  border-radius: 15px;
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
}

.contact-method:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px var(--shadow-light);
}

.contact-icon {
  font-size: 2rem;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-secondary);
  border-radius: 50%;
}

.contact-details h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 5px;
}

.contact-details a {
  color: #6366f1;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.contact-details a:hover {
  color: #4f46e5;
  text-decoration: underline;
}

.availability {
  padding: 25px;
  background: var(--card-bg);
  border-radius: 15px;
  border-left: 4px solid #10b981;
  border: 1px solid var(--border-color);
}

.availability h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 15px;
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #10b981;
  font-weight: 500;
}

.status-dot {
  width: 12px;
  height: 12px;
  background: #10b981;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}

.contact-form {
  background: var(--card-bg);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px var(--shadow-light);
  border: 1px solid var(--border-color);
  align-self: flex-start;
}

.form-group {
  margin-bottom: 25px;
}

.form-group label {
  display: block;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 15px;
  border: 2px solid var(--border-color);
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;
  background: var(--input-bg);
  color: var(--text-primary);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.btn-primary {
  width: 100%;
  padding: 15px;
  font-size: 1.1rem;
}

.btn-primary:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .section-header h2 {
    font-size: 2.5rem;
  }
  
  .contact-form {
    padding: 30px 20px;
  }
  
  .contact-method {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }
}
</style>
