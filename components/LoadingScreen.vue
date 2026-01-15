<template>
  <Transition name="loading-fade">
    <div v-if="isLoading" class="loading-screen">
      <div class="loading-content">
        <!-- Logo with pulse animation -->
        <div class="logo-container">
          <img
            src="/BG-logo-black.png"
            alt="BuyGoods"
            class="loading-logo"
          />
          <div class="logo-glow"></div>
        </div>

        <!-- Loading spinner -->
        <div class="loading-spinner">
          <div class="spinner-ring"></div>
          <div class="spinner-ring spinner-ring-2"></div>
          <div class="spinner-ring spinner-ring-3"></div>
        </div>

        <!-- Loading text -->
        <p class="loading-text">
          <span class="loading-dot">.</span>
          <span class="loading-dot loading-dot-2">.</span>
          <span class="loading-dot loading-dot-3">.</span>
        </p>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isLoading = ref(true)

onMounted(() => {
  // Hide loading screen after a short delay
  setTimeout(() => {
    isLoading.value = false
  }, 1500)
})
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.logo-container {
  position: relative;
  animation: logo-float 2s ease-in-out infinite;
}

.loading-logo {
  width: 200px;
  height: auto;
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 4px 20px rgba(79, 70, 229, 0.15));
}

.logo-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, transparent 70%);
  border-radius: 50%;
  animation: glow-pulse 2s ease-in-out infinite;
  z-index: 1;
}

/* Spinner rings */
.loading-spinner {
  position: relative;
  width: 60px;
  height: 60px;
}

.spinner-ring {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-top-color: #4f46e5;
  border-radius: 50%;
  animation: spin 1.2s linear infinite;
}

.spinner-ring-2 {
  width: 80%;
  height: 80%;
  top: 10%;
  left: 10%;
  border-top-color: #7c3aed;
  animation-duration: 1.5s;
  animation-direction: reverse;
}

.spinner-ring-3 {
  width: 60%;
  height: 60%;
  top: 20%;
  left: 20%;
  border-top-color: #a855f7;
  animation-duration: 1s;
}

/* Loading dots */
.loading-text {
  font-size: 2rem;
  color: #4f46e5;
  font-weight: 600;
  letter-spacing: 0.5em;
}

.loading-dot {
  animation: dot-bounce 1.4s ease-in-out infinite;
}

.loading-dot-2 {
  animation-delay: 0.2s;
}

.loading-dot-3 {
  animation-delay: 0.4s;
}

/* Animations */
@keyframes logo-float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes glow-pulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.5;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 0.8;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes dot-bounce {
  0%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
}

/* Fade transition */
.loading-fade-enter-active,
.loading-fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.loading-fade-enter-from,
.loading-fade-leave-to {
  opacity: 0;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .logo-container,
  .logo-glow,
  .spinner-ring,
  .loading-dot {
    animation: none;
  }
}
</style>
