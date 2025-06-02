<template>
  <section :class="['min-h-screen bg-gradient-to-r py-12 px-6 md:px-20 flex flex-col font-urbanist',
    darkMode
      ? 'from-gray-900 via-gray-800 to-purple-950 text-gray-100'
      : 'from-[#e2eaff] via-[#fff8e4] to-purple-100 text-gray-900'
  ]">
    <!-- NAVBAR -->
    <nav class="flex justify-between items-center mb-14">
      <div class="flex items-center gap-3">
        <img src="/assets/logo.svg" alt="Kidaya Logo" class="h-9 w-9" />
        <span class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Kidaya</span>
      </div>
      <!-- Desktop Navbar -->
      <div class="hidden md:flex gap-8">
        <a href="#"
          class="font-medium transition text-gray-700 hover:text-purple-600 dark:text-gray-200 dark:hover:text-purple-300">Features</a>
        <a href="#"
          class="font-medium transition text-gray-700 hover:text-purple-600 dark:text-gray-200 dark:hover:text-purple-300">Pricing</a>
        <a href="#"
          class="font-medium transition text-gray-700 hover:text-purple-600 dark:text-gray-200 dark:hover:text-purple-300">Security</a>
        <a href="#"
          class="font-medium transition text-gray-700 hover:text-purple-600 dark:text-gray-200 dark:hover:text-purple-300">Benefits</a>
      </div>
      <div class="flex items-center gap-4">
        <!-- Dark mode toggle -->
        <button @click="toggleDarkMode"
          class="rounded-full p-2 transition border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
          :aria-label="darkMode ? 'Switch to light mode' : 'Switch to dark mode'">
          <svg v-if="!darkMode" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-900" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71m16.97 0l-.71-.71M4.05 4.93l-.71-.71M21 12h1M2 12H1m16.24 7.07a9 9 0 11-8.48-16.14 7 7 0 008.48 16.14z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-300" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71m16.97 0l-.71-.71M4.05 4.93l-.71-.71M21 12h1M2 12H1m12-5a7 7 0 100 14 7 7 0 000-14z" />
          </svg>
        </button>
        <!-- Mobile Drawer Toggle -->
        <button
          class="md:hidden rounded-full p-2 transition border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
          @click="drawerOpen = !drawerOpen"
          aria-label="Open navigation menu">
          <svg v-if="!drawerOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <!-- Mobile Drawer -->
      <transition name="fade">
        <div v-if="drawerOpen" class="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-end md:hidden">
          <div class="bg-white dark:bg-gray-900 w-64 h-full shadow-lg p-6 flex flex-col gap-6 relative">
            <button
              class="absolute top-4 right-4 rounded-full p-2 transition border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
              @click="drawerOpen = false"
              aria-label="Close navigation menu">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <br><br>

            <a href="#" class="font-medium transition text-gray-700 hover:text-purple-600 dark:text-gray-200 dark:hover:text-purple-300" @click="drawerOpen = false">Features</a>
            <a href="#" class="font-medium transition text-gray-700 hover:text-purple-600 dark:text-gray-200 dark:hover:text-purple-300" @click="drawerOpen = false">Pricing</a>
            <a href="#" class="font-medium transition text-gray-700 hover:text-purple-600 dark:text-gray-200 dark:hover:text-purple-300" @click="drawerOpen = false">Security</a>
            <a href="#" class="font-medium transition text-gray-700 hover:text-purple-600 dark:text-gray-200 dark:hover:text-purple-300" @click="drawerOpen = false">Benefits</a>
            <button
              class="mt-8 px-5 py-2 rounded-lg bg-purple-600 text-white font-semibold shadow hover:bg-purple-700 transition"
              @click="drawerOpen = false">
              Log in
            </button>
          </div>
        </div>
      </transition>
    </nav>

    <!-- MAIN CONTENT -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center flex-1"
      :class="{ '4k:grid-cols-2 4k:gap-32 4k:px-64': is4K }">
      <!-- LEFT -->
      <div class="space-y-8 flex flex-col items-center text-center" :class="{ '4k:space-y-16': is4K }">
        <!-- Login button for mobile/desktop -->
        <div class="w-full flex justify-center mb-2 md:mb-0">
          <button
            class="px-5 py-2 rounded-lg bg-purple-600 text-white font-semibold shadow hover:bg-purple-700 transition md:hidden">
            Log in
          </button>
        </div>
        <div>
          <p class="text-sm font-semibold mb-2 tracking-wide 4k:text-base text-purple-600 dark:text-purple-300">
            Track better. Plan smarter. Grow stronger.
          </p>
          <h1 class="text-4xl md:text-6xl font-extrabold leading-tight mb-4 4k:text-8xl text-gray-900 dark:text-white">
            Is your
            <span class="underline decoration-purple-500 decoration-4 underline-offset-4">business</span><br />
            really making a profit?
          </h1>
        </div>
        <p class="font-semibold text-lg max-w-xl 4k:text-2xl 4k:max-w-3xl text-gray-600 dark:text-gray-300 mx-auto">
          If you're not sure, you're not alone. Many small business owners hustle daily without clear visibility into
          their numbers. Kidaya brings clarity to your hustle with simple tools to stay on top of your business and grow
          with confidence—all from your phone.
        </p>
        <div class="flex flex-wrap gap-5 items-center justify-center mt-4 4k:gap-10 4k:mt-8">
          <button
            class="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-7 py-3 rounded-full shadow transition 4k:px-12 4k:py-5 4k:text-xl">
            Try free trial
          </button>
          <button
            class="flex items-center gap-2 font-medium transition 4k:text-lg text-gray-800 hover:text-purple-600 dark:text-gray-200 dark:hover:text-purple-300 dark:border-1 dark:border-white px-4 py-2 rounded-lg bg-transparent dark:bg-transparent hover:shadow-lg">
            <img src="/assets/play.svg" alt="Demo Icon" class="dark:text-white w-6 h-6 4k:w-10 4k:h-10" />
            View Demo
          </button>
        </div>
        <!-- Store Buttons and Fast Acceptance -->
        <div v-show="!isNarrow" class="flex flex-wrap gap-6 items-center justify-center mt-8 4k:gap-12 4k:mt-16">
          <!-- App Store Button -->
          <a href="#"
            class="flex items-center bg-black rounded-lg px-5 py-2 min-w-[170px] max-w-[200px] hover:scale-105 transition 4k:px-10 4k:py-4 4k:min-w-[240px] 4k:max-w-[300px]">
            <img src="/assets/app-store.svg" alt="App Store" class="h-9 4k:h-16" />
            <div class="flex flex-col ml-3 4k:ml-6">
              <span class="text-white text-xs 4k:text-base">Download on the</span>
              <span class="text-white font-bold text-lg leading-tight 4k:text-2xl">App Store</span>
            </div>
          </a>
          <!-- Google Play Button -->
          <a href="#"
            class="flex items-center bg-black rounded-lg px-5 py-2 min-w-[170px] max-w-[200px] hover:scale-105 transition 4k:px-10 4k:py-4 4k:min-w-[240px] 4k:max-w-[300px]">
            <img src="/assets/playstore.svg" alt="Google Play" class="h-9 4k:h-16" />
            <div class="flex flex-col ml-3 4k:ml-6">
              <span class="text-white text-xs 4k:text-base">Get it on</span>
              <span class="text-white font-bold text-lg leading-tight 4k:text-2xl">Google Play</span>
            </div>
          </a>
          <!-- Fast acceptance -->
          <div class="flex items-center gap-2 text-base mt-10 4k:text-lg text-gray-500 dark:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 4k:h-7 4k:w-7 text-gray-400 dark:text-gray-500"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 6v6l4 2m-6 6a9 9 0 110-18 9 9 0 010 18z" />
            </svg>
            <span>Fast acceptance</span>
          </div>
        </div>
        <!-- Desktop login button (hidden on mobile) -->
        <div class="hidden md:flex w-full justify-center">
          <button
            class="px-5 py-2 rounded-lg bg-purple-600 text-white font-semibold shadow hover:bg-purple-700 transition">
            Log in
          </button>
        </div>
      </div>
      <!-- RIGHT -->
      <div class="relative flex justify-center items-center">
        <img src="/assets/hero-girl.png" alt="Happy entrepreneur"
          class="w-full max-w-md mx-auto scale-125 md:scale-150 4k:max-w-2xl 4k:scale-150" loading="lazy"
          style="transform-origin: center" />
        <!-- User stats card -->
        <div :class="[
          'rounded-xl shadow-lg px-4 py-2 flex items-center gap-3 4k:px-8 4k:py-4 4k:gap-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-w-[180px] 4k:min-w-[260px]',
          isNarrow
            ? 'absolute bottom-4 left-1/2 -translate-x-1/2 top-auto right-auto'
            : 'absolute top-8 right-4 4k:top-20 4k:right-20'
        ]">
          <div class="flex -space-x-2 4k:-space-x-4">
            <img class="w-8 h-8 rounded-full border-2 border-white 4k:w-16 4k:h-16" src="/assets/avatar1.jpg"
              alt="User 1" />
            <img class="w-8 h-8 rounded-full border-2 border-white 4k:w-16 4k:h-16" src="/assets/avatar1.svg"
              alt="User 2" />
            <img class="w-8 h-8 rounded-full border-2 border-white 4k:w-16 4k:h-16" src="/assets/avatar3.jpg"
              alt="User 3" />
          </div>
          <div>
            <p class="text-sm font-semibold 4k:text-2xl">120K+</p>
            <p class="text-xs 4k:text-lg text-gray-500 dark:text-gray-400">Active users</p>
          </div>
        </div>
        <!-- Payment card -->
        <div v-show="!isNarrow" :class="[
          'absolute bottom-0 left-4 shadow-xl rounded-2xl px-5 py-4 w-64 4k:left-20 4k:bottom-10 4k:px-10 4k:py-8 4k:w-[420px] bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100'
        ]">
          <p class="text-xs mb-1 4k:text-lg text-gray-400 dark:text-gray-400">Payment Received</p>
          <p class="text-lg font-semibold 4k:text-3xl text-purple-700 dark:text-purple-300">
            +35,890.00</p>
          <div class="flex justify-between items-center text-sm mt-1 4k:text-xl">
            <p class="text-gray-500 dark:text-gray-400">18th June 2025</p>
            <p class="font-medium text-green-600 dark:text-green-400">3.09% ⬈</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isNarrow = ref(window.innerWidth <= 980)
