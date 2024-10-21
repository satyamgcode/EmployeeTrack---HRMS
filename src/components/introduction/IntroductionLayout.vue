<template>
  <div class="flex items-center min-h-screen bg-white">
<!-- side window -->
 <div class=" max-w-3xl h-[100vh] bg-neutral-200 p-6 flex flex-col items-center">
   <img src="/public/vite.svg" alt="logo" class="h-40 mb-4"/>
   <h1 class="text-1xl font-bold mb-[-5px]">Welcome to </h1>
   <h1 class="text-4xl font-bold mb-7">EmployeeTrack</h1>
   <p class="text-gray-500">Please provide your organization's details to go further</p>

 </div>


    <!-- Step progress -->
    <slot name="StepProgress"> </slot>
  </div>
</template>
