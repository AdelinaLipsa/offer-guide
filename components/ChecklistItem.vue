<template>
  <li
    class="rounded-lg p-4 flex items-start relative"
    :class="[
      containerClass,
      customClass
    ]"
  >
    <span
      class="absolute font-bold text-lg flex-shrink-0"
      :class="[
        iconClass,
        iconPositionClass
      ]"
    >
      {{ icon }}
    </span>
    <div :class="contentClass">
      <strong v-if="label" class="text-gray-900">{{ label }}:</strong>
      <span class="text-gray-700">
        <slot>{{ text }}</slot>
      </span>
    </div>
  </li>
</template>

<script setup lang="ts">
/**
 * ChecklistItem - Single checklist item with icon and text
 *
 * @prop {string} label - Optional bold label before the text
 * @prop {string} text - The item text (can also use default slot)
 * @prop {'check' | 'cross'} variant - Icon type to display
 * @prop {string} icon - Custom icon to use (overrides variant)
 * @prop {string} containerClass - Background/border classes for the item
 * @prop {string} iconClass - Custom classes for the icon
 * @prop {string} contentClass - Custom classes for the content wrapper
 * @prop {string} customClass - Additional classes for the li element
 *
 * @example
 * <ChecklistItem label="Compelling Headline" text="Promise a specific benefit" />
 *
 * @example with cross icon
 * <ChecklistItem variant="cross" label="Weak Hook" text="First 30 seconds matter" />
 *
 * @example with slot
 * <ChecklistItem label="Mobile-First">
 *   60%+ of orders come from <strong>mobile</strong>
 * </ChecklistItem>
 */
const props = withDefaults(
  defineProps<{
    label?: string
    text?: string
    variant?: 'check' | 'cross'
    icon?: string
    containerClass?: string
    iconClass?: string
    iconPositionClass?: string
    contentClass?: string
    customClass?: string
  }>(),
  {
    variant: 'check',
    containerClass: 'bg-gray-50',
    iconPositionClass: 'left-3 top-4',
    contentClass: 'pl-7'
  }
)

const iconComputed = computed(() => {
  if (props.icon) {
    return props.icon
  }
  return props.variant === 'check' ? '✓' : '❌'
})

const iconClassComputed = computed(() => {
  if (props.iconClass) {
    return props.iconClass
  }
  return props.variant === 'check' ? 'text-green-500' : 'text-red-500'
})

const icon = iconComputed
const iconClass = iconClassComputed
</script>
