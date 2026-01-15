<template>
  <div class="app-container">
    <LoadingScreen />
    <DarkModeToggle v-if="isIndexPage" class="index-toggle" />
    <FloatingBlobs />
    <div class="app-content">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const isIndexPage = computed(() => route.path === '/' || route.path === '/offer-guide/')
</script>

<style>
.index-toggle {
  position: fixed;
  top: 1rem;
  right: 1.5rem;
  z-index: 1100;
}
</style>

<style>
.app-container {
  position: relative;
  min-height: 100vh;
}

.app-content {
  position: relative;
  z-index: 1;
}
</style>
