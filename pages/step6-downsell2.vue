<template>
  <div>
    <Navbar :breadcrumbs="['Step 6: Downsell 2']" />
    <Sidebar :current-step="5" />

    <div class="page-content">
      <!-- Enhanced Header -->
      <div class="header">
        <!-- Logo Shadow (larger, blurred, behind) -->
        <img src="/bg-logo-white.png" alt="" class="logo-shadow" aria-hidden="true" />
        <!-- Logo Main (visible, on top) -->
        <img src="/bg-logo-white.png" alt="" class="logo-main" aria-hidden="true" />
        <div class="header-content">
          <div class="step-badge">STEP 6 OF 8</div>
          <h1>Downsell 2: Trial Size</h1>
          <p>Final recovery offer with trial or starter size of complementary product</p>
        </div>

        <!-- Quick Stats Bar -->
        <div class="flex flex-wrap justify-center gap-6 mt-8">
          <div class="bg-white/10 backdrop-blur px-4 py-2 rounded-lg flex items-center gap-2">
            <Icon name="lucide:trending-up" class="w-4 h-4" />
            <span class="text-sm">10-20% Accept Rate</span>
          </div>
          <div class="bg-white/10 backdrop-blur px-4 py-2 rounded-lg flex items-center gap-2">
            <Icon name="lucide:dollar-sign" class="w-4 h-4" />
            <span class="text-sm">$19-27 Price</span>
          </div>
          <div class="bg-white/10 backdrop-blur px-4 py-2 rounded-lg flex items-center gap-2">
            <Icon name="lucide:package" class="w-4 h-4" />
            <span class="text-sm">1 Bottle Trial</span>
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
            <a href="#pricing" class="text-xs px-3 py-1.5 bg-surface-tertiary hover:bg-accent hover:text-white rounded-md transition-colors">Pricing</a>
            <a href="#messaging" class="text-xs px-3 py-1.5 bg-surface-tertiary hover:bg-accent hover:text-white rounded-md transition-colors">Messaging</a>
            <a href="#best-practices" class="text-xs px-3 py-1.5 bg-surface-tertiary hover:bg-accent hover:text-white rounded-md transition-colors">Best Practices</a>
            <a href="#strategy" class="text-xs px-3 py-1.5 bg-surface-tertiary hover:bg-accent hover:text-white rounded-md transition-colors">Strategy</a>
            <a href="#metrics" class="text-xs px-3 py-1.5 bg-surface-tertiary hover:bg-accent hover:text-white rounded-md transition-colors">Metrics</a>
          </div>
        </div>

        <!-- Section 1: What is Downsell 2? -->
        <ContentCard id="overview">
          <SectionHeader :number="1" title="What is Downsell 2?" />
          <p class="text-charcoal-600 leading-relaxed mb-4">
            This is your FINAL attempt to add value to the order. When customers decline Upsell 2 (the full complementary product), you present this last offer: a smaller, trial-sized version of that complementary product at an incredibly low price.
          </p>
          <p class="text-charcoal-600 leading-relaxed mb-6">
            The strategy here is simple: make the offer so small and inexpensive that it's almost silly to say no. Position it as "just try it" rather than a full commitment.
          </p>

          <!-- Key Benefits Grid -->
          <div class="grid md:grid-cols-3 gap-4 mb-6">
            <div class="bg-success-light border border-success/20 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:refresh-cw" class="w-5 h-5 text-success" />
                <span class="font-semibold text-navy-900">Final Recovery</span>
              </div>
              <p class="text-sm text-charcoal-600">10-20% of declined customers convert</p>
            </div>
            <div class="bg-accent-light border border-accent/20 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:sparkles" class="w-5 h-5 text-accent" />
                <span class="font-semibold text-navy-900">Impulse Price</span>
              </div>
              <p class="text-sm text-charcoal-600">Under $30 - almost silly to refuse</p>
            </div>
            <div class="bg-warning-light border border-warning/20 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:users" class="w-5 h-5 text-warning" />
                <span class="font-semibold text-navy-900">Future Value</span>
              </div>
              <p class="text-sm text-charcoal-600">30-40% become repeat buyers</p>
            </div>
          </div>

          <AlertBox variant="success" title="Final Recovery">
            10-20% of customers who declined Upsell 2 will accept this downsell. While each sale is smaller ($19-$27), it's pure additional revenue and introduces customers to the complementary product line.
          </AlertBox>
        </ContentCard>

        <!-- Section 2: Visual Structure -->
        <ContentCard id="structure">
          <SectionHeader :number="2" title="Visual Structure" />
          <p class="text-charcoal-600 leading-relaxed mb-6">
            Here's how your Downsell 2 page should look. Keep it simple and focus on the trial aspect:
          </p>

          <!-- Downsell Preview -->
          <div class="bg-surface-tertiary border border-border rounded-lg p-6">
            <h3 class="text-navy-900 font-semibold text-lg text-center mb-6">Final Offer Page Layout Preview</h3>

            <!-- Final Offer Headline -->
            <div class="bg-error text-white px-5 py-4 rounded-lg text-xl font-bold mb-6 text-center">
              <Icon name="lucide:hand" class="w-5 h-5 inline mr-2" />
              One Last Thing Before You Go...
            </div>

            <!-- Trial Badge -->
            <div class="text-center mb-4">
              <div class="inline-flex items-center gap-2 bg-success text-white px-6 py-2 rounded-lg text-sm font-bold">
                <Icon name="lucide:star" class="w-4 h-4" />
                TRIAL SIZE OFFER
                <Icon name="lucide:star" class="w-4 h-4" />
              </div>
            </div>

            <!-- Main Headline -->
            <h3 class="text-2xl text-navy-900 font-bold text-center mb-4">
              Try [Complementary Product] Risk-Free For Just $19
            </h3>

            <!-- Description -->
            <p class="text-charcoal-600 max-w-2xl mx-auto mb-6 text-center">
              We understand the full package wasn't right for you. But we'd love for you to at least TRY it. We've created a special trial size - just 1 bottle for only $19. This is our absolute final offer.
            </p>

            <!-- Comparison Table -->
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div class="bg-white border border-border rounded-lg p-4 text-center opacity-60">
                <div class="text-xs text-charcoal-500 line-through mb-2">Previous Offer</div>
                <div class="text-xl font-bold text-charcoal-600">3 Bottles</div>
                <div class="text-lg mt-1">$67</div>
              </div>
              <div class="bg-success-light border-2 border-success rounded-lg p-4 text-center">
                <div class="text-xs text-success font-semibold mb-2">Trial Offer</div>
                <div class="text-2xl font-bold text-navy-900">1 Bottle</div>
                <div class="text-xl mt-1 font-bold text-success">$19</div>
              </div>
            </div>

            <!-- Product Showcase -->
            <div class="flex justify-center mb-6">
              <div class="bg-white w-32 h-40 flex items-center justify-center rounded-lg border border-border">
                <div class="text-center">
                  <Icon name="lucide:package" class="w-8 h-8 text-accent mx-auto mb-2" />
                  <div class="text-xs text-charcoal-600">Trial Size</div>
                </div>
              </div>
            </div>

            <!-- Price Highlight -->
            <div class="bg-success text-white p-6 rounded-lg mb-6 text-center">
              <div class="text-sm mb-1">Just Try It For Only:</div>
              <div class="text-5xl font-bold my-2">$19</div>
              <div class="text-sm opacity-90">Regular: $49 | You Save: $30 (61% OFF)</div>
              <div class="text-xs opacity-90 mt-2">30-Day Supply - Perfect to Test the Results</div>
            </div>

            <!-- Benefits as horizontal pills -->
            <div class="flex flex-wrap justify-center gap-2 mb-6">
              <span class="bg-white border border-success/30 text-charcoal-700 px-3 py-1.5 rounded-full text-sm">Less than a coffee per day</span>
              <span class="bg-white border border-success/30 text-charcoal-700 px-3 py-1.5 rounded-full text-sm">1 bottle trial size</span>
              <span class="bg-white border border-success/30 text-charcoal-700 px-3 py-1.5 rounded-full text-sm">Ships FREE</span>
              <span class="bg-white border border-success/30 text-charcoal-700 px-3 py-1.5 rounded-full text-sm">60-day guarantee</span>
            </div>

            <!-- Final Callout -->
            <div class="bg-warning-light border border-warning rounded-lg p-4 mb-6 text-center">
              <div class="flex items-center justify-center gap-2 mb-2">
                <Icon name="lucide:alert-triangle" class="w-4 h-4 text-warning" />
                <span class="font-semibold text-navy-900">This Is Your Absolute Final Chance</span>
              </div>
              <p class="text-sm text-charcoal-600">Once you click past this page, this $19 trial offer disappears forever.</p>
            </div>

            <!-- Testimonial -->
            <div class="bg-accent-light border border-accent/20 rounded-lg p-4 mb-6">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:lightbulb" class="w-4 h-4 text-accent" />
                <span class="font-semibold text-navy-900">Smart Decision:</span>
              </div>
              <p class="text-sm text-charcoal-600 italic">
                "I almost skipped this, but for $19 I figured why not? Best decision ever - now I order it every month!" - Jennifer T.
              </p>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col md:flex-row gap-3">
              <div class="flex-1 bg-success text-white px-6 py-4 rounded-lg font-bold text-center">
                <Icon name="lucide:check" class="w-4 h-4 inline mr-2" />
                YES! Just Let Me Try It For $19
              </div>
              <div class="flex-1 bg-white text-charcoal-500 px-6 py-4 border border-border rounded-lg text-center text-sm">
                No thanks, complete my order
              </div>
            </div>
          </div>
        </ContentCard>

        <!-- Section 3: Required Elements - Numbered Steps Style -->
        <ContentCard id="checklist">
          <SectionHeader :number="3" title="Required Page Elements" />
          <p class="text-charcoal-600 leading-relaxed mb-6">
            Every Downsell 2 page must include these essential elements:
          </p>

          <!-- Numbered list with left border accent -->
          <div class="space-y-3">
            <div class="flex items-start gap-4 p-4 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-7 h-7 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <div>
                <strong class="text-navy-900">Final Offer Headline</strong>
                <p class="text-sm text-charcoal-600">Make it crystal clear this is the last chance</p>
              </div>
            </div>
            <div class="flex items-start gap-4 p-4 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-7 h-7 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <div>
                <strong class="text-navy-900">Trial/Starter Positioning</strong>
                <p class="text-sm text-charcoal-600">"Just try it" rather than full commitment</p>
              </div>
            </div>
            <div class="flex items-start gap-4 p-4 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-7 h-7 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              <div>
                <strong class="text-navy-900">Extremely Low Price</strong>
                <p class="text-sm text-charcoal-600">$19-27 range - impulse purchase level</p>
              </div>
            </div>
            <div class="flex items-start gap-4 p-4 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-7 h-7 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
              <div>
                <strong class="text-navy-900">Single Quantity Only</strong>
                <p class="text-sm text-charcoal-600">One bottle or trial size - no options</p>
              </div>
            </div>
            <div class="flex items-start gap-4 p-4 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-7 h-7 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
              <div>
                <strong class="text-navy-900">Price Comparison</strong>
                <p class="text-sm text-charcoal-600">Show how much smaller/cheaper vs declined offer</p>
              </div>
            </div>
            <div class="flex items-start gap-4 p-4 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-7 h-7 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">6</span>
              <div>
                <strong class="text-navy-900">Heavy Discount Display</strong>
                <p class="text-sm text-charcoal-600">Show 50-70% savings from regular price</p>
              </div>
            </div>
            <div class="flex items-start gap-4 p-4 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-7 h-7 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">7</span>
              <div>
                <strong class="text-navy-900">Risk Removal</strong>
                <p class="text-sm text-charcoal-600">Emphasize guarantee, free shipping, one-click</p>
              </div>
            </div>
            <div class="flex items-start gap-4 p-4 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-7 h-7 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">8</span>
              <div>
                <strong class="text-navy-900">Finality Messaging</strong>
                <p class="text-sm text-charcoal-600">"Never offered again" creates urgency</p>
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
                <p class="text-charcoal-600 text-sm mt-1">Use "I almost skipped this" testimonials - they directly address the customer's current hesitation.</p>
              </div>
            </div>
          </div>
        </ContentCard>

        <!-- Section 4: Pricing Strategy -->
        <ContentCard id="pricing">
          <SectionHeader :number="4" title="Pricing Strategy" />
          <p class="text-charcoal-600 leading-relaxed mb-6">
            The price should be low enough to feel like an impulse buy:
          </p>

          <div class="overflow-x-auto mb-6">
            <table class="w-full text-sm">
              <thead>
                <tr class="bg-surface-tertiary">
                  <th class="text-left p-3 font-semibold text-navy-900 border-b border-border">Upsell 2 (Declined)</th>
                  <th class="text-left p-3 font-semibold text-navy-900 border-b border-border">Downsell 2 Offer</th>
                  <th class="text-left p-3 font-semibold text-navy-900 border-b border-border">Psychology</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-border">
                  <td class="p-3 text-charcoal-600">3 Bottles for $67</td>
                  <td class="p-3 text-charcoal-600">1 Bottle for $19</td>
                  <td class="p-3 text-charcoal-600">72% less - feels like nothing</td>
                </tr>
                <tr class="border-b border-border">
                  <td class="p-3 text-charcoal-600">3 Bottles for $67</td>
                  <td class="p-3 text-charcoal-600">1 Bottle for $27</td>
                  <td class="p-3 text-charcoal-600">60% less - still very affordable</td>
                </tr>
                <tr>
                  <td class="p-3 text-charcoal-600">6 Bottles for $97</td>
                  <td class="p-3 text-charcoal-600">2 Bottles for $27</td>
                  <td class="p-3 text-charcoal-600">72% less - removes price objection</td>
                </tr>
              </tbody>
            </table>
          </div>

          <AlertBox variant="success" title="The $19 Sweet Spot">
            $19 is psychologically significant. It's under $20 which feels like "almost nothing." It's less than a meal, less than a movie ticket. This price point maximizes impulse acceptance.
          </AlertBox>
        </ContentCard>

        <!-- Section 5: Key Messaging - Speech Bubble / Quote Style -->
        <ContentCard id="messaging">
          <SectionHeader :number="5" title="Key Messaging Strategy" />
          <p class="text-charcoal-600 leading-relaxed mb-6">
            Focus on "Try" not "Buy" - every element should reduce commitment anxiety:
          </p>

          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <!-- Trial Language - Quote cards -->
            <div>
              <h4 class="font-semibold text-navy-900 mb-4 flex items-center gap-2">
                <Icon name="lucide:message-circle" class="w-5 h-5 text-accent" />
                Trial Language to Use
              </h4>
              <div class="space-y-3">
                <div class="bg-accent/5 rounded-lg p-3 border-l-4 border-accent relative">
                  <p class="text-navy-900 font-medium">"Just try it and see for yourself"</p>
                </div>
                <div class="bg-accent/5 rounded-lg p-3 border-l-4 border-accent">
                  <p class="text-navy-900 font-medium">"Risk-free trial size"</p>
                </div>
                <div class="bg-accent/5 rounded-lg p-3 border-l-4 border-accent">
                  <p class="text-navy-900 font-medium">"Perfect way to test it out"</p>
                </div>
                <div class="bg-accent/5 rounded-lg p-3 border-l-4 border-accent">
                  <p class="text-navy-900 font-medium">"See if it works for you"</p>
                </div>
                <div class="bg-accent/5 rounded-lg p-3 border-l-4 border-accent">
                  <p class="text-navy-900 font-medium">"If you love it, order more later"</p>
                </div>
              </div>
            </div>

            <!-- Price Anchoring - Comparison cards -->
            <div>
              <h4 class="font-semibold text-navy-900 mb-4 flex items-center gap-2">
                <Icon name="lucide:scale" class="w-5 h-5 text-success" />
                Price Comparisons
              </h4>
              <div class="space-y-3">
                <div class="bg-success/5 rounded-lg p-3 border-l-4 border-success flex justify-between items-center">
                  <span class="text-navy-900 font-medium">Less than $1/day</span>
                  <span class="text-xs bg-success/20 text-success px-2 py-1 rounded">Best</span>
                </div>
                <div class="bg-success/5 rounded-lg p-3 border-l-4 border-success flex justify-between items-center">
                  <span class="text-navy-900 font-medium">Less than a coffee</span>
                  <span class="text-xs bg-success/20 text-success px-2 py-1 rounded">Relatable</span>
                </div>
                <div class="bg-success/5 rounded-lg p-3 border-l-4 border-success flex justify-between items-center">
                  <span class="text-navy-900 font-medium">Cheaper than lunch</span>
                  <span class="text-xs bg-success/20 text-success px-2 py-1 rounded">Familiar</span>
                </div>
                <div class="bg-success/5 rounded-lg p-3 border-l-4 border-success flex justify-between items-center">
                  <span class="text-navy-900 font-medium">Only $19 to find out</span>
                  <span class="text-xs bg-success/20 text-success px-2 py-1 rounded">Direct</span>
                </div>
                <div class="bg-success/5 rounded-lg p-3 border-l-4 border-success flex justify-between items-center">
                  <span class="text-navy-900 font-medium">Almost silly to say no</span>
                  <span class="text-xs bg-success/20 text-success px-2 py-1 rounded">Persuasive</span>
                </div>
              </div>
            </div>
          </div>
        </ContentCard>

        <!-- Section 6: Best Practices - Visual Comparison Table -->
        <ContentCard id="best-practices">
          <SectionHeader :number="6" title="Best Practices & Common Mistakes" />

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
                  <Icon name="lucide:dollar-sign" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Keep Under $30</p>
                    <p class="text-sm text-charcoal-600">Above $30 stops feeling impulsive</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:package" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Single Bottle Only</p>
                    <p class="text-sm text-charcoal-600">Don't offer multiple quantities</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:flag" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Emphasize "Final"</p>
                    <p class="text-sm text-charcoal-600">Make it clear funnel ends here</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:flask-conical" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Use Trial Language</p>
                    <p class="text-sm text-charcoal-600">"Trial," "starter," "sample"</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:percent" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Massive Discount</p>
                    <p class="text-sm text-charcoal-600">50-70% off makes it irresistible</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:heart-handshake" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Graceful Decline</p>
                    <p class="text-sm text-charcoal-600">Let them go without pressure</p>
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
                  <Icon name="lucide:ban" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Pricing Too High</p>
                    <p class="text-sm text-charcoal-600">Above $30 kills impulse buy</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:layers" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Multiple Options</p>
                    <p class="text-sm text-charcoal-600">Keep it to ONE simple offer</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:infinity" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">No Finality</p>
                    <p class="text-sm text-charcoal-600">Must emphasize "last offer"</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:file-text" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Overselling</p>
                    <p class="text-sm text-charcoal-600">Keep copy short and simple</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:angry" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Aggressive Decline</p>
                    <p class="text-sm text-charcoal-600">Respect their decision</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="lucide:puzzle" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium text-navy-900">Complex Positioning</p>
                    <p class="text-sm text-charcoal-600">Should be: "Try 1 bottle for $19"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContentCard>

        <!-- Section 7: Strategic Purpose - Icon Cards -->
        <ContentCard id="strategy">
          <SectionHeader :number="7" title="Strategic Purpose" />
          <p class="text-charcoal-600 leading-relaxed mb-6">
            This downsell serves multiple purposes beyond immediate revenue:
          </p>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div class="bg-surface-tertiary rounded-lg p-4 border border-border text-center">
              <div class="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="lucide:piggy-bank" class="w-6 h-6 text-success" />
              </div>
              <h4 class="font-semibold text-navy-900 mb-1">Revenue Recovery</h4>
              <p class="text-sm text-charcoal-600">Capture 10-20% who would otherwise decline</p>
            </div>

            <div class="bg-surface-tertiary rounded-lg p-4 border border-border text-center">
              <div class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="lucide:package-open" class="w-6 h-6 text-accent" />
              </div>
              <h4 class="font-semibold text-navy-900 mb-1">Product Introduction</h4>
              <p class="text-sm text-charcoal-600">Get complementary product into their hands</p>
            </div>

            <div class="bg-surface-tertiary rounded-lg p-4 border border-border text-center">
              <div class="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="lucide:repeat" class="w-6 h-6 text-warning" />
              </div>
              <h4 class="font-semibold text-navy-900 mb-1">Future Sales</h4>
              <p class="text-sm text-charcoal-600">If they like it, they'll reorder at full price</p>
            </div>

            <div class="bg-surface-tertiary rounded-lg p-4 border border-border text-center">
              <div class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="lucide:mail" class="w-6 h-6 text-accent" />
              </div>
              <h4 class="font-semibold text-navy-900 mb-1">Email Segmentation</h4>
              <p class="text-sm text-charcoal-600">Know they're interested in both product lines</p>
            </div>

            <div class="bg-surface-tertiary rounded-lg p-4 border border-border text-center md:col-span-2 lg:col-span-1">
              <div class="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="lucide:trending-down" class="w-6 h-6 text-success" />
              </div>
              <h4 class="font-semibold text-navy-900 mb-1">Lower Acquisition Cost</h4>
              <p class="text-sm text-charcoal-600">Every $19 helps offset ad spend</p>
            </div>
          </div>

          <AlertBox variant="success" title="Long-term Value">
            30-40% of customers who accept this trial offer become repeat buyers of the complementary product line. You're not just making $19 - you're potentially creating a multi-product customer.
          </AlertBox>
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
                <span class="text-xs bg-success/10 text-success px-2 py-0.5 rounded font-medium">Target: 10-20%</span>
              </div>
              <strong class="text-navy-900 block mb-1">Acceptance Rate</strong>
              <p class="text-charcoal-600 text-sm">Top performers hit 25%</p>
            </div>

            <div class="bg-surface-tertiary rounded-lg p-4 border border-border">
              <div class="flex items-center justify-between mb-3">
                <Icon name="lucide:dollar-sign" class="w-5 h-5 text-success" />
                <span class="text-xs bg-success/10 text-success px-2 py-0.5 rounded font-medium">$19-27</span>
              </div>
              <strong class="text-navy-900 block mb-1">Optimal Price Point</strong>
              <p class="text-charcoal-600 text-sm">$19 slightly outperforms $27</p>
            </div>

            <div class="bg-surface-tertiary rounded-lg p-4 border border-border">
              <div class="flex items-center justify-between mb-3">
                <Icon name="lucide:coins" class="w-5 h-5 text-accent" />
                <span class="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded font-medium">+$1,425</span>
              </div>
              <strong class="text-navy-900 block mb-1">Revenue Recovery</strong>
              <p class="text-charcoal-600 text-sm">If 75 of 500 accept at $19</p>
            </div>

            <div class="bg-surface-tertiary rounded-lg p-4 border border-border">
              <div class="flex items-center justify-between mb-3">
                <Icon name="lucide:refresh-cw" class="w-5 h-5 text-success" />
                <span class="text-xs bg-success/10 text-success px-2 py-0.5 rounded font-medium">30-40%</span>
              </div>
              <strong class="text-navy-900 block mb-1">Future Value</strong>
              <p class="text-charcoal-600 text-sm">Trial buyers become repeats</p>
            </div>

            <div class="bg-surface-tertiary rounded-lg p-4 border border-border">
              <div class="flex items-center justify-between mb-3">
                <Icon name="lucide:pie-chart" class="w-5 h-5 text-warning" />
                <span class="text-xs bg-warning/10 text-warning px-2 py-0.5 rounded font-medium">60-120%</span>
              </div>
              <strong class="text-navy-900 block mb-1">Complete Funnel Impact</strong>
              <p class="text-charcoal-600 text-sm">AOV increase over initial purchase</p>
            </div>

            <div class="bg-surface-tertiary rounded-lg p-4 border border-border">
              <div class="flex items-center justify-between mb-3">
                <Icon name="lucide:zap" class="w-5 h-5 text-error" />
                <span class="text-xs bg-error/10 text-error px-2 py-0.5 rounded font-medium">Under 2s</span>
              </div>
              <strong class="text-navy-900 block mb-1">Load Speed Critical</strong>
              <p class="text-charcoal-600 text-sm">Final chance - don't lose them</p>
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
              <div class="font-semibold">$19-27</div>
            </div>
            <div>
              <div class="text-slate-400 mb-2">Target Accept Rate</div>
              <div class="font-semibold">10-20%</div>
            </div>
            <div>
              <div class="text-slate-400 mb-2">Quantity</div>
              <div class="font-semibold">1 bottle only</div>
            </div>
            <div>
              <div class="text-slate-400 mb-2">Discount</div>
              <div class="font-semibold">50-70% off</div>
            </div>
            <div>
              <div class="text-slate-400 mb-2">Key Message</div>
              <div class="font-semibold">"Just try it"</div>
            </div>
            <div>
              <div class="text-slate-400 mb-2">Future Value</div>
              <div class="font-semibold">30-40% repeat</div>
            </div>
          </div>
        </div>

        <!-- Navigation -->
        <NavigationButtons
          prev-to="/step5-upsell2"
          prev-text="Back: Upsell 2"
          next-to="/step7-thankyou"
          next-text="Next: Thank You Page"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Step 6: Downsell 2 - BuyGoods Vendor Guide',
  description: 'Final recovery offer with trial or starter size of complementary product at impulse pricing.'
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

/* Shadow logo - large watermark behind main logo */
.logo-shadow {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 400px;
  height: auto;
  opacity: 0.06;
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
    width: 250px;
    opacity: 0.05;
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
