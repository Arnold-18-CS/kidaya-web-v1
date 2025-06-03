<template>
    <section class="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-12">
        <h1 class="text-3xl font-extrabold mb-4 text-center">404 - Page Not Found</h1>
        <p class="mb-4 text-center">The page you are looking for does not exist.</p>
        <RouterLink to="/" class="text-purple-600 hover:underline">Return to Home</RouterLink>
    </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>