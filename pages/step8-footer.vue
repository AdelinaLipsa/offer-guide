<template>
  <div>
    <Navbar :breadcrumbs="['Step 8: Footer & Legal']" />
    <Sidebar :current-step="8" />

    <div class="page-content">
      <!-- Header -->
      <div class="header">
        <!-- Logo Shadow (larger, blurred, behind) -->
        <img src="/bg-logo-white.png" alt="" class="logo-shadow" aria-hidden="true" />
        <!-- Logo Main (visible, on top) -->
        <img src="/bg-logo-white.png" alt="" class="logo-main" aria-hidden="true" />
        <div class="header-content">
          <div class="step-badge">STEP 8 OF 8</div>
          <h1>Footer & Legal</h1>
          <p>Required disclaimers and compliance elements</p>
        </div>

        <!-- Quick Stats Bar -->
        <div class="flex flex-wrap justify-center gap-6 mt-8">
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
            <Icon name="lucide:shield-alert" class="w-5 h-5" />
            <span class="text-sm font-medium">Mandatory</span>
          </div>
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
            <Icon name="lucide:file-text" class="w-5 h-5" />
            <span class="text-sm font-medium">4 Legal Pages</span>
          </div>
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
            <Icon name="lucide:check-circle" class="w-5 h-5" />
            <span class="text-sm font-medium">10 Required Elements</span>
          </div>
        </div>
      </div>

      <div class="content-width py-10">
        <!-- Quick Jump Navigation -->
        <div class="sticky top-0 z-10 bg-surface-secondary/95 backdrop-blur-sm py-3 mb-8 border-b border-border">
          <div class="flex flex-wrap gap-2 text-sm">
            <span class="text-charcoal-500 font-medium">Jump to:</span>
            <a href="#critical-warning" class="text-accent hover:underline">Critical Warning</a>
            <span class="text-charcoal-400">•</span>
            <a href="#why-compliance" class="text-accent hover:underline">Why Compliance</a>
            <span class="text-charcoal-400">•</span>
            <a href="#footer-example" class="text-accent hover:underline">Footer Example</a>
            <span class="text-charcoal-400">•</span>
            <a href="#checklist" class="text-accent hover:underline">Checklist</a>
            <span class="text-charcoal-400">•</span>
            <a href="#legal-pages" class="text-accent hover:underline">Legal Pages</a>
            <span class="text-charcoal-400">•</span>
            <a href="#disclaimers" class="text-accent hover:underline">Disclaimers</a>
            <span class="text-charcoal-400">•</span>
            <a href="#consequences" class="text-accent hover:underline">Consequences</a>
          </div>
        </div>

        <!-- CRITICAL WARNING SECTION -->
        <div id="critical-warning" class="bg-error/5 border-2 border-error rounded-lg p-8 mb-8">
          <div class="flex items-start gap-4">
            <div class="flex items-center justify-center w-12 h-12 rounded-full bg-error text-white flex-shrink-0">
              <Icon name="lucide:alert-triangle" class="w-6 h-6" />
            </div>
            <div class="flex-grow">
              <h2 class="text-2xl font-bold text-error mb-4">THIS IS NOT OPTIONAL</h2>
              <p class="text-lg font-semibold text-navy-900 mb-3">
                Missing these elements can result in:
              </p>
              <p class="text-charcoal-600 mb-3">
                Immediate account suspension • Legal liability • FTC fines • Payment processor bans
              </p>
              <p class="text-charcoal-600">
                Every single page in your funnel MUST include these footer elements. No exceptions.
              </p>
            </div>
          </div>
        </div>

        <!-- SECTION 1: Why Legal Compliance Matters -->
        <ContentCard id="why-compliance">
          <SectionHeader :number="1" title="Why Legal Compliance Matters" />

          <p class="text-charcoal-600 text-lg leading-relaxed mb-4">
            BuyGoods, payment processors (ClickBank, Stripe, PayPal), and government agencies (FTC, FDA) require specific disclosures on all sales pages. This isn't about being thorough - it's about staying in business.
          </p>
          <p class="text-charcoal-600 text-lg leading-relaxed mb-6">
            Vendors who skip these requirements face account termination, payment holds, legal action, and permanent bans from payment platforms. The consequences are severe and immediate.
          </p>

          <AlertBox type="error" title="Real Consequences">
            In 2023, over 1,200 vendor accounts were suspended for missing required disclosures. Don't be one of them.
          </AlertBox>
        </ContentCard>

        <!-- SECTION 2: Complete Footer Example -->
        <ContentCard id="footer-example">
          <SectionHeader :number="2" title="Complete Footer Example" />

          <p class="text-charcoal-600 text-lg mb-6">
            Here's exactly what should appear at the bottom of EVERY page in your funnel:
          </p>

          <div class="bg-surface-tertiary border-2 border-dashed border-charcoal-300 rounded-lg p-8 mb-6">
            <div class="text-center mb-6">
              <h4 class="text-navy-900 font-bold text-lg mb-4">[Your Company Name]</h4>

              <div class="flex flex-wrap justify-center gap-2 mb-6 pb-6 border-b border-charcoal-300">
                <a href="#" class="text-accent underline hover:text-accent/80">Privacy Policy</a>
                <span class="text-charcoal-400">|</span>
                <a href="#" class="text-accent underline hover:text-accent/80">Terms & Conditions</a>
                <span class="text-charcoal-400">|</span>
                <a href="#" class="text-accent underline hover:text-accent/80">Refund Policy</a>
                <span class="text-charcoal-400">|</span>
                <a href="#" class="text-accent underline hover:text-accent/80">Contact Us</a>
              </div>

              <div class="text-charcoal-600 mb-6">
                <p class="font-semibold mb-2">Contact Information:</p>
                <p>[Company Name]</p>
                <p>[Physical Street Address]</p>
                <p>[City, State ZIP Code]</p>
                <p>Email: support@yourcompany.com</p>
                <p>Phone: 1-800-XXX-XXXX</p>
              </div>
            </div>

            <!-- FDA Disclaimer -->
            <div class="bg-white border-2 border-error/30 rounded-lg p-4 mb-4">
              <p class="font-bold text-navy-900 mb-2">FDA Disclaimer (Required for Supplements):</p>
              <p class="text-charcoal-600 text-sm">
                These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. The information provided on this site is for informational purposes only and is not intended as a substitute for advice from your physician or other health care professional.
              </p>
            </div>

            <!-- Results Disclaimer -->
            <div class="bg-white border-2 border-error/30 rounded-lg p-4 mb-4">
              <p class="font-bold text-navy-900 mb-2">Results Disclaimer:</p>
              <p class="text-charcoal-600 text-sm">
                Results may vary from person to person. Individual results will depend on various factors including diet, exercise, metabolism, and adherence to the program. The testimonials and examples provided are not typical and do not guarantee you will achieve similar results.
              </p>
            </div>

            <!-- Affiliate Disclosure -->
            <div class="bg-white border-2 border-error/30 rounded-lg p-4 mb-4">
              <p class="font-bold text-navy-900 mb-2">Affiliate Disclosure (if applicable):</p>
              <p class="text-charcoal-600 text-sm">
                This website may receive compensation for purchases made through links on this site. This does not affect our reviews, which remain unbiased and independent.
              </p>
            </div>

            <!-- Copyright -->
            <div class="text-center pt-4 border-t border-charcoal-300 text-charcoal-600 text-sm">
              © 2024 [Company Name]. All Rights Reserved.
            </div>
          </div>
        </ContentCard>

        <!-- SECTION 3: Required Footer Elements Checklist -->
        <ContentCard id="checklist">
          <SectionHeader :number="3" title="Required Footer Elements Checklist" />

          <p class="text-charcoal-600 text-lg mb-6">
            Every single one of these MUST be present on ALL pages:
          </p>

          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-error/5 border-2 border-error/30 rounded-lg p-4">
              <p class="text-navy-900"><strong>Privacy Policy Link:</strong> How customer data is collected, stored, and used</p>
            </div>
            <div class="bg-error/5 border-2 border-error/30 rounded-lg p-4">
              <p class="text-navy-900"><strong>Terms & Conditions Link:</strong> Legal agreement between you and customers</p>
            </div>
            <div class="bg-error/5 border-2 border-error/30 rounded-lg p-4">
              <p class="text-navy-900"><strong>Refund/Return Policy Link:</strong> Clear explanation of refund process and timeframes</p>
            </div>
            <div class="bg-error/5 border-2 border-error/30 rounded-lg p-4">
              <p class="text-navy-900"><strong>Contact Information:</strong> Email, phone, and physical business address</p>
            </div>
            <div class="bg-error/5 border-2 border-error/30 rounded-lg p-4">
              <p class="text-navy-900"><strong>Physical Address:</strong> Real street address (not P.O. Box) where business operates</p>
            </div>
            <div class="bg-error/5 border-2 border-error/30 rounded-lg p-4">
              <p class="text-navy-900"><strong>FDA Disclaimer:</strong> Required for all supplement/health products</p>
            </div>
            <div class="bg-error/5 border-2 border-error/30 rounded-lg p-4">
              <p class="text-navy-900"><strong>Results Disclaimer:</strong> "Results may vary" and testimonial disclaimer</p>
            </div>
            <div class="bg-error/5 border-2 border-error/30 rounded-lg p-4">
              <p class="text-navy-900"><strong>Copyright Notice:</strong> © Year, Company Name, All Rights Reserved</p>
            </div>
            <div class="bg-error/5 border-2 border-error/30 rounded-lg p-4">
              <p class="text-navy-900"><strong>Affiliate Disclosure:</strong> If using affiliate links or partners</p>
            </div>
            <div class="bg-error/5 border-2 border-error/30 rounded-lg p-4">
              <p class="text-navy-900"><strong>Medical Disclaimer:</strong> Not medical advice, consult physician</p>
            </div>
          </div>
        </ContentCard>

        <!-- SECTION 4: Required Legal Pages -->
        <ContentCard id="legal-pages">
          <SectionHeader :number="4" title="Required Legal Pages" />

          <p class="text-charcoal-600 text-lg mb-6">
            You must create and link to these complete legal documents:
          </p>

          <div class="overflow-x-auto mb-6">
            <table class="w-full border-collapse">
              <thead>
                <tr class="bg-surface-tertiary">
                  <th class="border border-border p-4 text-left font-bold text-navy-900">Legal Page</th>
                  <th class="border border-border p-4 text-left font-bold text-navy-900">Required Content</th>
                  <th class="border border-border p-4 text-left font-bold text-navy-900">Why It's Required</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-border p-4 text-navy-900"><strong>Privacy Policy</strong></td>
                  <td class="border border-border p-4 text-charcoal-600">Data collection, storage, usage, cookies, third-party sharing, GDPR/CCPA compliance</td>
                  <td class="border border-border p-4 text-charcoal-600">Federal law (FTC) and state laws (CCPA). Payment processors require it.</td>
                </tr>
                <tr class="bg-surface-tertiary/50">
                  <td class="border border-border p-4 text-navy-900"><strong>Terms & Conditions</strong></td>
                  <td class="border border-border p-4 text-charcoal-600">User obligations, liability limitations, dispute resolution, jurisdiction, warranty disclaimers</td>
                  <td class="border border-border p-4 text-charcoal-600">Legal protection for your business. Defines customer relationship.</td>
                </tr>
                <tr>
                  <td class="border border-border p-4 text-navy-900"><strong>Refund Policy</strong></td>
                  <td class="border border-border p-4 text-charcoal-600">Refund timeframe (60-day guarantee), process, conditions, return shipping, processing time</td>
                  <td class="border border-border p-4 text-charcoal-600">FTC requires clear refund terms. Reduces chargeback risk.</td>
                </tr>
                <tr class="bg-surface-tertiary/50">
                  <td class="border border-border p-4 text-navy-900"><strong>Contact Page</strong></td>
                  <td class="border border-border p-4 text-charcoal-600">Support email, phone, hours, physical address, contact form</td>
                  <td class="border border-border p-4 text-charcoal-600">Consumer protection laws require accessible contact method.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <AlertBox type="warning" title="Warning">
            Don't use generic templates without customization. Your policies must accurately reflect YOUR business practices, or you're exposed to legal liability.
          </AlertBox>
        </ContentCard>

        <!-- SECTION 5: FDA Disclaimer -->
        <ContentCard id="disclaimers">
          <SectionHeader :number="5" title="FDA Disclaimer (Supplements)" />

          <p class="text-charcoal-600 text-lg mb-6">
            If you're selling supplements, health products, or anything making health claims, this disclaimer is MANDATORY:
          </p>

          <div class="bg-error/5 border-2 border-error/30 rounded-lg p-6 mb-6">
            <p class="font-bold text-error mb-3">Required FDA Disclaimer:</p>
            <p class="text-navy-900 italic">
              "These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease."
            </p>
          </div>

          <h3 class="text-xl font-bold text-navy-900 mb-4">When FDA Disclaimer is Required:</h3>
          <div class="grid md:grid-cols-2 gap-3 mb-6">
            <div class="bg-accent/5 border-l-4 border-accent p-4">
              <p class="text-navy-900">Dietary supplements (vitamins, herbs, minerals)</p>
            </div>
            <div class="bg-accent/5 border-l-4 border-accent p-4">
              <p class="text-navy-900">Weight loss products</p>
            </div>
            <div class="bg-accent/5 border-l-4 border-accent p-4">
              <p class="text-navy-900">Health and wellness products</p>
            </div>
            <div class="bg-accent/5 border-l-4 border-accent p-4">
              <p class="text-navy-900">Beauty/anti-aging products making health claims</p>
            </div>
            <div class="bg-accent/5 border-l-4 border-accent p-4 md:col-span-2">
              <p class="text-navy-900">Any product claiming to affect body structure or function</p>
            </div>
          </div>

          <h3 class="text-xl font-bold text-navy-900 mb-4">Additional Medical Disclaimers:</h3>
          <div class="bg-error/5 border-2 border-error/30 rounded-lg p-6">
            <p class="text-charcoal-600 text-sm">
              "The information provided on this website is for informational purposes only and is not intended as a substitute for advice from your physician or other health care professional. You should not use the information on this website for diagnosis or treatment of any health problem. Consult with a healthcare professional before starting any diet, exercise, supplementation program, or if you have or suspect you might have a health problem."
            </p>
          </div>
        </ContentCard>

        <!-- SECTION 6: Results & Testimonial Disclaimers -->
        <ContentCard>
          <SectionHeader :number="6" title="Results & Testimonial Disclaimers" />

          <p class="text-charcoal-600 text-lg mb-6">
            The FTC requires clear disclaimers when showing testimonials, before/after photos, or income claims:
          </p>

          <div class="bg-error/5 border-2 border-error/30 rounded-lg p-6 mb-6">
            <p class="font-bold text-error mb-3">Required Results Disclaimer:</p>
            <p class="text-charcoal-600 text-sm italic">
              "The testimonials and examples used are exceptional results and do not apply to the average purchaser. They are not intended to represent or guarantee that anyone will achieve the same or similar results. Each individual's success depends on his or her background, dedication, desire, and motivation. As with any health-related program or service, your results may vary, and will be based on many variables including but not limited to, your individual capacity, life experience, unique health and genetic profile, starting point, expertise, and level of commitment."
            </p>
          </div>

          <h3 class="text-xl font-bold text-navy-900 mb-4">When Results Disclaimers are Required:</h3>
          <div class="grid md:grid-cols-2 gap-3 mb-6">
            <div class="bg-accent/5 border-l-4 border-accent p-4">
              <p class="text-navy-900">Before/after photos or testimonials</p>
            </div>
            <div class="bg-accent/5 border-l-4 border-accent p-4">
              <p class="text-navy-900">Weight loss claims with specific amounts</p>
            </div>
            <div class="bg-accent/5 border-l-4 border-accent p-4">
              <p class="text-navy-900">Income or earnings claims</p>
            </div>
            <div class="bg-accent/5 border-l-4 border-accent p-4">
              <p class="text-navy-900">Time-based results ("lose 20 lbs in 30 days")</p>
            </div>
            <div class="bg-accent/5 border-l-4 border-accent p-4 md:col-span-2">
              <p class="text-navy-900">Any specific outcome promises</p>
            </div>
          </div>

          <AlertBox type="warning" title="FTC Enforcement">
            The FTC has fined companies millions for inadequate testimonial disclaimers. Don't risk it - include the full disclaimer.
          </AlertBox>
        </ContentCard>

        <!-- SECTION 7: Physical Address Requirement -->
        <ContentCard>
          <SectionHeader :number="7" title="Physical Address Requirement" />

          <p class="text-charcoal-600 text-lg mb-6">
            You MUST display a real physical street address where your business operates:
          </p>

          <div class="grid md:grid-cols-2 gap-3 mb-6">
            <div class="flex items-start gap-3 bg-success/5 border-l-4 border-success p-4 rounded">
              <Icon name="lucide:check" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <p class="text-navy-900"><strong>Acceptable:</strong> Real street address where business is located</p>
            </div>
            <div class="flex items-start gap-3 bg-success/5 border-l-4 border-success p-4 rounded">
              <Icon name="lucide:check" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <p class="text-navy-900"><strong>Acceptable:</strong> Registered agent address or virtual office (if legally registered)</p>
            </div>
            <div class="flex items-start gap-3 bg-error/5 border-l-4 border-error p-4 rounded">
              <Icon name="lucide:x" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
              <p class="text-navy-900"><strong>NOT Acceptable:</strong> P.O. Box only (unless paired with street address)</p>
            </div>
            <div class="flex items-start gap-3 bg-error/5 border-l-4 border-error p-4 rounded">
              <Icon name="lucide:x" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
              <p class="text-navy-900"><strong>NOT Acceptable:</strong> No address at all</p>
            </div>
            <div class="flex items-start gap-3 bg-error/5 border-l-4 border-error p-4 rounded md:col-span-2">
              <Icon name="lucide:x" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
              <p class="text-navy-900"><strong>NOT Acceptable:</strong> Fake or placeholder address</p>
            </div>
          </div>

          <AlertBox type="warning" title="Why This Matters">
            The CAN-SPAM Act requires a physical address. Payment processors verify this. Using a fake address is fraud.
          </AlertBox>
        </ContentCard>

        <!-- SECTION 8: Contact Information Requirements -->
        <ContentCard>
          <SectionHeader :number="8" title="Contact Information Requirements" />

          <p class="text-charcoal-600 text-lg mb-6">
            You must provide multiple ways for customers to reach you:
          </p>

          <div class="overflow-x-auto">
            <table class="w-full border-collapse">
              <thead>
                <tr class="bg-surface-tertiary">
                  <th class="border border-border p-4 text-left font-bold text-navy-900">Contact Method</th>
                  <th class="border border-border p-4 text-left font-bold text-navy-900">Requirement</th>
                  <th class="border border-border p-4 text-left font-bold text-navy-900">Best Practice</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-border p-4 text-navy-900"><strong>Email</strong></td>
                  <td class="border border-border p-4 text-charcoal-600">Required - Must be monitored</td>
                  <td class="border border-border p-4 text-charcoal-600">support@yourdomain.com - respond within 24 hours</td>
                </tr>
                <tr class="bg-surface-tertiary/50">
                  <td class="border border-border p-4 text-navy-900"><strong>Phone</strong></td>
                  <td class="border border-border p-4 text-charcoal-600">Highly recommended</td>
                  <td class="border border-border p-4 text-charcoal-600">Toll-free number, list business hours</td>
                </tr>
                <tr>
                  <td class="border border-border p-4 text-navy-900"><strong>Physical Address</strong></td>
                  <td class="border border-border p-4 text-charcoal-600">Required by law</td>
                  <td class="border border-border p-4 text-charcoal-600">Real street address where you can receive mail</td>
                </tr>
                <tr class="bg-surface-tertiary/50">
                  <td class="border border-border p-4 text-navy-900"><strong>Contact Form</strong></td>
                  <td class="border border-border p-4 text-charcoal-600">Optional but helpful</td>
                  <td class="border border-border p-4 text-charcoal-600">Reduces spam, easier for customers</td>
                </tr>
                <tr>
                  <td class="border border-border p-4 text-navy-900"><strong>Business Hours</strong></td>
                  <td class="border border-border p-4 text-charcoal-600">Recommended</td>
                  <td class="border border-border p-4 text-charcoal-600">Set expectations for response times</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ContentCard>

        <!-- SECTION 9: Common Compliance Mistakes -->
        <ContentCard>
          <SectionHeader :number="9" title="Common Compliance Mistakes" />

          <div class="bg-error/5 border-2 border-error/30 rounded-lg p-4 mb-6">
            <p class="font-bold text-error">These Mistakes Will Get Your Account Suspended:</p>
          </div>

          <div class="grid md:grid-cols-2 gap-3">
            <div class="flex items-start gap-3 bg-error/5 border-l-4 border-error p-4">
              <Icon name="lucide:x" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
              <p class="text-navy-900"><strong>No Footer on Upsell Pages:</strong> Every page needs full footer, not just main pages</p>
            </div>
            <div class="flex items-start gap-3 bg-error/5 border-l-4 border-error p-4">
              <Icon name="lucide:x" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
              <p class="text-navy-900"><strong>Generic/Template Policies:</strong> Copy-paste policies that don't match your business</p>
            </div>
            <div class="flex items-start gap-3 bg-error/5 border-l-4 border-error p-4">
              <Icon name="lucide:x" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
              <p class="text-navy-900"><strong>Broken Policy Links:</strong> Links that 404 or lead nowhere</p>
            </div>
            <div class="flex items-start gap-3 bg-error/5 border-l-4 border-error p-4">
              <Icon name="lucide:x" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
              <p class="text-navy-900"><strong>Missing FDA Disclaimer:</strong> Required for ALL health/supplement products</p>
            </div>
            <div class="flex items-start gap-3 bg-error/5 border-l-4 border-error p-4">
              <Icon name="lucide:x" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
              <p class="text-navy-900"><strong>No Physical Address:</strong> P.O. Box only or no address at all</p>
            </div>
            <div class="flex items-start gap-3 bg-error/5 border-l-4 border-error p-4">
              <Icon name="lucide:x" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
              <p class="text-navy-900"><strong>Fake Contact Info:</strong> Email or phone that doesn't work</p>
            </div>
            <div class="flex items-start gap-3 bg-error/5 border-l-4 border-error p-4">
              <Icon name="lucide:x" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
              <p class="text-navy-900"><strong>No Results Disclaimer:</strong> Using testimonials without proper disclosure</p>
            </div>
            <div class="flex items-start gap-3 bg-error/5 border-l-4 border-error p-4">
              <Icon name="lucide:x" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
              <p class="text-navy-900"><strong>Outdated Copyright:</strong> Using wrong year or wrong company name</p>
            </div>
            <div class="flex items-start gap-3 bg-error/5 border-l-4 border-error p-4">
              <Icon name="lucide:x" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
              <p class="text-navy-900"><strong>Hidden Disclaimers:</strong> Tiny text or disclaimers users can't find</p>
            </div>
            <div class="flex items-start gap-3 bg-error/5 border-l-4 border-error p-4">
              <Icon name="lucide:x" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
              <p class="text-navy-900"><strong>Inconsistent Information:</strong> Different addresses/contact info on different pages</p>
            </div>
          </div>
        </ContentCard>

        <!-- CONSEQUENCES OF NON-COMPLIANCE -->
        <div id="consequences" class="bg-navy-800 rounded-lg p-8 mb-8 text-white">
          <h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
            <Icon name="lucide:alert-triangle" class="w-7 h-7 text-error" />
            Consequences of Non-Compliance
          </h3>

          <div class="space-y-4">
            <div class="bg-white/10 rounded-lg p-4 border-l-4 border-error">
              <p class="font-bold mb-1">Account Suspension:</p>
              <p class="text-white/80">BuyGoods, ClickBank, and other platforms will immediately suspend your account if required elements are missing.</p>
            </div>

            <div class="bg-white/10 rounded-lg p-4 border-l-4 border-error">
              <p class="font-bold mb-1">Payment Holds:</p>
              <p class="text-white/80">Payment processors can freeze your funds (sometimes permanently) for compliance violations.</p>
            </div>

            <div class="bg-white/10 rounded-lg p-4 border-l-4 border-error">
              <p class="font-bold mb-1">FTC Fines:</p>
              <p class="text-white/80">Federal Trade Commission can fine companies $10,000-$50,000+ per violation for missing disclosures.</p>
            </div>

            <div class="bg-white/10 rounded-lg p-4 border-l-4 border-error">
              <p class="font-bold mb-1">Legal Liability:</p>
              <p class="text-white/80">Customers can sue for false advertising, fraud, or misrepresentation if disclosures are missing.</p>
            </div>

            <div class="bg-white/10 rounded-lg p-4 border-l-4 border-error">
              <p class="font-bold mb-1">Permanent Bans:</p>
              <p class="text-white/80">Major payment processors share violation data. One ban can blacklist you across all platforms.</p>
            </div>

            <div class="bg-white/10 rounded-lg p-4 border-l-4 border-error">
              <p class="font-bold mb-1">Chargebacks:</p>
              <p class="text-white/80">Missing policies increase chargebacks. High chargeback rates = account termination.</p>
            </div>

            <div class="bg-white/10 rounded-lg p-4 border-l-4 border-error">
              <p class="font-bold mb-1">State Attorney General Actions:</p>
              <p class="text-white/80">States actively pursue companies with inadequate consumer protections.</p>
            </div>
          </div>
        </div>

        <!-- SECTION 10: Implementation Checklist -->
        <ContentCard>
          <SectionHeader :number="10" title="Implementation Checklist" />

          <p class="text-charcoal-600 text-lg mb-6">
            Follow these steps to ensure full compliance:
          </p>

          <div class="grid md:grid-cols-2 gap-3">
            <div class="flex items-start gap-3 bg-success/5 border-l-4 border-success p-4">
              <Icon name="lucide:check" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <p class="text-navy-900"><strong>Step 1:</strong> Create complete Privacy Policy (use lawyer or quality template service)</p>
            </div>
            <div class="flex items-start gap-3 bg-success/5 border-l-4 border-success p-4">
              <Icon name="lucide:check" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <p class="text-navy-900"><strong>Step 2:</strong> Create complete Terms & Conditions document</p>
            </div>
            <div class="flex items-start gap-3 bg-success/5 border-l-4 border-success p-4">
              <Icon name="lucide:check" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <p class="text-navy-900"><strong>Step 3:</strong> Create detailed Refund Policy matching your actual policy</p>
            </div>
            <div class="flex items-start gap-3 bg-success/5 border-l-4 border-success p-4">
              <Icon name="lucide:check" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <p class="text-navy-900"><strong>Step 4:</strong> Set up dedicated contact page with all information</p>
            </div>
            <div class="flex items-start gap-3 bg-success/5 border-l-4 border-success p-4">
              <Icon name="lucide:check" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <p class="text-navy-900"><strong>Step 5:</strong> Add footer to EVERY page (VSL, checkout, upsells, downsells, thank you)</p>
            </div>
            <div class="flex items-start gap-3 bg-success/5 border-l-4 border-success p-4">
              <Icon name="lucide:check" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <p class="text-navy-900"><strong>Step 6:</strong> Include FDA disclaimer if selling supplements/health products</p>
            </div>
            <div class="flex items-start gap-3 bg-success/5 border-l-4 border-success p-4">
              <Icon name="lucide:check" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <p class="text-navy-900"><strong>Step 7:</strong> Add results disclaimer near all testimonials and claims</p>
            </div>
            <div class="flex items-start gap-3 bg-success/5 border-l-4 border-success p-4">
              <Icon name="lucide:check" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <p class="text-navy-900"><strong>Step 8:</strong> Verify all links work and go to correct pages</p>
            </div>
            <div class="flex items-start gap-3 bg-success/5 border-l-4 border-success p-4">
              <Icon name="lucide:check" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <p class="text-navy-900"><strong>Step 9:</strong> Test footer displays properly on mobile devices</p>
            </div>
            <div class="flex items-start gap-3 bg-success/5 border-l-4 border-success p-4">
              <Icon name="lucide:check" class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <p class="text-navy-900"><strong>Step 10:</strong> Have legal professional review before launch (recommended)</p>
            </div>
          </div>
        </ContentCard>

        <!-- SECTION 11: Final Critical Reminders -->
        <ContentCard class="border-2 border-error">
          <SectionHeader :number="11" title="Final Critical Reminders" />

          <div class="bg-error/5 border-2 border-error/30 rounded-lg p-4 mb-6">
            <p class="font-bold text-error">DO NOT SKIP THIS:</p>
            <p class="text-navy-900">Legal compliance is not optional and not something to "fix later." Get it right from day one.</p>
          </div>

          <div class="grid md:grid-cols-2 gap-3 mb-8">
            <div class="flex items-start gap-3 bg-error/5 border-l-4 border-error p-4">
              <Icon name="lucide:alert-circle" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
              <p class="text-navy-900"><strong>Every Page Needs Footer:</strong> VSL, checkout, all upsells, all downsells, thank you page - no exceptions</p>
            </div>
            <div class="flex items-start gap-3 bg-error/5 border-l-4 border-error p-4">
              <Icon name="lucide:alert-circle" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
              <p class="text-navy-900"><strong>Links Must Work:</strong> Test every link. Broken policy links = compliance violation</p>
            </div>
            <div class="flex items-start gap-3 bg-error/5 border-l-4 border-error p-4">
              <Icon name="lucide:alert-circle" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
              <p class="text-navy-900"><strong>Keep Current:</strong> Update copyright year, review policies annually</p>
            </div>
            <div class="flex items-start gap-3 bg-error/5 border-l-4 border-error p-4">
              <Icon name="lucide:alert-circle" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
              <p class="text-navy-900"><strong>Match Your Practices:</strong> Policies must reflect what you actually do, not generic templates</p>
            </div>
            <div class="flex items-start gap-3 bg-error/5 border-l-4 border-error p-4">
              <Icon name="lucide:alert-circle" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
              <p class="text-navy-900"><strong>Get Legal Review:</strong> Invest in a lawyer reviewing your policies. Cheaper than FTC fines.</p>
            </div>
            <div class="flex items-start gap-3 bg-error/5 border-l-4 border-error p-4">
              <Icon name="lucide:alert-circle" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
              <p class="text-navy-900"><strong>Monitor Changes:</strong> FTC and FDA update requirements. Stay informed.</p>
            </div>
            <div class="flex items-start gap-3 bg-error/5 border-l-4 border-error p-4 md:col-span-2">
              <Icon name="lucide:alert-circle" class="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
              <p class="text-navy-900"><strong>Document Everything:</strong> Keep records of when policies were posted and updated</p>
            </div>
          </div>

          <div class="bg-navy-800 rounded-lg p-6 text-white text-center">
            <h3 class="text-xl font-bold mb-3">Final Warning</h3>
            <p class="text-white/80">
              Thousands of vendors lose their accounts every year due to missing compliance elements. Don't let it happen to you. Include EVERY required element on EVERY page before launching.
            </p>
          </div>
        </ContentCard>

        <!-- Quick Reference Cheatsheet -->
        <div class="bg-navy-800 rounded-lg p-8 mb-8 text-white">
          <h3 class="text-xl font-bold mb-6 flex items-center gap-3">
            <Icon name="lucide:bookmark" class="w-6 h-6" />
            Quick Reference: Footer & Legal Cheatsheet
          </h3>

          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-semibold text-white/90 mb-3">Required Legal Pages</h4>
              <ul class="space-y-2 text-white/70 text-sm">
                <li class="flex items-center gap-2">
                  <Icon name="lucide:check" class="w-4 h-4 text-success" />
                  Privacy Policy
                </li>
                <li class="flex items-center gap-2">
                  <Icon name="lucide:check" class="w-4 h-4 text-success" />
                  Terms & Conditions
                </li>
                <li class="flex items-center gap-2">
                  <Icon name="lucide:check" class="w-4 h-4 text-success" />
                  Refund Policy
                </li>
                <li class="flex items-center gap-2">
                  <Icon name="lucide:check" class="w-4 h-4 text-success" />
                  Contact Page
                </li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-white/90 mb-3">Required Disclaimers</h4>
              <ul class="space-y-2 text-white/70 text-sm">
                <li class="flex items-center gap-2">
                  <Icon name="lucide:check" class="w-4 h-4 text-success" />
                  FDA Disclaimer (supplements)
                </li>
                <li class="flex items-center gap-2">
                  <Icon name="lucide:check" class="w-4 h-4 text-success" />
                  Results Disclaimer
                </li>
                <li class="flex items-center gap-2">
                  <Icon name="lucide:check" class="w-4 h-4 text-success" />
                  Medical Disclaimer
                </li>
                <li class="flex items-center gap-2">
                  <Icon name="lucide:check" class="w-4 h-4 text-success" />
                  Affiliate Disclosure
                </li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-white/90 mb-3">Contact Requirements</h4>
              <ul class="space-y-2 text-white/70 text-sm">
                <li class="flex items-center gap-2">
                  <Icon name="lucide:check" class="w-4 h-4 text-success" />
                  Email address
                </li>
                <li class="flex items-center gap-2">
                  <Icon name="lucide:check" class="w-4 h-4 text-success" />
                  Phone number
                </li>
                <li class="flex items-center gap-2">
                  <Icon name="lucide:check" class="w-4 h-4 text-success" />
                  Physical street address
                </li>
                <li class="flex items-center gap-2">
                  <Icon name="lucide:check" class="w-4 h-4 text-success" />
                  Copyright notice
                </li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-white/90 mb-3">Consequences of Non-Compliance</h4>
              <ul class="space-y-2 text-white/70 text-sm">
                <li class="flex items-center gap-2">
                  <Icon name="lucide:x" class="w-4 h-4 text-error" />
                  Account suspension
                </li>
                <li class="flex items-center gap-2">
                  <Icon name="lucide:x" class="w-4 h-4 text-error" />
                  Payment holds/freezes
                </li>
                <li class="flex items-center gap-2">
                  <Icon name="lucide:x" class="w-4 h-4 text-error" />
                  FTC fines ($10K-$50K+)
                </li>
                <li class="flex items-center gap-2">
                  <Icon name="lucide:x" class="w-4 h-4 text-error" />
                  Permanent platform bans
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Navigation -->
        <NavigationButtons
          prev-to="/step7-thankyou"
          prev-text="Back: Thank You Page"
          next-to="/"
          next-text="Back to Overview"
        />
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
