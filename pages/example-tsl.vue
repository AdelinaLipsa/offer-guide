<template>
  <div class="min-h-screen bg-white">
    <!-- Back Link -->
    <div class="absolute top-2 left-4 z-10">
      <NuxtLink to="/step1-vsl" class="text-gray-400 hover:text-gray-600 text-sm flex items-center gap-1 transition-colors">
        <Icon name="lucide:arrow-left" class="w-4 h-4" />
        Back to Guide
      </NuxtLink>
    </div>

    <!-- Urgency Bar -->
    <div class="bg-red-600 text-white text-center py-2 px-4 text-sm">
      <strong>WARNING:</strong> This page will be taken down soon. Read every word carefully...
    </div>

    <!-- Main Content -->
    <div class="w-[80%] mx-auto py-12">
      <!-- Date Line -->
      <p class="text-gray-500 text-sm mb-6 font-serif">
        {{ currentDate }}
      </p>

      <!-- Pre-Headline -->
      <p class="text-red-600 font-bold text-lg mb-2 uppercase tracking-wide">
        Attention: If You Want to Lose Weight Fast...
      </p>

      <!-- Main Headline -->
      <h1 class="text-3xl md:text-4xl font-bold text-black leading-tight mb-6 font-serif">
        "Discover the <span class="text-red-600 underline">Odd 30-Second Ritual</span>
        That Helped Me Drop 47 Pounds in 60 Days...
        <span class="italic">Without Dieting, Exercise, or Giving Up My Favorite Foods"</span>
      </h1>

      <!-- Subheadline -->
      <p class="text-xl text-gray-700 mb-8 font-serif leading-relaxed">
        If you've tried everything to lose weight and nothing works, then this might be
        the most important letter you'll ever read. Here's why...
      </p>

      <!-- Author Byline -->
      <div class="border-l-4 border-gray-300 pl-4 mb-10 text-gray-600 font-serif italic">
        <p>From the desk of Dr. James Richardson, PhD</p>
        <p class="text-sm">Former Research Director, Stanford Metabolic Lab</p>
      </div>

      <!-- Opening Story -->
      <div class="prose-content">
        <p>Dear Friend,</p>

        <p>
          Let me ask you something...
        </p>

        <p>
          Have you ever felt like no matter what you do, the weight just <strong>won't come off?</strong>
        </p>

        <p>
          Have you tried diet after diet, pill after pill, only to end up right back where you started?
          (Or worse — <em>heavier</em> than before?)
        </p>

        <p>
          If so, I have some <span class="highlight-yellow">incredible news</span> for you today.
        </p>

        <p>
          Because what I'm about to share with you is a <strong>scientifically-proven breakthrough</strong>
          that's already helped over 127,000 men and women lose stubborn body fat...
        </p>

        <p>
          <span class="highlight-yellow">...without starving themselves, without spending hours at the gym,
          and without giving up the foods they love.</span>
        </p>

        <!-- Subheadline -->
        <h2 class="subheadline">Here's How I Discovered This "Forbidden" Weight Loss Secret...</h2>

        <p>
          My name is Dr. James Richardson, and for 23 years, I was one of the leading researchers at
          Stanford's Metabolic Research Lab.
        </p>

        <p>
          During that time, I helped develop some of the most popular weight loss drugs on the market.
          Drugs that made pharmaceutical companies <strong>billions of dollars.</strong>
        </p>

        <p>
          But here's the dirty little secret they don't want you to know...
        </p>

        <p class="callout-box">
          <strong>Those drugs don't actually fix the problem.</strong> They just mask the symptoms while
          keeping you dependent on refills month after month. It's a $72 billion industry built on
          keeping you overweight.
        </p>

        <p>
          When I discovered this, I was disgusted. I quit my job and spent the next 3 years researching
          a <em>real</em> solution...
        </p>

        <p>
          One that would attack the <span class="highlight-yellow">ROOT CAUSE</span> of weight gain.
          Not just cover it up.
        </p>

        <!-- Another Section -->
        <h2 class="subheadline">The "Metabolic Switch" Nobody Talks About</h2>

        <p>
          Here's what the diet industry doesn't want you to know:
        </p>

        <p>
          The reason you can't lose weight has <strong>nothing</strong> to do with:
        </p>

        <ul class="tsl-list">
          <li><span class="text-red-600 font-bold">✗</span> Eating too much</li>
          <li><span class="text-red-600 font-bold">✗</span> Not exercising enough</li>
          <li><span class="text-red-600 font-bold">✗</span> Having "bad genetics"</li>
          <li><span class="text-red-600 font-bold">✗</span> Lack of willpower</li>
        </ul>

        <p>
          Instead, it's because of something called your <strong>"Metabolic Switch"</strong> — and yours
          is almost certainly stuck in the OFF position right now.
        </p>

        <p>
          When this switch is OFF, your body <em>hoards fat</em> instead of burning it. No amount of
          dieting or exercise will change that. Your body is literally working <strong>against you.</strong>
        </p>

        <p>
          But when you flip this switch ON...
        </p>

        <ul class="tsl-list">
          <li><span class="text-green-600 font-bold">✓</span> Your metabolism skyrockets</li>
          <li><span class="text-green-600 font-bold">✓</span> Cravings disappear almost overnight</li>
          <li><span class="text-green-600 font-bold">✓</span> Fat melts off your body — especially from your belly, thighs, and arms</li>
          <li><span class="text-green-600 font-bold">✓</span> Your energy levels go through the roof</li>
        </ul>

        <!-- CTA 1 -->
        <div class="cta-box">
          <p class="text-center font-bold text-xl mb-4">Ready to flip YOUR Metabolic Switch?</p>
          <button @click="handleOrderClick" class="cta-button">
            YES! Show Me How →
          </button>
          <p class="text-center text-sm text-gray-500 mt-2">Click above to continue reading...</p>
        </div>

        <!-- More Content -->
        <h2 class="subheadline">Real People. Real Results.</h2>

        <div class="testimonial-raw">
          <p class="italic">
            "I was skeptical at first. I've tried everything and nothing worked. But after just 3 weeks,
            I lost 18 pounds. By the end of the second month, I was down 41 pounds total. My husband
            can't believe it. Thank you so much!"
          </p>
          <p class="text-right font-bold">— Sarah M., 47, Austin TX</p>
          <p class="text-right text-sm text-gray-500">*Results may vary</p>
        </div>

        <div class="testimonial-raw">
          <p class="italic">
            "As a doctor myself, I was very skeptical. But the science behind this is rock solid.
            I've recommended it to dozens of my patients and the results have been nothing short
            of remarkable. This is the real deal."
          </p>
          <p class="text-right font-bold">— Dr. Michael Stevens, MD, Chicago IL</p>
        </div>

        <div class="testimonial-raw">
          <p class="italic">
            "I lost 67 pounds. Sixty-seven! I went from a size 18 to a size 8. My knees don't hurt
            anymore. I can play with my grandkids. I got my life back."
          </p>
          <p class="text-right font-bold">— Patricia H., 61, Miami FL</p>
          <p class="text-right text-sm text-gray-500">*Results may vary</p>
        </div>

        <!-- The Solution -->
        <h2 class="subheadline">Introducing MetaBoost Pro™</h2>

        <p>
          After 3 years of research and testing, I've finally perfected the formula.
        </p>

        <p>
          It's called <strong>MetaBoost Pro™</strong> and it contains a proprietary blend of 8
          clinically-proven ingredients that work together to <span class="highlight-yellow">flip your
          Metabolic Switch to the ON position.</span>
        </p>

        <p>
          Each ingredient has been carefully selected based on peer-reviewed scientific studies.
          This isn't some fly-by-night supplement. This is <strong>serious science.</strong>
        </p>

        <p>
          Here's what happens when you take MetaBoost Pro:
        </p>

        <ul class="tsl-list-numbered">
          <li><strong>Day 1-3:</strong> The ingredients begin activating your dormant fat-burning hormones</li>
          <li><strong>Day 4-7:</strong> You notice your cravings starting to fade. Food doesn't control you anymore.</li>
          <li><strong>Week 2:</strong> You step on the scale and can't believe what you see. The weight is actually coming off!</li>
          <li><strong>Week 3-4:</strong> Your clothes start fitting looser. People start asking what you're doing differently.</li>
          <li><strong>Month 2:</strong> You look in the mirror and barely recognize yourself. THIS is the body you've always wanted.</li>
        </ul>

        <!-- Scarcity -->
        <div class="scarcity-box">
          <p class="text-center text-red-600 font-bold text-xl mb-2">⚠️ LIMITED SUPPLY</p>
          <p class="text-center">
            Due to the rare ingredients in MetaBoost Pro, we can only produce <strong>5,000 bottles per month.</strong>
            Right now, we have just <strong class="text-red-600">{{ stockCount }} bottles</strong> remaining.
          </p>
        </div>

        <!-- Pricing -->
        <h2 class="subheadline">Special Pricing — Today Only</h2>

        <p>
          Normally, a one-month supply of MetaBoost Pro sells for $99 per bottle.
        </p>

        <p>
          And honestly, considering it can help you lose 20, 30, even 50+ pounds... that would still
          be a bargain.
        </p>

        <p>
          But because you're reading this letter today, I've arranged something special...
        </p>

        <p class="text-center text-2xl font-bold my-6">
          <span class="line-through text-gray-400">$99</span>
          <span class="text-red-600 ml-4">Just $49 per bottle</span>
        </p>

        <p class="text-center text-gray-600 mb-8">
          That's a savings of <strong>50%</strong> — but only while supplies last.
        </p>

        <!-- Package Options -->
        <h2 class="subheadline">Choose Your Package</h2>

        <p>
          Most of our customers order 3-6 bottles to ensure they have enough supply to reach their goal weight.
          Plus, you'll <strong>save more</strong> when you order multiple bottles:
        </p>

        <div class="packages-container">
          <!-- 6 Bottle Package -->
          <div class="package-box package-best">
            <div class="package-badge">BEST VALUE</div>
            <div class="package-bottles">6 Bottles</div>
            <div class="package-supply">6-Month Supply</div>
            <div class="package-price">
              <span class="old-price">$594</span>
              <span class="new-price">$234</span>
            </div>
            <div class="package-per-bottle">Just $39 per bottle</div>
            <div class="package-savings">YOU SAVE $360!</div>
            <button @click="handleOrderClick" class="package-button">ORDER NOW</button>
            <div class="package-shipping">+ FREE SHIPPING</div>
          </div>

          <!-- 3 Bottle Package -->
          <div class="package-box package-popular">
            <div class="package-badge">MOST POPULAR</div>
            <div class="package-bottles">3 Bottles</div>
            <div class="package-supply">3-Month Supply</div>
            <div class="package-price">
              <span class="old-price">$297</span>
              <span class="new-price">$147</span>
            </div>
            <div class="package-per-bottle">Just $49 per bottle</div>
            <div class="package-savings">YOU SAVE $150!</div>
            <button @click="handleOrderClick" class="package-button">ORDER NOW</button>
            <div class="package-shipping">+ FREE SHIPPING</div>
          </div>

          <!-- 1 Bottle Package -->
          <div class="package-box package-starter">
            <div class="package-badge">STARTER</div>
            <div class="package-bottles">1 Bottle</div>
            <div class="package-supply">1-Month Supply</div>
            <div class="package-price">
              <span class="old-price">$99</span>
              <span class="new-price">$69</span>
            </div>
            <div class="package-per-bottle">$69 per bottle</div>
            <div class="package-savings">YOU SAVE $30!</div>
            <button @click="handleOrderClick" class="package-button package-button-gray">ORDER NOW</button>
            <div class="package-shipping">+ $9.95 Shipping</div>
          </div>
        </div>

        <!-- Key Ingredients -->
        <h2 class="subheadline">What's Inside MetaBoost Pro™?</h2>

        <p>
          Unlike other supplements that use cheap fillers and synthetic chemicals, MetaBoost Pro contains
          <strong>8 premium, clinically-proven ingredients</strong> — each one carefully selected for its
          unique fat-burning properties:
        </p>

        <div class="ingredients-grid">
          <div class="ingredient-item">
            <div class="ingredient-name">
              <Icon name="lucide:leaf" class="w-5 h-5 text-green-600 inline mr-2" />
              <strong>Green Tea Extract (EGCG)</strong>
            </div>
            <p class="ingredient-desc">
              Contains powerful catechins that boost metabolism by up to 4% and increase fat oxidation
              by 17%. Used for centuries in Asian medicine for weight control.
            </p>
          </div>

          <div class="ingredient-item">
            <div class="ingredient-name">
              <Icon name="lucide:flame" class="w-5 h-5 text-orange-500 inline mr-2" />
              <strong>Capsaicin Complex</strong>
            </div>
            <p class="ingredient-desc">
              The compound that makes peppers hot. Proven to increase thermogenesis (heat production)
              and help your body burn an extra 50 calories per day.
            </p>
          </div>

          <div class="ingredient-item">
            <div class="ingredient-name">
              <Icon name="lucide:zap" class="w-5 h-5 text-yellow-500 inline mr-2" />
              <strong>Chromium Picolinate</strong>
            </div>
            <p class="ingredient-desc">
              Helps regulate blood sugar levels and reduces carb cravings by up to 41%. Essential for
              preventing the energy crashes that lead to overeating.
            </p>
          </div>

          <div class="ingredient-item">
            <div class="ingredient-name">
              <Icon name="lucide:droplets" class="w-5 h-5 text-blue-500 inline mr-2" />
              <strong>L-Carnitine</strong>
            </div>
            <p class="ingredient-desc">
              Transports fatty acids directly into your cells' mitochondria where they're burned for
              energy. Helps convert stored fat into usable fuel.
            </p>
          </div>
        </div>

        <p class="text-center mt-6">
          <em>Plus 4 more powerful ingredients working synergistically to maximize your results...</em>
        </p>

        <!-- Scientific Backing -->
        <h2 class="subheadline">The Science Doesn't Lie</h2>

        <p>
          MetaBoost Pro isn't based on hype or marketing gimmicks. It's based on <strong>real science</strong> —
          backed by peer-reviewed clinical studies:
        </p>

        <div class="science-stats">
          <div class="stat-item">
            <div class="stat-number">97%</div>
            <div class="stat-label">of participants lost weight</div>
            <div class="stat-desc">In a 12-week double-blind study</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">3.5x</div>
            <div class="stat-label">more fat burned</div>
            <div class="stat-desc">Compared to diet and exercise alone</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">28 lbs</div>
            <div class="stat-label">average weight loss</div>
            <div class="stat-desc">Over a 90-day period</div>
          </div>
        </div>

        <p class="callout-box">
          <strong>Study Citation:</strong> "Thermogenic Effects of Novel Metabolic Compounds on Adipose
          Tissue in Overweight Adults" — Journal of Nutritional Science, 2023. Results replicated across
          3 independent laboratories.
        </p>

        <!-- Before/After Testimonials -->
        <h2 class="subheadline">Real Transformations From Real People</h2>

        <p>
          Don't just take my word for it. Here are some of the incredible transformations our customers
          have experienced:
        </p>

        <div class="transformation-grid">
          <div class="transformation-item">
            <div class="transformation-header">
              <Icon name="lucide:user-circle" class="w-12 h-12 text-gray-400" />
              <div class="transformation-info">
                <div class="transformation-name">Jennifer K., 42</div>
                <div class="transformation-location">San Diego, CA</div>
              </div>
            </div>
            <div class="transformation-results">
              <span class="result-before">Before: 198 lbs</span>
              <Icon name="lucide:arrow-right" class="w-4 h-4" />
              <span class="result-after">After: 142 lbs</span>
            </div>
            <p class="transformation-quote">
              "I've struggled with my weight my entire adult life. I'd tried everything — Weight Watchers,
              keto, even those prescription pills that made me feel terrible. Nothing worked for more than
              a few weeks. Then I found MetaBoost Pro. In just 4 months, I lost 56 pounds. For the first
              time in 20 years, I feel confident in my own skin."
            </p>
            <div class="transformation-lost">Lost 56 lbs in 4 months</div>
          </div>

          <div class="transformation-item">
            <div class="transformation-header">
              <Icon name="lucide:user-circle" class="w-12 h-12 text-gray-400" />
              <div class="transformation-info">
                <div class="transformation-name">Robert M., 55</div>
                <div class="transformation-location">Chicago, IL</div>
              </div>
            </div>
            <div class="transformation-results">
              <span class="result-before">Before: 247 lbs</span>
              <Icon name="lucide:arrow-right" class="w-4 h-4" />
              <span class="result-after">After: 189 lbs</span>
            </div>
            <p class="transformation-quote">
              "My doctor told me I was pre-diabetic and needed to lose weight or face serious health
              consequences. I was terrified. I started taking MetaBoost Pro and within 3 months, I'd lost
              58 pounds. My blood sugar is now normal. My doctor says I've added years to my life."
            </p>
            <div class="transformation-lost">Lost 58 lbs in 3 months</div>
          </div>

          <div class="transformation-item">
            <div class="transformation-header">
              <Icon name="lucide:user-circle" class="w-12 h-12 text-gray-400" />
              <div class="transformation-info">
                <div class="transformation-name">Maria S., 38</div>
                <div class="transformation-location">Houston, TX</div>
              </div>
            </div>
            <div class="transformation-results">
              <span class="result-before">Before: 175 lbs</span>
              <Icon name="lucide:arrow-right" class="w-4 h-4" />
              <span class="result-after">After: 128 lbs</span>
            </div>
            <p class="transformation-quote">
              "After having two kids, I thought my body would never be the same. I tried working out,
              eating clean, everything. The weight wouldn't budge. MetaBoost Pro changed everything. I lost
              47 pounds and now I'm in the best shape of my life — even better than before I had kids!"
            </p>
            <div class="transformation-lost">Lost 47 lbs in 5 months</div>
          </div>
        </div>

        <p class="text-center text-sm text-gray-500 mt-4">
          *Individual results may vary. These testimonials represent exceptional outcomes.
        </p>

        <!-- What You Get -->
        <h2 class="subheadline">Here's Everything You Get Today</h2>

        <p>
          When you order MetaBoost Pro today, you're not just getting a supplement. You're getting a
          complete weight loss system:
        </p>

        <div class="what-you-get">
          <div class="wyg-item">
            <Icon name="lucide:package" class="wyg-icon" />
            <div class="wyg-content">
              <strong>MetaBoost Pro™ Formula</strong>
              <p>Premium fat-burning supplement with 8 clinically-proven ingredients. Take 2 capsules
              daily with water.</p>
              <span class="wyg-value">Value: $99/bottle</span>
            </div>
          </div>

          <div class="wyg-item">
            <Icon name="lucide:clipboard-check" class="wyg-icon" />
            <div class="wyg-content">
              <strong>Quick-Start Guide</strong>
              <p>Step-by-step instructions to maximize your results from day one. Learn the simple
              lifestyle tweaks that can double your weight loss.</p>
              <span class="wyg-value">Value: $47</span>
            </div>
          </div>

          <div class="wyg-item">
            <Icon name="lucide:headphones" class="wyg-icon" />
            <div class="wyg-content">
              <strong>VIP Customer Support</strong>
              <p>Get access to our dedicated support team 7 days a week. We're here to answer your
              questions and help you succeed.</p>
              <span class="wyg-value">Value: Priceless</span>
            </div>
          </div>
        </div>

        <!-- Free Bonuses -->
        <h2 class="subheadline">Order Today and Get These FREE Bonuses</h2>

        <p>
          Because I want to give you every possible advantage, I'm including these
          <strong>3 exclusive bonuses</strong> — absolutely FREE — when you order today:
        </p>

        <div class="bonuses-container">
          <div class="bonus-item">
            <div class="bonus-badge">FREE BONUS #1</div>
            <div class="bonus-title">
              <Icon name="lucide:book-open" class="w-6 h-6 text-indigo-600 inline mr-2" />
              "The 7-Day Metabolism Reset"
            </div>
            <p class="bonus-desc">
              This 47-page digital guide reveals the specific foods, drinks, and habits that can jumpstart
              your metabolism in just one week. Follow this plan alongside MetaBoost Pro for even faster results.
            </p>
            <div class="bonus-value">Value: $67 — <span class="text-green-600 font-bold">YOURS FREE</span></div>
          </div>

          <div class="bonus-item">
            <div class="bonus-badge">FREE BONUS #2</div>
            <div class="bonus-title">
              <Icon name="lucide:utensils" class="w-6 h-6 text-indigo-600 inline mr-2" />
              "Fat-Burning Recipe Collection"
            </div>
            <p class="bonus-desc">
              50 delicious recipes that support weight loss without feeling like you're on a diet. Breakfast,
              lunch, dinner, and even desserts — all designed to boost your metabolism.
            </p>
            <div class="bonus-value">Value: $47 — <span class="text-green-600 font-bold">YOURS FREE</span></div>
          </div>

          <div class="bonus-item">
            <div class="bonus-badge">FREE BONUS #3</div>
            <div class="bonus-title">
              <Icon name="lucide:brain" class="w-6 h-6 text-indigo-600 inline mr-2" />
              "Mind Over Cravings" Audio Program
            </div>
            <p class="bonus-desc">
              A powerful audio program that helps reprogram your subconscious mind to eliminate emotional
              eating and food cravings. Listen while you sleep for effortless results.
            </p>
            <div class="bonus-value">Value: $97 — <span class="text-green-600 font-bold">YOURS FREE</span></div>
          </div>
        </div>

        <p class="text-center font-bold text-lg mt-6">
          Total Bonus Value: <span class="line-through text-gray-400">$211</span>
          <span class="text-green-600 ml-2">FREE TODAY!</span>
        </p>

        <!-- Comparison Table -->
        <h2 class="subheadline">How MetaBoost Pro Compares</h2>

        <p>
          Still not sure if MetaBoost Pro is right for you? Let's compare it to other common weight loss methods:
        </p>

        <div class="comparison-table-container">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Method</th>
                <th>Avg. Weight Loss</th>
                <th>Time Required</th>
                <th>Side Effects</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>MetaBoost Pro</strong></td>
                <td class="text-green-600 font-bold">28+ lbs</td>
                <td>30 seconds/day</td>
                <td>None reported</td>
                <td>$39-69/mo</td>
              </tr>
              <tr>
                <td>Diet Pills (Rx)</td>
                <td>10-15 lbs</td>
                <td>Daily</td>
                <td>Nausea, headaches</td>
                <td>$200+/mo</td>
              </tr>
              <tr>
                <td>Gym Membership</td>
                <td>5-10 lbs</td>
                <td>5-10 hrs/week</td>
                <td>Joint pain, fatigue</td>
                <td>$50-150/mo</td>
              </tr>
              <tr>
                <td>Fad Diets</td>
                <td>5-15 lbs</td>
                <td>Constant effort</td>
                <td>Yo-yo weight</td>
                <td>$100+/mo</td>
              </tr>
              <tr>
                <td>Weight Loss Surgery</td>
                <td>50+ lbs</td>
                <td>Recovery: months</td>
                <td>Serious risks</td>
                <td>$15,000+</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="text-center mt-6 font-bold">
          As you can see, MetaBoost Pro delivers superior results with <em>less time, less effort, and fewer side effects</em>
          than any other method.
        </p>

        <!-- FAQ Section -->
        <h2 class="subheadline">Frequently Asked Questions</h2>

        <p>
          Here are answers to the most common questions we receive:
        </p>

        <div class="faq-container">
          <div
            class="faq-item"
            :class="{ 'faq-active': activeFaq === 1 }"
            @click="toggleFaq(1)"
          >
            <div class="faq-question">
              <span>How quickly will I see results?</span>
              <Icon :name="activeFaq === 1 ? 'lucide:chevron-up' : 'lucide:chevron-down'" class="w-5 h-5" />
            </div>
            <div v-if="activeFaq === 1" class="faq-answer">
              Most customers notice increased energy within the first week. Visible weight loss typically
              begins within 2-3 weeks. For best results, we recommend using MetaBoost Pro for at least
              90 days to allow the ingredients to fully optimize your metabolism.
            </div>
          </div>

          <div
            class="faq-item"
            :class="{ 'faq-active': activeFaq === 2 }"
            @click="toggleFaq(2)"
          >
            <div class="faq-question">
              <span>Is MetaBoost Pro safe?</span>
              <Icon :name="activeFaq === 2 ? 'lucide:chevron-up' : 'lucide:chevron-down'" class="w-5 h-5" />
            </div>
            <div v-if="activeFaq === 2" class="faq-answer">
              MetaBoost Pro is manufactured in an FDA-registered, GMP-certified facility in the United
              States. All ingredients are natural and have been extensively tested for safety. That said,
              if you have any medical conditions or take prescription medications, we recommend consulting
              your doctor before starting any new supplement.
            </div>
          </div>

          <div
            class="faq-item"
            :class="{ 'faq-active': activeFaq === 3 }"
            @click="toggleFaq(3)"
          >
            <div class="faq-question">
              <span>Do I need to diet or exercise?</span>
              <Icon :name="activeFaq === 3 ? 'lucide:chevron-up' : 'lucide:chevron-down'" class="w-5 h-5" />
            </div>
            <div v-if="activeFaq === 3" class="faq-answer">
              No! MetaBoost Pro works without any changes to your diet or exercise routine. That's the
              beauty of it. Of course, if you want to accelerate your results, making healthy choices
              will only help. But it's not required.
            </div>
          </div>

          <div
            class="faq-item"
            :class="{ 'faq-active': activeFaq === 4 }"
            @click="toggleFaq(4)"
          >
            <div class="faq-question">
              <span>What if it doesn't work for me?</span>
              <Icon :name="activeFaq === 4 ? 'lucide:chevron-up' : 'lucide:chevron-down'" class="w-5 h-5" />
            </div>
            <div v-if="activeFaq === 4" class="faq-answer">
              We offer a 60-day "empty bottle" money-back guarantee. If you're not completely satisfied
              with your results, simply return your bottles (even if they're empty) and we'll refund
              every penny. No questions asked. You literally have nothing to lose.
            </div>
          </div>

          <div
            class="faq-item"
            :class="{ 'faq-active': activeFaq === 5 }"
            @click="toggleFaq(5)"
          >
            <div class="faq-question">
              <span>How do I take MetaBoost Pro?</span>
              <Icon :name="activeFaq === 5 ? 'lucide:chevron-up' : 'lucide:chevron-down'" class="w-5 h-5" />
            </div>
            <div v-if="activeFaq === 5" class="faq-answer">
              Simply take 2 capsules daily with a glass of water — preferably in the morning before
              breakfast. That's it! It takes less than 30 seconds and you're done for the day.
            </div>
          </div>

          <div
            class="faq-item"
            :class="{ 'faq-active': activeFaq === 6 }"
            @click="toggleFaq(6)"
          >
            <div class="faq-question">
              <span>How long will this special pricing last?</span>
              <Icon :name="activeFaq === 6 ? 'lucide:chevron-up' : 'lucide:chevron-down'" class="w-5 h-5" />
            </div>
            <div v-if="activeFaq === 6" class="faq-answer">
              We can only guarantee these discounted prices while our current inventory lasts. Due to
              supply chain challenges and the premium nature of our ingredients, we may need to raise
              prices at any time. If you're seeing this page, the discount is still available — but we
              encourage you to order now to lock in these savings.
            </div>
          </div>
        </div>

        <!-- CTA 2 -->
        <div class="cta-box">
          <button @click="handleOrderClick" class="cta-button">
            CLAIM YOUR DISCOUNT NOW →
          </button>
          <p class="text-center text-sm text-gray-500 mt-3">
            Orders ship within 24 hours. Free shipping on orders of 3+ bottles.
          </p>
        </div>

        <!-- Guarantee -->
        <h2 class="subheadline">My Personal 60-Day "Empty Bottle" Guarantee</h2>

        <p>
          I'm so confident MetaBoost Pro will work for you that I'm offering an unprecedented guarantee:
        </p>

        <div class="guarantee-box">
          <p class="font-bold text-lg mb-3">100% Money-Back Guarantee</p>
          <p>
            Try MetaBoost Pro for a full 60 days. If you're not completely thrilled with your results
            — if you don't lose at least 15 pounds — simply return your bottles (even if they're empty)
            for a full refund.
          </p>
          <p class="mt-3 font-bold">
            No questions asked. No hassles. You have nothing to lose except the weight.
          </p>
        </div>

        <!-- Final CTA -->
        <h2 class="subheadline">Here's What To Do Next</h2>

        <p>
          This is your moment. You can either close this page and continue struggling with your
          weight for another month, another year, another decade...
        </p>

        <p>
          Or you can take action <em>right now</em> and finally get the body you deserve.
        </p>

        <p>
          Click the button below to claim your discounted bottles of MetaBoost Pro before we sell out.
        </p>

        <div class="cta-box">
          <button @click="handleOrderClick" class="cta-button cta-button-large">
            YES! I WANT TO LOSE WEIGHT NOW →
          </button>
          <div class="flex justify-center gap-6 mt-4 text-sm text-gray-500">
            <span>🔒 Secure Checkout</span>
            <span>📦 Free Shipping</span>
            <span>✓ 60-Day Guarantee</span>
          </div>
        </div>

        <!-- Sign off -->
        <p class="mt-12">
          To your health and happiness,
        </p>
        <p class="font-bold font-serif text-lg italic">
          Dr. James Richardson, PhD
        </p>

        <!-- PS Section -->
        <div class="ps-section">
          <p>
            <strong>P.S.</strong> Remember, you're protected by my 60-day "empty bottle" guarantee.
            There's absolutely no risk to you. The only risk is doing nothing and staying exactly where you are.
          </p>
          <p>
            <strong>P.P.S.</strong> We only have {{ stockCount }} bottles left at this price. Once they're gone,
            the price goes back to $99. Don't miss out.
            <a href="#" @click.prevent="handleOrderClick" class="text-red-600 underline font-bold">Click here to order now.</a>
          </p>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="bg-gray-100 border-t border-gray-200 py-8 px-6 text-center text-xs text-gray-500">
      <p class="max-w-2xl mx-auto mb-4">
        <strong>DISCLAIMER:</strong> Individual results may vary. The statements on this page have not been evaluated
        by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
        Consult your doctor before starting any supplement program.
      </p>
      <div class="flex justify-center gap-4 mb-4">
        <a href="#" class="hover:underline">Privacy Policy</a>
        <a href="#" class="hover:underline">Terms of Service</a>
        <a href="#" class="hover:underline">Contact</a>
      </div>
      <p class="text-gray-400">© 2024 MetaBoost Pro. All Rights Reserved.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

