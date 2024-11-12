<script setup>
import logo from '../assets/home-logo.svg';
import { useRouter, useRoute } from 'vue-router';
import MainHeader from './headers/MainHeader.vue';
import { ref, watch } from 'vue';

import employee from '../assets/icons/employee.svg';
import performance from '../assets/icons/performance.svg';
import user from '../assets/icons/user.svg';
import chat from '../assets/icons/chat.svg';
import shop from '../assets/icons/shop.svg';
import mailbox from '../assets/icons/mailbox.svg';
import Holiday from '../assets/icons/holiday-calendar.svg'

// Sidebar items
const sideBarList = [
  {
    text: 'Employee',
    route: '/overview',
    icon: employee,
  },
  {
    text: 'Performance',
    route: '/performance',
    icon: performance,
  },
  {
    text: 'User',
    route: '/users',
    icon: user,
  },
  {
    text: 'Chat',
    route: '/chatroom',
    icon: chat,
  },
  {
    text: ' Policy Documents',
    route: '/companypolicy',
    icon: shop,
  },
  {
    text: 'Holidays',
    route: '/holidays',
    icon: Holiday ,
  }
];

const router = useRouter();
const route = useRoute();

const activeTab = ref(route.path);

const setActive = (link) => {
  activeTab.value = link.route;
  router.push(link.route);
};

watch(route, () => {
  activeTab.value = route.path;
});
</script>

<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <div class="flex flex-col justify-between bg-white px-4 py-6 w-60 h-full min-w-60">
      <!-- Logo -->
      <div class="flex items-center mb-6">
        <img :src="logo" alt="EmployeeTrack Logo" class="h-8 mr-2" />
        <span class="text-xl font-bold text-gray-700"><router-link to="/">EmployeeTrack</router-link></span>
      </div>

      <!-- Sidebar Menu -->
      <div class="flex-grow">
        <div v-for="link in sideBarList" :key="link.text" 
             :class="{'bg-purple-100 text-purple-600': activeTab === link.route, 'text-gray-700': activeTab !== link.route}"
             class="flex items-center m-1 p-1 px-3 rounded-lg hover:bg-purple-100 hover:text-purple-500 transition duration-300 cursor-pointer"
             @click="setActive(link)">
          <img :src="link.icon" class="mr-3" />
          <span class="w-full text-sm font-medium py-0.5">{{ link.text }}</span>
        </div>
      </div>

      <!-- Profile section -->
      <div class="flex items-center p-3 bg-white border-t border-gray-200">
        <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Profile" class="w-10 h-10 rounded-full mr-3" />
        <div>
          <div class="text-gray-700 font-semibold">Satyam</div>
          <a href="#" class="text-purple-600 text-sm">View profile</a>
        </div>
        <span class="mdi mdi-cog-outline text-2xl text-gray-500 ml-auto"></span>
      </div>
    </div>

    <!-- Main content area -->
    <div class="flex-grow bg-stone-50 overflow-auto">
      <div class="sticky top-0">
        <MainHeader />
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style>
@import url('https://cdn.materialdesignicons.com/5.4.55/css/materialdesignicons.min.css');
</style>
