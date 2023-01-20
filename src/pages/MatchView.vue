<script setup lang="ts">
import StreamBlock from '../components/match/StreamBlock.vue'
import MatchData from '../components/match/MatchData.vue'
import { ref, watch, computed } from 'vue';
import MatchMap from '../components/matchesList/MatchMap.vue';
import PlayersBlock from '../components/matchesList/PlayersBlock.vue';
import MatchDataTable from '../components/match/MatchDataTable.vue';
import MatchesByTeam from '../components/match/MatchesByTeam.vue';


const msgs = ref([
  { id: '0', name: "VaheeVaheeVaheeVaheeVahee", type: "DMG", content: "<b class='text-red-500'>1235 DMG</b> to Bangee" },
  { id: '1', name: "Bangee", type: "DMG", content: "Good defence Game by Brodie" },
  { id: '2', name: "Brodie", type: "DMG", content: "Brodie get <b class='text-yellow-500'>35 000 gold</b>" },
  { id: '3', name: "Brodie", type: "DMG", content: "<b class='text-red-500'>1235 DMG</b> to Bangee" },
  { id: '4', name: "Brodie", type: "DMG", content: "<b class='text-red-500'>1235 DMG</b> to Bangee" },
  { id: '5', name: "VaheeVaheeVaheeVaheeVahee", type: "DMG", content: "<b class='text-red-500'>1235 DMG</b> to Bangee" },
  { id: '6', name: "Bangee", type: "DMG", content: "Good defence Game by Brodie" },
  { id: '7', name: "Brodie", type: "DMG", content: "Brodie get <b class='text-yellow-500'>35 000 gold</b>" },
  { id: '8', name: "Brodie", type: "DMG", content: "<b class='text-red-500'>1235 DMG</b> to Bangee" },
  { id: '9', name: "Brodie", type: "DMG", content: "<b class='text-red-500'>1235 DMG</b> to Bangee" },
])
</script>

<template>
  <div class="max-w-6xl bg-gray-800" style="margin: 0 auto">
    <div class="grid grid-cols-1 md:grid-cols-6 gap-4 px-3 py-2 max-w-6xl" style="margin: 0 auto">
      <div class="col-span-1 md:col-span-3">
        <StreamBlock />
      </div>
      <div class="col-span-1 md:col-span-3">
        <MatchData />
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-6 gap-4 px-3 py-2 max-w-6xl" style="margin: 0 auto">
      <div class="col-span-1 md:col-span-3">
        <div class="grid md:grid-cols-3 border border-gray-300 dark:border-gray-700 rounded p-2 gap-2">
          <div class="flex col-span-3 md:col-span-1 items-center justify-center">
            <MatchMap />
          </div>
          <div class="flex col-span-3 md:col-span-2 border border-gray-300 dark:border-gray-700 rounded p-2">
            <div class="flex grow flex-col h-[188px] overflow-auto gap-1">
              <div v-for="msg in msgs" class="flex text-xs gap-1">
                <span class="text-apple font-bold w-20 text-ellipsis overflow-hidden">{{ msg.name }}</span>
                <span class="text-gray-200" v-html="msg.content"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-1 md:col-span-3">
        <PlayersBlock />
      </div>
    </div>
    <div class="px-3 py-2 max-w-6xl" style="margin: 0 auto">
      <MatchDataTable />
    </div>
    <div class="px-3 py-2 max-w-6xl" style="margin: 0 auto">
      <MatchesByTeam />
    </div>
  </div>
</template>

<style scoped>

</style>