useSeoMeta({
  title: 'The Weight Loss Secret They Don\'t Want You to Know',
  description: 'Discover the breakthrough method that\'s helping thousands lose 20-30 pounds naturally'
})

const stockCount = ref(247)

// FAQ state
const activeFaq = ref<number | null>(null)

const toggleFaq = (id: number) => {
  activeFaq.value = activeFaq.value === id ? null : id
}

const currentDate = computed(() => {
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  return new Date().toLocaleDateString('en-US', options)
})

const handleOrderClick = () => {
  alert('Demo: This would redirect to checkout in production.')
}
</script>

<style scoped>
/* TSL Typography - Serif for readability */
.prose-content {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.125rem;
  line-height: 1.8;
  color: #1a1a1a;
}

.prose-content p {
  margin-bottom: 1.5rem;
}

.prose-content strong {
  font-weight: 700;
}

.prose-content em {
  font-style: italic;
}

/* Subheadlines */
.subheadline {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #dc2626;
  padding-bottom: 0.5rem;
}

/* Yellow highlight */
.highlight-yellow {
  background-color: #fef08a;
  padding: 0 4px;
}

/* Callout box */
.callout-box {
  background-color: #fef3c7;
  border-left: 4px solid #f59e0b;
  padding: 1.5rem;
  margin: 2rem 0;
  font-style: italic;
}

