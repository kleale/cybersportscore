<template>
  <div class="flex flex-col w-full border border-gray-300 dark:border-gray-700 rounded relative">
    <div class="flex flex-row items-center px-3 py-2 border-b border-gray-300 dark:border-gray-700">
      <div class="flex mr-2">
        <img class="h-7" src="../../assets/none/tourNoLogo.svg" alt="tourName" />
      </div>
      <h3 class="text-sm md:text-l font-bold dark:text-white grow pl-1 flex-col">
        <span class="flex">IEM Dallas 2022</span><span class="flex">$15 000</span>
      </h3>
      <button class="btn-primary">
        MAP 1
      </button>
      <button class="btn-secondary">
        MAP 2
      </button>
      <button class="btn-secondary">
        MAP 3
      </button>
    </div>


    <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="text-white bg-[#3A4C69] focus:ring-2 focus:outline-none focus:ring-apple font-medium text-sm px-3 py-1.5 inline-flex items-center 
      dark:focus:ring-apple" type="button">

      <div class="flex mr-2 items-center grow gap-2">
        <img class="h-7" src="../../assets/none/tourNoLogo.svg" alt="tourName" />
        <img class="h-4" src="../../assets/icons/Visitors.svg" alt="gameName" />
        1,042
        [RU] euproleague_ru
      </div>
      <div class="border border-white text-xs px-1 rounded-sm text-white font-bold leading-4 h-[18px]">
        4 stream
      </div>
      <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>
    <!-- Dropdown menu -->
    <div id="dropdown" class="hidden z-10 w-full bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
      <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
        <li>
          <a href="#" class="flex mr-2 items-center grow gap-2 px-2 hover:bg-apple hover:text-white">
            <img class="h-7" src="../../assets/none/tourNoLogo.svg" alt="tourName" />
            <img class="h-4" src="../../assets/icons/Visitors.svg" alt="gameName" />
            1,042
            [RU] euproleague_ru
          </a>
        </li>
        <li>
          <a href="#" class="flex mr-2 items-center grow gap-2 px-2 hover:bg-apple hover:text-white">
            <img class="h-7" src="../../assets/none/tourNoLogo.svg" alt="tourName" />
            <img class="h-4" src="../../assets/icons/Visitors.svg" alt="gameName" />
            1,042
            [RU] euproleague_ru
          </a>
        </li>
      </ul>
    </div>


    <!-- <div class="flex items-center justify-center grow h-[310px] text-gray-700 opacity-20 text-[180px] overflow-hidden leading-none">
      stream
    </div> -->

    <div class="flex items-center justify-center grow h-[310px] overflow-hidden leading-none">
      <iframe src="https://player.twitch.tv/?channel=betboom_ru&parent=kleale.github.io&muted=true" height="310px" width="100%"
        allowfullscreen>
      </iframe>
    </div>

  </div>
</template>

<script setup lang="ts">

</script>
<style scoped>

</style>
