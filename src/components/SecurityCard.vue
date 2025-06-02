<template>
    <div class="relative p-6 bg-transparent rounded-lg flex items-start space-x-4">
        <div class="flex-shrink-0 relative w-10 h-10 flex items-center justify-center">
            <!-- Outer circle with lower opacity -->
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-6 h-6 rounded-full" :class="outerCircleClass"></div>
            </div>
            <!-- Solid dot -->
            <div class="w-3 h-3 rounded-full relative z-10" :class="dotClass"></div>
        </div>
        <div>
            <h3 class="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">{{ title }}</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {{ description }}
            </p>
        </div>
        <!-- Divider for md+ screens, if showDivider is true -->
        <div v-if="showDivider"
            class="hidden md:block absolute top-[15px] bottom-[15px] right-0 w-px bg-gray-300 dark:bg-gray-700">
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dotClass: {
        type: String,
        required: true
    },
    outerCircleClass: {
        type: String,
        required: true
    },
    showDivider: {
        type: Boolean,
        default: false
    }
})
</script>