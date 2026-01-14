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
</style>
