<template>
    <section class="relative font-urbanist">
        <!-- Decorative Image: Now at the top -->
        <div class="pointer-events-none select-none absolute top-0 right-10 hidden lg:block w-1/2 max-w-xl z-30"
            aria-hidden="true">
            <img src="/assets/computer-screen.svg" alt="" class="w-full h-auto object-contain computer-screen-img"
                draggable="false" style="transform: scale(1); transform-origin: top right;" />
        </div>

        <!-- Main Content -->
        <section
            class="relative z-10 py-24 px-6 md:px-20 font-urbanist bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden">
            <!-- Slogan -->
            <p class="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wide mb-2">
                Log it. See it. Own it.
            </p>

            <!-- Why Kidaya Heading + Description -->
            <div class="mb-20 max-w-2xl">
                <h2 class="text-4xl md:text-5xl font-extrabold mb-4">Why Kidaya</h2>
                <p class="text-lg text-gray-700 dark:text-gray-300">
                    We built Kidaya because too many great businesses struggle simply because they don’t have
                    visibility into their numbers.
                    We believe clarity is power — and that every small business deserves tools that help them grow,
                    plan, and prepare for funding.
                </p>
            </div>
        </section>

        <section class="bg-gray-100 dark:bg-gray-800 py-24 px-6 md:px-20">
            <!-- How It Works Section -->
            <div class="mt-24">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
                    <div>
                        <p
                            class="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wide mb-3">
                            How Kidaya Works
                        </p>
                        <h2 class="text-3xl md:text-4xl font-extrabold dark:text-white max-w-3xl">
                            Make payments, transfers, and more in 3 simple steps
                        </h2>
                    </div>
                    <div class="mt-6 md:mt-0 md:ml-8 flex-shrink-0">
                        <button
                            class="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full transition duration-200 w-full md:w-auto"
                            type="button">
                            Get Started Now
                        </button>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row w-full relative bg-transparent">
                    <!-- Step 1 -->
                    <div
                        class="flex-1 bg-white dark:bg-gray-800 p-10 md:p-12 rounded-t-xl md:rounded-l-xl md:rounded-tr-none shadow-2xl flex flex-col justify-center relative">
                        <div class="relative mb-2 flex flex-col items-start">
                            <div class="relative w-16 h-16 flex items-center justify-center">
                                <span
                                    class="text-gray-600 dark:text-gray-50 text-5xl font-bold opacity-10 select-none">01</span>
                                <img src="/assets/step1.svg" alt="Briefcase"
                                    class="w-10 h-10 object-contain z-10 absolute right-6 top-8" aria-hidden="true" />
                            </div>

                            <div class="h-8"></div>
                            <div class="flex items-start space-x-3">
                                <div>
                                    <h3 class="font-semibold mb-1 dark:text-white">Download Kidaya from Play store</h3>
                                    <p class="text-sm text-gray-700 dark:text-gray-300">
                                        <strong>Track Income & Expenses</strong><br />
                                        📲 Log daily sales and expenses in under 30 seconds—right from your phone.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <!-- Vertical divider for md+ screens -->
                        <div
                            class="hidden md:block absolute top-8 bottom-8 right-0 w-px bg-gray-300 dark:bg-gray-700 z-10">
                        </div>
                    </div>

                    <!-- Step 2 -->
                    <div
                        class="flex-1 bg-white dark:bg-gray-800 p-10 md:p-12 shadow-2xl flex flex-col justify-center relative">
                        <div class="relative mb-2 flex flex-col items-start">
                            <div class="relative w-16 h-16 flex items-center justify-center">
                                <span
                                    class="text-gray-600 dark:text-gray-50 text-5xl font-bold opacity-10 select-none">02</span>
                                <img src="/assets/step2.svg" alt="Briefcase"
                                    class="w-10 h-10 object-contain z-10 absolute right-6 top-8" aria-hidden="true" />
                            </div>

                            <div class="h-8"></div>
                        </div>
                        <div class="flex items-start space-x-3">
                            <div>
                                <h3 class="font-semibold mb-1 dark:text-white">See Your Financial Health</h3>
                                <p class="text-sm text-gray-700 dark:text-gray-300">
                                    📈 Instantly view cash flow, profits, and spending trends with simple
                                    dashboards.
                                </p>
                            </div>
                        </div>
                        <!-- Vertical divider for md+ screens -->
                        <div
                            class="hidden md:block absolute top-8 bottom-8 right-0 w-px bg-gray-300 dark:bg-gray-700 z-10">
                        </div>
                    </div>

                    <!-- Step 3 -->
                    <div
                        class="flex-1 bg-white dark:bg-gray-800 p-10 md:p-12 rounded-b-xl md:rounded-r-xl md:rounded-bl-none shadow-2xl flex flex-col justify-center relative">
                        <div class="relative mb-2 flex flex-col items-start">
                            <div class="relative w-16 h-16 flex items-center justify-center">
                                <span
                                    class="text-gray-600 dark:text-gray-50 text-5xl font-bold opacity-10 select-none">03</span>
                                <img src="/assets/step3.svg" alt="Briefcase"
                                    class="w-10 h-10 object-contain z-10 absolute right-6 top-8" aria-hidden="true" />
                            </div>

                            <div class="h-8"></div>
                        </div>
                        <div class="flex items-start space-x-3">
                            <div>
                                <h3 class="font-semibold mb-1 dark:text-white">Grow with Confidence</h3>
                                <p class="text-sm text-gray-700 dark:text-gray-300">
                                    🚀 Get smart insights, savings nudges, and funding readiness tips to scale your
                                    business.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <img src="/assets/happy-customer.svg" alt="Happy Customer" class="w-full mx-auto mt-16" draggable="false" />
        </section>
    </section>
</template>

<style scoped>
@media (max-width: 1300px) {
    .computer-screen-img {
        transform: scale(0.5) !important;
    }
}
</style>