<template>
  <div>
    <HeroHeader
      ref="heroRef"
      title="BuyGoods Vendor Offer Guide"
      subtitle="Complete step-by-step visual guide to structuring high-converting product offers"
      icon="🚀"
      :badges="['📊 7 Complete Steps', '📈 Industry Benchmarks', '🛡️ Legal Compliance']"
      @mousemove="handleHeroMouseMove"
    />

    <div class="container mx-auto px-4" style="margin-top: -50px; position: relative; z-index: 10; max-width: 70%;">
      <!-- Intro Card -->
      <div class="bg-white rounded-3xl p-10 shadow-xl mb-12 animate-fade-in-scale intro-card">
        <h2 class="text-2xl font-bold mb-4 flex items-center">
          <span class="text-blue-600 mr-2 intro-icon-circle">📚</span>
          Welcome to Your Complete Funnel Guide
        </h2>
        <p class="text-gray-600 mb-3">
          This educational guide shows you exactly how to structure a professional sales funnel on BuyGoods. Each step includes visual examples, best practices, conversion metrics, and common mistakes to avoid.
        </p>
        <p class="text-gray-600 mb-4">
          Follow this proven 7-step funnel structure to maximize your revenue per customer while maintaining high customer satisfaction.
        </p>

        <div class="alert-custom bg-gradient-to-br from-yellow-100 to-yellow-50 border-l-4 border-yellow-500 rounded-xl p-6 flex items-start">
          <span class="text-2xl text-yellow-600 mr-3 flex-shrink-0">⚠️</span>
          <div>
            <strong class="block mb-2">Important:</strong>
            This is an educational guide with placeholder content. When building your actual offers, replace all placeholders with your real product information, images, and copy.
          </div>
        </div>
      </div>

      <!-- Stats Row -->
      <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 my-10 animate-fade-in-up stats-row">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="text-center relative pb-3 group stat-item">
            <div ref="stat1" class="text-5xl font-extrabold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-125 stat-number">7</div>
            <div class="text-gray-600 text-sm font-semibold uppercase tracking-wide">Funnel Steps</div>
            <div class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-600"></div>
          </div>
          <div class="text-center relative pb-3 group stat-item">
            <div class="text-5xl font-extrabold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-125 stat-number">60-120%</div>
            <div class="text-gray-600 text-sm font-semibold uppercase tracking-wide">AOV Increase</div>
            <div class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-600"></div>
          </div>
          <div class="text-center relative pb-3 group stat-item">
            <div class="text-5xl font-extrabold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-125 stat-number">15-25%</div>
            <div class="text-gray-600 text-sm font-semibold uppercase tracking-wide">Refund Reduction</div>
            <div class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-600"></div>
          </div>
          <div class="text-center relative pb-3 group stat-item">
            <div class="text-5xl font-extrabold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-125 stat-number">2-5%</div>
            <div class="text-gray-600 text-sm font-semibold uppercase tracking-wide">VSL Conversion</div>
            <div class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-600"></div>
          </div>
        </div>
      </div>

      <!-- Section Title -->
      <h2 class="text-4xl font-extrabold text-center mb-12 bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent relative animate-fade-in-up section-title">
        <i class="bi bi-diagram-3-fill mr-2"></i>The Complete Funnel Structure
      </h2>

      <!-- Step Cards Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
        <StepCard
          :step-number="1"
          badge="STEP 1 OF 7"
          title="VSL Page"
          title-icon="▶️"
          description="Video Sales Letter page where you present your product through a compelling 50 minute video presentation."
          :features="[
            'Video player placement',
            'Timed button reveals',
            'Product display structure',
            'Trust elements'
          ]"
          metric-icon="📈"
          metric-label="Typical Conversion"
          metric-value="2-5% of viewers"
          link-to="/step1-vsl"
          link-text="View VSL Guide"
        />

        <StepCard
          :step-number="2"
          badge="STEP 2 OF 7"
          title="Upsell 1"
          subtitle="(same product, better deal)"
          title-icon="➕"
          description="First upsell offering additional bottles of the same product at a discounted rate immediately after checkout."
          :features="[
            'VIP upgrade messaging',
            'Discount pricing structure',
            'Urgency elements',
            'One-click acceptance'
          ]"
          metric-icon="💯"
          metric-label="Acceptance"
          metric-value="20-35% properly positioned"
          link-to="/step3-upsell1"
          link-text="View Upsell 1 Guide"
        />

        <StepCard
          :step-number="3"
          badge="STEP 3 OF 7"
          title="Downsell 1"
          subtitle="(smaller quantity, better price)"
          title-icon="⬇️"
          description="Recovery offer presenting a smaller quantity option for customers who declined the first upsell."
          :features="[
            'Last chance messaging',
            'Reduced quantity offer',
            'Better per-unit discount',
            'Simplified decision'
          ]"
          metric-icon="🔄"
          metric-label="Recovery"
          metric-value="15-25% of declined accept"
          link-to="/step4-downsell1"
          link-text="View Downsell 1 Guide"
        />

        <StepCard
          :step-number="4"
          badge="STEP 4 OF 7"
          title="Upsell 2"
          subtitle="(different product)"
          title-icon="📦"
          description="Cross-sell offer introducing a different but complementary product that enhances the main purchase."
          :features="[
            'Product pairing strategy',
            'Combination benefits',
            'Bundle pricing',
            'Enhanced results messaging'
          ]"
          metric-icon="⚡"
          metric-label="Acceptance"
          metric-value="15-30% for matched products"
          link-to="/step5-upsell2"
          link-text="View Upsell 2 Guide"
        />

        <StepCard
          :step-number="5"
          badge="STEP 5 OF 7"
          title="Downsell 2"
          subtitle="(trial/smaller complement)"
          title-icon="🎁"
          description="Final recovery offer with a smaller version or trial of the complementary product at the lowest price."
          :features="[
            'Final opportunity messaging',
            'Trial or starter size',
            'Absolute best price',
            'Last call-to-action'
          ]"
          metric-icon="👆"
          metric-label="Final Recovery"
          metric-value="10-20% take last offer"
          link-to="/step6-downsell2"
          link-text="View Downsell 2 Guide"
        />

        <StepCard
          :step-number="6"
          badge="STEP 6 OF 7"
          title="Thank You Page"
          title-icon="✅"
          description="Order confirmation page that sets proper expectations and reduces refund rates through clear communication."
          :features="[
            'Order confirmation',
            'Email notification notice',
            'Delivery timeline',
            'Support information'
          ]"
          metric-icon="🛡️"
          metric-label="Refund Reduction"
          metric-value="15-25% with proper page"
          link-to="/step7-thankyou"
          link-text="View Thank You Guide"
        />

        <StepCard
          :step-number="7"
          badge="STEP 7 OF 7 - REFERENCE"
          title="DTC/Checkout Page"
          title-icon="🛒"
          description="Direct-to-checkout page displaying all package options with pricing psychology and optimized conversion elements."
          :features="[
            '3-tier pricing structure',
            'Package positioning',
            'Order form optimization',
            'Trust badges'
          ]"
          metric-icon="🏆"
          metric-label="Best Value"
          metric-value="Sells 50-60% of the time"
          link-to="/step2-dtc"
          link-text="View Checkout Guide"
        />

        <StepCard
          number-icon="⚠️"
          badge="CRITICAL - LEGAL"
          title="Footer Requirements"
          title-icon="🔒"
          description="Essential legal compliance elements required on EVERY page to avoid account suspension and legal issues."
          :features="[
            'Privacy Policy link',
            'Terms & Conditions',
            'Refund Policy',
            'FDA disclaimers'
          ]"
          metric-icon="⚠️"
          metric-label="Warning"
          metric-value="Can result in suspension"
          link-to="/step8-footer"
          link-text="View Footer Requirements"
          custom-class="bg-gradient-to-br from-red-50 to-red-25 border-red-500 border-3"
          number-class="bg-red-500"
          badge-class="bg-red-500 text-white animate-pulse"
          metric-class="bg-gradient-to-br from-red-100 to-red-50 border border-red-200"
          metric-icon-class="text-red-500"
          metric-label-class="text-red-600"
          button-class="bg-red-500 text-white shadow-lg hover:bg-red-600"
        />

        <StepCard
          number-icon="▶️"
          badge="VSL DEMO"
          title="Advanced VSL Example"
          title-icon="🎬"
          description="See a fully animated VSL page with countdown timers, exit-intent popups, social proof counters, and professional animations."
          :features="[
            'Animated background particles',
            'Countdown timer & scarcity',
            'Exit-intent popup',
            'Sticky CTA bar'
          ]"
          metric-icon="⭐"
          metric-label="Advanced"
          metric-value="Professional animations"
          link-to="/example-vsl"
          link-text="View VSL Demo"
          custom-class="bg-gradient-to-br from-green-50 to-green-25 border-green-500"
          number-class="bg-gradient-to-br from-green-500 to-green-600"
          badge-class="bg-green-500 text-white"
          metric-class="bg-gradient-to-br from-green-100 to-green-50 border border-green-300"
          metric-icon-class="text-green-500"
          metric-label-class="text-green-600"
          button-class="bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg"
        />

        <StepCard
          number-icon="📄"
          badge="TSL DEMO"
          title="Text Sales Letter Example"
          title-icon="📰"
          description="Long-form text-based sales page with compelling copy, testimonials, FAQ section, and multiple CTAs throughout."
          :features="[
            'Long-form persuasive copy',
            'Multiple testimonials',
            'FAQ section',
            'Strategic CTA placement'
          ]"
          metric-icon="📖"
          metric-label="Alternative"
          metric-value="Text-based approach"
          link-to="/example-tsl"
          link-text="View TSL Demo"
          custom-class="bg-gradient-to-br from-purple-50 to-purple-25 border-purple-600"
          number-class="bg-gradient-to-br from-purple-600 to-purple-700"
          badge-class="bg-purple-600 text-white"
          metric-class="bg-gradient-to-br from-purple-100 to-purple-50 border border-purple-300"
          metric-icon-class="text-purple-600"
          metric-label-class="text-purple-600"
          button-class="bg-gradient-to-br from-purple-600 to-purple-700 text-white shadow-lg"
        />
      </div>

      <!-- How to Use This Guide -->
      <div class="bg-white rounded-3xl p-10 shadow-xl my-12 animate-fade-in-scale">
        <h2 class="text-2xl font-bold mb-6 flex items-center">
          <span class="text-yellow-500 mr-2">💡</span>
          How to Use This Guide
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="flex">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">1</div>
            </div>
            <div class="ml-3">
              <strong>Study Each Step:</strong>
              <p class="text-gray-600 mb-0">Click through each step to understand the structure, requirements, and best practices.</p>
            </div>
          </div>
          <div class="flex">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">2</div>
            </div>
            <div class="ml-3">
              <strong>Note the Metrics:</strong>
              <p class="text-gray-600 mb-0">Pay attention to conversion rates and benchmarks to set realistic expectations.</p>
            </div>
          </div>
          <div class="flex">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">3</div>
            </div>
            <div class="ml-3">
              <strong>Avoid Common Mistakes:</strong>
              <p class="text-gray-600 mb-0">Each page includes a section on mistakes to avoid based on real vendor data.</p>
            </div>
          </div>
          <div class="flex">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">4</div>
            </div>
            <div class="ml-3">
              <strong>Replace Placeholders:</strong>
              <p class="text-gray-600 mb-0">When building your funnel, replace all [ PLACEHOLDER ] elements with your actual content.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

