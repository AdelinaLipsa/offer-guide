<template>
  <div>
    <Navbar :breadcrumbs="['Step 7: Thank You Page']" />
    <Sidebar :current-step="6" />

    <div class="page-content">
      <PageHeader
        badge="STEP 7 OF 8"
        title="Thank You Page"
        subtitle="Set expectations and reduce refunds through clear communication"
        :stats="[
          { icon: 'lucide:trending-down', text: '-15-25% Refunds' },
          { icon: 'lucide:ticket', text: '-40-50% Tickets' },
          { icon: 'lucide:shield-check', text: 'Buyer Confidence' }
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
            <a href="#structure" class="nav-pill text-xs px-3 py-1.5 bg-surface-tertiary rounded-md">Visual Structure</a>
            <a href="#checklist" class="nav-pill text-xs px-3 py-1.5 bg-surface-tertiary rounded-md">Checklist</a>
            <a href="#psychology" class="nav-pill text-xs px-3 py-1.5 bg-surface-tertiary rounded-md">Psychology</a>
            <a href="#critical-info" class="nav-pill text-xs px-3 py-1.5 bg-surface-tertiary rounded-md">Critical Info</a>
            <a href="#best-practices" class="nav-pill text-xs px-3 py-1.5 bg-surface-tertiary rounded-md">Best Practices</a>
            <a href="#mistakes" class="nav-pill text-xs px-3 py-1.5 bg-surface-tertiary rounded-md">Mistakes</a>
            <a href="#metrics" class="nav-pill text-xs px-3 py-1.5 bg-surface-tertiary rounded-md">Metrics</a>
          </div>
        </div>

        <!-- Section 1: What is the Thank You Page? -->
        <ContentCard id="overview">
          <SectionHeader :number="1" title="What is the Thank You Page?" />
          <p class="text-charcoal-600 leading-relaxed mb-4">
            The Thank You page is the FINAL stop in your funnel after all upsells/downsells. This page confirms the order and, most importantly, sets proper expectations for delivery, communication, and results. Done right, this page can reduce your refund rate by 15-25%.
          </p>
          <p class="text-charcoal-600 leading-relaxed mb-6">
            Many vendors overlook this page, but it's critical. Customers who don't know what to expect are more likely to panic, email support repeatedly, or request refunds.
          </p>

          <!-- Key Benefits Grid -->
          <div class="grid md:grid-cols-3 gap-4 mb-6">
            <div class="bg-success-light border border-success/20 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:trending-down" class="w-5 h-5 text-success" />
                <span class="font-semibold text-navy-900">Lower Refunds</span>
              </div>
              <p class="text-sm text-charcoal-600">15-25% reduction in refund requests</p>
            </div>
            <div class="bg-accent-light border border-accent/20 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:ticket" class="w-5 h-5 text-accent" />
                <span class="font-semibold text-navy-900">Fewer Tickets</span>
              </div>
              <p class="text-sm text-charcoal-600">40-50% less "where is my order?" emails</p>
            </div>
            <div class="bg-warning-light border border-warning/20 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:heart" class="w-5 h-5 text-warning" />
                <span class="font-semibold text-navy-900">Happy Customers</span>
              </div>
              <p class="text-sm text-charcoal-600">30% higher satisfaction rating</p>
            </div>
          </div>

          <AlertBox variant="success" title="Critical Purpose">
            This page prevents buyer's remorse, reduces support tickets, and significantly lowers refund rates. Every dollar spent on refunds is pure loss - this page protects your revenue.
          </AlertBox>
        </ContentCard>

        <!-- Section 2: Visual Structure -->
        <ContentCard id="structure">
          <SectionHeader :number="2" title="Visual Structure" />
          <p class="text-charcoal-600 leading-relaxed mb-6">
            Here's how your Thank You page should look:
          </p>

          <!-- Thank You Preview -->
          <div class="bg-surface-tertiary border border-border rounded-lg p-6">
            <h3 class="text-navy-900 font-semibold text-lg text-center mb-6">Thank You Page Layout Preview</h3>

            <!-- Success Icon -->
            <div class="flex justify-center mb-4">
              <div class="w-16 h-16 bg-success rounded-full flex items-center justify-center">
                <Icon name="lucide:check" class="w-8 h-8 text-white" />
              </div>
            </div>

            <!-- Confirmation Headline -->
            <h3 class="text-2xl text-success font-bold text-center mb-2">Order Confirmed!</h3>
            <p class="text-lg text-navy-900 font-semibold text-center mb-2">Thank you for your order!</p>
            <p class="text-charcoal-600 text-center mb-6">
              Your order has been successfully processed and you'll receive a confirmation email shortly.
            </p>

            <!-- Order Summary Box -->
            <div class="bg-white border-2 border-success rounded-lg p-5 mb-6 max-w-lg mx-auto">
              <h4 class="text-navy-900 font-bold mb-4 text-center">Order Summary</h4>

              <div class="bg-accent-light rounded-lg p-3 text-center mb-4">
                <span class="text-charcoal-600">Order #:</span>
                <span class="text-accent font-bold ml-2">BG-123456789</span>
              </div>

              <div class="space-y-3 text-sm">
                <div class="pb-3 border-b border-border">
                  <strong class="text-navy-900">Items Ordered:</strong>
                  <div class="text-charcoal-600 mt-1">3 Bottles of [Product Name]</div>
                  <div class="text-charcoal-600">1 Bottle of [Complementary Product]</div>
                </div>
                <div class="pb-3 border-b border-border flex justify-between">
                  <strong class="text-navy-900">Total Paid:</strong>
                  <span class="text-success font-bold">$166</span>
                </div>
                <div>
                  <strong class="text-navy-900">Shipping To:</strong>
                  <div class="text-charcoal-600 mt-1">John Doe<br>123 Main Street, City, ST 12345</div>
                </div>
              </div>
            </div>

            <!-- Info Grid -->
            <div class="grid grid-cols-3 gap-3 mb-6">
              <div class="bg-white border border-border rounded-lg p-4 text-center">
                <Icon name="lucide:mail" class="w-6 h-6 text-accent mx-auto mb-2" />
                <div class="text-xs font-semibold text-navy-900">Check Email</div>
                <div class="text-xs text-charcoal-500">Confirmation sent</div>
              </div>
              <div class="bg-white border border-border rounded-lg p-4 text-center">
                <Icon name="lucide:package" class="w-6 h-6 text-accent mx-auto mb-2" />
                <div class="text-xs font-semibold text-navy-900">Processing</div>
                <div class="text-xs text-charcoal-500">1-2 business days</div>
              </div>
              <div class="bg-white border border-border rounded-lg p-4 text-center">
                <Icon name="lucide:truck" class="w-6 h-6 text-accent mx-auto mb-2" />
                <div class="text-xs font-semibold text-navy-900">Delivery</div>
                <div class="text-xs text-charcoal-500">7-10 business days</div>
              </div>
            </div>

            <!-- Timeline -->
            <div class="bg-white border border-border rounded-lg p-5 mb-6">
              <h4 class="text-navy-900 font-bold mb-4 text-center">What Happens Next</h4>
              <div class="space-y-3">
                <div class="flex gap-3 items-start">
                  <div class="w-7 h-7 bg-accent rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">1</div>
                  <div>
                    <div class="font-semibold text-navy-900 text-sm">Confirmation Email (5 mins)</div>
                    <div class="text-xs text-charcoal-600">Check inbox for order details</div>
                  </div>
                </div>
                <div class="flex gap-3 items-start">
                  <div class="w-7 h-7 bg-accent rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">2</div>
                  <div>
                    <div class="font-semibold text-navy-900 text-sm">Order Processing (1-2 days)</div>
                    <div class="text-xs text-charcoal-600">Being prepared and packaged</div>
                  </div>
                </div>
                <div class="flex gap-3 items-start">
                  <div class="w-7 h-7 bg-accent rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">3</div>
                  <div>
                    <div class="font-semibold text-navy-900 text-sm">Shipping Notification (Day 2-3)</div>
                    <div class="text-xs text-charcoal-600">Tracking info via email</div>
                  </div>
                </div>
                <div class="flex gap-3 items-start">
                  <div class="w-7 h-7 bg-success rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">4</div>
                  <div>
                    <div class="font-semibold text-navy-900 text-sm">Delivery (7-10 days)</div>
                    <div class="text-xs text-charcoal-600">Package arrives at your door</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Guarantee & Support -->
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-accent-light border border-accent/20 rounded-lg p-4">
                <div class="flex items-center gap-2 mb-2">
                  <Icon name="lucide:shield-check" class="w-5 h-5 text-accent" />
                  <span class="font-semibold text-navy-900">60-Day Guarantee</span>
                </div>
                <p class="text-xs text-charcoal-600">Full refund if not satisfied - no questions asked.</p>
              </div>
              <div class="bg-surface-tertiary border border-border rounded-lg p-4">
                <div class="flex items-center gap-2 mb-2">
                  <Icon name="lucide:headphones" class="w-5 h-5 text-accent" />
                  <span class="font-semibold text-navy-900">Need Help?</span>
                </div>
                <p class="text-xs text-charcoal-600">support@yourcompany.com<br>1-800-XXX-XXXX</p>
              </div>
            </div>
          </div>
        </ContentCard>

        <!-- Section 3: Required Elements Checklist -->
        <ContentCard id="checklist">
          <SectionHeader :number="3" title="Required Elements Checklist" />
          <p class="text-charcoal-600 leading-relaxed mb-6">
            Every Thank You page must include these essential elements:
          </p>

          <!-- Icon Cards Grid for Required Elements -->
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-surface-tertiary border border-border rounded-lg p-4 text-center">
              <div class="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="lucide:check-circle" class="w-5 h-5 text-success" />
              </div>
              <strong class="text-navy-900 text-sm block mb-1">Order Confirmation</strong>
              <p class="text-xs text-charcoal-600">Clear 'Order Confirmed' headline</p>
            </div>

            <div class="bg-surface-tertiary border border-border rounded-lg p-4 text-center">
              <div class="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="lucide:hash" class="w-5 h-5 text-accent" />
              </div>
              <strong class="text-navy-900 text-sm block mb-1">Order Number</strong>
              <p class="text-xs text-charcoal-600">Unique identifier for reference</p>
            </div>

            <div class="bg-surface-tertiary border border-border rounded-lg p-4 text-center">
              <div class="w-10 h-10 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="lucide:mail-check" class="w-5 h-5 text-warning" />
              </div>
              <strong class="text-navy-900 text-sm block mb-1">Email Notice</strong>
              <p class="text-xs text-charcoal-600">Tell them to check email</p>
            </div>

            <div class="bg-surface-tertiary border border-border rounded-lg p-4 text-center">
              <div class="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="lucide:receipt" class="w-5 h-5 text-accent" />
              </div>
              <strong class="text-navy-900 text-sm block mb-1">Order Summary</strong>
              <p class="text-xs text-charcoal-600">Items purchased and total paid</p>
            </div>

            <div class="bg-surface-tertiary border border-border rounded-lg p-4 text-center">
              <div class="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="lucide:map-pin" class="w-5 h-5 text-success" />
              </div>
              <strong class="text-navy-900 text-sm block mb-1">Shipping Address</strong>
              <p class="text-xs text-charcoal-600">Show where it's being sent</p>
            </div>

            <div class="bg-surface-tertiary border border-border rounded-lg p-4 text-center">
              <div class="w-10 h-10 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="lucide:clock" class="w-5 h-5 text-warning" />
              </div>
              <strong class="text-navy-900 text-sm block mb-1">Processing Timeline</strong>
              <p class="text-xs text-charcoal-600">When order will ship</p>
            </div>

            <div class="bg-surface-tertiary border border-border rounded-lg p-4 text-center">
              <div class="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="lucide:truck" class="w-5 h-5 text-accent" />
              </div>
              <strong class="text-navy-900 text-sm block mb-1">Delivery Timeline</strong>
              <p class="text-xs text-charcoal-600">When to expect delivery</p>
            </div>

            <div class="bg-surface-tertiary border border-border rounded-lg p-4 text-center">
              <div class="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="lucide:list-ordered" class="w-5 h-5 text-success" />
              </div>
              <strong class="text-navy-900 text-sm block mb-1">What Happens Next</strong>
              <p class="text-xs text-charcoal-600">Step-by-step timeline</p>
            </div>

            <div class="bg-surface-tertiary border border-border rounded-lg p-4 text-center">
              <div class="w-10 h-10 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="lucide:navigation" class="w-5 h-5 text-warning" />
              </div>
              <strong class="text-navy-900 text-sm block mb-1">Tracking Info</strong>
              <p class="text-xs text-charcoal-600">When/how they'll receive tracking</p>
            </div>

            <div class="bg-surface-tertiary border border-border rounded-lg p-4 text-center">
              <div class="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="lucide:shield-check" class="w-5 h-5 text-success" />
              </div>
              <strong class="text-navy-900 text-sm block mb-1">Money-Back Guarantee</strong>
              <p class="text-xs text-charcoal-600">Remind them of guarantee</p>
            </div>

            <div class="bg-surface-tertiary border border-border rounded-lg p-4 text-center">
              <div class="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="lucide:headphones" class="w-5 h-5 text-accent" />
              </div>
              <strong class="text-navy-900 text-sm block mb-1">Support Contact Info</strong>
              <p class="text-xs text-charcoal-600">Email, phone, and hours</p>
            </div>

            <div class="bg-surface-tertiary border border-border rounded-lg p-4 text-center">
              <div class="w-10 h-10 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="lucide:credit-card" class="w-5 h-5 text-warning" />
              </div>
              <strong class="text-navy-900 text-sm block mb-1">Billing Descriptor</strong>
              <p class="text-xs text-charcoal-600">What appears on credit card</p>
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
                <p class="text-charcoal-600 text-sm mt-1">Tell them to check email 3-4 times on this page - customers panic if they don't see confirmation email immediately.</p>
              </div>
            </div>
          </div>
        </ContentCard>

        <!-- Section 4: Why This Reduces Refunds -->
        <ContentCard id="psychology">
          <SectionHeader :number="4" title="Why This Page Reduces Refunds" />
          <p class="text-charcoal-600 leading-relaxed mb-6">
            Immediately after purchasing, customers experience anxiety. This page addresses each concern:
          </p>

          <div class="overflow-x-auto mb-6">
            <table class="w-full text-sm">
              <thead>
                <tr class="bg-surface-tertiary">
                  <th class="text-left p-3 font-semibold text-navy-900 border-b border-border">Customer Concern</th>
                  <th class="text-left p-3 font-semibold text-navy-900 border-b border-border">How Page Addresses It</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-border">
                  <td class="p-3 text-charcoal-600">Did my order go through?</td>
                  <td class="p-3 text-charcoal-600">Order confirmation, number, email notice</td>
                </tr>
                <tr class="border-b border-border">
                  <td class="p-3 text-charcoal-600">When will I get it?</td>
                  <td class="p-3 text-charcoal-600">Clear timeline: processing + shipping + delivery</td>
                </tr>
                <tr class="border-b border-border">
                  <td class="p-3 text-charcoal-600">What if it doesn't work?</td>
                  <td class="p-3 text-charcoal-600">Prominent money-back guarantee reminder</td>
                </tr>
                <tr class="border-b border-border">
                  <td class="p-3 text-charcoal-600">Who do I contact?</td>
                  <td class="p-3 text-charcoal-600">Clear support contact information</td>
                </tr>
                <tr>
                  <td class="p-3 text-charcoal-600">Did I make right choice?</td>
                  <td class="p-3 text-charcoal-600">Positive reinforcement and next steps</td>
                </tr>
              </tbody>
            </table>
          </div>

          <AlertBox variant="info" title="Refund Prevention">
            30-40% of refund requests come from customers who "never received" their order or "didn't know what to expect." This page eliminates that confusion.
          </AlertBox>
        </ContentCard>

        <!-- Section 5: Critical Information to Include -->
        <ContentCard id="critical-info">
          <SectionHeader :number="5" title="Critical Information to Include" />

          <h4 class="font-semibold text-navy-900 mb-4">Delivery Timeline (Most Important)</h4>

          <!-- Numbered Steps for Delivery Timeline -->
          <div class="grid md:grid-cols-2 gap-3 mb-6">
            <div class="flex items-start gap-3 p-3 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
              <div>
                <strong class="text-navy-900 text-sm">Order Processing</strong>
                <p class="text-xs text-charcoal-600">"Ships within 1-2 business days"</p>
              </div>
            </div>
            <div class="flex items-start gap-3 p-3 bg-surface-tertiary rounded-lg border-l-4 border-accent">
              <span class="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
              <div>
                <strong class="text-navy-900 text-sm">Shipping Time</strong>
                <p class="text-xs text-charcoal-600">"5-7 business days for delivery"</p>
              </div>
            </div>
            <div class="flex items-start gap-3 p-3 bg-surface-tertiary rounded-lg border-l-4 border-success">
              <span class="w-6 h-6 bg-success text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
              <div>
                <strong class="text-navy-900 text-sm">Total Timeline</strong>
                <p class="text-xs text-charcoal-600">"Expect delivery in 7-10 business days"</p>
              </div>
            </div>
            <div class="flex items-start gap-3 p-3 bg-surface-tertiary rounded-lg border-l-4 border-warning">
              <span class="w-6 h-6 bg-warning text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
              <div>
                <strong class="text-navy-900 text-sm">Tracking Info</strong>
                <p class="text-xs text-charcoal-600">"Tracking within 24-48 hours of shipment"</p>
              </div>
            </div>
          </div>

          <AlertBox variant="warning" title="Under-Promise, Over-Deliver">
            If you say "3-5 days" and it takes 7, you'll get refund requests. Say "7-10 days" and deliver in 7, and customers are happy.
          </AlertBox>

          <h4 class="font-semibold text-navy-900 mb-4 mt-6">Billing Descriptor</h4>
          <p class="text-charcoal-600 leading-relaxed mb-4">
            Tell customers what will appear on their credit card statement:
          </p>
          <div class="bg-accent-light border border-accent/20 rounded-lg p-4">
            <p class="text-charcoal-600 text-sm italic">
              "The charge on your credit card statement will appear as: CLKBANK*COM or similar - this is your [Product Name] purchase."
            </p>
          </div>
        </ContentCard>

        <!-- Section 6: Best Practices -->
        <ContentCard id="best-practices">
          <SectionHeader :number="6" title="Best Practices" />

          <!-- Do This Panel -->
          <div class="bg-success/5 rounded-lg p-5 border border-success/20">
            <div class="flex items-center gap-2 mb-4 pb-3 border-b border-success/20">
              <div class="w-8 h-8 bg-success rounded-lg flex items-center justify-center">
                <Icon name="lucide:thumbs-up" class="w-4 h-4 text-white" />
              </div>
              <h4 class="font-bold text-navy-900 text-lg">Do This</h4>
            </div>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="flex items-start gap-3">
                <Icon name="lucide:target" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <div>
                  <p class="font-medium text-navy-900">Be Specific</p>
                  <p class="text-sm text-charcoal-600">Exact timelines, not vague "soon"</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <Icon name="lucide:heart-handshake" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <div>
                  <p class="font-medium text-navy-900">Reassure Immediately</p>
                  <p class="text-sm text-charcoal-600">Confirmation within first few lines</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <Icon name="lucide:mail" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <div>
                  <p class="font-medium text-navy-900">Email Emphasis</p>
                  <p class="text-sm text-charcoal-600">Tell them 3-4 times to check email</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <Icon name="lucide:git-branch" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <div>
                  <p class="font-medium text-navy-900">Visual Timeline</p>
                  <p class="text-sm text-charcoal-600">Show step-by-step what happens next</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <Icon name="lucide:file-text" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <div>
                  <p class="font-medium text-navy-900">Show Order Details</p>
                  <p class="text-sm text-charcoal-600">Let them verify everything is correct</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <Icon name="lucide:shield-check" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <div>
                  <p class="font-medium text-navy-900">Prominent Guarantee</p>
                  <p class="text-sm text-charcoal-600">Reduce buyer's remorse</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <Icon name="lucide:headphones" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <div>
                  <p class="font-medium text-navy-900">Easy Support Access</p>
                  <p class="text-sm text-charcoal-600">Simple to contact with questions</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <Icon name="lucide:smile" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <div>
                  <p class="font-medium text-navy-900">Positive Tone</p>
                  <p class="text-sm text-charcoal-600">Celebrate their purchase</p>
                </div>
              </div>
            </div>
          </div>
        </ContentCard>

        <!-- Section 7: Common Mistakes to Avoid -->
        <ContentCard id="mistakes">
          <SectionHeader :number="7" title="Common Mistakes to Avoid" />

          <AlertBox variant="warning" title="Warning">
            These mistakes lead to higher refund rates and support tickets.
          </AlertBox>

          <div class="mt-6 grid md:grid-cols-2 gap-4">
            <div class="bg-error/5 border border-error/20 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:x" class="w-4 h-4 text-error" />
                <strong class="text-navy-900">Vague Timelines</strong>
              </div>
              <p class="text-sm text-charcoal-600">"Ships soon" creates anxiety</p>
            </div>

            <div class="bg-error/5 border border-error/20 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:x" class="w-4 h-4 text-error" />
                <strong class="text-navy-900">No Order Number</strong>
              </div>
              <p class="text-sm text-charcoal-600">Customers need reference for support</p>
            </div>

            <div class="bg-error/5 border border-error/20 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:x" class="w-4 h-4 text-error" />
                <strong class="text-navy-900">Missing Email Notice</strong>
              </div>
              <p class="text-sm text-charcoal-600">Customers panic without confirmation</p>
            </div>

            <div class="bg-error/5 border border-error/20 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:x" class="w-4 h-4 text-error" />
                <strong class="text-navy-900">Missing Contact Info</strong>
              </div>
              <p class="text-sm text-charcoal-600">Frustrated customers refund instead</p>
            </div>

            <div class="bg-error/5 border border-error/20 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:x" class="w-4 h-4 text-error" />
                <strong class="text-navy-900">No Guarantee Reminder</strong>
              </div>
              <p class="text-sm text-charcoal-600">Buyer's remorse increases</p>
            </div>

            <div class="bg-error/5 border border-error/20 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:x" class="w-4 h-4 text-error" />
                <strong class="text-navy-900">Overpromising Delivery</strong>
              </div>
              <p class="text-sm text-charcoal-600">Missing dates triggers refunds</p>
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
                <Icon name="lucide:trending-down" class="w-5 h-5 text-success" />
                <span class="text-xs bg-success/10 text-success px-2 py-0.5 rounded font-medium">-15-25%</span>
              </div>
              <strong class="text-navy-900 block mb-1">Refund Rate Reduction</strong>
              <p class="text-charcoal-600 text-sm">vs. basic confirmation pages</p>
            </div>

            <div class="bg-surface-tertiary rounded-lg p-4 border border-border">
              <div class="flex items-center justify-between mb-3">
                <Icon name="lucide:ticket" class="w-5 h-5 text-accent" />
                <span class="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded font-medium">-40-50%</span>
              </div>
              <strong class="text-navy-900 block mb-1">Support Ticket Reduction</strong>
              <p class="text-charcoal-600 text-sm">"Where is my order?" tickets</p>
            </div>

            <div class="bg-surface-tertiary rounded-lg p-4 border border-border">
              <div class="flex items-center justify-between mb-3">
                <Icon name="lucide:shield-check" class="w-5 h-5 text-success" />
                <span class="text-xs bg-success/10 text-success px-2 py-0.5 rounded font-medium">-20-30%</span>
              </div>
              <strong class="text-navy-900 block mb-1">Chargeback Prevention</strong>
              <p class="text-charcoal-600 text-sm">Billing descriptor notice</p>
            </div>

            <div class="bg-surface-tertiary rounded-lg p-4 border border-border">
              <div class="flex items-center justify-between mb-3">
                <Icon name="lucide:star" class="w-5 h-5 text-warning" />
                <span class="text-xs bg-warning/10 text-warning px-2 py-0.5 rounded font-medium">+30%</span>
              </div>
              <strong class="text-navy-900 block mb-1">Customer Satisfaction</strong>
              <p class="text-charcoal-600 text-sm">When expectations are set</p>
            </div>

            <div class="bg-surface-tertiary rounded-lg p-4 border border-border">
              <div class="flex items-center justify-between mb-3">
                <Icon name="lucide:coins" class="w-5 h-5 text-success" />
                <span class="text-xs bg-success/10 text-success px-2 py-0.5 rounded font-medium">$2,000+</span>
              </div>
              <strong class="text-navy-900 block mb-1">Revenue Protection</strong>
              <p class="text-charcoal-600 text-sm">8% to 6% refunds on $100k</p>
            </div>

            <div class="bg-surface-tertiary rounded-lg p-4 border border-border">
              <div class="flex items-center justify-between mb-3">
                <Icon name="lucide:mail" class="w-5 h-5 text-accent" />
                <span class="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded font-medium">+25%</span>
              </div>
              <strong class="text-navy-900 block mb-1">Email Open Rates</strong>
              <p class="text-charcoal-600 text-sm">Multiple "check email" mentions</p>
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
              <div class="text-slate-400 mb-2">Refund Reduction</div>
              <div class="font-semibold">15-25%</div>
            </div>
            <div>
              <div class="text-slate-400 mb-2">Ticket Reduction</div>
              <div class="font-semibold">40-50%</div>
            </div>
            <div>
              <div class="text-slate-400 mb-2">Processing Time</div>
              <div class="font-semibold">1-2 business days</div>
            </div>
            <div>
              <div class="text-slate-400 mb-2">Delivery Time</div>
              <div class="font-semibold">7-10 business days</div>
            </div>
            <div>
              <div class="text-slate-400 mb-2">Key Element</div>
              <div class="font-semibold">Timeline + Support</div>
            </div>
            <div>
              <div class="text-slate-400 mb-2">Email Mentions</div>
              <div class="font-semibold">3-4 times</div>
            </div>
          </div>
        </div>

        <!-- Navigation -->
        <NavigationButtons
          prev-to="/step6-downsell2"
          prev-text="Back: Downsell 2"
          next-to="/step8-footer"
          next-text="Next: Footer & Legal"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Step 7: Thank You Page - BuyGoods Vendor Guide',
  description: 'Learn how to create an effective thank you page that reduces refunds by 15-25% through clear communication.'
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

html {
  scroll-behavior: smooth;
}
</style>
