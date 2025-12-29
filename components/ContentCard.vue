<template>
  <div
    class="bg-white rounded-2xl p-8 shadow-lg mb-8"
    :class="[
      borderClass,
      { 'border-2 border-gray-100': !noBorder }
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
/**
 * ContentCard - Reusable white card component with rounded corners and shadow
 *
 * @prop {string} borderClass - Optional custom border classes
 * @prop {boolean} noBorder - If true, removes the default border
 *
 * @example
 * <ContentCard>
 *   <h2>My Title</h2>
 *   <p>Content goes here</p>
 * </ContentCard>
 *
 * @example with custom border
 * <ContentCard border-class="border-4 border-blue-600">
 *   <p>Custom border content</p>
 * </ContentCard>
 */
defineProps<{
  borderClass?: string
  noBorder?: boolean
}>()
</script>
