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
                <h3 class="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Clarity is powerful. And you
                    deserve it.
                </h3>
                <p class="text-lg text-gray-700 dark:text-gray-300">
                    We built Kidaya because too many great businesses struggle simply because they don’t have visibility
                    into their numbers.
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
                            As easy as writing in your notebook. Just way more powerful.
                        </h2>
                    </div>
                    <div class="mt-6 md:mt-0 md:ml-8 flex-shrink-0">
                        <a
                            href="https://play.google.com/store/apps/details?id=com.kidaya.app"
                            target="_blank"
                            rel="noopener"
                            class="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full transition duration-200 w-full md:w-auto text-center"
                        >
                            Get Started Now
                        </a>
                    </div>
                </div>

                <div class="text-left pb-12 md:pt-10 md:pb-20 max-w-7xl mx-auto">
                    <div
                        class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-16 mx-auto relative">
                        <!-- Step 1 -->
                        <div class="p-8 px-6 md:px-12 bg-purple-200 dark:bg-purple-900 rounded-lg shadow-md relative">
                            <div class="relative w-16 h-16 flex items-center justify-center">
                                <span
                                    class="text-gray-600 dark:text-gray-50 text-5xl font-bold opacity-10 select-none">01</span>
                                <img src="/assets/step1.svg" alt="" class="w-10 h-10 object-contain z-10 absolute right-6 top-8" aria-hidden="true" />
                            </div>
                            <h3 class="text-lg font-semibold mt-8 mb-2 text-gray-900 dark:text-gray-100">Download Kidaya
                                from Play Store</h3>
                            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                <span class="font-semibold">Track Income & Expenses</span><br>
                                📲 Enter sales, expenses, or payments in under 30 seconds—right from your phone.
                            </p>
                            <!-- Divider right (only after step 1) -->
                            <div
                                class="hidden md:block absolute top-10 bottom-10 right-[-15px] w-[2px] bg-gray-100 dark:bg-gray-700">
                            </div>
                        </div>
                        <!-- Step 2 -->
                        <div class="p-8 px-6 md:px-12 bg-pink-200 dark:bg-pink-900 rounded-lg shadow-md relative">
                            <div class="relative w-16 h-16 flex items-center justify-center">
                                <span
                                    class="text-gray-600 dark:text-gray-50 text-5xl font-bold opacity-10 select-none">02</span>
                                <img src="/assets/step2.svg" alt="" class="w-10 h-10 object-contain z-10 absolute right-6 top-8" aria-hidden="true" />
                            </div>
                            <h3 class="text-lg font-semibold mt-8 mb-2 text-gray-900 dark:text-gray-100">See Your Financial Snapshot</h3>
                            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                📈 Kidaya instantly shows your cash flow, profits, and balances—no calculators, no spreadsheets.
                            </p>
                            <!-- Divider right (after step 2) -->
                            <div
                                class="hidden md:block absolute top-10 bottom-10 right-[-15px] w-[2px] bg-gray-100 dark:bg-gray-700">
                            </div>
                        </div>
                        <!-- Step 3 -->
                        <div class="p-8 px-6 md:px-12 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md relative">
                            <div class="relative w-16 h-16 flex items-center justify-center">
                                <span
                                    class="text-gray-600 dark:text-gray-50 text-5xl font-bold opacity-10 select-none">03</span>
                                <img src="/assets/step3.svg" alt="" class="w-10 h-10 object-contain z-10 absolute right-6 top-8" aria-hidden="true" />
                            </div>
                            <h3 class="text-lg font-semibold mt-8 mb-2 text-gray-900 dark:text-gray-100">Make Better Decisions
                            </h3>
                            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                🤔 Use your insights to restock wisely, avoid overspending, and build toward funding-readiness.
                            </p>
                        </div>
                    </div>
                    <img src="/assets/happy-customer.jpg" alt="Happy Kidaya customer" class="w-full mx-auto mt-20 rounded-3xl object-cover max-h-[400px]" draggable="false" loading="lazy" />
                </div>
            </div>
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
