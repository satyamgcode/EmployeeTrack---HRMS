<script setup>
import homepageScreenshot from '../assets/images/home-app.png';
import chatScreenshot from '../assets/images/chat-screen.png';
</script>

<template>
  <div class="flex flex-col items-center justify-center p-8 bg-gray-50 min-h-screen relative overflow-hidden">
    <h1 class="text-3xl font-semibold text-gray-800 mb-8 text-center">Explore Our App</h1>
    <p class="text-lg text-gray-600 mb-12 text-center">Streamline employee information and communication in one place.
    </p>

    <div class="grid md:grid-cols-2 gap-10 relative z-10 cursor-pointer">
      <div class="flex flex-col items-center text-center group">
        <div class="relative">
          <img :src="homepageScreenshot" alt="Homepage"
            class="rounded-lg shadow-lg mb-4 w-full h-auto max-w-xl object-cover transition-transform duration-300 transform group-hover:scale-110 group-hover:w-full" />
        </div>
        <h2 class="text-xl font-bold text-gray-700 mt-2">Manage Employee Information</h2>
        <p class="text-gray-500 mt-2">Access employee details, schedules, and insights with ease.</p>
      </div>

      <div class="flex flex-col items-center text-center group">
        <div class="relative">
          <img :src="chatScreenshot" alt="Chat Section"
            class="rounded-lg shadow-lg mb-4 w-full h-auto max-w-xl object-cover transition-transform duration-300 transform group-hover:scale-110 group-hover:w-full" />
        </div>
        <h2 class="text-xl font-bold text-gray-700 mt-2">Stay Connected with the Team</h2>
        <p class="text-gray-500 mt-2">Real-time communication and collaboration, all in one place.</p>
      </div>
    </div>

    <div class="mt-16 text-center relative z-10">
      <p class="text-lg font-medium text-gray-800">Empowering teams to achieve more together!</p>
      <button
        class="mt-4 px-6 py-2 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-colors">
        Discover More
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Additional custom styles if needed */
</style>
