import { createRouter, createWebHistory } from 'vue-router';
import TermsOfService from '../components/TermsOfService.vue';
import PrivacyPolicy from '../components/PrivacyPolicy.vue';
import NotFound from '../components/NotFound.vue';
import Home from '../components/Home.vue';
import DeleteAccount from '../components/DeleteAccount.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/tos',
        name: 'TermsOfService',
        component: TermsOfService
    },
    {
        path: '/privacy',
        name: 'PrivacyPolicy',
        component: PrivacyPolicy
    },
    {
        path: '/delete',
        name: 'DeleteAccount',
        component: DeleteAccount
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, _from, _savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            };
        }
        return { top: 0 };
    }
});

export default router;