useSeoMeta({
  title: 'BuyGoods Vendor Offer Guide - Complete Sales Funnel Structure',
  description: 'Complete step-by-step visual guide to structuring high-converting product offers'
})

const heroRef = ref(null)
const stat1 = ref(null)
let lastScrollY = 0

// Animate counter for stats
const animateCounter = (element: HTMLElement, target: number, duration: number = 2000) => {
  const start = 0
  const increment = target / (duration / 16)
  let current = start

  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      element.textContent = target.toString()
      clearInterval(timer)
    } else {
      element.textContent = Math.floor(current).toString()
    }
  }, 16)
}

// Handle hero parallax mouse move
const handleHeroMouseMove = (event: MouseEvent) => {
  if (!heroRef.value) return
  const hero = heroRef.value as HTMLElement
  const x = event.clientX / window.innerWidth
  const y = event.clientY / window.innerHeight

  // Create subtle parallax effect with gradient
  const xOffset = (x - 0.5) * 5
  const yOffset = (y - 0.5) * 5

  hero.style.backgroundPosition = `${50 + xOffset}% ${50 + yOffset}%`
}

// Set up intersection observer for animations
const setupObservers = () => {
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')

        // Animate stat numbers when visible
        if (entry.target.classList.contains('stat-number')) {
          const text = entry.target.textContent?.trim() || ''
          if (!text.includes('-')) {
            const num = parseInt(text)
            if (!isNaN(num)) {
              entry.target.textContent = '0'
              animateCounter(entry.target as HTMLElement, num)
            }
          }
        }
      }
    })
  }, observerOptions)

  // Observe all stat numbers
  const statNumbers = document.querySelectorAll('.stat-number')
  statNumbers.forEach(stat => observer.observe(stat))

  // Set up critical card special animation
  const criticalCard = document.querySelector('.critical-card')
  if (criticalCard) {
    let isHovering = false

    criticalCard.addEventListener('mouseenter', () => {
      isHovering = true
    })

    criticalCard.addEventListener('mouseleave', () => {
      isHovering = false
    })

    // Pulsing glow effect for critical card
    setInterval(() => {
      if (!isHovering) {
        (criticalCard as HTMLElement).style.boxShadow = '0 0 30px rgba(239, 68, 68, 0.3)'
        setTimeout(() => {
          if (!isHovering) {
            (criticalCard as HTMLElement).style.boxShadow = '0 20px 40px rgba(239, 68, 68, 0.15)'
          }
        }, 500)
      }
    }, 3000)
  }

  // Badge observer for pulse animation on view
  const badgeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).style.animation = 'pulse 1s ease-in-out'
        setTimeout(() => {
          (entry.target as HTMLElement).style.animation = ''
        }, 1000)
      }
    })
  }, { threshold: 0.5 })

  const badges = document.querySelectorAll('.step-badge')
  badges.forEach(badge => badgeObserver.observe(badge))
}

