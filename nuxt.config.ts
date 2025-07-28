// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  runtimeConfig: {
    public: {
      googleAnalytics: {
        id: process.env.GOOGLE_ANALYTICS_ID
      }
    }
  },
  devtools: { enabled: false },
  modules: [
    '@nuxt/image',
    'nuxt-gtag'
  ],
  gtag: {
    id: process.env.GOOGLE_ANALYTICS_ID
  },
  vite: {
    build: {
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    }
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Yash Dayama - Full Stack Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#6366f1' },
        { name: 'description', content: 'Yash Dayama - Full Stack Developer with expertise in React, Node.js, and modern web technologies. Portfolio showcasing professional work experience and projects.' },
        { name: 'keywords', content: 'Yash Dayama, Full Stack Developer, React Developer, Node.js Developer, Web Developer, Software Engineer, JavaScript Expert' },
        { name: 'author', content: 'Yash Dayama' },
        { property: 'og:title', content: 'Yash Dayama - Full Stack Developer' },
        { property: 'og:description', content: 'Yash Dayama - Full Stack Developer with expertise in React, Node.js, and modern web technologies. Portfolio showcasing professional work experience and projects.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://yash-dayama.github.io' },
        { property: 'og:image', content: 'https://yash-dayama.github.io/image.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Yash Dayama - Full Stack Developer' },
        { name: 'twitter:description', content: 'Yash Dayama - Full Stack Developer with expertise in React, Node.js, and modern web technologies. Portfolio showcasing professional work experience and projects.' },
        { name: 'twitter:image', content: 'https://yash-dayama.github.io/image.png' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }
      ]
    }
  }
})
