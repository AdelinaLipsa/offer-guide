<template>
  <li
    class="rounded-md p-4 flex items-start transition-all duration-200 hover:translate-x-1"
    :class="[
      containerClass,
      customClass
    ]"
  >
    <Icon
      :name="iconName"
      class="w-5 h-5 flex-shrink-0 mr-3 mt-0.5"
      :class="iconColorClass"
    />
    <div>
      <strong v-if="label" class="text-navy-900">{{ label }}:</strong>
      <span class="text-charcoal-600">
        <slot>{{ text }}</slot>
      </span>
    </div>
  </li>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    label?: string
    text?: string
    variant?: 'check' | 'cross'
    icon?: string
    containerClass?: string
    iconClass?: string
    customClass?: string
  }>(),
  {
    variant: 'check',
    containerClass: 'bg-surface-tertiary'
  }
)

const iconName = computed(() => {
  if (props.icon) return props.icon
  return props.variant === 'check' ? 'lucide:check' : 'lucide:x'
})

const iconColorClass = computed(() => {
  if (props.iconClass) return props.iconClass
  return props.variant === 'check' ? 'text-success' : 'text-error'
})
</script>
