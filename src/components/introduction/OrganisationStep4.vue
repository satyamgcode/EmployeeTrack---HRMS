<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'; // Use router for navigation
import IntroductionLayout from './IntroductionLayout.vue';

const teamWorkInput = ref(''); // Store the team's current work input
const router = useRouter();

function handleNext() {
  if (teamWorkInput.value) {
    console.log('Team is working on:', teamWorkInput.value);
    router.push('/onboarding/choose-plan'); // Navigate to the next step route
  }
}

// Fetch organization name from localStorage on component mount if needed in future use
onMounted(() => {
  const storedOrgName = localStorage.getItem('orgName');
  console.log('Organization:', storedOrgName); // Can use if needed in next step
});
</script>

<template>
  <IntroductionLayout>
    <template #StepProgress>
      <div class="w-full">
        <div class="flex items-center gap-4 mb-4">
          <button @click="$router.go(-1)" class="p-2 rounded-lg bg-gray-50 text-gray-400 hover:text-gray-900 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          </button>
          <p class="text-brand-purple font-bold tracking-widest uppercase text-xs">Step 4 of 5</p>
        </div>

        <h1 class="text-4xl lg:text-5xl font-black text-gray-900 mb-6">What’s your team working on right now?</h1>
        <p class="text-lg text-gray-600 mb-10 leading-relaxed">
          This could be anything: a project, campaign, event, or the deal you’re trying to close.
        </p>

        <!-- Input for team's current work -->
        <div class="mb-10">
          <input 
            v-model="teamWorkInput" 
            type="text" 
            placeholder="Ex: Q4 budget, autumn campaign"
            class="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all text-lg" 
          />
        </div>

        <!-- Button for next step -->
        <button 
          @click="handleNext"
          class="w-full py-5 bg-brand-purple text-white font-black rounded-2xl hover:bg-brand-purple/90 transition-all shadow-xl shadow-brand-purple/20 active:scale-[0.98] text-lg"
        >
          Continue
        </button>
      </div>
    </template>
  </IntroductionLayout>
</template>

<style scoped>
/* Add custom styles if needed */
</style>
