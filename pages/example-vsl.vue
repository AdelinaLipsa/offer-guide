<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Back Link -->
    <div class="absolute top-4 left-4 z-10">
      <NuxtLink to="/step1-vsl" class="text-gray-500 hover:text-gray-300 text-sm flex items-center gap-1 transition-colors">
        <Icon name="lucide:arrow-left" class="w-4 h-4" />
        Back to Guide
      </NuxtLink>
    </div>

    <!-- Minimal Header - No Navigation -->
    <div class="text-center pt-8 pb-4 px-4">
      <p class="text-gray-400 text-sm uppercase tracking-widest mb-2">Free Presentation</p>
    </div>

    <!-- Main VSL Container -->
    <div class="w-[80%] mx-auto">
      <!-- Headline -->
      <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 leading-tight">
        <span class="text-yellow-400">EXPOSED:</span> The <span class="text-yellow-400">"Forbidden"</span>
        Weight Loss Secret Big Pharma Doesn't Want You To Know...
      </h1>

      <!-- Video Container -->
      <div class="relative mb-8">
        <!-- Fake Video Player -->
        <div class="bg-gray-900 aspect-video rounded-sm overflow-hidden border border-gray-700">
          <!-- Video Placeholder -->
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center">
              <!-- Play Button -->
              <button
                v-if="!isPlaying"
                @click="playVideo"
                class="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors mb-4 mx-auto"
              >
                <div class="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1"></div>
              </button>
              <p v-if="!isPlaying" class="text-gray-400 text-sm">Click to play video</p>

              <!-- Playing State -->
              <div v-else class="text-gray-400">
                <p class="text-lg mb-2">Video is playing...</p>
                <p class="text-sm">(Demo: Video would play here)</p>
              </div>
            </div>
          </div>

          <!-- Progress Bar -->
          <div v-if="isPlaying" class="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
            <div
              class="h-full bg-red-600 transition-all duration-1000"
              :style="{ width: videoProgress + '%' }"
            ></div>
          </div>
        </div>

        <!-- Sound Notice -->
        <div class="flex items-center justify-center gap-2 mt-4 text-gray-400 text-sm">
          <Icon name="lucide:volume-2" class="w-4 h-4" />
          <span>Make sure your sound is on. Please wait for the video to fully load.</span>
        </div>
      </div>

      <!-- CTA Button - Hidden Initially, Appears After Delay -->
      <div
        v-if="showCta"
        class="text-center mb-12 animate-fade-in"
      >
        <button
          @click="handleOrderClick"
          class="bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-xl md:text-2xl px-12 py-5 rounded-sm transition-colors uppercase tracking-wide"
        >
          Yes! I Want This Now
        </button>
        <p class="text-gray-500 text-sm mt-4">
          Click above to claim your discount before it expires
        </p>
      </div>

      <!-- Waiting Message (shows before CTA) -->
      <div v-else class="text-center mb-12">
        <p class="text-gray-500 text-sm">
          <span v-if="isPlaying">The order button will appear below once you've watched the video...</span>
          <span v-else>Press play to watch this special presentation</span>
        </p>
      </div>
    </div>

    <!-- Below-Video Social Proof (appears with CTA) -->
    <div v-if="showCta" class="w-[80%] mx-auto pb-12">
      <!-- Trust Badges -->
      <div class="flex flex-wrap justify-center gap-6 mb-8 text-gray-400 text-sm">
        <div class="flex items-center gap-2">
          <Icon name="lucide:shield-check" class="w-5 h-5 text-green-500" />
          <span>Secure Order</span>
        </div>
        <div class="flex items-center gap-2">
          <Icon name="lucide:lock" class="w-5 h-5 text-green-500" />
          <span>256-bit SSL</span>
        </div>
        <div class="flex items-center gap-2">
          <Icon name="lucide:refresh-ccw" class="w-5 h-5 text-green-500" />
          <span>60-Day Guarantee</span>
        </div>
      </div>

      <!-- Urgency Bar -->
      <div class="bg-red-900/50 border border-red-700 rounded-sm p-4 text-center mb-8">
        <p class="text-red-300">
          <Icon name="lucide:alert-triangle" class="w-4 h-4 inline mr-1" />
          <strong>WARNING:</strong> Due to high demand, we cannot guarantee this price after today.
          <span class="text-white font-semibold">{{ stockCount }} bottles remaining</span>
        </p>
      </div>

      <!-- Simple Testimonials -->
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-gray-900 border border-gray-700 p-6 rounded-sm">
          <div class="flex text-yellow-400 mb-3">
            <Icon name="lucide:star" class="w-4 h-4 fill-current" />
            <Icon name="lucide:star" class="w-4 h-4 fill-current" />
            <Icon name="lucide:star" class="w-4 h-4 fill-current" />
            <Icon name="lucide:star" class="w-4 h-4 fill-current" />
            <Icon name="lucide:star" class="w-4 h-4 fill-current" />
          </div>
          <p class="text-gray-300 italic mb-4">"I lost 23 lbs in the first month. This actually works unlike anything else I've tried!"</p>
          <p class="text-gray-500 text-sm">- Sarah M., Texas</p>
        </div>
        <div class="bg-gray-900 border border-gray-700 p-6 rounded-sm">
          <div class="flex text-yellow-400 mb-3">
            <Icon name="lucide:star" class="w-4 h-4 fill-current" />
            <Icon name="lucide:star" class="w-4 h-4 fill-current" />
            <Icon name="lucide:star" class="w-4 h-4 fill-current" />
            <Icon name="lucide:star" class="w-4 h-4 fill-current" />
            <Icon name="lucide:star" class="w-4 h-4 fill-current" />
          </div>
          <p class="text-gray-300 italic mb-4">"My doctor couldn't believe my results. Down 31 lbs and my energy is through the roof."</p>
          <p class="text-gray-500 text-sm">- Michael R., Florida</p>
        </div>
      </div>

      <!-- Final CTA -->
      <div class="text-center">
        <button
          @click="handleOrderClick"
          class="bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-lg px-10 py-4 rounded-sm transition-colors uppercase tracking-wide"
        >
          Get Instant Access Now
        </button>
      </div>
    </div>

    <!-- Minimal Footer -->
    <div class="border-t border-gray-800 py-8 px-4 text-center text-gray-600 text-xs">
      <p class="mb-4">
        DISCLAIMER: Individual results may vary. These statements have not been evaluated by the FDA.
        This product is not intended to diagnose, treat, cure, or prevent any disease.
      </p>
      <div class="flex justify-center gap-4">
        <a href="#" class="hover:text-gray-400">Privacy</a>
        <a href="#" class="hover:text-gray-400">Terms</a>
        <a href="#" class="hover:text-gray-400">Contact</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

