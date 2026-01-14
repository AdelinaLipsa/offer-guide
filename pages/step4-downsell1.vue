<template>
  <div>
    <Navbar :breadcrumbs="['Step 4: Downsell 1']" />
    <Sidebar :current-step="4" />

    <div class="page-content">
      <!-- Enhanced Header -->
      <div class="header">
        <!-- Logo Shadow (larger, blurred, behind) -->
        <img src="/bg-logo-white.png" alt="" class="logo-shadow" aria-hidden="true" />
        <!-- Logo Main (visible, on top) -->
        <img src="/bg-logo-white.png" alt="" class="logo-main" aria-hidden="true" />
        <div class="header-content">
          <div class="step-badge">STEP 4 OF 8</div>
          <h1>Downsell 1: Smaller Quantity</h1>
          <p>Recover customers who declined your first upsell with a more attractive offer</p>
        </div>

        <!-- Quick Stats Bar -->
        <div class="flex flex-wrap justify-center gap-6 mt-8">
          <div class="bg-white/10 backdrop-blur px-4 py-2 rounded-lg flex items-center gap-2">
            <Icon name="lucide:refresh-cw" class="w-4 h-4" />
            <span class="text-sm">15-25% Recovery Rate</span>
          </div>
          <div class="bg-white/10 backdrop-blur px-4 py-2 rounded-lg flex items-center gap-2">
            <Icon name="lucide:dollar-sign" class="w-4 h-4" />
            <span class="text-sm">50-60% Discount</span>
          </div>
          <div class="bg-white/10 backdrop-blur px-4 py-2 rounded-lg flex items-center gap-2">
            <Icon name="lucide:package" class="w-4 h-4" />
            <span class="text-sm">1-2 Bottles</span>
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

        <!-- Section 1: What is Downsell 1? -->
        <ContentCard id="overview">
          <SectionHeader :number="1" title="What is Downsell 1?" />
          <p class="text-charcoal-600 leading-relaxed mb-4">
            When a customer clicks "No Thanks" on Upsell 1, they immediately see this downsell page. Instead of letting them go, you present a SMALLER, MORE ATTRACTIVE offer that's harder to refuse.
          </p>
          <p class="text-charcoal-600 leading-relaxed mb-6">
            The key difference: This offer is for fewer bottles but at an even BETTER per-bottle discount than the upsell. It removes the objection of "too expensive" while still increasing your average order value.
          </p>

          <!-- Key Benefits Grid -->
          <div class="grid md:grid-cols-3 gap-4 mb-6">
            <div class="bg-success-light border border-success/20 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:refresh-cw" class="w-5 h-5 text-success" />
                <span class="font-semibold text-navy-900">Revenue Recovery</span>
              </div>
              <p class="text-sm text-charcoal-600">15-25% of declined upsells convert here</p>
            </div>
            <div class="bg-accent-light border border-accent/20 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:tag" class="w-5 h-5 text-accent" />
                <span class="font-semibold text-navy-900">Better Deal</span>
              </div>
              <p class="text-sm text-charcoal-600">Lower per-bottle price than upsell</p>
            </div>
            <div class="bg-warning-light border border-warning/20 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:heart" class="w-5 h-5 text-warning" />
                <span class="font-semibold text-navy-900">Low Commitment</span>
              </div>
              <p class="text-sm text-charcoal-600">Just 1 bottle - easy to say yes</p>
            </div>
          </div>

          <AlertBox variant="success" title="Recovery Strategy">
            15-25% of customers who declined Upsell 1 will accept Downsell 1. This is pure profit recovery that would otherwise be lost. Even a small acceptance adds significant revenue over time.
          </AlertBox>
        </ContentCard>

        <!-- Section 2: Visual Structure -->
        <ContentCard id="structure">
          <SectionHeader :number="2" title="Visual Structure" />
          <p class="text-charcoal-600 leading-relaxed mb-6">
            Here's how your Downsell 1 page should look. The key is empathy, better value, and finality:
          </p>

          <!-- Downsell Preview -->
          <div class="bg-surface-tertiary border border-border rounded-lg p-6">
            <h3 class="text-navy-900 font-semibold text-lg text-center mb-6">Downsell Page Layout Preview</h3>

            <!-- Last Chance Headline -->
            <div class="bg-warning text-white px-5 py-4 rounded-lg text-xl font-bold mb-6 text-center">
              <Icon name="lucide:alert-triangle" class="w-5 h-5 inline mr-2" />
              Last Chance! Special Discount
            </div>

            <!-- Empathy Headline -->
            <h3 class="text-2xl text-navy-900 font-bold text-center mb-4">
              We Understand - Let Us Make This Even Better
            </h3>

            <!-- Description -->
            <p class="text-charcoal-600 max-w-2xl mx-auto mb-6 text-center">
              We noticed the previous offer wasn't right for you. So we've created an even BETTER deal - just 1 extra bottle at our absolute lowest price ever. This is truly our final offer.
            </p>

            <!-- Comparison Table -->
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div class="bg-white border border-border rounded-lg p-4 text-center opacity-60">
                <div class="text-xs text-charcoal-500 line-through mb-2">Previous Offer (Declined)</div>
                <div class="text-xl font-bold text-charcoal-600">3 Bottles</div>
                <div class="text-lg mt-1">$117</div>
                <div class="text-xs text-charcoal-500">$39 per bottle</div>
              </div>
              <div class="bg-success-light border-2 border-success rounded-lg p-4 text-center">
                <div class="text-xs text-success font-semibold mb-2">New Offer - BEST PRICE</div>
                <div class="text-2xl font-bold text-navy-900">Just 1 Bottle</div>
                <div class="text-xl mt-1 font-bold text-success">$29</div>
                <div class="text-xs text-success font-semibold">SAVE 58% - Best Price Ever!</div>
              </div>
            </div>

            <!-- Product Showcase -->
            <div class="flex justify-center mb-6">
              <div class="bg-white w-40 h-40 flex items-center justify-center rounded-lg border border-border">
                <div class="text-center">
                  <Icon name="lucide:package" class="w-10 h-10 text-accent mx-auto mb-2" />
                  <div class="text-sm text-charcoal-600">1 Bottle</div>
                </div>
              </div>
            </div>

            <!-- Offer Box -->
            <div class="bg-white border-2 border-success rounded-xl p-6 mb-6">
              <h4 class="text-success font-bold text-lg mb-4 text-center">Why This Is Our Best Deal:</h4>

              <!-- Price Highlight -->
              <div class="bg-success text-white p-4 rounded-lg mb-4 text-center">
                <div class="text-sm mb-1">Add Just 1 More Bottle For Only:</div>
                <div class="text-4xl font-bold my-2">$29</div>
                <div class="text-sm opacity-90">Regular: $69 | You Save: $40 (58% OFF)</div>
              </div>

              <!-- Benefits as pills -->
              <div class="flex flex-wrap justify-center gap-2 mb-4">
                <span class="bg-success/10 text-success px-3 py-1.5 rounded-full text-sm font-medium">$29/bottle</span>
                <span class="bg-success/10 text-success px-3 py-1.5 rounded-full text-sm font-medium">Just 1 bottle</span>
                <span class="bg-success/10 text-success px-3 py-1.5 rounded-full text-sm font-medium">FREE shipping</span>
                <span class="bg-success/10 text-success px-3 py-1.5 rounded-full text-sm font-medium">60-day guarantee</span>
                <span class="bg-success/10 text-success px-3 py-1.5 rounded-full text-sm font-medium">One-click add</span>
                <span class="bg-success/10 text-success px-3 py-1.5 rounded-full text-sm font-medium">Never again</span>
              </div>
            </div>

            <!-- Final Offer Box -->
            <div class="bg-warning-light border border-warning rounded-lg p-4 mb-6 text-center">
              <div class="flex items-center justify-center gap-2 mb-2">
                <Icon name="lucide:clock" class="w-4 h-4 text-warning" />
                <span class="font-semibold text-navy-900">This Is Your Final Opportunity</span>
              </div>
              <p class="text-sm text-charcoal-600">Once you leave this page, this $29 price will never be available again.</p>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col md:flex-row gap-3">
              <div class="flex-1 bg-success text-white px-6 py-4 rounded-lg font-bold text-center">
                <Icon name="lucide:check" class="w-4 h-4 inline mr-2" />
                YES! Add 1 Bottle For Only $29
              </div>
              <div class="flex-1 bg-white text-charcoal-500 px-6 py-4 border border-border rounded-lg text-center text-sm">
                No thanks, I'll pay full price later
              </div>
            </div>
          </div>
        </ContentCard>

        <!-- Section 3: Required Elements - Numbered Steps -->
        <ContentCard id="checklist">
          <SectionHeader :number="3" title="Required Page Elements" />
          <p class="text-charcoal-600 leading-relaxed mb-6">
            Every Downsell 1 page must include these essential elements:
          </p>

          <div class="grid md:grid-cols-2 gap-3">
            <div class="flex items-start gap-3 p-3 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
              <div>
                <strong class="text-navy-900 text-sm">Last Chance Headline</strong>
                <p class="text-xs text-charcoal-600">Create urgency without pressure</p>
              </div>
            </div>
            <div class="flex items-start gap-3 p-3 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
              <div>
                <strong class="text-navy-900 text-sm">Empathy Message</strong>
                <p class="text-xs text-charcoal-600">Acknowledge decline without shaming</p>
              </div>
            </div>
            <div class="flex items-start gap-3 p-3 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
              <div>
                <strong class="text-navy-900 text-sm">Smaller Quantity</strong>
                <p class="text-xs text-charcoal-600">1-2 bottles vs. 3+ in upsell</p>
              </div>
            </div>
            <div class="flex items-start gap-3 p-3 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
              <div>
                <strong class="text-navy-900 text-sm">Better Per-Unit Price</strong>
                <p class="text-xs text-charcoal-600">Lower price per bottle than upsell</p>
              </div>
            </div>
            <div class="flex items-start gap-3 p-3 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">5</span>
              <div>
                <strong class="text-navy-900 text-sm">Comparison Visual</strong>
                <p class="text-xs text-charcoal-600">Show declined vs. current offer</p>
              </div>
            </div>
            <div class="flex items-start gap-3 p-3 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">6</span>
              <div>
                <strong class="text-navy-900 text-sm">Clear Savings</strong>
                <p class="text-xs text-charcoal-600">Emphasize 40-60% discount</p>
              </div>
            </div>
            <div class="flex items-start gap-3 p-3 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">7</span>
              <div>
                <strong class="text-navy-900 text-sm">Low Commitment Angle</strong>
                <p class="text-xs text-charcoal-600">'Just 1 bottle' feels easy</p>
              </div>
            </div>
            <div class="flex items-start gap-3 p-3 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">8</span>
              <div>
                <strong class="text-navy-900 text-sm">Finality Messaging</strong>
                <p class="text-xs text-charcoal-600">'Never offered again' creates FOMO</p>
              </div>
            </div>
            <div class="flex items-start gap-3 p-3 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">9</span>
              <div>
                <strong class="text-navy-900 text-sm">Strong Yes Button</strong>
                <p class="text-xs text-charcoal-600">Include price in button text</p>
              </div>
            </div>
            <div class="flex items-start gap-3 p-3 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">10</span>
              <div>
                <strong class="text-navy-900 text-sm">Weak No Button</strong>
                <p class="text-xs text-charcoal-600">Frame decline as a loss</p>
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
                <p class="text-charcoal-600 text-sm mt-1">Use "I'll pay full price later" as decline text - it reminds them they're passing up a deal and implies future regret.</p>
              </div>
            </div>
          </div>
        </ContentCard>

        <!-- Section 4: Pricing Strategy -->
        <ContentCard id="pricing">
          <SectionHeader :number="4" title="Pricing Strategy" />
          <p class="text-charcoal-600 leading-relaxed mb-6">
            The downsell should always offer a BETTER per-bottle price than the upsell:
          </p>

          <div class="overflow-x-auto mb-6">
            <table class="w-full text-sm">
              <thead>
                <tr class="bg-surface-tertiary">
                  <th class="text-left p-3 font-semibold text-navy-900 border-b border-border">Upsell 1 (Declined)</th>
                  <th class="text-left p-3 font-semibold text-navy-900 border-b border-border">Downsell 1 Offer</th>
                  <th class="text-left p-3 font-semibold text-navy-900 border-b border-border">Per-Bottle</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-border">
                  <td class="p-3 text-charcoal-600">3 Bottles for $117 ($39/each)</td>
                  <td class="p-3 text-charcoal-600">1 Bottle for $29</td>
                  <td class="p-3"><span class="bg-success/10 text-success text-xs px-2 py-1 rounded font-medium">$29 (better)</span></td>
                </tr>
                <tr class="border-b border-border">
                  <td class="p-3 text-charcoal-600">2 Bottles for $98 ($49/each)</td>
                  <td class="p-3 text-charcoal-600">1 Bottle for $29</td>
                  <td class="p-3"><span class="bg-success/10 text-success text-xs px-2 py-1 rounded font-medium">$29 (better)</span></td>
                </tr>
                <tr>
                  <td class="p-3 text-charcoal-600">6 Bottles for $180 ($30/each)</td>
                  <td class="p-3 text-charcoal-600">2 Bottles for $58</td>
                  <td class="p-3"><span class="bg-success/10 text-success text-xs px-2 py-1 rounded font-medium">$29 (better)</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <AlertBox variant="success" title="The Psychology">
            Even though the per-bottle price is lower, the total amount is much smaller ($29 vs $117). This removes the "too expensive" objection while still providing significant value increase to your business.
          </AlertBox>
        </ContentCard>

        <!-- Section 5: Why Downsells Work - Icon Cards -->
        <ContentCard id="psychology">
          <SectionHeader :number="5" title="Why Downsells Work" />
          <p class="text-charcoal-600 leading-relaxed mb-6">
            The downsell addresses exactly why customers declined the upsell:
          </p>

          <div class="grid md:grid-cols-2 gap-4 mb-6">
            <div class="bg-surface-tertiary border border-border rounded-lg p-4 text-center">
              <div class="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="lucide:dollar-sign" class="w-5 h-5 text-success" />
              </div>
              <strong class="text-navy-900 text-sm block mb-1">Price Objection</strong>
              <p class="text-xs text-charcoal-600">$29 feels insignificant compared to $117 - removes sticker shock</p>
            </div>

            <div class="bg-surface-tertiary border border-border rounded-lg p-4 text-center">
              <div class="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="lucide:package" class="w-5 h-5 text-accent" />
              </div>
              <strong class="text-navy-900 text-sm block mb-1">Quantity Objection</strong>
              <p class="text-xs text-charcoal-600">1 bottle is a tiny commitment - easy to justify</p>
            </div>

            <div class="bg-surface-tertiary border border-border rounded-lg p-4 text-center">
              <div class="w-10 h-10 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="lucide:brain" class="w-5 h-5 text-warning" />
              </div>
              <strong class="text-navy-900 text-sm block mb-1">Decision Fatigue</strong>
              <p class="text-xs text-charcoal-600">Simpler choice - just one option, yes or no</p>
            </div>

            <div class="bg-surface-tertiary border border-border rounded-lg p-4 text-center">
              <div class="w-10 h-10 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="lucide:alert-triangle" class="w-5 h-5 text-error" />
              </div>
              <strong class="text-navy-900 text-sm block mb-1">Regret Aversion</strong>
              <p class="text-xs text-charcoal-600">"What if I miss out?" - final offer creates FOMO</p>
            </div>
          </div>

          <h4 class="font-semibold text-navy-900 mb-4">Key Messaging Points</h4>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div class="bg-accent/5 rounded-lg p-3 border-l-4 border-accent">
              <p class="text-navy-900 font-medium text-sm">Empathy First</p>
              <p class="text-xs text-charcoal-500 mt-1">We heard you - better fit</p>
            </div>
            <div class="bg-accent/5 rounded-lg p-3 border-l-4 border-accent">
              <p class="text-navy-900 font-medium text-sm">Lowest Price</p>
              <p class="text-xs text-charcoal-500 mt-1">Absolute lowest ever offered</p>
            </div>
            <div class="bg-accent/5 rounded-lg p-3 border-l-4 border-accent">
              <p class="text-navy-900 font-medium text-sm">Minimal Commitment</p>
              <p class="text-xs text-charcoal-500 mt-1">Just 1 bottle - easy decision</p>
            </div>
            <div class="bg-accent/5 rounded-lg p-3 border-l-4 border-accent">
              <p class="text-navy-900 font-medium text-sm">Final Chance</p>
              <p class="text-xs text-charcoal-500 mt-1">FINAL opportunity at this price</p>
            </div>
            <div class="bg-accent/5 rounded-lg p-3 border-l-4 border-accent">
              <p class="text-navy-900 font-medium text-sm">Free Shipping</p>
              <p class="text-xs text-charcoal-500 mt-1">Ships free with current order</p>
            </div>
            <div class="bg-accent/5 rounded-lg p-3 border-l-4 border-accent">
              <p class="text-navy-900 font-medium text-sm">No-Brainer</p>
              <p class="text-xs text-charcoal-500 mt-1">Small addition to extend supply</p>
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
                    <p class="text-sm text-charcoal-600">Single offer only - no complexity</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:tag" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Emphasize Better Value</p>
                    <p class="text-sm text-charcoal-600">Lower per-bottle than upsell</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:heart-handshake" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Show Respect</p>
                    <p class="text-sm text-charcoal-600">Don't shame for declining</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:flag" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Create Urgency</p>
                    <p class="text-sm text-charcoal-600">'Final offer' and 'never again'</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:shield" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Minimize Risk</p>
                    <p class="text-sm text-charcoal-600">Emphasize guarantee and free shipping</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:circle-dollar-sign" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Use Smaller Numbers</p>
                    <p class="text-sm text-charcoal-600">$29 feels tiny vs. $117</p>
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
                  <Icon name="lucide:equal" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Same/Worse Deal</p>
                    <p class="text-sm text-charcoal-600">Must be MORE attractive per unit</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:dollar-sign" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Still Too Expensive</p>
                    <p class="text-sm text-charcoal-600">Keep total under $50</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:frown" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Shaming Customer</p>
                    <p class="text-sm text-charcoal-600">Never make them feel bad</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:list" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Multiple Options</p>
                    <p class="text-sm text-charcoal-600">Keep it to ONE offer</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:infinity" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">No Urgency</p>
                    <p class="text-sm text-charcoal-600">Without finality, they defer</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:shuffle" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Different Product</p>
                    <p class="text-sm text-charcoal-600">Same product as original order</p>
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
            These mistakes will kill your recovery rate. Avoid them at all costs.
          </AlertBox>

          <div class="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="bg-error/5 border border-error/20 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:equal" class="w-5 h-5 text-error" />
                <strong class="text-navy-900">Same or Worse Deal</strong>
              </div>
              <p class="text-sm text-charcoal-600">Downsell must be MORE attractive per unit than the upsell.</p>
            </div>

            <div class="bg-error/5 border border-error/20 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:trending-up" class="w-5 h-5 text-error" />
                <strong class="text-navy-900">Still Too Expensive</strong>
              </div>
              <p class="text-sm text-charcoal-600">Keep total under $50 for best results.</p>
            </div>

            <div class="bg-error/5 border border-error/20 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:frown" class="w-5 h-5 text-error" />
                <strong class="text-navy-900">Shaming the Customer</strong>
              </div>
              <p class="text-sm text-charcoal-600">Never make them feel bad for declining the upsell.</p>
            </div>

            <div class="bg-error/5 border border-error/20 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:list-tree" class="w-5 h-5 text-error" />
                <strong class="text-navy-900">Multiple Options</strong>
              </div>
              <p class="text-sm text-charcoal-600">Keep it to ONE simple offer - no choices.</p>
            </div>

            <div class="bg-error/5 border border-error/20 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:timer-off" class="w-5 h-5 text-error" />
                <strong class="text-navy-900">No Urgency</strong>
              </div>
              <p class="text-sm text-charcoal-600">Without finality, they'll think they can get it later.</p>
            </div>

            <div class="bg-error/5 border border-error/20 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:package-x" class="w-5 h-5 text-error" />
                <strong class="text-navy-900">Different Product</strong>
              </div>
              <p class="text-sm text-charcoal-600">Keep it the same product as the original order.</p>
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
                <span class="text-xs bg-success/10 text-success px-2 py-0.5 rounded font-medium">Target: 15-25%</span>
              </div>
              <strong class="text-navy-900 block mb-1">Acceptance Rate</strong>
              <p class="text-charcoal-600 text-sm">Of those who declined Upsell 1</p>
            </div>

            <div class="bg-surface-tertiary rounded-lg p-4 border border-border">
              <div class="flex items-center justify-between mb-3">
                <Icon name="lucide:coins" class="w-5 h-5 text-success" />
                <span class="text-xs bg-success/10 text-success px-2 py-0.5 rounded font-medium">+$1,740</span>
              </div>
              <strong class="text-navy-900 block mb-1">Revenue Recovery</strong>
              <p class="text-charcoal-600 text-sm">If 300 decline, 60 accept at $29</p>
            </div>

            <div class="bg-surface-tertiary rounded-lg p-4 border border-border">
              <div class="flex items-center justify-between mb-3">
                <Icon name="lucide:calculator" class="w-5 h-5 text-accent" />
                <span class="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded font-medium">~$40/customer</span>
              </div>
              <strong class="text-navy-900 block mb-1">Combined Impact</strong>
              <p class="text-charcoal-600 text-sm">Upsell 1 + Downsell 1 together</p>
            </div>

            <div class="bg-surface-tertiary rounded-lg p-4 border border-border">
              <div class="flex items-center justify-between mb-3">
                <Icon name="lucide:dollar-sign" class="w-5 h-5 text-success" />
                <span class="text-xs bg-success/10 text-success px-2 py-0.5 rounded font-medium">$29-39</span>
              </div>
              <strong class="text-navy-900 block mb-1">Optimal Price Point</strong>
              <p class="text-charcoal-600 text-sm">Higher reduces acceptance rates</p>
            </div>

            <div class="bg-surface-tertiary rounded-lg p-4 border border-border">
              <div class="flex items-center justify-between mb-3">
                <Icon name="lucide:zap" class="w-5 h-5 text-warning" />
                <span class="text-xs bg-error/10 text-error px-2 py-0.5 rounded font-medium">Under 2s</span>
              </div>
              <strong class="text-navy-900 block mb-1">Page Load Speed</strong>
              <p class="text-charcoal-600 text-sm">Delays kill urgency and acceptance</p>
            </div>

            <div class="bg-surface-tertiary rounded-lg p-4 border border-border">
              <div class="flex items-center justify-between mb-3">
                <Icon name="lucide:flask-conical" class="w-5 h-5 text-accent" />
                <span class="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded font-medium">20-30%</span>
              </div>
              <strong class="text-navy-900 block mb-1">A/B Testing Impact</strong>
              <p class="text-charcoal-600 text-sm">Testing $29 vs $35 vs $39</p>
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
              <div class="font-semibold">50-60% off</div>
            </div>
            <div>
              <div class="text-slate-400 mb-2">Target Accept Rate</div>
              <div class="font-semibold">15-25%</div>
            </div>
            <div>
              <div class="text-slate-400 mb-2">Quantity</div>
              <div class="font-semibold">1-2 bottles</div>
            </div>
            <div>
              <div class="text-slate-400 mb-2">Optimal Price</div>
              <div class="font-semibold">$29-39</div>
            </div>
            <div>
              <div class="text-slate-400 mb-2">Max Total</div>
              <div class="font-semibold">Under $50</div>
            </div>
            <div>
              <div class="text-slate-400 mb-2">Key Message</div>
              <div class="font-semibold">Final chance</div>
            </div>
          </div>
        </div>

        <!-- Navigation -->
        <NavigationButtons
          prev-to="/step3-upsell1"
          prev-text="Back: Upsell 1"
          next-to="/step5-upsell2"
          next-text="Next: Upsell 2"
        />
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

/* Shadow logo - full height, left side */
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
