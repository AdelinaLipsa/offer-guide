<template>
  <div>
    <Navbar :breadcrumbs="['Step 3: Upsell 1']" />
    <Sidebar :current-step="3" />

    <div class="page-content">
      <!-- Enhanced Header -->
      <div class="header">
        <!-- Logo Shadow (larger, blurred, behind) -->
        <img src="/bg-logo-white.png" alt="" class="logo-shadow" aria-hidden="true" />
        <!-- Logo Main (visible, on top) -->
        <img src="/bg-logo-white.png" alt="" class="logo-main" aria-hidden="true" />
        <div class="header-content">
          <div class="step-badge">STEP 3 OF 8</div>
          <h1>Upsell 1: More Quantity</h1>
          <p>Increase order value by offering additional bottles at a special discount</p>
        </div>

        <!-- Quick Stats Bar -->
        <div class="flex flex-wrap justify-center gap-6 mt-8">
          <div class="bg-white/10 backdrop-blur px-4 py-2 rounded-lg flex items-center gap-2">
            <Icon name="lucide:trending-up" class="w-4 h-4" />
            <span class="text-sm">20-35% Accept Rate</span>
          </div>
          <div class="bg-white/10 backdrop-blur px-4 py-2 rounded-lg flex items-center gap-2">
            <Icon name="lucide:dollar-sign" class="w-4 h-4" />
            <span class="text-sm">30-50% Discount</span>
          </div>
          <div class="bg-white/10 backdrop-blur px-4 py-2 rounded-lg flex items-center gap-2">
            <Icon name="lucide:coins" class="w-4 h-4" />
            <span class="text-sm">+25-40% AOV</span>
          </div>
        </div>
      </div>

      <div class="content-width py-10">

        <!-- Quick Jump Navigation -->
        <div class="bg-surface border border-border rounded-lg p-4 mb-8 sticky top-4 z-20">
          <div class="flex items-center gap-2 mb-3">
            <Icon name="lucide:compass" class="w-4 h-4 text-accent" />
            <span class="text-sm font-semibold text-navy-900">Quick Navigation</span>
          </div>
          <div class="flex flex-wrap gap-2">
            <a href="#overview" class="text-xs px-3 py-1.5 bg-surface-tertiary hover:bg-accent hover:text-white rounded-md transition-colors">Overview</a>
            <a href="#structure" class="text-xs px-3 py-1.5 bg-surface-tertiary hover:bg-accent hover:text-white rounded-md transition-colors">Visual Structure</a>
            <a href="#checklist" class="text-xs px-3 py-1.5 bg-surface-tertiary hover:bg-accent hover:text-white rounded-md transition-colors">Checklist</a>
            <a href="#pricing" class="text-xs px-3 py-1.5 bg-surface-tertiary hover:bg-accent hover:text-white rounded-md transition-colors">Pricing Strategy</a>
            <a href="#psychology" class="text-xs px-3 py-1.5 bg-surface-tertiary hover:bg-accent hover:text-white rounded-md transition-colors">Psychology</a>
            <a href="#best-practices" class="text-xs px-3 py-1.5 bg-surface-tertiary hover:bg-accent hover:text-white rounded-md transition-colors">Best Practices</a>
            <a href="#mistakes" class="text-xs px-3 py-1.5 bg-surface-tertiary hover:bg-accent hover:text-white rounded-md transition-colors">Mistakes</a>
            <a href="#metrics" class="text-xs px-3 py-1.5 bg-surface-tertiary hover:bg-accent hover:text-white rounded-md transition-colors">Metrics</a>
          </div>
        </div>

        <!-- Section 1: What is Upsell 1? -->
        <ContentCard id="overview">
          <SectionHeader :number="1" title="What is Upsell 1?" />
          <p class="text-charcoal-600 leading-relaxed mb-4">
            Immediately after a customer completes their checkout, they see this "interruption" page offering them additional bottles of the SAME product at a discounted rate - but only if they add it to their order RIGHT NOW.
          </p>
          <p class="text-charcoal-600 leading-relaxed mb-6">
            This is your first opportunity to increase the average order value (AOV). Since the customer just committed to buying your product, they're in a "buying mindset" and are more likely to accept this upgrade.
          </p>

          <!-- Key Benefits Grid -->
          <div class="grid md:grid-cols-3 gap-4 mb-6">
            <div class="bg-success-light border border-success/20 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:trending-up" class="w-5 h-5 text-success" />
                <span class="font-semibold text-navy-900">High Accept Rate</span>
              </div>
              <p class="text-sm text-charcoal-600">20-35% of customers accept, top performers hit 40-50%</p>
            </div>
            <div class="bg-accent-light border border-accent/20 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:mouse-pointer-click" class="w-5 h-5 text-accent" />
                <span class="font-semibold text-navy-900">One-Click Add</span>
              </div>
              <p class="text-sm text-charcoal-600">No re-entering payment info - frictionless purchase</p>
            </div>
            <div class="bg-warning-light border border-warning/20 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:clock" class="w-5 h-5 text-warning" />
                <span class="font-semibold text-navy-900">Buying Mindset</span>
              </div>
              <p class="text-sm text-charcoal-600">Customer already committed - objections overcome</p>
            </div>
          </div>

          <AlertBox variant="success" title="Why This Works">
            Customers have already overcome their purchase objections and entered payment info. Adding to their order with one click is psychologically easier than making a new purchase later. Acceptance rates of 20-35% are common.
          </AlertBox>
        </ContentCard>

        <!-- Section 2: Visual Structure -->
        <ContentCard id="structure">
          <SectionHeader :number="2" title="Visual Structure" />
          <p class="text-charcoal-600 leading-relaxed mb-6">
            Here's how your Upsell 1 page should look. The key is to interrupt, show value, and make accepting easy:
          </p>

          <!-- Upsell Preview -->
          <div class="bg-surface-tertiary border border-border rounded-lg p-6">
            <h3 class="text-navy-900 font-semibold text-lg text-center mb-6">Upsell Page Layout Preview</h3>

            <!-- Interrupt Headline -->
            <div class="bg-error text-white px-5 py-4 rounded-lg text-xl font-bold mb-6 text-center">
              <Icon name="lucide:alert-circle" class="w-5 h-5 inline mr-2" />
              WAIT! Your Order Is Not Complete...
            </div>

            <!-- VIP Badge -->
            <div class="text-center mb-4">
              <div class="inline-flex items-center gap-2 bg-warning text-white px-6 py-2 rounded-lg text-sm font-bold">
                <Icon name="lucide:star" class="w-4 h-4" />
                EXCLUSIVE VIP UPGRADE
                <Icon name="lucide:star" class="w-4 h-4" />
              </div>
            </div>

            <!-- Main Headline -->
            <h3 class="text-2xl text-navy-900 font-bold text-center mb-4">
              Add 3 More Bottles to Your Order at 40% OFF
            </h3>

            <!-- Description -->
            <p class="text-charcoal-600 max-w-2xl mx-auto mb-6 text-center">
              Because you're a new customer, we want to make sure you have enough supply to experience the FULL benefits. Add 3 more bottles to your order right now at a special discounted price.
            </p>

            <!-- Product Showcase -->
            <div class="flex justify-center mb-6">
              <div class="bg-white w-48 h-48 flex items-center justify-center rounded-lg border border-border">
                <div class="text-center">
                  <Icon name="lucide:packages" class="w-12 h-12 text-accent mx-auto mb-2" />
                  <div class="text-sm text-charcoal-600">3 Bottles</div>
                </div>
              </div>
            </div>

            <!-- Offer Box -->
            <div class="bg-white border-2 border-accent rounded-xl p-6 mb-6">
              <h4 class="text-accent font-bold text-lg mb-4 text-center">Your VIP Upgrade Offer:</h4>

              <!-- Price Comparison -->
              <div class="grid grid-cols-2 gap-4 mb-6">
                <div class="bg-error/5 border border-border rounded-lg p-4 text-center">
                  <div class="text-sm font-medium text-charcoal-600">Regular Price</div>
                  <div class="text-2xl font-bold text-charcoal-600 line-through my-2">$207</div>
                  <div class="text-xs text-charcoal-500">($69 per bottle)</div>
                </div>
                <div class="bg-success-light border-2 border-success rounded-lg p-4 text-center">
                  <div class="text-sm font-medium text-success">Your VIP Price</div>
                  <div class="text-2xl font-bold text-success my-2">$117</div>
                  <div class="text-xs text-success font-semibold">($39/bottle - SAVE $90!)</div>
                </div>
              </div>

              <!-- Benefits as horizontal pills -->
              <div class="flex flex-wrap justify-center gap-2 mb-4">
                <span class="bg-success/10 text-success px-3 py-1.5 rounded-full text-sm font-medium">Same product</span>
                <span class="bg-success/10 text-success px-3 py-1.5 rounded-full text-sm font-medium">40% OFF</span>
                <span class="bg-success/10 text-success px-3 py-1.5 rounded-full text-sm font-medium">Ships together</span>
                <span class="bg-success/10 text-success px-3 py-1.5 rounded-full text-sm font-medium">60-day guarantee</span>
                <span class="bg-success/10 text-success px-3 py-1.5 rounded-full text-sm font-medium">One-click add</span>
              </div>
            </div>

            <!-- Timer Box -->
            <div class="bg-warning-light border border-warning rounded-lg p-4 mb-6 text-center">
              <div class="flex items-center justify-center gap-2 mb-2">
                <Icon name="lucide:clock" class="w-4 h-4 text-warning" />
                <span class="font-semibold text-navy-900">This Offer Expires In:</span>
              </div>
              <div class="text-3xl font-bold text-error">5:00</div>
              <div class="text-xs text-charcoal-600 mt-1">This discount is only available right now</div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col md:flex-row gap-3">
              <div class="flex-1 bg-success text-white px-6 py-4 rounded-lg font-bold text-center">
                <Icon name="lucide:check" class="w-4 h-4 inline mr-2" />
                YES! Add 3 Bottles For Just $117
              </div>
              <div class="flex-1 bg-white text-charcoal-500 px-6 py-4 border border-border rounded-lg text-center text-sm">
                No thanks, I don't want to save $90
              </div>
            </div>
          </div>
        </ContentCard>

        <!-- Section 3: Required Elements - Numbered Steps -->
        <ContentCard id="checklist">
          <SectionHeader :number="3" title="Required Page Elements" />
          <p class="text-charcoal-600 leading-relaxed mb-6">
            Every Upsell 1 page must include these essential elements:
          </p>

          <div class="grid md:grid-cols-2 gap-3">
            <div class="flex items-start gap-3 p-3 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
              <div>
                <strong class="text-navy-900 text-sm">Interruption Headline</strong>
                <p class="text-xs text-charcoal-600">'WAIT!' or similar to grab attention</p>
              </div>
            </div>
            <div class="flex items-start gap-3 p-3 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
              <div>
                <strong class="text-navy-900 text-sm">VIP/Exclusive Positioning</strong>
                <p class="text-xs text-charcoal-600">Make it feel special and time-limited</p>
              </div>
            </div>
            <div class="flex items-start gap-3 p-3 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
              <div>
                <strong class="text-navy-900 text-sm">Clear Value Proposition</strong>
                <p class="text-xs text-charcoal-600">Explain what they're getting</p>
              </div>
            </div>
            <div class="flex items-start gap-3 p-3 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
              <div>
                <strong class="text-navy-900 text-sm">Product Image</strong>
                <p class="text-xs text-charcoal-600">Same product they just bought</p>
              </div>
            </div>
            <div class="flex items-start gap-3 p-3 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">5</span>
              <div>
                <strong class="text-navy-900 text-sm">Price Comparison</strong>
                <p class="text-xs text-charcoal-600">Show regular vs. discounted price</p>
              </div>
            </div>
            <div class="flex items-start gap-3 p-3 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">6</span>
              <div>
                <strong class="text-navy-900 text-sm">Savings Calculator</strong>
                <p class="text-xs text-charcoal-600">Show exact dollar amount saved</p>
              </div>
            </div>
            <div class="flex items-start gap-3 p-3 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">7</span>
              <div>
                <strong class="text-navy-900 text-sm">Benefit List</strong>
                <p class="text-xs text-charcoal-600">Why they should accept this offer</p>
              </div>
            </div>
            <div class="flex items-start gap-3 p-3 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">8</span>
              <div>
                <strong class="text-navy-900 text-sm">Urgency Element</strong>
                <p class="text-xs text-charcoal-600">Timer or 'one-time only' messaging</p>
              </div>
            </div>
            <div class="flex items-start gap-3 p-3 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">9</span>
              <div>
                <strong class="text-navy-900 text-sm">Strong Yes Button</strong>
                <p class="text-xs text-charcoal-600">Action-oriented with price included</p>
              </div>
            </div>
            <div class="flex items-start gap-3 p-3 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">10</span>
              <div>
                <strong class="text-navy-900 text-sm">Weak No Button</strong>
                <p class="text-xs text-charcoal-600">De-emphasized decline option</p>
              </div>
            </div>
            <div class="flex items-start gap-3 p-3 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">11</span>
              <div>
                <strong class="text-navy-900 text-sm">One-Click Acceptance</strong>
                <p class="text-xs text-charcoal-600">No need to re-enter payment info</p>
              </div>
            </div>
            <div class="flex items-start gap-3 p-3 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">12</span>
              <div>
                <strong class="text-navy-900 text-sm">Guarantee Mention</strong>
                <p class="text-xs text-charcoal-600">Same guarantee applies to upsell</p>
              </div>
            </div>
          </div>

          <!-- Pro Tip -->
          <div class="mt-6 bg-accent-light border border-accent/20 rounded-lg p-4">
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="lucide:lightbulb" class="w-4 h-4 text-white" />
              </div>
              <div>
                <strong class="text-navy-900">Pro Tip:</strong>
                <p class="text-charcoal-600 text-sm mt-1">Use "negative decline copy" like "No thanks, I don't want to save $90" - it reminds customers what they're giving up.</p>
              </div>
            </div>
          </div>
        </ContentCard>

        <!-- Section 4: Pricing Strategy -->
        <ContentCard id="pricing">
          <SectionHeader :number="4" title="Pricing Strategy" />
          <p class="text-charcoal-600 leading-relaxed mb-6">
            Your upsell pricing should be based on the customer's original order:
          </p>

          <div class="overflow-x-auto mb-6">
            <table class="w-full text-sm">
              <thead>
                <tr class="bg-surface-tertiary">
                  <th class="text-left p-3 font-semibold text-navy-900 border-b border-border">Original Package</th>
                  <th class="text-left p-3 font-semibold text-navy-900 border-b border-border">Upsell Offer</th>
                  <th class="text-left p-3 font-semibold text-navy-900 border-b border-border">Discount</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-border">
                  <td class="p-3 text-charcoal-600">1 Bottle ($69)</td>
                  <td class="p-3 text-charcoal-600">Add 2 more for $98 (total: 3 bottles)</td>
                  <td class="p-3"><span class="bg-accent/10 text-accent text-xs px-2 py-1 rounded font-medium">30% off</span></td>
                </tr>
                <tr class="border-b border-border">
                  <td class="p-3 text-charcoal-600">3 Bottles ($147)</td>
                  <td class="p-3 text-charcoal-600">Add 3 more for $117 (total: 6 bottles)</td>
                  <td class="p-3"><span class="bg-success/10 text-success text-xs px-2 py-1 rounded font-medium">40% off</span></td>
                </tr>
                <tr>
                  <td class="p-3 text-charcoal-600">6 Bottles ($234)</td>
                  <td class="p-3 text-charcoal-600">Add 6 more for $180 (total: 12 bottles)</td>
                  <td class="p-3"><span class="bg-warning/10 text-warning text-xs px-2 py-1 rounded font-medium">50% off</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <AlertBox variant="success" title="Discount Sweet Spot">
            Offer 30-50% off the regular per-bottle price. Less than 30% doesn't feel special enough. More than 50% can raise suspicion about your regular pricing.
          </AlertBox>
        </ContentCard>

        <!-- Section 5: Psychology - Icon Cards & Quote Messages -->
        <ContentCard id="psychology">
          <SectionHeader :number="5" title="Psychology Behind Upsells" />
          <p class="text-charcoal-600 leading-relaxed mb-6">
            Understanding why customers accept upsells helps you craft more effective offers:
          </p>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div class="bg-surface-tertiary border border-border rounded-lg p-4 text-center">
              <div class="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="lucide:brain" class="w-5 h-5 text-accent" />
              </div>
              <strong class="text-navy-900 text-sm block mb-1">Buying Mode</strong>
              <p class="text-xs text-charcoal-600">They just made a purchase - momentum is on your side</p>
            </div>

            <div class="bg-surface-tertiary border border-border rounded-lg p-4 text-center">
              <div class="w-10 h-10 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="lucide:hourglass" class="w-5 h-5 text-warning" />
              </div>
              <strong class="text-navy-900 text-sm block mb-1">Sunk Cost</strong>
              <p class="text-xs text-charcoal-600">They've invested time and entered payment info</p>
            </div>

            <div class="bg-surface-tertiary border border-border rounded-lg p-4 text-center">
              <div class="w-10 h-10 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="lucide:alert-triangle" class="w-5 h-5 text-error" />
              </div>
              <strong class="text-navy-900 text-sm block mb-1">FOMO</strong>
              <p class="text-xs text-charcoal-600">"One-time only" creates urgency</p>
            </div>

            <div class="bg-surface-tertiary border border-border rounded-lg p-4 text-center">
              <div class="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="lucide:target" class="w-5 h-5 text-success" />
              </div>
              <strong class="text-navy-900 text-sm block mb-1">Results Focus</strong>
              <p class="text-xs text-charcoal-600">More product = better/faster results</p>
            </div>

            <div class="bg-surface-tertiary border border-border rounded-lg p-4 text-center">
              <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="lucide:gem" class="w-5 h-5 text-purple-600" />
              </div>
              <strong class="text-navy-900 text-sm block mb-1">Perceived Value</strong>
              <p class="text-xs text-charcoal-600">Significant discount = smart decision</p>
            </div>

            <div class="bg-surface-tertiary border border-border rounded-lg p-4 text-center">
              <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="lucide:mouse-pointer-click" class="w-5 h-5 text-blue-600" />
              </div>
              <strong class="text-navy-900 text-sm block mb-1">Convenience</strong>
              <p class="text-xs text-charcoal-600">One-click is easier than ordering later</p>
            </div>
          </div>

          <h4 class="font-semibold text-navy-900 mb-4">Key Messaging Points</h4>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div class="bg-accent/5 rounded-lg p-3 border-l-4 border-accent">
              <p class="text-navy-900 font-medium text-sm">Exclusivity</p>
              <p class="text-xs text-charcoal-500 mt-1">ONLY available right now</p>
            </div>
            <div class="bg-accent/5 rounded-lg p-3 border-l-4 border-accent">
              <p class="text-navy-900 font-medium text-sm">Better Results</p>
              <p class="text-xs text-charcoal-500 mt-1">More = faster outcomes</p>
            </div>
            <div class="bg-accent/5 rounded-lg p-3 border-l-4 border-accent">
              <p class="text-navy-900 font-medium text-sm">Free Shipping</p>
              <p class="text-xs text-charcoal-500 mt-1">Ships with current order</p>
            </div>
            <div class="bg-accent/5 rounded-lg p-3 border-l-4 border-accent">
              <p class="text-navy-900 font-medium text-sm">Convenience</p>
              <p class="text-xs text-charcoal-500 mt-1">One-click, no re-entry</p>
            </div>
            <div class="bg-accent/5 rounded-lg p-3 border-l-4 border-accent">
              <p class="text-navy-900 font-medium text-sm">Same Guarantee</p>
              <p class="text-xs text-charcoal-500 mt-1">Full protection applies</p>
            </div>
            <div class="bg-accent/5 rounded-lg p-3 border-l-4 border-accent">
              <p class="text-navy-900 font-medium text-sm">Price Anchor</p>
              <p class="text-xs text-charcoal-500 mt-1">Show regular vs savings</p>
            </div>
          </div>
        </ContentCard>

        <!-- Section 6: Best Practices - Do/Don't Panels -->
        <ContentCard id="best-practices">
          <SectionHeader :number="6" title="Best Practices" />

          <div class="grid md:grid-cols-2 gap-6">
            <!-- DO Column -->
            <div class="bg-success/5 rounded-lg p-5 border border-success/20">
              <div class="flex items-center gap-2 mb-4 pb-3 border-b border-success/20">
                <div class="w-8 h-8 bg-success rounded-lg flex items-center justify-center">
                  <Icon name="lucide:thumbs-up" class="w-4 h-4 text-white" />
                </div>
                <h4 class="font-bold text-navy-900 text-lg">Do This</h4>
              </div>
              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <Icon name="lucide:minimize-2" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Keep It Simple</p>
                    <p class="text-sm text-charcoal-600">One offer only - no multiple options</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:maximize" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Prominent Yes Button</p>
                    <p class="text-sm text-charcoal-600">Large, colorful with clear benefit</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:minimize" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">De-emphasize No</p>
                    <p class="text-sm text-charcoal-600">Smaller, less prominent decline</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:message-circle" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Negative Decline Copy</p>
                    <p class="text-sm text-charcoal-600">Remind them of what they lose</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:users" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Add Social Proof</p>
                    <p class="text-sm text-charcoal-600">'87% of customers add this'</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:timer" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Show Timer</p>
                    <p class="text-sm text-charcoal-600">5-10 minute countdown</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- DON'T Column -->
            <div class="bg-error/5 rounded-lg p-5 border border-error/20">
              <div class="flex items-center gap-2 mb-4 pb-3 border-b border-error/20">
                <div class="w-8 h-8 bg-error rounded-lg flex items-center justify-center">
                  <Icon name="lucide:thumbs-down" class="w-4 h-4 text-white" />
                </div>
                <h4 class="font-bold text-navy-900 text-lg">Avoid This</h4>
              </div>
              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <Icon name="lucide:percent" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Weak Discount</p>
                    <p class="text-sm text-charcoal-600">Less than 25% feels insignificant</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:dollar-sign" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Too Expensive</p>
                    <p class="text-sm text-charcoal-600">Don't exceed 2x original order</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:list" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Multiple Options</p>
                    <p class="text-sm text-charcoal-600">Choices reduce conversions</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:clock" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">No Urgency</p>
                    <p class="text-sm text-charcoal-600">Without timer, they defer</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:credit-card" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Requires Re-Entry</p>
                    <p class="text-sm text-charcoal-600">Payment re-entry kills sales</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:shuffle" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Different Product</p>
                    <p class="text-sm text-charcoal-600">Save cross-sells for Upsell 2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContentCard>

        <!-- Section 7: Common Mistakes - Error Cards -->
        <ContentCard id="mistakes">
          <SectionHeader :number="7" title="Common Mistakes to Avoid" />

          <AlertBox variant="warning" title="Warning">
            These mistakes dramatically reduce acceptance rates. Avoid them at all costs.
          </AlertBox>

          <div class="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="bg-error/5 border border-error/20 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:percent" class="w-5 h-5 text-error" />
                <strong class="text-navy-900">Weak Discount</strong>
              </div>
              <p class="text-sm text-charcoal-600">Less than 25% off feels insignificant and not worth the effort.</p>
            </div>

            <div class="bg-error/5 border border-error/20 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:trending-up" class="w-5 h-5 text-error" />
                <strong class="text-navy-900">Too Expensive</strong>
              </div>
              <p class="text-sm text-charcoal-600">Upsell shouldn't exceed original order value by more than 2x.</p>
            </div>

            <div class="bg-error/5 border border-error/20 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:list-tree" class="w-5 h-5 text-error" />
                <strong class="text-navy-900">Multiple Options</strong>
              </div>
              <p class="text-sm text-charcoal-600">Keep it to ONE offer - choices create decision paralysis.</p>
            </div>

            <div class="bg-error/5 border border-error/20 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:timer-off" class="w-5 h-5 text-error" />
                <strong class="text-navy-900">No Urgency</strong>
              </div>
              <p class="text-sm text-charcoal-600">Without time pressure, customers defer and never return.</p>
            </div>

            <div class="bg-error/5 border border-error/20 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:form-input" class="w-5 h-5 text-error" />
                <strong class="text-navy-900">Requires Re-Entry</strong>
              </div>
              <p class="text-sm text-charcoal-600">Making customers enter payment again kills conversions.</p>
            </div>

            <div class="bg-error/5 border border-error/20 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:package-x" class="w-5 h-5 text-error" />
                <strong class="text-navy-900">Different Product</strong>
              </div>
              <p class="text-sm text-charcoal-600">Save cross-sells for Upsell 2 - keep this the same product.</p>
            </div>
          </div>
        </ContentCard>

        <!-- Section 8: Performance Metrics -->
        <ContentCard id="metrics">
          <div class="flex items-center mb-6">
            <div class="w-9 h-9 bg-accent rounded-lg flex items-center justify-center mr-3">
              <Icon name="lucide:bar-chart-3" class="w-5 h-5 text-white" />
            </div>
            <h2 class="text-2xl font-bold text-navy-900">Performance Metrics & Benchmarks</h2>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="bg-surface-tertiary rounded-lg p-4 border border-border">
              <div class="flex items-center justify-between mb-3">
                <Icon name="lucide:trending-up" class="w-5 h-5 text-accent" />
                <span class="text-xs bg-success/10 text-success px-2 py-0.5 rounded font-medium">Target: 20-35%</span>
              </div>
              <strong class="text-navy-900 block mb-1">Acceptance Rate</strong>
              <p class="text-charcoal-600 text-sm">Top performers achieve 40-50%</p>
            </div>

            <div class="bg-surface-tertiary rounded-lg p-4 border border-border">
              <div class="flex items-center justify-between mb-3">
                <Icon name="lucide:coins" class="w-5 h-5 text-success" />
                <span class="text-xs bg-success/10 text-success px-2 py-0.5 rounded font-medium">Target: +25-40%</span>
              </div>
              <strong class="text-navy-900 block mb-1">AOV Increase</strong>
              <p class="text-charcoal-600 text-sm">Successful upsell boost to order value</p>
            </div>

            <div class="bg-surface-tertiary rounded-lg p-4 border border-border">
              <div class="flex items-center justify-between mb-3">
                <Icon name="lucide:dollar-sign" class="w-5 h-5 text-accent" />
                <span class="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded font-medium">+$36/customer</span>
              </div>
              <strong class="text-navy-900 block mb-1">Revenue Impact</strong>
              <p class="text-charcoal-600 text-sm">If 30% accept a $120 upsell</p>
            </div>

            <div class="bg-surface-tertiary rounded-lg p-4 border border-border">
              <div class="flex items-center justify-between mb-3">
                <Icon name="lucide:check-circle" class="w-5 h-5 text-success" />
                <span class="text-xs bg-success/10 text-success px-2 py-0.5 rounded font-medium">Minimal</span>
              </div>
              <strong class="text-navy-900 block mb-1">Decline Impact</strong>
              <p class="text-charcoal-600 text-sm">Declines still complete original order</p>
            </div>

            <div class="bg-surface-tertiary rounded-lg p-4 border border-border">
              <div class="flex items-center justify-between mb-3">
                <Icon name="lucide:smartphone" class="w-5 h-5 text-accent" />
                <span class="text-xs bg-warning/10 text-warning px-2 py-0.5 rounded font-medium">10-15% lower</span>
              </div>
              <strong class="text-navy-900 block mb-1">Mobile vs Desktop</strong>
              <p class="text-charcoal-600 text-sm">Mobile rates run lower - optimize UX</p>
            </div>

            <div class="bg-surface-tertiary rounded-lg p-4 border border-border">
              <div class="flex items-center justify-between mb-3">
                <Icon name="lucide:zap" class="w-5 h-5 text-warning" />
                <span class="text-xs bg-error/10 text-error px-2 py-0.5 rounded font-medium">Under 2s</span>
              </div>
              <strong class="text-navy-900 block mb-1">Page Load Time</strong>
              <p class="text-charcoal-600 text-sm">Every 1s delay costs 5-10% acceptance</p>
            </div>
          </div>
        </ContentCard>

        <!-- Quick Reference Card -->
        <div class="bg-navy-800 rounded-lg p-6 mb-8 text-white">
          <div class="flex items-center gap-3 mb-4">
            <Icon name="lucide:bookmark" class="w-6 h-6" />
            <h3 class="text-lg font-semibold">Quick Reference Cheatsheet</h3>
          </div>
          <div class="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <div class="text-slate-400 mb-2">Discount Range</div>
              <div class="font-semibold">30-50% off</div>
            </div>
            <div>
              <div class="text-slate-400 mb-2">Target Accept Rate</div>
              <div class="font-semibold">20-35%</div>
            </div>
            <div>
              <div class="text-slate-400 mb-2">Timer Length</div>
              <div class="font-semibold">5-10 minutes</div>
            </div>
            <div>
              <div class="text-slate-400 mb-2">AOV Impact</div>
              <div class="font-semibold">+25-40%</div>
            </div>
            <div>
              <div class="text-slate-400 mb-2">Offer Type</div>
              <div class="font-semibold">Same product only</div>
            </div>
            <div>
              <div class="text-slate-400 mb-2">Max Price</div>
              <div class="font-semibold">2x original order</div>
            </div>
          </div>
        </div>

        <!-- Navigation -->
        <NavigationButtons
          prev-to="/step2-dtc"
          prev-text="Back: DTC/Checkout"
          next-to="/step4-downsell1"
          next-text="Next: Downsell 1"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Step 3: Upsell 1 - BuyGoods Vendor Guide',
  description: 'Learn how to create an effective Upsell 1 page that increases average order value by 25-40%'
})
</script>

