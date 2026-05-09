<template>
  <div class="bg-white min-h-screen">
    <HomeHeader :buttonName="'Sign In'" />
    
    <HeroSection 
      subtitle="The ultimate platform for HR management, payroll automation, and employee engagement. Experience the future of work today." 
    />

    <!-- Quick About Section -->
    <section class="py-24 bg-gray-50 overflow-hidden">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row items-center gap-16">
          <div class="lg:w-1/2 relative">
            <div class="absolute -top-12 -left-12 w-64 h-64 bg-brand-purple/10 rounded-full blur-3xl"></div>
            <img src="/src/assets/images/meeting.jpg" alt="About Us" class="relative z-10 rounded-[40px] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500" />
          </div>
          <div class="lg:w-1/2">
            <h2 class="text-brand-purple font-bold tracking-widest uppercase text-sm mb-4">Our Story</h2>
            <h3 class="text-4xl font-black text-gray-900 mb-6">Redefining HR for the Modern Era</h3>
            <p class="text-lg text-gray-600 mb-8 leading-relaxed">
              EmployeeTrack was born out of a simple vision: to make workplace management effortless. We believe that when HR processes are streamlined, teams can focus on what truly matters—growth and culture.
            </p>
            <router-link to="/about" class="text-brand-purple font-black flex items-center gap-2 group">
              Learn more about our mission
              <svg class="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-24 bg-white relative overflow-hidden">
      <div class="container mx-auto px-6">
        <div class="text-center max-w-3xl mx-auto mb-20">
          <h2 class="text-brand-purple font-bold tracking-widest uppercase text-sm mb-4">Core Features</h2>
          <h3 class="text-4xl md:text-5xl font-black text-gray-900 mb-6">Powerful Tools for Every Team</h3>
          <p class="text-lg text-gray-600">
            From smart payroll to real-time analytics, we provide the ultimate suite of HR tools.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-10 rounded-[40px] bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 transition-all shadow-sm hover:shadow-2xl">
            <div class="w-14 h-14 bg-brand-orange/10 text-brand-orange rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h4 class="text-2xl font-bold mb-4">Smart Payroll</h4>
            <p class="text-gray-600 mb-6">Automated calculations and tax compliance at your fingertips.</p>
            <router-link to="/features" class="text-brand-orange font-bold">Explore</router-link>
          </div>
          <div class="p-10 rounded-[40px] bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 transition-all shadow-sm hover:shadow-2xl">
            <div class="w-14 h-14 bg-brand-purple/10 text-brand-purple rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            </div>
            <h4 class="text-2xl font-bold mb-4">Team Management</h4>
            <p class="text-gray-600 mb-6">Centralized records and secure data management for everyone.</p>
            <router-link to="/features" class="text-brand-purple font-bold">Explore</router-link>
          </div>
          <div class="p-10 rounded-[40px] bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 transition-all shadow-sm hover:shadow-2xl">
            <div class="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
            </div>
            <h4 class="text-2xl font-bold mb-4">Analytics</h4>
            <p class="text-gray-600 mb-6">Gain deep insights into turnover, performance, and trends.</p>
            <router-link to="/features" class="text-green-600 font-bold">Explore</router-link>
          </div>
        </div>
        <div class="mt-16 text-center">
          <router-link to="/features" class="inline-block bg-gray-900 text-white px-12 py-4 rounded-full font-black shadow-xl hover:-translate-y-1 transition-all">
            See All Features
          </router-link>
        </div>
      </div>
    </section>

    <!-- Quick Contact Section -->
    <section class="py-24 bg-brand-orange/5 relative overflow-hidden">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-12 bg-white p-12 lg:p-20 rounded-[50px] shadow-2xl relative">
          <div class="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl"></div>
          <div class="lg:w-3/5">
            <h2 class="text-4xl lg:text-5xl font-black text-gray-900 mb-6">Have questions? We're just a message away.</h2>
            <p class="text-xl text-gray-600 leading-relaxed">
              Our experts are ready to help you find the perfect HR setup for your team. Whether you're a startup or an enterprise, we've got you covered.
            </p>
          </div>
          <div class="lg:w-2/5 flex justify-center lg:justify-end">
            <router-link to="/contact" class="bg-brand-orange text-white px-12 py-5 rounded-full font-black text-xl hover:scale-110 transition-transform shadow-2xl">
              Contact Sales
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-white overflow-hidden">
      <div class="container mx-auto px-6">
        <div class="bg-gray-900 rounded-[40px] p-8 md:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
          <!-- Background Accents -->
          <div class="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div class="absolute bottom-0 left-0 w-48 h-48 bg-brand-purple/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

          <!-- Left Content -->
          <div class="lg:w-1/2 relative z-10 text-center lg:text-left">
            <span class="inline-block bg-brand-orange/20 text-brand-orange px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
              Get Started Today
            </span>
            <h2 class="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              Ready to Transform Your <span class="text-brand-orange">Workplace?</span>
            </h2>
            <p class="text-lg text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0">
              Join 20,000+ modern companies using EmployeeTrack to build better cultures and streamline HR processes.
            </p>
            <div class="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
              <router-link to="/CreateAccount" class="bg-brand-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-lg hover:scale-105">
                Register Now
              </router-link>
              <button class="text-white font-semibold px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 transition-colors">
                Talk to an Expert
              </button>
            </div>
          </div>

          <!-- Right Content (Visual Element) -->
          <div class="lg:w-1/2 relative z-10 hidden md:block">
            <div class="relative">
              <!-- Mockup UI Element -->
              <div class="bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-6 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center font-bold text-white">ET</div>
                  <div class="flex-1">
                    <div class="h-2 w-24 bg-white/20 rounded-full mb-2"></div>
                    <div class="h-2 w-16 bg-white/10 rounded-full"></div>
                  </div>
                </div>
                <div class="space-y-3">
                  <div class="h-8 bg-white/5 rounded-xl border border-white/5 flex items-center px-4 justify-between">
                    <div class="h-2 w-20 bg-white/20 rounded-full"></div>
                    <div class="w-4 h-4 bg-green-500/20 rounded-full"></div>
                  </div>
                  <div class="h-8 bg-white/5 rounded-xl border border-white/5 flex items-center px-4 justify-between">
                    <div class="h-2 w-24 bg-white/20 rounded-full"></div>
                    <div class="w-4 h-4 bg-brand-orange/20 rounded-full"></div>
                  </div>
                  <div class="h-8 bg-white/5 rounded-xl border border-white/5 flex items-center px-4 justify-between">
                    <div class="h-2 w-16 bg-white/20 rounded-full"></div>
                    <div class="w-4 h-4 bg-brand-purple/20 rounded-full"></div>
                  </div>
                </div>
              </div>
              <!-- Floating Elements -->
              <div class="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl -rotate-6 animate-bounce-slow">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <div class="text-sm font-bold text-gray-900">Success!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <AppShots />
    <AppFooter />
  </div>
</template>

<script setup>
import HomeHeader from './headers/HomeHeader.vue';
import HeroSection from './HeroSection.vue';
import AppFooter from './Footer/AppFooter.vue';
import AppShots from './AppShots.vue';

import meetingImg from '../assets/images/meeting.jpg';
import conductorImg from '../assets/images/conduct.jpg';
</script>

<style scoped>
/* Any component specific styles */
</style>

