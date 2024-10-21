<template>
    <header class="w-full shadow-md bg-white">
      <div class="container mx-auto flex justify-between items-center py-2 px-6">
        <div class="flex items-center">
          <img :src="logo" alt="EmployeePro Logo" class="h-8 mr-2"/>
          <span class="text-xl font-bold text-gray-700"><router-link to="/">EmployeeTrack</router-link></span>
        </div>
  
        <nav v-if="showNavItems" class="flex space-x-8">
          <router-link 
            v-for="link in navLinks" 
            :key="link.text" 
            :to="link.route" 
            class="text-gray-700 hover:text-purple-500 transition duration-300"
            active-class="text-purple-500">
            {{ link.text }}
          </router-link>
        </nav>
  
        <button @click="handleClick() && emit('clickHeaderButton')"   class=" bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition duration-300">
          {{ buttonName }}
        </button>
      </div>
    </header>
  </template>
  
  <script setup>
  import {  reactive  } from 'vue';
  import logo from '../../assets/home-logo.svg';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  
  const navLinks = reactive([
    { text: 'Home', route: '/' },
    { text: 'Features', route: '/features' },
    { text: 'About Us', route: '/about' },
    { text: 'Contact Us', route: '/contact' },
  ]);
  const props = defineProps({
    showNavItems: {
      type: Boolean,
      default: true
    },
    buttonName: {
      type: String,
      default: 'Get Started'
    }
  })

 const emit = defineEmits(['clickHeaderButton']);

 const handleClick = () => {
    router.push('/register');
  };

  </script>
  