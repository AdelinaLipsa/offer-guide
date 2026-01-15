<template>
  <div
    v-scroll-animate="'fade-up'"
    class="rounded-md p-4 border-l-4 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
    :class="[alertClasses, customClass]"
  >
    <div class="flex items-start">
      <Icon :name="iconName" class="w-5 h-5 flex-shrink-0 mr-3 mt-0.5" :class="iconClass" />
      <div>
        <p v-if="title" class="font-semibold text-navy-900 mb-1">{{ title }}</p>
        <div class="text-charcoal-600 text-sm">
          <slot>
            <p v-if="message" class="leading-relaxed">{{ message }}</p>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    variant: 'success' | 'warning' | 'error' | 'info'
    title?: string
    message?: string
    customClass?: string
  }>(),
  {
    variant: 'info'
  }
)

const alertClasses = computed(() => {
  switch (props.variant) {
    case 'success':
      return 'bg-success-light border-success'
    case 'warning':
      return 'bg-warning-light border-warning'
    case 'error':
      return 'bg-error-light border-error'
    case 'info':
      return 'bg-accent-light border-accent'
    default:
      return 'bg-surface-tertiary border-border-strong'
  }
})

const iconName = computed(() => {
  switch (props.variant) {
    case 'success':
      return 'lucide:check-circle'
    case 'warning':
      return 'lucide:alert-triangle'
    case 'error':
      return 'lucide:x-circle'
    case 'info':
      return 'lucide:info'
    default:
      return 'lucide:info'
  }
})

const iconClass = computed(() => {
  switch (props.variant) {
    case 'success':
      return 'text-success'
    case 'warning':
      return 'text-warning'
    case 'error':
      return 'text-error'
    case 'info':
      return 'text-accent'
    default:
      return 'text-charcoal-500'
  }
})
</script>
