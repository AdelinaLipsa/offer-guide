<template>
  <button
    @click="toggleDarkMode"
    class="dark-mode-toggle"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <div class="toggle-track">
      <div class="toggle-thumb" :class="{ 'is-dark': isDark }">
        <!-- Sun icon -->
        <svg
          v-if="!isDark"
          class="icon sun-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
        <!-- Moon icon -->
        <svg
          v-else
          class="icon moon-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
import { useDarkMode } from '~/composables/useDarkMode'

const { isDark, toggleDarkMode } = useDarkMode()
</script>

<style scoped>
.dark-mode-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
}

.toggle-track {
  width: 56px;
  height: 30px;
  background: linear-gradient(135deg, #e0e7ff, #c7d2fe);
  border-radius: 15px;
  padding: 3px;
  transition: background 0.3s ease;
  box-shadow:
    inset 0 2px 4px rgba(0, 0, 0, 0.1),
    0 2px 8px rgba(0, 0, 0, 0.1);
}

:global(.dark) .toggle-track {
  background: linear-gradient(135deg, #1e293b, #334155);
}

.toggle-thumb {
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55),
              background 0.3s ease;
  box-shadow: 0 2px 8px rgba(245, 158, 11, 0.4);
}

.toggle-thumb.is-dark {
  transform: translateX(26px);
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  box-shadow: 0 2px 8px rgba(139, 92, 246, 0.4);
}

.icon {
  width: 14px;
  height: 14px;
  color: white;
}

.sun-icon {
  animation: sun-rotate 10s linear infinite;
}

.moon-icon {
  animation: moon-wobble 3s ease-in-out infinite;
}

@keyframes sun-rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes moon-wobble {
  0%, 100% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
}

/* Hover effect */
.dark-mode-toggle:hover .toggle-thumb {
  transform: scale(1.1);
}

.dark-mode-toggle:hover .toggle-thumb.is-dark {
  transform: translateX(26px) scale(1.1);
}

/* Focus state */
.dark-mode-toggle:focus {
  outline: none;
}

.dark-mode-toggle:focus-visible .toggle-track {
  box-shadow:
    inset 0 2px 4px rgba(0, 0, 0, 0.1),
    0 0 0 3px rgba(79, 70, 229, 0.4);
}

/* Reduce motion */
@media (prefers-reduced-motion: reduce) {
  .toggle-thumb {
    transition: transform 0.1s ease, background 0.1s ease;
  }

  .sun-icon,
  .moon-icon {
    animation: none;
  }
}
</style>
