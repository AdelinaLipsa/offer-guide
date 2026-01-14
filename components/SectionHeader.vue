<template>
  <h2
    class="flex items-center mb-6 text-navy-900"
    :class="[sizeClass, customClass]"
  >
    <span
      v-if="showNumber"
      class="inline-flex items-center justify-center rounded-lg text-white font-semibold flex-shrink-0 bg-accent"
      :class="[numberSizeClass, spacingClass]"
    >
      {{ number }}
    </span>
    <slot>{{ title }}</slot>
  </h2>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    number?: number
    title?: string
    showNumber?: boolean
    size?: 'sm' | 'md' | 'lg' | 'xl'
    customClass?: string
  }>(),
  {
    showNumber: true,
    size: 'lg'
  }
)

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm': return 'text-lg font-semibold'
    case 'md': return 'text-xl font-semibold'
    case 'lg': return 'text-2xl font-bold'
    case 'xl': return 'text-3xl font-bold'
    default: return 'text-2xl font-bold'
  }
})

const numberSizeClass = computed(() => {
  switch (props.size) {
    case 'sm': return 'w-7 h-7 text-xs'
    case 'md': return 'w-8 h-8 text-sm'
    case 'lg': return 'w-9 h-9 text-sm'
    case 'xl': return 'w-10 h-10 text-base'
    default: return 'w-9 h-9 text-sm'
  }
})

const spacingClass = computed(() => {
  switch (props.size) {
    case 'sm': return 'mr-2'
    case 'md': return 'mr-3'
    case 'lg': return 'mr-3'
    case 'xl': return 'mr-4'
    default: return 'mr-3'
  }
})
</script>
