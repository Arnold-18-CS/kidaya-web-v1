<template>
  <footer class="bg-white dark:bg-gray-900 py-8 px-6 md:px-16 text-gray-900 dark:text-gray-300">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16">
        <div class="max-w-xs">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Kidaya</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Seamlessly track revenue and expenses, visualize cash flow, and leverage data-driven insights to build
            creditworthiness and unlock capital — all from a lightweight, mobile-first platform.
          </p>
        </div>
        <div class="flex flex-row flex-wrap md:flex-row gap-8 md:gap-12 mt-6 md:mt-0 w-full md:w-auto md:ml-auto">
          <div>
            <h4 class="text-sm font-semibold text-gray-900 dark:text-gray-200 mb-2">Short links</h4>
            <ul class="space-y-2 text-sm">
              <li>
                <RouterLink to="/#features"
                  class="hover:text-purple-600 dark:hover:text-purple-400 transition duration-200">
                  Features
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/#how-it-works"
                  class="hover:text-purple-600 dark:hover:text-purple-400 transition duration-200">
                  How it works
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/#security"
                  class="hover:text-purple-600 dark:hover:text-purple-400 transition duration-200">
                  Security
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/#testimonial"
                  class="hover:text-purple-600 dark:hover:text-purple-400 transition duration-200">
                  Testimonial
                </RouterLink>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-sm font-semibold text-gray-900 dark:text-gray-200 mb-2">Other pages</h4>
            <ul class="space-y-2 text-sm">
              <li>
                <RouterLink to="/privacy"
                  class="hover:text-purple-600 dark:hover:text-purple-400 transition duration-200">
                  Privacy policy
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/tos" class="hover:text-purple-600 dark:hover:text-purple-400 transition duration-200">
                  Terms & conditions
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/404" class="hover:text-purple-600 dark:hover:text-purple-400 transition duration-200">
                  404
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 dark:text-gray-400">
        <div class="mb-2 md:mb-0">@kidaya2025</div>
        <div class="md:ml-auto">© 2025 Kidaya. All rights reserved.</div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>