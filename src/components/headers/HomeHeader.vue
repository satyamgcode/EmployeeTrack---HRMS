<template>
  <header class="w-full shadow-md bg-white z-50 relative">
    <div class="container mx-auto flex justify-between items-center py-3 px-4 md:px-6">
      <!-- Logo -->
      <div class="flex items-center">
        <img :src="logo" alt="EmployeePro Logo" class="h-8 mr-2" />
        <span class="text-xl font-bold text-gray-700">
          <router-link to="/">EmployeeTrack</router-link>
        </span>
      </div>

      <!-- Desktop Navigation -->
      <nav v-if="showNavItems" class="hidden md:flex space-x-6">
        <router-link
          v-for="link in navLinks"
          :key="link.text"
          :to="link.route"
          class="text-gray-700 hover:text-purple-500 transition duration-300 font-semibold"
          active-class="text-purple-500"
        >
          {{ link.text }}
        </router-link>
      </nav>

      <!-- Desktop Button -->
      <div class="hidden md:block">
        <button @click="handleClickAndEmit" class="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition duration-300">
          {{ buttonName }}
        </button>
      </div>

      <!-- Mobile Hamburger -->
      <button @click="toggleSidebar" class="md:hidden text-gray-700 focus:outline-none z-50">
        <img :src="menuIcon" alt="menu">
      </button>
    </div>

    <!-- Sidebar -->
    <transition name="slide">
      <div v-if="isSidebarOpen" class="fixed top-0 left-0 w-3/4 max-w-xs h-full bg-white shadow-lg z-40 px-6 py-6 md:hidden transition-all">
        <!-- Close button -->
        <div class="flex justify-between items-center mb-6">
          <span class="text-xl font-bold text-gray-700">EmployeeTrack</span>
          <button @click="toggleSidebar" class="text-gray-700">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Navigation Links -->
        <nav class="flex flex-col space-y-4">
          <router-link
            v-for="link in navLinks"
            :key="link.text"
            :to="link.route"
            @click="toggleSidebar"
            class="text-gray-700 hover:text-purple-500 transition duration-300 font-semibold"
            active-class="text-purple-500"
          >
            {{ link.text }}
          </router-link>
        </nav>

        <!-- Mobile Button -->
        <button
          @click="handleClickAndEmit"
          class="mt-6 w-full bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition duration-300"
        >
          {{ buttonName }}
        </button>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import logo from '../../assets/home-logo.svg';
import menuIcon from '../../assets/icons/menu.svg';

const router = useRouter();

const navLinks = reactive([
  { text: 'Home', route: '/' },
  { text: 'Features', route: '/features' },
  { text: 'About Us', route: '/about' },
  { text: 'Contact Us', route: '/contact' },
]);

const props = defineProps({
  showNavItems: {
    type: Boolean,
    default: true
  },
  buttonName: {
    type: String,
    default: 'Get Started'
  }
});

const emit = defineEmits(['clickHeaderButton']);

const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const handleClickAndEmit = () => {
  toggleSidebar();
  emit('clickHeaderButton');
  router.push('/login');
};
</script>

<style scoped>
/* Slide Transition */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(-100%);
}
</style>
