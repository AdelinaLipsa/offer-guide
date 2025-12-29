<template>
  <div>
    <Navbar :breadcrumbs="['Step 3: Downsell 1']" />
    <Sidebar :current-step="3" />

    <div class="page-content">
      <!-- Header -->
      <div class="header">
        <div class="step-badge">STEP 3 OF 7</div>
        <h1>Downsell 1: Smaller Quantity</h1>
        <p>Recover customers who declined your first upsell with a more attractive offer</p>
      </div>

      <div class="container mx-auto px-4 py-12" style="max-width: 90%;">
      <!-- Section 1: What is Downsell 1? -->
      <div class="bg-white rounded-2xl p-8 shadow-lg mb-8 border-2 border-gray-100">
        <h2 class="flex items-center text-3xl font-bold mb-6 text-gray-900">
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg mr-4">1</span>
          What is Downsell 1?
        </h2>
        <p class="text-gray-700 text-lg mb-4 leading-relaxed">
          When a customer clicks "No Thanks" on Upsell 1, they immediately see this downsell page. Instead of letting them go, you present a SMALLER, MORE ATTRACTIVE offer that's harder to refuse.
        </p>
        <p class="text-gray-700 text-lg mb-6 leading-relaxed">
          The key difference: This offer is for fewer bottles but at an even BETTER per-bottle discount than the upsell. It removes the objection of "too expensive" while still increasing your average order value.
        </p>

        <div class="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
          <p class="font-bold text-gray-900 text-lg mb-2">Recovery Strategy:</p>
          <p class="text-gray-700 leading-relaxed">
            15-25% of customers who declined Upsell 1 will accept Downsell 1. This is pure profit recovery that would otherwise be lost. Even a small acceptance adds significant revenue over time.
          </p>
        </div>
      </div>

      <!-- Section 2: Visual Structure -->
      <div class="bg-white rounded-2xl p-8 shadow-lg mb-8 border-2 border-gray-100">
        <h2 class="flex items-center text-3xl font-bold mb-6 text-gray-900">
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg mr-4">2</span>
          Visual Structure
        </h2>
        <p class="text-gray-700 text-lg mb-6 leading-relaxed">
          Here's how your Downsell 1 page should look:
        </p>

        <!-- Downsell Preview -->
        <div class="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-10 text-center">
          <!-- Last Chance Headline -->
          <div class="bg-yellow-400 text-gray-900 p-5 rounded-lg text-3xl font-bold mb-6">
            ⚠ Last Chance! Special Discount
          </div>

          <h3 class="text-2xl font-semibold text-gray-900 mb-6">
            We Understand - Let Us Make This Even Better For You
          </h3>

          <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            We noticed the previous offer wasn't right for you. So we've created an even BETTER deal - just 1 extra bottle at our absolute lowest price ever. This is truly our final offer.
          </p>

          <!-- Comparison Table -->
          <div class="grid md:grid-cols-2 gap-5 mb-8">
            <div class="bg-red-50 border-2 border-gray-300 rounded-lg p-6 opacity-60">
              <div class="line-through text-sm mb-2">Previous Offer (Declined)</div>
              <div class="text-3xl font-bold text-gray-600">3 Bottles</div>
              <div class="text-xl mt-2">$117</div>
              <div class="text-sm text-gray-600 mt-1">$39 per bottle</div>
            </div>
            <div class="bg-green-50 border-3 border-green-500 rounded-lg p-6">
              <div class="font-semibold text-green-600 mb-2">✓ New Offer - BEST PRICE</div>
              <div class="text-4xl font-bold text-gray-900">Just 1 Bottle</div>
              <div class="text-2xl mt-2 font-bold text-green-600">$29</div>
              <div class="text-sm text-green-600 mt-1 font-semibold">SAVE 58% - Best Price Ever!</div>
            </div>
          </div>

          <!-- Product Showcase -->
          <div class="flex justify-center items-center gap-5 mb-8 flex-wrap">
            <div class="bg-gray-100 w-40 h-48 flex items-center justify-center rounded-lg text-gray-500 text-sm border-2 border-gray-300">
              [ PRODUCT IMAGE ]<br/>1 Bottle
            </div>
          </div>

          <!-- Offer Box -->
          <div class="bg-white border-3 border-green-500 rounded-xl p-8 shadow-xl mb-6">
            <h3 class="text-green-600 text-2xl font-bold mb-5">Why This Is Our Best Deal:</h3>

            <div class="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl mb-6">
              <div class="text-lg mb-2">Add Just 1 More Bottle For Only:</div>
              <div class="text-6xl font-bold my-3">$29</div>
              <div class="text-base opacity-90">Regular Price: $69 | You Save: $40 (58% OFF)</div>
            </div>

            <ul class="text-left max-w-lg mx-auto space-y-3">
              <li class="flex items-start">
                <span class="text-green-600 font-bold mr-3 mt-1">✓</span>
                <span class="text-gray-700">Our absolute LOWEST price - $29 per bottle</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-600 font-bold mr-3 mt-1">✓</span>
                <span class="text-gray-700">Just 1 bottle - small commitment</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-600 font-bold mr-3 mt-1">✓</span>
                <span class="text-gray-700">Ships FREE with your current order</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-600 font-bold mr-3 mt-1">✓</span>
                <span class="text-gray-700">Same 60-day money-back guarantee</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-600 font-bold mr-3 mt-1">✓</span>
                <span class="text-gray-700">One-click add (no re-entering info)</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-600 font-bold mr-3 mt-1">✓</span>
                <span class="text-gray-700">Never offered at this price again</span>
              </li>
            </ul>
          </div>

          <!-- Savings Callout -->
          <div class="bg-yellow-50 border-2 border-yellow-500 rounded-lg p-5 mb-8">
            <div class="text-xl font-bold text-gray-900 mb-2">
              ⏰ This Is Your Final Opportunity
            </div>
            <p class="text-gray-600 m-0">
              Once you leave this page, this $29 price will never be available again. The regular price is $69.
            </p>
          </div>

          <!-- CTA Buttons -->
          <div class="flex gap-4 flex-wrap justify-center">
            <div class="flex-1 min-w-[250px] bg-gradient-to-r from-green-500 to-green-600 text-white p-5 rounded-lg text-xl font-bold">
              [ BUTTON: "YES! Add 1 Bottle For Only $29" ]
            </div>
            <div class="flex-1 min-w-[250px] bg-white text-gray-600 p-5 border-2 border-gray-300 rounded-lg text-base font-semibold">
              [ LINK: "No thanks, I'll pay full price later" ]
            </div>
          </div>
        </div>
      </div>

      <!-- Section 3: Required Elements Checklist -->
      <div class="bg-white rounded-2xl p-8 shadow-lg mb-8 border-2 border-gray-100">
        <h2 class="flex items-center text-3xl font-bold mb-6 text-gray-900">
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg mr-4">3</span>
          Required Elements Checklist
        </h2>

        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">"Last Chance" Headline:</strong>
            <span class="text-gray-700"> Create urgency without pressure</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Empathy Message:</strong>
            <span class="text-gray-700"> Acknowledge their decline without making them feel bad</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Smaller Quantity:</strong>
            <span class="text-gray-700"> Typically 1-2 bottles vs. 3+ in the upsell</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Better Per-Unit Price:</strong>
            <span class="text-gray-700"> Lower price per bottle than the upsell</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Comparison Visual:</strong>
            <span class="text-gray-700"> Show declined offer vs. current offer</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Clear Savings:</strong>
            <span class="text-gray-700"> Emphasize the discount percentage (40-60%)</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Low Commitment Angle:</strong>
            <span class="text-gray-700"> "Just 1 bottle" feels easy to say yes to</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Finality Messaging:</strong>
            <span class="text-gray-700"> "Never offered again" creates FOMO</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Strong Yes Button:</strong>
            <span class="text-gray-700"> Include price in the button text</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Weak No Button:</strong>
            <span class="text-gray-700"> Frame decline as a loss</span>
          </div>
        </div>
      </div>

      <!-- Section 4: Pricing Strategy -->
      <div class="bg-white rounded-2xl p-8 shadow-lg mb-8 border-2 border-gray-100">
        <h2 class="flex items-center text-3xl font-bold mb-6 text-gray-900">
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg mr-4">4</span>
          Pricing Strategy
        </h2>

        <div class="overflow-x-auto">
          <table class="w-full border-collapse">
            <thead>
              <tr class="bg-gray-50">
                <th class="p-4 text-left font-semibold text-gray-900 border-b border-gray-200">Upsell 1 (Declined)</th>
                <th class="p-4 text-left font-semibold text-gray-900 border-b border-gray-200">Downsell 1 Offer</th>
                <th class="p-4 text-left font-semibold text-gray-900 border-b border-gray-200">Per-Bottle Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-4 text-gray-700 border-b border-gray-200">3 Bottles for $117 ($39/each)</td>
                <td class="p-4 text-gray-700 border-b border-gray-200">1 Bottle for $29</td>
                <td class="p-4 text-gray-700 border-b border-gray-200">$29 (better deal per bottle)</td>
              </tr>
              <tr>
                <td class="p-4 text-gray-700 border-b border-gray-200">2 Bottles for $98 ($49/each)</td>
                <td class="p-4 text-gray-700 border-b border-gray-200">1 Bottle for $29</td>
                <td class="p-4 text-gray-700 border-b border-gray-200">$29 (better deal per bottle)</td>
              </tr>
              <tr>
                <td class="p-4 text-gray-700 border-b border-gray-200">6 Bottles for $180 ($30/each)</td>
                <td class="p-4 text-gray-700 border-b border-gray-200">2 Bottles for $58</td>
                <td class="p-4 text-gray-700 border-b border-gray-200">$29 (slightly better deal)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-green-50 border-l-4 border-green-500 rounded-lg p-6 mt-6">
          <p class="font-bold text-gray-900 text-lg mb-2">The Psychology:</p>
          <p class="text-gray-700 leading-relaxed">
            Even though the per-bottle price is lower, the total amount is much smaller ($29 vs $117). This removes the "too expensive" objection while still providing significant value increase to your business.
          </p>
        </div>
      </div>

      <!-- Section 5: Why Downsells Work -->
      <div class="bg-white rounded-2xl p-8 shadow-lg mb-8 border-2 border-gray-100">
        <h2 class="flex items-center text-3xl font-bold mb-6 text-gray-900">
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg mr-4">5</span>
          Why Downsells Work
        </h2>

        <h3 class="text-2xl font-semibold mb-4 mt-6 text-gray-900">Objection Removal</h3>
        <p class="text-gray-700 text-lg mb-4 leading-relaxed">
          The downsell addresses why customers declined the upsell:
        </p>

        <div class="grid md:grid-cols-2 gap-4 mb-8">
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Price Objection:</strong>
            <span class="text-gray-700"> $29 feels insignificant compared to $117</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Quantity Objection:</strong>
            <span class="text-gray-700"> 1 bottle is a tiny commitment</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Decision Fatigue:</strong>
            <span class="text-gray-700"> Simpler choice - just one option</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Regret Aversion:</strong>
            <span class="text-gray-700"> "What if I miss out?" - final offer creates FOMO</span>
          </div>
        </div>

        <h3 class="text-2xl font-semibold mb-4 mt-6 text-gray-900">Key Messaging Points</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <span class="text-gray-700">We heard you - this is a better fit</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <span class="text-gray-700">Absolute lowest price ever offered</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <span class="text-gray-700">Just 1 bottle - minimal commitment</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <span class="text-gray-700">This is your FINAL chance at this price</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <span class="text-gray-700">Ships free with current order</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <span class="text-gray-700">No-brainer addition to extend supply</span>
          </div>
        </div>
      </div>

      <!-- Section 6: Best Practices -->
      <div class="bg-white rounded-2xl p-8 shadow-lg mb-8 border-2 border-gray-100">
        <h2 class="flex items-center text-3xl font-bold mb-6 text-gray-900">
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg mr-4">6</span>
          Best Practices
        </h2>

        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Keep It Simple:</strong>
            <span class="text-gray-700"> Single offer only - don't add complexity</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Emphasize Better Value:</strong>
            <span class="text-gray-700"> Lower per-bottle price than upsell</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Show Respect:</strong>
            <span class="text-gray-700"> Don't make them feel bad for declining</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Create Urgency:</strong>
            <span class="text-gray-700"> "Final offer" and "never again" messaging</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Minimize Risk:</strong>
            <span class="text-gray-700"> Emphasize guarantee and free shipping</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Use Smaller Numbers:</strong>
            <span class="text-gray-700"> "$29" feels insignificant vs. "$117"</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Frame the Decline Negatively:</strong>
            <span class="text-gray-700"> "No thanks, I'll pay full price later"</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Test Different Quantities:</strong>
            <span class="text-gray-700"> Try 1 bottle vs. 2 bottles</span>
          </div>
        </div>
      </div>

      <!-- Section 7: Common Mistakes -->
      <div class="bg-white rounded-2xl p-8 shadow-lg mb-8 border-2 border-gray-100">
        <h2 class="flex items-center text-3xl font-bold mb-6 text-gray-900">
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg mr-4">7</span>
          Common Mistakes to Avoid
        </h2>

        <div class="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-6">
          <p class="font-bold text-gray-900 text-lg mb-2">Warning:</p>
          <p class="text-gray-700 leading-relaxed">
            These mistakes will kill your recovery rate.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-lg">❌</span>
            <strong class="text-gray-900">Same or Worse Deal:</strong>
            <span class="text-gray-700"> Downsell must be MORE attractive per unit</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-lg">❌</span>
            <strong class="text-gray-900">Still Too Expensive:</strong>
            <span class="text-gray-700"> Keep total under $50 for best results</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-lg">❌</span>
            <strong class="text-gray-900">Shaming the Customer:</strong>
            <span class="text-gray-700"> Never make them feel bad for declining</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-lg">❌</span>
            <strong class="text-gray-900">Multiple Options:</strong>
            <span class="text-gray-700"> Keep it to ONE simple offer</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-lg">❌</span>
            <strong class="text-gray-900">No Urgency:</strong>
            <span class="text-gray-700"> Without finality, they'll think they can get it later</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-lg">❌</span>
            <strong class="text-gray-900">Complicated Messaging:</strong>
            <span class="text-gray-700"> Keep copy simple and benefit-focused</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-lg">❌</span>
            <strong class="text-gray-900">Different Product:</strong>
            <span class="text-gray-700"> Keep it the same product as original order</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-lg">❌</span>
            <strong class="text-gray-900">Weak Positioning:</strong>
            <span class="text-gray-700"> Must feel like an exclusive "final chance" deal</span>
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
              <span class="text-2xl mr-3">📈</span>
              <strong class="text-gray-900 text-lg">Acceptance Rate</strong>
            </div>
            <p class="text-gray-700 ml-11">15-25% of those who declined Upsell 1 should accept Downsell 1.</p>
          </div>

          <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 border-l-4 border-green-600">
            <div class="flex items-start mb-2">
              <span class="text-2xl mr-3">💰</span>
              <strong class="text-gray-900 text-lg">Revenue Recovery</strong>
            </div>
            <p class="text-gray-700 ml-11">If 300 people decline Upsell 1, and 60 accept Downsell 1 at $29, you recover $1,740.</p>
          </div>

          <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-5 border-l-4 border-purple-600">
            <div class="flex items-start mb-2">
              <span class="text-2xl mr-3">📊</span>
              <strong class="text-gray-900 text-lg">Combined Impact</strong>
            </div>
            <p class="text-gray-700 ml-11">Upsell 1 (30% × $117) + Downsell 1 (17.5% × $29) = ~$40 additional per customer.</p>
          </div>

          <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-5 border-l-4 border-orange-600">
            <div class="flex items-start mb-2">
              <span class="text-2xl mr-3">💵</span>
              <strong class="text-gray-900 text-lg">Optimal Price Point</strong>
            </div>
            <p class="text-gray-700 ml-11">$29-39 for single bottle downsells performs best. Higher reduces acceptance.</p>
          </div>

          <div class="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-5 border-l-4 border-red-600">
            <div class="flex items-start mb-2">
              <span class="text-2xl mr-3">⚡</span>
              <strong class="text-gray-900 text-lg">Page Load Speed</strong>
            </div>
            <p class="text-gray-700 ml-11">Keep under 2 seconds - delays kill urgency and acceptance rates.</p>
          </div>

          <div class="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-5 border-l-4 border-indigo-600">
            <div class="flex items-start mb-2">
              <span class="text-2xl mr-3">🧪</span>
              <strong class="text-gray-900 text-lg">A/B Testing Impact</strong>
            </div>
            <p class="text-gray-700 ml-11">Testing price points ($29 vs $35 vs $39) can change acceptance by 20-30%.</p>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <div class="flex flex-col sm:flex-row gap-4 mt-12">
        <NuxtLink
          to="/step3-upsell1"
          class="flex-1 bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold text-center hover:bg-blue-50 transition-all duration-300 hover:shadow-lg"
        >
          ← Previous: Upsell 1
        </NuxtLink>
        <NuxtLink
          to="/step5-upsell2"
          class="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Next: Upsell 2 →
        </NuxtLink>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Step 4: Downsell 1 - BuyGoods Vendor Guide',
  description: 'Recover customers who declined your first upsell with a smaller quantity offer at a better per-bottle price'
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
