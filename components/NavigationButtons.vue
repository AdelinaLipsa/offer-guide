<template>
  <div
    class="flex mt-12"
    :class="[
      layoutClass,
      gapClass,
      customClass
    ]"
  >
    <!-- Previous Button -->
    <NuxtLink
      v-if="prevTo"
      :to="prevTo"
      class="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-transform"
      :class="[
        prevButtonClass,
        flexClass
      ]"
    >
      <span v-if="showArrows">← </span>
      <span>{{ prevText }}</span>
    </NuxtLink>

    <!-- Next Button -->
    <NuxtLink
      v-if="nextTo"
      :to="nextTo"
      class="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-transform"
      :class="[
        nextButtonClass,
        flexClass
      ]"
    >
      <span>{{ nextText }}</span>
      <span v-if="showArrows"> →</span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
/**
 * NavigationButtons - Prev/Next navigation buttons for page navigation
 *
 * @prop {string} prevTo - Previous page route
 * @prop {string} prevText - Previous button text
 * @prop {string} nextTo - Next page route
 * @prop {string} nextText - Next button text
 * @prop {boolean} showArrows - Whether to show arrow icons (default: true)
 * @prop {'horizontal' | 'vertical'} layout - Button layout (default: 'horizontal')
 * @prop {string} gap - Gap between buttons (default: 'gap-4')
 * @prop {string} prevButtonClass - Custom classes for previous button
 * @prop {string} nextButtonClass - Custom classes for next button
 * @prop {string} customClass - Additional custom classes for container
 *
 * @example
 * <NavigationButtons
 *   prev-to="/"
 *   prev-text="Back to Overview"
 *   next-to="/step2-dtc"
 *   next-text="Next: Checkout Page"
 * />
 *
 * @example with custom styling
 * <NavigationButtons
 *   prev-to="/step1-vsl"
 *   prev-text="Previous: VSL Page"
 *   next-to="/step3-upsell1"
 *   next-text="Next: Upsell 1"
 *   layout="vertical"
 *   prev-button-class="bg-gray-100 text-gray-900"
 *   next-button-class="bg-green-600 text-white"
 * />
 */
const props = withDefaults(
  defineProps<{
    prevTo?: string
    prevText?: string
    nextTo?: string
    nextText?: string
    showArrows?: boolean
    layout?: 'horizontal' | 'vertical'
    gap?: string
    prevButtonClass?: string
    nextButtonClass?: string
    customClass?: string
  }>(),
  {
    prevText: 'Previous',
    nextText: 'Next',
    showArrows: true,
    layout: 'horizontal',
    gap: 'gap-4',
    prevButtonClass: 'bg-white text-blue-600 border-2 border-blue-600 hover:-translate-y-1',
    nextButtonClass: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:-translate-y-1'
  }
)

const layoutClass = computed(() => {
  return props.layout === 'vertical' ? 'flex-col' : 'justify-between'
})

const gapClass = computed(() => {
  return props.gap
})

const flexClass = computed(() => {
  return props.layout === 'vertical' ? 'w-full text-center' : 'flex-1'
})
</script>
