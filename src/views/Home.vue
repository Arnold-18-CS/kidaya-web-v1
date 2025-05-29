<template>
  <section class="min-h-screen bg-gradient-to-r from-white via-white to-purple-100 py-12 px-6 md:px-20 flex items-center">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">

      <!-- LEFT SIDE -->
      <div class="space-y-6">
        <div>
          <p class="text-sm font-semibold text-purple-600">Log it. See it. Own it.</p>
          <h1 class="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Know your <span class="underline decoration-purple-500 decoration-4">numbers</span>.<br />
            Grow your business
          </h1>
        </div>

        <p class="text-gray-600 text-lg max-w-md">
          Kidaya is the simple, mobile-first money tracker built for African entrepreneurs—log sales in seconds,
          see your profits instantly, and unlock funding as you grow.
        </p>

        <div class="flex flex-wrap gap-4 items-center">
          <button class="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full shadow">
            Try free trial
          </button>
          <button class="flex items-center gap-2 text-gray-800 hover:text-purple-600 font-medium">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-5.197-3.027A1 1 0 008 9.027v5.946a1 1 0 001.555.832l5.197-3.027a1 1 0 000-1.664z" />
            </svg>
            View Demo
          </button>
        </div>

        <div class="flex items-center gap-4 mt-4">
          <img src="/assets/app-store.svg" alt="App Store" class="h-10" />
          <img src="/assets/google-play.svg" alt="Google Play" class="h-10" />
          <p class="text-gray-500 text-sm">Fast acceptance</p>
        </div>
      </div>

      <!-- RIGHT SIDE -->
      <div class="relative">
        <img src="/assets/hero-girl.png" alt="Happy entrepreneur" class="w-full max-w-md mx-auto" />

        <div class="absolute top-8 right-4 bg-white rounded-xl shadow-lg px-4 py-2 flex items-center gap-2">
          <div class="flex -space-x-2">
            <img class="w-8 h-8 rounded-full border-2 border-white" src="/assets/user1.jpg" alt="User 1" />
            <img class="w-8 h-8 rounded-full border-2 border-white" src="/assets/user2.jpg" alt="User 2" />
            <img class="w-8 h-8 rounded-full border-2 border-white" src="/assets/user3.jpg" alt="User 3" />
          </div>
          <div>
            <p class="text-sm font-medium">120K+</p>
            <p class="text-xs text-gray-500">Active users</p>
          </div>
        </div>

        <div class="absolute bottom-0 left-4 bg-white shadow-xl rounded-2xl px-4 py-3 w-60">
          <p class="text-xs text-gray-400">Payment Received</p>
          <p class="text-lg font-semibold text-purple-700">+35,890.00</p>
          <div class="flex justify-between items-center text-sm mt-1">
            <p class="text-gray-500">18th June 2025</p>
            <p class="text-green-600 font-medium">3.09% ⬈</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// No interactivity needed for now
</script>

<style scoped>
/* Optional custom styles */
</style>
