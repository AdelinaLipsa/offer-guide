<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 overflow-hidden">
    <!-- Animated Background Particles -->
    <div
      class="fixed top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden"
      ref="particlesContainer"
    />

    <!-- Alert Bar -->
    <div
      class="fixed top-0 left-0 right-0 bg-gradient-to-r from-red-500 to-amber-500 text-white px-5 py-3 text-center z-9999 font-semibold shadow-lg animate-slideDown"
    >
      <span class="inline-block w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
      <strong>LIMITED TIME OFFER:</strong> 60% OFF + Free Shipping Ends Soon!
    </div>

    <!-- Main Container -->
    <div class="container mx-auto px-4 pt-24 pb-12 max-w-6xl relative z-10">
      <!-- Headline Section -->
      <div class="text-center mb-12 px-5">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fadeInDown">
          Discover the Breakthrough That's Helping Thousands Lose 20-30 Pounds in Just 60 Days
        </h1>
        <p class="text-lg sm:text-2xl text-gray-600 mb-8 animate-fadeInUp animation-delay-300">
          Watch this exclusive presentation to learn the scientifically-proven method that targets stubborn fat cells...
        </p>
        <div class="flex flex-wrap justify-center gap-6 sm:gap-8 animate-fadeInUp animation-delay-600">
          <div class="flex items-center gap-2 text-gray-600">
            <i class="bi bi-shield-check-fill text-green-500 text-xl" />
            <span>FDA Approved Facility</span>
          </div>
          <div class="flex items-center gap-2 text-gray-600">
            <i class="bi bi-star-fill text-yellow-400 text-xl" />
            <span>4.9/5 from 12,847 reviews</span>
          </div>
          <div class="flex items-center gap-2 text-gray-600">
            <i class="bi bi-truck-fill text-green-500 text-xl" />
            <span>Free Shipping</span>
          </div>
        </div>
      </div>

      <!-- Video Section -->
      <div class="max-w-4xl mx-auto mb-12 relative bg-black rounded-2xl overflow-hidden shadow-2xl animate-scaleIn animation-delay-900">
        <div class="absolute top-5 left-5 bg-black/70 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 z-10">
          <span class="inline-block w-2 h-2 bg-red-500 rounded-full animate-blink" />
          <span id="viewerCount">2,847</span> people watching now
        </div>
        <div class="relative w-full" style="padding-bottom: 56.25%">
          <iframe
            id="videoPlayer"
            class="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0"
            title="Product Video Sales Letter"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <div id="progressBar" class="absolute bottom-0 left-0 h-1 bg-green-500 w-0 transition-all duration-300 z-10" />
      </div>

      <!-- Countdown Timer -->
      <div class="bg-gradient-to-b from-amber-100 to-amber-50 border-4 border-amber-500 rounded-2xl p-8 max-w-3xl mx-auto mb-16 text-center shadow-lg animate-bounceIn animate-pulse-border">
        <h3 class="text-2xl sm:text-3xl font-black text-red-600 mb-6 animate-shake">
          <i class="bi bi-alarm-fill" /> Special Offer Expires In:
        </h3>
        <div class="flex justify-center gap-4 sm:gap-6 flex-wrap">
          <div class="bg-white px-6 sm:px-8 py-5 rounded-xl shadow-md">
            <div class="text-4xl sm:text-5xl font-black text-red-600 leading-none">{{ hours }}</div>
            <div class="text-xs sm:text-sm text-gray-600 mt-2 font-semibold uppercase tracking-widest">Hours</div>
          </div>
          <div class="bg-white px-6 sm:px-8 py-5 rounded-xl shadow-md">
            <div class="text-4xl sm:text-5xl font-black text-red-600 leading-none">{{ minutes }}</div>
            <div class="text-xs sm:text-sm text-gray-600 mt-2 font-semibold uppercase tracking-widest">Minutes</div>
          </div>
          <div class="bg-white px-6 sm:px-8 py-5 rounded-xl shadow-md">
            <div class="text-4xl sm:text-5xl font-black text-red-600 leading-none">{{ seconds }}</div>
            <div class="text-xs sm:text-sm text-gray-600 mt-2 font-semibold uppercase tracking-widest">Seconds</div>
          </div>
        </div>
      </div>

      <!-- Product Section -->
      <div class="mb-20">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fadeInUp">
          Choose Your Package &amp; Save Up To 60%
        </h2>

        <div class="grid md:grid-cols-3 gap-8 perspective">
          <!-- Basic Package -->
          <div
            class="bg-white border-4 border-gray-200 rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 flex flex-col"
            :class="{ 'md:scale-100': true }"
          >
            <div class="text-center mb-6">
              <img
                src="https://placehold.co/200x300/e5e7eb/6b7280?text=1+Bottle"
                alt="1 Bottle"
                class="w-32 h-auto mx-auto transition-transform duration-300"
              >
            </div>
            <h3 class="text-2xl font-black mb-2 text-gray-900">Basic Package</h3>
            <p class="text-gray-600 mb-6">30-Day Supply</p>
            <div class="text-center mb-6 flex-grow">
              <div class="text-gray-600 line-through text-xl mb-2">$99.00</div>
              <div class="text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pricePop">$69</div>
              <p class="text-gray-600 text-base mt-2">$69 per bottle</p>
            </div>
            <button
              class="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white py-5 px-8 rounded-full font-black text-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl uppercase tracking-wider"
              @click="handleBuyClick"
            >
              Add to Cart <i class="bi bi-arrow-right ml-2 animate-arrowMove" />
            </button>
          </div>

          <!-- Popular Package -->
          <div
            class="bg-white border-4 border-blue-600 rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 flex flex-col relative bg-gradient-to-br from-blue-50 to-transparent md:scale-110 md:z-20"
          >
            <div class="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest shadow-lg animate-bounce">
              Most Popular
            </div>
            <div class="absolute top-5 -right-3 bg-green-500 text-white px-4 py-2 font-bold text-sm transform rotate-12 shadow-md animate-wiggle">
              SAVE $150!
            </div>
            <div class="text-center mb-6">
              <img
                src="https://placehold.co/300x300/2563eb/ffffff?text=3+Bottles"
                alt="3 Bottles"
                class="w-40 h-auto mx-auto transition-transform duration-300"
              >
            </div>
            <h3 class="text-2xl font-black mb-2 text-gray-900">Best Value</h3>
            <p class="text-gray-600 mb-6">90-Day Supply</p>
            <div class="text-center mb-6 flex-grow">
              <div class="text-gray-600 line-through text-xl mb-2">$297.00</div>
              <div class="text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pricePopDelay">$147</div>
              <p class="text-gray-600 text-base mt-2">Only $49 per bottle</p>
            </div>
            <button
              class="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white py-5 px-8 rounded-full font-black text-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl uppercase tracking-wider"
              @click="handleBuyClick"
            >
              Add to Cart <i class="bi bi-arrow-right ml-2 animate-arrowMove" />
            </button>
          </div>

          <!-- Premium Package -->
          <div
            class="bg-white border-4 border-gray-200 rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 flex flex-col"
          >
            <div class="absolute top-5 -right-3 bg-green-500 text-white px-4 py-2 font-bold text-sm transform rotate-12 shadow-md animate-wiggle">
              SAVE $360!
            </div>
            <div class="text-center mb-6">
              <img
                src="https://placehold.co/400x300/7c3aed/ffffff?text=6+Bottles"
                alt="6 Bottles"
                class="w-40 h-auto mx-auto transition-transform duration-300"
              >
            </div>
            <h3 class="text-2xl font-black mb-2 text-gray-900">Ultimate Package</h3>
            <p class="text-gray-600 mb-6">180-Day Supply</p>
            <div class="text-center mb-6 flex-grow">
              <div class="text-gray-600 line-through text-xl mb-2">$594.00</div>
              <div class="text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pricePopDelay2">$234</div>
              <p class="text-gray-600 text-base mt-2">Only $39 per bottle</p>
            </div>
            <button
              class="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white py-5 px-8 rounded-full font-black text-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl uppercase tracking-wider"
              @click="handleBuyClick"
            >
              Add to Cart <i class="bi bi-arrow-right ml-2 animate-arrowMove" />
            </button>
          </div>
        </div>
      </div>

      <!-- Social Proof -->
      <div class="bg-white rounded-2xl p-10 max-w-4xl mx-auto mb-20 shadow-lg">
        <h3 class="text-3xl font-black text-center mb-10 text-gray-900">Trusted by Thousands Worldwide</h3>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
            <div class="text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {{ happyCustomers }}
            </div>
            <div class="text-gray-600 text-sm font-semibold uppercase tracking-widest mt-3">Happy Customers</div>
          </div>
          <div class="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
            <div class="text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {{ successRate }}%
            </div>
            <div class="text-gray-600 text-sm font-semibold uppercase tracking-widest mt-3">Success Rate</div>
          </div>
          <div class="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
            <div class="text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {{ avgPoundsLost }}
            </div>
            <div class="text-gray-600 text-sm font-semibold uppercase tracking-widest mt-3">Pounds Lost (Avg)</div>
          </div>
        </div>
      </div>

      <!-- Testimonials -->
      <div class="mb-20 max-w-4xl mx-auto">
        <h2 class="text-3xl sm:text-4xl font-black text-center mb-10 text-gray-900">Real Results From Real People</h2>
        <div class="bg-white rounded-2xl p-8 sm:p-10 shadow-lg">
          <div class="text-2xl text-yellow-400 mb-6">★★★★★</div>
          <p class="text-lg italic text-gray-700 mb-6">
            "I've tried everything to lose weight, but nothing worked until I found MetaBoost Pro. I lost 32 pounds in 8 weeks without changing my diet drastically. This product is a game-changer!"
          </p>
          <div class="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/60?img=1"
              alt="Sarah Johnson"
              class="w-16 h-16 rounded-full"
            >
            <div>
              <strong class="text-lg text-gray-900 block">Sarah Johnson</strong>
              <p class="text-gray-600">Los Angeles, CA</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sticky CTA Bar -->
    <div
      class="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 shadow-2xl transition-transform duration-500 z-9997"
      :class="showStickyCta ? 'translate-y-0' : 'translate-y-full'"
    >
      <div class="max-w-6xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="text-white text-lg sm:text-xl font-black">
          🔥 Limited Time: 60% OFF + Free Shipping
        </div>
        <button
          class="bg-white text-blue-600 px-8 py-3 rounded-full font-black whitespace-nowrap transition-all duration-300 hover:scale-105 hover:shadow-lg"
          @click="scrollToProducts"
        >
          Claim Your Discount Now
        </button>
      </div>
    </div>

    <!-- Exit Intent Popup -->
    <Teleport to="body">
      <div
        v-if="showExitPopup"
        class="fixed inset-0 bg-black/80 z-50000 flex items-center justify-center p-4 animate-fadeIn"
        @click.self="closeExitPopup"
      >
        <div class="bg-white rounded-2xl p-8 sm:p-12 max-w-2xl w-full relative animate-popIn">
          <button
            class="absolute top-4 right-4 text-gray-600 text-3xl hover:text-gray-900 transition-colors"
            @click="closeExitPopup"
          >
            ×
          </button>
          <h2 class="text-3xl sm:text-4xl font-black text-red-600 mb-6 text-center">
            Wait! Don't Miss Out!
          </h2>
          <p class="text-lg sm:text-2xl text-center mb-8 text-gray-700">
            Take an additional <strong class="text-red-600">10% OFF</strong> your order if you complete your purchase in the next 5 minutes!
          </p>
          <button
            class="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white py-5 px-8 rounded-full font-black text-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl uppercase tracking-wider max-w-md mx-auto block"
            @click="closeExitPopup"
          >
            Claim My Extra 10% OFF
          </button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// SEO Meta
