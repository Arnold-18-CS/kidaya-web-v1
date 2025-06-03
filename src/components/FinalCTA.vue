<template>
    <section class="relative py-8 px-4 sm:px-6 md:px-16 overflow-hidden dark:bg-gray-800">
        <div class="mt-20 mb-20 py-32 relative z-0">
            <!-- Black Overlay -->
            <div class="absolute inset-0 z-10 flex items-center justify-center">
                <!-- Background Image with Overlay -->
                <div class="relative w-full max-w-6xl h-full mx-auto">
                    <img src="/assets/finalCTA.svg" alt=""
                        class="absolute inset-0 w-full h-full z-0 object-cover rounded-xl" />
                    <div class="absolute inset-0 bg-black bg-opacity-10 rounded-xl z-10"></div>
                </div>
            </div>
            <div class="relative z-20 max-w-4xl px-10 mx-auto text-center">
                <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-4">
                    Stop guessing. Start growing.
                </h2>
                <p class="text-base md:text-lg text-gray-100 mb-8">
                    Your numbers don’t have to be a mystery.
                    With Kidaya, you’ll always know where your business stands—and where it’s going next.
                </p>
                <div class="flex flex-col sm:flex-row justify-center gap-4 sm:gap-4">
                    <a href="https://play.google.com/store/apps/details?id=com.kidaya.africa.mobile " target="_blank"
                        rel="noopener" class="w-full sm:w-auto">
                        <button
                            class="w-full sm:w-auto px-6 py-4 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-full shadow-lg transition duration-200 text-base sm:text-lg">
                            Download the App
                        </button>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.kidaya.africa.mobile"
                        target="_blank" rel="noopener"
                        class="w-full sm:w-auto">
                        <button
                            class="w-full sm:w-auto px-6 py-4 bg-transparent border border-white text-white font-semibold rounded-full shadow-lg transition duration-200 hover:bg-white hover:text-purple-700 text-base sm:text-lg">
                            Get Started Now
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>