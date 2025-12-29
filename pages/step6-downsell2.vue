<template>
  <div>
    <Navbar :breadcrumbs="['Step 5: Downsell 2']" />
    <Sidebar :current-step="5" />

    <div class="page-content">
      <div class="header">
        <div class="step-badge">STEP 5 OF 7</div>
        <h1>Downsell 2: Smaller Complement</h1>
        <p>Final recovery offer with trial or starter size of complementary product</p>
      </div>

      <div class="container mx-auto px-4 py-12" style="max-width: 90%;">
      <!-- Section 1: What is Downsell 2? -->
      <div class="bg-white rounded-2xl p-8 shadow-lg mb-8 border-2 border-gray-100">
        <h2 class="flex items-center text-3xl font-bold mb-6 text-gray-900">
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg mr-4">1</span>
          What is Downsell 2?
        </h2>
        <p class="text-gray-700 text-lg mb-4 leading-relaxed">
          This is your FINAL attempt to add value to the order. When customers decline Upsell 2 (the full complementary product), you present this last offer: a smaller, trial-sized version of that complementary product at an incredibly low price.
        </p>
        <p class="text-gray-700 text-lg mb-6 leading-relaxed">
          The strategy here is simple: make the offer so small and inexpensive that it's almost silly to say no. Position it as "just try it" rather than a full commitment.
        </p>

        <div class="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
          <p class="font-bold text-gray-900 text-lg mb-2">Final Recovery:</p>
          <p class="text-gray-700 leading-relaxed">
            10-20% of customers who declined Upsell 2 will accept this downsell. While each sale is smaller ($19-$27), it's pure additional revenue and introduces customers to the complementary product line.
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
          Here's how your Downsell 2 page should look:
        </p>

        <!-- Downsell Preview -->
        <div class="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-10 text-center">
          <div class="bg-gradient-to-r from-red-600 to-red-700 text-white p-5 rounded-lg text-3xl font-bold mb-6">
            🛑 One Last Thing Before You Go...
          </div>

          <h3 class="text-2xl font-semibold text-gray-900 mb-6">
            Try [Complementary Product] Risk-Free For Just $19
          </h3>

          <div class="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-lg text-lg font-bold my-5">
            ⭐ TRIAL SIZE OFFER ⭐
          </div>

          <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            We understand the full package wasn't right for you. But we'd love for you to at least TRY [Complementary Product]. We've created a special trial size - just 1 bottle for only $19. This is our absolute final offer.
          </p>

          <!-- Offer Comparison -->
          <div class="grid md:grid-cols-2 gap-5 max-w-xl mx-auto mb-8">
            <div class="bg-red-50 border-2 border-gray-300 rounded-lg p-5 opacity-60">
              <div class="text-xs line-through mb-2">Previous Offer</div>
              <div class="text-2xl font-bold text-gray-600">3 Bottles</div>
              <div class="text-lg mt-2">$67</div>
            </div>
            <div class="bg-green-50 border-3 border-green-500 rounded-lg p-5">
              <div class="text-xs font-semibold text-green-600 mb-2">✓ Trial Offer</div>
              <div class="text-3xl font-bold text-gray-900">1 Bottle</div>
              <div class="text-2xl mt-2 font-bold text-green-600">$19</div>
            </div>
          </div>

          <!-- Product Showcase -->
          <div class="flex justify-center mb-8">
            <div class="bg-gray-100 w-32 h-40 flex items-center justify-center rounded-lg text-gray-500 text-sm border-2 border-gray-300">
              [ TRIAL SIZE<br/>PRODUCT<br/>IMAGE ]
            </div>
          </div>

          <!-- Price Highlight -->
          <div class="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-xl mb-6">
            <div class="text-lg mb-2">Just Try It For Only:</div>
            <div class="text-7xl font-bold my-3">$19</div>
            <div class="text-base opacity-90">Regular Price: $49 | You Save: $30 (61% OFF)</div>
            <div class="text-sm opacity-90 mt-3">30-Day Supply • Perfect to Test the Results</div>
          </div>

          <ul class="text-left max-w-lg mx-auto space-y-3 mb-6">
            <li class="flex items-start">
              <span class="text-green-600 font-bold mr-3 mt-1">✓</span>
              <span class="text-gray-700">Just $19 - Less than a coffee per day</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-600 font-bold mr-3 mt-1">✓</span>
              <span class="text-gray-700">Perfect trial size - 1 bottle (30-day supply)</span>
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
              <span class="text-gray-700">If you love it, order more later</span>
            </li>
          </ul>

          <!-- Final Callout -->
          <div class="bg-yellow-50 border-3 border-yellow-500 rounded-xl p-6 mb-6">
            <div class="text-2xl font-bold text-gray-900 mb-3">
              🎯 This Is Your Absolute Final Chance
            </div>
            <p class="text-gray-700 text-base m-0">
              Once you click past this page, this $19 trial offer disappears forever. We'll never be able to offer this price again. If you want to try [Complementary Product], this is your only opportunity to do it risk-free at this incredible price.
            </p>
          </div>

          <!-- Testimonial -->
          <div class="bg-blue-50 border-2 border-blue-500 rounded-lg p-5 mb-8">
            <div class="font-semibold text-gray-900 mb-2">
              💡 Smart Decision:
            </div>
            <p class="text-gray-700 m-0">
              "I almost skipped this, but for $19 I figured why not? Best decision ever - now I order it every month!" - Jennifer T.
            </p>
          </div>

          <!-- CTA Buttons -->
          <div class="flex gap-4 flex-wrap justify-center mb-6">
            <div class="flex-1 min-w-[250px] bg-gradient-to-r from-green-500 to-green-600 text-white p-5 rounded-lg text-xl font-bold">
              [ BUTTON: "YES! Just Let Me Try It For $19" ]
            </div>
            <div class="flex-1 min-w-[250px] bg-white text-gray-600 p-5 border-2 border-gray-300 rounded-lg text-base font-semibold">
              [ LINK: "No thanks, I'll complete my order" ]
            </div>
          </div>

          <p class="text-xs text-gray-600 mt-6">
            This is the final offer in your funnel. After this, you'll be taken to your order confirmation.
          </p>
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
            <strong class="text-gray-900">"Final Offer" Headline:</strong>
            <span class="text-gray-700"> Make it crystal clear this is the last chance</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Trial/Starter Positioning:</strong>
            <span class="text-gray-700"> Position as "just try it" rather than full commitment</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Extremely Low Price:</strong>
            <span class="text-gray-700"> $19-27 range - almost impulse purchase level</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Small Quantity:</strong>
            <span class="text-gray-700"> Single bottle or trial size</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Comparison to Declined Offer:</strong>
            <span class="text-gray-700"> Show how much smaller/cheaper this is</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Heavy Discount:</strong>
            <span class="text-gray-700"> Show 50-70% savings from regular price</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Remove All Risk:</strong>
            <span class="text-gray-700"> Emphasize guarantee, free shipping, one-click</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Absolute Finality:</strong>
            <span class="text-gray-700"> "Never offered again" messaging</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Social Proof:</strong>
            <span class="text-gray-700"> Quick testimonial about trying it</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Strong Yes Button:</strong>
            <span class="text-gray-700"> "Just let me try it for $19"</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Neutral No Button:</strong>
            <span class="text-gray-700"> Simple "Complete my order" (not negative)</span>
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
                <th class="p-4 text-left font-semibold text-gray-900 border-b border-gray-200">Upsell 2 (Declined)</th>
                <th class="p-4 text-left font-semibold text-gray-900 border-b border-gray-200">Downsell 2 Offer</th>
                <th class="p-4 text-left font-semibold text-gray-900 border-b border-gray-200">Psychology</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-4 text-gray-700 border-b border-gray-200">3 Bottles for $67</td>
                <td class="p-4 text-gray-700 border-b border-gray-200">1 Bottle for $19</td>
                <td class="p-4 text-gray-700 border-b border-gray-200">72% less expensive - feels like nothing</td>
              </tr>
              <tr>
                <td class="p-4 text-gray-700 border-b border-gray-200">3 Bottles for $67</td>
                <td class="p-4 text-gray-700 border-b border-gray-200">1 Bottle for $27</td>
                <td class="p-4 text-gray-700 border-b border-gray-200">60% less - still very affordable</td>
              </tr>
              <tr>
                <td class="p-4 text-gray-700 border-b border-gray-200">6 Bottles for $97</td>
                <td class="p-4 text-gray-700 border-b border-gray-200">2 Bottles for $27</td>
                <td class="p-4 text-gray-700 border-b border-gray-200">72% less - removes price objection</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-green-50 border-l-4 border-green-500 rounded-lg p-6 mt-6">
          <p class="font-bold text-gray-900 text-lg mb-2">The $19 Sweet Spot:</p>
          <p class="text-gray-700 leading-relaxed">
            $19 is psychologically significant. It's under $20 which feels like "almost nothing." It's less than a meal, less than a movie ticket. This price point maximizes impulse acceptance.
          </p>
        </div>
      </div>

      <!-- Section 5: Key Messaging Strategy -->
      <div class="bg-white rounded-2xl p-8 shadow-lg mb-8 border-2 border-gray-100">
        <h2 class="flex items-center text-3xl font-bold mb-6 text-gray-900">
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg mr-4">5</span>
          Key Messaging Strategy
        </h2>

        <h3 class="text-2xl font-semibold mb-4 text-gray-900">Focus on "Try" Not "Buy"</h3>
        <p class="text-gray-700 text-lg mb-4 leading-relaxed">
          Every element should reduce commitment anxiety:
        </p>
        <div class="grid md:grid-cols-2 gap-4 mb-8">
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <span class="text-gray-700">"Just try it and see for yourself"</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <span class="text-gray-700">"Risk-free trial size"</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <span class="text-gray-700">"Perfect way to test it out"</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <span class="text-gray-700">"See if it works for you"</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <span class="text-gray-700">"If you love it, order more later"</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <span class="text-gray-700">"No commitment beyond this one bottle"</span>
          </div>
        </div>

        <h3 class="text-2xl font-semibold mb-4 text-gray-900">Emphasize the Absurdly Low Price</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <span class="text-gray-700">"Less than $1 per day"</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <span class="text-gray-700">"Less than a coffee"</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <span class="text-gray-700">"Cheaper than lunch"</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <span class="text-gray-700">"Only $19 to find out if it works"</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <span class="text-gray-700">"Almost silly to say no at this price"</span>
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
            <strong class="text-gray-900">Keep Price Under $30:</strong>
            <span class="text-gray-700"> Above $30, it stops feeling like an impulse buy</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Single Bottle Only:</strong>
            <span class="text-gray-700"> Don't offer multiple quantities - keep it simple</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Emphasize "Final":</strong>
            <span class="text-gray-700"> Make it clear the funnel ends after this</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Use Trial Language:</strong>
            <span class="text-gray-700"> "Trial," "starter," "sample" reduce commitment fear</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Show Massive Discount:</strong>
            <span class="text-gray-700"> 50-70% off retail makes it irresistible</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">No Pressure Decline:</strong>
            <span class="text-gray-700"> At this point, let them go gracefully</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">One Last Testimonial:</strong>
            <span class="text-gray-700"> Someone who "almost skipped it" and loved it</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Keep It Short:</strong>
            <span class="text-gray-700"> Don't over-explain - simple and quick decision</span>
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
            This is your last chance - don't blow it with these mistakes.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-lg">❌</span>
            <strong class="text-gray-900">Still Too Expensive:</strong>
            <span class="text-gray-700"> Above $30 kills the impulse buy psychology</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-lg">❌</span>
            <strong class="text-gray-900">Multiple Options:</strong>
            <span class="text-gray-700"> Keep it to ONE simple trial offer</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-lg">❌</span>
            <strong class="text-gray-900">Not Emphasizing "Final":</strong>
            <span class="text-gray-700"> Customers need to know this is the last offer</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-lg">❌</span>
            <strong class="text-gray-900">Overselling:</strong>
            <span class="text-gray-700"> Keep copy short - don't make them overthink</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-lg">❌</span>
            <strong class="text-gray-900">Aggressive Decline Language:</strong>
            <span class="text-gray-700"> At this point, respect their decision</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-lg">❌</span>
            <strong class="text-gray-900">No Social Proof:</strong>
            <span class="text-gray-700"> Need that "I almost skipped this" testimonial</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-lg">❌</span>
            <strong class="text-gray-900">Complex Positioning:</strong>
            <span class="text-gray-700"> Should be dead simple: "Try 1 bottle for $19"</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-lg">❌</span>
            <strong class="text-gray-900">Missing Finality Cues:</strong>
            <span class="text-gray-700"> Make it clear they're heading to thank you page next</span>
          </div>
        </div>
      </div>

      <!-- Section 8: Strategic Purpose -->
      <div class="bg-white rounded-2xl p-8 shadow-lg mb-8 border-2 border-gray-100">
        <h2 class="flex items-center text-3xl font-bold mb-6 text-gray-900">
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg mr-4">8</span>
          Strategic Purpose
        </h2>

        <h3 class="text-2xl font-semibold mb-4 text-gray-900">Beyond Immediate Revenue</h3>
        <p class="text-gray-700 text-lg mb-4 leading-relaxed">
          This downsell serves multiple purposes:
        </p>
        <div class="grid md:grid-cols-2 gap-4 mb-6">
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Revenue Recovery:</strong>
            <span class="text-gray-700"> Capture 10-20% who would otherwise decline everything</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Product Introduction:</strong>
            <span class="text-gray-700"> Get complementary product into their hands</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Future Sales:</strong>
            <span class="text-gray-700"> If they like it, they'll reorder at full price</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Email Segmentation:</strong>
            <span class="text-gray-700"> Now you know they're interested in both product lines</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 relative pl-10">
            <span class="absolute left-3 top-4 text-green-500 font-bold text-lg">✓</span>
            <strong class="text-gray-900">Reduced Acquisition Cost:</strong>
            <span class="text-gray-700"> Every $19 helps offset ad spend</span>
          </div>
        </div>

        <div class="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
          <p class="font-bold text-gray-900 text-lg mb-2">Long-term Value:</p>
          <p class="text-gray-700 leading-relaxed">
            30-40% of customers who accept this trial offer become repeat buyers of the complementary product line. You're not just making $19 - you're potentially creating a multi-product customer.
          </p>
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
            <p class="text-gray-700 ml-11">10-20% of those who declined Upsell 2. Top performers hit 25%.</p>
          </div>

          <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-5 border-l-4 border-orange-600">
            <div class="flex items-start mb-2">
              <span class="text-2xl mr-3">💵</span>
              <strong class="text-gray-900 text-lg">Optimal Price Point</strong>
            </div>
            <p class="text-gray-700 ml-11">$19-27 range performs best. $19 slightly outperforms $27.</p>
          </div>

          <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 border-l-4 border-green-600">
            <div class="flex items-start mb-2">
              <span class="text-2xl mr-3">💰</span>
              <strong class="text-gray-900 text-lg">Revenue Recovery</strong>
            </div>
            <p class="text-gray-700 ml-11">If 500 people decline Upsell 2, and 75 accept downsell at $19 = $1,425 recovered revenue.</p>
          </div>

          <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-5 border-l-4 border-purple-600">
            <div class="flex items-start mb-2">
              <span class="text-2xl mr-3">🔄</span>
              <strong class="text-gray-900 text-lg">Future Value</strong>
            </div>
            <p class="text-gray-700 ml-11">30-40% of trial buyers become repeat customers of complementary product.</p>
          </div>

          <div class="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-5 border-l-4 border-indigo-600">
            <div class="flex items-start mb-2">
              <span class="text-2xl mr-3">📊</span>
              <strong class="text-gray-900 text-lg">Complete Funnel Impact</strong>
            </div>
            <p class="text-gray-700 ml-11">Proper upsell/downsell sequence can increase AOV by 60-120% over initial purchase.</p>
          </div>

          <div class="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-5 border-l-4 border-red-600">
            <div class="flex items-start mb-2">
              <span class="text-2xl mr-3">⚡</span>
              <strong class="text-gray-900 text-lg">Load Speed Critical</strong>
            </div>
            <p class="text-gray-700 ml-11">Must load in under 2 seconds - this is final chance, don't lose them to slow loading.</p>
          </div>
        </div>
      </div>

        <!-- Navigation -->
        <div class="flex flex-col sm:flex-row gap-4 mt-12">
          <NuxtLink
            to="/step5-upsell2"
            class="flex-1 bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold text-center hover:bg-blue-50 transition-all duration-300 hover:shadow-lg"
          >
            ← Previous: Upsell 2
          </NuxtLink>
          <NuxtLink
            to="/step7-thankyou"
            class="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Next: Thank You Page →
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Step 6: Downsell 2 - BuyGoods Vendor Guide',
  description: 'Final recovery offer with trial or starter size of complementary product. Learn pricing strategy, required elements, and best practices for your Downsell 2 funnel page.'
})

// Use useHead for additional meta tags if needed
useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
  ],
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
