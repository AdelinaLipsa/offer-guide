<template>
  <div>
    <Navbar :breadcrumbs="['Step 7: Checkout Page (Reference)']" />
    <Sidebar :current-step="7" />

    <div class="page-content">
      <!-- Header -->
      <div class="header">
        <div class="step-badge">STEP 7 OF 7 - REFERENCE</div>
        <h1>DTC/Checkout Page</h1>
        <p>Convert viewers into customers with optimized pricing and package options</p>
      </div>

      <!-- Main Content -->
      <main class="w-full">
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4 text-center" style="display: none;">
          <div class="inline-block bg-white bg-opacity-20 px-5 py-2 rounded-full text-sm font-semibold mb-4">STEP 7 OF 7 - REFERENCE</div>
          <h1 class="text-5xl font-bold mb-4">DTC/Checkout Page</h1>
          <p class="text-xl opacity-95 max-w-3xl mx-auto">Convert viewers into customers with optimized pricing and package options</p>
        </div>

        <!-- Container -->
        <div class="mx-auto px-4 py-10" style="max-width: 90%;">
          <!-- Section 1: What is DTC -->
          <div class="bg-white border-2 border-gray-200 rounded-xl p-8 mb-8 shadow-sm">
            <h2 class="flex items-center text-3xl mb-5 text-gray-900 font-bold">
              <span class="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg mr-4">1</span>
              What is a DTC/Checkout Page?
            </h2>
            <p class="text-gray-600 text-lg mb-4 leading-relaxed">The Direct-to-Checkout (DTC) page is where customers land after clicking the buy button on your VSL. This page displays all your package options, pricing, and the order form in one seamless experience.</p>
            <p class="text-gray-600 text-lg mb-4 leading-relaxed">Unlike traditional e-commerce where customers browse multiple products, the DTC page focuses solely on converting the customer on YOUR product with strategic pricing psychology and package positioning.</p>

            <div class="border-l-4 border-green-500 bg-green-50 p-5 rounded-lg my-6">
              <strong class="text-gray-900 block mb-2 text-lg">Why DTC Works:</strong>
              <p class="text-gray-700">By presenting all options upfront with clear value propositions, you remove decision friction and guide customers toward your most profitable package (typically the "Best Value" 3-6 bottle option).</p>
            </div>
          </div>

          <!-- Section 2: 3-Tier Pricing -->
          <div class="bg-white border-2 border-gray-200 rounded-xl p-8 mb-8 shadow-sm">
            <h2 class="flex items-center text-3xl mb-5 text-gray-900 font-bold">
              <span class="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg mr-4">2</span>
              The 3-Tier Pricing Structure
            </h2>
            <p class="text-gray-600 text-lg mb-6 leading-relaxed">Always present exactly THREE package options. This is the sweet spot between choice and decision paralysis.</p>

            <!-- Pricing Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <!-- Basic Package -->
              <div class="bg-white border-2 border-gray-200 rounded-xl p-7 shadow-sm flex flex-col">
                <div class="bg-gray-100 h-40 flex items-center justify-center rounded-lg mb-4 text-gray-600 text-sm">[ PRODUCT IMAGE - 1 Bottle ]</div>
                <h4 class="text-2xl text-gray-900 mb-2 font-semibold">Basic Package</h4>
                <div class="text-4xl font-bold text-blue-600 my-4">$69<span class="text-lg font-normal text-gray-600">/bottle</span></div>
                <div class="text-gray-600 mb-4">1 Bottle - 30 Day Supply</div>
                <ul class="list-none space-y-2 my-5 flex-grow">
                  <li class="text-gray-600 text-sm pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-green-500 before:font-bold">Free shipping</li>
                  <li class="text-gray-600 text-sm pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-green-500 before:font-bold">60-day guarantee</li>
                  <li class="text-gray-600 text-sm pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-green-500 before:font-bold">Secure checkout</li>
                </ul>
                <button class="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg w-full mt-auto">[ BUTTON: "Select Package" ]</button>
              </div>

              <!-- Best Value Package (Popular) -->
              <div class="bg-white border-4 border-blue-600 rounded-xl p-7 shadow-lg scale-105 relative flex flex-col">
                <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-5 py-1.5 rounded-full text-xs font-bold">BEST VALUE</div>
                <div class="bg-gray-100 h-40 flex items-center justify-center rounded-lg mb-4 text-gray-600 text-sm">[ PRODUCT IMAGE - 3 Bottles ]</div>
                <h4 class="text-2xl text-gray-900 mb-2 font-semibold">Best Value Package</h4>
                <div class="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 w-fit">Save $120</div>
                <div class="text-4xl font-bold text-blue-600 my-4">$49<span class="text-lg font-normal text-gray-600">/bottle</span></div>
                <div class="text-gray-600 mb-4">3 Bottles + 3 FREE - 180 Day Supply</div>
                <ul class="list-none space-y-2 my-5 flex-grow">
                  <li class="text-gray-600 text-sm pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-green-500 before:font-bold">Free shipping</li>
                  <li class="text-gray-600 text-sm pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-green-500 before:font-bold">60-day guarantee</li>
                  <li class="text-gray-600 text-sm pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-green-500 before:font-bold">Secure checkout</li>
                  <li class="text-gray-600 text-sm pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-green-500 before:font-bold"><strong>3 FREE bonus bottles</strong></li>
                  <li class="text-gray-600 text-sm pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-green-500 before:font-bold"><strong>FREE bonus guides</strong></li>
                </ul>
                <button class="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg w-full mt-auto">[ BUTTON: "Select Best Value" ]</button>
              </div>

              <!-- Premium Package -->
              <div class="bg-white border-2 border-gray-200 rounded-xl p-7 shadow-sm flex flex-col">
                <div class="bg-gray-100 h-40 flex items-center justify-center rounded-lg mb-4 text-gray-600 text-sm">[ PRODUCT IMAGE - 6 Bottles ]</div>
                <h4 class="text-2xl text-gray-900 mb-2 font-semibold">Premium Package</h4>
                <div class="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 w-fit">Save $240</div>
                <div class="text-4xl font-bold text-blue-600 my-4">$39<span class="text-lg font-normal text-gray-600">/bottle</span></div>
                <div class="text-gray-600 mb-4">6 Bottles - 180 Day Supply</div>
                <ul class="list-none space-y-2 my-5 flex-grow">
                  <li class="text-gray-600 text-sm pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-green-500 before:font-bold">Free shipping</li>
                  <li class="text-gray-600 text-sm pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-green-500 before:font-bold">60-day guarantee</li>
                  <li class="text-gray-600 text-sm pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-green-500 before:font-bold">Secure checkout</li>
                  <li class="text-gray-600 text-sm pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-green-500 before:font-bold"><strong>Maximum savings</strong></li>
                </ul>
                <button class="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg w-full mt-auto">[ BUTTON: "Select Package" ]</button>
              </div>
            </div>

            <div class="border-l-4 border-green-500 bg-green-50 p-5 rounded-lg my-6">
              <strong class="text-gray-900 block mb-2 text-lg">Pricing Psychology:</strong>
              <p class="text-gray-700">The middle option (Best Value) should be highlighted and positioned as the recommended choice. 50-60% of customers will select this option when properly presented.</p>
            </div>
          </div>

          <!-- Section 3: Order Form Structure -->
          <div class="bg-white border-2 border-gray-200 rounded-xl p-8 mb-8 shadow-sm">
            <h2 class="flex items-center text-3xl mb-5 text-gray-900 font-bold">
              <span class="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg mr-4">3</span>
              Order Form Structure
            </h2>
            <p class="text-gray-600 text-lg mb-6 leading-relaxed">After selecting a package, customers see a simple order form. Keep it clean and minimize friction.</p>

            <div class="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8">
              <h3 class="text-center text-gray-900 text-2xl mb-6 font-semibold">Complete Your Order</h3>

              <div class="bg-blue-100 px-4 py-4 rounded-lg mb-6 text-center">
                <strong class="text-blue-600 block">Selected: Best Value Package - 3 Bottles + 3 FREE</strong>
                <div class="text-2xl font-bold mt-2">$294 <span class="line-through text-gray-500">$147</span></div>
              </div>

              <!-- Billing Information -->
              <div class="mb-6">
                <h4 class="font-semibold mb-3 text-gray-900">Billing Information</h4>
                <div class="bg-white border-2 border-gray-200 rounded-lg p-3 mb-4 text-gray-600">[ INPUT: First Name ]</div>
                <div class="bg-white border-2 border-gray-200 rounded-lg p-3 mb-4 text-gray-600">[ INPUT: Last Name ]</div>
                <div class="bg-white border-2 border-gray-200 rounded-lg p-3 mb-4 text-gray-600">[ INPUT: Email Address ]</div>
                <div class="bg-white border-2 border-gray-200 rounded-lg p-3 mb-4 text-gray-600">[ INPUT: Phone Number ]</div>
              </div>

              <!-- Shipping Address -->
              <div class="mb-6">
                <h4 class="font-semibold mb-3 text-gray-900">Shipping Address</h4>
                <div class="bg-white border-2 border-gray-200 rounded-lg p-3 mb-4 text-gray-600">[ INPUT: Street Address ]</div>
                <div class="bg-white border-2 border-gray-200 rounded-lg p-3 mb-4 text-gray-600">[ INPUT: City ]</div>
                <div class="grid grid-cols-2 gap-3 mb-4">
                  <div class="bg-white border-2 border-gray-200 rounded-lg p-3 text-gray-600">[ INPUT: State ]</div>
                  <div class="bg-white border-2 border-gray-200 rounded-lg p-3 text-gray-600">[ INPUT: ZIP Code ]</div>
                </div>
              </div>

              <!-- Payment Information -->
              <div class="mb-8">
                <h4 class="font-semibold mb-3 text-gray-900">Payment Information</h4>
                <div class="bg-white border-2 border-gray-200 rounded-lg p-3 mb-4 text-gray-600">[ INPUT: Card Number ]</div>
                <div class="grid grid-cols-2 gap-3 mb-4">
                  <div class="bg-white border-2 border-gray-200 rounded-lg p-3 text-gray-600">[ INPUT: Expiration ]</div>
                  <div class="bg-white border-2 border-gray-200 rounded-lg p-3 text-gray-600">[ INPUT: CVV ]</div>
                </div>
              </div>

              <div class="text-center">
                <button class="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-12 rounded-lg inline-block max-w-sm text-lg">[ BUTTON: "Complete Secure Order" ]</button>
                <p class="text-xs text-gray-600 mt-3">🔒 Secure 256-bit SSL encrypted checkout</p>
              </div>
            </div>
          </div>

          <!-- Section 4: Trust & Security -->
          <div class="bg-white border-2 border-gray-200 rounded-xl p-8 mb-8 shadow-sm">
            <h2 class="flex items-center text-3xl mb-5 text-gray-900 font-bold">
              <span class="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg mr-4">4</span>
              Trust & Security Elements
            </h2>
            <p class="text-gray-600 text-lg mb-6 leading-relaxed">Display trust badges and guarantees prominently to reduce purchase anxiety.</p>

            <div class="flex flex-wrap justify-center gap-5 my-8">
              <div class="bg-white border-2 border-gray-200 rounded-lg p-4 text-center min-w-max">
                <div class="text-2xl mb-2">🔒</div>
                <strong class="text-sm">Secure Checkout</strong>
              </div>
              <div class="bg-white border-2 border-gray-200 rounded-lg p-4 text-center min-w-max">
                <div class="text-2xl mb-2">✓</div>
                <strong class="text-sm">60-Day Guarantee</strong>
              </div>
              <div class="bg-white border-2 border-gray-200 rounded-lg p-4 text-center min-w-max">
                <div class="text-2xl mb-2">📦</div>
                <strong class="text-sm">Free Shipping</strong>
              </div>
              <div class="bg-white border-2 border-gray-200 rounded-lg p-4 text-center min-w-max">
                <div class="text-2xl mb-2">⭐</div>
                <strong class="text-sm">5-Star Reviews</strong>
              </div>
            </div>

            <div class="border-l-4 border-green-500 bg-green-50 p-5 rounded-lg my-6">
              <strong class="text-gray-900 block mb-2 text-lg">Money-Back Guarantee is Essential:</strong>
              <p class="text-gray-700">A clear 60-day money-back guarantee can increase conversions by 30-40%. Make it prominent and risk-free.</p>
            </div>
          </div>

          <!-- Section 5: Required Elements Checklist -->
          <div class="bg-white border-2 border-gray-200 rounded-xl p-8 mb-8 shadow-sm">
            <h2 class="flex items-center text-3xl mb-5 text-gray-900 font-bold">
              <span class="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg mr-4">5</span>
              Required Elements Checklist
            </h2>

            <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 list-none">
              <li class="bg-gray-100 rounded-lg p-3 flex items-start relative pl-8 before:content-['✓'] before:absolute before:left-3 before:text-green-500 before:font-bold before:text-lg">
                <span><strong>3 Package Options:</strong> Basic, Best Value (highlighted), Premium</span>
              </li>
              <li class="bg-gray-100 rounded-lg p-3 flex items-start relative pl-8 before:content-['✓'] before:absolute before:left-3 before:text-green-500 before:font-bold before:text-lg">
                <span><strong>Clear Pricing:</strong> Show per-bottle price and total savings</span>
              </li>
              <li class="bg-gray-100 rounded-lg p-3 flex items-start relative pl-8 before:content-['✓'] before:absolute before:left-3 before:text-green-500 before:font-bold before:text-lg">
                <span><strong>Product Images:</strong> High-quality images for each package option</span>
              </li>
              <li class="bg-gray-100 rounded-lg p-3 flex items-start relative pl-8 before:content-['✓'] before:absolute before:left-3 before:text-green-500 before:font-bold before:text-lg">
                <span><strong>Highlight Best Value:</strong> Visual emphasis on recommended package</span>
              </li>
              <li class="bg-gray-100 rounded-lg p-3 flex items-start relative pl-8 before:content-['✓'] before:absolute before:left-3 before:text-green-500 before:font-bold before:text-lg">
                <span><strong>Savings Badges:</strong> Show dollar amount saved on bulk packages</span>
              </li>
              <li class="bg-gray-100 rounded-lg p-3 flex items-start relative pl-8 before:content-['✓'] before:absolute before:left-3 before:text-green-500 before:font-bold before:text-lg">
                <span><strong>Package Benefits:</strong> List what's included in each option</span>
              </li>
              <li class="bg-gray-100 rounded-lg p-3 flex items-start relative pl-8 before:content-['✓'] before:absolute before:left-3 before:text-green-500 before:font-bold before:text-lg">
                <span><strong>Simple Order Form:</strong> Minimal fields, clear labels</span>
              </li>
              <li class="bg-gray-100 rounded-lg p-3 flex items-start relative pl-8 before:content-['✓'] before:absolute before:left-3 before:text-green-500 before:font-bold before:text-lg">
                <span><strong>Trust Badges:</strong> Security, guarantee, shipping, reviews</span>
              </li>
              <li class="bg-gray-100 rounded-lg p-3 flex items-start relative pl-8 before:content-['✓'] before:absolute before:left-3 before:text-green-500 before:font-bold before:text-lg">
                <span><strong>Money-Back Guarantee:</strong> Prominently displayed with terms</span>
              </li>
              <li class="bg-gray-100 rounded-lg p-3 flex items-start relative pl-8 before:content-['✓'] before:absolute before:left-3 before:text-green-500 before:font-bold before:text-lg">
                <span><strong>Secure Payment Icons:</strong> SSL badge, accepted payment methods</span>
              </li>
              <li class="bg-gray-100 rounded-lg p-3 flex items-start relative pl-8 before:content-['✓'] before:absolute before:left-3 before:text-green-500 before:font-bold before:text-lg">
                <span><strong>Clear CTA Button:</strong> "Complete Order" or similar action-oriented text</span>
              </li>
            </ul>
          </div>

          <!-- Section 6: Package Positioning -->
          <div class="bg-white border-2 border-gray-200 rounded-xl p-8 mb-8 shadow-sm">
            <h2 class="flex items-center text-3xl mb-5 text-gray-900 font-bold">
              <span class="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg mr-4">6</span>
              Package Positioning Strategy
            </h2>

            <h3 class="text-2xl font-semibold text-gray-900 mb-4 mt-6">Why the Middle Option Wins</h3>
            <p class="text-gray-600 text-lg mb-6 leading-relaxed">The "Best Value" package (middle option) should account for 50-60% of sales. Here's how to position it:</p>

            <div class="overflow-x-auto">
              <table class="w-full border-collapse">
                <thead>
                  <tr>
                    <th class="bg-gray-100 px-4 py-3 text-left font-semibold text-gray-900 border-b-2 border-gray-200">Package</th>
                    <th class="bg-gray-100 px-4 py-3 text-left font-semibold text-gray-900 border-b-2 border-gray-200">Positioning Strategy</th>
                    <th class="bg-gray-100 px-4 py-3 text-left font-semibold text-gray-900 border-b-2 border-gray-200">Expected Sales %</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px-4 py-4 border-b border-gray-200 text-gray-600"><strong>Basic (1-2 bottles)</strong></td>
                    <td class="px-4 py-4 border-b border-gray-200 text-gray-600">Entry point, no emphasis, standard pricing</td>
                    <td class="px-4 py-4 border-b border-gray-200 text-gray-600">15-20%</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-4 border-b border-gray-200 text-gray-600"><strong>Best Value (3-6 bottles)</strong></td>
                    <td class="px-4 py-4 border-b border-gray-200 text-gray-600">Highlighted, labeled "BEST VALUE", bonus items included, moderate discount</td>
                    <td class="px-4 py-4 border-b border-gray-200 text-gray-600">50-60%</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-4 text-gray-600"><strong>Premium (6+ bottles)</strong></td>
                    <td class="px-4 py-4 text-gray-600">Maximum savings, bulk positioning, highest discount per unit</td>
                    <td class="px-4 py-4 text-gray-600">25-30%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="border-l-4 border-green-500 bg-green-50 p-5 rounded-lg my-6">
              <strong class="text-gray-900 block mb-2 text-lg">The Decoy Effect:</strong>
              <p class="text-gray-700">The Basic package serves as a "decoy" to make the Best Value package look like a better deal. The Premium package makes the Best Value seem reasonable, not excessive.</p>
            </div>
          </div>

          <!-- Section 7: Best Practices -->
          <div class="bg-white border-2 border-gray-200 rounded-xl p-8 mb-8 shadow-sm">
            <h2 class="flex items-center text-3xl mb-5 text-gray-900 font-bold">
              <span class="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg mr-4">7</span>
              Best Practices
            </h2>

            <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 list-none">
              <li class="bg-gray-100 rounded-lg p-3 flex items-start relative pl-8 before:content-['✓'] before:absolute before:left-3 before:text-green-500 before:font-bold before:text-lg">
                <span><strong>Mobile-First Design:</strong> 60%+ of orders come from mobile - test thoroughly</span>
              </li>
              <li class="bg-gray-100 rounded-lg p-3 flex items-start relative pl-8 before:content-['✓'] before:absolute before:left-3 before:text-green-500 before:font-bold before:text-lg">
                <span><strong>One-Click Package Selection:</strong> Don't make customers navigate to new pages</span>
              </li>
              <li class="bg-gray-100 rounded-lg p-3 flex items-start relative pl-8 before:content-['✓'] before:absolute before:left-3 before:text-green-500 before:font-bold before:text-lg">
                <span><strong>Show Savings Clearly:</strong> "$120 savings" is more compelling than "42% off"</span>
              </li>
              <li class="bg-gray-100 rounded-lg p-3 flex items-start relative pl-8 before:content-['✓'] before:absolute before:left-3 before:text-green-500 before:font-bold before:text-lg">
                <span><strong>Add Bonuses to Middle Tier:</strong> Free guides, extra bottles, etc. increase perceived value</span>
              </li>
              <li class="bg-gray-100 rounded-lg p-3 flex items-start relative pl-8 before:content-['✓'] before:absolute before:left-3 before:text-green-500 before:font-bold before:text-lg">
                <span><strong>Minimize Form Fields:</strong> Only ask for essential information</span>
              </li>
              <li class="bg-gray-100 rounded-lg p-3 flex items-start relative pl-8 before:content-['✓'] before:absolute before:left-3 before:text-green-500 before:font-bold before:text-lg">
                <span><strong>Use Progress Indicators:</strong> Show customers where they are in the checkout process</span>
              </li>
              <li class="bg-gray-100 rounded-lg p-3 flex items-start relative pl-8 before:content-['✓'] before:absolute before:left-3 before:text-green-500 before:font-bold before:text-lg">
                <span><strong>Display Multiple Payment Options:</strong> Credit card, PayPal, etc.</span>
              </li>
              <li class="bg-gray-100 rounded-lg p-3 flex items-start relative pl-8 before:content-['✓'] before:absolute before:left-3 before:text-green-500 before:font-bold before:text-lg">
                <span><strong>A/B Test Everything:</strong> Headlines, prices, package names, button colors</span>
              </li>
            </ul>
          </div>

          <!-- Section 8: Common Mistakes -->
          <div class="bg-white border-2 border-gray-200 rounded-xl p-8 mb-8 shadow-sm">
            <h2 class="flex items-center text-3xl mb-5 text-gray-900 font-bold">
              <span class="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg mr-4">8</span>
              Common Mistakes to Avoid
            </h2>

            <div class="border-l-4 border-red-500 bg-red-50 p-5 rounded-lg my-6">
              <strong class="text-gray-900 block mb-2 text-lg">Warning:</strong>
              <p class="text-gray-700">These mistakes can cut your conversion rate in half.</p>
            </div>

            <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 list-none">
              <li class="bg-gray-100 rounded-lg p-3 flex items-start relative pl-8 before:content-['❌'] before:absolute before:left-3 before:text-lg">
                <span><strong>Too Many Options:</strong> More than 3 packages creates decision paralysis</span>
              </li>
              <li class="bg-gray-100 rounded-lg p-3 flex items-start relative pl-8 before:content-['❌'] before:absolute before:left-3 before:text-lg">
                <span><strong>No Clear Recommendation:</strong> Customers need guidance - highlight your best value</span>
              </li>
              <li class="bg-gray-100 rounded-lg p-3 flex items-start relative pl-8 before:content-['❌'] before:absolute before:left-3 before:text-lg">
                <span><strong>Hidden Costs:</strong> Surprise shipping fees at checkout kill conversions</span>
              </li>
              <li class="bg-gray-100 rounded-lg p-3 flex items-start relative pl-8 before:content-['❌'] before:absolute before:left-3 before:text-lg">
                <span><strong>Complex Forms:</strong> Every additional field reduces completion by 5-10%</span>
              </li>
              <li class="bg-gray-100 rounded-lg p-3 flex items-start relative pl-8 before:content-['❌'] before:absolute before:left-3 before:text-lg">
                <span><strong>Weak Guarantee:</strong> "30-day money back" is less effective than "60-day"</span>
              </li>
              <li class="bg-gray-100 rounded-lg p-3 flex items-start relative pl-8 before:content-['❌'] before:absolute before:left-3 before:text-lg">
                <span><strong>No Trust Signals:</strong> Missing security badges increase abandonment</span>
              </li>
              <li class="bg-gray-100 rounded-lg p-3 flex items-start relative pl-8 before:content-['❌'] before:absolute before:left-3 before:text-lg">
                <span><strong>Unclear Pricing:</strong> Customers should instantly understand cost per bottle</span>
              </li>
              <li class="bg-gray-100 rounded-lg p-3 flex items-start relative pl-8 before:content-['❌'] before:absolute before:left-3 before:text-lg">
                <span><strong>Poor Mobile Experience:</strong> Broken mobile checkout = 60% revenue loss</span>
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
                  <span class="text-2xl mr-3">🛒</span>
                  <strong class="text-gray-900 text-lg">Checkout Conversion Rate</strong>
                </div>
                <p class="text-gray-700 ml-11">30-50% of people who land on this page should complete purchase. Below 25% indicates problems.</p>
              </div>

              <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 border-l-4 border-green-600">
                <div class="flex items-start mb-2">
                  <span class="text-2xl mr-3">⭐</span>
                  <strong class="text-gray-900 text-lg">Best Value Package Selection</strong>
                </div>
                <p class="text-gray-700 ml-11">Should account for 50-60% of all orders. If under 40%, your positioning needs work.</p>
              </div>

              <div class="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-5 border-l-4 border-red-600">
                <div class="flex items-start mb-2">
                  <span class="text-2xl mr-3">🚫</span>
                  <strong class="text-gray-900 text-lg">Cart Abandonment Rate</strong>
                </div>
                <p class="text-gray-700 ml-11">Expect 30-40% abandonment. Higher rates indicate friction in your checkout process.</p>
              </div>

              <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-5 border-l-4 border-purple-600">
                <div class="flex items-start mb-2">
                  <span class="text-2xl mr-3">💵</span>
                  <strong class="text-gray-900 text-lg">Average Order Value (AOV)</strong>
                </div>
                <p class="text-gray-700 ml-11">With proper package positioning, AOV should be $150-250 for supplement offers.</p>
              </div>

              <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-5 border-l-4 border-orange-600">
                <div class="flex items-start mb-2">
                  <span class="text-2xl mr-3">📱</span>
                  <strong class="text-gray-900 text-lg">Mobile vs Desktop Conversion</strong>
                </div>
                <p class="text-gray-700 ml-11">Mobile should convert at 70-80% the rate of desktop. Lower indicates mobile UX issues.</p>
              </div>

              <div class="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-5 border-l-4 border-indigo-600">
                <div class="flex items-start mb-2">
                  <span class="text-2xl mr-3">⏱️</span>
                  <strong class="text-gray-900 text-lg">Form Completion Time</strong>
                </div>
                <p class="text-gray-700 ml-11">Should take 2-3 minutes average. Longer times suggest form complexity issues.</p>
              </div>
            </div>
          </div>

          <!-- Navigation -->
          <div class="flex gap-4 mt-16 mb-10">
            <NuxtLink to="/step7-thankyou" class="flex-1 bg-white border-2 border-blue-600 text-blue-600 font-semibold py-4 rounded-lg text-center hover:-translate-y-0.5 transition-transform">
              ← Previous: Thank You Page
            </NuxtLink>
            <NuxtLink to="/" class="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 rounded-lg text-center hover:-translate-y-0.5 transition-transform">
              Back to Overview →
            </NuxtLink>
          </div>
        </div>
      </main>
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
  title: 'Step 2: DTC/Checkout Page - BuyGoods Vendor Guide',
  meta: [
    {
      name: 'description',
      content: 'Learn how to create an optimized DTC/Checkout page that converts viewers into customers with strategic pricing psychology and package positioning.'
    },
    {
      name: 'keywords',
      content: 'DTC, checkout page, pricing strategy, e-commerce, conversion optimization, vendor guide'
    },
    {
      property: 'og:title',
      content: 'Step 2: DTC/Checkout Page - BuyGoods Vendor Guide'
    },
    {
      property: 'og:description',
      content: 'Learn how to create an optimized DTC/Checkout page that converts viewers into customers with strategic pricing psychology and package positioning.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://example.com/step2-dtc'
    }
  ]
})
</script>
