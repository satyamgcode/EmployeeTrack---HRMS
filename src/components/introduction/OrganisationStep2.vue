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
    router.push('/onboarding/invite-team'); // Navigate to next step route
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
      <div class="w-full">
        <div class="flex items-center gap-4 mb-4">
          <button @click="$router.go(-1)" class="p-2 rounded-lg bg-gray-50 text-gray-400 hover:text-gray-900 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          </button>
          <p class="text-brand-purple font-bold tracking-widest uppercase text-xs">Step 2 of 5</p>
        </div>
        
        <h1 class="text-4xl lg:text-5xl font-black text-gray-900 mb-6">What’s your name at {{ orgName }}?</h1>
        <p class="text-lg text-gray-600 mb-10 leading-relaxed">
          Adding your name and profile photo helps your teammates recognize and connect with you more easily.
        </p>

        <!-- Input for profile name -->
        <div class="mb-10">
          <input 
            v-model="profileName" 
            type="text" 
            placeholder="Enter your full name"
            class="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all text-lg" 
          />
        </div>

        <!-- Profile photo upload section -->
        <div class="mb-12 p-8 bg-gray-50 rounded-3xl border border-dashed border-gray-300 text-center">
          <p class="text-gray-700 font-bold mb-6">Profile Photo (Optional)</p>
          <div class="flex flex-col items-center">
            <div class="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center mb-6 relative overflow-hidden group">
              <img v-if="profilePhoto" :src="profilePhoto" alt="Uploaded photo" class="w-full h-full object-cover" />
              <div v-else class="text-brand-purple">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>

            <input id="photo-upload" type="file" @change="handlePhotoUpload" accept="image/*" class="hidden" />
            <label for="photo-upload" class="cursor-pointer px-8 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-all shadow-sm">
              Choose Photo
            </label>
          </div>
        </div>

        <!-- Next button -->
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