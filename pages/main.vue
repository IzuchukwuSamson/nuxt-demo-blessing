<template>
  <div>
    <nav class="bg-gray-800 p-4">
      <div class="container mx-auto flex items-center justify-between">
        <div class="text-white font-bold text-xl">Logo</div>
        <div class="flex space-x-4 sm:hidden">
          <button id="menu-toggle" class="text-white">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <ul class="hidden space-x-4 sm:flex">
          <li><a href="#" class="text-white hover:text-gray-300">Home</a></li>
          <li>
            <a href="#" class="text-white hover:text-gray-300">Features</a>
          </li>
          <li>
            <a href="#" class="text-white hover:text-gray-300">Download</a>
          </li>
          <li>
            <a href="#" class="text-white hover:text-gray-300">Support</a>
          </li>
        </ul>
      </div>
      <div id="mobile-menu" class="hidden sm:hidden">
        <ul class="mt-4 space-y-2">
          <li><a href="#" class="text-white hover:text-gray-300">Home</a></li>
          <li>
            <a href="#" class="text-white hover:text-gray-300">Features</a>
          </li>
          <li>
            <a href="#" class="text-white hover:text-gray-300">Download</a>
          </li>
          <li>
            <a href="#" class="text-white hover:text-gray-300">Support</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default defineComponent({});
</script>
