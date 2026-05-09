<template>
  <div class="bg-white min-h-screen">
    <HomeHeader :buttonName="'Sign In'" />
    
    <!-- Hero Section for About -->
    <section class="relative pt-32 pb-20 bg-gray-900 overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-orange/20 mix-blend-overlay"></div>
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-brand-purple/30 rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10 text-center">
        <h1 class="text-4xl md:text-6xl font-black text-white mb-6 animate-fade-in-up">
          Our Mission: <span class="text-brand-orange">Empowering People</span>
        </h1>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up delay-100">
          We're on a mission to transform how companies manage their most valuable asset—their people. 
        </p>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-24">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-brand-purple font-bold tracking-widest uppercase text-sm mb-4">Our Story</h2>
            <h3 class="text-4xl font-black text-gray-900 mb-6">Built by HR Experts, for Modern Teams</h3>
            <p class="text-lg text-gray-600 leading-relaxed mb-6">
              Founded in 2020, EmployeeTrack started with a simple idea: HR software shouldn't be a chore to use. We saw teams struggling with fragmented tools and manual processes, so we built an all-in-one platform that's as intuitive as it is powerful.
            </p>
            <p class="text-lg text-gray-600 leading-relaxed">
              Today, thousands of companies trust EmployeeTrack to manage payroll, engagement, and growth. We're committed to building tools that help you build a culture where everyone thrives.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-6">
            <div class="p-8 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow">
              <p class="text-4xl font-black text-brand-purple mb-2">2020</p>
              <p class="text-gray-500 font-bold uppercase tracking-wider text-xs">Founded</p>
            </div>
            <div class="p-8 bg-brand-orange/5 rounded-3xl border border-brand-orange/10 shadow-sm hover:shadow-xl transition-shadow">
              <p class="text-4xl font-black text-brand-orange mb-2">20k+</p>
              <p class="text-gray-500 font-bold uppercase tracking-wider text-xs">Users</p>
            </div>
            <div class="p-8 bg-brand-purple/5 rounded-3xl border border-brand-purple/10 shadow-sm hover:shadow-xl transition-shadow">
              <p class="text-4xl font-black text-brand-purple mb-2">50+</p>
              <p class="text-gray-500 font-bold uppercase tracking-wider text-xs">Countries</p>
            </div>
            <div class="p-8 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow">
              <p class="text-4xl font-black text-gray-900 mb-2">99%</p>
              <p class="text-gray-500 font-bold uppercase tracking-wider text-xs">Uptime</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values -->
    <section class="py-24 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-brand-purple font-bold tracking-widest uppercase text-sm mb-4">Our Values</h2>
          <h3 class="text-4xl font-black text-gray-900 mb-6">The Principles That Guide Us</h3>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform">
            <div class="w-14 h-14 bg-brand-purple/10 rounded-2xl flex items-center justify-center mb-6 text-brand-purple">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <h4 class="text-xl font-bold text-gray-900 mb-4">Innovation First</h4>
            <p class="text-gray-600">We constantly push the boundaries of what's possible in HR tech to solve real problems.</p>
          </div>
          
          <div class="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform">
            <div class="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-6 text-brand-orange">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
            </div>
            <h4 class="text-xl font-bold text-gray-900 mb-4">People Centric</h4>
            <p class="text-gray-600">Everything we build starts with the human experience. If it doesn't help people, we don't build it.</p>
          </div>
          
          <div class="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform">
            <div class="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6 text-green-600">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            </div>
            <h4 class="text-xl font-bold text-gray-900 mb-4">Trust & Transparency</h4>
            <p class="text-gray-600">We believe in radical honesty and uncompromising security for your most sensitive data.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-black text-gray-900 mb-8">Want to Join the Revolution?</h2>
        <router-link to="/contact" class="inline-block bg-brand-purple text-white px-10 py-4 rounded-full font-bold shadow-2xl hover:-translate-y-1 transition-all">
          Work with Us
        </router-link>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import HomeHeader from './headers/HomeHeader.vue';
import AppFooter from './Footer/AppFooter.vue';
</script>

<style scoped>
@keyframes fade-in-up {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  opacity: 0;
  animation: fade-in-up 0.8s forwards cubic-bezier(0.4, 0, 0.2, 1);
}
.delay-100 { animation-delay: 0.1s; }
</style>
