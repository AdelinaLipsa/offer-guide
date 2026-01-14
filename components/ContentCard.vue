<template>
  <div
    class="bg-white rounded-lg p-6 mb-6 border border-border"
    :class="[borderClass, customClass]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  borderClass?: string
  customClass?: string
}>()
</script>
