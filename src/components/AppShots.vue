<template>
  <section class="py-24 bg-gray-50 relative overflow-hidden">
    <div class="container mx-auto px-6">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h2 class="text-brand-purple font-bold tracking-widest uppercase text-sm mb-4">Inside the platform</h2>
        <h3 class="text-4xl font-black text-gray-900 mb-6">Explore the Interface</h3>
        <p class="text-lg text-gray-600">
          Get a glimpse of how EmployeeTrack simplifies your day-to-day operations with a clean, intuitive design.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12">
        <!-- Screenshot 1 -->
        <div class="group">
          <div class="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <img :src="homepageScreenshot" alt="Dashboard" class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <p class="text-white font-bold">Comprehensive Dashboard</p>
            </div>
          </div>
          <div class="mt-8 text-center md:text-left">
            <h4 class="text-2xl font-bold text-gray-900">Manage Employee Information</h4>
            <p class="text-gray-600 mt-2">Access employee details, schedules, and insights with a single click.</p>
          </div>
        </div>

        <!-- Screenshot 2 -->
        <div class="group">
          <div class="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <img :src="chatScreenshot" alt="Chat" class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <p class="text-white font-bold">Real-time Collaboration</p>
            </div>
          </div>
          <div class="mt-8 text-center md:text-left">
            <h4 class="text-2xl font-bold text-gray-900">Stay Connected with the Team</h4>
            <p class="text-gray-600 mt-2">Built-in communication tools to keep your team aligned and productive.</p>
          </div>
        </div>
      </div>

      <div class="mt-20 text-center">
        <p class="text-xl font-medium text-gray-800 mb-8 italic">"The most intuitive HR platform I've ever used."</p>
        <button
          class="px-8 py-4 bg-brand-purple text-white font-bold rounded-full hover:bg-brand-purple/90 transition-all shadow-xl hover:shadow-brand-purple/20">
          Discover All Features
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import homepageScreenshot from '../assets/images/home-app.png';
import chatScreenshot from '../assets/images/chat-screen.png';
</script>

<style scoped>
</style>
