<template>
  <h2
    class="flex items-center mb-6 text-gray-900"
    :class="[
      sizeClass,
      customClass
    ]"
  >
    <span
      v-if="showNumber"
      class="inline-flex items-center justify-center rounded-full text-white font-bold flex-shrink-0"
      :class="[
        numberSizeClass,
        gradientClass,
        spacingClass
      ]"
    >
      {{ number }}
    </span>
    <slot>{{ title }}</slot>
  </h2>
</template>

<script setup lang="ts">
/**
 * SectionHeader - Numbered section header with gradient circle
 *
 * @prop {number} number - The section number to display in the circle
 * @prop {string} title - The header text (can also use default slot)
 * @prop {boolean} showNumber - Whether to show the numbered circle (default: true)
 * @prop {'sm' | 'md' | 'lg' | 'xl'} size - Size of the header (default: 'lg')
 * @prop {string} gradientClass - Custom gradient classes for the number circle
 * @prop {string} customClass - Additional classes for the h2 element
 *
 * @example
 * <SectionHeader :number="1" title="What is a VSL Page?" />
 *
 * @example with slot
 * <SectionHeader :number="2">
 *   Custom <strong>Header</strong> Content
 * </SectionHeader>
 *
 * @example without number
 * <SectionHeader :show-number="false" title="No Number Header" />
 */
const props = withDefaults(
  defineProps<{
    number?: number
    title?: string
    showNumber?: boolean
    size?: 'sm' | 'md' | 'lg' | 'xl'
    gradientClass?: string
    customClass?: string
  }>(),
  {
    showNumber: true,
    size: 'lg',
    gradientClass: 'bg-gradient-to-br from-blue-600 to-purple-600'
  }
)

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-xl font-semibold'
    case 'md':
      return 'text-2xl font-bold'
    case 'lg':
      return 'text-3xl font-bold'
    case 'xl':
      return 'text-4xl font-bold'
    default:
      return 'text-3xl font-bold'
  }
})

const numberSizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'w-8 h-8 text-sm'
    case 'md':
      return 'w-10 h-10 text-base'
    case 'lg':
      return 'w-10 h-10 text-lg'
    case 'xl':
      return 'w-12 h-12 text-xl'
    default:
      return 'w-10 h-10 text-lg'
  }
})

const spacingClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'mr-3'
    case 'md':
      return 'mr-3'
    case 'lg':
      return 'mr-4'
    case 'xl':
      return 'mr-4'
    default:
      return 'mr-4'
  }
})
</script>
