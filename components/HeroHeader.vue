<template>
  <div class="hero-header text-white py-16 md:py-20">
    <!-- Logo Shadow (larger, behind) -->
    <img src="/bg-logo-white.png" alt="" class="logo-shadow" aria-hidden="true" />
    <!-- Logo Main (visible, on top) -->
    <img src="/bg-logo-white.png" alt="" class="logo-main" aria-hidden="true" />
    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center max-w-3xl mx-auto">
        <div v-if="icon" class="mb-6 hero-icon">
          <Icon :name="icon" class="w-12 h-12 text-accent-light mx-auto" />
        </div>
        <h1 class="text-3xl md:text-4xl font-bold mb-4 text-white hero-title">
          {{ title }}
        </h1>
        <p v-if="subtitle" class="text-lg text-slate-300 mb-6 max-w-2xl mx-auto hero-subtitle">
          {{ subtitle }}
        </p>
        <div v-if="badges && badges.length" class="flex justify-center gap-3 flex-wrap hero-badges">
          <span
            v-for="(badge, index) in badges"
            :key="index"
            class="bg-white/10 text-white px-4 py-2 rounded-md text-sm font-medium border border-white/20 transition-all duration-200 hover:bg-white/20 hover:scale-105"
            :style="{ animationDelay: `${0.4 + index * 0.1}s` }"
          >
            {{ badge }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  icon?: string
  badges?: string[]
}>()
</script>

<style scoped>
.hero-header {
  position: relative;
  background: linear-gradient(
    -45deg,
    #0f172a,
    #1e293b,
    #1e1b4b,
    #172554,
    #0f172a
  );
  background-size: 400% 400%;
  animation: gradient-flow 15s ease infinite;
}

@keyframes gradient-flow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Main visible logo - bottom left corner */
.logo-main {
  position: absolute;
  left: 24px;
  bottom: 20px;
  width: 140px;
  height: auto;
  opacity: 0.85;
  pointer-events: none;
  user-select: none;
  z-index: 2;
}

/* Shadow logo - large watermark behind main logo */
.logo-shadow {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 400px;
  height: auto;
  opacity: 0.06;
  pointer-events: none;
  user-select: none;
  z-index: 1;
}

@media (max-width: 768px) {
  .logo-main {
    width: 100px;
    left: 16px;
    bottom: 12px;
  }
  .logo-shadow {
    width: 250px;
    opacity: 0.05;
  }
}

.hero-header::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
}

/* Hero entrance animations */
@keyframes hero-fade-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes hero-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.hero-icon {
  animation: hero-fade-up 0.6s ease-out forwards;
}

.hero-title {
  animation: hero-fade-up 0.6s ease-out 0.1s forwards;
  opacity: 0;
}

.hero-subtitle {
  animation: hero-fade-up 0.6s ease-out 0.2s forwards;
  opacity: 0;
}

.hero-badges span {
  animation: hero-fade-up 0.5s ease-out forwards;
  opacity: 0;
}
</style>