/* Lists */
.tsl-list {
  list-style: none;
  padding-left: 0;
  margin: 1.5rem 0;
}

.tsl-list li {
  padding: 0.5rem 0;
  padding-left: 2rem;
  position: relative;
}

.tsl-list li span:first-child {
  position: absolute;
  left: 0;
}

.tsl-list-numbered {
  list-style: none;
  padding-left: 0;
  margin: 1.5rem 0;
  counter-reset: item;
}

.tsl-list-numbered li {
  padding: 0.75rem 0;
  border-bottom: 1px solid #e5e5e5;
}

/* CTA Box */
.cta-box {
  background-color: #f8fafc;
  border: 2px dashed #cbd5e1;
  padding: 2rem;
  margin: 2.5rem 0;
  text-align: center;
}

.cta-button {
  background-color: #dc2626;
  color: white;
  font-weight: 700;
  font-size: 1.25rem;
  padding: 1rem 2.5rem;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: background-color 0.2s;
}

.cta-button:hover {
  background-color: #b91c1c;
}

.cta-button-large {
  font-size: 1.5rem;
  padding: 1.25rem 3rem;
}

/* Testimonials */
.testimonial-raw {
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

/* Scarcity box */
.scarcity-box {
  background-color: #fef2f2;
  border: 2px solid #dc2626;
  padding: 1.5rem;
  margin: 2rem 0;
}

/* Guarantee box */
.guarantee-box {
  background-color: #f0fdf4;
  border: 2px solid #16a34a;
  padding: 1.5rem;
  margin: 2rem 0;
}

/* PS Section */
.ps-section {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e5e5;
}

.ps-section p {
  margin-bottom: 1rem;
}

/* Package Options */
.packages-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: 2rem 0;
}

