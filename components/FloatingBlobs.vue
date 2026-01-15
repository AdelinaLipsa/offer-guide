<template>
  <div class="floating-logos-container">
    <img
      v-for="logo in logos"
      :key="logo.id"
      :src="logoSrc"
      alt=""
      class="floating-logo"
            :style="{
        width: logo.size + 'px',
        top: logo.top,
        left: logo.left,
        opacity: logo.opacity,
        transform: `translateY(${scrollY * logo.parallaxSpeed}px)`
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useDarkMode } from '~/composables/useDarkMode'

const { isDark } = useDarkMode()
const config = useRuntimeConfig()
const baseURL = config.app.baseURL || '/'

const logoSrc = computed(() => {
  const logo = isDark.value ? 'bg-logo-white.png' : 'BG-logo-black.png'
  return `${baseURL}${logo}`
})
const scrollY = ref(0)

const handleScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Configuration
const logoCount = 50
const sizes = [400, 350, 300, 250, 200, 160, 130, 100, 80, 60, 45, 35]

// Golden ratio based scatter for natural-looking distribution
const goldenAngle = 137.5077640500378

// Generate logos with golden ratio spiral scatter
const logos = Array.from({ length: logoCount }, (_, i) => {
  // Golden ratio based positioning - creates natural scatter
  const angle = i * goldenAngle
  const radius = Math.sqrt(i / logoCount) * 50

  // Convert polar to cartesian and shift to center
  const posX = 50 + radius * Math.cos(angle * Math.PI / 180) * 1.8
  const posY = 50 + radius * Math.sin(angle * Math.PI / 180) * 1.8

  // Clamp to bounds with some overflow allowed
  const clampedX = Math.max(-10, Math.min(105, posX))
  const clampedY = Math.max(-10, Math.min(105, posY))

  // Size variety using different pattern
  const sizeIndex = Math.floor((Math.sin(i * 0.7) * 0.5 + 0.5) * sizes.length)
  const size = sizes[sizeIndex]

  // Parallax speed based on size (smaller = faster for depth)
  const parallaxSpeed = 0.02 + (1 - size / 400) * 0.25

  // Vary opacity
  const opacity = 0.04 + (Math.sin(i * 1.3) * 0.5 + 0.5) * 0.04

  return {
    id: i,
    size,
    top: `${clampedY}%`,
    left: `${clampedX}%`,
    parallaxSpeed,
    opacity
  }
})
</script>

<style scoped>
.floating-logos-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.floating-logo {
  position: absolute;
  height: auto;
  will-change: transform;
  filter: grayscale(100%);
  transition: transform 0.15s ease-out;
}

/* Reduce count on mobile */
@media (max-width: 768px) {
  .floating-logo:nth-child(odd) {
    display: none;
  }
}
</style>
