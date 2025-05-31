<template>
  <section class="py-20 bg-white dark:bg-gray-900 text-center font-urbanist">
    <h3 class="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase mb-2">Features</h3>
    <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 max-w-2xl mx-auto">
      Why Kidaya is the Smart Choice for Managing Your Business Money
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
      <FeatureCard
        image="/assets/feat-image1.svg"
        title="Track sales and expenses in seconds"
        description="Track income and expenses in under 30 seconds. No spreadsheets—just quick, daily inputs that keep you on top of your business."
        bgLight="bg-blue-50"
        bgDark="bg-blue-900"
      />
      <FeatureCard
        image="/assets/feat-image2.svg"
        title="Real-time business snapshots"
        description="See your daily, weekly, and monthly cash flow at a glance. Know what's coming in, what's going out, and where your money is going."
        bgLight="bg-orange-50"
        bgDark="bg-orange-900"
      />
      <FeatureCard
        image="/assets/feat-image3.svg"
        title="Payment & Invoice Tracking"
        description="Track what you're owed and what you owe. Get reminders for overdue payments to stay ahead of cash crunches."
        bgLight="bg-sky-50"
        bgDark="bg-sky-900"
      />
      <FeatureCard
        image="/assets/feat-image4.svg"
        title="Build financial habits that last"
        description="Get simple insights and gentle prompts that help you save, build discipline, and unlock funding opportunities over time."
        bgLight="bg-purple-50"
        bgDark="bg-purple-900"
      />
    </div>
  </section>
</template>

<script setup>
import FeatureCard from './FeatureCard.vue'
</script>