<template>
  <div>
    <Navbar :breadcrumbs="['Step 1: VSL Page']" />
    <Sidebar :current-step="1" />

    <div class="page-content">
      <div class="header">
        <div class="step-badge">STEP 1 OF 7</div>
        <h1>VSL Page (Video Sales Letter)</h1>
        <p>The foundation of your funnel - Present your product through a compelling video presentation</p>
      </div>

      <div class="container mx-auto px-4 py-12" style="max-width: 90%;">
      <!-- What is a VSL Page -->
      <div class="bg-white rounded-2xl p-8 shadow-lg mb-8">
        <div class="flex items-center mb-6">
          <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
            1
          </div>
          <h2 class="text-3xl font-bold text-gray-900">What is a VSL Page?</h2>
        </div>
        <p class="text-gray-700 text-lg leading-relaxed mb-4">
          A Video Sales Letter (VSL) page is the entry point of your sales funnel where prospects watch a 50 minute video presentation about your product. This page is designed to educate, build desire, and ultimately convince viewers to purchase your product.
        </p>
        <p class="text-gray-700 text-lg leading-relaxed mb-6">
          The VSL format works because it allows you to tell a complete story, build emotional connection, present scientific evidence, and overcome objections - all before asking for the sale.
        </p>

        <div class="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
          <h3 class="font-bold text-lg mb-2 text-gray-900">Why VSL Works:</h3>
          <p class="text-gray-700">
            Video presentations convert 2-5% of viewers into buyers, which is significantly higher than text-only sales pages. The extended format allows you to build trust and thoroughly present your value proposition.
          </p>
        </div>
      </div>

      <!-- Visual Structure -->
      <div class="bg-white rounded-2xl p-8 shadow-lg mb-8">
        <div class="flex items-center mb-6">
          <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
            2
          </div>
          <h2 class="text-3xl font-bold text-gray-900">Visual Structure</h2>
        </div>
        <p class="text-gray-700 text-lg leading-relaxed mb-6">
          Here's how your VSL page should be structured from top to bottom:
        </p>

        <div class="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8">
          <h3 class="text-gray-900 font-bold text-xl text-center mb-6">Page Layout Preview</h3>

          <!-- Headline Preview -->
          <div class="text-center mb-8">
            <div class="text-3xl font-bold text-gray-900 mb-3">
              Discover the Secret to [Desired Outcome]
            </div>
            <div class="text-lg text-gray-600">
              Watch this short presentation to learn how [Product Name] can help you...
            </div>
          </div>

          <!-- Video Placeholder -->
          <div class="bg-black rounded-lg p-20 mb-8 text-center">
            <div class="text-white text-lg font-semibold mb-3">[ VSL VIDEO PLAYER HERE ]</div>
            <div class="text-gray-400 text-sm">50 minute sales video</div>
          </div>

          <!-- Button Timing Note -->
          <div class="mb-8 p-5 bg-red-50 rounded-lg border border-red-200">
            <p class="text-gray-700 text-sm italic">
              ⏰ Buy buttons appear here ONLY after video completes (after 50 minutes)
            </p>
          </div>

          <!-- Post-Video Section -->
          <div class="mt-8">
            <div class="text-center font-semibold text-gray-700 mb-6">After video ends, this section appears:</div>

            <!-- Product Bottles -->
            <div class="flex gap-5 justify-center mb-8 flex-wrap">
              <div class="bg-white border-2 border-gray-200 rounded-lg p-5 w-52 text-center">
                <div class="bg-gray-100 h-32 flex items-center justify-center rounded-lg mb-3 text-gray-600 font-medium">[ PRODUCT IMAGE ]</div>
                <div class="font-semibold mb-2 text-gray-900">1 Bottle</div>
                <div class="text-gray-600 text-sm">30-Day Supply</div>
              </div>

              <div class="bg-blue-50 border-2 border-blue-600 rounded-lg p-5 w-52 text-center">
                <div class="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold mb-3 inline-block">MOST POPULAR</div>
                <div class="bg-gray-100 h-32 flex items-center justify-center rounded-lg mb-3 text-gray-600 font-medium">[ PRODUCT IMAGE ]</div>
                <div class="font-semibold mb-2 text-gray-900">3 Bottles</div>
                <div class="text-gray-600 text-sm">90-Day Supply</div>
              </div>

              <div class="bg-white border-2 border-gray-200 rounded-lg p-5 w-52 text-center">
                <div class="bg-gray-100 h-32 flex items-center justify-center rounded-lg mb-3 text-gray-600 font-medium">[ PRODUCT IMAGE ]</div>
                <div class="font-semibold mb-2 text-gray-900">6 Bottles</div>
                <div class="text-gray-600 text-sm">180-Day Supply</div>
              </div>
            </div>

            <!-- CTA Button -->
            <div class="text-center mb-8">
              <div class="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-lg font-semibold">[ BUTTON: "Yes! I Want [Product Name]" ]</div>
            </div>

            <!-- Scientific References -->
            <div class="bg-gray-100 rounded-lg p-6">
              <div class="text-center font-semibold text-gray-700 mb-3">[ SCIENTIFIC REFERENCES ]</div>
              <p class="text-sm text-gray-600 text-center">
                List your scientific studies, clinical trials, and expert endorsements here
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Required Elements Checklist -->
      <div class="bg-white rounded-2xl p-8 shadow-lg mb-8">
        <div class="flex items-center mb-6">
          <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
            3
          </div>
          <h2 class="text-3xl font-bold text-gray-900">Required Elements Checklist</h2>
        </div>
        <p class="text-gray-700 text-lg leading-relaxed mb-6">
          Every VSL page must include these essential elements:
        </p>

        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-gray-50 rounded-lg p-4 flex items-start">
            <span class="text-green-500 font-bold text-xl mr-3">✓</span>
            <div>
              <strong class="text-gray-900">Compelling Headline:</strong>
              <span class="text-gray-700"> Promise a specific benefit or solution</span>
            </div>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 flex items-start">
            <span class="text-green-500 font-bold text-xl mr-3">✓</span>
            <div>
              <strong class="text-gray-900">Video Player:</strong>
              <span class="text-gray-700"> Prominently placed at top of page, auto-play enabled</span>
            </div>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 flex items-start">
            <span class="text-green-500 font-bold text-xl mr-3">✓</span>
            <div>
              <strong class="text-gray-900">Timed Buy Buttons:</strong>
              <span class="text-gray-700"> Appear only after video completes (prevents skipping)</span>
            </div>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 flex items-start">
            <span class="text-green-500 font-bold text-xl mr-3">✓</span>
            <div>
              <strong class="text-gray-900">Product Visuals:</strong>
              <span class="text-gray-700"> High-quality images of your product bottles/packages</span>
            </div>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 flex items-start">
            <span class="text-green-500 font-bold text-xl mr-3">✓</span>
            <div>
              <strong class="text-gray-900">Package Options:</strong>
              <span class="text-gray-700"> Display 1, 3, and 6 bottle options clearly</span>
            </div>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 flex items-start">
            <span class="text-green-500 font-bold text-xl mr-3">✓</span>
            <div>
              <strong class="text-gray-900">Trust Indicators:</strong>
              <span class="text-gray-700"> Money-back guarantee, secure checkout badges</span>
            </div>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 flex items-start">
            <span class="text-green-500 font-bold text-xl mr-3">✓</span>
            <div>
              <strong class="text-gray-900">Scientific References:</strong>
              <span class="text-gray-700"> Studies, trials, expert endorsements</span>
            </div>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 flex items-start">
            <span class="text-green-500 font-bold text-xl mr-3">✓</span>
            <div>
              <strong class="text-gray-900">Scarcity/Urgency:</strong>
              <span class="text-gray-700"> Limited stock or time-based offers (optional but effective)</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Technical Specifications -->
      <div class="bg-white rounded-2xl p-8 shadow-lg mb-8">
        <div class="flex items-center mb-6">
          <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
            4
          </div>
          <h2 class="text-3xl font-bold text-gray-900">Technical Specifications</h2>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full border-collapse">
            <thead>
              <tr class="bg-gray-50">
                <th class="text-left p-4 font-semibold text-gray-900 border-b">Element</th>
                <th class="text-left p-4 font-semibold text-gray-900 border-b">Specification</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b">
                <td class="p-4 font-semibold text-gray-900">Video Length</td>
                <td class="p-4 text-gray-700">50 minutes optimal (shorter = less conversion, longer = drop-off)</td>
              </tr>
              <tr class="border-b">
                <td class="p-4 font-semibold text-gray-900">Video Format</td>
                <td class="p-4 text-gray-700">MP4, hosted on reliable CDN or platform (Vimeo, Wistia recommended)</td>
              </tr>
              <tr class="border-b">
                <td class="p-4 font-semibold text-gray-900">Button Reveal Timing</td>
                <td class="p-4 text-gray-700">Set to appear at 85-90% of video completion (not before)</td>
              </tr>
              <tr class="border-b">
                <td class="p-4 font-semibold text-gray-900">Page Load Speed</td>
                <td class="p-4 text-gray-700">Under 3 seconds (critical for conversion)</td>
              </tr>
              <tr class="border-b">
                <td class="p-4 font-semibold text-gray-900">Mobile Optimization</td>
                <td class="p-4 text-gray-700">Video must be fully responsive, controls accessible on mobile</td>
              </tr>
              <tr>
                <td class="p-4 font-semibold text-gray-900">Package Options</td>
                <td class="p-4 text-gray-700">Always show 3 options: Basic (1-2), Best Value (3-4), Premium (6+)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- VSL Content Structure -->
      <div class="bg-white rounded-2xl p-8 shadow-lg mb-8">
        <div class="flex items-center mb-6">
          <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
            5
          </div>
          <h2 class="text-3xl font-bold text-gray-900">VSL Content Structure</h2>
        </div>
        <p class="text-gray-700 text-lg leading-relaxed mb-6">
          Your 50 minute video should follow this proven structure:
        </p>

        <div class="space-y-6">
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Act 1: Hook & Problem (Minutes 0-15)</h3>
            <div class="grid md:grid-cols-2 gap-3">
              <div class="bg-gray-50 rounded-lg p-3 flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                <span class="text-gray-700">Open with shocking fact or bold claim</span>
              </div>
              <div class="bg-gray-50 rounded-lg p-3 flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                <span class="text-gray-700">Identify the problem your audience faces</span>
              </div>
              <div class="bg-gray-50 rounded-lg p-3 flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                <span class="text-gray-700">Agitate the pain points</span>
              </div>
              <div class="bg-gray-50 rounded-lg p-3 flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                <span class="text-gray-700">Promise a solution is coming</span>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Act 2: Solution & Mechanism (Minutes 15-35)</h3>
            <div class="grid md:grid-cols-2 gap-3">
              <div class="bg-gray-50 rounded-lg p-3 flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                <span class="text-gray-700">Introduce your product as the solution</span>
              </div>
              <div class="bg-gray-50 rounded-lg p-3 flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                <span class="text-gray-700">Explain the unique mechanism (what makes it different)</span>
              </div>
              <div class="bg-gray-50 rounded-lg p-3 flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                <span class="text-gray-700">Present scientific evidence and studies</span>
              </div>
              <div class="bg-gray-50 rounded-lg p-3 flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                <span class="text-gray-700">Show testimonials and results</span>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Act 3: Offer & Close (Minutes 35-50)</h3>
            <div class="grid md:grid-cols-2 gap-3">
              <div class="bg-gray-50 rounded-lg p-3 flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                <span class="text-gray-700">Present the pricing and package options</span>
              </div>
              <div class="bg-gray-50 rounded-lg p-3 flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                <span class="text-gray-700">Stack the value (bonuses, guarantees)</span>
              </div>
              <div class="bg-gray-50 rounded-lg p-3 flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                <span class="text-gray-700">Create urgency (limited availability, special pricing)</span>
              </div>
              <div class="bg-gray-50 rounded-lg p-3 flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                <span class="text-gray-700">Overcome final objections</span>
              </div>
              <div class="bg-gray-50 rounded-lg p-3 flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                <span class="text-gray-700">Clear call-to-action</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Best Practices -->
      <div class="bg-white rounded-2xl p-8 shadow-lg mb-8">
        <div class="flex items-center mb-6">
          <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
            6
          </div>
          <h2 class="text-3xl font-bold text-gray-900">Best Practices</h2>
        </div>

        <div class="bg-green-50 border-l-4 border-green-500 rounded-lg p-6 mb-6">
          <h3 class="font-bold text-lg mb-2 text-gray-900">Disable Video Controls:</h3>
          <p class="text-gray-700">
            Remove the ability to skip ahead in the video. This ensures viewers watch your complete presentation and prevents them from jumping to the price without seeing the value buildup.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-gray-50 rounded-lg p-4 flex items-start">
            <span class="text-green-500 font-bold text-xl mr-3">✓</span>
            <div>
              <strong class="text-gray-900">Use Professional Video Production:</strong>
              <span class="text-gray-700"> Poor audio/video quality kills credibility</span>
            </div>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 flex items-start">
            <span class="text-green-500 font-bold text-xl mr-3">✓</span>
            <div>
              <strong class="text-gray-900">Add Captions:</strong>
              <span class="text-gray-700"> 85% of Facebook videos are watched without sound</span>
            </div>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 flex items-start">
            <span class="text-green-500 font-bold text-xl mr-3">✓</span>
            <div>
              <strong class="text-gray-900">Test Button Timing:</strong>
              <span class="text-gray-700"> Experiment with 80% vs 90% vs 100% completion</span>
            </div>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 flex items-start">
            <span class="text-green-500 font-bold text-xl mr-3">✓</span>
            <div>
              <strong class="text-gray-900">Optimize for Mobile:</strong>
              <span class="text-gray-700"> 60%+ of traffic is mobile - ensure smooth playback</span>
            </div>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 flex items-start">
            <span class="text-green-500 font-bold text-xl mr-3">✓</span>
            <div>
              <strong class="text-gray-900">A/B Test Headlines:</strong>
              <span class="text-gray-700"> Your headline can change conversion by 50%+</span>
            </div>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 flex items-start">
            <span class="text-green-500 font-bold text-xl mr-3">✓</span>
            <div>
              <strong class="text-gray-900">Keep Page Simple:</strong>
              <span class="text-gray-700"> Don't add distracting elements - focus stays on video</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Common Mistakes -->
      <div class="bg-white rounded-2xl p-8 shadow-lg mb-8">
        <div class="flex items-center mb-6">
          <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
            7
          </div>
          <h2 class="text-3xl font-bold text-gray-900">Common Mistakes to Avoid</h2>
        </div>

        <div class="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-6">
          <h3 class="font-bold text-lg mb-2 text-gray-900">Warning:</h3>
          <p class="text-gray-700">
            These mistakes are common among new vendors and can devastate your conversion rates.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-gray-50 rounded-lg p-4 flex">
            <span class="text-red-500 text-xl mr-3 flex-shrink-0 leading-none mt-0.5">❌</span>
            <div>
              <strong class="text-gray-900">Showing Buy Button Too Early:</strong>
              <span class="text-gray-700"> If people can skip to price, they will - and won't buy</span>
            </div>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 flex">
            <span class="text-red-500 text-xl mr-3 flex-shrink-0 leading-none mt-0.5">❌</span>
            <div>
              <strong class="text-gray-900">Video Too Long:</strong>
              <span class="text-gray-700"> Beyond 60 minutes, drop-off rates skyrocket</span>
            </div>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 flex">
            <span class="text-red-500 text-xl mr-3 flex-shrink-0 leading-none mt-0.5">❌</span>
            <div>
              <strong class="text-gray-900">No Mobile Testing:</strong>
              <span class="text-gray-700"> Broken mobile experience = 60% of potential revenue lost</span>
            </div>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 flex">
            <span class="text-red-500 text-xl mr-3 flex-shrink-0 leading-none mt-0.5">❌</span>
            <div>
              <strong class="text-gray-900">Weak Hook:</strong>
              <span class="text-gray-700"> First 30 seconds determine if people stay</span>
            </div>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 flex">
            <span class="text-red-500 text-xl mr-3 flex-shrink-0 leading-none mt-0.5">❌</span>
            <div>
              <strong class="text-gray-900">Too Many Package Options:</strong>
              <span class="text-gray-700"> More than 3 choices creates decision paralysis</span>
            </div>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 flex">
            <span class="text-red-500 text-xl mr-3 flex-shrink-0 leading-none mt-0.5">❌</span>
            <div>
              <strong class="text-gray-900">Missing Guarantees:</strong>
              <span class="text-gray-700"> Without risk-reversal, conversion drops 30-40%</span>
            </div>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 flex">
            <span class="text-red-500 text-xl mr-3 flex-shrink-0 leading-none mt-0.5">❌</span>
            <div>
              <strong class="text-gray-900">Poor Video Quality:</strong>
              <span class="text-gray-700"> Grainy video or bad audio signals "scam" to viewers</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Performance Metrics -->
      <div class="bg-white rounded-2xl p-8 shadow-lg mb-8">
        <div class="flex items-center mb-8">
          <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
            📊
          </div>
          <h2 class="text-3xl font-bold text-gray-900">Performance Metrics & Benchmarks</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 border-l-4 border-blue-600">
            <div class="flex items-start mb-2">
              <span class="text-2xl mr-3">📹</span>
              <strong class="text-gray-900 text-lg">Video Completion Rate</strong>
            </div>
            <p class="text-gray-700 ml-11">Aim for 40-60% of viewers watching to the end. Below 30% means your video needs work.</p>
          </div>

          <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 border-l-4 border-green-600">
            <div class="flex items-start mb-2">
              <span class="text-2xl mr-3">💰</span>
              <strong class="text-gray-900 text-lg">VSL Conversion Rate</strong>
            </div>
            <p class="text-gray-700 ml-11">Industry standard is 2-5% of viewers become buyers. Top performers hit 8-12%.</p>
          </div>

          <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-5 border-l-4 border-purple-600">
            <div class="flex items-start mb-2">
              <span class="text-2xl mr-3">⏱️</span>
              <strong class="text-gray-900 text-lg">Average Watch Time</strong>
            </div>
            <p class="text-gray-700 ml-11">Should be 30-40 minutes minimum. Under 20 minutes means you're losing people early.</p>
          </div>

          <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-5 border-l-4 border-orange-600">
            <div class="flex items-start mb-2">
              <span class="text-2xl mr-3">📱</span>
              <strong class="text-gray-900 text-lg">Mobile vs Desktop</strong>
            </div>
            <p class="text-gray-700 ml-11">Expect 60-70% mobile traffic. Mobile conversion is typically 20-30% lower than desktop.</p>
          </div>

          <div class="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-5 border-l-4 border-indigo-600 md:col-span-2">
            <div class="flex items-start mb-2">
              <span class="text-2xl mr-3">📦</span>
              <strong class="text-gray-900 text-lg">Package Selection</strong>
            </div>
            <p class="text-gray-700 ml-11">"Best Value" (3-pack) should sell 50-60% of the time, Premium (6-pack) 25-30%, Basic 15-20%.</p>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <div class="flex justify-between mt-12 gap-4">
        <NuxtLink to="/" class="inline-flex items-center px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:-translate-y-1 transition-transform">
          ← Back to Overview
        </NuxtLink>
        <NuxtLink to="/step3-upsell1" class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:-translate-y-1 transition-transform">
          Next: Upsell 1 →
        </NuxtLink>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Step 1: VSL Page - BuyGoods Vendor Guide',
  description: 'Learn how to create an effective Video Sales Letter page that converts 2-5% of viewers into buyers'
})
</script>

<style scoped>
.page-content {
  margin-left: 280px;
}

@media (max-width: 768px) {
  .page-content {
    margin-left: 0;
  }
}

.header {
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  color: #ffffff;
  padding: 60px 20px;
  min-height: 200px;
  text-align: center;
}

.step-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 16px;
}

.header h1 {
  font-size: 42px;
  margin-bottom: 16px;
  font-weight: 700;
}

.header p {
  font-size: 20px;
  opacity: 0.95;
  max-width: 800px;
  margin: 0 auto;
}
</style>
