<template>
  <div
    class="step-card bg-white rounded-2xl p-8 h-full transition-all duration-400 border-2 border-gray-200 relative overflow-hidden flex flex-col group hover:-translate-y-2 hover:shadow-xl hover:border-blue-600"
    :class="customClass"
  >
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400"></div>

    <div class="flex items-center mb-3">
      <div
        class="step-number-circle w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg transition-all duration-300"
        :class="numberClass || 'bg-gradient-to-br from-blue-600 to-purple-600'"
      >
        <span v-if="!numberIcon">{{ stepNumber }}</span>
        <span v-else>{{ numberIcon }}</span>
      </div>
      <span
        class="ml-auto px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-300 group-hover:rotate-subtle"
        :class="badgeClass || 'bg-gradient-to-br from-blue-600 to-purple-600 text-white'"
      >
        {{ badge }}
      </span>
    </div>

    <h3 class="text-xl font-bold mb-3 flex items-center">
      <span v-if="titleIcon" class="mr-2 inline-block transition-all duration-300 group-hover:animate-bounce-icon">{{ titleIcon }}</span>
      <span>{{ title }}</span>
      <span v-if="subtitle" class="text-sm text-gray-500 font-medium ml-2">{{ subtitle }}</span>
    </h3>

    <p class="text-gray-600 mb-3">
      {{ description }}
    </p>

    <ul class="space-y-2 mb-3">
      <li
        v-for="(feature, index) in features"
        :key="index"
        class="pl-7 relative text-gray-600 transition-all duration-300 group-hover:translate-x-1 hover:text-gray-900 hover:font-medium"
      >
        <span class="absolute left-0 top-1 text-green-500 text-sm">✓</span>
        {{ feature }}
      </li>
    </ul>

    <div
      class="mt-auto mb-3 rounded-xl p-4 transition-all duration-400 group-hover:translate-x-1"
      :class="metricClass || 'bg-gradient-to-br from-green-50 to-green-25 border border-green-200'"
    >
      <div class="flex items-center">
        <span class="mr-2" :class="metricIconClass || 'text-green-500'">{{ metricIcon || '📈' }}</span>
        <small class="text-gray-600">
          <strong :class="metricLabelClass || 'text-green-600'">{{ metricLabel }}:</strong> {{ metricValue }}
        </small>
      </div>
    </div>

    <NuxtLink
      v-if="linkTo"
      :to="linkTo"
      class="btn-gradient w-full text-center mt-3 px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl relative overflow-hidden group/btn"
      :class="buttonClass || 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg'"
    >
      {{ linkText }}
      <span class="ml-2 inline-block transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
      <span class="absolute inset-0 bg-white/50 rounded-full w-0 h-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-600 group-active/btn:w-[300px] group-active/btn:h-[300px]"></span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  stepNumber?: number
  numberIcon?: string
  badge: string
  title: string
  subtitle?: string
  titleIcon?: string
  description: string
  features: string[]
  metricIcon?: string
  metricLabel: string
  metricValue: string
  linkTo?: string
  linkText?: string
  customClass?: string
  numberClass?: string
  badgeClass?: string
  metricClass?: string
  metricIconClass?: string
  metricLabelClass?: string
  buttonClass?: string
}>()
</script>

<style scoped>
.step-card {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

.step-card:hover::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 16px;
  box-shadow: 0 0 40px rgba(37, 99, 235, 0.3);
  animation: pulse 1.5s ease-in-out infinite;
  pointer-events: none;
  opacity: 0.5;
  z-index: -1;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.3;
  }
}

.step-card:hover .step-number-circle {
  transform: rotate(360deg) scale(1.1);
  animation: glow 2s ease-in-out infinite;
}

.rotate-subtle {
  animation: rotateSubtle 1s ease-in-out;
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

@keyframes rotateSubtle {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  75% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
}

@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 5px rgba(37, 99, 235, 0.5), 0 0 10px rgba(37, 99, 235, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(37, 99, 235, 0.8), 0 0 30px rgba(37, 99, 235, 0.5);
  }
}

@keyframes bounceIcon {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.animate-glow {
  animation: glow 2s ease-in-out infinite;
}

.animate-bounce-icon {
  animation: bounceIcon 1s ease;
}
</style>
