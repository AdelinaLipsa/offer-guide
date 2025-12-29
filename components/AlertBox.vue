<template>
  <div
    class="rounded-lg p-6"
    :class="[
      alertClasses,
      customClass
    ]"
  >
    <p
      v-if="title"
      class="font-bold text-lg mb-2"
      :class="titleColorClass"
    >
      {{ title }}
    </p>
    <div :class="contentColorClass">
      <slot>
        <p v-if="message" class="leading-relaxed">{{ message }}</p>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * AlertBox - Color-coded alert/message boxes
 *
 * @prop {'success' | 'warning' | 'error' | 'info'} variant - The alert style variant
 * @prop {string} title - Optional title for the alert
 * @prop {string} message - Message text (can also use default slot)
 * @prop {string} customClass - Additional custom classes
 *
 * @example
 * <AlertBox variant="success" title="Why VSL Works:" message="Video presentations convert 2-5%..." />
 *
 * @example with slot
 * <AlertBox variant="warning" title="Warning:">
 *   <p>These mistakes are common...</p>
 * </AlertBox>
 *
 * @example variants
 * - success: Green box for tips and positive info
 * - warning: Yellow box for cautions
 * - error: Red box for warnings and mistakes
 * - info: Blue box for additional information
 */
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
      return 'bg-green-50 border-l-4 border-green-500'
    case 'warning':
      return 'bg-yellow-50 border-l-4 border-yellow-500'
    case 'error':
      return 'bg-red-50 border-l-4 border-red-500'
    case 'info':
      return 'bg-blue-50 border-l-4 border-blue-500'
    default:
      return 'bg-gray-50 border-l-4 border-gray-500'
  }
})

const titleColorClass = computed(() => {
  return 'text-gray-900'
})

const contentColorClass = computed(() => {
  return 'text-gray-700'
})
</script>
