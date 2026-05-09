<template>
  <footer class="relative bg-[#0a0a0c] text-white pt-12 pb-12 overflow-hidden">
    <!-- Decorative Background Elements -->
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-purple via-brand-orange to-brand-purple"></div>
    <div class="absolute -top-24 -left-24 w-96 h-96 bg-brand-purple/10 rounded-full blur-[120px]"></div>
    <div class="absolute top-1/2 -right-24 w-80 h-80 bg-brand-orange/10 rounded-full blur-[100px]"></div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Newsletter & CTA Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-8 pb-8 border-b border-white/5">
        <div>
          <h2 class="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Stay ahead of the<br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-orange">modern workforce.</span>
          </h2>
          <p class="text-xl text-gray-400 max-w-md">
            Get the latest HR insights, automation tips, and product updates delivered to your inbox.
          </p>
        </div>
        <div class="flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Enter your work email" 
            class="flex-1 px-8 py-5 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10 outline-none transition-all text-lg"
          />
          <button class="px-10 py-5 bg-brand-purple hover:bg-brand-purple/90 text-white font-black rounded-2xl transition-all shadow-xl shadow-brand-purple/20 hover:-translate-y-1">
            Join Now
          </button>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-10">
        <!-- Brand -->
        <div class="col-span-2 lg:col-span-2 pr-12">
          <router-link to="/" class="flex items-center group mb-8">
            <div class="p-3 bg-brand-purple rounded-2xl mr-4 group-hover:rotate-12 transition-transform duration-300">
              <img src="/src/assets/home-logo.svg" alt="Logo" class="h-8 w-8 brightness-0 invert" />
            </div>
            <span class="text-3xl font-black tracking-tighter">
              Employee<span class="text-brand-orange">Track</span>
            </span>
          </router-link>
          <p class="text-gray-400 text-lg leading-relaxed mb-8 max-w-sm">
            We are redefining HRMS for the digital age. Built for teams that value efficiency, transparency, and growth.
          </p>
          <div class="flex gap-4">
            <a href="#" class="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-purple hover:scale-110 transition-all border border-white/10">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
            <a href="#" class="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:scale-110 transition-all border border-white/10">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.558 4.892-.017 3.629-.285 4.736-2.558 4.892zM9.457 9.623l4.459 2.377-4.459 2.378V9.623z"/></svg>
            </a>
            <a href="#" class="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-purple hover:scale-110 transition-all border border-white/10">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>

        <!-- Links -->
        <div>
          <h4 class="text-lg font-black mb-8 uppercase tracking-widest text-brand-orange">Platform</h4>
          <ul class="space-y-4">
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors flex items-center group"><span class="w-0 group-hover:w-4 h-0.5 bg-brand-orange mr-0 group-hover:mr-2 transition-all"></span>Features</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors flex items-center group"><span class="w-0 group-hover:w-4 h-0.5 bg-brand-orange mr-0 group-hover:mr-2 transition-all"></span>Pricing</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors flex items-center group"><span class="w-0 group-hover:w-4 h-0.5 bg-brand-orange mr-0 group-hover:mr-2 transition-all"></span>Security</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors flex items-center group"><span class="w-0 group-hover:w-4 h-0.5 bg-brand-orange mr-0 group-hover:mr-2 transition-all"></span>Integrations</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-black mb-8 uppercase tracking-widest text-brand-purple">Company</h4>
          <ul class="space-y-4">
            <li><router-link to="/about" class="text-gray-400 hover:text-white transition-colors flex items-center group"><span class="w-0 group-hover:w-4 h-0.5 bg-brand-purple mr-0 group-hover:mr-2 transition-all"></span>About Us</router-link></li>
            <li><router-link to="/contact" class="text-gray-400 hover:text-white transition-colors flex items-center group"><span class="w-0 group-hover:w-4 h-0.5 bg-brand-purple mr-0 group-hover:mr-2 transition-all"></span>Contact</router-link></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors flex items-center group"><span class="w-0 group-hover:w-4 h-0.5 bg-brand-purple mr-0 group-hover:mr-2 transition-all"></span>Careers</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors flex items-center group"><span class="w-0 group-hover:w-4 h-0.5 bg-brand-purple mr-0 group-hover:mr-2 transition-all"></span>Media Kit</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-black mb-8 uppercase tracking-widest text-white">Legal</h4>
          <ul class="space-y-4">
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Terms of Use</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">GDPR</a></li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
        <p class="text-gray-500 font-medium">
          &copy; {{ currentYear }} EmployeeTrack, Inc. All rights reserved.
        </p>
        <div class="flex items-center gap-8">
          <div class="flex items-center gap-2 text-gray-500">
            <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            System Status: Operational
          </div>
          <div class="h-4 w-px bg-white/10 hidden md:block"></div>
          <p class="text-gray-500">Made with ❤️ for HR teams.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>