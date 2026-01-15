<template>
  <div class="app-container">
    <LoadingScreen />
    <FloatingBlobs />
    <div class="app-content">
      <NuxtPage />
    </div>
  </div>
</template>

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
