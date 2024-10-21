<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'; // Use route for accessing passed params
import IntroductionLayout from './IntroductionLayout.vue';

const route = useRoute();
const profileName = ref(''); // For name input
const profilePhoto = ref(null); // To store uploaded photo preview
const orgName = ref(route.params.orgName || 'Your Organization'); // Access the org name from route params
const router = useRouter();

// Function to handle "Next" button click and navigate to the next step
function handleNext() {
  if (profileName.value) {
    console.log('Profile name:', profileName.value);
    router.push('/step3'); // Navigate to next step route
  }
}

// Function to handle the photo upload and show a preview
function handlePhotoUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      profilePhoto.value = e.target.result; // Set the uploaded image preview
    };
    reader.readAsDataURL(file);
  }
}
</script>

<template>
  <IntroductionLayout>
    <template #StepProgress>
      <div class="flex items-center min-h-screen mx-auto bg-white">
        <div class="w-full max-w-3xl mx-auto bg-white p-8 rounded-lg">
          <div class="mt-5">
            <div class="flex gap-2 items-start">
                <i @click="$router.go(-1)" class="mdi mdi-arrow-left text-lg text-gray-500 cursor-pointer"></i>
                <p class="text-gray-500 mb-2">Step 2 of 5</p>
            </div>
            <!-- Show dynamic organization name -->
            <h1 class="text-3xl font-semibold mb-6 mt-11">What’s your name at {{ orgName }}?</h1>
            <p class="text-gray-600 mb-8">
              Adding your name and profile photo helps your teammates recognize and connect with you more easily.
            </p>

            <!-- Input for profile name -->
            <div class="relative mb-6">
              <input v-model="profileName" type="text" placeholder="Enter your name"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-purple-400" />
            </div>

            <!-- Optional: Information about profile photo -->
            <p class="text-gray-600 mb-6">Your profile photo (optional)</p>

            <!-- Profile photo upload section -->
            <div class="flex flex-col items-center mb-6">
              <div class="w-24 h-24 bg-purple-200 rounded-full flex items-center justify-center mb-4">
                <!-- Preview uploaded profile photo -->
                <img v-if="profilePhoto" :src="profilePhoto" alt="Uploaded profile photo"
                  class="w-full h-full object-cover rounded-full" />
                <!-- Placeholder icon if no photo uploaded -->
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-purple-500" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </div>

              <!-- Hidden File input for photo upload -->
              <input id="photo-upload" type="file" @change="handlePhotoUpload" accept="image/*" class="hidden" />
              <label for="photo-upload"
                class="cursor-pointer px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
                Upload Photo
              </label>
            </div>

            <!-- Next button -->
            <button @click="handleNext"
              class="w-full py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </template>
  </IntroductionLayout>
</template>