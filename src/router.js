import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './pages/MainPage.vue';
import TicketListPage from './pages/TicketListPage.vue';
import ProfilePage from './pages/ProfilePage.vue';
import LogInPage from './pages/LogInPage.vue';
import registerPage from './pages/RegisterPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage,
    },
    {
      path: '/tickets',
      name: 'tickets',
      component: TicketListPage,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfilePage,
    },
    {
      path: '/login',
      name: '/login',
      component: LogInPage,
    },
    {
      path: '/register',
      name: '/register',
      component: registerPage,
    },
  ],
});

export default router;
