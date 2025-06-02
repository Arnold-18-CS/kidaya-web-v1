<template>
    <section class="bg-gray-50 dark:bg-gray-900 py-16 px-6 md:px-16 font-urbanist">
        <div class="max-w-6xl mx-auto">
            <!-- Header and Button -->
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-0">
                <div>
                    <p class="text-sm font-semibold text-purple-600 dark:text-purple-300 uppercase tracking-wide mb-3">
                        Security
                    </p>
                    <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white max-w-3xl">
                        Your business data, safe and secure
                    </h2>
                </div>
                <div class="mt-6 md:mt-0 md:ml-8 flex-shrink-0">
                    <p class="text-base md:text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-xs md:max-w-sm break-words">
                        We take your financial privacy seriously. Kidaya uses top-tier security tools to keep your data
                        safe.
                    </p>
                </div>
            </div>

            <!-- Feature Cards -->
            <div
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-200 dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-16 mx-auto">
                <SecurityCard title="Two-factor authentication"
                    description="Extra protection with verification steps to ensure only you can access your account."
                    dotClass="bg-blue-500" outerCircleClass="bg-blue-500 opacity-10" showDivider />
                <SecurityCard title="Fraud detection and alerts"
                    description="We monitor for suspicious activity and send instant alerts to keep your money safe."
                    dotClass="bg-red-500" outerCircleClass="bg-red-500 opacity-10" showDivider />
                <SecurityCard title="Transaction notifications"
                    description="Get real-time updates every time money moves—so you're always in control."
                    dotClass="bg-green-500" outerCircleClass="bg-green-500 opacity-10" />
                <SecurityCard title="Secure cloud backups"
                    description="Your data is safely backed up, so even if you lose your phone, your business records are never lost."
                    dotClass="bg-blue-300" outerCircleClass="bg-blue-300 opacity-10" showDivider />
                <SecurityCard title="End-to-end encryption"
                    description="All your data is encrypted, ensuring it’s protected from unauthorized access."
                    dotClass="bg-yellow-500" outerCircleClass="bg-yellow-500 opacity-10" showDivider />
                <SecurityCard title="24/7 support" description="Our team is here whenever you needhelp—day or night."
                    dotClass="bg-purple-500" outerCircleClass="bg-purple-500 opacity-10" />
            </div>
        </div>
    </section>
</template>

<script setup>
import SecurityCard from './SecurityCard.vue';
</script>