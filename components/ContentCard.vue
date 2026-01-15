<template>
  <div
    v-scroll-animate="'fade-up'"
    class="bg-white rounded-lg p-6 mb-6 border border-border hover-subtle"
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
