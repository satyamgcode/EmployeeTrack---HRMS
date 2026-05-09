<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from './headers/HomeHeader.vue';
import RegisterImg from '../assets/images/registerImg.jpg';

const router = useRouter();

const props = defineProps({
    formType: {
        type: String,
        default: 'Create your account'
    },
    subtitle: {
        type: String,
        default: ''
    }
})

const form = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
});

const registerAdmin = () => {
  if (form.password !== form.confirmPassword) {
    alert('Passwords do not match!');
    return;
  }
  // Simulate registration
  localStorage.setItem('adminName', form.name);
  localStorage.setItem('adminEmail', form.email);
  
  router.push('/onboarding/organization-setup');
};
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Navbar at the top -->
    <div class="fixed top-0 left-0 right-0 z-50">
      <Navbar :showNavItems="false" :buttonName="'Sign In'" theme="light" />
    </div>

    <!-- Main content -->
    <div class="container mx-auto px-6 pt-32 pb-20">
      <div class="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32">
        
        <!-- Left Side: Branding & Image -->
        <div class="lg:w-1/2 text-center lg:text-left">
          <div class="inline-flex items-center space-x-2 bg-brand-purple/10 border border-brand-purple/20 px-4 py-2 rounded-full mb-6">
            <span class="flex h-2 w-2 rounded-full bg-brand-purple"></span>
            <span class="text-brand-purple text-xs font-bold uppercase tracking-widest">Join the Future of HR</span>
          </div>
          <h1 class="text-5xl lg:text-7xl font-black text-gray-900 mb-6">
            Employee<span class="text-brand-orange">Track</span>
          </h1>
          <p class="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
            Welcome to the most powerful HRMS. Join 20,000+ companies and start managing your team like a pro.
          </p>
          <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-brand-purple to-brand-orange rounded-[40px] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img :src="RegisterImg" class="relative rounded-[40px] shadow-2xl w-full max-w-[500px] mx-auto lg:mx-0 object-cover aspect-square" alt="Register Image">
          </div>
        </div>

        <!-- Right Side: Form -->
        <div class="lg:w-1/2 w-full max-w-md">
          <div class="bg-white p-8 lg:p-10 rounded-[32px] shadow-2xl border border-gray-100">
            <h2 class="text-3xl font-black text-gray-900 mb-2">{{ formType }}</h2>
            <p class="text-gray-500 mb-8">{{ subtitle || 'Start your 14-day free trial today.' }}</p>

            <slot name="formName">
              <form @submit.prevent="registerAdmin" class="space-y-6">
                <!-- Full Name -->
                <div>
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="form.name" 
                    class="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all" 
                    placeholder="Enter your full name" 
                    required 
                  />
                </div>

                <!-- Email -->
                <div>
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Work Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email" 
                    class="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all" 
                    placeholder="name@company.com" 
                    required 
                  />
                </div>

                <!-- Password -->
                <div>
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
                  <input 
                    type="password" 
                    id="password" 
                    v-model="form.password" 
                    class="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all" 
                    placeholder="••••••••" 
                    required 
                  />
                </div>

                <!-- Confirm Password -->
                <div>
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="confirmPassword">Confirm Password</label>
                  <input 
                    type="password" 
                    id="confirmPassword" 
                    v-model="form.confirmPassword" 
                    class="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all" 
                    placeholder="••••••••" 
                    required 
                  />
                </div>

                <!-- Submit Button -->
                <button 
                  type="submit" 
                  class="w-full bg-brand-purple text-white font-black py-4 rounded-2xl hover:bg-brand-purple/90 transition-all shadow-xl shadow-brand-purple/20 active:scale-[0.98]"
                >
                  Create Account
                </button>

                <div class="pt-6 border-t border-gray-100 flex flex-col items-center gap-4">
                  <p class="text-gray-600">
                    Already have an account? 
                    <router-link to="/login" class="text-brand-purple font-bold hover:underline">Sign In</router-link>
                  </p>
                  <p class="text-xs text-gray-400 text-center">
                    By signing up, you agree to our <a href="#" class="underline">Terms</a> and <a href="#" class="underline">Privacy Policy</a>.
                  </p>
                </div>
              </form>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <style scoped>
  /* You can add custom styles here */
  </style>
  