<template>
  <nav class="fixed bg-black w-full font-medium py-2 md:h-20">
    <div class="text-white md:px-40">
      <div class="hidden md:flex mx-auto md:px-6 items-center">
        <!-- logo -->

        <div class="flex">
          <img src="~/assets/mti.png" class="w-8" alt="" />
          <p class="text-2xl tracking-widest">METAMASK</p>
        </div>
        <!-- primary nav -->
        <div class="flex mx-auto py-6 items-center space-x-10">
          <NuxtLink href="#">Features </NuxtLink>
          <NuxtLink href="#">Build </NuxtLink>
          <NuxtLink href="#">Resourses </NuxtLink>
          <NuxtLink href="#">Learn </NuxtLink>

          <button
            class="bg-blue-500 hover:bg-blue-700 cursor-pointer rounded-full h-10 py-2 px-4 inline-flex items-center font-bold text-white"
          >
            Download
          </button>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 512 512"
            >
              <path
                fill="white"
                d="M368 112H144a144 144 0 0 0 0 288h224a144 144 0 0 0 0-288Zm0 230a86 86 0 1 1 86-86a85.88 85.88 0 0 1-86 86Z"
              />
            </svg>
          </div>
        </div>
      </div>

      <!-- mobile menu -->
      <div id="mobile-menu" class="sm:hidden">
        <div class="justify-between px-6 py-4 flex items-center">
          <div class="flex items-center space-x-2">
            <img src="~/assets/mti.png" class="h-10" alt="" />
            <p class="text-2xl text-white tracking-widest">METAMASK</p>
          </div>
          <div
            class="mobile-menu-button hover:cursor-pointer hover:bg-gray-800 hover:rounded-sm text-white"
          >
            <!-- menu Icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 8h12M6 12h12M6 16h12"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <!-- mobile menu goes here -->
    <div class="hidden mobile-menu md:hidden py-2 px-8 text-white">
      <a href="#" class="block pt-2">Features </a>
      <a href="#" class="block pt-4">Build </a>
      <a href="#" class="block pt-4">Resourses </a>
      <a href="#" class="block pt-4">Learn </a>
    </div>
  </nav>
</template>
