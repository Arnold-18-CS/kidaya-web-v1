<script setup>
import FeaturesSection from './components/FeaturesSection.vue';
import FinalCTA from './components/FinalCTA.vue';
import KidayaPromotion from './components/KidayaPromotion.vue';
import LandingPage from './components/LandingPage.vue'
import MainFooter from './components/MainFooter.vue';
import PricingSection from './components/PricingSection.vue';
import SecuritySection from './components/SecuritySection.vue';
import TestimonialSection from './components/TestimonialSection.vue';
import WhatKidaya from './components/WhatKidaya.vue';
</script>

<template>
  <div class="app-container overflow-clip font-poppins">
    <LandingPage />
    <WhatKidaya />
    <FeaturesSection />
    <KidayaPromotion />
    <SecuritySection />
    <PricingSection />
    <TestimonialSection />
    <FinalCTA />
    <MainFooter />
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}
</style>
