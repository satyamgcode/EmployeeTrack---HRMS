import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '../components/HomePage.vue';
import MainLayout from '../components/MainLayout.vue';

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage,
  },
  // for company HRMS setup steps
  {
    path: '/CreateAccount',
    name : 'step1',
    component : () => import('../components/introduction/OrganisationName.vue'),
  },
  {
    path: '/step2',
    name : 'step2',
    component : () => import('../components/introduction/OrganisationStep2.vue'),
  },
  {
    path: '/step3',
    name : 'step3',
    component : () => import('../components/introduction/OrganisationStep3.vue'),
  },
  {
    path: '/step4',
    name : 'step4',
    component : () => import('../components/introduction/OrganisationStep4.vue'),
  },
  {
    path: '/step5',
    name : 'step5',
    component : () => import('../components/introduction/OrganisationStep5.vue'),
  },
  // side bar routes
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
  // tab routes
  {
    path : '/overview',
    name : 'overview',
    component : () => import('../components/OverviewTab.vue'),
  },
  {
    path : '/Companypolicy',
    name : 'Companypolicy',
    component : () => import('../components/Companypolicy.vue'),
  },
  {
    path : '/holidays',
    name : 'holidays',
    component : () => import('../components/Holidays.vue'),
  },
  {
    path : '/performance',
    name : 'performance',
    component : () => import('../components/PerformanceTab.vue'),
  },
  {
    path : '/users',
    name : 'users',
    component : () => import('../components/UsersTab.vue'),
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
  // others
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
