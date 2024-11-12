<template>
  <div class="relative w-full h-screen bg-cover bg-center flex items-center justify-center">
    <img 
      :src="HeroImage" 
      class="absolute inset-0 w-full h-full object-cover overlay bg-opacity-50 transition-opacity duration-1000 ease-in-out fade-in"
      alt="Hero Background"
    />
    
    <div class="text-5xl text-center font-bold absolute top-28 rounded-xl z-10 text-white shadow-xl w-full p-12 fade-in delay-200">
      <span class="text-9xl">Empowering <span class=" text-9xl text-left bg-purple-800 px-4 pb-4 rounded-lg">teams</span></span>, <br> <span class=" text-3xl text-right">transforming workplaces</span>.
      <div class="flex pt-16 text-lg font-semibold gap-6 justify-center items-center">
        <button class="transform hover:scale-105 transition-transform duration-300 flex">
          <span class="text-white  bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 shadow-lg">  <router-link to="/CreateAccount" class="flex gap-3">Get started <img :src="rightIcon" alt="rightIcon"> </router-link> </span>
          
        </button>
        <button class="transform hover:scale-105 transition-transform duration-300">
          <span class="text-white border border-white px-4 py-2 rounded-lg  shadow-lg">Learn more</span>
        </button>
      </div>  
    </div>

    <div class="relative z-10 mt-96 text-center text-gray-950 shadow-2xl bg-purple-200 rounded-2xl p-4 px-16  fade-in delay-400">
      <h1 v-if="title" class="text-sm md:text-2xl font-semibold mb-4">
        {{ title }}
      </h1>
      <p v-if="subtitle" class="text-md text-purple-800 md:text-lg">
        {{ subtitle }}
      </p>

      <button v-if="button" class="mt-6 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg shadow transform hover:scale-105 transition-transform duration-300">
        Download
      </button>
    </div>
  </div>
</template>

  
  <script setup>
  import { defineProps } from 'vue';
  // import HeroImage from '../assets/images/main-hero.png';
  import HeroImage from '../assets/images/office.jpg';
  import rightIcon from '../assets/icons/right-icon.svg';
  
  const props = defineProps({
    title: {
      type: String,
      default: false,
    },
    subtitle: {
      type: String,
      default: false,
    },
    button: {
      type: Boolean,
      default: false,
    }
  });
  
  </script>

<style scoped>
.fade-in {
  opacity: 0;
  animation: fadeIn ease 1s forwards;
}
.fade-in.delay-200 {
  animation-delay: 0.2s;
}
.fade-in.delay-400 {
  animation-delay: 0.4s;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

button span {
  transition: background-color 0.3s ease, transform 0.3s ease;
}
button span:hover {
  transform: translateY(-2px);
}
</style>
  