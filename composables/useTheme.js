export const useTheme = () => {
  const isDark = ref(false)

  const toggleTheme = () => {
    isDark.value = !isDark.value
    updateTheme()
  }

  const updateTheme = () => {
    if (process.client) {
      const html = document.documentElement
      if (isDark.value) {
        html.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        html.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
    }
  }

  const initTheme = () => {
    if (process.client) {
      const savedTheme = localStorage.getItem('theme')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      
      isDark.value = savedTheme ? savedTheme === 'dark' : prefersDark
      updateTheme()
    }
  }

  onMounted(() => {
    initTheme()
  })

  return {
    isDark: readonly(isDark),
    toggleTheme,
    initTheme
  }
}