@media (max-width: 768px) {
  .packages-container {
    grid-template-columns: 1fr;
  }
}

.package-box {
  border: 2px solid #e5e7eb;
  padding: 1.5rem;
  text-align: center;
  position: relative;
  background: #fff;
}

.package-best {
  border-color: #16a34a;
  box-shadow: 0 4px 12px rgba(22, 163, 74, 0.15);
}

.package-popular {
  border-color: #dc2626;
}

.package-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #1e293b;
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.package-best .package-badge {
  background: #16a34a;
}

.package-popular .package-badge {
  background: #dc2626;
}

.package-bottles {
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 1rem;
}

.package-supply {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 1rem;
}

.package-price {
  margin: 1rem 0;
}

.package-price .old-price {
  text-decoration: line-through;
  color: #9ca3af;
  margin-right: 0.5rem;
}

.package-price .new-price {
  font-size: 2rem;
  font-weight: 700;
  color: #dc2626;
}

.package-per-bottle {
  font-size: 0.875rem;
  color: #16a34a;
  font-weight: 600;
}

.package-savings {
  font-size: 0.875rem;
  font-weight: 700;
  color: #dc2626;
  margin: 0.5rem 0;
}

.package-button {
  display: block;
  width: 100%;
  background: #dc2626;
  color: white;
  font-weight: 700;
  padding: 0.75rem;
  border: none;
  cursor: pointer;
  margin: 1rem 0 0.5rem;
  transition: background 0.2s;
}

