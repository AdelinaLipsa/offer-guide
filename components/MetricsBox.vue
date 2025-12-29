<template>
  <div
    class="rounded-2xl p-8 mb-8"
    :class="[
      containerClass,
      customClass
    ]"
  >
    <h3
      class="font-bold mb-6"
      :class="[
        titleClass,
        titleSizeClass
      ]"
    >
      {{ title }}
    </h3>

    <div class="space-y-4">
      <slot>
        <div
          v-for="(metric, index) in metrics"
          :key="index"
          class="border-b border-gray-200"
          :class="{ 'pb-4': index !== metrics.length - 1 }"
        >
          <strong class="text-gray-900 block mb-1">{{ metric.label }}:</strong>
          <span class="text-gray-700">{{ metric.value }}</span>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * MetricsBox - Performance metrics display box with gradient background
 *
 * @prop {string} title - The metrics box title
 * @prop {Array<{label: string, value: string}>} metrics - Array of metric objects
 * @prop {string} containerClass - Custom container classes (default: gradient background)
 * @prop {string} titleClass - Custom title color classes
 * @prop {'sm' | 'md' | 'lg'} titleSize - Title size variant
 * @prop {string} customClass - Additional custom classes
 *
 * @example
 * <MetricsBox
 *   title="Performance Metrics & Benchmarks"
 *   :metrics="[
 *     { label: 'Conversion Rate', value: '2-5% of viewers become buyers' },
 *     { label: 'Watch Time', value: 'Should be 10-15 minutes minimum' }
 *   ]"
 * />
 *
 * @example with slot for custom content
 * <MetricsBox title="Custom Metrics">
 *   <div class="pb-4 border-b border-gray-200">
 *     <strong>Custom Metric:</strong>
 *     <p>Custom content here</p>
 *   </div>
 * </MetricsBox>
 */
interface Metric {
  label: string
  value: string
}

const props = withDefaults(
  defineProps<{
    title: string
    metrics?: Metric[]
    containerClass?: string
    titleClass?: string
    titleSize?: 'sm' | 'md' | 'lg'
    customClass?: string
  }>(),
  {
    containerClass: 'bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-600',
    titleClass: 'text-blue-900',
    titleSize: 'lg',
    metrics: () => []
  }
)

const titleSizeClass = computed(() => {
  switch (props.titleSize) {
    case 'sm':
      return 'text-lg'
    case 'md':
      return 'text-xl'
    case 'lg':
      return 'text-2xl'
    default:
      return 'text-2xl'
  }
})
</script>
