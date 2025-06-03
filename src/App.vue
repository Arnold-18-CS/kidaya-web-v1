<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="app-container overflow-clip font-poppins">
    <router-view />
  </div>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}

.app-container {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}
</style>