// Scroll effect on hero section
const handleScroll = () => {
  const scrollY = window.scrollY
  if (heroRef.value && scrollY < 500) {
    const hero = heroRef.value as HTMLElement
    hero.style.transform = `translateY(${scrollY * 0.5}px)`
    hero.style.opacity = (1 - scrollY / 500).toString()
  }
  lastScrollY = scrollY
}

// Typewriter effect for title (optional - kept from original)
const setupTypewriter = () => {
  const heroTitle = document.querySelector('.hero-header h1') as HTMLElement
  if (heroTitle && heroTitle.textContent) {
    const text = heroTitle.textContent
    heroTitle.textContent = ''
    heroTitle.style.opacity = '1'

    let i = 0
    const typeWriter = () => {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i)
        i++
        setTimeout(typeWriter, 50)
      }
    }

    setTimeout(typeWriter, 500)
  }
}

// Initialize smooth scroll behavior
const initSmoothScroll = () => {
  document.documentElement.style.scrollBehavior = 'smooth'
}

// Setup intro card circle pulse animation
const setupIntroCards = () => {
  const introIconCircles = document.querySelectorAll('.intro-icon-circle')
  introIconCircles.forEach(circle => {
    (circle as HTMLElement).style.animation = 'pulse 2s ease-in-out infinite'
  })

  // Setup rotation on hover
  const introCards = document.querySelectorAll('.intro-card')
  introCards.forEach(card => {
    card.addEventListener('mouseover', function() {
      const icon = this.querySelector('.intro-icon-circle') as HTMLElement
      if (icon) {
        icon.style.animation = 'none'
        icon.style.transform = 'scale(1.2) rotate(360deg)'
        icon.style.transition = 'all 0.3s ease'
      }
    })

    card.addEventListener('mouseout', function() {
      const icon = this.querySelector('.intro-icon-circle') as HTMLElement
      if (icon) {
        icon.style.animation = 'pulse 2s ease-in-out infinite'
        icon.style.transform = 'scale(1) rotate(0deg)'
      }
    })
  })
}

