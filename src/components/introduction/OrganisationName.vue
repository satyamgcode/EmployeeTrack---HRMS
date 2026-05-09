<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import IntroductionLayout from './IntroductionLayout.vue';

const orgName = ref('');
const logo = ref(null); // For storing the uploaded logo preview
const router = useRouter();

// Function to handle "Next" button click and navigate to the next step
function handleNext() {
    if (orgName.value) {
        localStorage.setItem('orgName', orgName.value);
        if (logo.value) {
            localStorage.setItem('orgLogo', logo.value);
        }
        console.log('Organization name:', orgName.value);
        router.push('/onboarding/profile-setup'); // Navigate to the next step route
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
            <div class="w-full">
                <p class="text-brand-purple font-bold tracking-widest uppercase text-xs mb-4">Step 1 of 5</p>
                <h1 class="text-4xl lg:text-5xl font-black text-gray-900 mb-6">What's your organization's name?</h1>
                <p class="text-lg text-gray-600 mb-10 leading-relaxed">
                    Adding your organization's name helps your team members identify it easily.
                </p>

                <!-- Input for organization name -->
                <div class="mb-10">
                    <input 
                        v-model="orgName" 
                        type="text" 
                        placeholder="Enter your organization's name"
                        class="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all text-lg" 
                    />
                </div>

                <!-- Logo section -->
                <div class="mb-12 p-8 bg-gray-50 rounded-3xl border border-dashed border-gray-300">
                    <p class="text-gray-700 font-bold mb-6 text-center">Organization Logo (Optional)</p>
                    <div class="flex flex-col items-center">
                        <div class="w-32 h-32 bg-white rounded-[32px] shadow-lg flex items-center justify-center mb-6 relative overflow-hidden group">
                            <!-- Preview uploaded logo -->
                            <img v-if="logo" :src="logo" alt="Uploaded logo" class="w-full h-full object-cover" />
                            <!-- Placeholder icon -->
                            <div v-else class="text-brand-purple">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                            </div>
                        </div>

                        <input id="logo-upload" type="file" @change="handleLogoUpload" accept="image/*" class="hidden" />
                        <label for="logo-upload" class="cursor-pointer px-8 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-all shadow-sm">
                            Choose Image
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

<style scoped>
/* Custom styles can be added here */
</style>

