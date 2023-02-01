<template>
  <div class="flex flex-col w-full border border-gray-300 dark:border-gray-700 rounded-lg">
    <div class="flex flex-col md:flex-row items-center p-3 border-b border-gray-300 dark:border-gray-700">
      <h3 class="text-l font-bold dark:text-white grow pl-1 w-full md:pb-0">News</h3>
    </div>
    <div class="p-4">
      <a class="text-xs font-normal leading-1 inline-block pb-2 hover:underline" href="#">
        <span class="">18:20</span> <span class="font-bold text-apple">Dota 2</span>
        Менеджер проектов StarLadder: «Miracle получил визу, но не полетел в Китай из-за личных обстоятельств»
      </a>
      <a class="text-xs font-normal leading-1 inline-block pb-2 hover:underline" href="#">
        <span class="">18:20</span> <span class="font-bold text-apple">Dota 2</span>
        Менеджер проектов StarLadder: «Miracle получил визу, но не полетел в Китай из-за личных обстоятельств»
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const items = ref([
  { id: '0', name1:"kiki", name2:"Banana WannaCoffe" }, 
  { id: '1', name1:"Denz", name2:"suPerDuper" }, 
  { id: '2', name1:"Broudi", name2:"Taburet" }, 
  { id: '3', name1:"Vasek", name2:"Pikollo" }, 
  { id: '4', name1:"VinDisel", name2:"Amputator3000" }
])
</script>
<style scoped>
</style>
