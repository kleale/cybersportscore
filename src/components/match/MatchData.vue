<template>
  <div class="live flex border border-gray-300 dark:border-gray-700 rounded relative">
    <div class="flex grow items-center">
      <div class="flex items-start md:items-center py-1 pl-2 md:pl-3 flex-col md:flex-row">
        <img class="h-6" src="../../assets/games/d2.svg" alt="gameName" />
      </div>
      <div class="flex grow py-1 gap-2 md:gap-3 relative px-1 md:px-3">

        <div
          class="flex grow flex-1 justify-end items-end gap-1 md:gap-3 flex-col md:flex-row-reverse md:items-center md:justify-start">
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
              <img class="h-6 w-6" src="../../assets/none/teamNoLogo.svg" alt="teamName" />
            </a>
          </div>
          <a href="#" class="flex text-right text-white text-[13px] leading-4" style="max-width: min-content;">
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

        <div
          class="flex justify-center px-1 border-x border-gray-300 dark:border-gray-700 flex-col w-16 md:w-20 md:h-10 md:px-2">
          <div class="flex items-center justify-center">
            <ClockIcon class="h-3" />
            <div class="text-xs ml-1">29:35</div>
          </div>
          <div class="dark:text-apple justify-center text-center text-sm font-extrabold">
            38-45
          </div>
        </div>

        <div class="flex grow flex-1 content-center md:items-center text-left gap-1 md:gap-2 flex-col md:flex-row">
          <a href="#" class="h-6 w-6 flex">
            <img class="h-6 w-6" src="../../assets/none/teamNoLogo.svg" alt="teamName" />
          </a>
          <a href="#" class="flex text-white text-[13px] leading-4" style="max-width: min-content;">
            Dota Geniuses
          </a>
        </div>

        <!-- <div class="grow absolute bottom-0 right-1/2 hidden md:flex">
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
        </div> -->
      </div>

      <div class="flex items-center justify-end gap-3 pr-3">
        <div class="flex flex-col justify-center items-center">
          <div class="flex font-bold flex-col text-xs dark:text-gray-300 leading-4">BO3</div>
          <span class="text-[11px] leading-none font-semibold mt-0.5 w-7
             px-1 py-0.5 rounded bg-apple text-white text-center">0:1</span>
        </div>
      </div>
    </div>
  </div>

  <PicksNBans />

  <div class="flex w-full border border-gray-300 dark:border-gray-700 rounded p-2">
    <div class="w-full h-[270px]">
      <MatchChart />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ClockIcon } from '@heroicons/vue/20/solid'
import MatchChart from '../matchesList/MatchChart.vue';
import PicksNBans from '../match/PicksNBans.vue';
</script>

<style scoped>

</style>
