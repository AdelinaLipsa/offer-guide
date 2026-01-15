<template>
  <div
    class="step-card group bg-white rounded-lg p-6 h-full border border-border flex flex-col hover-lift cursor-pointer"
    :class="customClass"
  >
    <div class="flex items-center mb-4">
      <div
        class="step-number-circle w-10 h-10 rounded-lg flex items-center justify-center text-white font-semibold text-sm"
        :class="numberClass || 'bg-accent'"
      >
        <Icon v-if="numberIcon" :name="numberIcon" class="w-5 h-5 text-white" />
        <span v-else>{{ stepNumber }}</span>
      </div>
      <span
        class="ml-auto px-3 py-1 rounded-md text-xs font-medium tracking-wide uppercase"
        :class="badgeClass || 'bg-accent-light text-accent'"
      >
        {{ badge }}
      </span>
    </div>

    <h3 class="text-lg font-semibold mb-2 flex items-center text-navy-900">
      <Icon v-if="titleIcon" :name="titleIcon" class="w-5 h-5 mr-2 text-accent" />
      <span>{{ title }}</span>
      <span v-if="subtitle" class="text-sm text-charcoal-500 font-normal ml-2">{{ subtitle }}</span>
    </h3>

    <p class="text-charcoal-600 mb-4 text-sm leading-relaxed">
      {{ description }}
    </p>

    <ul class="space-y-2 mb-4">
      <li
        v-for="(feature, index) in features"
        :key="index"
        class="flex items-start text-sm text-charcoal-600"
      >
        <Icon name="lucide:check" class="w-4 h-4 mr-2 text-success flex-shrink-0 mt-0.5" />
        {{ feature }}
      </li>
    </ul>

    <div
      class="mt-auto mb-4 rounded-lg p-3 border"
      :class="metricClass || 'bg-surface-tertiary border-border'"
    >
      <div class="flex items-center text-sm">
        <Icon :name="metricIcon || 'lucide:trending-up'" class="w-4 h-4 mr-2" :class="metricIconClass || 'text-accent'" />
        <span class="text-charcoal-500">
          <strong :class="metricLabelClass || 'text-navy-800'">{{ metricLabel }}:</strong> {{ metricValue }}
        </span>
      </div>
    </div>

    <NuxtLink
      v-if="linkTo"
      :to="linkTo"
      class="w-full text-center py-2.5 px-4 rounded-md font-medium text-sm btn-hover ripple-container"
      :class="buttonClass || 'bg-accent text-white hover:bg-accent-hover'"
    >
      {{ linkText }}
      <Icon name="lucide:arrow-right" class="w-4 h-4 inline-block ml-1 transition-transform duration-200 group-hover:translate-x-1" />
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
.step-card:hover .step-number-circle {
  transform: scale(1.1) rotate(3deg);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);
}

.step-number-circle {
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
}

.step-card:hover li {
  transform: translateX(4px);
}

.step-card li {
  transition: transform 0.2s ease-out;
}
</style>
