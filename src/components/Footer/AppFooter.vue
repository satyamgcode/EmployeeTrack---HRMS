<template>
  <footer class="bg-white border-t border-gray-200 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <!-- Logo Section -->
      <div class="flex justify-center items-center mb-6">
        <img src="/src/assets/home-logo.svg" alt="EmployeePro Logo" class="h-6 w-6 mr-2" />
        <h1 class="text-2xl font-bold">EmployeePro</h1>
      </div>

      <!-- Newsletter Subscription Section -->
      <div class="mb-8">
        <h2 class="text-lg font-medium">Subscribe to our newsletter</h2>
        <div class="mt-4 flex justify-center items-center">
          <div class="relative w-80">
            <input type="email"
              class="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Input your email" />
            <span class="absolute left-2 top-2.5 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  d="M2.94 6.94a2.94 2.94 0 112.94 2.94A2.94 2.94 0 012.94 6.94zm0 1.89a1.05 1.05 0 100 2.1 1.05 1.05 0 000-2.1z" />
                <path
                  d="M12.06 5a7 7 0 011.34 4.25 6.85 6.85 0 01-.44 2.59c-.2.61-1.1 2.61-1.55 3.5a5.5 5.5 0 01-1.95 1.95c-.89.45-2.89 1.35-3.5 1.55a6.85 6.85 0 01-2.59.44A7 7 0 1112.06 5zM10 18.25a4.5 4.5 0 003.42-1.67c.62-.82 2.61-2.32 3.16-3.36a4.5 4.5 0 10-6.68 0A7.5 7.5 0 0010 18.25z" />
              </svg>
            </span>
          </div>
          <button class="ml-4 py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Subscribe
          </button>
        </div>
      </div>

      <!-- Links Section -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-6">
        <div>
          <h3 class="text-lg font-medium">Product</h3>
          <ul class="mt-2 space-y-2">
            <li><a href="#" class="text-gray-600 hover:underline">Features</a></li>
            <li><a href="#" class="text-gray-600 hover:underline">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-medium">Resources</h3>
          <ul class="mt-2 space-y-2">
            <li><a href="#" class="text-gray-600 hover:underline">Blog</a></li>
            <li><a href="#" class="text-gray-600 hover:underline">User guides</a></li>
            <li><a href="#" class="text-gray-600 hover:underline">Webinars</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-medium">Company</h3>
          <ul class="mt-2 space-y-2">
            <li><a href="#" class="text-gray-600 hover:underline">About us</a></li>
            <li><a href="#" class="text-gray-600 hover:underline">Contact us</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-medium">Plans & Pricing</h3>
          <ul class="mt-2 space-y-2">
            <li><a href="#" class="text-gray-600 hover:underline">Personal</a></li>
            <li><a href="#" class="text-gray-600 hover:underline">Start up</a></li>
            <li><a href="#" class="text-gray-600 hover:underline">Organization</a></li>
          </ul>
        </div>
      </div>

      <!-- Footer Bottom Section -->
      <div class="flex flex-col items-center justify-between text-sm text-gray-500">
        <div class="mb-4">
          <span>&copy; {{ currentYear }} EmployeePro, Inc.</span>
          <span class="mx-2">&bull;</span>
          <a href="#" class="hover:underline">Privacy</a>
          <span class="mx-2">&bull;</span>
          <a href="#" class="hover:underline">Terms</a>
          <span class="mx-2">&bull;</span>
          <a href="#" class="hover:underline">Sitemap</a>
        </div>
        <div class="flex space-x-4 pt-5">
          <a href="#" class="text-gray-500 hover:text-blue-600">
            <i class="mdi mdi-twitter text-blue-500 text-2xl"></i>
          </a>
          <a href="#" class="text-gray-500 hover:text-blue-700">
            <i class="mdi mdi-facebook text-blue-700 text-2xl"></i>
          </a>
          <a href="#" class="text-gray-500 hover:text-blue-800">
            <i class="mdi mdi-linkedin text-blue-700 text-2xl"></i>
          </a>
          <a href="#" class="text-gray-500 hover:text-red-600">
            <i class="mdi mdi-youtube text-red-600 text-2xl"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>