<template>
    <Registerpage :formType="'Welcome Back'" :subtitle="'Please enter your details to sign in.'">

        <template #formName>
            <form @submit.prevent="loginUser" class="space-y-6">
                <!-- Email -->
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      v-model="form.email"
                      class="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all"
                      placeholder="Enter your email" 
                      required 
                    />
                </div>

                <!-- Password -->
                <div>
                    <div class="flex items-center justify-between mb-2">
                        <label class="block text-gray-700 text-sm font-bold" for="password">Password</label>
                        <router-link to="#" class="text-xs text-brand-purple hover:underline">Forgot password?</router-link>
                    </div>
                    <input 
                      type="password" 
                      id="password" 
                      v-model="form.password"
                      class="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all"
                      placeholder="Enter your password" 
                      required 
                    />
                </div>

                <!-- Submit Button -->
                <button 
                  type="submit"
                  class="w-full bg-brand-purple text-white font-black py-4 rounded-2xl hover:bg-brand-purple/90 transition-all shadow-xl shadow-brand-purple/20 active:scale-[0.98]"
                >
                  Sign In
                </button>

                <div class="pt-6 border-t border-gray-100 text-center">
                    <p class="text-gray-600 text-sm">
                        Don't have an account? 
                        <router-link to="/register" class="text-brand-purple font-bold hover:underline">Register</router-link>
                    </p>
                </div>
            </form>
        </template>
    </Registerpage>
</template>

<script setup>
import { reactive } from 'vue';
import Registerpage from '../components/RegisterPage.vue';
import router from '../router';

const form = reactive({
    email: '',
    password: ''
});

const loginUser = () => {
    if (!form.email || !form.password) {
        alert('Please fill in all fields!');
        return;
    }
    // In a real app, you would verify the email/password and get the company subdomain
    alert('Login successful! Redirecting to your dashboard...');
    const softwareUrl = import.meta.env.VITE_SOFTWARE_URL || 'http://localhost:5173';
    window.location.href = `${softwareUrl}/overview`;
};
</script>