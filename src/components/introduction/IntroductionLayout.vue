<template>
  <div class="flex flex-col lg:flex-row min-h-screen bg-white font-sans">
    <!-- Side Branding Panel -->
    <div class="lg:w-1/3 bg-gray-900 p-12 flex flex-col justify-between relative overflow-hidden">
      <!-- Background Accents -->
      <div class="absolute top-0 right-0 w-64 h-64 bg-brand-purple/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div class="absolute bottom-0 left-0 w-48 h-48 bg-brand-orange/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div class="relative z-10">
        <router-link to="/" class="flex items-center group mb-20">
          <div class="p-2 bg-brand-purple rounded-xl mr-3 group-hover:rotate-12 transition-transform duration-300">
            <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span class="text-2xl font-black tracking-tight text-white">
            Employee<span class="text-brand-orange">Track</span>
          </span>
        </router-link>

        <div class="space-y-6">
          <h1 class="text-4xl lg:text-5xl font-black text-white leading-tight">
            Setting up your <span class="text-brand-purple">Workplace.</span>
          </h1>
          <p class="text-gray-400 text-lg leading-relaxed">
            Join thousands of modern teams and start building a better culture today.
          </p>
        </div>
      </div>

      <div class="relative z-10 pt-12 border-t border-white/10">
        <div class="flex items-center gap-4">
          <div class="flex -space-x-3">
            <div v-for="i in 3" :key="i" class="w-10 h-10 rounded-full border-2 border-gray-900 bg-gray-800 flex items-center justify-center text-xs font-bold text-white">
              {{ String.fromCharCode(64 + i) }}
            </div>
          </div>
          <p class="text-sm text-gray-400">Trusted by 20k+ companies</p>
        </div>
      </div>
    </div>

    <!-- Main Content Area -->
    <div class="lg:w-2/3 flex flex-col items-center justify-center p-8 lg:p-20 relative">
      <div class="w-full max-w-2xl">
        <slot name="StepProgress"></slot>
      </div>
    </div>
  </div>
</template>
