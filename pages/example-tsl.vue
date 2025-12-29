<template>
  <div class="bg-white min-h-screen">
    <!-- Alert Bar (Sticky) -->
    <div class="sticky top-0 z-50 w-full bg-gradient-to-r from-red-500 to-orange-500 text-white text-center py-3 px-4 font-bold text-base shadow-lg">
      🔥 <strong>LIMITED TIME:</strong> 60% OFF Special Offer Ends In <span id="timer" class="inline-block">02:47:33</span>
    </div>

    <!-- Main Container -->
    <div class="max-w-3xl mx-auto px-4 py-10">
      <!-- Main Headline Section -->
      <div class="text-center py-10 px-5 mb-10 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl">
        <div class="text-red-600 text-sm font-bold uppercase tracking-widest mb-5">
          From the Desk of Dr. Michael Thompson, PhD
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight font-serif">
          The <span class="text-blue-600 relative inline-block">
            Shocking Discovery
            <span class="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-blue-300 to-purple-300 opacity-30"></span>
          </span> That's Helping Thousands Drop 20-30 Pounds in Just 60 Days...
        </h1>
        <p class="text-2xl text-gray-600 font-light mb-0">
          Without starving yourself, spending hours at the gym, or giving up your favorite foods
        </p>
      </div>

      <!-- Letter Content Introduction -->
      <div class="mb-12 text-lg leading-relaxed text-gray-900">
        <p class="mb-6"><strong>Dear Friend,</strong></p>
        <p class="mb-6">
          If you've struggled with weight loss and nothing seems to work... if you've tried every diet, every pill, every "miracle cure" on the market and you're still carrying around stubborn pounds that won't budge... then <strong>this might be the most important letter you'll ever read.</strong>
        </p>
        <p class="mb-6">
          Because in the next few minutes, I'm going to reveal a <em class="text-red-600 font-italic">scientifically proven breakthrough</em> that's helping men and women just like you finally lose the weight they've been fighting for years.
        </p>
        <p class="mb-0">
          And it has nothing to do with starvation diets, grueling workouts, or expensive weight loss programs.
        </p>
      </div>

      <!-- Featured Image -->
      <div class="text-center mb-12">
        <img
          src="https://placehold.co/800x500/2563eb/ffffff?text=BEFORE+%26+AFTER+TRANSFORMATION"
          alt="Before and After Transformation"
          class="w-full max-w-2xl rounded-3xl shadow-2xl mx-auto mb-4"
        />
        <p class="text-gray-500 italic text-sm">Real customer results (Individual results may vary)</p>
      </div>

      <!-- Problem Box -->
      <div class="relative bg-white border-l-6 border-red-500 p-12 mb-12 rounded-3xl shadow-2xl shadow-red-100 overflow-hidden">
        <div class="absolute top-8 right-8 text-8xl opacity-5 font-bold">⚠</div>
        <h3 class="text-3xl font-bold text-red-600 mb-6 flex items-center gap-4">
          <span class="text-5xl">❌</span>
          Why Traditional Approaches Often Fall Short
        </h3>
        <p class="mb-5 text-lg leading-relaxed">
          Most weight loss programs focus exclusively on caloric restriction and increased activity. While these factors matter, research shows they address only part of the equation.
        </p>
        <p class="mb-5 text-lg leading-relaxed">
          <strong>Studies indicate that metabolic efficiency, hormonal balance, and nutrient absorption</strong> play crucial roles in sustainable weight management—yet most programs ignore these factors entirely.
        </p>
        <p class="text-lg leading-relaxed">
          Without addressing these underlying mechanisms, many people find themselves in a frustrating cycle of temporary results followed by weight regain.
        </p>
      </div>

      <!-- Solution Box -->
      <div class="relative bg-white border-l-6 border-emerald-500 p-12 mb-12 rounded-3xl shadow-2xl shadow-emerald-100 overflow-hidden">
        <div class="absolute top-8 right-8 text-8xl opacity-5 font-bold">✓</div>
        <h3 class="text-3xl font-bold text-emerald-600 mb-6 flex items-center gap-4">
          <span class="flex items-center justify-center w-16 h-16 bg-emerald-500 text-white rounded-full text-3xl">✓</span>
          A Comprehensive Support System
        </h3>
        <p class="mb-5 text-lg leading-relaxed">
          Our formulation combines research-backed ingredients selected for their roles in metabolic function, appetite regulation, and energy production. Each component has been studied in clinical settings for its potential benefits.
        </p>
        <p class="text-lg leading-relaxed">
          <strong>The approach is designed to:</strong> Support your body's natural processes while you maintain healthy eating habits and appropriate activity levels. This isn't about quick fixes—it's about sustainable support for your wellness journey.
        </p>
      </div>

      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
          Here's What You'll Experience:
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded mx-auto mb-8"></div>
      </div>

      <!-- Benefits List -->
      <ul class="mb-12 space-y-4">
        <li class="bg-white p-5 rounded-xl shadow-md border-l-4 border-emerald-500 hover:translate-x-2.5 transition-transform">
          <strong class="text-lg">Week 1-2:</strong> Notice increased energy levels and reduced cravings for sugary foods
        </li>
        <li class="bg-white p-5 rounded-xl shadow-md border-l-4 border-emerald-500 hover:translate-x-2.5 transition-transform">
          <strong class="text-lg">Week 3-4:</strong> See the scale start dropping as your metabolism kicks into high gear
        </li>
        <li class="bg-white p-5 rounded-xl shadow-md border-l-4 border-emerald-500 hover:translate-x-2.5 transition-transform">
          <strong class="text-lg">Week 5-8:</strong> Watch as stubborn belly fat melts away and your clothes fit looser
        </li>
        <li class="bg-white p-5 rounded-xl shadow-md border-l-4 border-emerald-500 hover:translate-x-2.5 transition-transform">
          <strong class="text-lg">Week 9-12:</strong> Achieve your goal weight and maintain it effortlessly
        </li>
      </ul>

      <!-- Callout Box -->
      <div class="bg-yellow-50 border-l-6 border-orange-400 p-8 mb-12 rounded-xl shadow-md">
        <h3 class="text-2xl font-bold text-gray-900 mb-4">
          The Science Behind the Breakthrough
        </h3>
        <p class="mb-4 text-gray-900">
          MetaBoost Pro contains a proprietary blend of 8 clinically-studied ingredients that work synergistically to:
        </p>
        <ul class="space-y-2 text-gray-900">
          <li class="flex items-start">
            <span class="mr-3 font-bold">•</span>
            <span>Activate dormant fat-burning hormones</span>
          </li>
          <li class="flex items-start">
            <span class="mr-3 font-bold">•</span>
            <span>Suppress appetite naturally without stimulants</span>
          </li>
          <li class="flex items-start">
            <span class="mr-3 font-bold">•</span>
            <span>Boost metabolism by up to 37%</span>
          </li>
          <li class="flex items-start">
            <span class="mr-3 font-bold">•</span>
            <span>Block the formation of new fat cells</span>
          </li>
        </ul>
      </div>

      <!-- Testimonial 1 -->
      <div class="relative bg-white p-10 mb-12 rounded-3xl shadow-xl">
        <div class="absolute top-5 left-5 text-7xl text-blue-300 opacity-20 font-serif">"</div>
        <p class="text-xl italic mb-8 relative z-10 text-gray-900">
          "I've lost 32 pounds in just 8 weeks! I can't believe how easy it was. No crazy diets, no spending hours at the gym. I just took MetaBoost Pro every morning and the weight literally melted off. This product changed my life!"
        </p>
        <div class="flex items-center gap-5">
          <img
            src="https://i.pravatar.cc/150?img=1"
            alt="Sarah M."
            class="w-20 h-20 rounded-full border-4 border-blue-600"
          />
          <div>
            <h4 class="text-xl font-bold text-gray-900">Sarah M., Los Angeles</h4>
            <div class="text-yellow-400 text-lg">★★★★★</div>
            <p class="text-gray-500 text-sm">Verified Buyer</p>
          </div>
        </div>
      </div>

      <!-- Scarcity Box -->
      <div class="relative bg-white border-2 border-orange-400 p-12 mb-12 rounded-3xl shadow-xl overflow-hidden">
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-red-500"></div>
        <h3 class="text-3xl font-bold text-gray-900 mb-4 text-center">
          ⚠️ URGENT: Limited Supply Alert
        </h3>
        <p class="text-center text-gray-600 mb-4">Due to overwhelming demand and ingredient scarcity, we only have</p>
        <div id="stockCount" class="text-7xl font-black text-center bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
          247
        </div>
        <p class="text-center text-gray-900 font-bold"><strong>bottles remaining in stock today</strong></p>
      </div>

      <!-- CTA Section 1 -->
      <div class="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-12 mb-12 rounded-3xl shadow-2xl text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 font-serif">
          Special Limited-Time Pricing
        </h2>
        <p class="text-xl mb-8">
          For a limited time, you can get MetaBoost Pro at an exclusive 60% discount - but only if you act now!
        </p>
        <button
          @click="scrollToPricing"
          class="bg-white text-blue-600 px-16 py-6 rounded-full font-black text-2xl shadow-xl hover:-translate-y-1 transition-transform inline-block"
        >
          Claim Your Discount Now →
        </button>
        <p class="text-white opacity-90 mt-6 flex items-center justify-center gap-2">
          <span>🛡️</span> Protected by our 60-Day Money-Back Guarantee
        </p>
      </div>

      <!-- Pricing Section -->
      <div id="pricing" class="mb-12 scroll-mt-20">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
            Choose Your Package
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded mx-auto mb-6"></div>
          <p class="text-gray-600">Select the package that's right for you and SAVE UP TO 60%</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Starter Package -->
          <div class="bg-white border-3 border-gray-200 p-10 rounded-3xl text-center hover:-translate-y-2.5 transition-transform">
            <h4 class="text-2xl font-bold text-gray-900 mb-2">Starter</h4>
            <p class="text-gray-600 mb-6">1 Month Supply</p>
            <div class="text-2xl text-gray-400 line-through mb-2">$99</div>
            <div class="text-5xl font-black text-blue-600 mb-4">$69</div>
            <p class="text-gray-600 mb-8">$69 per bottle</p>
            <button
              @click="handleOrderClick"
              class="w-full bg-blue-600 text-white font-black text-lg py-4 rounded-full hover:bg-blue-700 transition-colors"
            >
              Order Now
            </button>
          </div>

          <!-- Best Value (Featured) -->
          <div class="relative bg-white border-3 border-blue-600 p-10 rounded-3xl text-center transform scale-105 hover:scale-110 transition-transform shadow-2xl">
            <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold">
              MOST POPULAR
            </div>
            <h4 class="text-2xl font-bold text-gray-900 mb-2">Best Value</h4>
            <p class="text-gray-600 mb-6">3 Month Supply</p>
            <div class="text-2xl text-gray-400 line-through mb-2">$297</div>
            <div class="text-5xl font-black text-blue-600 mb-4">$147</div>
            <p class="text-gray-600 mb-2">Only $49 per bottle</p>
            <p class="text-emerald-600 font-bold text-lg mb-8">SAVE $150!</p>
            <button
              @click="handleOrderClick"
              class="w-full bg-blue-600 text-white font-black text-lg py-4 rounded-full hover:bg-blue-700 transition-colors"
            >
              Order Now
            </button>
          </div>

          <!-- Ultimate Package -->
          <div class="bg-white border-3 border-gray-200 p-10 rounded-3xl text-center hover:-translate-y-2.5 transition-transform">
            <h4 class="text-2xl font-bold text-gray-900 mb-2">Ultimate</h4>
            <p class="text-gray-600 mb-6">6 Month Supply</p>
            <div class="text-2xl text-gray-400 line-through mb-2">$594</div>
            <div class="text-5xl font-black text-blue-600 mb-4">$234</div>
            <p class="text-gray-600 mb-2">Only $39 per bottle</p>
            <p class="text-emerald-600 font-bold text-lg mb-8">SAVE $360!</p>
            <button
              @click="handleOrderClick"
              class="w-full bg-blue-600 text-white font-black text-lg py-4 rounded-full hover:bg-blue-700 transition-colors"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>

      <!-- Guarantee Section -->
      <div class="bg-gradient-to-br from-emerald-100 to-emerald-50 border-4 border-emerald-500 p-12 mb-12 rounded-3xl text-center">
        <div class="w-40 h-40 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 border-8 border-white shadow-lg">
          <span class="text-3xl font-black text-white text-center leading-tight">60 DAY<br/>GUARANTEE</span>
        </div>
        <h3 class="text-3xl font-bold text-emerald-600 mb-6 font-serif">100% Satisfaction Guaranteed</h3>
        <p class="text-xl text-gray-900">
          Try MetaBoost Pro completely risk-free for 60 days. If you don't see dramatic results, simply return your bottles (even if they're empty) for a full refund. No questions asked.
        </p>
      </div>

      <!-- Testimonial 2 -->
      <div class="relative bg-white p-10 mb-12 rounded-3xl shadow-xl">
        <div class="absolute top-5 left-5 text-7xl text-blue-300 opacity-20 font-serif">"</div>
        <p class="text-xl italic mb-8 relative z-10 text-gray-900">
          "As a busy executive, I don't have time for complicated diet plans. MetaBoost Pro made it incredibly simple. I lost 28 pounds in 10 weeks while still eating the foods I love. My doctor is amazed at my transformation!"
        </p>
        <div class="flex items-center gap-5">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="John D."
            class="w-20 h-20 rounded-full border-4 border-blue-600"
          />
          <div>
            <h4 class="text-xl font-bold text-gray-900">John D., New York</h4>
            <div class="text-yellow-400 text-lg">★★★★★</div>
            <p class="text-gray-500 text-sm">Verified Buyer</p>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="mb-12">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
            Frequently Asked Questions
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded mx-auto"></div>
        </div>

        <div class="space-y-6">
          <div class="bg-white border-2 border-gray-200 p-6 rounded-2xl hover:border-blue-600 hover:shadow-md transition-all">
            <div class="font-bold text-xl text-gray-900 mb-3">Q: How quickly will I see results?</div>
            <div class="text-gray-700">
              A: Most customers notice increased energy and reduced cravings within the first week. Visible weight loss typically begins in weeks 2-3, with dramatic results by week 8.
            </div>
          </div>

          <div class="bg-white border-2 border-gray-200 p-6 rounded-2xl hover:border-blue-600 hover:shadow-md transition-all">
            <div class="font-bold text-xl text-gray-900 mb-3">Q: Is MetaBoost Pro safe?</div>
            <div class="text-gray-700">
              A: Absolutely! MetaBoost Pro is manufactured in an FDA-approved facility and contains only natural, clinically-tested ingredients. It's non-GMO, gluten-free, and has no known side effects.
            </div>
          </div>

          <div class="bg-white border-2 border-gray-200 p-6 rounded-2xl hover:border-blue-600 hover:shadow-md transition-all">
            <div class="font-bold text-xl text-gray-900 mb-3">Q: Do I need to diet or exercise?</div>
            <div class="text-gray-700">
              A: No! While a healthy lifestyle is always beneficial, MetaBoost Pro works independently. Many customers achieve dramatic results without changing their diet or exercise routine.
            </div>
          </div>

          <div class="bg-white border-2 border-gray-200 p-6 rounded-2xl hover:border-blue-600 hover:shadow-md transition-all">
            <div class="font-bold text-xl text-gray-900 mb-3">Q: What if it doesn't work for me?</div>
            <div class="text-gray-700">
              A: We offer a 60-day money-back guarantee. If you're not completely satisfied, return your bottles for a full refund - no questions asked.
            </div>
          </div>
        </div>
      </div>

      <!-- Final CTA Section -->
      <div class="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-12 mb-12 rounded-3xl shadow-2xl text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 font-serif">
          Ready to Transform Your Body?
        </h2>
        <p class="text-xl mb-8">
          Join thousands of satisfied customers who've already discovered the MetaBoost Pro difference
        </p>
        <button
          @click="scrollToPricing"
          class="bg-white text-blue-600 px-16 py-6 rounded-full font-black text-2xl shadow-xl hover:-translate-y-1 transition-transform inline-block mb-6"
        >
          Order MetaBoost Pro Now →
        </button>
        <p class="text-white opacity-90 flex items-center justify-center gap-4 text-sm flex-wrap justify-center">
          <span>🔒 Secure Checkout</span>
          <span>•</span>
          <span>🚚 Free Shipping</span>
          <span>•</span>
          <span>🛡️ 60-Day Guarantee</span>
        </p>
      </div>

      <!-- Final Testimonial -->
      <div class="relative bg-white p-10 mb-12 rounded-3xl shadow-xl">
        <div class="absolute top-5 left-5 text-7xl text-blue-300 opacity-20 font-serif">"</div>
        <p class="text-xl italic mb-8 relative z-10 text-gray-900">
          "I was skeptical at first, but MetaBoost Pro exceeded all my expectations. I've lost 41 pounds in 12 weeks and I feel 20 years younger. This is not just a product - it's a life-changer!"
        </p>
        <div class="flex items-center gap-5">
          <img
            src="https://i.pravatar.cc/150?img=5"
            alt="Emily R."
            class="w-20 h-20 rounded-full border-4 border-blue-600"
          />
          <div>
            <h4 class="text-xl font-bold text-gray-900">Emily R., Chicago</h4>
            <div class="text-yellow-400 text-lg">★★★★★</div>
            <p class="text-gray-500 text-sm">Verified Buyer</p>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="mt-20 pt-8 border-t-2 border-gray-200 text-center text-gray-600 text-sm">
        <p class="mb-6">
          <strong>DISCLAIMER:</strong> Individual results may vary. These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
        </p>
        <div class="mb-6 flex flex-wrap justify-center gap-4">
          <a href="#" class="text-blue-600 hover:text-blue-700">Privacy Policy</a>
          <a href="#" class="text-blue-600 hover:text-blue-700">Terms & Conditions</a>
          <a href="#" class="text-blue-600 hover:text-blue-700">Refund Policy</a>
          <a href="#" class="text-blue-600 hover:text-blue-700">Contact Us</a>
        </div>
        <p>© 2024 MetaBoost Pro. All Rights Reserved.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// SEO Meta Setup
