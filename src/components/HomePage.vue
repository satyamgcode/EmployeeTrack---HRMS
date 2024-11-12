<template>
  <div class="fixed top-0 left-0 right-0 z-50">
    <Navbar :buttonName="'Sign in'" />
  </div>
  <HeroSection 
    title="All-in-one workspace for empowered teams"
    subtitle="Streamline your workflow with intuitive tools and real-time collaboration." 
  />

  <div class="flex flex-col items-center pt-8 pb-8 gap-7 text-gray-700">
    <!-- Title and description -->
    <h2 class="text-5xl font-semibold text-center">Key Features</h2>
    <p class="text-lg text-center max-w-3xl">
      Explore the powerful features of EmployeePro designed to streamline your HR
      processes with ease and efficiency.
    </p>

    <!-- Features section -->
    <div class="flex flex-col gap-8 px-4 max-w-[56rem]">
      <div class="flex items-center md:flex-row gap-5 bg-white rounded-lg  p-6">
        <div class="flex flex-col justify-center text-center md:text-left">
          <h3 class="text-2xl font-bold text-gray-900">Smart Payroll</h3>
          <p class="text-lg text-gray-600 mt-2">
            Automate payroll management with precision and ease. Ensure timely
            and accurate salary disbursements while complying with regulations.
          </p>
          <div class="mt-4 flex justify-center md:justify-start gap-3 items-center">
            <button class="px-4 py-2 bg-purple-600 text-white rounded-lg ">Try now</button>
            <a href="#" class="text-purple-600 ">Learn more</a>
          </div>
        </div>
        <img :src="meetingImg" alt="Smart Payroll" class="h-60 w-80 rounded-xl object-cover" />
      </div>

      <div class="flex items-center md:flex-row gap-5 bg-white rounded-lg  p-6">
        <img :src="conductorImg" alt="Employee Self-Service" class="h-60 w-80 rounded-xl object-cover" />
        <div class="flex flex-col justify-center text-center md:text-left">
          <h3 class="text-2xl font-bold text-gray-900">Employee Self-Service</h3>
          <p class="text-lg text-gray-600 mt-2">
            Empower employees with self-service access to personal data, leave
            applications, and performance reviews, reducing administrative workload.
          </p>
          <div class="mt-4 flex justify-center md:justify-start gap-3 align-center">
            <button class="px-4 py-2 bg-purple-600 text-white rounded-lg">Try now</button>
            <a href="#" class="text-purple-600 ">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-neutral-100 flex flex-col gap-4 text-center items-center py-8 text-gray-700">
    <p class="text-purple-500 text-5xl">Join 20,000+ Users!</p>
    <p class="text-lg">
      Be part of our thriving community and enhance your career development. Sign up now to get started! 
    </p>
    <button class="mt-6 px-6 w-max py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg shadow">
          <router-link to="/CreateAccount">Register</router-link>
        </button>
  </div>


  <AppShots />

  <AppFooter class="bg-neutral-50" />
</template>


<script setup>
import Navbar from './headers/HomeHeader.vue';
import HeroSection from './HeroSection.vue';
import AppFooter from './Footer/AppFooter.vue';
import AppShots from './AppShots.vue';

import meetingImg from '../assets/images/meeting.jpg';
import conductorImg from '../assets/images/conduct.jpg';
</script>

