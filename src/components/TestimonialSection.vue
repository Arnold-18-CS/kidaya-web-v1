<template>
    <section class="bg-gray-100 dark:bg-gray-800 py-16 px-6 md:px-16 relative">
        <div class="max-w-6xl mx-auto">
            <div class="flex flex-col md:flex-row items-start gap-8">
                <!-- Left Section -->
                <div class="md:basis-2/5 md:w-2/5 w-full flex flex-col">
                    <p class="text-sm font-semibold text-purple-600 dark:text-purple-300 uppercase tracking-wide mb-3">
                        Testimonial
                    </p>
                    <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
                        Trusted by entrepreneurs like you.
                    </h2>
                    <p class="text-base md:text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-xl">
                        Hear from small and growing business owners who’ve used Kidaya to
                        take control of their finances, reduce stress, and make smarter
                        decisions.
                    </p>

                    <!-- Navigation Buttons & Pagination Dots (Desktop only) -->
                    <div class="hidden md:flex flex-col gap-6 mt-8">
                        <div class="flex flex-row items-center gap-4">
                            <button
                                class="w-12 h-12 bg-gray-100 border-2 border-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-200"
                                @click="prev" :disabled="isPrevDisabled"
                                :class="{ 'opacity-50 cursor-not-allowed': isPrevDisabled }">
                                <span class="text-gray-900 dark:text-gray-100">&lt;</span>
                            </button>
                            <button
                                class="w-12 h-12 bg-gray-900 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-900 dark:hover:bg-gray-600 transition duration-200"
                                @click="next" :disabled="isNextDisabled"
                                :class="{ 'opacity-50 cursor-not-allowed': isNextDisabled }">
                                <span class="text-white dark:text-gray-100">&gt;</span>
                            </button>
                        </div>
                        <div class="flex mt-2 space-x-2">
                            <span v-for="(_, idx) in totalSlides" :key="idx" class="w-3 h-3 rounded-full" :class="{
                                'bg-purple-600': currentSlide === idx,
                                'bg-gray-400 dark:bg-gray-500': currentSlide !== idx
                            }"></span>
                        </div>
                    </div>
                </div>

                <!-- Carousel Section -->
                <div ref="carousel" class="relative md:basis-4/5 overflow-hidden w-full flex flex-col"
                    @touchstart="startTouch" @touchmove="moveTouch" @mouseenter="hovering = true"
                    @mouseleave="hovering = false">
                    <div class="flex transition-transform duration-500 ease-in-out"
                        :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
                        <div v-for="(testimonial, idx) in testimonials" :key="idx" class="flex-shrink-0 w-full px-2">
                            <div class="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md h-full">
                                <div class="flex items-center mb-4">
                                    <span class="text-yellow-400" aria-label="5 stars">★★★★★</span>
                                </div>
                                <p class="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-6">
                                    {{ testimonial.text }}
                                </p>
                                <div class="flex items-center">
                                    <div
                                        class="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full mr-4 flex items-center justify-center">
                                        <span class="text-gray-500 dark:text-gray-400 text-lg font-bold">
                                            {{ initials(testimonial.name) }}
                                        </span>
                                    </div>
                                    <div>
                                        <p class="text-md font-semibold text-gray-900 dark:text-gray-100">
                                            {{ testimonial.name }}
                                        </p>
                                        <p class="text-sm text-gray-500 dark:text-gray-400">
                                            {{ testimonial.company }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Navigation Buttons & Pagination Dots (Mobile only) -->
                    <div class="flex flex-col gap-4 items-center mt-6 md:hidden">
                        <div class="flex flex-row items-center gap-4">
                            <button
                                class="w-12 h-12 bg-gray-100 border-2 border-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-200"
                                @click="prev" :disabled="isPrevDisabled"
                                :class="{ 'opacity-50 cursor-not-allowed': isPrevDisabled }">
                                <span class="text-gray-900 dark:text-gray-100">&lt;</span>
                            </button>
                            <button
                                class="w-12 h-12 bg-gray-900 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-900 dark:hover:bg-gray-600 transition duration-200"
                                @click="next" :disabled="isNextDisabled"
                                :class="{ 'opacity-50 cursor-not-allowed': isNextDisabled }">
                                <span class="text-white dark:text-gray-100">&gt;</span>
                            </button>
                        </div>
                        <div class="flex mt-2 space-x-2">
                            <span v-for="(_, idx) in totalSlides" :key="idx" class="w-3 h-3 rounded-full" :class="{
                                'bg-purple-600': currentSlide === idx,
                                'bg-gray-400 dark:bg-gray-500': currentSlide !== idx
                            }"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const testimonials = [
    {
        text: '“Before Kidaya, I used to write my sales in a notebook and forget half of them by the end of the week...”',
        name: 'Eddy Collo',
        company: 'EdTech Solutions, Kisumu',
    },
    {
        text: '“We’re a team of 3, and it was hard to keep tabs on everything. Kidaya helped us stay organized...”',
        name: 'Kelvin Onesmus',
        company: 'MadebyKellz, Nairobi',
    },
    {
        text: '“Kidaya has helped me track my expenses and profits with ease. I can now focus on growing my business...”',
        name: 'Grace Wanjiku',
        company: 'Grace’s Boutique, Nakuru',
    },
]

const currentSlide = ref(0)
const hovering = ref(false)
const cardsPerView = ref(1)

const totalSlides = computed(() =>
    Math.max(1, testimonials.length - cardsPerView.value + 1)
)

function next() {
    if (currentSlide.value < totalSlides.value - 1) {
        currentSlide.value++
    }
}
function prev() {
    if (currentSlide.value > 0) {
        currentSlide.value--
    }
}
const isPrevDisabled = computed(() => currentSlide.value === 0)
const isNextDisabled = computed(() => currentSlide.value >= totalSlides.value - 1)

function initials(name) {
    return name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
}

// Swipe support
let xStart = null
function startTouch(e) {
    xStart = e.touches[0].clientX
}
function moveTouch(e) {
    if (!xStart) return
    const xEnd = e.touches[0].clientX
    const diff = xStart - xEnd
    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            next()
        } else {
            prev()
        }
        xStart = null
    }
}
</script>