.package-button:hover {
  background: #b91c1c;
}

.package-button-gray {
  background: #64748b;
}

.package-button-gray:hover {
  background: #475569;
}

.package-shipping {
  font-size: 0.75rem;
  color: #16a34a;
  font-weight: 600;
}

/* Ingredients Grid */
.ingredients-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin: 2rem 0;
}

@media (max-width: 768px) {
  .ingredients-grid {
    grid-template-columns: 1fr;
  }
}

.ingredient-item {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 1.25rem;
}

.ingredient-name {
  font-size: 1rem;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
}

.ingredient-desc {
  font-size: 0.9375rem;
  color: #475569;
  line-height: 1.6;
  margin: 0;
}

/* Science Stats */
.science-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: 2rem 0;
  text-align: center;
}

@media (max-width: 768px) {
  .science-stats {
    grid-template-columns: 1fr;
  }
}

.stat-item {
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  padding: 1.5rem;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #16a34a;
  font-family: Georgia, serif;
}

.stat-label {
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
  margin-top: 0.25rem;
}

.stat-desc {
  font-size: 0.8125rem;
  color: #6b7280;
  margin-top: 0.25rem;
}

/* Transformation Grid */
.transformation-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0;
}

.transformation-item {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 1.5rem;
}

.transformation-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.transformation-name {
  font-weight: 700;
  font-size: 1.125rem;
}

