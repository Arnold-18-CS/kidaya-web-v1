import { ref, watch } from 'vue';

const darkMode = ref(localStorage.getItem('darkMode') === 'true');

// Initialize dark mode based on stored preference
if (darkMode.value) {
    document.documentElement.classList.add('dark');
} else if (localStorage.getItem('darkMode') === null) {
    // If no stored preference, use system preference
    darkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (darkMode.value) {
        document.documentElement.classList.add('dark');
    }
}

// Watch for changes and update localStorage and DOM
watch(darkMode, (newValue) => {
    localStorage.setItem('darkMode', newValue);
    if (newValue) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
});

export function useDarkMode() {
    const toggleDarkMode = () => {
        darkMode.value = !darkMode.value;
    };

    return {
        darkMode,
        toggleDarkMode
    };
} 