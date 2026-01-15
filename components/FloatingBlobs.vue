<template>
  <div class="floating-blobs-container" ref="containerRef">
    <!-- Large blobs - slow parallax -->
    <div class="blob blob-1" :style="getParallaxStyle(0.05)"></div>
    <div class="blob blob-2" :style="getParallaxStyle(0.08)"></div>
    <div class="blob blob-3" :style="getParallaxStyle(0.06)"></div>
    <div class="blob blob-4" :style="getParallaxStyle(0.07)"></div>
    <div class="blob blob-5" :style="getParallaxStyle(0.04)"></div>
    <div class="blob blob-6" :style="getParallaxStyle(0.09)"></div>

    <!-- Medium blobs - medium parallax -->
    <div class="blob blob-medium blob-7" :style="getParallaxStyle(0.12)"></div>
    <div class="blob blob-medium blob-8" :style="getParallaxStyle(0.1)"></div>
    <div class="blob blob-medium blob-9" :style="getParallaxStyle(0.14)"></div>
    <div class="blob blob-medium blob-10" :style="getParallaxStyle(0.11)"></div>

    <!-- Small blobs - fast parallax -->
    <div class="blob blob-small blob-11" :style="getParallaxStyle(0.18)"></div>
    <div class="blob blob-small blob-12" :style="getParallaxStyle(0.2)"></div>
    <div class="blob blob-small blob-13" :style="getParallaxStyle(0.16)"></div>
    <div class="blob blob-small blob-14" :style="getParallaxStyle(0.22)"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const containerRef = ref<HTMLElement | null>(null)
const scrollY = ref(0)

const handleScroll = () => {
  scrollY.value = window.scrollY
}

const getParallaxStyle = (speed: number) => {
  return {
    transform: `translateY(${scrollY.value * speed}px)`
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.floating-blobs-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.blob {
  position: absolute;
  aspect-ratio: 1;
  will-change: transform;
  transition: transform 0.1s linear;
}

/* Blob shapes - organic forms using border-radius */
.blob-1, .blob-5, .blob-9, .blob-13 {
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
}

.blob-2, .blob-6, .blob-10, .blob-14 {
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
}

.blob-3, .blob-7, .blob-11 {
  border-radius: 70% 30% 50% 50% / 30% 60% 40% 70%;
}

.blob-4, .blob-8, .blob-12 {
  border-radius: 50% 60% 30% 60% / 50% 40% 70% 50%;
}

/* Large blobs */
.blob-1 {
  width: 500px;
  background: linear-gradient(135deg, rgba(79, 70, 229, 0.18), rgba(124, 58, 237, 0.12));
  top: -100px;
  left: -100px;
  animation: morph-1 25s ease-in-out infinite;
}

.blob-2 {
  width: 450px;
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(59, 130, 246, 0.1));
  top: 25%;
  right: -80px;
  animation: morph-2 30s ease-in-out infinite;
}

.blob-3 {
  width: 480px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.1));
  bottom: 5%;
  left: 15%;
  animation: morph-3 28s ease-in-out infinite;
}

.blob-4 {
  width: 400px;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.12), rgba(6, 182, 212, 0.08));
  top: 55%;
  left: -60px;
  animation: morph-4 32s ease-in-out infinite;
}

.blob-5 {
  width: 350px;
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.12), rgba(239, 68, 68, 0.08));
  top: 8%;
  right: 18%;
  animation: morph-1 22s ease-in-out infinite;
}

.blob-6 {
  width: 420px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(168, 85, 247, 0.1));
  bottom: 15%;
  right: -50px;
  animation: morph-2 35s ease-in-out infinite;
}

/* Medium blobs */
.blob-medium {
  width: 280px;
}

.blob-7 {
  background: linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(34, 211, 238, 0.1));
  top: 40%;
  left: 28%;
  animation: morph-3 20s ease-in-out infinite;
}

.blob-8 {
  background: linear-gradient(135deg, rgba(244, 114, 182, 0.12), rgba(251, 113, 133, 0.08));
  top: 12%;
  left: 45%;
  animation: morph-4 24s ease-in-out infinite;
}

.blob-9 {
  background: linear-gradient(135deg, rgba(167, 139, 250, 0.15), rgba(129, 140, 248, 0.1));
  bottom: 25%;
  left: 8%;
  animation: morph-1 26s ease-in-out infinite;
}

.blob-10 {
  background: linear-gradient(135deg, rgba(52, 211, 153, 0.12), rgba(74, 222, 128, 0.08));
  top: 65%;
  right: 25%;
  animation: morph-2 22s ease-in-out infinite;
}

/* Small blobs */
.blob-small {
  width: 180px;
}

.blob-11 {
  background: rgba(79, 70, 229, 0.18);
  top: 22%;
  left: 12%;
  animation: morph-3 18s ease-in-out infinite;
}

.blob-12 {
  background: rgba(6, 182, 212, 0.15);
  top: 50%;
  right: 12%;
  animation: morph-4 16s ease-in-out infinite;
}

.blob-13 {
  background: rgba(139, 92, 246, 0.15);
  bottom: 12%;
  left: 35%;
  animation: morph-1 14s ease-in-out infinite;
}

.blob-14 {
  background: rgba(16, 185, 129, 0.12);
  top: 75%;
  left: 55%;
  animation: morph-2 17s ease-in-out infinite;
}

/* Morph animations for organic shape changes */
@keyframes morph-1 {
  0%, 100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
}

@keyframes morph-2 {
  0%, 100% {
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  }
  50% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
}

@keyframes morph-3 {
  0%, 100% {
    border-radius: 70% 30% 50% 50% / 30% 60% 40% 70%;
  }
  50% {
    border-radius: 40% 60% 60% 40% / 70% 30% 50% 50%;
  }
}

@keyframes morph-4 {
  0%, 100% {
    border-radius: 50% 60% 30% 60% / 50% 40% 70% 50%;
  }
  50% {
    border-radius: 70% 30% 60% 40% / 40% 60% 30% 70%;
  }
}

/* Reduce motion for users who prefer it */
@media (prefers-reduced-motion: reduce) {
  .blob {
    animation: none;
  }
}
</style>
