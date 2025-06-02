<template>
    <section class="bg-gray-50 dark:bg-gray-900 py-16 px-6 md:px-16 font-urbanist">
        <div class="max-w-6xl mx-auto text-center">
            <!-- Header -->
            <div class="mb-12">
                <p class="text-sm font-semibold text-purple-600 dark:text-purple-300 uppercase tracking-wide">
                    Pricing
                </p>
                <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white max-w-3xl mx-auto leading-relaxed">
                    Simple plans for growing businesses
                </h2>
            </div>

            <!-- Pricing Cards -->
            <div
                class="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-x-visible -mx-4 px-4"
                style="scroll-snap-type: x mandatory;"
            >
                <!-- Monthly Plan -->
                <div
                    class="bg-white dark:bg-purple-800 p-10 border-2 border-gray-200 dark:border-gray-300 rounded-lg shadow-md flex flex-col items-center min-w-[300px] md:min-w-0 flex-shrink-0"
                    style="scroll-snap-align: start;"
                >
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Monthly Plan</h3>
                    <p class="text-sm text-gray-600 dark:text-white mb-1">KES 500/month for 1–3 users</p>
                    <p class="text-sm text-gray-600 dark:text-white mb-4">KES 150 for every additional user</p>
                    <p class="text-2xl font-bold text-gray-900 dark:text-white mb-4">KES 500<span class="text-sm font-normal">/month</span></p>
                    <ul class="text-left text-sm text-gray-600 dark:text-white mb-6 space-y-2">
                        <li class="flex items-center"><span class="text-green-500 mr-2">✅</span> Best if you want to try things out</li>
                        <li class="flex items-center"><span class="text-green-500 mr-2">✅</span> Full access to all features</li>
                        <li class="flex items-center"><span class="text-green-500 mr-2">✅</span> Cancel anytime</li>
                    </ul>
                    <button class="px-4 py-2 bg-gray-200 text-gray-900 rounded-full hover:bg-gray-300 transition duration-200">
                        Choose Monthly Plan
                    </button>
                </div>

                <!-- 6-Month Plan -->
                <div
                    class="bg-gray-900 dark:bg-gray-600 p-10 border-2 border-gray-200 dark:border-white rounded-lg shadow-md flex flex-col items-center text-white min-w-[300px] md:min-w-0 flex-shrink-0"
                    style="scroll-snap-align: start;"
                >
                    <h3 class="text-lg font-semibold mb-2">6-Month Plan</h3>
                    <p class="text-sm mb-1">KES 2,400 every 6 months for 1–3 users</p>
                    <p class="text-sm mb-4">KES 750 for every additional user</p>
                    <p class="text-sm mb-1">You save KES 600 compared to monthly.</p>
                    <p class="text-2xl font-bold mb-4">KES 2,400<span class="text-sm font-normal">/6 months</span></p>
                    <ul class="text-left text-sm mb-6 space-y-2">
                        <li class="flex items-center"><span class="text-green-400 mr-2">✅</span> Great value with short-term commitment</li>
                        <li class="flex items-center"><span class="text-green-400 mr-2">✅</span> Ideal for steady small businesses</li>
                        <li class="flex items-center"><span class="text-green-400 mr-2">✅</span> One-time payment, no auto-renew surprises</li>
                    </ul>
                    <button class="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-full transition duration-200">
                        Choose 6-Month Plan
                    </button>
                </div>

                <!-- 12-Month Plan -->
                <div
                    class="bg-white dark:bg-purple-800 p-10 border-2 border-gray-100 dark:border-gray-300 rounded-lg shadow-md flex flex-col items-center min-w-[300px] md:min-w-0 flex-shrink-0"
                    style="scroll-snap-align: start;"
                >
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">12-Month Plan (Best Value)</h3>
                    <p class="text-sm text-gray-600 dark:text-white first-letter:mb-1">KES 4,500/year for 1–3 users</p>
                    <p class="text-sm text-gray-600 dark:text-white first-letter:mb-4">KES 1,300 for every additional user</p> <br>
                    <p class="text-sm text-gray-600 dark:text-white first-letter:mb-1">You save KES 1,500 compared to monthly.</p>
                    <p class="text-2xl font-bold text-gray-900 dark:text-white mb-4">KES 4,500<span class="text-sm font-normal">/year</span></p>
                    <ul class="text-left text-sm text-gray-600 dark:text-white mb-6 space-y-2">
                        <li class="flex items-center"><span class="text-green-500 mr-2">✅</span> Best for growing teams</li>
                        <li class="flex items-center"><span class="text-green-500 mr-2">✅</span> Budget-friendly for long-term planning</li>
                        <li class="flex items-center"><span class="text-green-500 mr-2">✅</span> Peace of mind for the year ahead</li>
                    </ul>
                    <button class="px-4 py-2 bg-gray-200 text-gray-900 rounded-full hover:bg-gray-300 transition duration-200">
                        Choose 12-Month Plan
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>