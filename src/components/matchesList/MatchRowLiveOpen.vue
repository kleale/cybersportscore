<template>
  <div class="flex border-t border-dashed border-gray-700 odd:bg-odd first:border-0 gap-4 p-3 flex-col md:flex-row justify-center items-center"
    style="background: linear-gradient(180deg, rgba(214, 214, 214, 0.06) 0%, rgba(217, 217, 217, 0.03) 100%); border-bottom: 1px solid rgba(147, 147, 147, 0.2);">
    <div class="flex flex-1  w-full grow justify-center items-center">
      <PlayersBlock />
    </div>
    <div class="flex flex-col w-[141px] justify-center items-center">
      <MatchMap />
    </div>
    <div class="flex flex-1 w-full grow justify-center items-center">
      <div class="flex w-full border border-gray-300 dark:border-gray-700 rounded p-2">
        <div class="w-full h-[180px]">
          <!-- <MatchChart /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PlayersBlock from './PlayersBlock.vue';
import MatchChart from './MatchChart.vue';
import MatchMap from './MatchMap.vue';
</script>
<style scoped>

</style>
