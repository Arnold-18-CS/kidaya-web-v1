<template>
  <section class="py-20 bg-white dark:bg-gray-900 text-center font-urbanist">
    <h3 class="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase mb-2">Features</h3>
    <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 max-w-2xl mx-auto">
      Run your business smarter, every day. </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
      <FeatureCard image="/assets/feat-image1.svg" title="Know where your money goes"
        description="Quickly log sales and expenses—and instantly see what’s coming in, what’s going out, and where it’s going."
        bgLight="bg-blue-50" bgDark="bg-blue-900" />
      <FeatureCard image="/assets/feat-image2.svg" title="Avoid any cash flow surprises"
        description="Track who’s paid, who hasn’t, and what bills are coming up. No more last-minute scrambles."
        bgLight="bg-orange-50" bgDark="bg-orange-900" />
      <FeatureCard image="/assets/feat-image3.svg" title="See trends. Spot waste. Take action"
        description="Get clear, visual insights into where you’re spending too much, what’s working, and what needs a rethink."
        bgLight="bg-sky-50" bgDark="bg-sky-900" />
      <FeatureCard image="/assets/feat-image4.svg" title="Prepare for growth opportunities"
        description="Quietly build a clean financial trail—so when you’re ready for funding or support, you’ve got the records to prove it."
        bgLight="bg-purple-50" bgDark="bg-purple-900" />
    </div>
  </section>
</template>

<script setup>
import FeatureCard from './FeatureCard.vue'
</script>