<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'; // Use router for navigation
import IntroductionLayout from './IntroductionLayout.vue';

const orgName = ref(''); // Organization name from localStorage
const emailInput = ref(''); // Emails input field
const router = useRouter();

// Function to handle "Next" button click and navigate to the next step
function handleNext() {
  if (emailInput.value) {
    console.log('Entered emails:', emailInput.value);
    router.push('/onboarding/current-project'); // Navigate to the next step route
  }
}

const skipThisStep = () => {
  router.push('/onboarding/current-project');
}

// Function to copy invite link
function copyInviteLink() {
  const inviteLink = `https://yourapp.com/invite?org=${orgName.value}`;
  navigator.clipboard.writeText(inviteLink).then(() => {
    alert('Invite link copied to clipboard');
  });
}

// Fetch organization name from localStorage on component mount
onMounted(() => {
  const storedOrgName = localStorage.getItem('orgName');
  orgName.value = storedOrgName || 'Your Organization'; // Default if not found
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
          <p class="text-brand-purple font-bold tracking-widest uppercase text-xs">Step 3 of 5</p>
        </div>

        <h1 class="text-4xl lg:text-5xl font-black text-gray-900 mb-6">Who else is on the <span class="text-brand-purple">{{ orgName }}</span> team?</h1>
        <p class="text-lg text-gray-600 mb-10 leading-relaxed">
          Add your coworkers by their email address to invite them to join your team.
        </p>

        <!-- Input for adding coworkers by email -->
        <div class="mb-10">
          <label class="block text-gray-700 text-sm font-bold mb-3">Email Addresses (comma separated)</label>
          <textarea 
            v-model="emailInput" 
            placeholder="ellis@gmail.com, maria@gmail.com"
            rows="3"
            class="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all text-lg resize-none"
          ></textarea>
        </div>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row items-center gap-6">
          <button 
            @click="handleNext"
            class="w-full sm:w-1/2 py-5 bg-brand-purple text-white font-black rounded-2xl hover:bg-brand-purple/90 transition-all shadow-xl shadow-brand-purple/20 active:scale-[0.98] text-lg"
          >
            Send Invites
          </button>
          <button 
            @click="skipThisStep" 
            class="w-full sm:w-1/2 py-5 bg-white text-gray-500 font-bold rounded-2xl hover:bg-gray-50 transition-all border border-gray-100"
          >
            Skip for now
          </button>
        </div>

        <div class="mt-12 p-6 bg-brand-purple/5 rounded-2xl flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-brand-purple/10 text-brand-purple rounded-xl flex items-center justify-center">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
            </div>
            <p class="text-sm text-gray-700 font-bold">Or share an invite link</p>
          </div>
          <button @click="copyInviteLink" class="text-brand-purple font-black hover:underline text-sm">
            Copy Link
          </button>
        </div>
      </div>
    </template>
  </IntroductionLayout>
</template>

<style scoped>
/* Add custom styles if needed */
</style>
