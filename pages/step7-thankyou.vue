<template>
  <div>
    <Navbar :breadcrumbs="['Step 6: Thank You Page']" />
    <Sidebar :current-step="6" />

    <div class="page-content">
      <div class="header">
        <div class="step-badge">STEP 6 OF 7</div>
        <h1>Thank You Page</h1>
        <p>Set expectations and reduce refunds through clear communication</p>
      </div>

      <div class="container mx-auto px-4 py-12" style="max-width: 90%;">
      <!-- Section 1: What is the Thank You Page? -->
      <div class="bg-white border-2 border-gray-200 rounded-xl p-8 mb-8 shadow-sm">
        <h2 class="flex items-center text-3xl font-bold mb-5 text-gray-900">
          <span class="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold rounded-full mr-4 text-lg">
            1
          </span>
          What is the Thank You Page?
        </h2>
        <p class="text-gray-600 text-lg mb-4 leading-relaxed">
          The Thank You page is the FINAL stop in your funnel after all upsells/downsells. This page confirms the order and, most importantly, sets proper expectations for delivery, communication, and results. Done right, this page can reduce your refund rate by 15-25%.
        </p>
        <p class="text-gray-600 text-lg mb-6 leading-relaxed">
          Many vendors overlook this page, but it's critical. Customers who don't know what to expect are more likely to panic, email support repeatedly, or request refunds.
        </p>

        <div class="border-l-4 border-green-500 bg-green-50 p-5 rounded-lg">
          <strong class="text-gray-900 block mb-2 text-lg">Critical Purpose:</strong>
          <p class="text-gray-700">
            This page prevents buyer's remorse, reduces support tickets, and significantly lowers refund rates. Every dollar spent on refunds is pure loss - this page protects your revenue.
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
          Here's how your Thank You page should look:
        </p>

        <!-- Thank You Preview -->
        <div class="bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg p-10 my-6 text-center">
          <!-- Success Icon -->
          <div class="inline-flex items-center justify-center w-20 h-20 bg-green-500 text-white rounded-full text-5xl mb-6">
            ✓
          </div>

          <h3 class="text-4xl text-green-500 font-bold mb-3">
            Order Confirmed! 🎉
          </h3>

          <p class="text-2xl text-gray-900 font-semibold mb-2">
            Thank you for your order!
          </p>

          <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Your order has been successfully processed and you'll receive a confirmation email shortly at the email address provided.
          </p>

          <!-- Order Summary Box -->
          <div class="bg-white border-2 border-green-500 rounded-xl p-7 my-6 max-w-2xl mx-auto">
            <h4 class="text-gray-900 font-bold mb-4 text-lg">Order Summary</h4>

            <div class="bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg px-4 py-4 text-2xl font-bold text-blue-600 mb-5">
              Order #: <span class="text-blue-600">BG-123456789</span>
            </div>

            <div class="text-left space-y-5">
              <div class="pb-4 border-b border-gray-200">
                <strong class="text-gray-900">Items Ordered:</strong>
                <div class="text-gray-600 mt-2">• 3 Bottles of [Product Name]</div>
                <div class="text-gray-600">• 1 Bottle of [Complementary Product]</div>
              </div>
              <div class="pb-4 border-b border-gray-200">
                <strong class="text-gray-900">Total Paid:</strong> <span class="text-green-500 text-xl font-bold ml-2">$166</span>
              </div>
              <div>
                <strong class="text-gray-900">Shipping To:</strong>
                <div class="text-gray-600 mt-2">John Doe</div>
                <div class="text-gray-600">123 Main Street, City, ST 12345</div>
              </div>
            </div>
          </div>

          <!-- Info Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-5 my-8">
            <div class="bg-white border-2 border-gray-200 rounded-xl p-6 text-center">
              <div class="text-4xl mb-3">📧</div>
              <h4 class="text-gray-900 font-bold mb-2">Check Your Email</h4>
              <p class="text-sm text-gray-600">
                Confirmation sent to:<br>
                <strong class="text-gray-900">john@example.com</strong>
              </p>
            </div>
            <div class="bg-white border-2 border-gray-200 rounded-xl p-6 text-center">
              <div class="text-4xl mb-3">📦</div>
              <h4 class="text-gray-900 font-bold mb-2">Processing Time</h4>
              <p class="text-sm text-gray-600">
                Orders ship within<br>
                <strong class="text-gray-900">1-2 business days</strong>
              </p>
            </div>
            <div class="bg-white border-2 border-gray-200 rounded-xl p-6 text-center">
              <div class="text-4xl mb-3">🚚</div>
              <h4 class="text-gray-900 font-bold mb-2">Delivery Time</h4>
              <p class="text-sm text-gray-600">
                Expect delivery in<br>
                <strong class="text-gray-900">7-10 business days</strong>
              </p>
            </div>
          </div>

          <!-- Timeline -->
          <div class="bg-white border-2 border-gray-200 rounded-xl p-7 my-8">
            <h4 class="text-gray-900 font-bold mb-6 text-center text-lg">What Happens Next</h4>

            <div class="space-y-4">
              <div class="flex gap-5 pb-4 border-b border-gray-200">
                <div class="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold rounded-full flex-shrink-0">
                  1
                </div>
                <div class="text-left">
                  <h4 class="text-gray-900 font-bold">Order Confirmation Email (Within 5 minutes)</h4>
                  <p class="text-gray-600 text-sm mt-1">Check your inbox for order details and receipt</p>
                </div>
              </div>

              <div class="flex gap-5 pb-4 border-b border-gray-200">
                <div class="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold rounded-full flex-shrink-0">
                  2
                </div>
                <div class="text-left">
                  <h4 class="text-gray-900 font-bold">Order Processing (1-2 business days)</h4>
                  <p class="text-gray-600 text-sm mt-1">Your order is being prepared and packaged</p>
                </div>
              </div>

              <div class="flex gap-5 pb-4 border-b border-gray-200">
                <div class="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold rounded-full flex-shrink-0">
                  3
                </div>
                <div class="text-left">
                  <h4 class="text-gray-900 font-bold">Shipping Notification (Day 2-3)</h4>
                  <p class="text-gray-600 text-sm mt-1">You'll receive tracking information via email</p>
                </div>
              </div>

              <div class="flex gap-5">
                <div class="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold rounded-full flex-shrink-0">
                  4
                </div>
                <div class="text-left">
                  <h4 class="text-gray-900 font-bold">Delivery (7-10 business days)</h4>
                  <p class="text-gray-600 text-sm mt-1">Your package arrives at your doorstep</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Money-Back Guarantee -->
          <div class="bg-blue-50 border-2 border-blue-600 rounded-xl p-6 my-8">
            <h4 class="text-blue-600 font-bold mb-3">💯 60-Day Money-Back Guarantee</h4>
            <p class="text-gray-700">
              Try [Product Name] risk-free for 60 days. If you're not completely satisfied, contact our support team for a full refund - no questions asked.
            </p>
          </div>

          <!-- Support Information -->
          <div class="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 my-8">
            <h4 class="text-gray-900 font-bold mb-3">📞 Need Help?</h4>
            <p class="text-gray-600 mb-3">
              Our support team is here to help with any questions.
            </p>
            <div class="text-gray-900">
              <strong>Email:</strong> support@yourcompany.com<br>
              <strong>Phone:</strong> 1-800-XXX-XXXX<br>
              <strong>Hours:</strong> Mon-Fri, 9AM-5PM EST
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

        <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-green-500 font-bold">✓</span>
            <strong>Order Confirmation Message:</strong> Clear "Order Confirmed" or "Thank You" headline
          </li>
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-green-500 font-bold">✓</span>
            <strong>Order Number:</strong> Unique identifier for customer reference
          </li>
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-green-500 font-bold">✓</span>
            <strong>Email Confirmation Notice:</strong> Tell them to check email (prevents panic)
          </li>
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-green-500 font-bold">✓</span>
            <strong>Order Summary:</strong> List what they purchased and total paid
          </li>
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-green-500 font-bold">✓</span>
            <strong>Shipping Address:</strong> Show where it's being sent for verification
          </li>
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-green-500 font-bold">✓</span>
            <strong>Processing Timeline:</strong> When order will ship (1-2 business days)
          </li>
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-green-500 font-bold">✓</span>
            <strong>Delivery Timeline:</strong> When to expect delivery (7-10 business days)
          </li>
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-green-500 font-bold">✓</span>
            <strong>What Happens Next:</strong> Step-by-step timeline of the process
          </li>
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-green-500 font-bold">✓</span>
            <strong>Tracking Information:</strong> When/how they'll receive tracking
          </li>
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-green-500 font-bold">✓</span>
            <strong>Money-Back Guarantee:</strong> Remind them of the guarantee
          </li>
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-green-500 font-bold">✓</span>
            <strong>Support Contact Info:</strong> Email, phone, and hours
          </li>
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-green-500 font-bold">✓</span>
            <strong>Billing Descriptor:</strong> What will appear on their credit card statement
          </li>
        </ul>
      </div>

      <!-- Section 4: Why This Page Reduces Refunds -->
      <div class="bg-white border-2 border-gray-200 rounded-xl p-8 mb-8 shadow-sm">
        <h2 class="flex items-center text-3xl font-bold mb-5 text-gray-900">
          <span class="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold rounded-full mr-4 text-lg">
            4
          </span>
          Why This Page Reduces Refunds
        </h2>

        <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-6">Psychology of Buyer's Remorse</h3>
        <p class="text-gray-600 text-lg mb-4 leading-relaxed">
          Immediately after purchasing, customers often experience:
        </p>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-green-500 font-bold">✓</span>
            Uncertainty about whether they made the right decision
          </li>
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-green-500 font-bold">✓</span>
            Anxiety about when product will arrive
          </li>
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-green-500 font-bold">✓</span>
            Confusion about what happens next
          </li>
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-green-500 font-bold">✓</span>
            Worry about whether the order actually went through
          </li>
        </ul>

        <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-6">How This Page Addresses Each Concern</h3>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse">
            <thead>
              <tr class="bg-gray-50">
                <th class="border border-gray-200 p-4 text-left font-bold text-gray-900">Customer Concern</th>
                <th class="border border-gray-200 p-4 text-left font-bold text-gray-900">How Thank You Page Addresses It</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-200">
                <td class="border border-gray-200 p-4 text-gray-600">Did my order go through?</td>
                <td class="border border-gray-200 p-4 text-gray-600">Order confirmation, order number, and email notice</td>
              </tr>
              <tr class="border-b border-gray-200">
                <td class="border border-gray-200 p-4 text-gray-600">When will I get it?</td>
                <td class="border border-gray-200 p-4 text-gray-600">Clear timeline: processing + shipping + delivery dates</td>
              </tr>
              <tr class="border-b border-gray-200">
                <td class="border border-gray-200 p-4 text-gray-600">What if it doesn't work?</td>
                <td class="border border-gray-200 p-4 text-gray-600">Prominent money-back guarantee reminder</td>
              </tr>
              <tr class="border-b border-gray-200">
                <td class="border border-gray-200 p-4 text-gray-600">Who do I contact with questions?</td>
                <td class="border border-gray-200 p-4 text-gray-600">Clear support contact information</td>
              </tr>
              <tr>
                <td class="border border-gray-200 p-4 text-gray-600">Did I make the right choice?</td>
                <td class="border border-gray-200 p-4 text-gray-600">Positive reinforcement and next steps</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="border-l-4 border-blue-600 bg-blue-50 p-5 rounded-lg mt-6">
          <strong class="text-gray-900 block mb-2 text-lg">Refund Prevention:</strong>
          <p class="text-gray-700">
            Studies show that 30-40% of refund requests come from customers who "never received" their order or "didn't know what to expect." This page eliminates that confusion.
          </p>
        </div>
      </div>

      <!-- Section 5: Critical Information to Include -->
      <div class="bg-white border-2 border-gray-200 rounded-xl p-8 mb-8 shadow-sm">
        <h2 class="flex items-center text-3xl font-bold mb-5 text-gray-900">
          <span class="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold rounded-full mr-4 text-lg">
            5
          </span>
          Critical Information to Include
        </h2>

        <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-6">Delivery Timeline (Most Important)</h3>
        <p class="text-gray-600 text-lg mb-4 leading-relaxed">
          Be SPECIFIC about delivery timeframes:
        </p>
        <ul class="space-y-2 mb-6">
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-green-500 font-bold">✓</span>
            <strong>Order Processing:</strong> "Ships within 1-2 business days"
          </li>
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-green-500 font-bold">✓</span>
            <strong>Shipping Time:</strong> "5-7 business days for delivery"
          </li>
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-green-500 font-bold">✓</span>
            <strong>Total Timeline:</strong> "Expect delivery in 7-10 business days"
          </li>
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-green-500 font-bold">✓</span>
            <strong>Tracking Info:</strong> "You'll receive tracking within 24-48 hours of shipment"
          </li>
        </ul>

        <div class="border-l-4 border-red-500 bg-red-50 p-5 rounded-lg mb-6">
          <strong class="text-gray-900 block mb-2 text-lg">Warning:</strong>
          <p class="text-gray-700">
            Under-promising is better than over-promising. If you say "3-5 days" and it takes 7, you'll get refund requests. Say "7-10 days" and deliver in 7, and customers are happy.
          </p>
        </div>

        <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-6">Billing Descriptor</h3>
        <p class="text-gray-600 text-lg mb-4 leading-relaxed">
          Tell customers what will appear on their credit card statement:
        </p>
        <div class="border-l-4 border-blue-600 bg-blue-50 p-5 rounded-lg">
          <strong class="text-gray-900 block mb-2 text-lg">Include this:</strong>
          <p class="text-gray-700">
            "The charge on your credit card statement will appear as: CLKBANK*COM or similar - this is your [Product Name] purchase."
          </p>
        </div>
      </div>

      <!-- Section 6: Best Practices -->
      <div class="bg-white border-2 border-gray-200 rounded-xl p-8 mb-8 shadow-sm">
        <h2 class="flex items-center text-3xl font-bold mb-5 text-gray-900">
          <span class="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold rounded-full mr-4 text-lg">
            6
          </span>
          Best Practices
        </h2>

        <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-green-500 font-bold">✓</span>
            <strong>Be Specific:</strong> Exact timelines, not vague "soon"
          </li>
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-green-500 font-bold">✓</span>
            <strong>Reassure Immediately:</strong> Confirmation within first few lines
          </li>
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-green-500 font-bold">✓</span>
            <strong>Email Emphasis:</strong> Tell them 3-4 times to check email
          </li>
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-green-500 font-bold">✓</span>
            <strong>Visual Timeline:</strong> Show step-by-step what happens next
          </li>
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-green-500 font-bold">✓</span>
            <strong>Show Order Details:</strong> Let them verify everything is correct
          </li>
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-green-500 font-bold">✓</span>
            <strong>Prominent Guarantee:</strong> Reduce buyer's remorse by emphasizing risk-free
          </li>
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-green-500 font-bold">✓</span>
            <strong>Easy Support Access:</strong> Make it simple to contact you with questions
          </li>
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-green-500 font-bold">✓</span>
            <strong>Positive Tone:</strong> Celebrate their purchase, don't just confirm it
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
            These mistakes lead to higher refund rates and support tickets.
          </p>
        </div>

        <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-red-500 font-bold text-xl">❌</span>
            <strong>Vague Timelines:</strong> "Ships soon" creates anxiety
          </li>
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-red-500 font-bold text-xl">❌</span>
            <strong>No Order Number:</strong> Customers need a reference for support
          </li>
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-red-500 font-bold text-xl">❌</span>
            <strong>Forgetting Email Notice:</strong> Customers panic if they don't see confirmation
          </li>
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-red-500 font-bold text-xl">❌</span>
            <strong>Missing Contact Info:</strong> Frustrated customers refund instead of asking
          </li>
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-red-500 font-bold text-xl">❌</span>
            <strong>No Guarantee Reminder:</strong> Buyer's remorse increases without reassurance
          </li>
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-red-500 font-bold text-xl">❌</span>
            <strong>Overpromising Delivery:</strong> Missing delivery dates triggers refunds
          </li>
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-red-500 font-bold text-xl">❌</span>
            <strong>Too Brief:</strong> One sentence confirmation isn't enough information
          </li>
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-red-500 font-bold text-xl">❌</span>
            <strong>No Billing Descriptor:</strong> Customers forget and dispute the charge
          </li>
        </ul>
      </div>

      <!-- Section 8: Optional But Effective Additions -->
      <div class="bg-white border-2 border-gray-200 rounded-xl p-8 mb-8 shadow-sm">
        <h2 class="flex items-center text-3xl font-bold mb-5 text-gray-900">
          <span class="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold rounded-full mr-4 text-lg">
            8
          </span>
          Optional But Effective Additions
        </h2>

        <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-6">Social Proof Reminder</h3>
        <p class="text-gray-600 text-lg mb-4 leading-relaxed">
          Include a testimonial or statistic to reinforce their decision:
        </p>
        <div class="border-l-4 border-green-500 bg-green-50 p-5 rounded-lg mb-8">
          <strong class="text-gray-900 block mb-2 text-lg">Example:</strong>
          <p class="text-gray-700">
            "You're joining over 50,000 satisfied customers who have experienced the benefits of [Product Name]!"
          </p>
        </div>

        <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-6">Usage Instructions Preview</h3>
        <p class="text-gray-600 text-lg mb-4 leading-relaxed">
          Give them something to look forward to:
        </p>
        <ul class="space-y-2 mb-8">
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-green-500 font-bold">✓</span>
            "When your order arrives, take [X] capsules daily with food"
          </li>
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-green-500 font-bold">✓</span>
            "Most customers see results within 2-4 weeks"
          </li>
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-green-500 font-bold">✓</span>
            "For best results, use consistently for 90 days"
          </li>
        </ul>

        <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-6">Community/Social Links</h3>
        <p class="text-gray-600 text-lg mb-4 leading-relaxed">
          Invite them to join your community (reduces refunds through engagement):
        </p>
        <ul class="space-y-2">
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-green-500 font-bold">✓</span>
            Private Facebook group for customers
          </li>
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-green-500 font-bold">✓</span>
            Instagram for success stories
          </li>
          <li class="bg-gray-50 p-3 rounded-lg pl-10 relative">
            <span class="absolute left-3 text-green-500 font-bold">✓</span>
            Email list for tips and updates
          </li>
        </ul>
      </div>

      <!-- Performance Metrics & Benchmarks -->
      <div class="bg-white border-2 border-gray-200 rounded-xl p-8 mb-8 shadow-sm">
        <h2 class="flex items-center text-3xl mb-8 text-gray-900 font-bold">
          <span class="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg mr-4">📊</span>
          Performance Metrics & Benchmarks
        </h2>

        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 border-l-4 border-blue-600">
            <div class="flex items-start mb-2">
              <span class="text-2xl mr-3">📉</span>
              <strong class="text-gray-900 text-lg">Refund Rate Reduction</strong>
            </div>
            <p class="text-gray-700 ml-11">Proper thank you pages reduce refunds by 15-25% compared to basic confirmation.</p>
          </div>

          <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 border-l-4 border-green-600">
            <div class="flex items-start mb-2">
              <span class="text-2xl mr-3">🎫</span>
              <strong class="text-gray-900 text-lg">Support Ticket Reduction</strong>
            </div>
            <p class="text-gray-700 ml-11">Clear expectations reduce "where is my order?" tickets by 40-50%.</p>
          </div>

          <div class="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-5 border-l-4 border-red-600">
            <div class="flex items-start mb-2">
              <span class="text-2xl mr-3">🛡️</span>
              <strong class="text-gray-900 text-lg">Chargeback Prevention</strong>
            </div>
            <p class="text-gray-700 ml-11">Billing descriptor notice reduces chargebacks by 20-30%.</p>
          </div>

          <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-5 border-l-4 border-purple-600">
            <div class="flex items-start mb-2">
              <span class="text-2xl mr-3">⭐</span>
              <strong class="text-gray-900 text-lg">Customer Satisfaction</strong>
            </div>
            <p class="text-gray-700 ml-11">Customers who know what to expect rate their experience 30% higher.</p>
          </div>

          <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-5 border-l-4 border-orange-600">
            <div class="flex items-start mb-2">
              <span class="text-2xl mr-3">💰</span>
              <strong class="text-gray-900 text-lg">Revenue Protection</strong>
            </div>
            <p class="text-gray-700 ml-11">Reducing refunds from 8% to 6% on $100k revenue = $2,000 saved monthly.</p>
          </div>

          <div class="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-5 border-l-4 border-indigo-600">
            <div class="flex items-start mb-2">
              <span class="text-2xl mr-3">📧</span>
              <strong class="text-gray-900 text-lg">Email Open Rates</strong>
            </div>
            <p class="text-gray-700 ml-11">Mentioning "check email" multiple times increases confirmation email opens by 25%.</p>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <div class="flex gap-4 mb-12 flex-col md:flex-row">
        <NuxtLink to="/step6-downsell2" class="flex-1 bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-bold text-center hover:bg-blue-50 transition">
          ← Previous: Downsell 2
        </NuxtLink>
        <NuxtLink to="/step2-dtc" class="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-center hover:shadow-lg hover:-translate-y-0.5 transition">
          Next: Checkout Page (Reference) →
        </NuxtLink>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Step 7: Thank You Page - BuyGoods Vendor Guide',
  description: 'Learn how to create an effective thank you page that reduces refunds by 15-25% through clear communication and proper expectation setting'
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