<style scoped>
.page-content {
  margin-left: 300px;
}

@media (max-width: 768px) {
  .page-content {
    margin-left: 0;
  top: 50%;
  transform: translateY(-50%);
  }
}

.header {
  background: #1e293b;
  color: #ffffff;
  padding: 48px 20px;
  min-height: 280px;
  text-align: center;
  position: relative;
}

.header-content {
  position: relative;
  z-index: 10;
}

/* Main visible logo */
.logo-main {
  position: absolute;
  left: 24px;
  bottom: 20px;
  width: 140px;
  height: auto;
  opacity: 0.85;
  pointer-events: none;
  user-select: none;
  z-index: 2;
}

/* Shadow logo - fixed size, left side */
.logo-shadow {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 200px;
  width: auto;
  opacity: 0.08;
  pointer-events: none;
  user-select: none;
  z-index: 1;
}

@media (max-width: 768px) {
  .logo-main {
    width: 100px;
    left: 16px;
    bottom: 12px;
  }
  .logo-shadow {
    height: 140px;
    opacity: 0.06;
  }
}

.step-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  padding: 6px 16px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 12px;
  letter-spacing: 0.5px;
}

.header h1 {
  font-size: 32px;
  margin-bottom: 12px;
  font-weight: 700;
}

.header p {
  font-size: 16px;
  opacity: 0.85;
  max-width: 600px;
  margin: 0 auto;
}

html {
  scroll-behavior: smooth;
}
</style>
