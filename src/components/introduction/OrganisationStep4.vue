<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'; // Use router for navigation
import IntroductionLayout from './IntroductionLayout.vue';

const teamWorkInput = ref(''); // Store the team's current work input
const router = useRouter();

function handleNext() {
  if (teamWorkInput.value) {
    console.log('Team is working on:', teamWorkInput.value);
    router.push('/step5'); // Navigate to the next step route
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
      <div class="flex min-h-screen mx-auto bg-white">
        <div class="w-full mt-2 max-w-3xl mx-auto bg-white p-8 rounded-lg">
          <div class=" mt-10">
            <div class="flex gap-2 items-start">
                <i @click="$router.go(-1)" class="mdi mdi-arrow-left text-lg text-gray-500 cursor-pointer"></i>
                <p class="text-gray-500 mb-10">Step 4 of 5</p>
            </div>
            <h1 class="text-4xl font-semibold text-left">What’s your team working </h1>
            <h1 class="text-6xl font-bold mb-6 text-left">on right now?</h1>
            <p class="text-gray-600 mb-8">
              This could be anything: a project, campaign, event, or the deal you’re trying to close.
            </p>

            <!-- Input for team's current work -->
            <div class="mb-6">
              <input v-model="teamWorkInput" type="text" placeholder="Ex: Q4 budget, autumn campaign"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-purple-400" />
            </div>

            <!-- Button for next step -->
            <button @click="handleNext"
              class="py-2 px-3 w-full max-w-32 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </template>
  </IntroductionLayout>
</template>

<style scoped>
/* Add custom styles if needed */
</style>
