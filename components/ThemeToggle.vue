<template>
  <button 
    @click="toggleTheme" 
    class="theme-toggle"
    :class="{ 'dark': isDark }"
    aria-label="Toggle theme"
  >
    <div class="toggle-track">
      <div class="toggle-thumb">
        <div class="icon sun-icon" :class="{ 'active': !isDark }">☀️</div>
        <div class="icon moon-icon" :class="{ 'active': isDark }">🌙</div>
      </div>
    </div>
  </button>
</template>

<script setup>
const { isDark, toggleTheme } = useTheme()
</script>

<style scoped>
.theme-toggle {
  position: relative;
  width: 60px;
  height: 30px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  outline: none;
}

.toggle-track {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  border-radius: 15px;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

.theme-toggle.dark .toggle-track {
  background: linear-gradient(135deg, #1e293b, #334155);
}

.toggle-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 26px;
  height: 26px;
  background: white;
  border-radius: 50%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.theme-toggle.dark .toggle-thumb {
  transform: translateX(30px);
  background: #1e293b;
}

.icon {
  position: absolute;
  font-size: 14px;
  opacity: 0;
  transform: scale(0.5);
  transition: all 0.3s ease;
}

.icon.active {
  opacity: 1;
  transform: scale(1);
}

.theme-toggle:hover .toggle-track {
  transform: scale(1.05);
}

.theme-toggle:active .toggle-track {
  transform: scale(0.95);
}
</style>