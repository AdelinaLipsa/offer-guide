<template>
  <div>
    <Navbar :breadcrumbs="['Step 7: Checkout Page']" />
    <Sidebar :current-step="7" />

    <div class="page-content">
      <PageHeader
        badge="STEP 2 OF 8"
        title="Checkout Page (DTC)"
        subtitle="Convert viewers into customers with optimized pricing and package options"
        :stats="[
          { icon: 'lucide:shopping-cart', text: '30-50% Checkout Rate' },
          { icon: 'lucide:package', text: '3 Package Options' },
          { icon: 'lucide:dollar-sign', text: '$150-250 AOV' }
        ]"
      />

      <div class="content-width py-10">
        <!-- Quick Jump Navigation -->
        <div class="bg-surface border border-border rounded-lg p-4 mb-8 sticky top-4 z-20">
          <div class="flex items-center gap-2 mb-3">
            <Icon name="lucide:compass" class="w-4 h-4 text-accent" />
            <span class="text-sm font-semibold text-navy-900">Quick Navigation</span>
          </div>
          <div class="flex flex-wrap gap-2">
            <a href="#overview" class="nav-pill text-xs px-3 py-1.5 bg-surface-tertiary rounded-md">Overview</a>
            <a href="#pricing" class="nav-pill text-xs px-3 py-1.5 bg-surface-tertiary rounded-md">3-Tier Pricing</a>
            <a href="#order-form" class="nav-pill text-xs px-3 py-1.5 bg-surface-tertiary rounded-md">Order Form</a>
            <a href="#trust" class="nav-pill text-xs px-3 py-1.5 bg-surface-tertiary rounded-md">Trust Elements</a>
            <a href="#checklist" class="nav-pill text-xs px-3 py-1.5 bg-surface-tertiary rounded-md">Checklist</a>
            <a href="#metrics" class="nav-pill text-xs px-3 py-1.5 bg-surface-tertiary rounded-md">Metrics</a>
          </div>
        </div>

        <!-- Section 1: What is DTC -->
        <ContentCard id="overview">
          <SectionHeader :number="1" title="What is a DTC/Checkout Page?" />
          <p class="text-charcoal-600 leading-relaxed mb-4">
            The Direct-to-Checkout (DTC) page is where customers land after clicking the buy button on your VSL. This page displays all your package options, pricing, and the order form in one seamless experience.
          </p>
          <p class="text-charcoal-600 leading-relaxed mb-6">
            Unlike traditional e-commerce where customers browse multiple products, the DTC page focuses solely on converting the customer on YOUR product with strategic pricing psychology and package positioning.
          </p>

          <AlertBox variant="success" title="Why DTC Works">
            By presenting all options upfront with clear value propositions, you remove decision friction and guide customers toward your most profitable package (typically the "Best Value" 3-6 bottle option).
          </AlertBox>
        </ContentCard>

        <!-- Section 2: 3-Tier Pricing -->
        <ContentCard id="pricing">
          <SectionHeader :number="2" title="The 3-Tier Pricing Structure" />
          <p class="text-charcoal-600 leading-relaxed mb-6">
            Always present exactly THREE package options. This is the sweet spot between choice and decision paralysis.
          </p>

          <!-- Pricing Cards -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <!-- Basic Package -->
            <div class="bg-white border-2 border-border rounded-xl p-6 flex flex-col">
              <div class="bg-surface-tertiary h-40 flex items-center justify-center rounded-lg mb-4 text-charcoal-500 text-sm">[ PRODUCT IMAGE - 1 Bottle ]</div>
              <h4 class="text-xl text-navy-900 mb-2 font-semibold">Basic Package</h4>
              <div class="text-3xl font-bold text-accent my-4">$69<span class="text-base font-normal text-charcoal-500">/bottle</span></div>
              <div class="text-charcoal-600 mb-4">1 Bottle - 30 Day Supply</div>
              <ul class="list-none space-y-2 my-4 flex-grow">
                <li class="flex items-center text-charcoal-600 text-sm">
                  <Icon name="lucide:check" class="w-4 h-4 text-success mr-2" />
                  Free shipping
                </li>
                <li class="flex items-center text-charcoal-600 text-sm">
                  <Icon name="lucide:check" class="w-4 h-4 text-success mr-2" />
                  60-day guarantee
                </li>
                <li class="flex items-center text-charcoal-600 text-sm">
                  <Icon name="lucide:check" class="w-4 h-4 text-success mr-2" />
                  Secure checkout
                </li>
              </ul>
              <button class="bg-accent text-white font-semibold py-3 rounded-lg w-full mt-auto hover:bg-accent/90 transition-colors">Select Package</button>
            </div>

            <!-- Best Value Package -->
            <div class="bg-white border-4 border-accent rounded-xl p-6 shadow-lg scale-105 relative flex flex-col">
              <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-5 py-1.5 rounded-full text-xs font-bold">BEST VALUE</div>
              <div class="bg-surface-tertiary h-40 flex items-center justify-center rounded-lg mb-4 text-charcoal-500 text-sm">[ PRODUCT IMAGE - 3 Bottles ]</div>
              <h4 class="text-xl text-navy-900 mb-2 font-semibold">Best Value Package</h4>
              <div class="inline-block bg-success text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 w-fit">Save $120</div>
              <div class="text-3xl font-bold text-accent my-4">$49<span class="text-base font-normal text-charcoal-500">/bottle</span></div>
              <div class="text-charcoal-600 mb-4">3 Bottles + 3 FREE - 180 Day Supply</div>
              <ul class="list-none space-y-2 my-4 flex-grow">
                <li class="flex items-center text-charcoal-600 text-sm">
                  <Icon name="lucide:check" class="w-4 h-4 text-success mr-2" />
                  Free shipping
                </li>
                <li class="flex items-center text-charcoal-600 text-sm">
                  <Icon name="lucide:check" class="w-4 h-4 text-success mr-2" />
                  60-day guarantee
                </li>
                <li class="flex items-center text-charcoal-600 text-sm">
                  <Icon name="lucide:check" class="w-4 h-4 text-success mr-2" />
                  <strong>3 FREE bonus bottles</strong>
                </li>
                <li class="flex items-center text-charcoal-600 text-sm">
                  <Icon name="lucide:check" class="w-4 h-4 text-success mr-2" />
                  <strong>FREE bonus guides</strong>
                </li>
              </ul>
              <button class="bg-accent text-white font-semibold py-3 rounded-lg w-full mt-auto hover:bg-accent/90 transition-colors">Select Best Value</button>
            </div>

            <!-- Premium Package -->
            <div class="bg-white border-2 border-border rounded-xl p-6 flex flex-col">
              <div class="bg-surface-tertiary h-40 flex items-center justify-center rounded-lg mb-4 text-charcoal-500 text-sm">[ PRODUCT IMAGE - 6 Bottles ]</div>
              <h4 class="text-xl text-navy-900 mb-2 font-semibold">Premium Package</h4>
              <div class="inline-block bg-success text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 w-fit">Save $240</div>
              <div class="text-3xl font-bold text-accent my-4">$39<span class="text-base font-normal text-charcoal-500">/bottle</span></div>
              <div class="text-charcoal-600 mb-4">6 Bottles - 180 Day Supply</div>
              <ul class="list-none space-y-2 my-4 flex-grow">
                <li class="flex items-center text-charcoal-600 text-sm">
                  <Icon name="lucide:check" class="w-4 h-4 text-success mr-2" />
                  Free shipping
                </li>
                <li class="flex items-center text-charcoal-600 text-sm">
                  <Icon name="lucide:check" class="w-4 h-4 text-success mr-2" />
                  60-day guarantee
                </li>
                <li class="flex items-center text-charcoal-600 text-sm">
                  <Icon name="lucide:check" class="w-4 h-4 text-success mr-2" />
                  <strong>Maximum savings</strong>
                </li>
              </ul>
              <button class="bg-accent text-white font-semibold py-3 rounded-lg w-full mt-auto hover:bg-accent/90 transition-colors">Select Package</button>
            </div>
          </div>

          <AlertBox variant="info" title="Pricing Psychology">
            The middle option (Best Value) should be highlighted and positioned as the recommended choice. 50-60% of customers will select this option when properly presented.
          </AlertBox>
        </ContentCard>

        <!-- Section 3: Order Form -->
        <ContentCard id="order-form">
          <SectionHeader :number="3" title="Order Form Structure" />
          <p class="text-charcoal-600 leading-relaxed mb-6">
            After selecting a package, customers see a simple order form. Keep it clean and minimize friction.
          </p>

          <div class="bg-surface-tertiary border-2 border-dashed border-border rounded-lg p-8">
            <h3 class="text-center text-navy-900 text-2xl mb-6 font-semibold">Complete Your Order</h3>

            <div class="bg-accent/10 px-4 py-4 rounded-lg mb-6 text-center border border-accent/20">
              <strong class="text-accent block">Selected: Best Value Package - 3 Bottles + 3 FREE</strong>
              <div class="text-2xl font-bold mt-2 text-navy-900">$147 <span class="line-through text-charcoal-500">$294</span></div>
            </div>

            <!-- Form Fields -->
            <div class="space-y-4 mb-6">
              <div class="grid grid-cols-2 gap-4">
                <div class="bg-white border border-border rounded-lg p-3 text-charcoal-500">[ First Name ]</div>
                <div class="bg-white border border-border rounded-lg p-3 text-charcoal-500">[ Last Name ]</div>
              </div>
              <div class="bg-white border border-border rounded-lg p-3 text-charcoal-500">[ Email Address ]</div>
              <div class="bg-white border border-border rounded-lg p-3 text-charcoal-500">[ Street Address ]</div>
              <div class="grid grid-cols-3 gap-4">
                <div class="bg-white border border-border rounded-lg p-3 text-charcoal-500">[ City ]</div>
                <div class="bg-white border border-border rounded-lg p-3 text-charcoal-500">[ State ]</div>
                <div class="bg-white border border-border rounded-lg p-3 text-charcoal-500">[ ZIP ]</div>
              </div>
              <div class="bg-white border border-border rounded-lg p-3 text-charcoal-500">[ Card Number ]</div>
              <div class="grid grid-cols-2 gap-4">
                <div class="bg-white border border-border rounded-lg p-3 text-charcoal-500">[ Expiration ]</div>
                <div class="bg-white border border-border rounded-lg p-3 text-charcoal-500">[ CVV ]</div>
              </div>
            </div>

            <div class="text-center">
              <button class="bg-accent text-white font-semibold py-4 px-12 rounded-lg text-lg hover:bg-accent/90 transition-colors">Complete Secure Order</button>
              <p class="text-xs text-charcoal-500 mt-3 flex items-center justify-center gap-1">
                <Icon name="lucide:lock" class="w-3 h-3" />
                Secure 256-bit SSL encrypted checkout
              </p>
            </div>
          </div>
        </ContentCard>

        <!-- Section 4: Trust Elements -->
        <ContentCard id="trust">
          <SectionHeader :number="4" title="Trust & Security Elements" />
          <p class="text-charcoal-600 leading-relaxed mb-6">
            Display trust badges and guarantees prominently to reduce purchase anxiety.
          </p>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
            <div class="bg-surface-tertiary border border-border rounded-lg p-4 text-center">
              <Icon name="lucide:lock" class="w-8 h-8 text-accent mx-auto mb-2" />
              <strong class="text-sm text-navy-900">Secure Checkout</strong>
            </div>
            <div class="bg-surface-tertiary border border-border rounded-lg p-4 text-center">
              <Icon name="lucide:shield-check" class="w-8 h-8 text-success mx-auto mb-2" />
              <strong class="text-sm text-navy-900">60-Day Guarantee</strong>
            </div>
            <div class="bg-surface-tertiary border border-border rounded-lg p-4 text-center">
              <Icon name="lucide:truck" class="w-8 h-8 text-accent mx-auto mb-2" />
              <strong class="text-sm text-navy-900">Free Shipping</strong>
            </div>
            <div class="bg-surface-tertiary border border-border rounded-lg p-4 text-center">
              <Icon name="lucide:star" class="w-8 h-8 text-warning mx-auto mb-2" />
              <strong class="text-sm text-navy-900">5-Star Reviews</strong>
            </div>
          </div>

          <AlertBox variant="success" title="Money-Back Guarantee is Essential">
            A clear 60-day money-back guarantee can increase conversions by 30-40%. Make it prominent and risk-free.
          </AlertBox>
        </ContentCard>

        <!-- Section 5: Checklist -->
        <ContentCard id="checklist">
          <SectionHeader :number="5" title="Required Elements" />

          <div class="grid md:grid-cols-2 gap-4">
            <div class="flex items-start gap-3 p-4 bg-surface-tertiary rounded-lg border border-border">
              <span class="flex-shrink-0 w-7 h-7 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <p class="text-charcoal-600"><strong class="text-navy-900">3 Package Options</strong> — Basic, Best Value (highlighted), Premium</p>
            </div>
            <div class="flex items-start gap-3 p-4 bg-surface-tertiary rounded-lg border border-border">
              <span class="flex-shrink-0 w-7 h-7 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <p class="text-charcoal-600"><strong class="text-navy-900">Clear Pricing</strong> — Show per-bottle price and total savings</p>
            </div>
            <div class="flex items-start gap-3 p-4 bg-surface-tertiary rounded-lg border border-border">
              <span class="flex-shrink-0 w-7 h-7 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <p class="text-charcoal-600"><strong class="text-navy-900">Product Images</strong> — High-quality images for each package</p>
            </div>
            <div class="flex items-start gap-3 p-4 bg-surface-tertiary rounded-lg border border-border">
              <span class="flex-shrink-0 w-7 h-7 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <p class="text-charcoal-600"><strong class="text-navy-900">Highlight Best Value</strong> — Visual emphasis on recommended package</p>
            </div>
            <div class="flex items-start gap-3 p-4 bg-surface-tertiary rounded-lg border border-border">
              <span class="flex-shrink-0 w-7 h-7 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
              <p class="text-charcoal-600"><strong class="text-navy-900">Savings Badges</strong> — Show dollar amount saved on bulk packages</p>
            </div>
            <div class="flex items-start gap-3 p-4 bg-surface-tertiary rounded-lg border border-border">
              <span class="flex-shrink-0 w-7 h-7 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
              <p class="text-charcoal-600"><strong class="text-navy-900">Trust Badges</strong> — Security, guarantee, shipping icons</p>
            </div>
          </div>
        </ContentCard>

        <!-- Section 6: Best Practices -->
        <ContentCard>
          <SectionHeader :number="6" title="Best Practices" />

          <div class="bg-success/5 border border-success/20 rounded-lg p-5">
            <ul class="grid md:grid-cols-2 gap-4">
              <li class="flex items-start gap-2">
                <Icon name="lucide:star" class="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span class="text-charcoal-600"><strong>Mobile-First Design</strong> — 60%+ of orders come from mobile</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon name="lucide:star" class="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span class="text-charcoal-600"><strong>One-Click Selection</strong> — Don't make customers navigate</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon name="lucide:star" class="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span class="text-charcoal-600"><strong>Show Savings Clearly</strong> — "$120 savings" is more compelling</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon name="lucide:star" class="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span class="text-charcoal-600"><strong>Add Bonuses</strong> — Increase perceived value of middle tier</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon name="lucide:star" class="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span class="text-charcoal-600"><strong>Minimize Fields</strong> — Only ask for essential information</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon name="lucide:star" class="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span class="text-charcoal-600"><strong>Multiple Payments</strong> — Credit card, PayPal options</span>
              </li>
            </ul>
          </div>
        </ContentCard>

        <!-- Section 7: Common Mistakes -->
        <ContentCard>
          <SectionHeader :number="7" title="Common Mistakes to Avoid" />

          <AlertBox variant="warning" title="Warning" class="mb-6">
            These mistakes can cut your conversion rate in half.
          </AlertBox>

          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-error-light border border-error/20 rounded-lg p-3 flex items-start">
              <Icon name="lucide:x" class="w-4 h-4 text-error mr-2 mt-0.5 flex-shrink-0" />
              <span class="text-charcoal-600"><strong>Too Many Options:</strong> More than 3 creates paralysis</span>
            </div>
            <div class="bg-error-light border border-error/20 rounded-lg p-3 flex items-start">
              <Icon name="lucide:x" class="w-4 h-4 text-error mr-2 mt-0.5 flex-shrink-0" />
              <span class="text-charcoal-600"><strong>No Clear Recommendation:</strong> Highlight best value</span>
            </div>
            <div class="bg-error-light border border-error/20 rounded-lg p-3 flex items-start">
              <Icon name="lucide:x" class="w-4 h-4 text-error mr-2 mt-0.5 flex-shrink-0" />
              <span class="text-charcoal-600"><strong>Hidden Costs:</strong> Surprise fees kill conversions</span>
            </div>
            <div class="bg-error-light border border-error/20 rounded-lg p-3 flex items-start">
              <Icon name="lucide:x" class="w-4 h-4 text-error mr-2 mt-0.5 flex-shrink-0" />
              <span class="text-charcoal-600"><strong>Complex Forms:</strong> Each field reduces completion 5-10%</span>
            </div>
            <div class="bg-error-light border border-error/20 rounded-lg p-3 flex items-start">
              <Icon name="lucide:x" class="w-4 h-4 text-error mr-2 mt-0.5 flex-shrink-0" />
              <span class="text-charcoal-600"><strong>Weak Guarantee:</strong> 30-day is less effective than 60-day</span>
            </div>
            <div class="bg-error-light border border-error/20 rounded-lg p-3 flex items-start">
              <Icon name="lucide:x" class="w-4 h-4 text-error mr-2 mt-0.5 flex-shrink-0" />
              <span class="text-charcoal-600"><strong>Poor Mobile Experience:</strong> 60% revenue loss</span>
            </div>
          </div>
        </ContentCard>

        <!-- Metrics Box -->
        <ContentCard id="metrics">
          <div class="flex items-center mb-6">
            <div class="w-9 h-9 bg-accent rounded-lg flex items-center justify-center mr-3">
              <Icon name="lucide:bar-chart-3" class="w-5 h-5 text-white" />
            </div>
            <h2 class="text-2xl font-bold text-navy-900">Performance Metrics & Benchmarks</h2>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <MetricsBox icon="lucide:shopping-cart" title="Checkout Conversion Rate" value="30-50% of people who land on this page should complete purchase." />
            <MetricsBox icon="lucide:award" title="Best Value Selection" value="Should account for 50-60% of all orders." />
            <MetricsBox icon="lucide:shopping-bag" title="Cart Abandonment Rate" value="Expect 30-40% abandonment. Higher indicates friction." />
            <MetricsBox icon="lucide:dollar-sign" title="Average Order Value" value="With proper positioning, AOV should be $150-250." />
            <MetricsBox icon="lucide:smartphone" title="Mobile vs Desktop" value="Mobile should convert at 70-80% the rate of desktop." />
            <MetricsBox icon="lucide:clock" title="Form Completion Time" value="Should take 2-3 minutes average." />
          </div>
        </ContentCard>

        <!-- Navigation -->
        <NavigationButtons
          prev-link="/step1-vsl"
          prev-text="VSL Page"
          next-link="/step3-upsell1"
          next-text="Upsell 1"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Step 2: DTC/Checkout Page - BuyGoods Vendor Guide',
  description: 'Learn how to create an optimized DTC/Checkout page with strategic pricing psychology and package positioning.'
})
</script>

<style scoped>
.page-content {
  margin-left: 300px;
}

@media (max-width: 768px) {
  .page-content {
    margin-left: 0;
  }
}
</style>
