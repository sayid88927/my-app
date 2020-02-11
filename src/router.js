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
        {
            path: '/details',
            name: 'details',
            component: () => import('@/components/gril_view/DetailsImg.vue'),
        },
        {
            path: '/detailspage/:id',
            name: 'detailspage',
            component: () => import('@/components/home_view/DetailsPage.vue'),
        },
        {
            path: '/tagdetailspage',
            name: 'tagdetailspage',
            component: () => import('@/components/gril_view/TagDetailsImg.vue'),
        },
    ]
});

export default router;