useSeoMeta({
  title: 'VSL Example: MetaBoost Pro - Advanced Animation Demo',
  description: 'Professional video sales letter with advanced interactive features including countdown timer, particles, exit popups, and animations',
  ogTitle: 'VSL Example: MetaBoost Pro',
  ogDescription: 'See how to build a high-converting VSL with advanced features',
  ogImage: 'https://placehold.co/1200x630/2563eb/ffffff?text=VSL+Example'
})

// Countdown Timer
const hours = ref('00')
const minutes = ref('00')
const seconds = ref('00')

// Social Proof Counters
const happyCustomers = ref(0)
const successRate = ref(0)
const avgPoundsLost = ref(0)

// UI State
const showStickyCta = ref(false)
const showExitPopup = ref(false)
const exitIntentShown = ref(false)

// DOM Refs
const particlesContainer = ref<HTMLDivElement | null>(null)

// Create animated particles
const createParticles = () => {
  if (!particlesContainer.value) return

  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div')
    particle.className = 'absolute rounded-full opacity-30 animate-float-particle'
    particle.style.width = Math.random() * 100 + 50 + 'px'
    particle.style.height = particle.style.width
    particle.style.left = Math.random() * 100 + '%'
    particle.style.top = Math.random() * 100 + '%'
    particle.style.background = `radial-gradient(circle, rgba(37, 99, 235, 0.1), transparent)`
    particle.style.animation = `float-particle ${Math.random() * 10 + 15}s infinite`
    particle.style.animationDelay = Math.random() * 20 + 's'
    particlesContainer.value.appendChild(particle)
  }
}