.transformation-location {
  font-size: 0.875rem;
  color: #6b7280;
}

.transformation-results {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  font-size: 0.9375rem;
}

.result-before {
  color: #6b7280;
}

.result-after {
  color: #16a34a;
  font-weight: 600;
}

.transformation-quote {
  font-style: italic;
  color: #334155;
  font-size: 0.9375rem;
  line-height: 1.7;
  margin: 0;
}

.transformation-lost {
  display: inline-block;
  margin-top: 1rem;
  background: #dcfce7;
  color: #16a34a;
  font-weight: 700;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
}

/* What You Get */
.what-you-get {
  margin: 2rem 0;
}

.wyg-item {
  display: flex;
  gap: 1rem;
  padding: 1.25rem;
  border-bottom: 1px solid #e5e7eb;
}

.wyg-item:last-child {
  border-bottom: none;
}

.wyg-icon {
  width: 2rem;
  height: 2rem;
  color: #4f46e5;
  flex-shrink: 0;
}

.wyg-content strong {
  display: block;
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
}

.wyg-content p {
  font-size: 0.9375rem;
  color: #475569;
  margin: 0 0 0.5rem;
}

.wyg-value {
  font-size: 0.8125rem;
  color: #16a34a;
  font-weight: 600;
}

/* Bonuses */
.bonuses-container {
  margin: 2rem 0;
}

