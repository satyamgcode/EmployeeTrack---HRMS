<script setup>
import { RouterView } from 'vue-router';
import HelloWorld from './components/HomePage.vue'
import MainLayout from './components/MainLayout.vue';
</script>

<template>
  <div>

    <RouterView to="/" />
  </div>
</template>

<style scoped>
</style>