// Start countdown timer
const startCountdown = () => {
  const endTime = new Date().getTime() + 2 * 60 * 60 * 1000 // 2 hours from now

  const timer = setInterval(() => {
    const now = new Date().getTime()
    const distance = endTime - now

    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const s = Math.floor((distance % (1000 * 60)) / 1000)

    hours.value = String(h).padStart(2, '0')
    minutes.value = String(m).padStart(2, '0')
    seconds.value = String(s).padStart(2, '0')

    if (distance < 0) {
      clearInterval(timer)
      hours.value = '00'
      minutes.value = '00'
      seconds.value = '00'
    }
  }, 1000)
}

// Animate counters
const animateCounter = (initialValue: number, finalValue: number, ref: any) => {
  const duration = 2000
  const increment = finalValue / (duration / 16)
  let current = initialValue

  const timer = setInterval(() => {
    current += increment
    if (current >= finalValue) {
      ref.value = finalValue
      clearInterval(timer)
    } else {
      ref.value = Math.floor(current)
    }
  }, 16)
}

// Handle scroll for sticky CTA
const handleScroll = () => {
  showStickyCta.value = window.scrollY > 1000
}

// Handle exit intent
const handleMouseLeave = (e: MouseEvent) => {
  if (e.clientY < 50 && !exitIntentShown.value) {
    showExitPopup.value = true
    exitIntentShown.value = true
  }
}