onMounted(() => {
  setupObservers()
  setupTypewriter()
  initSmoothScroll()
  setupIntroCards()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
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

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes loadBar {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 5px rgba(37, 99, 235, 0.5), 0 0 10px rgba(37, 99, 235, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(37, 99, 235, 0.8), 0 0 30px rgba(37, 99, 235, 0.5);
  }
}

@keyframes rotateSubtle {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(5deg);
  }
  75% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes shimmerMove {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes rocketFly {
  0% {
    transform: translate(0, 0) rotate(45deg) scale(1);
    opacity: 1;
  }
  5% {
    transform: translate(20px, -40px) rotate(50deg) scale(1.05);
  }
  10% {
    transform: translate(80px, -150px) rotate(60deg) scale(0.95);
  }
  15% {
    transform: translate(180px, -280px) rotate(70deg) scale(0.85);
  }
  20% {
    transform: translate(300px, -400px) rotate(80deg) scale(0.7);
    opacity: 0.9;
  }
  25% {
    transform: translate(420px, -480px) rotate(100deg) scale(0.6);
    opacity: 0.8;
  }
  30% {
    transform: translate(520px, -500px) rotate(120deg) scale(0.55);
    opacity: 0.7;
  }
  35% {
    transform: translate(600px, -480px) rotate(140deg) scale(0.6);
    opacity: 0.8;
  }
  40% {
    transform: translate(650px, -420px) rotate(160deg) scale(0.65);
  }
  45% {
    transform: translate(670px, -320px) rotate(180deg) scale(0.7);
    opacity: 0.85;
  }
  50% {
    transform: translate(650px, -200px) rotate(200deg) scale(0.75);
  }
  55% {
    transform: translate(600px, -100px) rotate(220deg) scale(0.8);
    opacity: 0.9;
  }
  60% {
    transform: translate(500px, -40px) rotate(230deg) scale(0.85);
  }
  65% {
    transform: translate(350px, -10px) rotate(240deg) scale(0.9);
  }
  70% {
    transform: translate(180px, -5px) rotate(250deg) scale(0.95);
  }
  75% {
    transform: translate(20px, -20px) rotate(260deg) scale(0.98);
  }
  80% {
    transform: translate(-80px, -60px) rotate(280deg) scale(1);
  }
  85% {
    transform: translate(-120px, -100px) rotate(300deg) scale(1.02);
  }
  90% {
    transform: translate(-80px, -80px) rotate(330deg) scale(1.05);
  }
  95% {
    transform: translate(-20px, -40px) rotate(380deg) scale(1.02);
  }
  100% {
    transform: translate(0, 0) rotate(405deg) scale(1);
    opacity: 1;
  }
}

@keyframes expandWidth {
  to {
    width: 100px;
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

.animate-fade-in-scale {
  animation: fadeInScale 0.8s ease-out;
}

.animate-load-bar {
  animation: loadBar 0.6s ease-out forwards;
  transform-origin: left;
}

.scale-125 {
  transform: scale(1.25);
}

.section-title {
  animation: fadeInUp 0.8s ease-out 0.5s backwards;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, #2563eb, #7c3aed);
  animation: expandWidth 1s ease-out 1s forwards;
}

.stats-row {
  animation: fadeInUp 0.8s ease-out 0.3s backwards;
}

.stat-item {
  animation: fadeInUp 1s ease-out forwards;
}

.stat-item:nth-child(1) {
  animation-delay: 0.5s;
}

.stat-item:nth-child(2) {
  animation-delay: 0.6s;
}

.stat-item:nth-child(3) {
  animation-delay: 0.7s;
}

.stat-item:nth-child(4) {
  animation-delay: 0.8s;
}

.intro-card {
  animation: fadeInScale 0.8s ease-out;
}

.intro-card:last-child {
  animation-delay: 1s;
}

.alert-custom {
  animation: fadeInUp 0.8s ease-out 0.4s backwards;
  transition: all 0.3s ease;
}

.alert-custom:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 16px rgba(245, 158, 11, 0.2);
}

/* Staggered animation delays for step cards */
.grid > :nth-child(1) .step-card { animation-delay: 0.1s; }
.grid > :nth-child(2) .step-card { animation-delay: 0.2s; }
.grid > :nth-child(3) .step-card { animation-delay: 0.3s; }
.grid > :nth-child(4) .step-card { animation-delay: 0.4s; }
.grid > :nth-child(5) .step-card { animation-delay: 0.5s; }
.grid > :nth-child(6) .step-card { animation-delay: 0.6s; }
.grid > :nth-child(7) .step-card { animation-delay: 0.7s; }
.grid > :nth-child(8) .step-card { animation-delay: 0.8s; }
.grid > :nth-child(9) .step-card { animation-delay: 0.9s; }
.grid > :nth-child(10) .step-card { animation-delay: 1s; }
</style>