const is4K = ref(window.innerWidth >= 2560)
const darkMode = ref(false)
const drawerOpen = ref(false)

function handleResize() {
  isNarrow.value = window.innerWidth <= 980
  is4K.value = window.innerWidth >= 2560
  // Close drawer if resizing to desktop
  if (window.innerWidth > 980) drawerOpen.value = false
}

function toggleDarkMode() {
  darkMode.value = !darkMode.value
  if (darkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  // Set initial dark mode from system preference
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkMode.value = true
    document.documentElement.classList.add('dark')
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
@media (min-width: 2560px) {
  .\34 k\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .\34 k\:gap-32 {
    gap: 8rem;
  }

  .\34 k\:px-64 {
    padding-left: 16rem;
    padding-right: 16rem;
  }

  .\34 k\:space-y-16> :not([hidden])~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(4rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(4rem * var(--tw-space-y-reverse));
  }

  .\34 k\:text-8xl {
    font-size: 6rem;
    line-height: 1;
  }

  .\34 k\:text-2xl {
    font-size: 1.5rem;
  }

  .\34 k\:text-xl {
    font-size: 1.25rem;
  }

  .\34 k\:text-lg {
    font-size: 1.125rem;
  }

  .\34 k\:max-w-3xl {
    max-width: 48rem;
  }

  .\34 k\:gap-10 {
    gap: 2.5rem;
  }

  .\34 k\:mt-8 {
    margin-top: 2rem;
  }

  .\34 k\:px-12 {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .\34 k\:py-5 {
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }

  .\34 k\:w-10 {
    width: 2.5rem;
  }

  .\34 k\:h-10 {
    height: 2.5rem;
  }

  .\34 k\:gap-12 {
    gap: 3rem;
  }

  .\34 k\:mt-16 {
    margin-top: 4rem;
  }

  .\34 k\:px-10 {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  .\34 k\:py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .\34 k\:min-w-\[240px\] {
    min-width: 240px;
  }

  .\34 k\:max-w-\[300px\] {
    max-width: 300px;
  }

  .\34 k\:h-16 {
    height: 4rem;
  }

  .\34 k\:ml-6 {
    margin-left: 1.5rem;
  }

  .\34 k\:top-20 {
    top: 5rem;
  }

  .\34 k\:right-20 {
    right: 5rem;
  }

  .\34 k\:w-16 {
    width: 4rem;
  }

  .\34 k\:h-16 {
    height: 4rem;
  }

  .\34 k\:-space-x-4> :not([hidden])~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(1rem * var(--tw-space-x-reverse));
    margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .\34 k\:text-2xl {
    font-size: 1.5rem;
  }

  .\34 k\:left-20 {
    left: 5rem;
  }

  .\34 k\:bottom-10 {
    bottom: 2.5rem;
  }

  .\34 k\:w-\[420px\] {
    width: 420px;
  }

  .\34 k\:scale-150 {
    transform: scale(1.5);
  }

  .\34 k\:max-w-2xl {
    max-width: 42rem;
  }

  .\34 k\:gap-6 {
    gap: 1.5rem;
  }

  .\34 k\:px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .\34 k\:py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .\34 k\:text-base {
    font-size: 1rem;
  }

  .\34 k\:text-3xl {
    font-size: 1.875rem;
  }
}
</style>