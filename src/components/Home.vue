<template>
  <div>
    <LandingPage />
    <WhatKidaya />
    <FeaturesSection id="features" />
    <KidayaPromotion id="how-it-works"/>
    <SecuritySection id="security" />
    <!-- <PricingSection id="pricing"/> -->
    <TestimonialSection id="testimonial" />
    <FinalCTA />
    <MainFooter />
  </div>
</template>

<script setup>
import LandingPage from './LandingPage.vue';
import WhatKidaya from './WhatKidaya.vue';
import FeaturesSection from './FeaturesSection.vue';
import KidayaPromotion from './KidayaPromotion.vue';
import SecuritySection from './SecuritySection.vue';
import PricingSection from './PricingSection.vue';
import TestimonialSection from './TestimonialSection.vue';
import FinalCTA from './FinalCTA.vue';
import MainFooter from './MainFooter.vue';
</script>