<template>
  <header class="fixed top-0 left-0 right-0 z-[100] transition-all duration-300" :class="{ 'glass-effect shadow-lg py-2': isLightMode, 'bg-transparent py-4': !isLightMode }">
    <div class="container mx-auto flex justify-between items-center px-6 lg:px-12">
      <!-- Logo -->
      <router-link to="/" class="flex items-center group">
        <div class="p-2 bg-brand-purple rounded-xl mr-3 group-hover:rotate-12 transition-transform duration-300">
          <img :src="logo" alt="Logo" class="h-6 w-6 brightness-0 invert" />
        </div>
        <span class="text-2xl font-black tracking-tight drop-shadow-sm" :class="isLightMode ? 'text-gray-900' : 'text-white'">
          Employee<span class="text-brand-orange">Track</span>
        </span>
      </router-link>

      <!-- Desktop Navigation -->
      <nav v-if="showNavItems" class="hidden lg:flex items-center space-x-10">
        <router-link
          v-for="link in navLinks"
          :key="link.text"
          :to="link.route"
          class="text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:text-brand-orange relative group drop-shadow-sm"
          :class="isLightMode ? 'text-gray-700' : 'text-white/90'"
          active-class="!text-brand-orange"
        >
          {{ link.text }}
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
        </router-link>
      </nav>

      <!-- Desktop Button -->
      <div class="hidden lg:block">
        <button 
          @click="handleClickAndEmit" 
          class="bg-brand-purple text-white font-bold py-3 px-8 rounded-full hover:bg-brand-purple/90 transition-all duration-300 shadow-xl hover:shadow-brand-purple/20 hover:-translate-y-1"
        >
          {{ buttonName }}
        </button>
      </div>

      <!-- Mobile Hamburger -->
      <button @click="toggleSidebar" class="lg:hidden p-2 rounded-lg transition-colors" :class="isLightMode ? 'bg-gray-100 text-gray-900' : 'bg-white/10 text-white'">
        <svg v-if="!isSidebarOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Sidebar (Mobile) - Teleported to body for perfect positioning -->
    <Teleport to="body">
      <transition name="sidebar-fade">
        <div v-if="isSidebarOpen" class="fixed inset-0 z-[999] lg:hidden">
          <!-- Backdrop -->
          <div 
            class="absolute inset-0 bg-gray-900/60 backdrop-blur-md" 
            @click="toggleSidebar"
          ></div>
          
          <!-- Sidebar Content -->
          <transition name="sidebar-slide">
            <div v-if="isSidebarOpen" class="absolute top-0 right-0 w-[300px] h-full bg-white shadow-2xl flex flex-col overflow-y-auto">
              <div class="p-8 flex justify-between items-center border-b border-gray-50">
                <div class="flex items-center">
                  <div class="p-2 bg-brand-purple rounded-lg mr-3">
                    <img :src="logo" alt="Logo" class="h-5 w-5 brightness-0 invert" />
                  </div>
                  <span class="text-xl font-black text-gray-900">Menu</span>
                </div>
                <button @click="toggleSidebar" class="p-2 rounded-xl bg-gray-50 text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav class="flex flex-col p-8 space-y-2">
                <router-link
                  v-for="link in navLinks"
                  :key="link.text"
                  :to="link.route"
                  @click="toggleSidebar"
                  class="flex items-center justify-between p-4 rounded-2xl text-lg font-bold transition-all group"
                  :class="currentRoute === link.route ? 'bg-brand-purple/5 text-brand-purple' : 'text-gray-600 hover:bg-gray-50 hover:text-brand-purple'"
                >
                  {{ link.text }}
                  <svg class="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </router-link>
              </nav>

              <div class="mt-auto p-8 border-t border-gray-100 bg-gray-50/50">
                <button
                  @click="handleClickAndEmit"
                  class="w-full bg-brand-purple text-white font-bold py-4 rounded-2xl hover:bg-brand-purple/90 transition-all shadow-lg shadow-brand-purple/20 active:scale-95"
                >
                  {{ buttonName }}
                </button>
                <p class="text-center text-xs text-gray-400 mt-6 font-medium">
                  © 2026 EmployeeTrack HRMS
                </p>
              </div>
            </div>
          </transition>
        </div>
      </transition>
    </Teleport>
  </header>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import logo from '../../assets/home-logo.svg';

const router = useRouter();
const props = defineProps({
  showNavItems: {
    type: Boolean,
    default: true
  },
  buttonName: {
    type: String,
    default: 'Sign In'
  },
  theme: {
    type: String,
    default: 'auto' // 'auto', 'dark', or 'light'
  }
});

const isScrolled = ref(false);
const currentRoute = computed(() => router.currentRoute.value.path);

const isLightMode = computed(() => {
  if (isScrolled.value) return true;
  if (props.theme === 'light') return true;
  if (props.theme === 'dark') return false;
  
  // Default logic: 
  // - Homepage ('/') starts in dark mode (transparent/white text)
  // - All other pages start in light mode (glass/dark text) for guaranteed visibility
  return currentRoute.value !== '/';
});

const navLinks = reactive([
  { text: 'Home', route: '/' },
  { text: 'Features', route: '/features' },
  { text: 'About', route: '/about' },
  { text: 'Contact', route: '/contact' },
]);


const emit = defineEmits(['clickHeaderButton']);
const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const handleClickAndEmit = () => {
  if (isSidebarOpen.value) toggleSidebar();
  emit('clickHeaderButton');
  router.push('/login');
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.sidebar-fade-enter-active, .sidebar-fade-leave-active {
  transition: opacity 0.3s ease;
}
.sidebar-fade-enter-from, .sidebar-fade-leave-to {
  opacity: 0;
}

.sidebar-slide-enter-active, .sidebar-slide-leave-active {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.sidebar-slide-enter-from, .sidebar-slide-leave-to {
  transform: translateX(100%);
}
</style>