// Close exit popup
const closeExitPopup = () => {
  showExitPopup.value = false
}

// Scroll to products
const scrollToProducts = () => {
  const element = document.querySelector('.grid')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Handle buy click
const handleBuyClick = () => {
  alert('This is a demo! In production, this would redirect to checkout.')
}

// Update viewer count
const updateViewerCount = () => {
  const viewerCountEl = document.getElementById('viewerCount')
  if (viewerCountEl) {
    const current = parseInt(viewerCountEl.textContent?.replace(',', '') || '2847')
    const change = Math.floor(Math.random() * 20) - 10
    const newCount = Math.max(2500, current + change)
    viewerCountEl.textContent = newCount.toLocaleString()
  }
}

// Simulate video progress
const simulateVideoProgress = () => {
  const progressBar = document.getElementById('progressBar')
  if (!progressBar) return

  let progress = 0
  const interval = setInterval(() => {
    if (progress < 100) {
      progress += 0.5
      progressBar.style.width = progress + '%'
    } else {
      clearInterval(interval)
    }
  }, 1000)
}

// Lifecycle hooks
onMounted(() => {
  createParticles()
  startCountdown()
  animateCounter(0, 12847, happyCustomers)
  animateCounter(0, 98, successRate)
  animateCounter(0, 27, avgPoundsLost)

  window.addEventListener('scroll', handleScroll)
  document.addEventListener('mouseleave', handleMouseLeave)

  // Update viewer count every 5 seconds
  const viewerInterval = setInterval(updateViewerCount, 5000)

  // Simulate video progress
  simulateVideoProgress()

  // Cleanup on unmount
  return () => {
    window.removeEventListener('scroll', handleScroll)
    document.removeEventListener('mouseleave', handleMouseLeave)
    clearInterval(viewerInterval)
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('mouseleave', handleMouseLeave)
})
</script>

<style scoped>
@keyframes float-particle {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translate(100px, -100px) scale(1.5);
    opacity: 0.1;
  }
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.3);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
  }
  70% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-10px);
  }
  75% {
    transform: translateX(10px);
  }
}

