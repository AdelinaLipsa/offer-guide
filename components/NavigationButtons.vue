<template>
  <div
    class="flex mt-8 gap-4"
    :class="[layoutClass, customClass]"
  >
    <NuxtLink
      v-if="prevTo"
      :to="prevTo"
      class="inline-flex items-center justify-center px-6 py-3 rounded-md font-medium text-sm transition-colors duration-200 bg-white text-navy-800 border border-border hover:bg-surface-tertiary"
      :class="flexClass"
    >
      <Icon name="lucide:arrow-left" class="w-4 h-4 mr-2" />
      <span>{{ prevText }}</span>
    </NuxtLink>

    <NuxtLink
      v-if="nextTo"
      :to="nextTo"
      class="inline-flex items-center justify-center px-6 py-3 rounded-md font-medium text-sm transition-colors duration-200 bg-accent text-white hover:bg-accent-hover"
      :class="flexClass"
    >
      <span>{{ nextText }}</span>
      <Icon name="lucide:arrow-right" class="w-4 h-4 ml-2" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    prevTo?: string
    prevText?: string
    nextTo?: string
    nextText?: string
    layout?: 'horizontal' | 'vertical'
    customClass?: string
  }>(),
  {
    prevText: 'Previous',
    nextText: 'Next',
    layout: 'horizontal'
  }
)

const layoutClass = computed(() => {
  return props.layout === 'vertical' ? 'flex-col' : 'justify-between'
})

const flexClass = computed(() => {
  return props.layout === 'vertical' ? 'w-full text-center' : ''
})
</script>
