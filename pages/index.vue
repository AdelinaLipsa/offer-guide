<template>
  <div>
    <HeroHeader
      title="BuyGoods Vendor Offer Guide"
      subtitle="Complete step-by-step visual guide to structuring high-converting product offers"
      icon="lucide:layout-grid"
      :badges="['7 Complete Steps', 'Industry Benchmarks', 'Legal Compliance']"
    />

    <div class="content-width py-12">
      <!-- Intro Card -->
      <div v-scroll-animate="'fade-up'" class="bg-white rounded-lg p-8 border border-border mb-10 hover-subtle">
        <h2 class="text-xl font-semibold mb-4 flex items-center text-navy-900">
          <Icon name="lucide:book-open" class="w-5 h-5 mr-3 text-accent" />
          Welcome to Your Complete Funnel Guide
        </h2>
        <p class="text-charcoal-600 mb-3">
          This educational guide shows you exactly how to structure a professional sales funnel on BuyGoods. Each step includes visual examples, best practices, conversion metrics, and common mistakes to avoid.
        </p>
        <p class="text-charcoal-600 mb-6">
          Follow this proven 7-step funnel structure to maximize your revenue per customer while maintaining high customer satisfaction.
        </p>

        <AlertBox variant="warning" title="Important">
          This is an educational guide with placeholder content. When building your actual offers, replace all placeholders with your real product information, images, and copy.
        </AlertBox>
      </div>

      <!-- Stats Row -->
      <div v-scroll-animate="'fade-up'" class="bg-surface-tertiary rounded-lg p-8 mb-10 border border-border">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="text-center scroll-animate animate-fade-up stagger-1 is-visible">
            <div class="text-3xl font-bold text-accent mb-1">7</div>
            <div class="text-charcoal-500 text-sm font-medium uppercase tracking-wide">Funnel Steps</div>
          </div>
          <div class="text-center scroll-animate animate-fade-up stagger-2 is-visible">
            <div class="text-3xl font-bold text-accent mb-1">60-120%</div>
            <div class="text-charcoal-500 text-sm font-medium uppercase tracking-wide">AOV Increase</div>
          </div>
          <div class="text-center scroll-animate animate-fade-up stagger-3 is-visible">
            <div class="text-3xl font-bold text-accent mb-1">15-25%</div>
            <div class="text-charcoal-500 text-sm font-medium uppercase tracking-wide">Refund Reduction</div>
          </div>
          <div class="text-center scroll-animate animate-fade-up stagger-4 is-visible">
            <div class="text-3xl font-bold text-accent mb-1">2-5%</div>
            <div class="text-charcoal-500 text-sm font-medium uppercase tracking-wide">VSL Conversion</div>
          </div>
        </div>
      </div>

      <!-- Section Title -->
      <h2 v-scroll-animate="'fade-in'" class="text-2xl font-bold text-center mb-10 text-navy-900">
        The Complete Funnel Structure
      </h2>

      <!-- Step Cards Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
        <StepCard
          :step-number="1"
          badge="STEP 1 OF 7"
          title="VSL Page"
          title-icon="lucide:play-circle"
          description="Video Sales Letter page where you present your product through a compelling 50 minute video presentation."
          :features="[
            'Video player placement',
            'Timed button reveals',
            'Product display structure',
            'Trust elements'
          ]"
          metric-icon="lucide:trending-up"
          metric-label="Typical Conversion"
          metric-value="2-5% of viewers"
          link-to="/step1-vsl"
          link-text="View VSL Guide"
        />

        <StepCard
          :step-number="2"
          badge="STEP 2 OF 7"
          title="Upsell 1"
          subtitle="(same product, better deal)"
          title-icon="lucide:plus-circle"
          description="First upsell offering additional bottles of the same product at a discounted rate immediately after checkout."
          :features="[
            'VIP upgrade messaging',
            'Discount pricing structure',
            'Urgency elements',
            'One-click acceptance'
          ]"
          metric-icon="lucide:award"
          metric-label="Acceptance"
          metric-value="20-35% properly positioned"
          link-to="/step3-upsell1"
          link-text="View Upsell 1 Guide"
        />

        <StepCard
          :step-number="3"
          badge="STEP 3 OF 7"
          title="Downsell 1"
          subtitle="(smaller quantity, better price)"
          title-icon="lucide:arrow-down-circle"
          description="Recovery offer presenting a smaller quantity option for customers who declined the first upsell."
          :features="[
            'Last chance messaging',
            'Reduced quantity offer',
            'Better per-unit discount',
            'Simplified decision'
          ]"
          metric-icon="lucide:refresh-cw"
          metric-label="Recovery"
          metric-value="15-25% of declined accept"
          link-to="/step4-downsell1"
          link-text="View Downsell 1 Guide"
        />

        <StepCard
          :step-number="4"
          badge="STEP 4 OF 7"
          title="Upsell 2"
          subtitle="(different product)"
          title-icon="lucide:package"
          description="Cross-sell offer introducing a different but complementary product that enhances the main purchase."
          :features="[
            'Product pairing strategy',
            'Combination benefits',
            'Bundle pricing',
            'Enhanced results messaging'
          ]"
          metric-icon="lucide:zap"
          metric-label="Acceptance"
          metric-value="15-30% for matched products"
          link-to="/step5-upsell2"
          link-text="View Upsell 2 Guide"
        />

        <StepCard
          :step-number="5"
          badge="STEP 5 OF 7"
          title="Downsell 2"
          subtitle="(trial/smaller complement)"
          title-icon="lucide:gift"
          description="Final recovery offer with a smaller version or trial of the complementary product at the lowest price."
          :features="[
            'Final opportunity messaging',
            'Trial or starter size',
            'Absolute best price',
            'Last call-to-action'
          ]"
          metric-icon="lucide:mouse-pointer-click"
          metric-label="Final Recovery"
          metric-value="10-20% take last offer"
          link-to="/step6-downsell2"
          link-text="View Downsell 2 Guide"
        />

        <StepCard
          :step-number="6"
          badge="STEP 6 OF 7"
          title="Thank You Page"
          title-icon="lucide:check-circle"
          description="Order confirmation page that sets proper expectations and reduces refund rates through clear communication."
          :features="[
            'Order confirmation',
            'Email notification notice',
            'Delivery timeline',
            'Support information'
          ]"
          metric-icon="lucide:shield-check"
          metric-label="Refund Reduction"
          metric-value="15-25% with proper page"
          link-to="/step7-thankyou"
          link-text="View Thank You Guide"
        />

        <StepCard
          :step-number="7"
          badge="STEP 7 OF 7 - REFERENCE"
          title="DTC/Checkout Page"
          title-icon="lucide:shopping-cart"
          description="Direct-to-checkout page displaying all package options with pricing psychology and optimized conversion elements."
          :features="[
            '3-tier pricing structure',
            'Package positioning',
            'Order form optimization',
            'Trust badges'
          ]"
          metric-icon="lucide:trophy"
          metric-label="Best Value"
          metric-value="Sells 50-60% of the time"
          link-to="/step2-dtc"
          link-text="View Checkout Guide"
        />

        <StepCard
          number-icon="lucide:alert-triangle"
          badge="CRITICAL - LEGAL"
          title="Footer Requirements"
          title-icon="lucide:lock"
          description="Essential legal compliance elements required on EVERY page to avoid account suspension and legal issues."
          :features="[
            'Privacy Policy link',
            'Terms & Conditions',
            'Refund Policy',
            'FDA disclaimers'
          ]"
          metric-icon="lucide:alert-triangle"
          metric-label="Warning"
          metric-value="Can result in suspension"
          link-to="/step8-footer"
          link-text="View Footer Requirements"
          custom-class="border-error"
          number-class="bg-error"
          badge-class="bg-error-light text-error"
          metric-class="bg-error-light border-error"
          metric-icon-class="text-error"
          metric-label-class="text-error"
          button-class="bg-error text-white hover:bg-red-700"
        />

        <StepCard
          number-icon="lucide:play-circle"
          badge="VSL DEMO"
          title="Advanced VSL Example"
          title-icon="lucide:film"
          description="See a fully animated VSL page with countdown timers, exit-intent popups, social proof counters, and professional animations."
          :features="[
            'Animated background particles',
            'Countdown timer & scarcity',
            'Exit-intent popup',
            'Sticky CTA bar'
          ]"
          metric-icon="lucide:star"
          metric-label="Advanced"
          metric-value="Professional animations"
          link-to="/example-vsl"
          link-text="View VSL Demo"
          custom-class="border-success"
          number-class="bg-success"
          badge-class="bg-success-light text-success"
          metric-class="bg-success-light border-success"
          metric-icon-class="text-success"
          metric-label-class="text-success"
          button-class="bg-success text-white hover:bg-emerald-700"
        />

        <StepCard
          number-icon="lucide:file-text"
          badge="TSL DEMO"
          title="Text Sales Letter Example"
          title-icon="lucide:newspaper"
          description="Long-form text-based sales page with compelling copy, testimonials, FAQ section, and multiple CTAs throughout."
          :features="[
            'Long-form persuasive copy',
            'Multiple testimonials',
            'FAQ section',
            'Strategic CTA placement'
          ]"
          metric-icon="lucide:book"
          metric-label="Alternative"
          metric-value="Text-based approach"
          link-to="/example-tsl"
          link-text="View TSL Demo"
          custom-class="border-purple-500"
          number-class="bg-purple-600"
          badge-class="bg-purple-100 text-purple-600"
          metric-class="bg-purple-50 border-purple-200"
          metric-icon-class="text-purple-600"
          metric-label-class="text-purple-600"
          button-class="bg-purple-600 text-white hover:bg-purple-700"
        />
      </div>

      <!-- How to Use This Guide -->
      <div v-scroll-animate="'fade-up'" class="bg-white rounded-lg p-8 border border-border hover-subtle">
        <h2 class="text-xl font-semibold mb-6 flex items-center text-navy-900">
          <Icon name="lucide:lightbulb" class="w-5 h-5 mr-3 text-accent icon-hover-rotate" />
          How to Use This Guide
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="flex group">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 rounded-lg bg-accent text-white flex items-center justify-center font-semibold text-sm transition-transform duration-200 group-hover:scale-110">1</div>
            </div>
            <div class="ml-3">
              <strong class="text-navy-900">Study Each Step:</strong>
              <p class="text-charcoal-600 text-sm mt-1">Click through each step to understand the structure, requirements, and best practices.</p>
            </div>
          </div>
          <div class="flex group">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 rounded-lg bg-accent text-white flex items-center justify-center font-semibold text-sm transition-transform duration-200 group-hover:scale-110">2</div>
            </div>
            <div class="ml-3">
              <strong class="text-navy-900">Note the Metrics:</strong>
              <p class="text-charcoal-600 text-sm mt-1">Pay attention to conversion rates and benchmarks to set realistic expectations.</p>
            </div>
          </div>
          <div class="flex group">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 rounded-lg bg-accent text-white flex items-center justify-center font-semibold text-sm transition-transform duration-200 group-hover:scale-110">3</div>
            </div>
            <div class="ml-3">
              <strong class="text-navy-900">Avoid Common Mistakes:</strong>
              <p class="text-charcoal-600 text-sm mt-1">Each page includes a section on mistakes to avoid based on real vendor data.</p>
            </div>
          </div>
          <div class="flex group">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 rounded-lg bg-accent text-white flex items-center justify-center font-semibold text-sm transition-transform duration-200 group-hover:scale-110">4</div>
            </div>
            <div class="ml-3">
              <strong class="text-navy-900">Replace Placeholders:</strong>
              <p class="text-charcoal-600 text-sm mt-1">When building your funnel, replace all [ PLACEHOLDER ] elements with your actual content.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'BuyGoods Vendor Offer Guide - Complete Sales Funnel Structure',
  description: 'Complete step-by-step visual guide to structuring high-converting product offers'
})
</script>
