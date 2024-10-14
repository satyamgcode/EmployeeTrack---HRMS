import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '../components/HomePage.vue';
import MainLayout from '../components/MainLayout.vue';

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage,
  },
  {
    path: '/home',
    name: 'home',
    component: MainLayout,
  },
  {
    path: '/register',
    name : 'register',
    component : () => import('../components/RegisterPage.vue'),
  },
  {
    path: '/login',
    name : 'login',
    component : () => import('../components/LoginPage.vue'),
  },
  {
    path : '/overview',
    name : 'overview',
    component : () => import('../components/OverviewTab.vue'),
  },
  {
    path : '/details',
    name: 'details',
    component : () => import('../components/DetailsTab.vue'),
  },
  {
    path : '/contact',
    name : 'contact',
    component : () => import('../components/ContactTab.vue'),
  },
  {
    path: '/documents',
    name : 'documents',
    component : () => import('../components/EducationTab.vue'),
  },
  {
    path : '/chatroom',
    name : 'chatroom',
    component : () => import('../components/ChatRoom.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
