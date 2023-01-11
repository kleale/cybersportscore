<template>
  <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm pt-2" aria-label="Pagination">
    <a href="#" class=" inline-flex items-center rounded-full px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-white">
      <span class="sr-only">Previous</span>
      <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
    </a>
    <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: " border-gray-300 text-gray-500 hover:bg-gray-50" -->
    <a href="#" aria-current="page" class=" z-10 inline-flex items-center bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 hover:text-white
            rounded-full dark:bg-gray-700 dark:text-gray-400 ">1</a>
    <a href="#"
      class="rounded-full  inline-flex items-center text-center  px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:dark:bg-gray-600 hover:text-white">2</a>
    <a href="#"
      class="rounded-full items-center px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:dark:bg-gray-600 hover:text-white">3</a>
    <span class="rounded-full inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700">...</span>
    <a href="#"
      class="rounded-full items-center px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:dark:bg-gray-600 hover:text-white">8</a>
    <a href="#"
      class="rounded-full inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:dark:bg-gray-600 hover:text-white">9</a>
    <a href="#"
      class="rounded-full inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:dark:bg-gray-600 hover:text-white">10</a>
    <a href="#"
      class="rounded-full inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:dark:bg-gray-600 hover:text-white">
      <span class="sr-only">Next</span>
      <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
    </a>
  </nav>
</template>
  
<script setup>
import { ref } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'

const pages = [1, 3, 4, 5, 6, 7]

const selected = ref(pages[1])
</script>