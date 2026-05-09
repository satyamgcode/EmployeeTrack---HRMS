<template>
  <div class="bg-white min-h-screen">
    <HomeHeader :buttonName="'Sign In'" />
    
    <div class="pt-32 pb-24">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            <!-- Left Side: Contact Info -->
            <div class="space-y-12">
              <div>
                <h1 class="text-5xl font-black text-gray-900 mb-6">Let's start a <span class="text-brand-purple">conversation</span>.</h1>
                <p class="text-xl text-gray-600 leading-relaxed">
                  Have questions about our features? Interested in a custom demo for your enterprise? We're here to help.
                </p>
              </div>

              <div class="space-y-8">
                <div class="flex items-start gap-6 group">
                  <div class="w-14 h-14 bg-brand-purple/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all duration-300">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-bold text-gray-900">Email us</h4>
                    <p class="text-gray-600">Our team is here to help.</p>
                    <a href="mailto:hello@employeetrack.com" class="text-brand-purple font-bold hover:underline">hello@employeetrack.com</a>
                  </div>
                </div>

                <div class="flex items-start gap-6 group">
                  <div class="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-bold text-gray-900">Visit us</h4>
                    <p class="text-gray-600">Come say hello at our office HQ.</p>
                    <p class="text-brand-orange font-bold">100 Innovation Way, San Francisco, CA</p>
                  </div>
                </div>

                <div class="flex items-start gap-6 group">
                  <div class="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-bold text-gray-900">Call us</h4>
                    <p class="text-gray-600">Mon-Fri from 8am to 5pm.</p>
                    <p class="text-green-600 font-bold">+1 (555) 000-0000</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Side: Contact Form -->
            <div class="bg-gray-50 p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-2xl relative">
              <div class="absolute -top-6 -left-6 w-24 h-24 bg-brand-orange/20 rounded-full blur-2xl"></div>
              
              <form @submit.prevent="handleSubmit" class="space-y-6 relative z-10">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label class="text-sm font-bold text-gray-700">First Name</label>
                    <input type="text" placeholder="John" class="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10 outline-none transition-all" required />
                  </div>
                  <div class="space-y-2">
                    <label class="text-sm font-bold text-gray-700">Last Name</label>
                    <input type="text" placeholder="Doe" class="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10 outline-none transition-all" required />
                  </div>
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-bold text-gray-700">Email Address</label>
                  <input type="email" placeholder="john@example.com" class="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10 outline-none transition-all" required />
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-bold text-gray-700">Message</label>
                  <textarea rows="4" placeholder="How can we help you?" class="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10 outline-none transition-all resize-none" required></textarea>
                </div>

                <button type="submit" class="w-full bg-gray-900 text-white font-black py-5 rounded-2xl hover:bg-brand-purple transition-all shadow-xl hover:-translate-y-1">
                  Send Message
                </button>
                
                <p class="text-center text-xs text-gray-500 mt-4">
                  By clicking "Send Message", you agree to our <a href="#" class="underline">Privacy Policy</a>.
                </p>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script setup>
import HomeHeader from './headers/HomeHeader.vue';
import AppFooter from './Footer/AppFooter.vue';

const handleSubmit = () => {
  alert('Thank you for reaching out! We will get back to you soon.');
};
</script>

<style scoped>
</style>
