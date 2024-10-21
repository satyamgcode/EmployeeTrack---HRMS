<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import IntroductionLayout from './IntroductionLayout.vue';

const orgName = ref('');
const logo = ref(null); // For storing the uploaded logo preview
const router = useRouter();

// Function to handle "Next" button click and navigate to the next step
function handleNext() {
    localStorage.setItem('orgName', orgName.value);
    if (orgName.value) {
        console.log('Organization name:', orgName.value);
        router.push('/step2'); // Navigate to the next step route
    }
}

// Function to handle the logo upload and show a preview
function handleLogoUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            logo.value = e.target.result; // Set the uploaded image preview
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
                    <div class=" mt-3">
                        <p class="text-gray-500 mb-2">Step 1 of 5</p>
                        <h1 class="text-3xl font-semibold mb-6 mt-11">What's your organization's name?</h1>
                        <p class="text-gray-600 mb-8">
                            Adding your organization's name helps your team members identify it easily.
                        </p>

                        <!-- Input for organization name (no word limit) -->
                        <div class="relative mb-6">
                            <input v-model="orgName" type="text" placeholder="Enter your organization's name"
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-purple-400" />
                        </div>

                        <!-- Optional: Information about organization logo -->
                        <p class="text-gray-600 mb-6">You can also upload your organization's logo (optional).</p>

                        <!-- Updated logo section -->
                        <div class="flex flex-col items-center mb-6">
                            <div class="w-24 h-24 bg-purple-200 rounded-full flex items-center justify-center mb-4">
                                <!-- Preview uploaded logo -->
                                <img v-if="logo" :src="logo" alt="Uploaded logo"
                                    class="w-full h-full object-cover rounded-full" />
                                <!-- Placeholder image for logo if not uploaded -->
                                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-purple-500"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                            </div>

                            <!-- Hidden File input for logo upload -->
                            <input id="logo-upload" type="file" @change="handleLogoUpload" accept="image/*"
                                class="hidden" />

                            <!-- Upload Logo button to trigger file input -->
                            <label for="logo-upload"
                                class="cursor-pointer px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
                                Upload Logo
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

<style scoped>
/* Custom styles can be added here */
</style>

