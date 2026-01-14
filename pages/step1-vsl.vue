<template>
  <div>
    <Navbar :breadcrumbs="['Step 1: VSL Page']" />
    <Sidebar :current-step="1" />

    <div class="page-content">
      <!-- Enhanced Header -->
      <div class="header">
        <!-- Logo Shadow (larger, blurred, behind) -->
        <img src="/bg-logo-white.png" alt="" class="logo-shadow" aria-hidden="true" />
        <!-- Logo Main (visible, on top) -->
        <img src="/bg-logo-white.png" alt="" class="logo-main" aria-hidden="true" />
        <div class="header-content">
          <div class="step-badge">STEP 1 OF 7</div>
          <h1>VSL Page (Video Sales Letter)</h1>
          <p>The foundation of your funnel - Present your product through a compelling video presentation</p>
        </div>

        <!-- Quick Stats Bar -->
        <div class="flex flex-wrap justify-center gap-6 mt-8">
          <div class="bg-white/10 backdrop-blur px-4 py-2 rounded-lg flex items-center gap-2">
            <Icon name="lucide:eye" class="w-4 h-4" />
            <span class="text-sm">2-5% Conversion Rate</span>
          </div>
          <div class="bg-white/10 backdrop-blur px-4 py-2 rounded-lg flex items-center gap-2">
            <Icon name="lucide:clock" class="w-4 h-4" />
            <span class="text-sm">~50 Min Video Length</span>
          </div>
          <div class="bg-white/10 backdrop-blur px-4 py-2 rounded-lg flex items-center gap-2">
            <Icon name="lucide:target" class="w-4 h-4" />
            <span class="text-sm">40-60% Watch Rate</span>
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
            <a href="#script" class="text-xs px-3 py-1.5 bg-surface-tertiary hover:bg-accent hover:text-white rounded-md transition-colors">Script Template</a>
            <a href="#psychology" class="text-xs px-3 py-1.5 bg-surface-tertiary hover:bg-accent hover:text-white rounded-md transition-colors">Psychology</a>
            <a href="#specs" class="text-xs px-3 py-1.5 bg-surface-tertiary hover:bg-accent hover:text-white rounded-md transition-colors">Tech Specs</a>
            <a href="#calculator" class="text-xs px-3 py-1.5 bg-surface-tertiary hover:bg-accent hover:text-white rounded-md transition-colors">Calculator</a>
            <a href="#metrics" class="text-xs px-3 py-1.5 bg-surface-tertiary hover:bg-accent hover:text-white rounded-md transition-colors">Metrics</a>
          </div>
        </div>

        <!-- Section 1: What is a VSL Page -->
        <ContentCard id="overview">
          <SectionHeader :number="1" title="What is a VSL Page?" />
          <p class="text-charcoal-600 leading-relaxed mb-4">
            A Video Sales Letter (VSL) page is the entry point of your sales funnel where prospects watch a ~50 minute video presentation about your product. This page is designed to educate, build desire, and ultimately convince viewers to purchase your product.
          </p>
          <p class="text-charcoal-600 leading-relaxed mb-6">
            The VSL format works because it allows you to tell a complete story, build emotional connection, present scientific evidence, and overcome objections - all before asking for the sale.
          </p>

          <!-- Key Benefits Grid -->
          <div class="grid md:grid-cols-3 gap-4 mb-6">
            <div class="bg-success-light border border-success/20 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:trending-up" class="w-5 h-5 text-success" />
                <span class="font-semibold text-navy-900">Higher Conversion</span>
              </div>
              <p class="text-sm text-charcoal-600">2-5% conversion vs 0.5-1% for text-only pages</p>
            </div>
            <div class="bg-accent-light border border-accent/20 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:heart" class="w-5 h-5 text-accent" />
                <span class="font-semibold text-navy-900">Emotional Connection</span>
              </div>
              <p class="text-sm text-charcoal-600">Video builds trust faster than text alone</p>
            </div>
            <div class="bg-warning-light border border-warning/20 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:shield-check" class="w-5 h-5 text-warning" />
                <span class="font-semibold text-navy-900">Objection Handling</span>
              </div>
              <p class="text-sm text-charcoal-600">Address concerns before they arise</p>
            </div>
          </div>

          <AlertBox variant="success" title="Why VSL Works">
            Video presentations convert 2-5% of viewers into buyers, which is significantly higher than text-only sales pages. The extended format allows you to build trust and thoroughly present your value proposition.
          </AlertBox>
        </ContentCard>

        <!-- Section 2: Visual Structure with Preview Tabs -->
        <ContentCard id="structure">
          <SectionHeader :number="2" title="Visual Structure" />
          <p class="text-charcoal-600 leading-relaxed mb-6">
            Here's how your VSL page should be structured. Toggle between desktop and mobile views:
          </p>

          <!-- Device Toggle -->
          <div class="flex gap-2 mb-4">
            <button
              @click="activeDevice = 'desktop'"
              :class="['px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2', activeDevice === 'desktop' ? 'bg-accent text-white' : 'bg-surface-tertiary text-charcoal-600 hover:bg-surface-secondary']"
            >
              <Icon name="lucide:monitor" class="w-4 h-4" />
              Desktop
            </button>
            <button
              @click="activeDevice = 'mobile'"
              :class="['px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2', activeDevice === 'mobile' ? 'bg-accent text-white' : 'bg-surface-tertiary text-charcoal-600 hover:bg-surface-secondary']"
            >
              <Icon name="lucide:smartphone" class="w-4 h-4" />
              Mobile
            </button>
          </div>

          <!-- Desktop Preview -->
          <div v-if="activeDevice === 'desktop'" class="bg-surface-tertiary border border-border rounded-lg p-6">
            <h3 class="text-navy-900 font-semibold text-lg text-center mb-6">Desktop Layout Preview</h3>

            <!-- Headline Preview -->
            <div class="text-center mb-6">
              <div class="text-2xl font-bold text-navy-900 mb-2">
                Discover the Secret to [Desired Outcome]
              </div>
              <div class="text-charcoal-500">
                Watch this short presentation to learn how [Product Name] can help you...
              </div>
            </div>

            <!-- Video Placeholder -->
            <div class="bg-navy-800 rounded-lg p-16 mb-6 text-center relative">
              <div class="absolute top-3 left-3 bg-error text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                LIVE
              </div>
              <div class="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded">
                2,847 watching
              </div>
              <Icon name="lucide:play-circle" class="w-16 h-16 text-white/80 mx-auto mb-2" />
              <div class="text-white font-medium mb-2">VSL VIDEO PLAYER</div>
              <div class="text-slate-400 text-sm">~50 minute sales presentation</div>
            </div>

            <!-- Button Timing Note -->
            <div class="mb-6 p-4 bg-warning-light rounded-lg border border-warning flex items-center gap-3">
              <Icon name="lucide:clock" class="w-5 h-5 text-warning flex-shrink-0" />
              <p class="text-charcoal-600 text-sm">
                <strong>Important:</strong> Buy buttons appear ONLY after video completes (~85-90% mark)
              </p>
            </div>

            <!-- Product Packages -->
            <div class="mt-6">
              <div class="text-center font-medium text-charcoal-500 mb-4 text-sm">After video ends:</div>
              <div class="flex gap-4 justify-center mb-6 flex-wrap">
                <div class="bg-white border border-border rounded-lg p-4 w-44 text-center">
                  <div class="bg-surface-tertiary h-20 flex items-center justify-center rounded mb-2">
                    <Icon name="lucide:package" class="w-8 h-8 text-charcoal-400" />
                  </div>
                  <div class="font-semibold text-navy-900 text-sm">1 Bottle</div>
                  <div class="text-charcoal-500 text-xs mb-2">30-Day Supply</div>
                  <div class="text-lg font-bold text-navy-900">$69</div>
                </div>

                <div class="bg-accent-light border-2 border-accent rounded-lg p-4 w-44 text-center relative">
                  <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white px-3 py-0.5 rounded text-xs font-medium">BEST VALUE</div>
                  <div class="bg-surface-tertiary h-20 flex items-center justify-center rounded mb-2">
                    <Icon name="lucide:packages" class="w-8 h-8 text-accent" />
                  </div>
                  <div class="font-semibold text-navy-900 text-sm">3 Bottles</div>
                  <div class="text-charcoal-500 text-xs mb-2">90-Day Supply</div>
                  <div class="text-lg font-bold text-accent">$147</div>
                </div>

                <div class="bg-white border border-border rounded-lg p-4 w-44 text-center">
                  <div class="bg-surface-tertiary h-20 flex items-center justify-center rounded mb-2">
                    <Icon name="lucide:warehouse" class="w-8 h-8 text-charcoal-400" />
                  </div>
                  <div class="font-semibold text-navy-900 text-sm">6 Bottles</div>
                  <div class="text-charcoal-500 text-xs mb-2">180-Day Supply</div>
                  <div class="text-lg font-bold text-navy-900">$234</div>
                </div>
              </div>

              <!-- CTA Button -->
              <div class="text-center mb-6">
                <div class="inline-block bg-accent text-white px-8 py-3 rounded-md font-medium text-sm">
                  <Icon name="lucide:shopping-cart" class="w-4 h-4 inline mr-2" />
                  Yes! I Want [Product Name]
                </div>
              </div>
            </div>
          </div>

          <!-- Mobile Preview -->
          <div v-else class="flex justify-center">
            <div class="bg-surface-tertiary border-2 border-navy-800 rounded-3xl p-3 w-72">
              <div class="bg-white rounded-2xl overflow-hidden">
                <!-- Mobile Status Bar -->
                <div class="bg-navy-800 text-white text-xs py-1 px-3 flex justify-between">
                  <span>9:41</span>
                  <div class="flex gap-1">
                    <Icon name="lucide:signal" class="w-3 h-3" />
                    <Icon name="lucide:wifi" class="w-3 h-3" />
                    <Icon name="lucide:battery-full" class="w-3 h-3" />
                  </div>
                </div>

                <!-- Mobile Content -->
                <div class="p-4">
                  <div class="text-center mb-4">
                    <div class="text-sm font-bold text-navy-900 mb-1">Discover the Secret...</div>
                    <div class="text-xs text-charcoal-500">Watch this presentation</div>
                  </div>

                  <!-- Mobile Video -->
                  <div class="bg-navy-800 rounded-lg p-8 mb-4 text-center">
                    <Icon name="lucide:play-circle" class="w-10 h-10 text-white/80 mx-auto" />
                  </div>

                  <!-- Mobile Packages (Stacked) -->
                  <div class="space-y-2 mb-4">
                    <div class="bg-accent-light border border-accent rounded p-2 text-center">
                      <div class="text-xs font-semibold text-navy-900">3 Bottles - Best Value</div>
                      <div class="text-sm font-bold text-accent">$147</div>
                    </div>
                    <div class="bg-surface-tertiary border border-border rounded p-2 text-center">
                      <div class="text-xs text-charcoal-600">1 Bottle - $69</div>
                    </div>
                    <div class="bg-surface-tertiary border border-border rounded p-2 text-center">
                      <div class="text-xs text-charcoal-600">6 Bottles - $234</div>
                    </div>
                  </div>

                  <div class="bg-accent text-white text-center py-2 rounded text-xs font-medium">
                    Order Now
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContentCard>

        <!-- Section 3: Required Elements Checklist -->
        <ContentCard id="checklist">
          <SectionHeader :number="3" title="Required Elements Checklist" />
          <p class="text-charcoal-600 leading-relaxed mb-6">
            Every VSL page must include these essential elements:
          </p>

          <div class="grid md:grid-cols-2 gap-3">
            <ChecklistItem label="Compelling Headline" text="Promise a specific benefit or solution" />
            <ChecklistItem label="Video Player" text="Prominently placed at top of page, auto-play enabled" />
            <ChecklistItem label="Timed Buy Buttons" text="Appear only after video completes (prevents skipping)" />
            <ChecklistItem label="Product Visuals" text="High-quality images of your product bottles/packages" />
            <ChecklistItem label="Package Options" text="Display 1, 3, and 6 bottle options clearly" />
            <ChecklistItem label="Trust Indicators" text="Money-back guarantee, secure checkout badges" />
            <ChecklistItem label="Scientific References" text="Studies, trials, expert endorsements" />
            <ChecklistItem label="Scarcity/Urgency" text="Limited stock or time-based offers (optional but effective)" />
          </div>

          <!-- Pro Tip -->
          <div class="mt-6 bg-accent-light border border-accent/20 rounded-lg p-4">
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="lucide:lightbulb" class="w-4 h-4 text-white" />
              </div>
              <div>
                <strong class="text-navy-900">Pro Tip:</strong>
                <p class="text-charcoal-600 text-sm mt-1">Add a "sound on" reminder near the video player. Many users browse with sound off and may miss your entire presentation.</p>
              </div>
            </div>
          </div>
        </ContentCard>

        <!-- Section 4: VSL Script Template -->
        <ContentCard id="script">
          <SectionHeader :number="4" title="VSL Script Template" />
          <p class="text-charcoal-600 leading-relaxed mb-6">
            Your 50-minute video should follow this proven three-act structure. Click each section to expand:
          </p>

          <!-- Act 1 -->
          <div class="border border-border rounded-lg mb-4 overflow-hidden">
            <button
              @click="expandedAct = expandedAct === 1 ? null : 1"
              class="w-full bg-surface-tertiary p-4 flex items-center justify-between hover:bg-surface-secondary transition-colors"
            >
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-error rounded-lg flex items-center justify-center">
                  <span class="text-white font-bold">1</span>
                </div>
                <div class="text-left">
                  <div class="font-semibold text-navy-900">Act 1: Hook & Problem</div>
                  <div class="text-sm text-charcoal-500">Minutes 0-15 (30% of video)</div>
                </div>
              </div>
              <Icon :name="expandedAct === 1 ? 'lucide:chevron-up' : 'lucide:chevron-down'" class="w-5 h-5 text-charcoal-500" />
            </button>
            <div v-if="expandedAct === 1" class="p-4 bg-white border-t border-border">
              <div class="space-y-3">
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 bg-error/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="lucide:zap" class="w-3 h-3 text-error" />
                  </div>
                  <div>
                    <strong class="text-navy-900">Open with a Pattern Interrupt</strong>
                    <p class="text-sm text-charcoal-600">"What if everything you've been told about [topic] is wrong?"</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 bg-error/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="lucide:target" class="w-3 h-3 text-error" />
                  </div>
                  <div>
                    <strong class="text-navy-900">Identify Their Pain</strong>
                    <p class="text-sm text-charcoal-600">Describe exactly what they're experiencing. Be specific.</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 bg-error/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="lucide:flame" class="w-3 h-3 text-error" />
                  </div>
                  <div>
                    <strong class="text-navy-900">Agitate the Problem</strong>
                    <p class="text-sm text-charcoal-600">Show them what happens if they don't solve this problem.</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 bg-error/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="lucide:sparkles" class="w-3 h-3 text-error" />
                  </div>
                  <div>
                    <strong class="text-navy-900">Promise a Solution</strong>
                    <p class="text-sm text-charcoal-600">"Stay with me, because I'm about to reveal..."</p>
                  </div>
                </div>
              </div>

              <!-- Script Example -->
              <div class="mt-4 p-4 bg-navy-800 rounded-lg">
                <div class="flex items-center gap-2 mb-2">
                  <Icon name="lucide:file-text" class="w-4 h-4 text-accent" />
                  <span class="text-white text-sm font-medium">Example Script Opening</span>
                </div>
                <p class="text-slate-300 text-sm italic">
                  "If you've ever felt like no matter what you try, you just can't seem to [achieve desired outcome]... if you've spent hundreds, maybe even thousands of dollars on [common solutions] that promised the world but delivered nothing... then the next 10 minutes could change everything."
                </p>
              </div>
            </div>
          </div>

          <!-- Act 2 -->
          <div class="border border-border rounded-lg mb-4 overflow-hidden">
            <button
              @click="expandedAct = expandedAct === 2 ? null : 2"
              class="w-full bg-surface-tertiary p-4 flex items-center justify-between hover:bg-surface-secondary transition-colors"
            >
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <span class="text-white font-bold">2</span>
                </div>
                <div class="text-left">
                  <div class="font-semibold text-navy-900">Act 2: Solution & Mechanism</div>
                  <div class="text-sm text-charcoal-500">Minutes 15-35 (40% of video)</div>
                </div>
              </div>
              <Icon :name="expandedAct === 2 ? 'lucide:chevron-up' : 'lucide:chevron-down'" class="w-5 h-5 text-charcoal-500" />
            </button>
            <div v-if="expandedAct === 2" class="p-4 bg-white border-t border-border">
              <div class="space-y-3">
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 bg-accent/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="lucide:lightbulb" class="w-3 h-3 text-accent" />
                  </div>
                  <div>
                    <strong class="text-navy-900">Introduce Your Solution</strong>
                    <p class="text-sm text-charcoal-600">Present your product as the answer they've been searching for.</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 bg-accent/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="lucide:cog" class="w-3 h-3 text-accent" />
                  </div>
                  <div>
                    <strong class="text-navy-900">Explain the Unique Mechanism</strong>
                    <p class="text-sm text-charcoal-600">What makes your product different? Why does it work when others fail?</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 bg-accent/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="lucide:flask-conical" class="w-3 h-3 text-accent" />
                  </div>
                  <div>
                    <strong class="text-navy-900">Present Scientific Evidence</strong>
                    <p class="text-sm text-charcoal-600">Show studies, research, clinical trials that support your claims.</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 bg-accent/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="lucide:users" class="w-3 h-3 text-accent" />
                  </div>
                  <div>
                    <strong class="text-navy-900">Show Testimonials</strong>
                    <p class="text-sm text-charcoal-600">Real people with real results. Include before/after if possible.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Act 3 -->
          <div class="border border-border rounded-lg mb-4 overflow-hidden">
            <button
              @click="expandedAct = expandedAct === 3 ? null : 3"
              class="w-full bg-surface-tertiary p-4 flex items-center justify-between hover:bg-surface-secondary transition-colors"
            >
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-success rounded-lg flex items-center justify-center">
                  <span class="text-white font-bold">3</span>
                </div>
                <div class="text-left">
                  <div class="font-semibold text-navy-900">Act 3: Offer & Close</div>
                  <div class="text-sm text-charcoal-500">Minutes 35-50 (30% of video)</div>
                </div>
              </div>
              <Icon :name="expandedAct === 3 ? 'lucide:chevron-up' : 'lucide:chevron-down'" class="w-5 h-5 text-charcoal-500" />
            </button>
            <div v-if="expandedAct === 3" class="p-4 bg-white border-t border-border">
              <div class="space-y-3">
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 bg-success/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="lucide:tag" class="w-3 h-3 text-success" />
                  </div>
                  <div>
                    <strong class="text-navy-900">Present Pricing & Packages</strong>
                    <p class="text-sm text-charcoal-600">Always show 3 options. Anchor with highest price first.</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 bg-success/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="lucide:layers" class="w-3 h-3 text-success" />
                  </div>
                  <div>
                    <strong class="text-navy-900">Stack the Value</strong>
                    <p class="text-sm text-charcoal-600">Add bonuses, guarantees, free shipping. Make it irresistible.</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 bg-success/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="lucide:timer" class="w-3 h-3 text-success" />
                  </div>
                  <div>
                    <strong class="text-navy-900">Create Urgency</strong>
                    <p class="text-sm text-charcoal-600">"This special pricing is only available today..."</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 bg-success/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="lucide:mouse-pointer-click" class="w-3 h-3 text-success" />
                  </div>
                  <div>
                    <strong class="text-navy-900">Clear Call-to-Action</strong>
                    <p class="text-sm text-charcoal-600">"Click the button below to claim your [product] now."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContentCard>

        <!-- Section 5: Psychology of VSL -->
        <ContentCard id="psychology">
          <SectionHeader :number="5" title="Psychology Behind High-Converting VSLs" />
          <p class="text-charcoal-600 leading-relaxed mb-6">
            Understanding these psychological principles will help you create more persuasive videos:
          </p>

          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-surface-tertiary border border-border rounded-lg p-4">
              <div class="flex items-center gap-2 mb-3">
                <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Icon name="lucide:brain" class="w-4 h-4 text-purple-600" />
                </div>
                <strong class="text-navy-900">Curiosity Gap</strong>
              </div>
              <p class="text-sm text-charcoal-600">Open loops in your script that make viewers want to stay to find out the answer. "In just a moment, I'll reveal..."</p>
            </div>

            <div class="bg-surface-tertiary border border-border rounded-lg p-4">
              <div class="flex items-center gap-2 mb-3">
                <div class="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <Icon name="lucide:heart-pulse" class="w-4 h-4 text-red-600" />
                </div>
                <strong class="text-navy-900">Pain Amplification</strong>
              </div>
              <p class="text-sm text-charcoal-600">Help viewers feel the emotional weight of their problem before presenting the solution. Make them want change.</p>
            </div>

            <div class="bg-surface-tertiary border border-border rounded-lg p-4">
              <div class="flex items-center gap-2 mb-3">
                <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Icon name="lucide:users" class="w-4 h-4 text-blue-600" />
                </div>
                <strong class="text-navy-900">Social Proof</strong>
              </div>
              <p class="text-sm text-charcoal-600">Show that others like them have succeeded. Testimonials, statistics, endorsements all build trust.</p>
            </div>

            <div class="bg-surface-tertiary border border-border rounded-lg p-4">
              <div class="flex items-center gap-2 mb-3">
                <div class="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Icon name="lucide:shield" class="w-4 h-4 text-orange-600" />
                </div>
                <strong class="text-navy-900">Risk Reversal</strong>
              </div>
              <p class="text-sm text-charcoal-600">Money-back guarantees remove the fear of making a wrong decision. The longer the guarantee, the better.</p>
            </div>

            <div class="bg-surface-tertiary border border-border rounded-lg p-4">
              <div class="flex items-center gap-2 mb-3">
                <div class="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Icon name="lucide:clock" class="w-4 h-4 text-yellow-600" />
                </div>
                <strong class="text-navy-900">Scarcity & Urgency</strong>
              </div>
              <p class="text-sm text-charcoal-600">Limited time offers, limited stock, expiring bonuses all motivate immediate action.</p>
            </div>

            <div class="bg-surface-tertiary border border-border rounded-lg p-4">
              <div class="flex items-center gap-2 mb-3">
                <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Icon name="lucide:gem" class="w-4 h-4 text-green-600" />
                </div>
                <strong class="text-navy-900">Value Anchoring</strong>
              </div>
              <p class="text-sm text-charcoal-600">Present the "real value" first ($500+), then reveal the special price ($69). The contrast makes it feel like a steal.</p>
            </div>
          </div>
        </ContentCard>

        <!-- Section 6: Technical Specifications -->
        <ContentCard id="specs">
          <SectionHeader :number="6" title="Technical Specifications" />

          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="bg-surface-tertiary">
                  <th class="text-left p-3 font-semibold text-navy-900 border-b border-border">Element</th>
                  <th class="text-left p-3 font-semibold text-navy-900 border-b border-border">Specification</th>
                  <th class="text-left p-3 font-semibold text-navy-900 border-b border-border">Priority</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-border">
                  <td class="p-3 font-medium text-navy-800">Video Length</td>
                  <td class="p-3 text-charcoal-600">45-55 minutes optimal</td>
                  <td class="p-3"><span class="bg-error/10 text-error text-xs px-2 py-1 rounded font-medium">Critical</span></td>
                </tr>
                <tr class="border-b border-border">
                  <td class="p-3 font-medium text-navy-800">Video Format</td>
                  <td class="p-3 text-charcoal-600">MP4, hosted on Vimeo/Wistia (not YouTube)</td>
                  <td class="p-3"><span class="bg-error/10 text-error text-xs px-2 py-1 rounded font-medium">Critical</span></td>
                </tr>
                <tr class="border-b border-border">
                  <td class="p-3 font-medium text-navy-800">Button Reveal</td>
                  <td class="p-3 text-charcoal-600">85-90% of video completion</td>
                  <td class="p-3"><span class="bg-error/10 text-error text-xs px-2 py-1 rounded font-medium">Critical</span></td>
                </tr>
                <tr class="border-b border-border">
                  <td class="p-3 font-medium text-navy-800">Page Load Speed</td>
                  <td class="p-3 text-charcoal-600">Under 3 seconds</td>
                  <td class="p-3"><span class="bg-error/10 text-error text-xs px-2 py-1 rounded font-medium">Critical</span></td>
                </tr>
                <tr class="border-b border-border">
                  <td class="p-3 font-medium text-navy-800">Video Resolution</td>
                  <td class="p-3 text-charcoal-600">1080p minimum, 4K preferred</td>
                  <td class="p-3"><span class="bg-warning/10 text-warning text-xs px-2 py-1 rounded font-medium">High</span></td>
                </tr>
                <tr class="border-b border-border">
                  <td class="p-3 font-medium text-navy-800">Audio Quality</td>
                  <td class="p-3 text-charcoal-600">Professional microphone, no background noise</td>
                  <td class="p-3"><span class="bg-warning/10 text-warning text-xs px-2 py-1 rounded font-medium">High</span></td>
                </tr>
                <tr class="border-b border-border">
                  <td class="p-3 font-medium text-navy-800">Mobile Responsive</td>
                  <td class="p-3 text-charcoal-600">Video scales properly, controls accessible</td>
                  <td class="p-3"><span class="bg-error/10 text-error text-xs px-2 py-1 rounded font-medium">Critical</span></td>
                </tr>
                <tr>
                  <td class="p-3 font-medium text-navy-800">Package Options</td>
                  <td class="p-3 text-charcoal-600">Exactly 3 options: Basic, Best Value, Premium</td>
                  <td class="p-3"><span class="bg-warning/10 text-warning text-xs px-2 py-1 rounded font-medium">High</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </ContentCard>

        <!-- Section 7: Revenue Calculator -->
        <ContentCard id="calculator">
          <SectionHeader :number="7" title="VSL Revenue Calculator" />
          <p class="text-charcoal-600 leading-relaxed mb-6">
            Estimate your potential revenue based on traffic and conversion rates:
          </p>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-navy-900 mb-2">Daily Page Views</label>
                <input
                  v-model.number="calculator.pageViews"
                  type="number"
                  class="w-full border border-border rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent focus:border-accent"
                  placeholder="1000"
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-navy-900 mb-2">Video Completion Rate (%)</label>
                <input
                  v-model.number="calculator.completionRate"
                  type="number"
                  class="w-full border border-border rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent focus:border-accent"
                  placeholder="50"
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-navy-900 mb-2">Conversion Rate (%)</label>
                <input
                  v-model.number="calculator.conversionRate"
                  type="number"
                  class="w-full border border-border rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent focus:border-accent"
                  placeholder="3"
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-navy-900 mb-2">Average Order Value ($)</label>
                <input
                  v-model.number="calculator.aov"
                  type="number"
                  class="w-full border border-border rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent focus:border-accent"
                  placeholder="147"
                >
              </div>
            </div>

            <div class="bg-navy-800 rounded-lg p-6 text-white">
              <h4 class="text-lg font-semibold mb-4 flex items-center gap-2">
                <Icon name="lucide:calculator" class="w-5 h-5" />
                Estimated Results
              </h4>
              <div class="space-y-4">
                <div class="flex justify-between items-center pb-3 border-b border-white/20">
                  <span class="text-slate-300">Video Completers</span>
                  <span class="font-bold text-lg">{{ calculatedResults.completers }}/day</span>
                </div>
                <div class="flex justify-between items-center pb-3 border-b border-white/20">
                  <span class="text-slate-300">Daily Sales</span>
                  <span class="font-bold text-lg">{{ calculatedResults.dailySales }}</span>
                </div>
                <div class="flex justify-between items-center pb-3 border-b border-white/20">
                  <span class="text-slate-300">Daily Revenue</span>
                  <span class="font-bold text-lg text-success">${{ calculatedResults.dailyRevenue }}</span>
                </div>
                <div class="flex justify-between items-center pt-2">
                  <span class="text-white font-medium">Monthly Revenue</span>
                  <span class="font-bold text-2xl text-success">${{ calculatedResults.monthlyRevenue }}</span>
                </div>
              </div>
            </div>
          </div>
        </ContentCard>

        <!-- Section 8: Best Practices & Mistakes -->
        <ContentCard>
          <SectionHeader :number="8" title="Best Practices & Common Mistakes" />

          <div class="grid md:grid-cols-2 gap-6">
            <!-- Best Practices -->
            <div>
              <h4 class="font-semibold text-navy-900 mb-4 flex items-center gap-2">
                <Icon name="lucide:check-circle" class="w-5 h-5 text-success" />
                Best Practices
              </h4>
              <div class="space-y-2">
                <ChecklistItem label="Professional Production" text="Invest in good audio/video quality" />
                <ChecklistItem label="Add Captions" text="85% watch without sound initially" />
                <ChecklistItem label="Test Button Timing" text="Try 80%, 85%, 90% completion" />
                <ChecklistItem label="Optimize for Mobile" text="60%+ of traffic is mobile" />
                <ChecklistItem label="A/B Test Headlines" text="Can change conversion by 50%+" />
                <ChecklistItem label="Keep Page Simple" text="No distractions from video" />
              </div>
            </div>

            <!-- Common Mistakes -->
            <div>
              <h4 class="font-semibold text-navy-900 mb-4 flex items-center gap-2">
                <Icon name="lucide:x-circle" class="w-5 h-5 text-error" />
                Common Mistakes
              </h4>
              <div class="space-y-2">
                <ChecklistItem variant="cross" label="Showing Button Early" text="If they can skip to price, they will" />
                <ChecklistItem variant="cross" label="Video Too Long" text="Beyond 60 min, drop-off skyrockets" />
                <ChecklistItem variant="cross" label="No Mobile Testing" text="Broken mobile = 60% revenue lost" />
                <ChecklistItem variant="cross" label="Weak Hook" text="First 30 sec determines if they stay" />
                <ChecklistItem variant="cross" label="Too Many Options" text="More than 3 causes decision paralysis" />
                <ChecklistItem variant="cross" label="Poor Video Quality" text="Signals 'scam' to viewers" />
              </div>
            </div>
          </div>
        </ContentCard>

        <!-- Section 9: Performance Metrics -->
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
                <Icon name="lucide:video" class="w-5 h-5 text-accent" />
                <span class="text-xs bg-success/10 text-success px-2 py-0.5 rounded font-medium">Target: 40-60%</span>
              </div>
              <strong class="text-navy-900 block mb-1">Video Completion</strong>
              <p class="text-charcoal-600 text-sm">Below 30% means your hook needs work</p>
            </div>

            <div class="bg-surface-tertiary rounded-lg p-4 border border-border">
              <div class="flex items-center justify-between mb-3">
                <Icon name="lucide:trending-up" class="w-5 h-5 text-success" />
                <span class="text-xs bg-success/10 text-success px-2 py-0.5 rounded font-medium">Target: 2-5%</span>
              </div>
              <strong class="text-navy-900 block mb-1">Conversion Rate</strong>
              <p class="text-charcoal-600 text-sm">Top performers hit 8-12%</p>
            </div>

            <div class="bg-surface-tertiary rounded-lg p-4 border border-border">
              <div class="flex items-center justify-between mb-3">
                <Icon name="lucide:clock" class="w-5 h-5 text-accent" />
                <span class="text-xs bg-warning/10 text-warning px-2 py-0.5 rounded font-medium">Target: 30-40 min</span>
              </div>
              <strong class="text-navy-900 block mb-1">Avg Watch Time</strong>
              <p class="text-charcoal-600 text-sm">Under 20 min = losing them early</p>
            </div>

            <div class="bg-surface-tertiary rounded-lg p-4 border border-border">
              <div class="flex items-center justify-between mb-3">
                <Icon name="lucide:smartphone" class="w-5 h-5 text-accent" />
                <span class="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded font-medium">60-70% mobile</span>
              </div>
              <strong class="text-navy-900 block mb-1">Mobile Traffic</strong>
              <p class="text-charcoal-600 text-sm">Mobile converts 20-30% lower than desktop</p>
            </div>

            <div class="bg-surface-tertiary rounded-lg p-4 border border-border">
              <div class="flex items-center justify-between mb-3">
                <Icon name="lucide:packages" class="w-5 h-5 text-accent" />
                <span class="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded font-medium">50-60% Best Value</span>
              </div>
              <strong class="text-navy-900 block mb-1">Package Selection</strong>
              <p class="text-charcoal-600 text-sm">Premium 25-30%, Basic 15-20%</p>
            </div>

            <div class="bg-surface-tertiary rounded-lg p-4 border border-border">
              <div class="flex items-center justify-between mb-3">
                <Icon name="lucide:zap" class="w-5 h-5 text-warning" />
                <span class="text-xs bg-error/10 text-error px-2 py-0.5 rounded font-medium">Under 3s</span>
              </div>
              <strong class="text-navy-900 block mb-1">Page Load Speed</strong>
              <p class="text-charcoal-600 text-sm">Every second costs 7% conversion</p>
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
              <div class="text-slate-400 mb-2">Video Length</div>
              <div class="font-semibold">45-55 minutes</div>
            </div>
            <div>
              <div class="text-slate-400 mb-2">Button Reveal</div>
              <div class="font-semibold">85-90% completion</div>
            </div>
            <div>
              <div class="text-slate-400 mb-2">Package Options</div>
              <div class="font-semibold">Exactly 3</div>
            </div>
            <div>
              <div class="text-slate-400 mb-2">Target Conversion</div>
              <div class="font-semibold">2-5%</div>
            </div>
            <div>
              <div class="text-slate-400 mb-2">Page Load</div>
              <div class="font-semibold">&lt; 3 seconds</div>
            </div>
            <div>
              <div class="text-slate-400 mb-2">Video Host</div>
              <div class="font-semibold">Vimeo/Wistia</div>
            </div>
          </div>
        </div>

        <!-- Navigation -->
        <NavigationButtons
          prev-to="/"
          prev-text="Back to Overview"
          next-to="/step3-upsell1"
          next-text="Next: Upsell 1"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

useSeoMeta({
  title: 'Step 1: VSL Page - BuyGoods Vendor Guide',
  description: 'Learn how to create an effective Video Sales Letter page that converts 2-5% of viewers into buyers'
})

// Device toggle
const activeDevice = ref('desktop')

// Script accordion
const expandedAct = ref<number | null>(1)

// Calculator
const calculator = ref({
  pageViews: 1000,
  completionRate: 50,
  conversionRate: 3,
  aov: 147
})

const calculatedResults = computed(() => {
  const completers = Math.round((calculator.value.pageViews * calculator.value.completionRate) / 100)
  const dailySales = Math.round((completers * calculator.value.conversionRate) / 100)
  const dailyRevenue = dailySales * calculator.value.aov
  const monthlyRevenue = dailyRevenue * 30

  return {
    completers,
    dailySales,
    dailyRevenue: dailyRevenue.toLocaleString(),
    monthlyRevenue: monthlyRevenue.toLocaleString()
  }
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

/* Main visible logo - bottom left corner */
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
