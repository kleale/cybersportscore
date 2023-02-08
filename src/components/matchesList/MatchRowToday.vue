<script setup lang="ts">
import { ChevronDownIcon, ChevronRightIcon, ClockIcon } from '@heroicons/vue/20/solid'
</script>


<template>
  <div class="flex border-t border-dashed border-gray-700 odd:bg-odd first:border-0">
    <div class="flex grow items-center">
      <div class="flex items-start md:items-center pl-2 py-1 md:pl-4 w-[70px] md:w-36 flex-col md:flex-row">
        <img class="h-5" src="../../assets/games/d2.svg" alt="gameName" />
        <div class="flex flex-col justify-center items-center md:ml-4">
          <div class="text-[11px] md:text-[12px] text-gray-600 dark:text-gray-300 leading-none">Сегодня<br>23:00</div>
        </div>
      </div>
      <div class="flex grow py-1 gap-2 md:gap-5 relative px-1 md:px-5">

        <div
          class="grow flex-1 flex justify-end items-end gap-1 md:gap-5 flex-col md:flex-row-reverse md:items-center md:justify-start">
          <div class="flex gap-2 items-center relative">
            <a href="#" class="flex h-6 w-5">
              <img class="h-6 w-6" src="../../assets/none/teamNoLogo.svg" alt="teamName" />
            </a>
          </div>
          <a href="#" class="flex text-right text-white text-[13px] leading-4">
            Yangon Galacticos
          </a>
        </div>

        <div
          class="flex justify-center items-center px-1 border-x border-gray-300 dark:border-gray-700 flex-col w-16 md:w-20 md:h-10 md:px-2">
          <a href="https://betboom.ru/"
            class="text-[11px] text-black text-center leading-none font-extrabold border border-gray-600 rounded-full px-2 py-1 mb-1 w-[35px]">
            <!-- BB -->
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px" y="0px" viewBox="0 0 49.5 31" style="enable-background:new 0 0 49.5 31;" xml:space="preserve">
              <path fill="#f7e700" d="M49.5,21.9c0.1,2.5-0.9,4.9-2.8,6.6c-2.1,1.7-4.8,2.6-7.6,2.5H26V0h12.2c6.2,0,10.2,3.4,10.2,8.8
	c0.1,2.4-1,4.7-2.9,6.2C48.1,16.4,49.6,19.1,49.5,21.9 M33.9,7.1V12H38c1.3,0.1,2.4-0.9,2.5-2.2c0-0.1,0-0.2,0-0.3
	c0.1-1.3-1-2.4-2.3-2.5c-0.1,0-0.2,0-0.3,0H33.9z M38.8,23.9c1.4,0,2.6-1.2,2.6-2.6c0-1.4-1.2-2.6-2.6-2.6c0,0,0,0,0,0h-4.9v5.2
	H38.8z" />
              <path fill="#FF0025" d="M23.5,21.9c0.1,2.5-0.9,4.9-2.8,6.6c-2.1,1.7-4.8,2.6-7.6,2.5H0V0h12.2c6.2,0,10.2,3.4,10.2,8.8
	c0.1,2.4-1,4.7-2.9,6.2C22.1,16.4,23.6,19.1,23.5,21.9 M7.9,7.1V12H12c1.3,0.1,2.4-0.9,2.5-2.2c0-0.1,0-0.2,0-0.3
	c0.1-1.3-1-2.4-2.3-2.5c-0.1,0-0.2,0-0.3,0H7.9z M12.8,23.9c1.4,0,2.6-1.2,2.6-2.6c0-1.4-1.2-2.6-2.6-2.6c0,0,0,0,0,0H7.9v5.2H12.8z
	" />
            </svg>
          </a>
          <div class="w-full flex text-[11px] text-white justify-center font-bold gap-[5px]">
            <div class="leading-none">1.78</div>
            <div class="leading-none">-</div>
            <div class="leading-none">1.12</div>
          </div>
        </div>

        <div class="flex grow flex-1 content-center md:items-center text-left gap-1 md:gap-5 flex-col md:flex-row">
          <a href="#" class="flex">
            <img class="h-6 w-6" src="../../assets/none/teamNoLogo.svg" alt="teamName" />
          </a>
          <a href="#" class="flex text-white text-[13px] leading-4">
            Outsiders
          </a>
        </div>

      </div>
      <div class="flex items-center w-[75px] md:w-[102px] justify-end gap-3 pr-3">
        <div class="flex w-7">
          <img class="w-7" src="../../assets/none/tourNoLogo.svg" alt="tourName" />
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="flex font-bold flex-col text-xs dark:text-gray-300 leading-4">BO3</div>
          <span class="text-[11px] leading-none font-semibold mt-0.5 w-7
             px-1 py-0.5 rounded bg-apple text-white text-center">0:1</span>
        </div>
      </div>
    </div>
    <button class="w-10 bg-gray-300 dark:bg-gray-700 justify-center items-center hidden md:flex hover:dark:bg-apple">
      <ChevronRightIcon class="h-5 w-5" />
    </button>
  </div>
</template>




<style scoped>

</style>