useSeoMeta({
  title: 'Special Presentation - Limited Time Offer',
  description: 'Watch this free presentation to discover the breakthrough weight loss method'
})

// Video state
const isPlaying = ref(false)
const videoProgress = ref(0)
const showCta = ref(false)
const stockCount = ref(47)

let progressInterval: ReturnType<typeof setInterval>
let ctaTimeout: ReturnType<typeof setTimeout>
let stockInterval: ReturnType<typeof setInterval>

const playVideo = () => {
  isPlaying.value = true

  // Simulate video progress
  progressInterval = setInterval(() => {
    if (videoProgress.value < 100) {
      videoProgress.value += 0.5
    }
  }, 100)

  // Show CTA after 5 seconds (simulating video reaching price reveal)
  ctaTimeout = setTimeout(() => {
    showCta.value = true
  }, 5000)
}

const handleOrderClick = () => {
  alert('Demo: This would redirect to checkout in production.')
}

// Decrease stock count periodically
const startStockCountdown = () => {
  stockInterval = setInterval(() => {
    if (stockCount.value > 10) {
      stockCount.value--
    }
  }, 45000)
}

onMounted(() => {
  startStockCountdown()
})

onUnmounted(() => {
  clearInterval(progressInterval)
  clearTimeout(ctaTimeout)
  clearInterval(stockInterval)
})
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out forwards;
}
</style>
