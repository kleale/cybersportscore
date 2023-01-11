<template>
  <div class="flex flex-col w-full border border-gray-300 dark:border-gray-700 rounded">
    <div class="flex w-full justify-between items-center border-b border-gray-300 dark:border-gray-700 py-1.5 px-2">
      <div class="flex items-center gap-3">
        <a href="#" class="flex h-6 w-7">
          <img class="h-6 w-7" src="../../assets/none/teamNoLogo.svg" alt="teamName" />
        </a>
        <a href="#" class="flex text-right text-[13px] text-[#EB5757] leading-4">
          Moon Team
        </a>
      </div>
      <div class="flex items-center flex-row-reverse gap-3">
        <a href="#" class="flex h-6 w-7">
          <img class="h-6 w-7" src="../../assets/none/teamNoLogo.svg" alt="teamName" />
        </a>
        <a href="#" class="flex text-right  text-[13px] text-apple leading-4">
          Dota Geniuses
        </a>
      </div>
    </div>
    <!-- -->
    <div v-for="item in items" :key="item.id"
      class="flex w-full justify-between items-center border-b border-gray-300 dark:border-gray-700 py-1.5 px-2 last:border-0">
      <div class="flex items-center gap-2 py-0.5 relative">
        <img class="w-7 shadow-md" src="../../assets/none/heroNoLogo.svg" alt="heroName" />
        <div class="flex w-2 h-2 items-center bg-apple rounded-full"></div>
        <a href="#" class="flex text-xs leading-none">{{ item.name1 }}</a>
        <div class="border border-[#1786ED] text-[9px] px-0.5 rounded-sm text-[#1786ED] font-bold leading-3 h-[14px]">3</div>
        <div class="w-[100px] rounded-full h-0.5 absolute bottom-[-7px]">
          <div class="bg-yellow-600 h-0.5 rounded-full dark:bg-yellow-300" style="width: 35%"></div>
        </div>
      </div>
      <div class="flex items-center gap-2 py-0.5 flex-row-reverse relative">
        <img class="w-7 shadow-md" src="../../assets/none/heroNoLogo.svg" alt="heroName" />
        <div class="flex w-2 h-2 items-center bg-[#637488] rounded-full"></div>
        <a href="#" class="flex text-xs text-right leading-none" >{{ item.name2 }}</a>
        <div class="border border-[#1786ED] text-[9px] px-0.5 rounded-sm text-[#1786ED] font-bold leading-3 h-[14px]">3</div>
        <div class="w-[100px] rounded-full h-0.5 absolute bottom-[-7px] flex flex-row-reverse">
          <div class="bg-yellow-600 h-0.5 rounded-full dark:bg-yellow-300" style="width: 25%"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const items = ref([
  { id: '0', name1: "kiki", name2: "Banana WannaCoffe" },
  { id: '1', name1: "Denz", name2: "suPerDuper" },
  { id: '2', name1: "Broudi", name2: "Taburet" },
  { id: '3', name1: "Vasek", name2: "Pikollo" },
  { id: '4', name1: "VinDisel", name2: "Amputator3000" }
])
</script>
<style scoped>

</style>
