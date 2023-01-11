<template>
  <div
    class="flex flex-col md:flex-row items-center p-2 rounded-t-md border-x border-t border-gray-300 dark:border-gray-700">
    <h3 class="text-l font-bold dark:text-white grow pl-3 w-full pb-2 md:pb-0">Matches</h3>
    <div class="flex flex-col md:flex-row w-full">
      <SelectGame class="pl-2 pb-2 md:w-40 md:pb-0" />
      <SelectTeam class="pl-2 pb-2 md:w-40 md:pb-0" />
      <SelectEvent class="pl-2 pb-2 md:w-40 md:pb-0" />
    </div>
  </div>
  <div class="border border-gray-300 dark:border-gray-700">
    <MatchRowLive />
    <MatchRowLiveOpen />
    <MatchRowToday />
    <MatchRowFuture v-for="item in items" :key="item.id" :data="item" />
  </div>
  <Pagination />
</template>

<script setup>
import { ref } from 'vue'
import SelectTeam from './matchesList/SelectTeam.vue';
import SelectGame from './matchesList/SelectGame.vue';
import SelectEvent from './matchesList/SelectEvent.vue';
import Pagination from './matchesList/Pagination.vue';
import MatchRowLive from './matchesList/MatchRowLive.vue';
import MatchRowFuture from './matchesList/MatchRowFuture.vue';
import MatchRowToday from './matchesList/MatchRowToday.vue';
import MatchRowLiveOpen from './matchesList/MatchRowLiveOpen.vue';


const items = ref([
  { id: '0', name1: "Dota Geniuses", name2: "Flawless Goblins" },
  { id: '1' },
  { id: '2' },
  { id: '3' },
  { id: '4' },
  { id: '5' },
  { id: '6' },
  { id: '7' },
  { id: '8' },
  { id: '9' }

])
</script>

<style scoped>

</style>
