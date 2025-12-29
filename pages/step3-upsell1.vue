<template>
  <div>
    <Navbar :breadcrumbs="['Step 2: Upsell 1']" />
    <Sidebar :current-step="2" />

    <div class="page-content">
      <!-- Header Section -->
      <div class="header">
        <div class="step-badge">STEP 2 OF 7</div>
        <h1>Upsell 1: More Quantity</h1>
        <p>Increase order value by offering additional bottles at a special discount</p>
      </div>

      <!-- Main Container -->
      <div class="mx-auto px-4 py-16" style="max-width: 90%;">
      <!-- Section 1: What is Upsell 1? -->
      <div class="bg-white border-2 border-gray-200 rounded-xl p-8 mb-8 shadow-sm">
        <h2 class="flex items-center text-3xl font-bold mb-5 text-gray-900">
          <span class="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold rounded-full mr-4 text-lg">
            1
          </span>
          What is Upsell 1?
        </h2>
        <p class="text-gray-600 text-lg mb-4 leading-relaxed">
          Immediately after a customer completes their checkout, they see this "interruption" page offering them additional bottles of the SAME product at a discounted rate - but only if they add it to their order RIGHT NOW.
        </p>
        <p class="text-gray-600 text-lg mb-6 leading-relaxed">
          This is your first opportunity to increase the average order value (AOV). Since the customer just committed to buying your product, they're in a "buying mindset" and are more likely to accept this upgrade.
        </p>
        <div class="border-l-4 border-green-500 bg-green-50 p-5 rounded-lg">
          <strong class="text-gray-900 block mb-2 text-lg">Why This Works:</strong>
          <p class="text-gray-700">
            Customers have already overcome their purchase objections and entered payment info. Adding to their order with one click is psychologically easier than making a new purchase later. Acceptance rates of 20-35% are common.
          </p>
        </div>
      </div>

      <!-- Section 2: Visual Structure -->
      <div class="bg-white border-2 border-gray-200 rounded-xl p-8 mb-8 shadow-sm">
        <h2 class="flex items-center text-3xl font-bold mb-5 text-gray-900">
          <span class="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold rounded-full mr-4 text-lg">
            2
          </span>
          Visual Structure
        </h2>
        <p class="text-gray-600 text-lg mb-6 leading-relaxed">
          Here's how your Upsell 1 page should look:
        </p>

        <!-- Upsell Preview -->
        <div class="bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg p-10 my-6 text-center">
          <!-- Interrupt Headline -->
          <div class="bg-red-500 text-white px-5 py-5 rounded-lg text-4xl font-bold mb-6">
            WAIT! Your Order Is Not Complete...
          </div>

          <!-- VIP Badge -->
          <div class="inline-block bg-gradient-to-r from-amber-400 to-amber-500 text-white px-8 py-3 rounded-lg text-xl font-bold my-5">
            ⭐ EXCLUSIVE VIP UPGRADE ⭐
          </div>

          <!-- Main Headline -->
          <h3 class="text-3xl text-gray-900 font-bold my-6">
            Add 3 More Bottles to Your Order at 40% OFF
          </h3>

          <!-- Description -->
          <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Because you're a new customer, we want to make sure you have enough supply to experience the FULL benefits. Add 3 more bottles to your order right now at a special discounted price - available only on this page!
          </p>

          <!-- Product Showcase -->
          <div class="flex justify-center gap-8 my-6 flex-wrap">
            <div class="bg-gray-100 w-48 h-64 flex items-center justify-center rounded-lg border-2 border-gray-200 text-gray-600 text-sm">
              [ PRODUCT IMAGE ]<br>3 Bottles
            </div>
          </div>

          <!-- Offer Box -->
          <div class="bg-white border-4 border-blue-600 rounded-xl p-8 my-6 shadow-lg shadow-blue-200">
            <h3 class="text-blue-600 font-bold text-xl mb-5">Your VIP Upgrade Offer:</h3>

            <!-- Price Comparison -->
            <div class="grid grid-cols-2 gap-5 my-6">
              <!-- Old Price -->
              <div class="bg-red-50 border-2 border-gray-200 rounded-lg p-5 text-center">
                <div class="font-semibold text-gray-600">Regular Price</div>
                <div class="text-4xl font-bold my-3">$207</div>
                <div class="text-sm text-gray-600">($69 per bottle)</div>
              </div>

              <!-- New Price -->
              <div class="bg-green-50 border-4 border-green-500 rounded-lg p-5 text-center">
                <div class="font-semibold text-green-600">Your VIP Price Today</div>
                <div class="text-4xl font-bold text-green-600 my-3">$117</div>
                <div class="text-sm text-green-600 font-semibold">($39 per bottle - SAVE $90!)</div>
              </div>
            </div>

            <!-- Benefits List -->
            <ul class="text-left max-w-md mx-auto space-y-2 my-6">
              <li class="py-2 pl-7 relative">
                <span class="absolute left-0 text-green-600 font-bold">✓</span>
                Same product you just ordered
              </li>
              <li class="py-2 pl-7 relative">
                <span class="absolute left-0 text-green-600 font-bold">✓</span>
                40% discount - ONE TIME ONLY
              </li>
              <li class="py-2 pl-7 relative">
                <span class="absolute left-0 text-green-600 font-bold">✓</span>
                Ships with your current order
              </li>
              <li class="py-2 pl-7 relative">
                <span class="absolute left-0 text-green-600 font-bold">✓</span>
                Same 60-day money-back guarantee
              </li>
              <li class="py-2 pl-7 relative">
                <span class="absolute left-0 text-green-600 font-bold">✓</span>
                One-click add to order (no re-entering info)
              </li>
            </ul>
          </div>

          <!-- Timer Box -->
          <div class="bg-amber-100 border-2 border-amber-400 rounded-lg p-5 my-6 text-center">
            <div class="font-semibold text-gray-900">⏰ This Offer Expires In:</div>
            <div class="text-5xl font-bold text-red-500 my-3">5:00</div>
            <div class="text-sm text-gray-600">This discount is only available right now</div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex gap-4 my-8 flex-wrap justify-center">
            <div class="flex-1 min-w-64 bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-5 rounded-lg text-xl font-bold text-center">
              [ BUTTON: "YES! Add 3 Bottles For Just $117" ]
            </div>
            <div class="flex-1 min-w-64 bg-white text-gray-600 px-10 py-5 border-2 border-gray-200 rounded-lg font-semibold text-center">
              [ LINK: "No thanks, I don't want to save $90" ]
            </div>
          </div>
        </div>
      </div>

      <!-- Section 3: Required Elements Checklist -->
      <div class="bg-white border-2 border-gray-200 rounded-xl p-8 mb-8 shadow-sm">
        <h2 class="flex items-center text-3xl font-bold mb-5 text-gray-900">
          <span class="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold rounded-full mr-4 text-lg">
            3
          </span>
          Required Elements Checklist
        </h2>

        <ul class="columns-2 gap-6 my-6">
          <li class="py-3 px-3 pl-10 bg-gray-50 rounded-lg relative mb-2 break-inside-avoid">
            <span class="absolute left-3 text-green-600 font-bold">✓</span>
            <strong>Interruption Headline:</strong> "WAIT!" or similar to grab attention
          </li>
          <li class="py-3 px-3 pl-10 bg-gray-50 rounded-lg relative mb-2 break-inside-avoid">
            <span class="absolute left-3 text-green-600 font-bold">✓</span>
            <strong>VIP/Exclusive Positioning:</strong> Make it feel special and time-limited
          </li>
          <li class="py-3 px-3 pl-10 bg-gray-50 rounded-lg relative mb-2 break-inside-avoid">
            <span class="absolute left-3 text-green-600 font-bold">✓</span>
            <strong>Clear Value Proposition:</strong> Explain what they're getting
          </li>
          <li class="py-3 px-3 pl-10 bg-gray-50 rounded-lg relative mb-2 break-inside-avoid">
            <span class="absolute left-3 text-green-600 font-bold">✓</span>
            <strong>Product Image:</strong> Same product they just bought
          </li>
          <li class="py-3 px-3 pl-10 bg-gray-50 rounded-lg relative mb-2 break-inside-avoid">
            <span class="absolute left-3 text-green-600 font-bold">✓</span>
            <strong>Price Comparison:</strong> Show regular price vs. discounted price
          </li>
          <li class="py-3 px-3 pl-10 bg-gray-50 rounded-lg relative mb-2 break-inside-avoid">
            <span class="absolute left-3 text-green-600 font-bold">✓</span>
            <strong>Savings Calculator:</strong> Show exact dollar amount saved
          </li>
          <li class="py-3 px-3 pl-10 bg-gray-50 rounded-lg relative mb-2 break-inside-avoid">
            <span class="absolute left-3 text-green-600 font-bold">✓</span>
            <strong>Benefit List:</strong> Why they should accept this offer
          </li>
          <li class="py-3 px-3 pl-10 bg-gray-50 rounded-lg relative mb-2 break-inside-avoid">
            <span class="absolute left-3 text-green-600 font-bold">✓</span>
            <strong>Urgency Element:</strong> Timer or "one-time only" messaging
          </li>
          <li class="py-3 px-3 pl-10 bg-gray-50 rounded-lg relative mb-2 break-inside-avoid">
            <span class="absolute left-3 text-green-600 font-bold">✓</span>
            <strong>Strong Yes Button:</strong> Action-oriented with price included
          </li>
          <li class="py-3 px-3 pl-10 bg-gray-50 rounded-lg relative mb-2 break-inside-avoid">
            <span class="absolute left-3 text-green-600 font-bold">✓</span>
            <strong>Weak No Button:</strong> De-emphasized decline option
          </li>
          <li class="py-3 px-3 pl-10 bg-gray-50 rounded-lg relative mb-2 break-inside-avoid">
            <span class="absolute left-3 text-green-600 font-bold">✓</span>
            <strong>One-Click Acceptance:</strong> No need to re-enter payment info
          </li>
        </ul>
      </div>

      <!-- Section 4: Pricing Strategy -->
      <div class="bg-white border-2 border-gray-200 rounded-xl p-8 mb-8 shadow-sm">
        <h2 class="flex items-center text-3xl font-bold mb-5 text-gray-900">
          <span class="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold rounded-full mr-4 text-lg">
            4
          </span>
          Pricing Strategy
        </h2>

        <table class="w-full border-collapse my-6">
          <thead>
            <tr>
              <th class="text-left p-4 bg-gray-50 font-semibold text-gray-900 border-b border-gray-200">Original Package</th>
              <th class="text-left p-4 bg-gray-50 font-semibold text-gray-900 border-b border-gray-200">Upsell Offer</th>
              <th class="text-left p-4 bg-gray-50 font-semibold text-gray-900 border-b border-gray-200">Discount Level</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-4 text-gray-600 border-b border-gray-200">1 Bottle ($69)</td>
              <td class="p-4 text-gray-600 border-b border-gray-200">Add 2 more bottles for $98 (total: 3 bottles)</td>
              <td class="p-4 text-gray-600 border-b border-gray-200">30% off per bottle</td>
            </tr>
            <tr>
              <td class="p-4 text-gray-600 border-b border-gray-200">3 Bottles ($147)</td>
              <td class="p-4 text-gray-600 border-b border-gray-200">Add 3 more bottles for $117 (total: 6 bottles)</td>
              <td class="p-4 text-gray-600 border-b border-gray-200">40% off per bottle</td>
            </tr>
            <tr>
              <td class="p-4 text-gray-600">6 Bottles ($234)</td>
              <td class="p-4 text-gray-600">Add 6 more bottles for $180 (total: 12 bottles)</td>
              <td class="p-4 text-gray-600">50% off per bottle</td>
            </tr>
          </tbody>
        </table>

        <div class="border-l-4 border-green-500 bg-green-50 p-5 rounded-lg">
          <strong class="text-gray-900 block mb-2 text-lg">Discount Sweet Spot:</strong>
          <p class="text-gray-700">
            Offer 30-50% off the regular per-bottle price. Less than 30% doesn't feel special enough. More than 50% can raise suspicion about your regular pricing.
          </p>
        </div>
      </div>

      <!-- Section 5: Psychology & Positioning -->
      <div class="bg-white border-2 border-gray-200 rounded-xl p-8 mb-8 shadow-sm">
        <h2 class="flex items-center text-3xl font-bold mb-5 text-gray-900">
          <span class="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold rounded-full mr-4 text-lg">
            5
          </span>
          Psychology & Positioning
        </h2>

        <h3 class="text-2xl font-bold text-gray-900 my-6 mt-8">Why Customers Accept Upsells</h3>
        <ul class="columns-2 gap-6 mb-8">
          <li class="py-3 px-3 pl-10 bg-gray-50 rounded-lg relative mb-2 break-inside-avoid">
            <span class="absolute left-3 text-green-600 font-bold">✓</span>
            <strong>Already in Buying Mode:</strong> They just made a purchase decision
          </li>
          <li class="py-3 px-3 pl-10 bg-gray-50 rounded-lg relative mb-2 break-inside-avoid">
            <span class="absolute left-3 text-green-600 font-bold">✓</span>
            <strong>Sunk Cost Fallacy:</strong> They've invested time and already entered payment info
          </li>
          <li class="py-3 px-3 pl-10 bg-gray-50 rounded-lg relative mb-2 break-inside-avoid">
            <span class="absolute left-3 text-green-600 font-bold">✓</span>
            <strong>Fear of Missing Out (FOMO):</strong> "One-time only" creates urgency
          </li>
          <li class="py-3 px-3 pl-10 bg-gray-50 rounded-lg relative mb-2 break-inside-avoid">
            <span class="absolute left-3 text-green-600 font-bold">✓</span>
            <strong>Desire to Maximize Results:</strong> More product = better/faster results
          </li>
          <li class="py-3 px-3 pl-10 bg-gray-50 rounded-lg relative mb-2 break-inside-avoid">
            <span class="absolute left-3 text-green-600 font-bold">✓</span>
            <strong>Perceived Value:</strong> Significant discount makes it feel like a smart decision
          </li>
        </ul>

        <h3 class="text-2xl font-bold text-gray-900 my-6">Key Messaging Points</h3>
        <p class="text-gray-600 text-lg mb-4 leading-relaxed">Your copy should emphasize:</p>
        <ul class="columns-2 gap-6">
          <li class="py-3 px-3 pl-10 bg-gray-50 rounded-lg relative mb-2 break-inside-avoid">
            <span class="absolute left-3 text-green-600 font-bold">✓</span>
            This discount is ONLY available right now on this page
          </li>
          <li class="py-3 px-3 pl-10 bg-gray-50 rounded-lg relative mb-2 break-inside-avoid">
            <span class="absolute left-3 text-green-600 font-bold">✓</span>
            Customers who buy more see better/faster results
          </li>
          <li class="py-3 px-3 pl-10 bg-gray-50 rounded-lg relative mb-2 break-inside-avoid">
            <span class="absolute left-3 text-green-600 font-bold">✓</span>
            Free/combined shipping (one delivery)
          </li>
          <li class="py-3 px-3 pl-10 bg-gray-50 rounded-lg relative mb-2 break-inside-avoid">
            <span class="absolute left-3 text-green-600 font-bold">✓</span>
            One-click convenience (no re-entering information)
          </li>
          <li class="py-3 px-3 pl-10 bg-gray-50 rounded-lg relative mb-2 break-inside-avoid">
            <span class="absolute left-3 text-green-600 font-bold">✓</span>
            Same guarantee applies to the upsell
          </li>
          <li class="py-3 px-3 pl-10 bg-gray-50 rounded-lg relative mb-2 break-inside-avoid">
            <span class="absolute left-3 text-green-600 font-bold">✓</span>
            The regular price shows this is a special deal
          </li>
        </ul>
      </div>

      <!-- Section 6: Best Practices -->
      <div class="bg-white border-2 border-gray-200 rounded-xl p-8 mb-8 shadow-sm">
        <h2 class="flex items-center text-3xl font-bold mb-5 text-gray-900">
          <span class="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold rounded-full mr-4 text-lg">
            6
          </span>
          Best Practices
        </h2>

        <ul class="columns-2 gap-6 my-6">
          <li class="py-3 px-3 pl-10 bg-gray-50 rounded-lg relative mb-2 break-inside-avoid">
            <span class="absolute left-3 text-green-600 font-bold">✓</span>
            <strong>Keep It Simple:</strong> One offer only - don't confuse with multiple options
          </li>
          <li class="py-3 px-3 pl-10 bg-gray-50 rounded-lg relative mb-2 break-inside-avoid">
            <span class="absolute left-3 text-green-600 font-bold">✓</span>
            <strong>Make "Yes" Prominent:</strong> Large, colorful button with clear benefit
          </li>
          <li class="py-3 px-3 pl-10 bg-gray-50 rounded-lg relative mb-2 break-inside-avoid">
            <span class="absolute left-3 text-green-600 font-bold">✓</span>
            <strong>De-emphasize "No":</strong> Smaller, less prominent decline option
          </li>
          <li class="py-3 px-3 pl-10 bg-gray-50 rounded-lg relative mb-2 break-inside-avoid">
            <span class="absolute left-3 text-green-600 font-bold">✓</span>
            <strong>Use Negative Decline Copy:</strong> "No thanks, I don't want to save..." reminds them of loss
          </li>
          <li class="py-3 px-3 pl-10 bg-gray-50 rounded-lg relative mb-2 break-inside-avoid">
            <span class="absolute left-3 text-green-600 font-bold">✓</span>
            <strong>Add Social Proof:</strong> "87% of customers add this to their order"
          </li>
          <li class="py-3 px-3 pl-10 bg-gray-50 rounded-lg relative mb-2 break-inside-avoid">
            <span class="absolute left-3 text-green-600 font-bold">✓</span>
            <strong>Show Timer:</strong> 5-10 minute countdown creates urgency
          </li>
          <li class="py-3 px-3 pl-10 bg-gray-50 rounded-lg relative mb-2 break-inside-avoid">
            <span class="absolute left-3 text-green-600 font-bold">✓</span>
            <strong>Emphasize Convenience:</strong> "One-click" and "no re-entering info"
          </li>
          <li class="py-3 px-3 pl-10 bg-gray-50 rounded-lg relative mb-2 break-inside-avoid">
            <span class="absolute left-3 text-green-600 font-bold">✓</span>
            <strong>Test Different Quantities:</strong> Try offering 2, 3, or 4 additional bottles
          </li>
        </ul>
      </div>

      <!-- Section 7: Common Mistakes to Avoid -->
      <div class="bg-white border-2 border-gray-200 rounded-xl p-8 mb-8 shadow-sm">
        <h2 class="flex items-center text-3xl font-bold mb-5 text-gray-900">
          <span class="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold rounded-full mr-4 text-lg">
            7
          </span>
          Common Mistakes to Avoid
        </h2>

        <div class="border-l-4 border-red-500 bg-red-50 p-5 rounded-lg mb-6">
          <strong class="text-gray-900 block mb-2 text-lg">Warning:</strong>
          <p class="text-gray-700">
            These mistakes dramatically reduce acceptance rates.
          </p>
        </div>

        <ul class="columns-2 gap-6 my-6">
          <li class="py-3 px-3 pl-10 bg-gray-50 rounded-lg relative mb-2 break-inside-avoid">
            <span class="absolute left-3 text-2xl">❌</span>
            <strong>Weak Discount:</strong> Less than 25% off feels insignificant
          </li>
          <li class="py-3 px-3 pl-10 bg-gray-50 rounded-lg relative mb-2 break-inside-avoid">
            <span class="absolute left-3 text-2xl">❌</span>
            <strong>Too Expensive:</strong> Upsell shouldn't exceed original order value by 2x
          </li>
          <li class="py-3 px-3 pl-10 bg-gray-50 rounded-lg relative mb-2 break-inside-avoid">
            <span class="absolute left-3 text-2xl">❌</span>
            <strong>Multiple Options:</strong> Keep it to ONE offer - choices reduce conversions
          </li>
          <li class="py-3 px-3 pl-10 bg-gray-50 rounded-lg relative mb-2 break-inside-avoid">
            <span class="absolute left-3 text-2xl">❌</span>
            <strong>No Urgency:</strong> Without time pressure, customers defer decisions
          </li>
          <li class="py-3 px-3 pl-10 bg-gray-50 rounded-lg relative mb-2 break-inside-avoid">
            <span class="absolute left-3 text-2xl">❌</span>
            <strong>Requires Re-Entry:</strong> Making customers enter payment again kills conversions
          </li>
          <li class="py-3 px-3 pl-10 bg-gray-50 rounded-lg relative mb-2 break-inside-avoid">
            <span class="absolute left-3 text-2xl">❌</span>
            <strong>Different Product:</strong> Save cross-sells for Upsell 2 - keep this same product
          </li>
          <li class="py-3 px-3 pl-10 bg-gray-50 rounded-lg relative mb-2 break-inside-avoid">
            <span class="absolute left-3 text-2xl">❌</span>
            <strong>Weak Headlines:</strong> Generic copy doesn't grab attention
          </li>
          <li class="py-3 px-3 pl-10 bg-gray-50 rounded-lg relative mb-2 break-inside-avoid">
            <span class="absolute left-3 text-2xl">❌</span>
            <strong>No Price Comparison:</strong> Show the savings clearly with before/after prices
          </li>
        </ul>
      </div>

      <!-- Metrics Box -->
      <div class="bg-white border-2 border-gray-200 rounded-xl p-8 mb-8 shadow-sm">
        <h2 class="flex items-center text-3xl mb-8 text-gray-900 font-bold">
          <span class="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg mr-4">📊</span>
          Performance Metrics & Benchmarks
        </h2>

        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 border-l-4 border-blue-600">
            <div class="flex items-start mb-2">
              <span class="text-2xl mr-3">📈</span>
              <strong class="text-gray-900 text-lg">Acceptance Rate</strong>
            </div>
            <p class="text-gray-700 ml-11">20-35% is the industry standard. Top performers achieve 40-50%.</p>
          </div>

          <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 border-l-4 border-green-600">
            <div class="flex items-start mb-2">
              <span class="text-2xl mr-3">💰</span>
              <strong class="text-gray-900 text-lg">AOV Increase</strong>
            </div>
            <p class="text-gray-700 ml-11">Successful Upsell 1 should increase your average order value by 25-40%.</p>
          </div>

          <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-5 border-l-4 border-purple-600">
            <div class="flex items-start mb-2">
              <span class="text-2xl mr-3">💵</span>
              <strong class="text-gray-900 text-lg">Revenue Impact</strong>
            </div>
            <p class="text-gray-700 ml-11">If 30% accept and upsell is $120, you add $36 per customer on average.</p>
          </div>

          <div class="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-5 border-l-4 border-indigo-600">
            <div class="flex items-start mb-2">
              <span class="text-2xl mr-3">✅</span>
              <strong class="text-gray-900 text-lg">Decline Rate Impact</strong>
            </div>
            <p class="text-gray-700 ml-11">Don't worry about declines - they still complete their original order. Declines have minimal effect on refunds.</p>
          </div>

          <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-5 border-l-4 border-orange-600">
            <div class="flex items-start mb-2">
              <span class="text-2xl mr-3">📱</span>
              <strong class="text-gray-900 text-lg">Mobile vs Desktop</strong>
            </div>
            <p class="text-gray-700 ml-11">Mobile acceptance rates run 10-15% lower - optimize mobile experience.</p>
          </div>

          <div class="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-5 border-l-4 border-red-600">
            <div class="flex items-start mb-2">
              <span class="text-2xl mr-3">⚡</span>
              <strong class="text-gray-900 text-lg">Page Load Time</strong>
            </div>
            <p class="text-gray-700 ml-11">Every 1 second delay costs 5-10% in acceptance - keep it fast!</p>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <div class="flex gap-4 mt-16 flex-col md:flex-row">
        <NuxtLink
          to="/step1-vsl"
          class="flex-1 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold border-2 border-blue-600 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all"
        >
          ← Previous: VSL Page
        </NuxtLink>
        <NuxtLink
          to="/step4-downsell1"
          class="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-center hover:shadow-lg hover:-translate-y-0.5 transition-all"
        >
          Next: Downsell 1 →
        </NuxtLink>
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
.page-content {
  margin-left: 280px;
}

@media (max-width: 768px) {
  .page-content {
    margin-left: 0;
  }

  :deep(.columns-2) {
    columns: 1;
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

<script setup>
useHead({
  title: 'Step 3: Upsell 1 - BuyGoods Vendor Guide',
  meta: [
    {
      name: 'description',
      content: 'Learn how to create an effective Upsell 1 page to increase average order value. Increase order value by offering additional bottles at a special discount.'
    },
    {
      name: 'keywords',
      content: 'upsell, sales funnel, conversion optimization, average order value, ecommerce'
    },
    {
      property: 'og:title',
      content: 'Step 3: Upsell 1 - BuyGoods Vendor Guide'
    },
    {
      property: 'og:description',
      content: 'Learn how to create an effective Upsell 1 page to increase average order value. Increase order value by offering additional bottles at a special discount.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0'
    },
    {
      httpEquiv: 'X-UA-Compatible',
      content: 'IE=edge'
    }
  ]
})
</script>

<style scoped>
/* Responsive column layout for checklists */
@media (max-width: 768px) {
  :deep(.columns-2) {
    columns: 1;
  }
}
</style>
