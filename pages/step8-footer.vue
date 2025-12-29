<template>
  <div>
    <Navbar :breadcrumbs="['Step 8: Footer & Legal']" />
    <Sidebar :current-step="8" />

    <div class="page-content">
      <div class="header">
        <div class="step-badge">STEP 8 OF 8</div>
        <h1>Footer & Legal</h1>
        <p>Required disclaimers and compliance elements</p>
      </div>

      <div class="container mx-auto px-4 py-12" style="max-width: 90%;">
        <!-- CRITICAL WARNING SECTION -->
        <div class="bg-red-50 border-4 border-red-500 rounded-lg p-8 mb-12 shadow-lg">
          <div class="flex items-start gap-4">
            <div class="text-5xl flex-shrink-0">🚨</div>
            <div class="flex-grow">
              <h2 class="text-3xl font-bold text-red-600 mb-4">THIS IS NOT OPTIONAL</h2>
              <p class="text-lg font-semibold text-gray-800 mb-3">
                Missing these elements can result in:
              </p>
              <p class="text-lg text-gray-700 mb-3">
                Immediate account suspension • Legal liability • FTC fines • Payment processor bans
              </p>
              <p class="text-base text-gray-700">
                Every single page in your funnel MUST include these footer elements. No exceptions.
              </p>
            </div>
          </div>
        </div>

        <!-- SECTION 1: Why Legal Compliance Matters -->
        <div class="bg-white border-2 border-red-500 rounded-lg p-8 mb-8 shadow-md">
          <div class="flex items-start gap-3 mb-4">
            <div class="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white font-bold flex-shrink-0">
              ⚠
            </div>
            <h2 class="text-2xl font-bold text-gray-900">Why Legal Compliance Matters</h2>
          </div>
          <p class="text-gray-700 mb-4 leading-relaxed">
            BuyGoods, payment processors (ClickBank, Stripe, PayPal), and government agencies (FTC, FDA) require specific disclosures on all sales pages. This isn't about being thorough - it's about staying in business.
          </p>
          <p class="text-gray-700 mb-6 leading-relaxed">
            Vendors who skip these requirements face account termination, payment holds, legal action, and permanent bans from payment platforms. The consequences are severe and immediate.
          </p>
          <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded">
            <p class="text-gray-800"><strong>Real Consequences:</strong> In 2023, over 1,200 vendor accounts were suspended for missing required disclosures. Don't be one of them.</p>
          </div>
        </div>

        <!-- SECTION 2: Complete Footer Example -->
        <div class="bg-white border-2 border-gray-200 rounded-lg p-8 mb-8 shadow-md">
          <div class="flex items-start gap-3 mb-6">
            <div class="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white font-bold flex-shrink-0 text-lg">
              1
            </div>
            <h2 class="text-2xl font-bold text-gray-900">Complete Footer Example</h2>
          </div>
          <p class="text-gray-700 mb-6">
            Here's exactly what should appear at the bottom of EVERY page in your funnel:
          </p>

          <div class="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 mb-6">
            <div class="text-center mb-6">
              <h4 class="text-gray-900 font-bold text-lg mb-4">[Your Company Name]</h4>

              <div class="flex flex-wrap justify-center gap-2 mb-6 pb-6 border-b border-gray-300">
                <a href="#" class="text-red-500 underline hover:text-red-600">Privacy Policy</a>
                <span class="text-gray-500">|</span>
                <a href="#" class="text-red-500 underline hover:text-red-600">Terms & Conditions</a>
                <span class="text-gray-500">|</span>
                <a href="#" class="text-red-500 underline hover:text-red-600">Refund Policy</a>
                <span class="text-gray-500">|</span>
                <a href="#" class="text-red-500 underline hover:text-red-600">Contact Us</a>
              </div>

              <div class="text-gray-700 mb-6">
                <p class="font-semibold mb-2">Contact Information:</p>
                <p>[Company Name]</p>
                <p>[Physical Street Address]</p>
                <p>[City, State ZIP Code]</p>
                <p>Email: support@yourcompany.com</p>
                <p>Phone: 1-800-XXX-XXXX</p>
              </div>
            </div>

            <!-- FDA Disclaimer -->
            <div class="bg-white border-2 border-red-300 rounded-lg p-4 mb-4">
              <p class="font-bold text-gray-900 mb-2">FDA Disclaimer (Required for Supplements):</p>
              <p class="text-gray-700 text-sm">
                These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. The information provided on this site is for informational purposes only and is not intended as a substitute for advice from your physician or other health care professional.
              </p>
            </div>

            <!-- Results Disclaimer -->
            <div class="bg-white border-2 border-red-300 rounded-lg p-4 mb-4">
              <p class="font-bold text-gray-900 mb-2">Results Disclaimer:</p>
              <p class="text-gray-700 text-sm">
                Results may vary from person to person. Individual results will depend on various factors including diet, exercise, metabolism, and adherence to the program. The testimonials and examples provided are not typical and do not guarantee you will achieve similar results.
              </p>
            </div>

            <!-- Affiliate Disclosure -->
            <div class="bg-white border-2 border-red-300 rounded-lg p-4 mb-4">
              <p class="font-bold text-gray-900 mb-2">Affiliate Disclosure (if applicable):</p>
              <p class="text-gray-700 text-sm">
                This website may receive compensation for purchases made through links on this site. This does not affect our reviews, which remain unbiased and independent.
              </p>
            </div>

            <!-- Copyright -->
            <div class="text-center pt-4 border-t border-gray-300 text-gray-700 text-sm">
              © 2024 [Company Name]. All Rights Reserved.
            </div>
          </div>
        </div>

        <!-- SECTION 3: Required Footer Elements Checklist -->
        <div class="bg-white border-2 border-gray-200 rounded-lg p-8 mb-8 shadow-md">
          <div class="flex items-start gap-3 mb-6">
            <div class="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white font-bold flex-shrink-0 text-lg">
              2
            </div>
            <h2 class="text-2xl font-bold text-gray-900">Required Footer Elements Checklist</h2>
          </div>
          <p class="text-gray-700 mb-6">
            Every single one of these MUST be present on ALL pages:
          </p>

          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-red-50 border-2 border-red-300 rounded-lg p-4">
              <p class="text-gray-800"><strong>Privacy Policy Link:</strong> How customer data is collected, stored, and used</p>
            </div>
            <div class="bg-red-50 border-2 border-red-300 rounded-lg p-4">
              <p class="text-gray-800"><strong>Terms & Conditions Link:</strong> Legal agreement between you and customers</p>
            </div>
            <div class="bg-red-50 border-2 border-red-300 rounded-lg p-4">
              <p class="text-gray-800"><strong>Refund/Return Policy Link:</strong> Clear explanation of refund process and timeframes</p>
            </div>
            <div class="bg-red-50 border-2 border-red-300 rounded-lg p-4">
              <p class="text-gray-800"><strong>Contact Information:</strong> Email, phone, and physical business address</p>
            </div>
            <div class="bg-red-50 border-2 border-red-300 rounded-lg p-4">
              <p class="text-gray-800"><strong>Physical Address:</strong> Real street address (not P.O. Box) where business operates</p>
            </div>
            <div class="bg-red-50 border-2 border-red-300 rounded-lg p-4">
              <p class="text-gray-800"><strong>FDA Disclaimer:</strong> Required for all supplement/health products</p>
            </div>
            <div class="bg-red-50 border-2 border-red-300 rounded-lg p-4">
              <p class="text-gray-800"><strong>Results Disclaimer:</strong> "Results may vary" and testimonial disclaimer</p>
            </div>
            <div class="bg-red-50 border-2 border-red-300 rounded-lg p-4">
              <p class="text-gray-800"><strong>Copyright Notice:</strong> © Year, Company Name, All Rights Reserved</p>
            </div>
            <div class="bg-red-50 border-2 border-red-300 rounded-lg p-4">
              <p class="text-gray-800"><strong>Affiliate Disclosure:</strong> If using affiliate links or partners</p>
            </div>
            <div class="bg-red-50 border-2 border-red-300 rounded-lg p-4">
              <p class="text-gray-800"><strong>Medical Disclaimer:</strong> Not medical advice, consult physician</p>
            </div>
          </div>
        </div>

        <!-- SECTION 4: Required Legal Pages -->
        <div class="bg-white border-2 border-gray-200 rounded-lg p-8 mb-8 shadow-md">
          <div class="flex items-start gap-3 mb-6">
            <div class="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white font-bold flex-shrink-0 text-lg">
              3
            </div>
            <h2 class="text-2xl font-bold text-gray-900">Required Legal Pages</h2>
          </div>
          <p class="text-gray-700 mb-6">
            You must create and link to these complete legal documents:
          </p>

          <div class="overflow-x-auto">
            <table class="w-full border-collapse">
              <thead>
                <tr class="bg-gray-100">
                  <th class="border border-gray-300 p-4 text-left font-bold">Legal Page</th>
                  <th class="border border-gray-300 p-4 text-left font-bold">Required Content</th>
                  <th class="border border-gray-300 p-4 text-left font-bold">Why It's Required</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 p-4"><strong>Privacy Policy</strong></td>
                  <td class="border border-gray-300 p-4">Data collection, storage, usage, cookies, third-party sharing, GDPR/CCPA compliance</td>
                  <td class="border border-gray-300 p-4">Federal law (FTC) and state laws (CCPA). Payment processors require it.</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-4"><strong>Terms & Conditions</strong></td>
                  <td class="border border-gray-300 p-4">User obligations, liability limitations, dispute resolution, jurisdiction, warranty disclaimers</td>
                  <td class="border border-gray-300 p-4">Legal protection for your business. Defines customer relationship.</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-4"><strong>Refund Policy</strong></td>
                  <td class="border border-gray-300 p-4">Refund timeframe (60-day guarantee), process, conditions, return shipping, processing time</td>
                  <td class="border border-gray-300 p-4">FTC requires clear refund terms. Reduces chargeback risk.</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-4"><strong>Contact Page</strong></td>
                  <td class="border border-gray-300 p-4">Support email, phone, hours, physical address, contact form</td>
                  <td class="border border-gray-300 p-4">Consumer protection laws require accessible contact method.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-6 rounded">
            <p class="text-gray-800"><strong>Warning:</strong> Don't use generic templates without customization. Your policies must accurately reflect YOUR business practices, or you're exposed to legal liability.</p>
          </div>
        </div>

        <!-- SECTION 5: FDA Disclaimer -->
        <div class="bg-white border-2 border-gray-200 rounded-lg p-8 mb-8 shadow-md">
          <div class="flex items-start gap-3 mb-6">
            <div class="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white font-bold flex-shrink-0 text-lg">
              4
            </div>
            <h2 class="text-2xl font-bold text-gray-900">FDA Disclaimer (Supplements)</h2>
          </div>
          <p class="text-gray-700 mb-6">
            If you're selling supplements, health products, or anything making health claims, this disclaimer is MANDATORY:
          </p>

          <div class="bg-white border-2 border-red-300 rounded-lg p-6 mb-6">
            <p class="font-bold text-red-600 mb-3">Required FDA Disclaimer:</p>
            <p class="text-gray-800 italic">
              "These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease."
            </p>
          </div>

          <h3 class="text-xl font-bold text-gray-900 mb-4">When FDA Disclaimer is Required:</h3>
          <div class="grid md:grid-cols-2 gap-3 mb-6">
            <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
              <p class="text-gray-800">Dietary supplements (vitamins, herbs, minerals)</p>
            </div>
            <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
              <p class="text-gray-800">Weight loss products</p>
            </div>
            <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
              <p class="text-gray-800">Health and wellness products</p>
            </div>
            <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
              <p class="text-gray-800">Beauty/anti-aging products making health claims</p>
            </div>
            <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
              <p class="text-gray-800">Any product claiming to affect body structure or function</p>
            </div>
          </div>

          <h3 class="text-xl font-bold text-gray-900 mb-4">Additional Medical Disclaimers:</h3>
          <div class="bg-white border-2 border-red-300 rounded-lg p-6">
            <p class="text-gray-800 text-sm">
              "The information provided on this website is for informational purposes only and is not intended as a substitute for advice from your physician or other health care professional. You should not use the information on this website for diagnosis or treatment of any health problem. Consult with a healthcare professional before starting any diet, exercise, supplementation program, or if you have or suspect you might have a health problem."
            </p>
          </div>
        </div>

        <!-- SECTION 6: Results & Testimonial Disclaimers -->
        <div class="bg-white border-2 border-gray-200 rounded-lg p-8 mb-8 shadow-md">
          <div class="flex items-start gap-3 mb-6">
            <div class="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white font-bold flex-shrink-0 text-lg">
              5
            </div>
            <h2 class="text-2xl font-bold text-gray-900">Results & Testimonial Disclaimers</h2>
          </div>
          <p class="text-gray-700 mb-6">
            The FTC requires clear disclaimers when showing testimonials, before/after photos, or income claims:
          </p>

          <div class="bg-white border-2 border-red-300 rounded-lg p-6 mb-6">
            <p class="font-bold text-red-600 mb-3">Required Results Disclaimer:</p>
            <p class="text-gray-800 text-sm italic">
              "The testimonials and examples used are exceptional results and do not apply to the average purchaser. They are not intended to represent or guarantee that anyone will achieve the same or similar results. Each individual's success depends on his or her background, dedication, desire, and motivation. As with any health-related program or service, your results may vary, and will be based on many variables including but not limited to, your individual capacity, life experience, unique health and genetic profile, starting point, expertise, and level of commitment."
            </p>
          </div>

          <h3 class="text-xl font-bold text-gray-900 mb-4">When Results Disclaimers are Required:</h3>
          <div class="grid md:grid-cols-2 gap-3 mb-6">
            <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
              <p class="text-gray-800">Before/after photos or testimonials</p>
            </div>
            <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
              <p class="text-gray-800">Weight loss claims with specific amounts</p>
            </div>
            <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
              <p class="text-gray-800">Income or earnings claims</p>
            </div>
            <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
              <p class="text-gray-800">Time-based results ("lose 20 lbs in 30 days")</p>
            </div>
            <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
              <p class="text-gray-800">Any specific outcome promises</p>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
            <p class="text-gray-800"><strong>FTC Enforcement:</strong> The FTC has fined companies millions for inadequate testimonial disclaimers. Don't risk it - include the full disclaimer.</p>
          </div>
        </div>

        <!-- SECTION 7: Physical Address Requirement -->
        <div class="bg-white border-2 border-gray-200 rounded-lg p-8 mb-8 shadow-md">
          <div class="flex items-start gap-3 mb-6">
            <div class="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white font-bold flex-shrink-0 text-lg">
              6
            </div>
            <h2 class="text-2xl font-bold text-gray-900">Physical Address Requirement</h2>
          </div>
          <p class="text-gray-700 mb-6">
            You MUST display a real physical street address where your business operates:
          </p>

          <div class="grid md:grid-cols-2 gap-3 mb-6">
            <div class="bg-green-50 border-l-4 border-green-500 p-4 rounded">
              <p class="text-gray-800"><strong>✓ Acceptable:</strong> Real street address where business is located</p>
            </div>
            <div class="bg-green-50 border-l-4 border-green-500 p-4 rounded">
              <p class="text-gray-800"><strong>✓ Acceptable:</strong> Registered agent address or virtual office (if legally registered)</p>
            </div>
            <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <p class="text-gray-800"><strong>❌ NOT Acceptable:</strong> P.O. Box only (unless paired with street address)</p>
            </div>
            <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <p class="text-gray-800"><strong>❌ NOT Acceptable:</strong> No address at all</p>
            </div>
            <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <p class="text-gray-800"><strong>❌ NOT Acceptable:</strong> Fake or placeholder address</p>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
            <p class="text-gray-800"><strong>Why This Matters:</strong> The CAN-SPAM Act requires a physical address. Payment processors verify this. Using a fake address is fraud.</p>
          </div>
        </div>

        <!-- SECTION 8: Contact Information Requirements -->
        <div class="bg-white border-2 border-gray-200 rounded-lg p-8 mb-8 shadow-md">
          <div class="flex items-start gap-3 mb-6">
            <div class="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white font-bold flex-shrink-0 text-lg">
              7
            </div>
            <h2 class="text-2xl font-bold text-gray-900">Contact Information Requirements</h2>
          </div>
          <p class="text-gray-700 mb-6">
            You must provide multiple ways for customers to reach you:
          </p>

          <div class="overflow-x-auto">
            <table class="w-full border-collapse">
              <thead>
                <tr class="bg-gray-100">
                  <th class="border border-gray-300 p-4 text-left font-bold">Contact Method</th>
                  <th class="border border-gray-300 p-4 text-left font-bold">Requirement</th>
                  <th class="border border-gray-300 p-4 text-left font-bold">Best Practice</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 p-4"><strong>Email</strong></td>
                  <td class="border border-gray-300 p-4">Required - Must be monitored</td>
                  <td class="border border-gray-300 p-4">support@yourdomain.com - respond within 24 hours</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-4"><strong>Phone</strong></td>
                  <td class="border border-gray-300 p-4">Highly recommended</td>
                  <td class="border border-gray-300 p-4">Toll-free number, list business hours</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-4"><strong>Physical Address</strong></td>
                  <td class="border border-gray-300 p-4">Required by law</td>
                  <td class="border border-gray-300 p-4">Real street address where you can receive mail</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-4"><strong>Contact Form</strong></td>
                  <td class="border border-gray-300 p-4">Optional but helpful</td>
                  <td class="border border-gray-300 p-4">Reduces spam, easier for customers</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-4"><strong>Business Hours</strong></td>
                  <td class="border border-gray-300 p-4">Recommended</td>
                  <td class="border border-gray-300 p-4">Set expectations for response times</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- SECTION 9: Common Compliance Mistakes -->
        <div class="bg-white border-2 border-gray-200 rounded-lg p-8 mb-8 shadow-md">
          <div class="flex items-start gap-3 mb-6">
            <div class="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white font-bold flex-shrink-0 text-lg">
              8
            </div>
            <h2 class="text-2xl font-bold text-gray-900">Common Compliance Mistakes</h2>
          </div>

          <div class="bg-red-50 border-2 border-red-300 rounded-lg p-4 mb-6">
            <p class="font-bold text-red-600">These Mistakes Will Get Your Account Suspended:</p>
          </div>

          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-red-50 border-l-4 border-red-500 p-4">
              <p class="text-gray-800"><strong>❌ No Footer on Upsell Pages:</strong> Every page needs full footer, not just main pages</p>
            </div>
            <div class="bg-red-50 border-l-4 border-red-500 p-4">
              <p class="text-gray-800"><strong>❌ Generic/Template Policies:</strong> Copy-paste policies that don't match your business</p>
            </div>
            <div class="bg-red-50 border-l-4 border-red-500 p-4">
              <p class="text-gray-800"><strong>❌ Broken Policy Links:</strong> Links that 404 or lead nowhere</p>
            </div>
            <div class="bg-red-50 border-l-4 border-red-500 p-4">
              <p class="text-gray-800"><strong>❌ Missing FDA Disclaimer:</strong> Required for ALL health/supplement products</p>
            </div>
            <div class="bg-red-50 border-l-4 border-red-500 p-4">
              <p class="text-gray-800"><strong>❌ No Physical Address:</strong> P.O. Box only or no address at all</p>
            </div>
            <div class="bg-red-50 border-l-4 border-red-500 p-4">
              <p class="text-gray-800"><strong>❌ Fake Contact Info:</strong> Email or phone that doesn't work</p>
            </div>
            <div class="bg-red-50 border-l-4 border-red-500 p-4">
              <p class="text-gray-800"><strong>❌ No Results Disclaimer:</strong> Using testimonials without proper disclosure</p>
            </div>
            <div class="bg-red-50 border-l-4 border-red-500 p-4">
              <p class="text-gray-800"><strong>❌ Outdated Copyright:</strong> Using wrong year or wrong company name</p>
            </div>
            <div class="bg-red-50 border-l-4 border-red-500 p-4">
              <p class="text-gray-800"><strong>❌ Hidden Disclaimers:</strong> Tiny text or disclaimers users can't find</p>
            </div>
            <div class="bg-red-50 border-l-4 border-red-500 p-4">
              <p class="text-gray-800"><strong>❌ Inconsistent Information:</strong> Different addresses/contact info on different pages</p>
            </div>
          </div>
        </div>

        <!-- CONSEQUENCES OF NON-COMPLIANCE -->
        <div class="bg-gradient-to-br from-red-600 to-red-700 rounded-lg p-8 mb-8 shadow-lg text-white">
          <h3 class="text-2xl font-bold mb-6 flex items-center gap-2">
            <span>⚠️</span> Consequences of Non-Compliance
          </h3>

          <div class="space-y-4">
            <div class="bg-red-500 bg-opacity-30 rounded-lg p-4 border-l-4 border-white">
              <p class="font-bold mb-1">Account Suspension:</p>
              <p>BuyGoods, ClickBank, and other platforms will immediately suspend your account if required elements are missing.</p>
            </div>

            <div class="bg-red-500 bg-opacity-30 rounded-lg p-4 border-l-4 border-white">
              <p class="font-bold mb-1">Payment Holds:</p>
              <p>Payment processors can freeze your funds (sometimes permanently) for compliance violations.</p>
            </div>

            <div class="bg-red-500 bg-opacity-30 rounded-lg p-4 border-l-4 border-white">
              <p class="font-bold mb-1">FTC Fines:</p>
              <p>Federal Trade Commission can fine companies $10,000-$50,000+ per violation for missing disclosures.</p>
            </div>

            <div class="bg-red-500 bg-opacity-30 rounded-lg p-4 border-l-4 border-white">
              <p class="font-bold mb-1">Legal Liability:</p>
              <p>Customers can sue for false advertising, fraud, or misrepresentation if disclosures are missing.</p>
            </div>

            <div class="bg-red-500 bg-opacity-30 rounded-lg p-4 border-l-4 border-white">
              <p class="font-bold mb-1">Permanent Bans:</p>
              <p>Major payment processors share violation data. One ban can blacklist you across all platforms.</p>
            </div>

            <div class="bg-red-500 bg-opacity-30 rounded-lg p-4 border-l-4 border-white">
              <p class="font-bold mb-1">Chargebacks:</p>
              <p>Missing policies increase chargebacks. High chargeback rates = account termination.</p>
            </div>

            <div class="bg-red-500 bg-opacity-30 rounded-lg p-4 border-l-4 border-white">
              <p class="font-bold mb-1">State Attorney General Actions:</p>
              <p>States actively pursue companies with inadequate consumer protections.</p>
            </div>
          </div>
        </div>

        <!-- SECTION 10: Implementation Checklist -->
        <div class="bg-white border-2 border-gray-200 rounded-lg p-8 mb-8 shadow-md">
          <div class="flex items-start gap-3 mb-6">
            <div class="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white font-bold flex-shrink-0 text-lg">
              9
            </div>
            <h2 class="text-2xl font-bold text-gray-900">Implementation Checklist</h2>
          </div>
          <p class="text-gray-700 mb-6">
            Follow these steps to ensure full compliance:
          </p>

          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-green-50 border-l-4 border-green-500 p-4">
              <p class="text-gray-800"><strong>Step 1:</strong> Create complete Privacy Policy (use lawyer or quality template service)</p>
            </div>
            <div class="bg-green-50 border-l-4 border-green-500 p-4">
              <p class="text-gray-800"><strong>Step 2:</strong> Create complete Terms & Conditions document</p>
            </div>
            <div class="bg-green-50 border-l-4 border-green-500 p-4">
              <p class="text-gray-800"><strong>Step 3:</strong> Create detailed Refund Policy matching your actual policy</p>
            </div>
            <div class="bg-green-50 border-l-4 border-green-500 p-4">
              <p class="text-gray-800"><strong>Step 4:</strong> Set up dedicated contact page with all information</p>
            </div>
            <div class="bg-green-50 border-l-4 border-green-500 p-4">
              <p class="text-gray-800"><strong>Step 5:</strong> Add footer to EVERY page (VSL, checkout, upsells, downsells, thank you)</p>
            </div>
            <div class="bg-green-50 border-l-4 border-green-500 p-4">
              <p class="text-gray-800"><strong>Step 6:</strong> Include FDA disclaimer if selling supplements/health products</p>
            </div>
            <div class="bg-green-50 border-l-4 border-green-500 p-4">
              <p class="text-gray-800"><strong>Step 7:</strong> Add results disclaimer near all testimonials and claims</p>
            </div>
            <div class="bg-green-50 border-l-4 border-green-500 p-4">
              <p class="text-gray-800"><strong>Step 8:</strong> Verify all links work and go to correct pages</p>
            </div>
            <div class="bg-green-50 border-l-4 border-green-500 p-4">
              <p class="text-gray-800"><strong>Step 9:</strong> Test footer displays properly on mobile devices</p>
            </div>
            <div class="bg-green-50 border-l-4 border-green-500 p-4">
              <p class="text-gray-800"><strong>Step 10:</strong> Have legal professional review before launch (recommended)</p>
            </div>
          </div>
        </div>

        <!-- SECTION 11: Final Critical Reminders -->
        <div class="bg-white border-4 border-red-500 rounded-lg p-8 mb-8 shadow-md">
          <div class="flex items-start gap-3 mb-6">
            <div class="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white font-bold flex-shrink-0 text-lg">
              10
            </div>
            <h2 class="text-2xl font-bold text-gray-900">Final Critical Reminders</h2>
          </div>

          <div class="bg-red-50 border-2 border-red-300 rounded-lg p-4 mb-6">
            <p class="font-bold text-red-600">DO NOT SKIP THIS:</p>
            <p class="text-gray-800">Legal compliance is not optional and not something to "fix later." Get it right from day one.</p>
          </div>

          <div class="grid md:grid-cols-2 gap-3 mb-8">
            <div class="bg-red-50 border-l-4 border-red-500 p-4">
              <p class="text-gray-800"><strong>Every Page Needs Footer:</strong> VSL, checkout, all upsells, all downsells, thank you page - no exceptions</p>
            </div>
            <div class="bg-red-50 border-l-4 border-red-500 p-4">
              <p class="text-gray-800"><strong>Links Must Work:</strong> Test every link. Broken policy links = compliance violation</p>
            </div>
            <div class="bg-red-50 border-l-4 border-red-500 p-4">
              <p class="text-gray-800"><strong>Keep Current:</strong> Update copyright year, review policies annually</p>
            </div>
            <div class="bg-red-50 border-l-4 border-red-500 p-4">
              <p class="text-gray-800"><strong>Match Your Practices:</strong> Policies must reflect what you actually do, not generic templates</p>
            </div>
            <div class="bg-red-50 border-l-4 border-red-500 p-4">
              <p class="text-gray-800"><strong>Get Legal Review:</strong> Invest in a lawyer reviewing your policies. Cheaper than FTC fines.</p>
            </div>
            <div class="bg-red-50 border-l-4 border-red-500 p-4">
              <p class="text-gray-800"><strong>Monitor Changes:</strong> FTC and FDA update requirements. Stay informed.</p>
            </div>
            <div class="bg-red-50 border-l-4 border-red-500 p-4">
              <p class="text-gray-800"><strong>Document Everything:</strong> Keep records of when policies were posted and updated</p>
            </div>
          </div>

          <div class="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-6 text-white text-center">
            <h3 class="text-xl font-bold mb-3">Final Warning</h3>
            <p class="text-base">
              Thousands of vendors lose their accounts every year due to missing compliance elements. Don't let it happen to you. Include EVERY required element on EVERY page before launching.
            </p>
          </div>
        </div>

        <!-- Navigation -->
        <div class="flex gap-4 mb-12">
          <NuxtLink to="/step7-thankyou" class="flex-1 bg-white border-2 border-gray-300 hover:bg-gray-50 text-gray-700 font-bold py-4 px-6 rounded-lg text-center transition">
            ← Previous: Thank You Page
          </NuxtLink>
          <NuxtLink to="/" class="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-lg text-center transition">
            Back to Overview →
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Step 8: Footer & Legal Requirements - BuyGoods Vendor Guide',
  description: 'Essential compliance elements required on EVERY page to avoid account suspension. Complete legal requirements, FDA disclaimers, and consequences of non-compliance.'
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

/* Responsive tables */
@media (max-width: 768px) {
  table {
    font-size: 0.875rem;
  }

  table th,
  table td {
    padding: 0.75rem;
  }
}
</style>
