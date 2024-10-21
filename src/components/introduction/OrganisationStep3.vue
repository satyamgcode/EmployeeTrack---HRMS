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
    router.push('/step4'); // Navigate to the next step route
  }
}

const skipThisStep = () => {
  router.push('/step4');
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
      <div class="flex min-h-screen mx-auto bg-white">
        <div class="w-full max-w-3xl mx-auto bg-white p-8 rounded-lg">
          <div class="mt-10">
            <div class="flex gap-2 items-start">
                <i @click="$router.go(-1)" class="mdi mdi-arrow-left text-lg text-gray-500 cursor-pointer"></i>
                <p class="text-gray-500 mb-2">Step 3 of 5</p>
            </div>
            <!-- Show dynamic organization name from localStorage -->
            <h1 class="text-4xl font-semibold text-left mt-14">Who else is on the</h1>
            <h1 class="text-6xl font-semibold mb-6 text-left"><span class="text-purple-800">{{ orgName }}</span> team?</h1>
            <p class="text-gray-600 mb-8">
              Add your coworkers by their email address to invite them to join your team.
            </p>

            <!-- Input for adding coworkers by email -->
            <div class="relative mb-6">
              <input v-model="emailInput" type="email" placeholder="Ex. ellis@gmail.com, maria@gmail.com"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-purple-400" />
            </div>

            <!-- Buttons for next step and copying invite link -->
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <button @click="handleNext"
                class="py-2 px-2 w-32 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
                Next
              </button>
              <h1 @click="skipThisStep" class="text-gray-400 text-sm cursor-pointer ">Skip this step</h1>
              </div>
              <button @click="copyInviteLink"
                class="py-2 w-max px-2 bg-gray-50 text-gray-600 border border-gray-600 rounded-full hover:bg-gray-100 transition-colors">
                Copy Invite Link
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </IntroductionLayout>
</template>

<style scoped>
/* Add custom styles if needed */
</style>