@keyframes pulseBorder {
  0%, 100% {
    box-shadow: 0 10px 30px rgba(245, 158, 11, 0.3);
  }
  50% {
    box-shadow: 0 10px 40px rgba(245, 158, 11, 0.5);
  }
}

@keyframes pricePopAnimation {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-8px);
  }
}

@keyframes wiggle {
  0%, 100% {
    transform: rotate(15deg);
  }
  25% {
    transform: rotate(10deg);
  }
  75% {
    transform: rotate(20deg);
  }
}

@keyframes arrowMoveAnimation {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(5px);
  }
}

@keyframes fadeInAnimation {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes popInAnimation {
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-slideDown {
  animation: slideDown 0.5s ease-out;
}

.animate-fadeInDown {
  animation: fadeInDown 1s ease-out;
}

.animate-fadeInUp {
  animation: fadeInUp 1s ease-out;
}

.animate-scaleIn {
  animation: scaleIn 1s ease-out;
}

.animate-bounceIn {
  animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.animate-shake {
  animation: shake 0.5s ease;
}

.animate-pulse-border {
  animation: pulseBorder 2s infinite;
}

.animate-pricePopAnimation {
  animation: pricePopAnimation 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.animate-pricePopDelay {
  animation: pricePopAnimation 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.2s forwards;
  opacity: 0;
}

.animate-pricePopDelay2 {
  animation: pricePopAnimation 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.4s forwards;
  opacity: 0;
}

.animate-blink {
  animation: blink 1.5s infinite;
}

.animate-bounce {
  animation: bounce 2s infinite;
}

.animate-wiggle {
  animation: wiggle 3s infinite;
}

.animate-arrowMove {
  animation: arrowMoveAnimation 1s infinite;
}

.animate-fadeIn {
  animation: fadeInAnimation 0.3s ease;
}

.animate-popIn {
  animation: popInAnimation 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.animation-delay-300 {
  animation-delay: 0.3s;
  animation-fill-mode: backwards;
}

.animation-delay-600 {
  animation-delay: 0.6s;
  animation-fill-mode: backwards;
}

.animation-delay-900 {
  animation-delay: 0.9s;
  animation-fill-mode: backwards;
}

.perspective {
  perspective: 1000px;
}

.animate-float-particle {
  animation: float-particle 20s infinite;
}

/* Bootstrap Icons fallback */
.bi {
  display: inline-block;
  font-size: 1em;
  vertical-align: -0.125em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}
</style>
