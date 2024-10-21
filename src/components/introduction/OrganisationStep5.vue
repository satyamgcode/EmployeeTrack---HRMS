<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Use router for navigation
import IntroductionLayout from './IntroductionLayout.vue'; // Reusing the layout

const selectedPlan = ref(''); // Track the selected plan
const router = useRouter();

// Handle plan selection and routing
function choosePlan(plan) {
  selectedPlan.value = plan;
  if (plan === 'Free') {
    router.push('/overview'); // Navigate to overview for free plan
  } else {
    // Handle "Pro" plan selection logic here (could be payment, etc.)
    console.log('Pro plan selected');
    // You can navigate to a different page for Pro, if needed
  }
}
</script>

<template>
  <IntroductionLayout>
    <template #StepProgress>
      <div class="flex min-h-screen mx-auto bg-white">
        <div class="w-full max-w-3xl mx-auto bg-white p-8 rounded-lg">
          <div class="mt-10">
            <div class="flex gap-2 items-start">
                <i @click="$router.go(-1)" class="mdi mdi-arrow-left text-lg text-gray-500 cursor-pointer"></i>
                <p class="text-gray-500 mb-2">Step 5 of 5</p>
            </div>
            <h1 class="text-6xl font-bold text-left mt-14">Choose a plan to get started:</h1>
            
            <div class="flex justify-between items-stretch my-8"> <!-- Ensure equal height with items-stretch -->
              <!-- Free plan card -->
              <div class="bg-gray-100 p-6 rounded-lg w-1/2 mr-4 flex flex-col"> <!-- Use flex-col for buttons and content -->
                <h2 class="text-2xl font-bold mb-2 mt-4">Free</h2>
                <p class="text-xl mb-4">₹0 per person/month</p>
                <ul class="text-left text-gray-600 mb-4">
                  <li>✔️ 90 days of message history</li>
                  <li>✔️ 1:1 audio/video conversations</li>
                  <li>✔️ 10 apps or integrations</li>
                </ul>
                <div class="mt-auto"> <!-- Push button to bottom -->
                  <button @click="choosePlan('Free')" 
                    class="py-2 px-4 w-full bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
                    Select Free
                  </button>
                </div>
              </div>

              <!-- Pro plan card -->
              <div class="bg-purple-100 p-6 rounded-lg w-1/2 flex flex-col py-5"> <!-- Ensure Pro card has same structure -->
                <h2 class="text-2xl font-bold mb-2 mt-4">Pro</h2>
                <p class="text-xl mb-4"><span class="line-through text-gray-400">₹655.00</span> ₹294.75 per person/month</p>
                <ul class="text-left text-gray-600 mb-4">
                  <li>✔️ Unlimited message history</li>
                  <li>✔️ Unlimited audio/video conversations</li>
                  <li>✔️ Unlimited apps and integrations</li>
                </ul>
                <div class="mt-auto"> <!-- Push button to bottom -->
                  <button @click="choosePlan('Pro')" 
                    class="py-2  px-4 w-full bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
                    Select Pro
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </IntroductionLayout>
</template>

<style scoped>
/* Add any custom styles if needed */
</style>
