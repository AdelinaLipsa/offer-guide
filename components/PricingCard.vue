<template>
  <div
    class="rounded-xl p-7 shadow-sm flex flex-col relative"
    :class="[
      containerClass,
      { 'scale-105': featured },
      customClass
    ]"
  >
    <!-- Featured Badge -->
    <div
      v-if="featured && badge"
      class="absolute -top-4 left-1/2 transform -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-bold"
      :class="badgeClass"
    >
      {{ badge }}
    </div>

    <!-- Product Image -->
    <div
      v-if="showImage"
      class="bg-gray-100 flex items-center justify-center rounded-lg mb-4 text-gray-600 text-sm"
      :class="imageHeight"
    >
      <slot name="image">
        {{ imagePlaceholder }}
      </slot>
    </div>

    <!-- Package Name -->
    <h4
      class="text-gray-900 mb-2 font-semibold"
      :class="titleSize"
    >
      {{ title }}
    </h4>

    <!-- Savings Badge -->
    <div
      v-if="savings"
      class="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 w-fit"
    >
      {{ savings }}
    </div>

    <!-- Price -->
    <div class="my-4">
      <span class="font-bold text-blue-600" :class="priceSize">
        {{ price }}
      </span>
      <span v-if="priceUnit" class="text-lg font-normal text-gray-600">
        {{ priceUnit }}
      </span>
    </div>

    <!-- Description -->
    <div v-if="description" class="text-gray-600 mb-4">
      {{ description }}
    </div>

    <!-- Features List -->
    <ul v-if="features.length > 0" class="list-none space-y-2 my-5 flex-grow">
      <li
        v-for="(feature, index) in features"
        :key="index"
        class="text-gray-600 text-sm pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-green-500 before:font-bold"
      >
        <span v-html="feature"></span>
      </li>
    </ul>

    <!-- Custom Content Slot -->
    <slot />

    <!-- CTA Button -->
    <button
      v-if="buttonText"
      class="text-white font-semibold py-3 rounded-lg w-full mt-auto"
      :class="buttonClass"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script setup lang="ts">
/**
 * PricingCard - Reusable pricing/package card component
 *
 * @prop {string} title - Package name/title
 * @prop {string} price - Price to display
 * @prop {string} priceUnit - Optional price unit (e.g., "/bottle")
 * @prop {string} description - Package description text
 * @prop {string} savings - Optional savings text (e.g., "Save $120")
 * @prop {string[]} features - Array of feature strings
 * @prop {boolean} featured - Whether this is the featured/recommended option
 * @prop {string} badge - Badge text for featured items (e.g., "BEST VALUE")
 * @prop {string} buttonText - CTA button text
 * @prop {boolean} showImage - Whether to show product image area
 * @prop {string} imagePlaceholder - Placeholder text for image area
 * @prop {string} imageHeight - Height class for image area
 * @prop {string} containerClass - Custom container classes
 * @prop {string} badgeClass - Custom badge classes
 * @prop {string} buttonClass - Custom button classes
 * @prop {string} titleSize - Title size classes
 * @prop {string} priceSize - Price size classes
 * @prop {string} customClass - Additional custom classes
 *
 * @example
 * <PricingCard
 *   title="Best Value Package"
 *   price="$49"
 *   price-unit="/bottle"
 *   description="3 Bottles - 90 Day Supply"
 *   savings="Save $120"
 *   :featured="true"
 *   badge="BEST VALUE"
 *   :features="['Free shipping', '60-day guarantee', 'Bonus guides']"
 *   button-text="Select Best Value"
 * />
 */
const props = withDefaults(
  defineProps<{
    title: string
    price: string
    priceUnit?: string
    description?: string
    savings?: string
    features?: string[]
    featured?: boolean
    badge?: string
    buttonText?: string
    showImage?: boolean
    imagePlaceholder?: string
    imageHeight?: string
    containerClass?: string
    badgeClass?: string
    buttonClass?: string
    titleSize?: string
    priceSize?: string
    customClass?: string
  }>(),
  {
    features: () => [],
    featured: false,
    showImage: true,
    imagePlaceholder: '[ PRODUCT IMAGE ]',
    imageHeight: 'h-40',
    containerClass: 'bg-white border-2 border-gray-200',
    badgeClass: 'bg-blue-600 text-white',
    buttonClass: 'bg-gradient-to-r from-blue-600 to-purple-600',
    titleSize: 'text-2xl',
    priceSize: 'text-4xl'
  }
)
</script>
