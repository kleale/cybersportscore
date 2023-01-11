<template>
    <div
        class="flex flex-col md:flex-row p-2 rounded-t-md border-x border-t border-gray-300 dark:border-gray-700">
        <h3 class="flex flex-1 grow text-l font-bold dark:text-white pl-3 pb-2 md:pb-0">Matches</h3>
        <div class="flex flex-col md:flex-row">
            <SelectGame class="pl-2 pb-2 md:w-40 md:pb-0" />
            <SelectTeam class="pl-2 pb-2 md:w-40 md:pb-0" />
            <SelectEvent class="pl-2 pb-2 md:w-40 md:pb-0" />
        </div>
    </div>
    <div class="border border-gray-300 dark:border-gray-700 grid grid-cols-1 md:grid-cols-6">
        <div class="col-span-1 md:col-span-3">
            <div v-for="match in matchesT1" class="flex odd:bg-odd hover:bg-[#28405E] border-r-4"
                :class="match.win ? 'border-apple' : 'border-red-500'">
                <div class="flex flex-col md:flex-row items-start md:items-center py-1 pl-2 md:pl-4 w-[70px] md:w-36">
                    <!-- <img class="h-5" src="../../assets/games/lol.svg" alt="gameName" /> -->
                    <div class="flex flex-col">
                        <div class="flex font-bold flex-col text-xs dark:text-gray-300 leading-4">BO3</div>
                        <div class="text-[11px] md:text-[12px] text-gray-600 dark:text-gray-300 leading-none ">
                            {{ match.date }}</div>
                    </div>
                </div>
                <div class="flex grow py-1 gap-2 md:gap-2 relative">
                    <div
                        class="grow flex-1 flex justify-end items-end gap-1 md:gap-3 flex-col md:flex-row-reverse md:items-center md:justify-start">
                        <div class="flex gap-2 items-center">
                            <a href="#" class="flex h-6 w-6">
                                <img class="h-6 w-6" src="../../assets/none/teamNoLogo.svg" alt="teamName" />
                            </a>
                        </div>
                        <a href="#" class="flex text-right text-white text-[13px] leading-4">
                            {{ match.team1 }}
                        </a>
                    </div>
                    <div
                        class="flex justify-center items-center px-1 border-x border-gray-300 dark:border-gray-700 flex-col w-14 md:h-10 md:px-2">
                        <div class="text-md font-bold" 
                        :class="match.win ? 'text-apple' : 'text-red-500'">{{ match.score }}</div>
                    </div>
                    <div
                        class="flex grow flex-1 content-center md:items-center text-left gap-1 md:gap-3 flex-col md:flex-row">
                        <a href="#" class="flex h-6 w-6">
                            <img class="h-6 w-6" src="../../assets/none/teamNoLogo.svg" alt="teamName" />
                        </a>
                        <a href="#" class="flex text-white text-[13px] leading-4">
                            {{ match.team2 }}
                        </a>
                    </div>
                </div>
                <div class="flex items-center w-[75px] md:w-[102px] justify-end gap-3 pr-3">
                    <div class="flex">
                        <img class="h-7" src="../../assets/none/tourNoLogo.svg" alt="tourName" />
                    </div>
                </div>
            </div>
            
        </div>
        <div class="col-span-1 md:col-span-3">
            <div v-for="match in matchesT2" class="flex odd:bg-odd hover:bg-[#28405E] border-l-4"
                :class="match.win ? 'border-apple' : 'border-red-500'">
                <div class="flex items-start md:items-center py-1 pl-2 md:pl-4 w-[70px] md:w-36 flex-col md:flex-row">
                    <!-- <img class="h-5" src="../../assets/games/lol.svg" alt="gameName" /> -->
                    <div class="flex flex-col">
                        <div class="flex font-bold flex-col text-xs dark:text-gray-300 leading-4">BO3</div>
                        <div class="text-[11px] md:text-[12px] text-gray-600 dark:text-gray-300 leading-none ">
                            {{ match.date }}</div>
                    </div>
                </div>
                <div class="flex grow py-1 gap-2 md:gap-2 relative">
                    <div
                        class="grow flex-1 flex justify-end items-end gap-1 md:gap-3 flex-col md:flex-row-reverse md:items-center md:justify-start">
                        <div class="flex gap-2 items-center">
                            <a href="#" class="flex h-6 w-6">
                                <img class="h-6 w-6" src="../../assets/none/teamNoLogo.svg" alt="teamName" />
                            </a>
                        </div>
                        <a href="#" class="flex text-right text-white text-[13px] leading-4">
                            {{ match.team1 }}
                        </a>
                    </div>
                    <div
                        class="flex justify-center items-center px-1 border-x border-gray-300 dark:border-gray-700 flex-col w-14 md:h-10 md:px-2">
                        <div class="text-md font-bold" 
                        :class="match.win ? 'text-apple' : 'text-red-500'">{{ match.score }}</div>
                    </div>
                    <div
                        class="flex grow flex-1 content-center md:items-center text-left gap-1 md:gap-3 flex-col md:flex-row">
                        <a href="#" class="flex h-6 w-6">
                            <img class="h-6 w-6" src="../../assets/none/teamNoLogo.svg" alt="teamName" />
                        </a>
                        <a href="#" class="flex text-white text-[13px] leading-4">
                            {{ match.team2 }}
                        </a>
                    </div>
                </div>
                <div class="flex items-center w-[75px] md:w-[102px] justify-end gap-3 pr-3">
                    <div class="flex">
                        <img class="h-7" src="../../assets/none/tourNoLogo.svg" alt="tourName" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Pagination />
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
import SelectEvent from '../matchesList/SelectEvent.vue';
import SelectGame from '../matchesList/SelectGame.vue';
import SelectTeam from '../matchesList/SelectTeam.vue';
const matchesT1 = ref([
    { id: '0', team1: "Dota Geniuses", team2: "Wolf Team", win: true, score: "3-1",date: "22 ноя, 23:00" },
    { id: '1', team1: "Dota Geniuses", team2: "Swift Kings", win: true, score: "2-1",date: "21 ноя, 21:00" },
    { id: '2', team1: "Dota Geniuses", team2: "Mad Monkeys", win: false, score: "1-2",date: "20 ноя, 18:30" },
    { id: '3', team1: "Dota Geniuses", team2: "Flawness Team", win: false, score: "1-1",date: "19 ноя, 20:30" },
    { id: '4', team1: "Dota Geniuses", team2: "Bright Crusaders Team", win: true, score: "3-1",date: "18 ноя, 21:00" },
    { id: '5', team1: "Dota Geniuses", team2: "Dragon Blood", win: false, score: "1-0",date: "17 ноя, 22:00" },
    ])
    const matchesT2 = ref([
    { id: '0', team1: "Alliance", team2: "Flawness Team", win: false, score: "0-1",date: "22 ноя, 23:00" },
    { id: '1', team1: "Alliance", team2: "Dragon Blood", win: true, score: "3-2",date: "21 ноя, 21:00" },
    { id: '2', team1: "Alliance", team2: "Swift Kings", win: false, score: "1-2",date: "20 ноя, 18:30" },
    { id: '3', team1: "Alliance", team2: "Flawness Team", win: true, score: "4-1",date: "19 ноя, 20:30" },
    { id: '4', team1: "Alliance", team2: "Bright Crusaders Team", win: true, score: "3-1",date: "18 ноя, 21:00" },
    { id: '5', team1: "Alliance", team2: "Mad Monkeys", win: true, score: "2-0",date: "17 ноя, 22:00" },
    ])
</script>
<style scoped>

</style>
  