.bonus-item {
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  padding: 1.5rem;
  margin-bottom: 1rem;
}

.bonus-badge {
  display: inline-block;
  background: #4f46e5;
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 10px;
  margin-bottom: 0.75rem;
}

.bonus-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.bonus-desc {
  font-size: 0.9375rem;
  color: #475569;
  line-height: 1.6;
  margin-bottom: 0.75rem;
}

.bonus-value {
  font-size: 0.9375rem;
  font-weight: 600;
}

/* Comparison Table */
.comparison-table-container {
  margin: 2rem 0;
  overflow-x: auto;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9375rem;
}

.comparison-table th,
.comparison-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #e5e7eb;
}

.comparison-table th {
  background: #1e293b;
  color: white;
  font-weight: 600;
}

.comparison-table tr:first-child td {
  background: #f0fdf4;
}

.comparison-table tr:hover td {
  background: #f8fafc;
}

.comparison-table tr:first-child:hover td {
  background: #f0fdf4;
}

/* FAQ Section */
.faq-container {
  margin: 2rem 0;
}

.faq-item {
  border: 1px solid #e5e7eb;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: border-color 0.2s;
}

.faq-item:hover {
  border-color: #cbd5e1;
}

.faq-active {
  border-color: #4f46e5;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.25rem;
  font-weight: 600;
  font-size: 1rem;
}

.faq-answer {
  padding: 0 1.25rem 1.25rem;
  font-size: 0.9375rem;
  color: #475569;
  line-height: 1.7;
  border-top: 1px solid #e5e7eb;
  padding-top: 1rem;
}
</style>
