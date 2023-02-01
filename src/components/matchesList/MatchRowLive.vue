<script setup lang="ts">
import { ChevronDownIcon, ChevronRightIcon, ClockIcon } from '@heroicons/vue/20/solid'
</script>

<template>
  <div class="flex border-t border-dashed  odd:bg-odd first:border-0 drop-shadow-md z-10 border-l-4 border-red-500">
    <div class="flex grow items-center">
      <div class="flex items-start md:items-center py-1 pl-2 md:pl-4 w-[70px] md:w-36 flex-col md:flex-row">
        <img class="h-5" src="../../assets/games/d2.svg" alt="gameName" />
        <div class="flex flex-col justify-center items-center md:ml-4">
          <div class="font-bold flex-col text-sm dark:text-red-500 leading-4 hidden md:flex">LIVE</div>
          <span class="bg-red-500 text-gray-900 text-xs font-semibold mt-0.5
             px-1 rounded dark:bg-red-500 dark:text-gray-900">MAP1</span>
          <!-- <div class="text-xs text-gray-600 dark:text-gray-300">СЕГОДНЯ<br>В 23:00</div> -->
        </div>
      </div>
      <div class="flex grow py-1 gap-2 md:gap-5 relative px-1 md:px-5">

        <div
          class="flex grow flex-1 justify-end items-end gap-1 md:gap-5 flex-col md:flex-row-reverse md:items-center md:justify-start">
          <div class="flex gap-2 items-center relative">
            <div class="flex gap-1 md:hidden">
              <div
                class="border border-yellow-300 text-[9px] px-1 rounded-sm text-yellow-300 font-bold leading-4 h-[18px]">
                13k
              </div>
              <div class="border border-[#1786ED] text-[9px] px-1 rounded-sm text-[#1786ED] font-bold leading-4 h-[18px]">
                3k
              </div>
            </div>
            <a href="#" class="flex h-6 w-6">
              <img class="h-6 max-w-full" src="../../assets/none/teamNoLogo.svg" alt="teamName" />
            </a>
          </div>
          <a href="#" class="flex text-right text-white text-[13px] leading-4">
            Moon Team
          </a>
          <div class="gap-1 md:flex hidden">
            <div
              class="border border-yellow-300 text-[9px] px-1 rounded-sm text-yellow-300 font-bold leading-4 h-[18px]">
              13k
            </div>
            <div class="border border-[#1786ED] text-[9px] px-1 rounded-sm text-[#1786ED] font-bold leading-4 h-[18px]">
              3k
            </div>
          </div>
        </div>

        <router-link to="/match"
          class="flex justify-center px-1 border-x border-gray-300 dark:border-gray-700 flex-col w-16 md:w-20 md:h-10 md:px-2">
          <div class="flex items-center justify-center">
            <ClockIcon class="h-3" />
            <div class="text-xs ml-1">29:35</div>
          </div>
          <div class="dark:text-apple justify-center text-center text-sm font-extrabold">
            38-45
          </div>
        </router-link>

        <div class="flex grow flex-1 content-center md:items-center text-left gap-1 md:gap-5 flex-col md:flex-row">
          <a href="#" class="flex h-6 w-6">
            <img class="h-6 max-w-full" src="../../assets/none/teamNoLogo.svg" alt="teamName" />
          </a>
          <a href="#" class="flex text-white text-[13px] leading-4">
            Dota Geniuses
          </a>
        </div>

        <div class="grow absolute bottom-0 right-1/2 hidden md:flex">
          <div class="px-px w-full gap-px flex justify-center items-center self-stretch h-[3px]">
            <div class="gap-px flex flex-col items-end">
              <div class="w-full h-1 rounded-tl-[3px] rounded-tr-[3px] bg-[rgba(255,201,61,1)]" style="width: 266px;" />
              <div class="h-1 rounded-bl-[3px] rounded-br-[3px] w-[132.7px] bg-[rgba(23,134,237,1)]"
                style="width: 66px;" />
            </div>
          </div>
        </div>
        <div class="grow absolute bottom-0 left-1/2 hidden md:flex">
          <div class="px-px w-full gap-px flex justify-center items-center self-stretch h-[3px]">
            <div class="gap-px flex flex-col items-start">
              <div class="w-full h-1 rounded-tl-[3px] rounded-tr-[3px] bg-[rgba(255,201,61,1)]" style="width: 66px;" />
              <div class="h-1 rounded-bl-[3px] rounded-br-[3px] w-[132.7px] bg-[rgba(23,134,237,1)]"
                style="width: 66px;" />
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center w-[75px] md:w-[102px] justify-end gap-3 pr-3">
        <div class="flex w-7">
          <img class="" src="../../assets/none/tourNoLogo.svg" alt="tourName" />
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="flex font-bold flex-col text-xs dark:text-gray-300 leading-4">BO3</div>
          <span class="text-[11px] leading-none font-semibold mt-0.5 w-7
             px-1 py-0.5 rounded bg-apple text-white text-center">0:1</span>
        </div>
      </div>
    </div>
    <button class="w-10 bg-gray-300 dark:bg-gray-700 justify-center items-center hidden md:flex hover:dark:bg-apple">
      <ChevronDownIcon class="h-5 w-5" />
    </button>
  </div>
</template>

<style scoped>

</style>
