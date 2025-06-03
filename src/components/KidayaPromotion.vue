<template>
    <section class="relative">
        <!-- Decorative Image: Now at the top -->
        <div class="pointer-events-none select-none absolute top-0 right-5 hidden lg:block w-1/3 max-w-xl z-30"
            aria-hidden="true">
            <img src="/assets/computer-screen.png" alt="" class="w-full h-auto object-contain computer-screen-img"
                draggable="false" style="transform: scale(1.4); transform-origin: top right;" />
        </div>

        <!-- Main Content -->
        <section
            class="relative z-10 py-24 px-6 md:px-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden">
            <!-- Desktop/Tablet: Text only -->
            <div class="hidden md:block max-w-5xl mx-auto">
                <div class="w-full md:w-1/2 mb-10 md:mb-0 md:pr-12">
                    <h3
                        class="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase mb-2 tracking-widest">
                        Why Kidaya?
                    </h3>
                    <h2
                        class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 max-w-4xl leading-tight">
                        Clarity is powerful and you deserves it.
                    </h2>
                    <p class="text-lg text-gray-700 dark:text-gray-300 mb-8">
                        We built Kidaya because too many great businesses struggle simply because they don’t have
                        visibility
                        into their numbers.
                        We believe clarity is power — and that every small business deserves tools that help them grow,
                        plan, and prepare for funding.
                    </p>
                </div>
            </div>
            <!-- Mobile: Side-by-side layout for text/button (right) and image/Google Play (left), no overlap -->
            <div
                class="md:hidden flex flex-row items-center justify-center max-w-2xl mx-auto bg-gray-100 dark:bg-gray-800 px-4 py-8 rounded-xl space-x-4">
                <!-- Right: Text and Get Started button -->
                <div class="flex-1 flex flex-col items-center text-left space-y-4">
                    <div>
                        <h3
                            class="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase mb-1 tracking-widest">
                            Why Kidaya?
                        </h3>
                        <h2 class="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                            Clarity is powerful and you deserves it.
                        </h2>
                        <p class="text-xs text-gray-700 dark:text-gray-300 mb-2">
                            We built Kidaya because too many great businesses struggle simply because they don’t have
                            visibility into their numbers.
                        </p>
                    </div>
                    <a href="#" target="_blank" rel="noopener"
                        class="w-full px-2 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full transition duration-200 text-center"
                        style="min-width: 120px; font-size: max(0.85rem, min(1rem, 3.5vw));">
                        Get Started Now
                    </a>
                </div>
                
                <!-- Left: Image and Google Play button stacked -->
                <div class="flex flex-col items-center space-y-3 flex-shrink-0 w-36">
                    <img src="/assets/phone-screen.png" alt="Kidaya App Preview"
                        class="w-28 h-auto object-contain mx-auto mb-10 mt-10"
                        style="transform: scale(2.2); transform-origin: center;" />
                    <a href="#"
                        class="flex items-center bg-black rounded-lg px-4 py-2 max-h-[44px] min-w-[120px] max-w-[150px] hover:scale-105 transition">
                        <img src="/assets/playstore.svg" alt="Google Play" class="h-7" />
                        <div class="flex flex-col ml-2">
                            <span class="text-white uppercase text-[10px] leading-none">Get it on</span>
                            <span class="text-white font-bold leading-tight text-xs">Google Play</span>
                        </div>
                    </a>
                </div>
                
            </div>

        </section>

        <section class="bg-gray-100 dark:bg-gray-800 py-24 px-6 md:px-20"
            style="background-image: url('/assets/how-mobile-bg.svg'); background-size: cover; background-position: center;">
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
                        <a href="#" target="_blank" rel="noopener"
                            class="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full transition duration-200 w-full md:w-auto text-center hidden md:inline-block">
                            Get Started Now
                        </a>
                    </div>
                </div>

                <div class="text-center md:text-left pb-12 md:pt-8 md:pb-16 max-w-7xl mx-auto">
                    <div
                        class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-16 mx-auto relative text-center md:text-left">
                        <!-- Step 1 -->
                        <div
                            class="p-8 px-6 md:px-12 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md relative flex flex-col items-center md:items-start text-center md:text-left">
                            <div class="relative w-16 h-16 flex items-center justify-center mx-auto md:mx-0">
                                <span
                                    class="text-gray-600 dark:text-gray-50 text-5xl font-bold opacity-10 select-none">01</span>
                                <img src="/assets/step1.svg" alt=""
                                    class="w-10 h-10 object-contain z-10 absolute right-6 top-8" aria-hidden="true" />
                            </div>
                            <h3 class="text-lg font-semibold mt-8 mb-2 text-gray-900 dark:text-gray-100">Download Kidaya
                                from Play Store</h3>
                            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                <span class="font-semibold">Track Income & Expenses</span><br>
                                📲 Enter sales, expenses, or payments in under 30 seconds—right from your phone.
                            </p>
                            <!-- Divider right (only after step 1) -->
                            <div
                                class="hidden lg:block absolute top-10 bottom-10 right-[-15px] w-[2px] bg-gray-100 dark:bg-gray-700">
                            </div>
                        </div>
                        <!-- Step 2 -->
                        <div
                            class="p-8 px-6 md:px-12 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md relative flex flex-col items-center md:items-start text-center md:text-left">
                            <div class="relative w-16 h-16 flex items-center justify-center mx-auto md:mx-0">
                                <span
                                    class="text-gray-600 dark:text-gray-50 text-5xl font-bold opacity-10 select-none">02</span>
                                <img src="/assets/step2.svg" alt=""
                                    class="w-10 h-10 object-contain z-10 absolute right-6 top-8" aria-hidden="true" />
                            </div>
                            <h3 class="text-lg font-semibold mt-8 mb-2 text-gray-900 dark:text-gray-100">See Your
                                Financial Snapshot</h3>
                            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                📈 Kidaya instantly shows your cash flow, profits, and balances—no calculators, no
                                spreadsheets.
                            </p>
                            <!-- Divider right (after step 2) -->
                            <div
                                class="hidden lg:block absolute top-10 bottom-10 right-[-15px] w-[2px] bg-gray-100 dark:bg-gray-700">
                            </div>
                        </div>
                        <!-- Step 3 -->
                        <div
                            class="p-8 px-6 md:px-12 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md relative flex flex-col items-center md:items-start text-center md:text-left">
                            <div class="relative w-16 h-16 flex items-center justify-center mx-auto md:mx-0">
                                <span
                                    class="text-gray-600 dark:text-gray-50 text-5xl font-bold opacity-10 select-none">03</span>
                                <img src="/assets/step3.svg" alt=""
                                    class="w-10 h-10 object-contain z-10 absolute right-6 top-8" aria-hidden="true" />
                            </div>
                            <h3 class="text-lg font-semibold mt-8 mb-2 text-gray-900 dark:text-gray-100">Make Better
                                Business Decisions
                            </h3>
                            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                🤔 Use your insights to restock wisely, avoid overspending, and build toward
                                funding-readiness.
                            </p>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <img src="/assets/happy-customer.jpg" alt="Happy Kidaya customer"
                            class="hidden md:inline-block mt-10 rounded-3xl object-cover"
                            style="width: 1150px; max-width: 100%;" draggable="false" loading="lazy" />
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<style scoped>
@media (max-width: 1300px) {
    .computer-screen-img {
        transform: scale(1.2) !important;
    }
}
</style>
