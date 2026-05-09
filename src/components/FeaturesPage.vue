<template>
  <div class="bg-white min-h-screen">
    <HomeHeader :buttonName="'Sign In'" />

    <!-- Hero Section -->
    <section class="relative pt-32 pb-24 bg-gray-50 overflow-hidden">
      <div class="container mx-auto px-6 text-center relative z-10">
        <h1 class="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
          Everything you need to <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-orange">manage your people.</span>
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          From recruitment to retirement, EmployeeTrack provides the tools to build a world-class culture and streamlined operations.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <router-link to="/register" class="bg-brand-purple text-white px-10 py-4 rounded-full font-bold shadow-2xl hover:-translate-y-1 transition-all">
            Start Free Trial
          </router-link>
          <a href="#all-features" class="bg-white text-gray-900 border border-gray-200 px-10 py-4 rounded-full font-bold hover:bg-gray-50 transition-all">
            View All Features
          </a>
        </div>
      </div>
      
      <!-- Decorative Blobs -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
    </section>

    <!-- Main Features Grid -->
    <section id="all-features" class="py-24">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Feature Card 1 -->
          <div class="p-10 rounded-[40px] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
            <div class="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Core HR & Database</h3>
            <p class="text-gray-600 leading-relaxed">
              Centralize all employee information in a secure, easy-to-access database. Manage records, contracts, and history in one place.
            </p>
          </div>

          <!-- Feature Card 2 -->
          <div class="p-10 rounded-[40px] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
            <div class="w-16 h-16 bg-brand-orange/10 text-brand-orange rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-500">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Smart Payroll</h3>
            <p class="text-gray-600 leading-relaxed">
              Automate complex payroll runs, tax filings, and compliance. Ensure your team gets paid accurately and on time, every time.
            </p>
          </div>

          <!-- Feature Card 3 -->
          <div class="p-10 rounded-[40px] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
            <div class="w-16 h-16 bg-brand-purple/10 text-brand-purple rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-purple group-hover:text-white transition-colors duration-500">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/></svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Leave & Attendance</h3>
            <p class="text-gray-600 leading-relaxed">
              Customizable leave policies and real-time attendance tracking. No more spreadsheets or manual approvals.
            </p>
          </div>

          <!-- Feature Card 4 -->
          <div class="p-10 rounded-[40px] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
            <div class="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-green-600 group-hover:text-white transition-colors duration-500">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Performance Reviews</h3>
            <p class="text-gray-600 leading-relaxed">
              Set goals, provide continuous feedback, and conduct meaningful performance reviews with data-driven insights.
            </p>
          </div>

          <!-- Feature Card 5 -->
          <div class="p-10 rounded-[40px] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
            <div class="w-16 h-16 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-pink-600 group-hover:text-white transition-colors duration-500">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Recruitment & ATS</h3>
            <p class="text-gray-600 leading-relaxed">
              Find and hire the best talent with an integrated applicant tracking system. Manage the entire pipeline from job post to offer.
            </p>
          </div>

          <!-- Feature Card 6 -->
          <div class="p-10 rounded-[40px] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
            <div class="w-16 h-16 bg-yellow-50 text-yellow-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-yellow-600 group-hover:text-white transition-colors duration-500">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Document Management</h3>
            <p class="text-gray-600 leading-relaxed">
              Securely store and share documents. Implement e-signatures and ensure your organization stays compliant with paperless records.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- Detailed Section with Image -->
    <section class="py-24 bg-gray-50 overflow-hidden">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row items-center gap-16">
          <div class="lg:w-1/2">
            <h2 class="text-brand-orange font-bold tracking-widest uppercase text-sm mb-4">Advanced Analytics</h2>
            <h3 class="text-4xl font-black text-gray-900 mb-6 leading-tight">Data-Driven Decisions <br />at Your Fingertips</h3>
            <p class="text-lg text-gray-600 mb-8 leading-relaxed">
              Gain deep insights into your workforce. Track turnover rates, diversity metrics, and performance trends with our powerful reporting dashboard.
            </p>
            <div class="space-y-4">
              <div class="flex items-start gap-4">
                <div class="w-6 h-6 bg-brand-purple/20 text-brand-purple rounded-full flex items-center justify-center mt-1">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                </div>
                <p class="text-gray-700 font-medium">Real-time turnover analysis</p>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-6 h-6 bg-brand-purple/20 text-brand-purple rounded-full flex items-center justify-center mt-1">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                </div>
                <p class="text-gray-700 font-medium">Customizable compliance reports</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/2 relative">
             <div class="absolute -top-10 -right-10 w-64 h-64 bg-brand-purple/20 rounded-full blur-3xl"></div>
             <img src="/src/assets/images/home-app.png" alt="Analytics" class="relative z-10 rounded-3xl shadow-2xl border border-gray-100" />
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom CTA -->
    <section class="py-24">
      <div class="container mx-auto px-6 text-center">
         <div class="max-w-4xl mx-auto bg-gray-900 rounded-[50px] p-16 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl"></div>
            <h2 class="text-4xl md:text-5xl font-black text-white mb-8 relative z-10">Ready to empower your workforce?</h2>
            <p class="text-xl text-gray-400 mb-12 relative z-10">Join thousands of companies using EmployeeTrack to build a better future.</p>
            <router-link to="/contact" class="inline-block bg-brand-orange text-white px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-2xl relative z-10">
              Talk to an Expert
            </router-link>
         </div>
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
</style>
