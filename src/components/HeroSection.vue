<template>
    <div class="relative w-full h-screen bg-cover bg-center flex items-center justify-center">
      <div 
        class="absolute inset-0 bg-black overlay bg-opacity-50" 
        :style="{ backgroundImage: `url(${HeroImage})` }"
      ></div>
  
      <div class="relative z-10 text-center text-gray-700">
        <h1 v-if="title" class="text-4xl md:text-5xl font-bold mb-4">
          {{ title }}
        </h1>
        <p v-if="subtitle" class="text-lg md:text-xl">
          {{ subtitle }}
        </p>
  
        <button v-if="button" class="mt-6 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg shadow">
          Download
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  import HeroImage from '../assets/images/main-hero.png';
  
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
  