<template>
  <div class="page-header header-gradient-animated">
    <!-- Logo Shadow (larger, blurred, behind) -->
    <img src="/bg-logo-white.png" alt="" class="logo-shadow" aria-hidden="true" />
    <!-- Logo Main (visible, on top) -->
    <img src="/bg-logo-white.png" alt="" class="logo-main" aria-hidden="true" />

    <div class="header-content">
      <div v-if="badge" class="step-badge">{{ badge }}</div>
      <h1 class="header-title">{{ title }}</h1>
      <p v-if="subtitle" class="header-subtitle">{{ subtitle }}</p>
    </div>

    <!-- Quick Stats Bar -->
    <div v-if="stats && stats.length" class="stats-bar">
      <div
        v-for="(stat, index) in stats"
        :key="index"
        class="stat-item group"
        :style="{ animationDelay: `${0.4 + index * 0.1}s` }"
      >
        <Icon :name="stat.icon" class="w-4 h-4 stat-icon" />
        <span class="text-sm">{{ stat.text }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Stat {
  icon: string
  text: string
}

defineProps<{
  badge?: string
  title: string
  subtitle?: string
  stats?: Stat[]
}>()
</script>

<style scoped>
.page-header {
  position: relative;
  color: white;
  padding: 4rem 1.5rem;
  text-align: center;
  overflow: hidden;
}

/* Logo styles */
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

.header-content {
  position: relative;
  z-index: 10;
  max-width: 800px;
  margin: 0 auto;
}

.step-badge {
  display: inline-block;
  background: rgba(79, 70, 229, 0.3);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1rem;
  animation: fade-down 0.5s ease-out forwards;
  opacity: 0;
}

.header-title {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  animation: fade-up 0.6s ease-out 0.1s forwards;
  opacity: 0;
}

.header-subtitle {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  animation: fade-up 0.6s ease-out 0.2s forwards;
  opacity: 0;
}

.stats-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  position: relative;
  z-index: 10;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: fade-up 0.5s ease-out forwards;
  opacity: 0;
  transition: all 0.2s ease;
}

.stat-item:hover {
  background: rgba(255, 255, 255, 0.18);
  transform: translateY(-2px);
  border-color: rgba(255, 255, 255, 0.25);
}

.stat-icon {
  transition: transform 0.2s ease-out;
}

.stat-item:hover .stat-icon {
  transform: scale(1.2) rotate(5deg);
}

/* Animations */
@keyframes fade-down {
  from {
    opacity: 0;
    transform: translateY(-15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .page-header {
    padding: 3rem 1rem;
  }

  .header-title {
    font-size: 1.75rem;
  }

  .header-subtitle {
    font-size: 1rem;
  }

  .logo-main {
    width: 100px;
    left: 16px;
    bottom: 12px;
  }

  .logo-shadow {
    width: 250px;
    opacity: 0.05;
  }

  .stats-bar {
    gap: 0.5rem;
  }

  .stat-item {
    font-size: 0.875rem;
    padding: 0.375rem 0.75rem;
  }
}
</style>
