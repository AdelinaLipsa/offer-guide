<template>
  <div
    ref="heroElement"
    class="hero-header relative overflow-hidden text-white"
    style="padding: 80px 0 100px;"
    @mousemove="$emit('mousemove', $event)"
  >
    <div class="shimmer-overlay"></div>

    <div class="container mx-auto px-4 relative z-10 hero-content">
      <div class="text-center">
        <div class="hero-icon">
          {{ icon || '🚀' }}
        </div>
        <h1 class="text-4xl md:text-6xl font-bold mb-4 hero-title">
          {{ title }}
        </h1>
        <p class="text-lg md:text-xl mb-6 opacity-95 max-w-3xl mx-auto">
          {{ subtitle }}
        </p>
        <div v-if="badges && badges.length" class="flex justify-center gap-3 flex-wrap">
          <span
            v-for="(badge, index) in badges"
            :key="index"
            class="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            {{ badge }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  title: string
  subtitle?: string
  icon?: string
  badges?: string[]
}>()

defineEmits<{
  mousemove: [event: MouseEvent]
}>()

const heroElement = ref<HTMLElement>()
</script>

<style scoped>
.hero-header {
  background: linear-gradient(45deg, #2563eb 0%, #7c3aed 25%, #ec4899 50%, #8b5cf6 75%, #2563eb 100%);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
  color: white;
  position: relative;
  overflow: hidden;
}

.shimmer-overlay {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg,
    transparent 30%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 70%);
  animation: shimmerMove 8s linear infinite;
  pointer-events: none;
}

.hero-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(255,255,255,0.1)" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>') bottom center no-repeat;
  opacity: 0.3;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  25% { background-position: 100% 50%; }
  50% { background-position: 100% 100%; }
  75% { background-position: 0% 100%; }
  100% { background-position: 0% 50%; }
}

@keyframes shimmerMove {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes rocketFly {
  0% {
    transform: translate(0, 0) rotate(45deg) scale(1);
    opacity: 1;
  }
  5% {
    transform: translate(20px, -40px) rotate(50deg) scale(1.05);
  }
  10% {
    transform: translate(80px, -150px) rotate(60deg) scale(0.95);
  }
  15% {
    transform: translate(180px, -280px) rotate(70deg) scale(0.85);
  }
  20% {
    transform: translate(300px, -400px) rotate(80deg) scale(0.7);
    opacity: 0.9;
  }
  25% {
    transform: translate(420px, -480px) rotate(100deg) scale(0.6);
    opacity: 0.8;
  }
  30% {
    transform: translate(520px, -500px) rotate(120deg) scale(0.55);
    opacity: 0.7;
  }
  35% {
    transform: translate(600px, -480px) rotate(140deg) scale(0.6);
    opacity: 0.8;
  }
  40% {
    transform: translate(650px, -420px) rotate(160deg) scale(0.65);
  }
  45% {
    transform: translate(670px, -320px) rotate(180deg) scale(0.7);
    opacity: 0.85;
  }
  50% {
    transform: translate(650px, -200px) rotate(200deg) scale(0.75);
  }
  55% {
    transform: translate(600px, -100px) rotate(220deg) scale(0.8);
    opacity: 0.9;
  }
  60% {
    transform: translate(500px, -40px) rotate(230deg) scale(0.85);
  }
  65% {
    transform: translate(350px, -10px) rotate(240deg) scale(0.9);
  }
  70% {
    transform: translate(180px, -5px) rotate(250deg) scale(0.95);
  }
  75% {
    transform: translate(20px, -20px) rotate(260deg) scale(0.98);
  }
  80% {
    transform: translate(-80px, -60px) rotate(280deg) scale(1);
  }
  85% {
    transform: translate(-120px, -100px) rotate(300deg) scale(1.02);
  }
  90% {
    transform: translate(-80px, -80px) rotate(330deg) scale(1.05);
  }
  95% {
    transform: translate(-20px, -40px) rotate(380deg) scale(1.02);
  }
  100% {
    transform: translate(0, 0) rotate(405deg) scale(1);
    opacity: 1;
  }
}

.hero-content {
  animation: fadeInUp 1s ease-out;
  position: relative;
  z-index: 1;
}

.hero-title {
  animation: fadeInUp 1s ease-out 0.2s backwards;
}

.hero-icon {
  font-size: 64px;
  margin-bottom: 20px;
  animation: float 3s ease-in-out infinite, fadeInScale 1s ease-out;
  transform-origin: center center;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
