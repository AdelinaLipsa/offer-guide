<template>
  <div>
    <Navbar :breadcrumbs="['Step 5: Upsell 2']" />
    <Sidebar :current-step="5" />

    <div class="page-content">
      <!-- Enhanced Header -->
      <div class="header">
        <!-- Logo Shadow (larger, blurred, behind) -->
        <img src="/bg-logo-white.png" alt="" class="logo-shadow" aria-hidden="true" />
        <!-- Logo Main (visible, on top) -->
        <img src="/bg-logo-white.png" alt="" class="logo-main" aria-hidden="true" />
        <div class="header-content">
          <div class="step-badge">STEP 5 OF 8</div>
          <h1>Upsell 2: Complementary Product</h1>
          <p>Cross-sell a different product that enhances the main purchase</p>
        </div>

        <!-- Quick Stats Bar -->
        <div class="flex flex-wrap justify-center gap-6 mt-8">
          <div class="bg-white/10 backdrop-blur px-4 py-2 rounded-lg flex items-center gap-2">
            <Icon name="lucide:trending-up" class="w-4 h-4" />
            <span class="text-sm">15-30% Accept Rate</span>
          </div>
          <div class="bg-white/10 backdrop-blur px-4 py-2 rounded-lg flex items-center gap-2">
            <Icon name="lucide:dollar-sign" class="w-4 h-4" />
            <span class="text-sm">$37-67 Sweet Spot</span>
          </div>
          <div class="bg-white/10 backdrop-blur px-4 py-2 rounded-lg flex items-center gap-2">
            <Icon name="lucide:layers" class="w-4 h-4" />
            <span class="text-sm">Different Product</span>
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
            <a href="#pairing" class="text-xs px-3 py-1.5 bg-surface-tertiary hover:bg-accent hover:text-white rounded-md transition-colors">Product Pairing</a>
            <a href="#pricing" class="text-xs px-3 py-1.5 bg-surface-tertiary hover:bg-accent hover:text-white rounded-md transition-colors">Pricing</a>
            <a href="#messaging" class="text-xs px-3 py-1.5 bg-surface-tertiary hover:bg-accent hover:text-white rounded-md transition-colors">Messaging</a>
            <a href="#best-practices" class="text-xs px-3 py-1.5 bg-surface-tertiary hover:bg-accent hover:text-white rounded-md transition-colors">Best Practices</a>
            <a href="#metrics" class="text-xs px-3 py-1.5 bg-surface-tertiary hover:bg-accent hover:text-white rounded-md transition-colors">Metrics</a>
          </div>
        </div>

        <!-- Section 1: What is Upsell 2? -->
        <ContentCard id="overview">
          <SectionHeader :number="1" title="What is Upsell 2?" />
          <p class="text-charcoal-600 leading-relaxed mb-4">
            After handling the quantity upsells/downsells for your MAIN product, now you introduce a DIFFERENT but complementary product. This is your cross-sell opportunity - offering something that works alongside or enhances the product they just purchased.
          </p>
          <p class="text-charcoal-600 leading-relaxed mb-6">
            The key is that this product should have a logical connection to the first product. For example: if they bought a metabolism supplement, offer a sleep supplement. If they bought joint support, offer a mobility cream.
          </p>

          <!-- Key Benefits Grid -->
          <div class="grid md:grid-cols-3 gap-4 mb-6">
            <div class="bg-success-light border border-success/20 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:zap" class="w-5 h-5 text-success" />
                <span class="font-semibold text-navy-900">Enhanced Results</span>
              </div>
              <p class="text-sm text-charcoal-600">2X faster results when products are combined</p>
            </div>
            <div class="bg-accent-light border border-accent/20 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:puzzle" class="w-5 h-5 text-accent" />
                <span class="font-semibold text-navy-900">Complete Solution</span>
              </div>
              <p class="text-sm text-charcoal-600">Address all aspects of the problem</p>
            </div>
            <div class="bg-warning-light border border-warning/20 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:gift" class="w-5 h-5 text-warning" />
                <span class="font-semibold text-navy-900">Bundle Savings</span>
              </div>
              <p class="text-sm text-charcoal-600">Special pricing only when combined</p>
            </div>
          </div>

          <AlertBox variant="success" title="Cross-Sell Strategy">
            This is about product pairing. The complementary product should enhance results, address a related problem, or complete a "system." Acceptance rates of 15-30% are typical when products are well-matched.
          </AlertBox>
        </ContentCard>

        <!-- Section 2: Visual Structure -->
        <ContentCard id="structure">
          <SectionHeader :number="2" title="Visual Structure" />
          <p class="text-charcoal-600 leading-relaxed mb-6">
            Here's how your Upsell 2 page should look. Focus on showing how the products complement each other:
          </p>

          <!-- Upsell Preview -->
          <div class="bg-surface-tertiary border border-border rounded-lg p-6">
            <h3 class="text-navy-900 font-semibold text-lg text-center mb-6">Cross-Sell Page Layout Preview</h3>

            <!-- Headline -->
            <h3 class="text-2xl text-navy-900 font-bold text-center mb-4">
              Wait! Supercharge Your Results With This...
            </h3>

            <!-- Perfect Complement Badge -->
            <div class="text-center mb-4">
              <div class="inline-flex items-center gap-2 bg-accent text-white px-6 py-2 rounded-lg text-sm font-bold">
                <Icon name="lucide:sparkles" class="w-4 h-4" />
                PERFECT COMPLEMENT
                <Icon name="lucide:sparkles" class="w-4 h-4" />
              </div>
            </div>

            <!-- Description -->
            <p class="text-charcoal-600 max-w-2xl mx-auto mb-6 text-center">
              Customers who combine [Main Product] with [Complementary Product] report 2X faster results. Add this to your order now for maximum benefits!
            </p>

            <!-- Product Combination -->
            <div class="flex justify-center items-center gap-4 mb-6 flex-wrap">
              <div class="bg-white border border-border rounded-lg p-4 w-44 text-center opacity-70">
                <div class="text-xs text-charcoal-500 font-medium mb-2">YOUR ORDER:</div>
                <div class="bg-surface-tertiary h-32 flex items-center justify-center rounded mb-2">
                  <Icon name="lucide:package" class="w-8 h-8 text-charcoal-400" />
                </div>
                <div class="font-semibold text-navy-900 text-sm">Main Product</div>
                <div class="text-xs text-charcoal-500">3 Bottles</div>
              </div>

              <div class="text-3xl font-bold text-accent">+</div>

              <div class="bg-white border-2 border-accent rounded-lg p-4 w-44 text-center">
                <div class="text-xs text-accent font-medium mb-2">ADD THIS:</div>
                <div class="bg-accent-light h-32 flex items-center justify-center rounded mb-2">
                  <Icon name="lucide:packages" class="w-8 h-8 text-accent" />
                </div>
                <div class="font-semibold text-navy-900 text-sm">Complementary Product</div>
                <div class="text-xs text-accent font-semibold">3 Bottles</div>
              </div>
            </div>

            <!-- Offer Box -->
            <div class="bg-white border-2 border-accent rounded-xl p-6 mb-6">
              <h4 class="text-accent font-bold text-lg mb-4 text-center">The Perfect Combination For Maximum Results</h4>

              <!-- Benefits Grid -->
              <div class="grid grid-cols-3 gap-3 mb-6">
                <div class="bg-surface-tertiary border border-border rounded-lg p-3 text-center">
                  <Icon name="lucide:zap" class="w-6 h-6 text-accent mx-auto mb-2" />
                  <strong class="text-navy-900 text-sm block">2X Faster</strong>
                  <p class="text-xs text-charcoal-500">Results</p>
                </div>
                <div class="bg-surface-tertiary border border-border rounded-lg p-3 text-center">
                  <Icon name="lucide:target" class="w-6 h-6 text-success mx-auto mb-2" />
                  <strong class="text-navy-900 text-sm block">Complete</strong>
                  <p class="text-xs text-charcoal-500">Solution</p>
                </div>
                <div class="bg-surface-tertiary border border-border rounded-lg p-3 text-center">
                  <Icon name="lucide:shield-check" class="w-6 h-6 text-warning mx-auto mb-2" />
                  <strong class="text-navy-900 text-sm block">Enhanced</strong>
                  <p class="text-xs text-charcoal-500">Benefits</p>
                </div>
              </div>

              <!-- Price Display -->
              <div class="bg-accent text-white p-4 rounded-lg mb-4 text-center">
                <div class="text-sm mb-1">Add to Your Order Today:</div>
                <div class="text-4xl font-bold my-2">$67</div>
                <div class="text-sm opacity-90">3 Bottles - 64% OFF Retail</div>
              </div>

              <!-- Value Stack -->
              <div class="space-y-2 text-sm">
                <div class="flex justify-between py-2 border-b border-border">
                  <span class="text-charcoal-600">3 Bottles of [Complementary Product]</span>
                  <span class="text-charcoal-500">$147 value</span>
                </div>
                <div class="flex justify-between py-2 border-b border-border">
                  <span class="text-charcoal-600">FREE Combination Guide (PDF)</span>
                  <span class="text-charcoal-500">$29 value</span>
                </div>
                <div class="flex justify-between py-2 border-b border-border">
                  <span class="text-charcoal-600">FREE Shipping (combined order)</span>
                  <span class="text-charcoal-500">$12 value</span>
                </div>
                <div class="flex justify-between font-bold text-accent pt-2">
                  <span>Your Price Today:</span>
                  <span>$67</span>
                </div>
              </div>
            </div>

            <!-- Testimonial -->
            <div class="bg-accent-light border border-accent/20 rounded-lg p-4 mb-6">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:message-square" class="w-4 h-4 text-accent" />
                <span class="font-semibold text-navy-900">What Customers Say:</span>
              </div>
              <p class="text-sm text-charcoal-600 italic">
                "I was skeptical, but combining these two products gave me results in just 3 weeks. I wish I'd bought both from the start!" - Sarah M.
              </p>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col md:flex-row gap-3">
              <div class="flex-1 bg-accent text-white px-6 py-4 rounded-lg font-bold text-center">
                <Icon name="lucide:check" class="w-4 h-4 inline mr-2" />
                YES! Add [Product] For $67
              </div>
              <div class="flex-1 bg-white text-charcoal-500 px-6 py-4 border border-border rounded-lg text-center text-sm">
                No thanks, I don't need enhanced results
              </div>
            </div>
          </div>
        </ContentCard>

        <!-- Section 3: Required Elements - Numbered Steps -->
        <ContentCard id="checklist">
          <SectionHeader :number="3" title="Required Page Elements" />
          <p class="text-charcoal-600 leading-relaxed mb-6">
            Every Upsell 2 page must include these essential elements:
          </p>

          <div class="space-y-3">
            <div class="flex items-start gap-4 p-4 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-7 h-7 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <div>
                <strong class="text-navy-900">Visual Product Pairing</strong>
                <p class="text-sm text-charcoal-600">Show both products side by side with '+' symbol</p>
              </div>
            </div>
            <div class="flex items-start gap-4 p-4 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-7 h-7 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <div>
                <strong class="text-navy-900">Perfect Complement Positioning</strong>
                <p class="text-sm text-charcoal-600">Frame as completing the solution</p>
              </div>
            </div>
            <div class="flex items-start gap-4 p-4 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-7 h-7 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              <div>
                <strong class="text-navy-900">Benefit Comparison</strong>
                <p class="text-sm text-charcoal-600">Show how combination delivers better results</p>
              </div>
            </div>
            <div class="flex items-start gap-4 p-4 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-7 h-7 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
              <div>
                <strong class="text-navy-900">Social Proof</strong>
                <p class="text-sm text-charcoal-600">Testimonial about using both products together</p>
              </div>
            </div>
            <div class="flex items-start gap-4 p-4 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-7 h-7 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
              <div>
                <strong class="text-navy-900">Clear Pricing & Value Stack</strong>
                <p class="text-sm text-charcoal-600">Single price point with what's included</p>
              </div>
            </div>
            <div class="flex items-start gap-4 p-4 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-7 h-7 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">6</span>
              <div>
                <strong class="text-navy-900">Enhanced Results Claim</strong>
                <p class="text-sm text-charcoal-600">'2X faster' or similar quantified benefit</p>
              </div>
            </div>
            <div class="flex items-start gap-4 p-4 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-7 h-7 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">7</span>
              <div>
                <strong class="text-navy-900">Strong Yes / Weak No Buttons</strong>
                <p class="text-sm text-charcoal-600">Frame decline as missing enhanced results</p>
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
                <p class="text-charcoal-600 text-sm mt-1">Add a free PDF guide on "how to use them together" to increase perceived value and conversion rates.</p>
              </div>
            </div>
          </div>
        </ContentCard>

        <!-- Section 4: Product Pairing Strategy -->
        <ContentCard id="pairing">
          <SectionHeader :number="4" title="Product Pairing Strategy" />
          <p class="text-charcoal-600 leading-relaxed mb-6">
            The complementary product must have a clear, logical connection:
          </p>

          <div class="overflow-x-auto mb-6">
            <table class="w-full text-sm">
              <thead>
                <tr class="bg-surface-tertiary">
                  <th class="text-left p-3 font-semibold text-navy-900 border-b border-border">Main Product</th>
                  <th class="text-left p-3 font-semibold text-navy-900 border-b border-border">Complementary Ideas</th>
                  <th class="text-left p-3 font-semibold text-navy-900 border-b border-border">Pairing Logic</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-border">
                  <td class="p-3 text-charcoal-600">Weight Loss</td>
                  <td class="p-3 text-charcoal-600">Sleep Support, Energy, Appetite Control</td>
                  <td class="p-3 text-charcoal-600">Sleep affects metabolism</td>
                </tr>
                <tr class="border-b border-border">
                  <td class="p-3 text-charcoal-600">Joint Support</td>
                  <td class="p-3 text-charcoal-600">Pain Cream, Mobility Support</td>
                  <td class="p-3 text-charcoal-600">Internal + external approach</td>
                </tr>
                <tr class="border-b border-border">
                  <td class="p-3 text-charcoal-600">Brain Health</td>
                  <td class="p-3 text-charcoal-600">Sleep Support, Stress Relief</td>
                  <td class="p-3 text-charcoal-600">Sleep impacts cognition</td>
                </tr>
                <tr class="border-b border-border">
                  <td class="p-3 text-charcoal-600">Digestive Health</td>
                  <td class="p-3 text-charcoal-600">Probiotic, Enzyme Blend</td>
                  <td class="p-3 text-charcoal-600">Complete gut health system</td>
                </tr>
                <tr>
                  <td class="p-3 text-charcoal-600">Skin Care Serum</td>
                  <td class="p-3 text-charcoal-600">Collagen, Night Cream</td>
                  <td class="p-3 text-charcoal-600">Internal + external beauty</td>
                </tr>
              </tbody>
            </table>
          </div>

          <AlertBox variant="success" title="Golden Rule">
            The complementary product should have a clear, logical connection. If you have to explain too much why they go together, the pairing isn't strong enough.
          </AlertBox>
        </ContentCard>

        <!-- Section 5: Pricing Guidelines - Icon Cards -->
        <ContentCard id="pricing">
          <SectionHeader :number="5" title="Pricing Guidelines" />
          <p class="text-charcoal-600 leading-relaxed mb-6">
            Cross-sell pricing should feel like a reasonable addition:
          </p>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div class="bg-surface-tertiary rounded-lg p-4 border border-border text-center">
              <div class="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="lucide:target" class="w-5 h-5 text-accent" />
              </div>
              <h4 class="font-semibold text-navy-900 text-sm mb-1">$37-$67 Sweet Spot</h4>
              <p class="text-xs text-charcoal-600">Best for supplements</p>
            </div>
            <div class="bg-surface-tertiary rounded-lg p-4 border border-border text-center">
              <div class="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="lucide:trending-down" class="w-5 h-5 text-success" />
              </div>
              <h4 class="font-semibold text-navy-900 text-sm mb-1">Lower Than Main</h4>
              <p class="text-xs text-charcoal-600">40-70% of main price</p>
            </div>
            <div class="bg-surface-tertiary rounded-lg p-4 border border-border text-center">
              <div class="w-10 h-10 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="lucide:scale" class="w-5 h-5 text-warning" />
              </div>
              <h4 class="font-semibold text-navy-900 text-sm mb-1">Show Value</h4>
              <p class="text-xs text-charcoal-600">Retail vs bundle price</p>
            </div>
            <div class="bg-surface-tertiary rounded-lg p-4 border border-border text-center">
              <div class="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="lucide:file-text" class="w-5 h-5 text-accent" />
              </div>
              <h4 class="font-semibold text-navy-900 text-sm mb-1">Include Bonus</h4>
              <p class="text-xs text-charcoal-600">PDF guide increases value</p>
            </div>
          </div>

          <AlertBox variant="info" title="Pricing Psychology">
            If the main order was $147, the complementary product at $67 feels like a reasonable addition (45% of main). But $147 + $147 feels too expensive and acceptance drops.
          </AlertBox>
        </ContentCard>

        <!-- Section 6: Key Messaging - Quote Cards -->
        <ContentCard id="messaging">
          <SectionHeader :number="6" title="Key Messaging Points" />
          <p class="text-charcoal-600 leading-relaxed mb-6">
            Focus on synergy - how the products work BETTER together:
          </p>

          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <!-- Synergy Messages -->
            <div>
              <h4 class="font-semibold text-navy-900 mb-4 flex items-center gap-2">
                <Icon name="lucide:zap" class="w-5 h-5 text-accent" />
                Synergy Messages
              </h4>
              <div class="space-y-3">
                <div class="bg-accent/5 rounded-lg p-3 border-l-4 border-accent">
                  <p class="text-navy-900 font-medium">"2X Faster Results"</p>
                  <p class="text-xs text-charcoal-500 mt-1">When products combined</p>
                </div>
                <div class="bg-accent/5 rounded-lg p-3 border-l-4 border-accent">
                  <p class="text-navy-900 font-medium">"Complete System"</p>
                  <p class="text-xs text-charcoal-500 mt-1">Address all aspects</p>
                </div>
                <div class="bg-accent/5 rounded-lg p-3 border-l-4 border-accent">
                  <p class="text-navy-900 font-medium">"Day + Night Formula"</p>
                  <p class="text-xs text-charcoal-500 mt-1">24/7 coverage approach</p>
                </div>
                <div class="bg-accent/5 rounded-lg p-3 border-l-4 border-accent">
                  <p class="text-navy-900 font-medium">"Internal + External"</p>
                  <p class="text-xs text-charcoal-500 mt-1">Comprehensive solution</p>
                </div>
              </div>
            </div>

            <!-- Objection Handling -->
            <div>
              <h4 class="font-semibold text-navy-900 mb-4 flex items-center gap-2">
                <Icon name="lucide:shield-check" class="w-5 h-5 text-success" />
                Objection Handling
              </h4>
              <div class="space-y-3">
                <div class="bg-success/5 rounded-lg p-3 border-l-4 border-success">
                  <p class="text-navy-900 font-medium">"Why Now?"</p>
                  <p class="text-xs text-charcoal-500 mt-1">Position as 'upgrade opportunity'</p>
                </div>
                <div class="bg-success/5 rounded-lg p-3 border-l-4 border-success">
                  <p class="text-navy-900 font-medium">"Is It Needed?"</p>
                  <p class="text-xs text-charcoal-500 mt-1">Show results comparison</p>
                </div>
                <div class="bg-success/5 rounded-lg p-3 border-l-4 border-success">
                  <p class="text-navy-900 font-medium">"Too Expensive"</p>
                  <p class="text-xs text-charcoal-500 mt-1">Emphasize bundle savings</p>
                </div>
                <div class="bg-success/5 rounded-lg p-3 border-l-4 border-success">
                  <p class="text-navy-900 font-medium">"Too Much To Take"</p>
                  <p class="text-xs text-charcoal-500 mt-1">Explain simple usage</p>
                </div>
              </div>
            </div>
          </div>
        </ContentCard>

        <!-- Section 7: Best Practices - Do/Don't Panels -->
        <ContentCard id="best-practices">
          <SectionHeader :number="7" title="Best Practices & Common Mistakes" />

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
                  <Icon name="lucide:eye" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Visual Pairing</p>
                    <p class="text-sm text-charcoal-600">Show both products together</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:calculator" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Quantified Benefits</p>
                    <p class="text-sm text-charcoal-600">Use '2X faster' with disclaimers</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:message-square" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Combo Testimonial</p>
                    <p class="text-sm text-charcoal-600">'Both products' social proof</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:layers" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Match Quantities</p>
                    <p class="text-sm text-charcoal-600">Same quantity as main order</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:file-plus" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Free Bonus PDF</p>
                    <p class="text-sm text-charcoal-600">Add guide for perceived value</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:shield" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Same Guarantee</p>
                    <p class="text-sm text-charcoal-600">Emphasize protection applies</p>
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
                  <Icon name="lucide:unlink" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Unrelated Products</p>
                    <p class="text-sm text-charcoal-600">No logical connection</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:dollar-sign" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Too Expensive</p>
                    <p class="text-sm text-charcoal-600">Don't exceed main price</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:help-circle" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Weak Connection</p>
                    <p class="text-sm text-charcoal-600">If not obvious, won't sell</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:copy" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">No Differentiation</p>
                    <p class="text-sm text-charcoal-600">Make clear it's different</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:file-text" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Complex Explanation</p>
                    <p class="text-sm text-charcoal-600">Too many words = weak pairing</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:list" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Multiple Options</p>
                    <p class="text-sm text-charcoal-600">One product only</p>
                  </div>
                </div>
              </div>
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
                <span class="text-xs bg-success/10 text-success px-2 py-0.5 rounded font-medium">Target: 15-30%</span>
              </div>
              <strong class="text-navy-900 block mb-1">Acceptance Rate</strong>
              <p class="text-charcoal-600 text-sm">Under 10% = poor product match</p>
            </div>

            <div class="bg-surface-tertiary rounded-lg p-4 border border-border">
              <div class="flex items-center justify-between mb-3">
                <Icon name="lucide:dollar-sign" class="w-5 h-5 text-success" />
                <span class="text-xs bg-success/10 text-success px-2 py-0.5 rounded font-medium">$37-67</span>
              </div>
              <strong class="text-navy-900 block mb-1">Optimal Price Point</strong>
              <p class="text-charcoal-600 text-sm">Higher prices reduce acceptance</p>
            </div>

            <div class="bg-surface-tertiary rounded-lg p-4 border border-border">
              <div class="flex items-center justify-between mb-3">
                <Icon name="lucide:coins" class="w-5 h-5 text-accent" />
                <span class="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded font-medium">+$16.75</span>
              </div>
              <strong class="text-navy-900 block mb-1">Revenue Impact</strong>
              <p class="text-charcoal-600 text-sm">If 25% accept at $67</p>
            </div>

            <div class="bg-surface-tertiary rounded-lg p-4 border border-border">
              <div class="flex items-center justify-between mb-3">
                <Icon name="lucide:link" class="w-5 h-5 text-success" />
                <span class="text-xs bg-success/10 text-success px-2 py-0.5 rounded font-medium">2-3X better</span>
              </div>
              <strong class="text-navy-900 block mb-1">Product Match Impact</strong>
              <p class="text-charcoal-600 text-sm">Strong vs weak pairing difference</p>
            </div>

            <div class="bg-surface-tertiary rounded-lg p-4 border border-border">
              <div class="flex items-center justify-between mb-3">
                <Icon name="lucide:flask-conical" class="w-5 h-5 text-accent" />
                <span class="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded font-medium">2X impact</span>
              </div>
              <strong class="text-navy-900 block mb-1">A/B Test Focus</strong>
              <p class="text-charcoal-600 text-sm">Test different products to find best pair</p>
            </div>

            <div class="bg-surface-tertiary rounded-lg p-4 border border-border">
              <div class="flex items-center justify-between mb-3">
                <Icon name="lucide:pie-chart" class="w-5 h-5 text-warning" />
                <span class="text-xs bg-warning/10 text-warning px-2 py-0.5 rounded font-medium">60-100%</span>
              </div>
              <strong class="text-navy-900 block mb-1">Cumulative AOV Lift</strong>
              <p class="text-charcoal-600 text-sm">Through entire funnel</p>
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
              <div class="text-slate-400 mb-2">Price Range</div>
              <div class="font-semibold">$37-67</div>
            </div>
            <div>
              <div class="text-slate-400 mb-2">Target Accept Rate</div>
              <div class="font-semibold">15-30%</div>
            </div>
            <div>
              <div class="text-slate-400 mb-2">Price vs Main</div>
              <div class="font-semibold">40-70% of main</div>
            </div>
            <div>
              <div class="text-slate-400 mb-2">Key Claim</div>
              <div class="font-semibold">2X faster results</div>
            </div>
            <div>
              <div class="text-slate-400 mb-2">Product Type</div>
              <div class="font-semibold">Different but related</div>
            </div>
            <div>
              <div class="text-slate-400 mb-2">Social Proof</div>
              <div class="font-semibold">Combo testimonial</div>
            </div>
          </div>
        </div>

        <!-- Navigation -->
        <NavigationButtons
          prev-to="/step4-downsell1"
          prev-text="Back: Downsell 1"
          next-to="/step6-downsell2"
          next-text="Next: Downsell 2"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Step 5: Upsell 2 - BuyGoods Vendor Guide',
  description: 'Cross-sell a different product that enhances the main purchase. Complete guide to complementary product upsells.'
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