useSeoMeta({
  title: 'TSL Example: The Ultimate Weight Loss Breakthrough | BuyGoods Offer Guide',
  description: 'Text Sales Letter (TSL) example page with long-form copy, testimonials, FAQ, and strategic CTAs for high-converting product offers'
})

// Timer countdown logic
function updateTimer() {
  const timer = document.getElementById('timer')
  if (!timer) return

  let [hours, minutes, seconds] = timer.textContent!.split(':').map(Number)

  seconds--
  if (seconds < 0) {
    seconds = 59
    minutes--
  }
  if (minutes < 0) {
    minutes = 59
    hours--
  }
  if (hours < 0) {
    hours = 0
    minutes = 0
    seconds = 0
  }

  timer.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

// Stock counter logic
function updateStockCount() {
  const stockCount = document.getElementById('stockCount')
  if (!stockCount) return

  const current = parseInt(stockCount.textContent || '247')
  if (current > 200) {
    stockCount.textContent = String(current - 1)
  }
}

// Scroll to pricing section
function scrollToPricing() {
  const pricing = document.getElementById('pricing')
  if (pricing) {
    pricing.scrollIntoView({ behavior: 'smooth' })
  }
}

// Handle order button clicks
function handleOrderClick() {
  alert('This is a demo! In production, this would redirect to checkout.')
}

// Initialize timers and listeners on mount
onMounted(() => {
  // Start timer
  setInterval(updateTimer, 1000)

  // Start stock counter (decreases every 30 seconds)
  setInterval(updateStockCount, 30000)

  // Add smooth scroll behavior to all anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href')
      if (href && href !== '#' && !href.includes('http')) {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' })
        }
      }
    })
  })
})
</script>

<style scoped>
/* Custom border utilities not in Tailwind */
.border-l-6 {
  border-left-width: 6px;
}

.border-l-4 {
  border-left-width: 4px;
}

/* Font family for serif elements */
.font-serif {
  font-family: 'Merriweather', Georgia, serif;
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Enhanced hover effects */
button:hover {
  transition: all 0.3s ease;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  :deep(.text-4xl) {
    @apply text-3xl;
  }

  :deep(.text-5xl) {
    @apply text-3xl;
  }

  :deep(.text-2xl) {
    @apply text-xl;
  }
}

/* Smooth transitions */
* {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

button {
  transition-duration: 300ms;
}
</style>
