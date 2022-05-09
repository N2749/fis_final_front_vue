import {createRouter, createWebHistory} from 'vue-router';
import MainPage from './pages/MainPage.vue';
import TicketListPage from "./pages/TicketListPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: MainPage,
        },
        {
            path: '/tickets',
            component: TicketListPage,
        }
    ],
});

export default router;