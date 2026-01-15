<template>
  <div
    class="flex mt-8 gap-4"
    :class="[layoutClass, customClass]"
  >
    <NuxtLink
      v-if="prevTo"
      :to="prevTo"
      class="group inline-flex items-center justify-center px-6 py-3 rounded-md font-medium text-sm bg-white text-navy-800 border border-border hover:bg-surface-tertiary btn-hover"
      :class="flexClass"
    >
      <Icon name="lucide:arrow-left" class="w-4 h-4 mr-2 transition-transform duration-200 group-hover:-translate-x-1" />
      <span>{{ prevText }}</span>
    </NuxtLink>

    <NuxtLink
      v-if="nextTo"
      :to="nextTo"
      class="group inline-flex items-center justify-center px-6 py-3 rounded-md font-medium text-sm bg-accent text-white hover:bg-accent-hover btn-hover"
      :class="flexClass"
    >
      <span>{{ nextText }}</span>
      <Icon name="lucide:arrow-right" class="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
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
