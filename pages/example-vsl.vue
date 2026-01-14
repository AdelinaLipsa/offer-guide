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

      <!-- Product Packages - Hidden Initially, Appears After Delay -->
      <div
        v-if="showCta"
        class="mb-12 animate-fade-in"
      >
        <!-- Package Selection Header -->
        <div class="text-center mb-8">
          <h2 class="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">Choose Your Package</h2>
          <p class="text-gray-400">Select the option that's right for you</p>
        </div>

        <!-- Pricing Packages -->
        <div class="flex flex-col md:flex-row gap-6 justify-center items-stretch mb-8">
          <!-- 1 Bottle -->
          <div class="bg-gray-900 border border-gray-700 rounded-sm p-6 text-center flex-1 max-w-xs mx-auto md:mx-0">
            <div class="text-gray-400 text-sm uppercase tracking-wide mb-2">Starter</div>
            <div class="text-5xl font-bold text-white mb-2">1</div>
            <div class="text-gray-400 mb-4">Bottle</div>
            <div class="text-gray-500 line-through text-sm mb-1">$99</div>
            <div class="text-3xl font-bold text-white mb-1">$69</div>
            <div class="text-gray-400 text-sm mb-4">30-Day Supply</div>
            <div class="text-green-500 text-sm mb-4">+ FREE Shipping</div>
            <button
              @click="handleOrderClick"
              class="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 rounded-sm transition-colors"
            >
              Add To Cart
            </button>
          </div>

          <!-- 3 Bottles - BEST VALUE -->
          <div class="bg-gray-900 border-2 border-yellow-400 rounded-sm p-6 text-center flex-1 max-w-xs mx-auto md:mx-0 relative">
            <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-sm text-sm font-bold">
              BEST VALUE
            </div>
            <div class="text-yellow-400 text-sm uppercase tracking-wide mb-2 mt-2">Most Popular</div>
            <div class="text-5xl font-bold text-white mb-2">3</div>
            <div class="text-gray-400 mb-4">Bottles</div>
            <div class="text-gray-500 line-through text-sm mb-1">$297</div>
            <div class="text-3xl font-bold text-yellow-400 mb-1">$147</div>
            <div class="text-gray-400 text-sm mb-2">90-Day Supply</div>
            <div class="text-yellow-400 text-sm mb-4">Save $150!</div>
            <div class="text-green-500 text-sm mb-4">+ FREE Shipping</div>
            <button
              @click="handleOrderClick"
              class="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 rounded-sm transition-colors"
            >
              Add To Cart
            </button>
          </div>

          <!-- 6 Bottles -->
          <div class="bg-gray-900 border border-gray-700 rounded-sm p-6 text-center flex-1 max-w-xs mx-auto md:mx-0">
            <div class="text-gray-400 text-sm uppercase tracking-wide mb-2">Best Deal</div>
            <div class="text-5xl font-bold text-white mb-2">6</div>
            <div class="text-gray-400 mb-4">Bottles</div>
            <div class="text-gray-500 line-through text-sm mb-1">$594</div>
            <div class="text-3xl font-bold text-white mb-1">$234</div>
            <div class="text-gray-400 text-sm mb-2">180-Day Supply</div>
            <div class="text-green-500 text-sm mb-4">Save $360!</div>
            <div class="text-green-500 text-sm mb-4">+ FREE Shipping</div>
            <button
              @click="handleOrderClick"
              class="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 rounded-sm transition-colors"
            >
              Add To Cart
            </button>
          </div>
        </div>

        <!-- Guarantee -->
        <div class="text-center text-gray-400 text-sm">
          <Icon name="lucide:shield-check" class="w-5 h-5 inline mr-1 text-green-500" />
          60-Day Money Back Guarantee - No Questions Asked
        </div>
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
      <div class="grid md:grid-cols-2 gap-6 mb-12">
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

      <!-- ==================== HOW IT WORKS ==================== -->
      <div class="mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-center text-white mb-3">How It Works</h2>
        <p class="text-gray-400 text-center mb-8 max-w-2xl mx-auto">Our revolutionary 3-step formula targets stubborn fat at the cellular level</p>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-gray-900 border border-gray-700 p-6 rounded-sm text-center">
            <div class="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-black font-bold text-2xl">1</span>
            </div>
            <h3 class="text-white font-bold text-lg mb-2">Activate Metabolism</h3>
            <p class="text-gray-400 text-sm">Proprietary blend jumpstarts your dormant metabolism within 24-48 hours of first dose</p>
          </div>
          <div class="bg-gray-900 border border-gray-700 p-6 rounded-sm text-center">
            <div class="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-black font-bold text-2xl">2</span>
            </div>
            <h3 class="text-white font-bold text-lg mb-2">Burn Fat 24/7</h3>
            <p class="text-gray-400 text-sm">Triggers thermogenesis so your body burns fat around the clock, even while sleeping</p>
          </div>
          <div class="bg-gray-900 border border-gray-700 p-6 rounded-sm text-center">
            <div class="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-black font-bold text-2xl">3</span>
            </div>
            <h3 class="text-white font-bold text-lg mb-2">Suppress Cravings</h3>
            <p class="text-gray-400 text-sm">Natural appetite control so you feel satisfied longer without constant hunger pangs</p>
          </div>
        </div>
      </div>

      <!-- ==================== INGREDIENTS ==================== -->
      <div class="mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-center text-white mb-3">Powerful Natural Ingredients</h2>
        <p class="text-gray-400 text-center mb-8">Backed by science, sourced from nature</p>

        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-gray-900 border border-gray-700 p-5 rounded-sm flex gap-4">
            <div class="w-12 h-12 bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
              <Icon name="lucide:leaf" class="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h4 class="text-white font-bold mb-1">Green Tea Extract (EGCG)</h4>
              <p class="text-gray-400 text-sm">Clinically proven to boost metabolism by up to 17% and enhance fat oxidation</p>
            </div>
          </div>
          <div class="bg-gray-900 border border-gray-700 p-5 rounded-sm flex gap-4">
            <div class="w-12 h-12 bg-orange-900 rounded-full flex items-center justify-center flex-shrink-0">
              <Icon name="lucide:flame" class="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <h4 class="text-white font-bold mb-1">Capsaicin Complex</h4>
              <p class="text-gray-400 text-sm">Thermogenic compound that increases calorie burn and reduces appetite naturally</p>
            </div>
          </div>
          <div class="bg-gray-900 border border-gray-700 p-5 rounded-sm flex gap-4">
            <div class="w-12 h-12 bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0">
              <Icon name="lucide:zap" class="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h4 class="text-white font-bold mb-1">Chromium Picolinate</h4>
              <p class="text-gray-400 text-sm">Regulates blood sugar levels to prevent energy crashes and sugar cravings</p>
            </div>
          </div>
          <div class="bg-gray-900 border border-gray-700 p-5 rounded-sm flex gap-4">
            <div class="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
              <Icon name="lucide:droplets" class="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h4 class="text-white font-bold mb-1">Garcinia Cambogia</h4>
              <p class="text-gray-400 text-sm">Contains HCA which blocks fat production and suppresses appetite hormones</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ==================== SCIENTIFIC BACKING ==================== -->
      <div class="mb-12 bg-gray-900 border border-gray-700 rounded-sm p-8">
        <div class="flex items-center justify-center gap-3 mb-6">
          <Icon name="lucide:microscope" class="w-8 h-8 text-yellow-400" />
          <h2 class="text-2xl font-bold text-white">Clinically Studied Formula</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8 text-center mb-8">
          <div>
            <div class="text-4xl font-bold text-yellow-400 mb-2">97%</div>
            <p class="text-gray-400 text-sm">of participants experienced significant weight loss in 90-day trial</p>
          </div>
          <div>
            <div class="text-4xl font-bold text-yellow-400 mb-2">3.5x</div>
            <p class="text-gray-400 text-sm">more fat burned compared to diet and exercise alone</p>
          </div>
          <div>
            <div class="text-4xl font-bold text-yellow-400 mb-2">28 lbs</div>
            <p class="text-gray-400 text-sm">average weight loss reported in clinical study participants</p>
          </div>
        </div>

        <div class="flex flex-wrap justify-center gap-6 text-gray-500 text-xs">
          <div class="flex items-center gap-2">
            <Icon name="lucide:file-check" class="w-4 h-4" />
            <span>Published in Journal of Nutritional Science</span>
          </div>
          <div class="flex items-center gap-2">
            <Icon name="lucide:award" class="w-4 h-4" />
            <span>FDA Registered Facility</span>
          </div>
          <div class="flex items-center gap-2">
            <Icon name="lucide:badge-check" class="w-4 h-4" />
            <span>GMP Certified</span>
          </div>
        </div>
      </div>

      <!-- ==================== BEFORE/AFTER TESTIMONIALS ==================== -->
      <div class="mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-center text-white mb-3">Real People, Real Results</h2>
        <p class="text-gray-400 text-center mb-8">See what our customers have achieved</p>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-gray-900 border border-gray-700 rounded-sm overflow-hidden">
            <div class="flex">
              <div class="flex-1 bg-gray-800 h-48 flex items-center justify-center text-gray-600 text-xs">
                [BEFORE Photo]
              </div>
              <div class="flex-1 bg-gray-700 h-48 flex items-center justify-center text-gray-400 text-xs">
                [AFTER Photo]
              </div>
            </div>
            <div class="p-4">
              <div class="flex text-yellow-400 mb-2">
                <Icon name="lucide:star" class="w-3 h-3 fill-current" />
                <Icon name="lucide:star" class="w-3 h-3 fill-current" />
                <Icon name="lucide:star" class="w-3 h-3 fill-current" />
                <Icon name="lucide:star" class="w-3 h-3 fill-current" />
                <Icon name="lucide:star" class="w-3 h-3 fill-current" />
              </div>
              <p class="text-white font-bold mb-1">Lost 34 lbs in 8 weeks!</p>
              <p class="text-gray-400 text-sm mb-2">"I've tried everything. This is the only thing that actually worked for my stubborn belly fat."</p>
              <p class="text-gray-500 text-xs">- Jennifer K., Age 45, California</p>
            </div>
          </div>

          <div class="bg-gray-900 border border-gray-700 rounded-sm overflow-hidden">
            <div class="flex">
              <div class="flex-1 bg-gray-800 h-48 flex items-center justify-center text-gray-600 text-xs">
                [BEFORE Photo]
              </div>
              <div class="flex-1 bg-gray-700 h-48 flex items-center justify-center text-gray-400 text-xs">
                [AFTER Photo]
              </div>
            </div>
            <div class="p-4">
              <div class="flex text-yellow-400 mb-2">
                <Icon name="lucide:star" class="w-3 h-3 fill-current" />
                <Icon name="lucide:star" class="w-3 h-3 fill-current" />
                <Icon name="lucide:star" class="w-3 h-3 fill-current" />
                <Icon name="lucide:star" class="w-3 h-3 fill-current" />
                <Icon name="lucide:star" class="w-3 h-3 fill-current" />
              </div>
              <p class="text-white font-bold mb-1">Down 3 pant sizes!</p>
              <p class="text-gray-400 text-sm mb-2">"My wife didn't recognize me at our anniversary dinner. Best investment I ever made."</p>
              <p class="text-gray-500 text-xs">- Robert T., Age 52, Ohio</p>
            </div>
          </div>

          <div class="bg-gray-900 border border-gray-700 rounded-sm overflow-hidden">
            <div class="flex">
              <div class="flex-1 bg-gray-800 h-48 flex items-center justify-center text-gray-600 text-xs">
                [BEFORE Photo]
              </div>
              <div class="flex-1 bg-gray-700 h-48 flex items-center justify-center text-gray-400 text-xs">
                [AFTER Photo]
              </div>
            </div>
            <div class="p-4">
              <div class="flex text-yellow-400 mb-2">
                <Icon name="lucide:star" class="w-3 h-3 fill-current" />
                <Icon name="lucide:star" class="w-3 h-3 fill-current" />
                <Icon name="lucide:star" class="w-3 h-3 fill-current" />
                <Icon name="lucide:star" class="w-3 h-3 fill-current" />
                <Icon name="lucide:star" class="w-3 h-3 fill-current" />
              </div>
              <p class="text-white font-bold mb-1">41 lbs gone forever!</p>
              <p class="text-gray-400 text-sm mb-2">"After menopause, I thought weight loss was impossible. This proved me wrong!"</p>
              <p class="text-gray-500 text-xs">- Linda M., Age 58, Arizona</p>
            </div>
          </div>
        </div>

        <p class="text-center text-gray-600 text-xs mt-4">*Results may vary. Testimonials are from real customers. Individual results depend on diet, exercise, and adherence.</p>
      </div>

      <!-- ==================== WHAT YOU GET ==================== -->
      <div class="mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-center text-white mb-3">Here's Everything You Get Today</h2>
        <p class="text-gray-400 text-center mb-8">When you order now, you'll receive:</p>

        <div class="bg-gray-900 border border-gray-700 rounded-sm p-6">
          <div class="space-y-4">
            <div class="flex items-start gap-4 pb-4 border-b border-gray-800">
              <Icon name="lucide:check-circle" class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div class="flex-grow">
                <h4 class="text-white font-bold">Premium Formula Supplement</h4>
                <p class="text-gray-400 text-sm">30/90/180 day supply depending on package selected</p>
              </div>
              <div class="text-gray-500 line-through text-sm">$99/bottle</div>
            </div>
            <div class="flex items-start gap-4 pb-4 border-b border-gray-800">
              <Icon name="lucide:check-circle" class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div class="flex-grow">
                <h4 class="text-white font-bold">Free Express Shipping</h4>
                <p class="text-gray-400 text-sm">Delivered to your door in 3-5 business days</p>
              </div>
              <div class="text-gray-500 line-through text-sm">$9.95</div>
            </div>
            <div class="flex items-start gap-4 pb-4 border-b border-gray-800">
              <Icon name="lucide:check-circle" class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div class="flex-grow">
                <h4 class="text-white font-bold">60-Day Money Back Guarantee</h4>
                <p class="text-gray-400 text-sm">100% refund if you're not completely satisfied</p>
              </div>
              <div class="text-green-500 text-sm font-bold">INCLUDED</div>
            </div>
            <div class="flex items-start gap-4 pb-4 border-b border-gray-800">
              <Icon name="lucide:check-circle" class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div class="flex-grow">
                <h4 class="text-white font-bold">24/7 Customer Support</h4>
                <p class="text-gray-400 text-sm">Email and phone support from our US-based team</p>
              </div>
              <div class="text-green-500 text-sm font-bold">INCLUDED</div>
            </div>
            <div class="flex items-start gap-4">
              <Icon name="lucide:check-circle" class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div class="flex-grow">
                <h4 class="text-white font-bold">Secure Checkout</h4>
                <p class="text-gray-400 text-sm">256-bit encryption protects your information</p>
              </div>
              <div class="text-green-500 text-sm font-bold">INCLUDED</div>
            </div>
          </div>
        </div>
      </div>

      <!-- ==================== FREE BONUSES ==================== -->
      <div class="mb-12">
        <div class="text-center mb-8">
          <span class="bg-red-600 text-white text-sm font-bold px-4 py-1 rounded-sm">LIMITED TIME ONLY</span>
          <h2 class="text-2xl md:text-3xl font-bold text-white mt-4 mb-2">FREE Bonuses Worth $297</h2>
          <p class="text-gray-400">Order today and get these digital bonuses instantly!</p>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-gradient-to-b from-gray-800 to-gray-900 border border-yellow-400/30 rounded-sm p-6 text-center">
            <div class="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-sm inline-block mb-4">BONUS #1</div>
            <div class="w-20 h-28 bg-gray-700 mx-auto mb-4 rounded flex items-center justify-center">
              <Icon name="lucide:book-open" class="w-10 h-10 text-gray-500" />
            </div>
            <h3 class="text-white font-bold mb-2">10-Day Rapid Fat Burn Guide</h3>
            <p class="text-gray-400 text-sm mb-3">Accelerate your results with these proven strategies</p>
            <p class="text-gray-500 text-sm"><span class="line-through">$47 Value</span> <span class="text-green-500 font-bold">FREE</span></p>
          </div>

          <div class="bg-gradient-to-b from-gray-800 to-gray-900 border border-yellow-400/30 rounded-sm p-6 text-center">
            <div class="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-sm inline-block mb-4">BONUS #2</div>
            <div class="w-20 h-28 bg-gray-700 mx-auto mb-4 rounded flex items-center justify-center">
              <Icon name="lucide:utensils" class="w-10 h-10 text-gray-500" />
            </div>
            <h3 class="text-white font-bold mb-2">Fat-Burning Recipe Book</h3>
            <p class="text-gray-400 text-sm mb-3">50+ delicious meals that boost metabolism</p>
            <p class="text-gray-500 text-sm"><span class="line-through">$67 Value</span> <span class="text-green-500 font-bold">FREE</span></p>
          </div>

          <div class="bg-gradient-to-b from-gray-800 to-gray-900 border border-yellow-400/30 rounded-sm p-6 text-center">
            <div class="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-sm inline-block mb-4">BONUS #3</div>
            <div class="w-20 h-28 bg-gray-700 mx-auto mb-4 rounded flex items-center justify-center">
              <Icon name="lucide:dumbbell" class="w-10 h-10 text-gray-500" />
            </div>
            <h3 class="text-white font-bold mb-2">5-Minute Metabolism Workouts</h3>
            <p class="text-gray-400 text-sm mb-3">Quick exercises to supercharge fat burning</p>
            <p class="text-gray-500 text-sm"><span class="line-through">$97 Value</span> <span class="text-green-500 font-bold">FREE</span></p>
          </div>
        </div>
      </div>

      <!-- ==================== COMPARISON TABLE ==================== -->
      <div class="mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-center text-white mb-8">Why Choose Us?</h2>

        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-gray-700">
                <th class="text-left text-gray-400 py-4 px-4"></th>
                <th class="text-center py-4 px-4">
                  <div class="bg-yellow-400 text-black font-bold py-2 px-4 rounded-t-sm">Our Formula</div>
                </th>
                <th class="text-center text-gray-400 py-4 px-4">Diet Pills</th>
                <th class="text-center text-gray-400 py-4 px-4">Gym Membership</th>
                <th class="text-center text-gray-400 py-4 px-4">Surgery</th>
              </tr>
            </thead>
            <tbody class="text-gray-300">
              <tr class="border-b border-gray-800">
                <td class="py-4 px-4 text-gray-400">Proven Results</td>
                <td class="py-4 px-4 text-center"><Icon name="lucide:check" class="w-5 h-5 text-green-500 mx-auto" /></td>
                <td class="py-4 px-4 text-center"><Icon name="lucide:x" class="w-5 h-5 text-red-500 mx-auto" /></td>
                <td class="py-4 px-4 text-center text-gray-500">Varies</td>
                <td class="py-4 px-4 text-center"><Icon name="lucide:check" class="w-5 h-5 text-green-500 mx-auto" /></td>
              </tr>
              <tr class="border-b border-gray-800">
                <td class="py-4 px-4 text-gray-400">No Side Effects</td>
                <td class="py-4 px-4 text-center"><Icon name="lucide:check" class="w-5 h-5 text-green-500 mx-auto" /></td>
                <td class="py-4 px-4 text-center"><Icon name="lucide:x" class="w-5 h-5 text-red-500 mx-auto" /></td>
                <td class="py-4 px-4 text-center"><Icon name="lucide:check" class="w-5 h-5 text-green-500 mx-auto" /></td>
                <td class="py-4 px-4 text-center"><Icon name="lucide:x" class="w-5 h-5 text-red-500 mx-auto" /></td>
              </tr>
              <tr class="border-b border-gray-800">
                <td class="py-4 px-4 text-gray-400">Affordable</td>
                <td class="py-4 px-4 text-center"><Icon name="lucide:check" class="w-5 h-5 text-green-500 mx-auto" /></td>
                <td class="py-4 px-4 text-center"><Icon name="lucide:check" class="w-5 h-5 text-green-500 mx-auto" /></td>
                <td class="py-4 px-4 text-center text-gray-500">$50+/mo</td>
                <td class="py-4 px-4 text-center text-gray-500">$10,000+</td>
              </tr>
              <tr class="border-b border-gray-800">
                <td class="py-4 px-4 text-gray-400">No Time Required</td>
                <td class="py-4 px-4 text-center"><Icon name="lucide:check" class="w-5 h-5 text-green-500 mx-auto" /></td>
                <td class="py-4 px-4 text-center"><Icon name="lucide:check" class="w-5 h-5 text-green-500 mx-auto" /></td>
                <td class="py-4 px-4 text-center"><Icon name="lucide:x" class="w-5 h-5 text-red-500 mx-auto" /></td>
                <td class="py-4 px-4 text-center text-gray-500">Recovery</td>
              </tr>
              <tr>
                <td class="py-4 px-4 text-gray-400">Money Back Guarantee</td>
                <td class="py-4 px-4 text-center"><Icon name="lucide:check" class="w-5 h-5 text-green-500 mx-auto" /></td>
                <td class="py-4 px-4 text-center text-gray-500">Rare</td>
                <td class="py-4 px-4 text-center"><Icon name="lucide:x" class="w-5 h-5 text-red-500 mx-auto" /></td>
                <td class="py-4 px-4 text-center"><Icon name="lucide:x" class="w-5 h-5 text-red-500 mx-auto" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- ==================== FAQ SECTION ==================== -->
      <div class="mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-center text-white mb-8">Frequently Asked Questions</h2>

        <div class="space-y-4 max-w-3xl mx-auto">
          <div class="bg-gray-900 border border-gray-700 rounded-sm">
            <button class="w-full text-left p-5 flex items-center justify-between" @click="toggleFaq(1)">
              <span class="text-white font-medium">How quickly will I see results?</span>
              <Icon :name="activeFaq === 1 ? 'lucide:minus' : 'lucide:plus'" class="w-5 h-5 text-yellow-400" />
            </button>
            <div v-if="activeFaq === 1" class="px-5 pb-5 text-gray-400 text-sm">
              Most customers report noticeable changes within the first 2-3 weeks. However, results vary based on individual factors like metabolism, diet, and activity level. For best results, we recommend consistent use for at least 90 days.
            </div>
          </div>

          <div class="bg-gray-900 border border-gray-700 rounded-sm">
            <button class="w-full text-left p-5 flex items-center justify-between" @click="toggleFaq(2)">
              <span class="text-white font-medium">Is this safe to take with my medications?</span>
              <Icon :name="activeFaq === 2 ? 'lucide:minus' : 'lucide:plus'" class="w-5 h-5 text-yellow-400" />
            </button>
            <div v-if="activeFaq === 2" class="px-5 pb-5 text-gray-400 text-sm">
              Our formula uses 100% natural ingredients with no known drug interactions. However, if you're taking prescription medications or have a medical condition, we always recommend consulting with your healthcare provider before starting any new supplement.
            </div>
          </div>

          <div class="bg-gray-900 border border-gray-700 rounded-sm">
            <button class="w-full text-left p-5 flex items-center justify-between" @click="toggleFaq(3)">
              <span class="text-white font-medium">What if it doesn't work for me?</span>
              <Icon :name="activeFaq === 3 ? 'lucide:minus' : 'lucide:plus'" class="w-5 h-5 text-yellow-400" />
            </button>
            <div v-if="activeFaq === 3" class="px-5 pb-5 text-gray-400 text-sm">
              We're so confident you'll love your results that we offer a full 60-day money-back guarantee. If you're not completely satisfied for any reason, simply contact our customer support team for a full refund - no questions asked.
            </div>
          </div>

          <div class="bg-gray-900 border border-gray-700 rounded-sm">
            <button class="w-full text-left p-5 flex items-center justify-between" @click="toggleFaq(4)">
              <span class="text-white font-medium">How do I take it?</span>
              <Icon :name="activeFaq === 4 ? 'lucide:minus' : 'lucide:plus'" class="w-5 h-5 text-yellow-400" />
            </button>
            <div v-if="activeFaq === 4" class="px-5 pb-5 text-gray-400 text-sm">
              Simply take 2 capsules daily with a glass of water - one in the morning and one in the afternoon. For optimal results, take 20-30 minutes before meals. No complicated schedules or special diets required.
            </div>
          </div>

          <div class="bg-gray-900 border border-gray-700 rounded-sm">
            <button class="w-full text-left p-5 flex items-center justify-between" @click="toggleFaq(5)">
              <span class="text-white font-medium">How long will shipping take?</span>
              <Icon :name="activeFaq === 5 ? 'lucide:minus' : 'lucide:plus'" class="w-5 h-5 text-yellow-400" />
            </button>
            <div v-if="activeFaq === 5" class="px-5 pb-5 text-gray-400 text-sm">
              We offer FREE shipping on all orders. US orders typically arrive within 3-5 business days. International orders may take 7-14 business days depending on your location. You'll receive tracking information via email once your order ships.
            </div>
          </div>
        </div>
      </div>

      <!-- ==================== MONEY BACK GUARANTEE ==================== -->
      <div class="mb-12 bg-gradient-to-r from-green-900/30 to-green-800/30 border border-green-700 rounded-sm p-8">
        <div class="flex flex-col md:flex-row items-center gap-6">
          <div class="flex-shrink-0">
            <div class="w-32 h-32 bg-green-900 rounded-full flex items-center justify-center border-4 border-green-500">
              <div class="text-center">
                <Icon name="lucide:shield-check" class="w-10 h-10 text-green-400 mx-auto mb-1" />
                <div class="text-green-400 font-bold text-sm">60-DAY</div>
              </div>
            </div>
          </div>
          <div>
            <h3 class="text-2xl font-bold text-white mb-3">100% Money-Back Guarantee</h3>
            <p class="text-gray-300 mb-4">
              We're so confident that you'll love your results that we're offering a full 60-day money-back guarantee.
              Try it risk-free for 60 days, and if you're not completely satisfied with your transformation,
              simply contact us for a full refund. No questions asked, no hassles.
            </p>
            <p class="text-green-400 font-medium">Your purchase is protected. You have nothing to lose!</p>
          </div>
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

// FAQ state
const activeFaq = ref<number | null>(null)

const toggleFaq = (id: number) => {
  activeFaq.value = activeFaq.value === id ? null : id
}

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
