<template>
    <section class="bg-gray-100 dark:bg-gray-800 py-16 px-6 md:px-16 font-urbanist relative">
        <div class="max-w-6xl mx-auto">
            <div class="flex flex-col md:flex-row items-start gap-8 md:mr-0 md:pr-0">
                <!-- Header and Navigation (Left, stacked) -->
                <div class="md:basis-2/5 md:w-2/5 w-full flex flex-col md:mr-8">
                    <div>
                        <p
                            class="text-sm font-semibold text-purple-600 dark:text-purple-300 uppercase tracking-wide mb-3">
                            Testimonial
                        </p>
                        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white max-w-3xl mx-auto">
                            Trusted by entrepreneurs like you.
                        </h2>
                        <p class="text-base md:text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-xl">
                            Hear from small and growing business owners who’ve used Kidaya to take control of their
                            finances,
                            reduce stress, and make smarter decisions.
                        </p>
                    </div>
                    <!-- Carousel Navigation (below header, left aligned) -->
                    <div class="flex flex-row items-center gap-4 mt-8">
                        <button
                            class="w-12 h-12 bg-gray-100 border-gray-300 border-2 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-200"
                            @click="prev" :aria-disabled="isPrevDisabled" :tabindex="isPrevDisabled ? -1 : 0"
                            :class="{ 'opacity-50 cursor-not-allowed': isPrevDisabled }">
                            <span class="text-gray-900 dark:text-gray-100">&lt;</span>
                        </button>
                        <button
                            class="w-12 h-12 bg-gray-900 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-900 dark:hover:bg-gray-600 transition duration-200"
                            @click="next" :aria-disabled="isNextDisabled" :tabindex="isNextDisabled ? -1 : 0"
                            :class="{ 'opacity-50 cursor-not-allowed': isNextDisabled }">
                            <span class="text-white dark:text-gray-100">&gt;</span>
                        </button>
                    </div>
                </div>
                <!-- Testimonial Cards (Right) -->
                <div class="md:basis-3/5 md:w-3/5 w-full">
                    <div ref="carousel" class="flex overflow-x-auto gap-6 scrollbar-hide snap-x snap-mandatory"
                        style="scroll-behavior: smooth; min-width: 0;">
                        <div v-for="(testimonial, idx) in visibleTestimonials" :key="testimonial.name + idx"
                            class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex-1 min-w-[320px] max-w-sm snap-center">
                            <div class="flex items-center mb-4">
                                <span class="text-yellow-400" aria-label="5 stars">★★★★★</span>
                            </div>
                            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                                {{ testimonial.text }}
                            </p>
                            <div class="flex items-center">
                                <div
                                    class="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full mr-3 flex items-center justify-center">
                                    <span class="text-gray-500 dark:text-gray-400 text-lg font-bold">
                                        {{ initials(testimonial.name) }}
                                    </span>
                                </div>
                                <div>
                                    <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">{{
                                        testimonial.name }}</p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">{{ testimonial.company }}</p>
                                </div>
                            </div>
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
        text: '“Before Kidaya, I used to write my sales in a notebook and forget half of them by the end of the week. Now I just open my phone and see exactly what I’ve made, what I’ve spent, and who still owes me. It’s made a big difference in how I run things.”',
        name: 'Eddy Collo',
        company: 'EdTech Solutions, Kisumu'
    },
    {
        text: '“We’re a team of 3, and it was hard to keep tabs on everything. Kidaya helped us stay organized. Even our supplier payments are now easier to manage. It’s simple, and it actually works.”',
        name: 'Kelvin Onesmus',
        company: 'MadebyKellz, Nairobi'
    },
    {
        text: '“Kidaya has helped me track my expenses and profits with ease. I can now focus on growing my business instead of worrying about paperwork.”',
        name: 'Grace Wanjiku',
        company: 'Grace’s Boutique, Nakuru'
    }
]

const carousel = ref(null)
const current = ref(0)
const visibleCount = 3

const visibleTestimonials = computed(() => {
    // Always show visibleCount testimonials, starting from current
    const arr = []
    for (let i = 0; i < visibleCount; i++) {
        arr.push(testimonials[(current.value + i) % testimonials.length])
    }
    return arr
})

function prev() {
    current.value = (current.value - 1 + testimonials.length) % testimonials.length
}

function next() {
    current.value = (current.value + 1) % testimonials.length
}

function initials(name) {
    return name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
}

// Optionally disable prev/next if only enough for one page
const isPrevDisabled = computed(() => testimonials.length <= visibleCount)
const isNextDisabled = computed(() => testimonials.length <= visibleCount)
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>