<template>
  <div
    class="rounded-lg p-6 mb-6 bg-surface-tertiary border border-border"
    :class="customClass"
  >
    <h3 class="font-semibold mb-4 text-navy-900" :class="titleSizeClass">
      {{ title }}
    </h3>

    <div class="space-y-3">
      <slot>
        <div
          v-for="(metric, index) in metrics"
          :key="index"
          class="border-b border-border pb-3 last:border-0 last:pb-0"
        >
          <strong class="text-navy-800 block text-sm mb-0.5">{{ metric.label }}:</strong>
          <span class="text-charcoal-600 text-sm">{{ metric.value }}</span>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Metric {
  label: string
  value: string
}

const props = withDefaults(
  defineProps<{
    title: string
    metrics?: Metric[]
    titleSize?: 'sm' | 'md' | 'lg'
    customClass?: string
  }>(),
  {
    titleSize: 'md',
    metrics: () => []
  }
)

const titleSizeClass = computed(() => {
  switch (props.titleSize) {
    case 'sm': return 'text-base'
    case 'md': return 'text-lg'
    case 'lg': return 'text-xl'
    default: return 'text-lg'
  }
})
</script>
