<template>
  <div>
    <Navbar :breadcrumbs="['Step 4: Upsell 2']" />
    <Sidebar :current-step="4" />

    <div class="page-content">
      <div class="header">
        <div class="step-badge">STEP 4 OF 7</div>
        <h1>Upsell 2: Complementary Product</h1>
        <p>Cross-sell a different product that enhances the main purchase</p>
      </div>

      <div class="container mx-auto px-4 py-12" style="max-width: 90%;">
      <!-- Section 1: What is Upsell 2? -->
      <div class="bg-white rounded-2xl p-8 shadow-lg mb-8 border-2 border-gray-100">
        <h2 class="flex items-center text-3xl font-bold mb-6 text-gray-900">
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg mr-4">1</span>
          What is Upsell 2?
        </h2>
        <p class="text-gray-700 text-lg mb-4 leading-relaxed">
          After handling the quantity upsells/downsells for your MAIN product, now you introduce a DIFFERENT but complementary product. This is your cross-sell opportunity - offering something that works alongside or enhances the product they just purchased.
        </p>
        <p class="text-gray-700 text-lg mb-6 leading-relaxed">
          The key is that this product should have a logical connection to the first product. For example: if they bought a metabolism supplement, offer a sleep supplement. If they bought joint support, offer a mobility cream.
        </p>

        <div class="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
          <p class="font-bold text-gray-900 text-lg mb-2">Cross-Sell Strategy:</p>
          <p class="text-gray-700 leading-relaxed">
            This is about product pairing. The complementary product should enhance results, address a related problem, or complete a "system." Acceptance rates of 15-30% are typical when products are well-matched.
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
          Here's how your Upsell 2 page should look:
        </p>

        <!-- Upsell Preview -->
        <div class="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-10 text-center">
          <h3 class="text-4xl font-bold text-gray-900 mb-6">
            Wait! Supercharge Your Results With This...
          </h3>

          <div class="bg-gradient-to-r from-purple-600 to-purple-700 text-white inline-block px-8 py-3 rounded-lg text-xl font-bold mb-6">
            ✨ PERFECT COMPLEMENT ✨
          </div>

          <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Customers who combine [Main Product] with [Complementary Product] report 2X faster results. Add this to your order now for maximum benefits!
          </p>

          <!-- Product Combination -->
          <div class="flex justify-center items-center gap-6 mb-8 flex-wrap">
            <div class="bg-white border-2 border-gray-300 rounded-xl p-6 w-56 opacity-70">
              <div class="text-sm text-gray-600 font-semibold mb-2">YOUR ORDER:</div>
              <div class="bg-gray-100 h-40 flex items-center justify-center rounded-lg text-gray-500 text-sm mb-3 border-2 border-gray-300">
                [ MAIN PRODUCT<br/>IMAGE ]
              </div>
              <div class="font-semibold text-gray-900">Main Product Name</div>
              <div class="text-sm text-gray-600">3 Bottles</div>
            </div>

            <div class="text-5xl font-bold text-purple-600">+</div>

            <div class="bg-white border-4 border-purple-600 rounded-xl p-6 w-56 shadow-lg shadow-purple-600/20">
              <div class="text-sm text-purple-600 font-semibold mb-2">ADD THIS:</div>
              <div class="bg-gray-100 h-40 flex items-center justify-center rounded-lg text-gray-500 text-sm mb-3 border-2 border-gray-300">
                [ COMPLEMENTARY<br/>PRODUCT IMAGE ]
              </div>
              <div class="font-semibold text-gray-900">Complementary Product</div>
              <div class="text-sm text-purple-600 font-semibold">3 Bottles</div>
            </div>
          </div>

          <!-- Offer Box -->
          <div class="bg-gradient-to-br from-purple-50 to-purple-50 border-4 border-purple-600 rounded-xl p-8 mb-6">
            <h3 class="text-2xl font-bold text-purple-600 mb-6">
              The Perfect Combination For Maximum Results
            </h3>

            <!-- Benefits Grid -->
            <div class="grid md:grid-cols-3 gap-4 mb-8">
              <div class="bg-white border-2 border-gray-300 rounded-lg p-5 text-center">
                <div class="text-4xl mb-3">⚡</div>
                <strong class="text-gray-900 block">2X Faster Results</strong>
                <p class="text-sm text-gray-600 mt-2">When used together</p>
              </div>
              <div class="bg-white border-2 border-gray-300 rounded-lg p-5 text-center">
                <div class="text-4xl mb-3">🎯</div>
                <strong class="text-gray-900 block">Complete Solution</strong>
                <p class="text-sm text-gray-600 mt-2">Addresses all aspects</p>
              </div>
              <div class="bg-white border-2 border-gray-300 rounded-lg p-5 text-center">
                <div class="text-4xl mb-3">💪</div>
                <strong class="text-gray-900 block">Enhanced Benefits</strong>
                <p class="text-sm text-gray-600 mt-2">Synergistic effect</p>
              </div>
            </div>

            <!-- Price Display -->
            <div class="bg-white rounded-lg p-6 mb-6">
              <div class="text-lg text-gray-600 mb-2">Add to Your Order Today:</div>
              <div class="text-6xl font-bold text-purple-600 my-3">$67</div>
              <div class="text-lg text-gray-600">3 Bottles of [Complementary Product]</div>
            </div>

            <!-- Value Stack -->
            <div class="bg-white border-2 border-gray-300 rounded-lg p-6 mb-6">
              <h4 class="text-gray-900 font-semibold mb-4">What You Get:</h4>
              <div class="space-y-3">
                <div class="flex justify-between py-3 border-b border-gray-200">
                  <span class="text-gray-700">3 Bottles of [Complementary Product]</span>
                  <span class="text-gray-600">$147 value</span>
                </div>
                <div class="flex justify-between py-3 border-b border-gray-200">
                  <span class="text-gray-700">FREE Combination Guide (PDF)</span>
                  <span class="text-gray-600">$29 value</span>
                </div>
                <div class="flex justify-between py-3 border-b border-gray-200">
                  <span class="text-gray-700">FREE Shipping (combined order)</span>
                  <span class="text-gray-600">$12 value</span>
                </div>
                <div class="flex justify-between font-bold text-xl text-purple-600">
                  <span>Your Price Today:</span>
                  <span>$67</span>
                </div>
              </div>
            </div>

            <!-- Features List -->
            <ul class="text-left max-w-lg mx-auto space-y-3 mb-6">
              <li class="flex items-start">
                <span class="text-green-600 font-bold mr-3 mt-1">✓</span>
                <span class="text-gray-700">Ships with your current order</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-600 font-bold mr-3 mt-1">✓</span>
                <span class="text-gray-700">Same 60-day money-back guarantee</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-600 font-bold mr-3 mt-1">✓</span>
                <span class="text-gray-700">One-click add to order</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-600 font-bold mr-3 mt-1">✓</span>
                <span class="text-gray-700">Special bundle pricing (64% off)</span>
              </li>
            </ul>
          </div>

          <!-- Customer Testimonial -->
          <div class="bg-blue-50 border-2 border-blue-600 rounded-lg p-5 mb-8">
            <div class="font-semibold text-gray-900 mb-3">
              💬 What Customers Say:
            </div>
            <p class="italic text-gray-600 m-0">
              "I was skeptical, but combining these two products gave me results in just 3 weeks. I wish I'd bought both from the start!" - Sarah M.
            </p>
          </div>

          <!-- CTA Buttons -->
          <div class="flex gap-4 flex-wrap justify-center">
            <div class="flex-1 min-w-[250px] bg-gradient-to-r from-purple-600 to-purple-700 text-white p-5 rounded-lg text-xl font-bold">
              [ BUTTON: "YES! Add [Product] For $67" ]
            </div>
            <div class="flex-1 min-w-[250px] bg-white text-gray-600 p-5 border-2 border-gray-300 rounded-lg text-base font-semibold">
              [ LINK: "No thanks, I don't need enhanced results" ]
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
            <strong class="text-gray-900">Visual Product Pairing:</strong>
            <span class="text-gray-700"> Show both products side by side with "+" symbol</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">"Perfect Complement" Positioning:</strong>
            <span class="text-gray-700"> Frame as completing the solution</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Benefit Comparison:</strong>
            <span class="text-gray-700"> Show how combination delivers better results</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Social Proof:</strong>
            <span class="text-gray-700"> Testimonial about using both products together</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Complementary Product Image:</strong>
            <span class="text-gray-700"> High-quality image of the new product</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Clear Pricing:</strong>
            <span class="text-gray-700"> Single price point for the bundle</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Value Stack:</strong>
            <span class="text-gray-700"> Show what's included and total value vs. price</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Enhanced Results Claim:</strong>
            <span class="text-gray-700"> "2X faster" or similar quantified benefit</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Bundle Savings:</strong>
            <span class="text-gray-700"> Show discount percentage</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Strong Yes Button:</strong>
            <span class="text-gray-700"> Include product name and price</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Weak No Button:</strong>
            <span class="text-gray-700"> Frame decline as missing enhanced results</span>
          </div>
        </div>
      </div>

      <!-- Section 4: Product Pairing Strategy -->
      <div class="bg-white rounded-2xl p-8 shadow-lg mb-8 border-2 border-gray-100">
        <h2 class="flex items-center text-3xl font-bold mb-6 text-gray-900">
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg mr-4">4</span>
          Product Pairing Strategy
        </h2>

        <div class="overflow-x-auto mb-6">
          <table class="w-full border-collapse">
            <thead>
              <tr class="bg-gray-50">
                <th class="p-4 text-left font-semibold text-gray-900 border-b border-gray-200">Main Product Type</th>
                <th class="p-4 text-left font-semibold text-gray-900 border-b border-gray-200">Complementary Product Ideas</th>
                <th class="p-4 text-left font-semibold text-gray-900 border-b border-gray-200">Pairing Logic</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-4 text-gray-700 border-b border-gray-200">Weight Loss Supplement</td>
                <td class="p-4 text-gray-700 border-b border-gray-200">Sleep Support, Energy Booster, Appetite Control</td>
                <td class="p-4 text-gray-700 border-b border-gray-200">Sleep affects metabolism; energy helps exercise</td>
              </tr>
              <tr>
                <td class="p-4 text-gray-700 border-b border-gray-200">Joint Support</td>
                <td class="p-4 text-gray-700 border-b border-gray-200">Topical Pain Cream, Mobility Support, Inflammation Aid</td>
                <td class="p-4 text-gray-700 border-b border-gray-200">Internal + external approach = comprehensive relief</td>
              </tr>
              <tr>
                <td class="p-4 text-gray-700 border-b border-gray-200">Brain Health</td>
                <td class="p-4 text-gray-700 border-b border-gray-200">Sleep Support, Stress Relief, Focus Enhancement</td>
                <td class="p-4 text-gray-700 border-b border-gray-200">Sleep and stress directly impact cognitive function</td>
              </tr>
              <tr>
                <td class="p-4 text-gray-700 border-b border-gray-200">Digestive Health</td>
                <td class="p-4 text-gray-700 border-b border-gray-200">Probiotic, Enzyme Blend, Detox Support</td>
                <td class="p-4 text-gray-700 border-b border-gray-200">Complete gut health system</td>
              </tr>
              <tr>
                <td class="p-4 text-gray-700">Skin Care Serum</td>
                <td class="p-4 text-gray-700">Collagen Supplement, Night Cream, Eye Treatment</td>
                <td class="p-4 text-gray-700">Internal + external beauty approach</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
          <p class="font-bold text-gray-900 text-lg mb-2">Golden Rule:</p>
          <p class="text-gray-700 leading-relaxed">
            The complementary product should have a clear, logical connection. If you have to explain too much why they go together, the pairing isn't strong enough.
          </p>
        </div>
      </div>

      <!-- Section 5: Pricing Guidelines -->
      <div class="bg-white rounded-2xl p-8 shadow-lg mb-8 border-2 border-gray-100">
        <h2 class="flex items-center text-3xl font-bold mb-6 text-gray-900">
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg mr-4">5</span>
          Pricing Guidelines
        </h2>

        <h3 class="text-2xl font-semibold mb-4 text-gray-900">Optimal Price Range</h3>
        <div class="grid md:grid-cols-2 gap-4 mb-6">
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">$37-$67:</strong>
            <span class="text-gray-700"> Sweet spot for most supplement/health offers</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Lower than main product:</strong>
            <span class="text-gray-700"> Complementary should cost 40-70% of main purchase</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Show value:</strong>
            <span class="text-gray-700"> Present retail price vs. bundle price</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Include bonus:</strong>
            <span class="text-gray-700"> Add a PDF guide or similar to increase perceived value</span>
          </div>
        </div>

        <div class="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
          <p class="font-bold text-gray-900 text-lg mb-2">Pricing Psychology:</p>
          <p class="text-gray-700 leading-relaxed">
            If the main order was $147, the complementary product at $67 feels like a reasonable addition (45% of main). But $147 + $147 feels too expensive and acceptance drops.
          </p>
        </div>
      </div>

      <!-- Section 6: Key Messaging Points -->
      <div class="bg-white rounded-2xl p-8 shadow-lg mb-8 border-2 border-gray-100">
        <h2 class="flex items-center text-3xl font-bold mb-6 text-gray-900">
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg mr-4">6</span>
          Key Messaging Points
        </h2>

        <h3 class="text-2xl font-semibold mb-4 text-gray-900">Focus on Synergy</h3>
        <p class="text-gray-700 text-lg mb-4 leading-relaxed">
          Your copy should emphasize how the products work BETTER together:
        </p>
        <div class="grid md:grid-cols-2 gap-4 mb-8">
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <span class="text-gray-700">"2X faster results when combined"</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <span class="text-gray-700">"Complete the system"</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <span class="text-gray-700">"Address the root cause"</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <span class="text-gray-700">"Internal + external approach"</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <span class="text-gray-700">"Day + night formula"</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <span class="text-gray-700">"Customers who use both report..."</span>
          </div>
        </div>

        <h3 class="text-2xl font-semibold mb-4 text-gray-900">Remove Common Objections</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">"Why didn't you tell me before?"</strong>
            <span class="text-gray-700"> - Position as "upgrade opportunity"</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">"Is this necessary?"</strong>
            <span class="text-gray-700"> - Show comparison: results with vs. without</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">"Too expensive"</strong>
            <span class="text-gray-700"> - Emphasize bundle savings and value stack</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">"Too much at once"</strong>
            <span class="text-gray-700"> - Explain simple usage (one in AM, one in PM, etc.)</span>
          </div>
        </div>
      </div>

      <!-- Section 7: Best Practices -->
      <div class="bg-white rounded-2xl p-8 shadow-lg mb-8 border-2 border-gray-100">
        <h2 class="flex items-center text-3xl font-bold mb-6 text-gray-900">
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg mr-4">7</span>
          Best Practices
        </h2>

        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Visual Pairing:</strong>
            <span class="text-gray-700"> Always show both products together in the presentation</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Quantified Benefits:</strong>
            <span class="text-gray-700"> Use specific claims like "2X faster" with disclaimers</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Social Proof:</strong>
            <span class="text-gray-700"> Include testimonial from someone who used both products</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Match Quantities:</strong>
            <span class="text-gray-700"> If they bought 3 bottles of main, offer 3 of complementary</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Bundle Language:</strong>
            <span class="text-gray-700"> Call it a "system," "stack," or "combination"</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Free Bonus Guide:</strong>
            <span class="text-gray-700"> Add a PDF guide on "how to use them together"</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Same Guarantee:</strong>
            <span class="text-gray-700"> Emphasize the complementary product has same guarantee</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">One Shipment:</strong>
            <span class="text-gray-700"> Stress that everything ships together</span>
          </div>
        </div>
      </div>

      <!-- Section 8: Common Mistakes to Avoid -->
      <div class="bg-white rounded-2xl p-8 shadow-lg mb-8 border-2 border-gray-100">
        <h2 class="flex items-center text-3xl font-bold mb-6 text-gray-900">
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg mr-4">8</span>
          Common Mistakes to Avoid
        </h2>

        <div class="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-6">
          <p class="font-bold text-gray-900 text-lg mb-2">Warning:</p>
          <p class="text-gray-700 leading-relaxed">
            Poor product pairing destroys credibility and acceptance rates.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-lg">❌</span>
            <strong class="text-gray-900">Unrelated Products:</strong>
            <span class="text-gray-700"> Random products with no logical connection</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-lg">❌</span>
            <strong class="text-gray-900">Too Expensive:</strong>
            <span class="text-gray-700"> Complementary product shouldn't exceed main purchase price</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-lg">❌</span>
            <strong class="text-gray-900">Weak Connection:</strong>
            <span class="text-gray-700"> If the benefit of combining isn't obvious, it won't sell</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-lg">❌</span>
            <strong class="text-gray-900">No Differentiation:</strong>
            <span class="text-gray-700"> Make it clear this is a DIFFERENT product, not more of the same</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-lg">❌</span>
            <strong class="text-gray-900">Complex Explanation:</strong>
            <span class="text-gray-700"> If you need 500 words to explain why they go together, pairing is weak</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-lg">❌</span>
            <strong class="text-gray-900">Multiple Options:</strong>
            <span class="text-gray-700"> One complementary product only - don't create choice paralysis</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-lg">❌</span>
            <strong class="text-gray-900">Weak Social Proof:</strong>
            <span class="text-gray-700"> Generic testimonials don't work - need specific "both products" testimonial</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-lg">❌</span>
            <strong class="text-gray-900">Poor Visuals:</strong>
            <span class="text-gray-700"> Not showing products together misses the "combination" psychology</span>
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
            <p class="text-gray-700 ml-11">15-30% for well-paired complementary products. Under 10% indicates poor product match.</p>
          </div>

          <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-5 border-l-4 border-orange-600">
            <div class="flex items-start mb-2">
              <span class="text-2xl mr-3">💵</span>
              <strong class="text-gray-900 text-lg">Optimal Price Point</strong>
            </div>
            <p class="text-gray-700 ml-11">$37-$67 range performs best. Higher prices reduce acceptance significantly.</p>
          </div>

          <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 border-l-4 border-green-600">
            <div class="flex items-start mb-2">
              <span class="text-2xl mr-3">💰</span>
              <strong class="text-gray-900 text-lg">Revenue Impact</strong>
            </div>
            <p class="text-gray-700 ml-11">If 25% accept at $67, you add $16.75 to every customer's value on average.</p>
          </div>

          <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-5 border-l-4 border-purple-600">
            <div class="flex items-start mb-2">
              <span class="text-2xl mr-3">🔗</span>
              <strong class="text-gray-900 text-lg">Product Match Impact</strong>
            </div>
            <p class="text-gray-700 ml-11">Strongly related products (joint + cream) convert 2-3X better than loosely related (joint + sleep).</p>
          </div>

          <div class="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-5 border-l-4 border-indigo-600">
            <div class="flex items-start mb-2">
              <span class="text-2xl mr-3">🧪</span>
              <strong class="text-gray-900 text-lg">A/B Test Focus</strong>
            </div>
            <p class="text-gray-700 ml-11">Test different complementary products to find best pairing - can double acceptance rate.</p>
          </div>

          <div class="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-5 border-l-4 border-pink-600">
            <div class="flex items-start mb-2">
              <span class="text-2xl mr-3">📊</span>
              <strong class="text-gray-900 text-lg">Cumulative Funnel Value</strong>
            </div>
            <p class="text-gray-700 ml-11">With proper upsells, you can increase AOV by 60-100% through the entire funnel.</p>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <div class="flex flex-col sm:flex-row gap-4 mt-12">
        <NuxtLink
          to="/step4-downsell1"
          class="flex-1 bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold text-center hover:bg-blue-50 transition-all duration-300 hover:shadow-lg"
        >
          ← Previous: Downsell 1
        </NuxtLink>
        <NuxtLink
          to="/step6-downsell2"
          class="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Next: Downsell 2 →
        </NuxtLink>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Step 5: Upsell 2 - BuyGoods Vendor Guide',
  description: 'Cross-sell a different product that enhances the main purchase. Complete guide to complementary product upsells with examples and best practices.'
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
