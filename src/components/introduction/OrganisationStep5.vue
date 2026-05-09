<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Use router for navigation
import IntroductionLayout from './IntroductionLayout.vue'; // Reusing the layout

const selectedPlan = ref(''); // Track the selected plan
const router = useRouter();

// Handle plan selection and routing
function choosePlan(plan) {
  selectedPlan.value = plan;
  const orgName = localStorage.getItem('orgName') || 'company';
  const subdomain = orgName.toLowerCase().replace(/\s+/g, '-');
  
  // In a real SaaS, this would redirect to https://${subdomain}.hrms.com
  // For development, we'll simulate this by redirecting to the other Vite port
  alert(`Redirecting to your new workspace: ${subdomain}.hrms.com`);
  
  // Mock redirect to the software app using environment variable
  const softwareUrl = import.meta.env.VITE_SOFTWARE_URL || 'http://localhost:5173';
  window.location.href = `${softwareUrl}/overview`;
}
</script>

<template>
  <IntroductionLayout>
    <template #StepProgress>
      <div class="w-full">
        <div class="flex items-center gap-4 mb-4">
          <button @click="$router.go(-1)" class="p-2 rounded-lg bg-gray-50 text-gray-400 hover:text-gray-900 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          </button>
          <p class="text-brand-purple font-bold tracking-widest uppercase text-xs">Step 5 of 5</p>
        </div>

        <h1 class="text-4xl lg:text-5xl font-black text-gray-900 mb-6">Choose a plan to get started:</h1>
        <p class="text-lg text-gray-600 mb-10 leading-relaxed">
          Scale your team with the right features. You can always change your plan later.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <!-- Free plan card -->
          <div class="bg-gray-50 p-8 rounded-[32px] border border-gray-100 flex flex-col hover:border-brand-purple/20 transition-all group">
            <div class="mb-6">
              <span class="inline-block px-4 py-1 bg-gray-200 text-gray-600 rounded-full text-xs font-black uppercase tracking-widest mb-4">Starter</span>
              <h2 class="text-3xl font-black text-gray-900 mb-2">Free</h2>
              <div class="flex items-baseline gap-1">
                <span class="text-4xl font-black text-gray-900">₹0</span>
                <span class="text-gray-500">/person/month</span>
              </div>
            </div>
            
            <ul class="space-y-4 mb-10 flex-grow">
              <li class="flex items-center gap-3 text-gray-600">
                <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                90 days history
              </li>
              <li class="flex items-center gap-3 text-gray-600">
                <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                1:1 audio/video
              </li>
              <li class="flex items-center gap-3 text-gray-600">
                <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                10 integrations
              </li>
            </ul>

            <button @click="choosePlan('Free')" class="w-full py-4 bg-white border border-gray-200 text-gray-900 font-black rounded-2xl hover:bg-gray-900 hover:text-white transition-all active:scale-[0.98]">
              Select Free
            </button>
          </div>

          <!-- Pro plan card -->
          <div class="bg-brand-purple/5 p-8 rounded-[32px] border border-brand-purple/10 flex flex-col hover:border-brand-purple/30 transition-all relative overflow-hidden group">
            <div class="absolute top-0 right-0 bg-brand-purple text-white px-6 py-2 rounded-bl-2xl text-xs font-black uppercase tracking-widest">Recommended</div>
            
            <div class="mb-6">
              <span class="inline-block px-4 py-1 bg-brand-purple/20 text-brand-purple rounded-full text-xs font-black uppercase tracking-widest mb-4">Growth</span>
              <h2 class="text-3xl font-black text-gray-900 mb-2">Pro</h2>
              <div class="flex items-baseline gap-1">
                <span class="text-4xl font-black text-gray-900">₹295</span>
                <span class="text-gray-500 line-through text-xs">₹655</span>
              </div>
            </div>
            
            <ul class="space-y-4 mb-10 flex-grow">
              <li class="flex items-center gap-3 text-gray-600 font-bold">
                <svg class="w-5 h-5 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                Unlimited history
              </li>
              <li class="flex items-center gap-3 text-gray-600 font-bold">
                <svg class="w-5 h-5 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                Unlimited calls
              </li>
              <li class="flex items-center gap-3 text-gray-600 font-bold">
                <svg class="w-5 h-5 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                Unlimited apps
              </li>
            </ul>

            <button @click="choosePlan('Pro')" class="w-full py-4 bg-brand-purple text-white font-black rounded-2xl hover:bg-brand-purple/90 transition-all shadow-xl shadow-brand-purple/20 active:scale-[0.98]">
              Get Started with Pro
            </button>
          </div>
        </div>
      </div>
    </template>
  </IntroductionLayout>
</template>

<style scoped>
/* Add any custom styles if needed */
</style>
