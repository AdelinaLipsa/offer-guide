<template>
  <ul
    class="list-none"
    :class="[
      layoutClass,
      customClass
    ]"
  >
    <slot />
  </ul>
</template>

<script setup lang="ts">
/**
 * Checklist - Container for checklist items with responsive grid layout
 *
 * @prop {'single' | 'double'} columns - Number of columns for the grid (default: 'double')
 * @prop {string} gap - Gap size between items (default: 'gap-4')
 * @prop {string} customClass - Additional custom classes
 *
 * @example
 * <Checklist>
 *   <ChecklistItem label="Item 1" text="Description" />
 *   <ChecklistItem label="Item 2" text="Description" />
 * </Checklist>
 *
 * @example with single column
 * <Checklist columns="single">
 *   <ChecklistItem label="Item" text="Full width item" />
 * </Checklist>
 */
const props = withDefaults(
  defineProps<{
    columns?: 'single' | 'double'
    gap?: string
    customClass?: string
  }>(),
  {
    columns: 'double',
    gap: 'gap-4'
  }
)

const layoutClass = computed(() => {
  const gridClass = props.columns === 'double' ? 'grid md:grid-cols-2' : ''
  return `${gridClass} ${props.gap}`
})
</script>
