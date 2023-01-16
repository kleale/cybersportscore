<script setup lang="ts">
  import { ChevronDownIcon, ChevronRightIcon, ClockIcon } from '@heroicons/vue/20/solid'
</script>

<template>
  <div class="flex border-t border-dashed border-gray-700 odd:bg-odd first:border-0 hover:bg-[#28405E]">
    <div class="flex grow items-center">
      <div class="flex items-start md:items-center py-1 pl-2 md:pl-4 w-[70px] md:w-36 flex-col md:flex-row">
        <img class="h-5" src="../../assets/games/lol.svg" alt="gameName" />
        <div class="flex flex-col justify-center items-center md:ml-4">
          <div class="text-[11px] md:text-[12px] text-gray-600 dark:text-gray-300 leading-none ">22 ноя, 23:00</div>
        </div>
      </div>
      <div class="flex grow py-1 gap-2 md:gap-5 relative px-1 md:px-5">
        
        <div class="grow flex-1 flex justify-end items-end gap-1 md:gap-5 flex-col md:flex-row-reverse md:items-center md:justify-start">
          <div class="flex gap-2 items-center">
            <a href="#" class="flex h-6 w-6">
              <img class="h-6 w-6" src="../../assets/none/teamNoLogo.svg" alt="teamName" />
            </a>
          </div>
          <a href="#" class="flex text-right text-white text-[13px] leading-4">
            Dota Geniuses
          </a>
        </div>

        <div class="flex justify-center items-center px-1 border-x border-gray-300 dark:border-gray-700 flex-col w-16 md:w-20 md:h-10 md:px-2">
          <div class="font-bold flex text-[10px] rounded-full justify-center items-center border-solid border w-[23px] h-[23px] border-apple text-apple">
            <div>VS</div>
          </div>
        </div>

        <div class="flex grow flex-1 content-center md:items-center text-left gap-1 md:gap-5 flex-col md:flex-row">
          <a href="#" class="flex h-6 w-6">
            <img class="h-6 w-6" src="../../assets/none/teamNoLogo.svg" alt="teamName" />
          </a>
          <a href="#" class="flex text-white text-[13px] leading-4">
            Flawless Goblins
          </a>
        </div>

      </div>
      <div class="flex items-center w-[75px] md:w-[102px] justify-end gap-3 pr-3">
        <div class="flex w-7">
          <img class="w-7" src="../../assets/none/tourNoLogo.svg" alt="tourName" />
        </div>
        <div class="flex flex-col items-center">
          <div class="flex font-bold flex-col text-xs dark:text-gray-300 leading-4">BO3</div>
          <span class="text-[11px] leading-none font-semibold mt-0.5 w-6
             px-0.5 py-0.5 rounded bg-gray-300 text-black text-center">0:0</span>
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
