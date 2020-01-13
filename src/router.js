import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/gril',
            name: 'gril',
            component: () => import('@/components/gril_view/Gril.vue'),
        },
    ]
});

export default router;
