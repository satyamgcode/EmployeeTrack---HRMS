<template>
  <section class="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gray-900">
    <!-- Animated Background -->
    <div class="absolute inset-0 z-0">
      <img 
        :src="HeroImage" 
        class="w-full h-full object-cover opacity-40 scale-105 animate-slow-zoom"
        alt="Hero Background"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-transparent to-gray-900"></div>
    </div>

    <!-- Content -->
    <div class="container mx-auto px-6 relative z-10 pt-20">
      <div class="flex flex-col items-center text-center">
        <!-- Badge -->
        <div class="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-8 animate-fade-in-up">
          <span class="flex h-2 w-2 rounded-full bg-brand-orange animate-pulse"></span>
          <span class="text-white text-xs font-bold uppercase tracking-widest">New: Payroll Automation 2.0</span>
        </div>

        <h1 class="text-4xl md:text-6xl lg:text-8xl font-black text-white leading-tight mb-6 animate-fade-in-up delay-100">
          Empowering <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-orange">Teams</span><br />
          <span class="text-3xl md:text-5xl lg:text-6xl font-light opacity-90">Transforming Workplaces.</span>
        </h1>

        <p class="max-w-2xl text-lg md:text-xl text-gray-300 mb-10 animate-fade-in-up delay-200">
          {{ subtitle || "The all-in-one HRMS solution designed for the modern workforce. Streamline operations, engage employees, and grow your business." }}
        </p>

        <div class="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up delay-300">
          <router-link 
            to="/CreateAccount" 
            class="group bg-brand-purple text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-purple/90 transition-all flex items-center gap-3 shadow-2xl shadow-brand-purple/30 hover:-translate-y-1"
          >
            Get Started Free
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </router-link>
          
          <button class="px-8 py-4 rounded-full font-bold text-lg text-white border border-white/20 hover:bg-white/10 transition-all backdrop-blur-sm">
            Watch Demo
          </button>
        </div>

        <!-- Floating Stats (Mobile Hidden or Simplified) -->
        <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 animate-fade-in-up delay-400">
          <div class="text-center">
            <p class="text-3xl md:text-4xl font-black text-brand-orange">10k+</p>
            <p class="text-sm text-gray-400 uppercase tracking-widest font-bold mt-1">Users</p>
          </div>
          <div class="text-center">
            <p class="text-3xl md:text-4xl font-black text-white">99%</p>
            <p class="text-sm text-gray-400 uppercase tracking-widest font-bold mt-1">Satisfaction</p>
          </div>
          <div class="text-center">
            <p class="text-3xl md:text-4xl font-black text-brand-purple">24/7</p>
            <p class="text-sm text-gray-400 uppercase tracking-widest font-bold mt-1">Support</p>
          </div>
          <div class="text-center">
            <p class="text-3xl md:text-4xl font-black text-white">50+</p>
            <p class="text-sm text-gray-400 uppercase tracking-widest font-bold mt-1">Countries</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl"></div>
    <div class="absolute -top-24 -right-24 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl"></div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue';
import HeroImage from '../assets/images/office.jpg';

const props = defineProps({
  title: String,
  subtitle: String,
  button: Boolean,
});
</script>

<style scoped>
@keyframes slow-zoom {
  0% { transform: scale(1); }
  100% { transform: scale(1.1); }
}

.animate-slow-zoom {
  animation: slow-zoom 20s infinite alternate ease-in-out;
}

@keyframes fade-in-up {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

.animate-fade-in-up {
  opacity: 0;
  animation: fade-in-up 0.8s forwards cubic-bezier(0.4, 0, 0.2, 1);
}

.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
.delay-400 { animation-delay: 0.4s; }
</style>
  