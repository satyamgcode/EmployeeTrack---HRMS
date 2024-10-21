<script setup>
import { reactive } from 'vue';
import Navbar from './headers/HomeHeader.vue';
import RegisterImg from '../assets/images/registerImg.jpg';

const props = defineProps({
    formType: {
        type: String,
        default: 'Register'
    }
})

const form = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  department: ''
});

const registerEmployee = () => {
  if (form.password !== form.confirmPassword) {
    alert('Passwords do not match!');
    return;
  }
  alert('Employee registered successfully!');
};
</script>

<template>
    <div>
      <!-- Navbar at the top -->
      <div class="fixed top-0 left-0 right-0 z-50">
        <Navbar :showNavItems="false" :buttonName="'Become a Member'" />
      </div>
  
      <!-- Main content starts here -->
       <div class="flex gap-32 justify-center max-w-screen-xl mx-auto pt-28">
        <div>
            <h1 class="text-gray-700 text-7xl font-bold text-center">EmployeePro</h1>
            <p class="pt-14" >  welcome to the EmployeePro , make your career more efficient and productive</p>
            <img :src="RegisterImg" class="size-[500px]" alt="Register Image">
        </div>
        <div>
        <h1 class="text-gray-700 text-lg font-bold text-center sm:min-w-96 mb-3">{{ formType }}</h1>
        <slot name="formName">
        <div class="bg-white shadow-md rounded-lg p-8 mb-2 max-w-lg mx-auto">
          <form @submit.prevent="registerEmployee">
            <!-- Full Name -->
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name" 
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                placeholder="Enter your full name" 
                required 
              />
            </div>
  
            <!-- Email -->
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                placeholder="Enter your email" 
                required 
              />
            </div>
  
            <!-- Password -->
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
              <input 
                type="password" 
                id="password" 
                v-model="form.password" 
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                placeholder="Enter a secure password" 
                required 
              />
            </div>
  
            <!-- Confirm Password -->
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="confirmPassword">Confirm Password</label>
              <input 
                type="password" 
                id="confirmPassword" 
                v-model="form.confirmPassword" 
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                placeholder="Re-enter your password" 
                required 
              />
            </div>
  
            <!-- Department -->
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="department">Department</label>
              <select 
                id="department" 
                v-model="form.department" 
                class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select a department</option>
                <option value="HR">Human Resources</option>
                <option value="IT">Information Technology</option>
                <option value="Finance">Finance</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>
  
            <!-- Submit Button -->
            <div class="items-center justify-between">
                <div class="flex justify-between">
                    <button 
                type="submit" 
                class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Register
              </button>
              <p class="text-red-500"><router-link>forgot password</router-link></p>
                </div>
              <br>
              <div class="flex justify-between">
                <p>Already have an account? </p>
              <router-link to="/login" class="text-purple-800">Login</router-link>
              </div>
            </div>
          </form>
        </div>
    </slot>
      </div>
       </div>
     
    </div>
  </template>
  
  <style scoped>
  /* You can add custom styles here */
  </style>
  