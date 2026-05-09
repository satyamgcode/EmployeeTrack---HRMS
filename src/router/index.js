import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '../components/HomePage.vue';
import AboutPage from '../components/AboutPage.vue';
import ContactPage from '../components/ContactPage.vue';
import FeaturesPage from '../components/FeaturesPage.vue';

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
  },
  {
    path: '/features',
    name: 'Features',
    component: FeaturesPage,
  },
  // for company HRMS setup steps
  {
    path: '/onboarding/organization-setup',
    name : 'onboarding-step1',
    component : () => import('../components/introduction/OrganisationName.vue'),
  },
  {
    path: '/onboarding/profile-setup',
    name : 'onboarding-step2',
    component : () => import('../components/introduction/OrganisationStep2.vue'),
  },
  {
    path: '/onboarding/invite-team',
    name : 'onboarding-step3',
    component : () => import('../components/introduction/OrganisationStep3.vue'),
  },
  {
    path: '/onboarding/current-project',
    name : 'onboarding-step4',
    component : () => import('../components/introduction/OrganisationStep4.vue'),
  },
  {
    path: '/onboarding/choose-plan',
    name : 'onboarding-step5',
    component : () => import('../components/introduction/OrganisationStep5.vue'),
  },
  // side bar routes
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
  // others
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
