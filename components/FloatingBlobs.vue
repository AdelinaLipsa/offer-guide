<template>
  <div class="floating-logos-container">
    <img
      v-for="logo in logos"
      :key="logo.id"
      :src="logoSrc"
      alt=""
      class="floating-logo"
      :class="[logo.animation]"
      :style="{
        width: logo.size + 'px',
        top: logo.top,
        left: logo.left,
        opacity: logo.opacity,
        animationDuration: logo.animationDuration,
        animationDelay: logo.animationDelay,
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
const animations = ['anim-rotate', 'anim-rotate-reverse', 'anim-pulse', 'anim-wobble', 'anim-float']

// Golden ratio based scatter for natural-looking distribution
const goldenRatio = 1.618033988749
const goldenAngle = 137.5077640500378

// Generate logos with golden ratio spiral scatter
const logos = Array.from({ length: logoCount }, (_, i) => {
  // Golden ratio based positioning - creates natural scatter
  const t = i / logoCount
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

  // Animation variety
  const animIndex = i % animations.length

  // Parallax speed based on size (smaller = faster for depth)
  const parallaxSpeed = 0.02 + (1 - size / 400) * 0.25

  // Vary opacity
  const opacity = 0.04 + (Math.sin(i * 1.3) * 0.5 + 0.5) * 0.04

  // Vary animation duration and delay
  const duration = 25 + (i * 7) % 50
  const delay = (i * 3) % 25

  return {
    id: i,
    size,
    top: `${clampedY}%`,
    left: `${clampedX}%`,
    animation: animations[animIndex],
    animationDuration: `${duration}s`,
    animationDelay: `-${delay}s`,
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
  transition: transform 0.1s linear, filter 0.3s ease, opacity 0.3s ease;
}

/* Animations */
.anim-rotate {
  animation: rotate linear infinite;
}

.anim-rotate-reverse {
  animation: rotate linear infinite reverse;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.anim-pulse {
  animation: pulse ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.12); }
}

.anim-wobble {
  animation: wobble ease-in-out infinite;
}

@keyframes wobble {
  0%, 100% { transform: rotate(-4deg); }
  50% { transform: rotate(4deg); }
}

.anim-float {
  animation: float ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-25px); }
}

/* Reduce motion for users who prefer it */
@media (prefers-reduced-motion: reduce) {
  .floating-logo {
    animation: none !important;
  }
}

/* Reduce count and size on mobile */
@media (max-width: 768px) {
  .floating-logo:nth-child(odd) {
    display: none;
  }
}
</style>
