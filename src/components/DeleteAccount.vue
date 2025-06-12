<template>
    <section class="relative min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-12">
        <div class="max-w-4xl mx-auto px-4 py-10 text-gray-800 dark:text-gray-100">
            <RouterLink id="top" to="/" class="absolute top-4 left-4 text-purple-600 hover:underline">
                ← Back to Home
            </RouterLink>
            <h1 class="text-3xl font-bold mb-6">Delete Your Account</h1>
            <p class="text-sm mb-6">Please read this information carefully before proceeding.</p>

            <div class="space-y-6">
                <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                    <h2 class="text-xl font-semibold text-red-700 dark:text-red-300 mb-4">⚠️ Important Information</h2>
                    <ul class="list-disc list-inside space-y-2 text-red-600 dark:text-red-400">
                        <li>This action cannot be undone</li>
                        <li>All your data will be permanently deleted</li>
                        <li>Any active subscriptions will be cancelled</li>
                        <li>You will lose access to all your business records</li>
                    </ul>
                </div>

                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                    <h2 class="text-xl font-semibold mb-4">Before You Delete</h2>
                    <ul class="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                        <li>Download any important data you want to keep</li>
                        <li>Cancel any active subscriptions</li>
                        <li>Inform your team members if you're the account owner</li>
                    </ul>
                </div>
                
                <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                    <h2 class="text-xl font-semibold text-yellow-700 dark:text-yellow-300 mb-4">Processing Period</h2>
                    <p class="text-yellow-600 dark:text-yellow-400">
                        Your account deletion request will be processed within 30 days. During this period, your account will be deactivated and you will not be able to access your data.
                    </p>
                </div>

                <form @submit.prevent="handleDeleteAccount" class="space-y-6">
                    <div>
                        <label for="email" class="block text-sm font-medium mb-2">Enter your email address below to confirm your account deletion request</label>
                        <input 
                            type="email" 
                            id="email" 
                            v-model="email"
                            class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            required
                        />
                    </div>

                    <div class="flex items-center">
                        <input 
                            type="checkbox" 
                            id="confirm" 
                            v-model="confirmed"
                            class="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                            required
                        />
                        <label for="confirm" class="ml-2 text-sm text-gray-600 dark:text-gray-300">
                            I understand that this action cannot be undone
                        </label>
                    </div>

                    <button 
                        type="submit"
                        :disabled="!confirmed || !email"
                        class="w-full px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
                    >
                        Delete My Account
                    </button>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useDarkMode } from '../composables/useDarkMode';

const email = ref('');
const confirmed = ref(false);
const { darkMode } = useDarkMode();

const handleDeleteAccount = async () => {
    if (!confirmed.value || !email.value) return;
    
    try {
        // TODO: Implement account deletion logic
        // This should include:
        // 1. Verify email
        // 2. Delete user data
        // 3. Cancel subscriptions
        // 4. Log out user
        // 5. Redirect to home page
        
        console.log('Account deletion requested');
    } catch (error) {
        console.error('Error deleting account:', error);
    }
};
</script>
