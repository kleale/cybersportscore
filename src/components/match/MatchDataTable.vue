<template>

  <div class="overflow-x-auto relative rounded">
    <table class="w-full table-fixed text-xs text-left text-gray-500 dark:text-gray-100 border border-gray-700">
      <thead class="text-xs text-gray-700 uppercase dark:text-gray-500 border-b border-gray-700 dark:bg-[#212D3D]">
        <tr>
          <th scope="col" class="py-1 px-2 w-[200px]">
            <div class="flex items-center gap-2">
              <a href="#" class="flex h-6 w-9 justify-center">
                <img class="h-6 w-6" src="/src/assets/none/teamNoLogo.svg" alt="teamName">
              </a>
              <a href="#" class="flex text-right text-[13px] text-[#EB5757] leading-4"> Moon Team
              </a>
            </div>
          </th>
          <th scope="col" class="py-2 px-1 w-[30px]">K</th>
          <th scope="col" class="py-2 px-1 w-[30px]">D</th>
          <th scope="col" class="py-2 px-1 w-[30px]">A</th>
          <th scope="col" class="py-2 px-1 text-apple">NET</th>
          <th scope="col" class="py-2 px-1 w-[250px]">Items</th>
          <th scope="col" class="py-2 px-1 w-[80px]">LH/DH</th>
          <th scope="col" class="py-2 px-1 w-[65px]">GPM</th>
          <th scope="col" class="py-2 px-1 w-[65px]">XPM</th>
          <th scope="col" class="py-2 px-1 w-[65px]">Heal</th>
          <th scope="col" class="py-2 px-1 w-[65px]">DMG</th>
          <th scope="col" class="py-2 px-1 w-[65px]">BLD</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="player in players" :key="player.id" class="border-b dark:border-gray-700 dark:hover:bg-gray-700">
          <td class="py-1 px-2">
            <div class="flex flex-row gap-2 items-center">
              <img class="w-9 h-6 shadow-md rounded-sm" :src="player.src" :alt="player.hero" />
              <div class="flex-col">
                <div class="flex text-xs leading-none text-white">{{ player.hero }}</div>
                <a href="#" class="text-[10px] leading-none text-gray-400">{{ player.name }}</a>
              </div>
              <div
                class="border border-[#1786ED] text-[9px] px-0.5 rounded-sm text-[#1786ED] font-bold leading-3 h-[14px]">
                3</div>
            </div>
          </td>
          <th scope="col" class="py-2 px-1">{{ player.k }}</th>
          <th scope="col" class="py-2 px-1">{{ player.d }}</th>
          <th scope="col" class="py-2 px-1">{{ player.a }}</th>
          <td scope="col" class="py-2 px-1 text-apple">{{ player.net }}</td>
          <td scope="col" class="py-2 px-1">
            <div class="flex gap-2 w-[240px]">
              <div class="flex gap-0.5">
                <img class="w-5 shadow-md rounded-sm" src="../../assets/dumb/item.png" alt="heroName" />
                <img class="w-5 shadow-md rounded-sm" src="../../assets/dumb/item.png" alt="heroName" />
                <div class="w-5 shadow-md rounded-sm bg-gray-900"></div>
                <div class="w-5 shadow-md rounded-sm bg-gray-900"></div>
                <div class="w-5 shadow-md rounded-sm bg-gray-900"></div>
                <div class="w-5 shadow-md rounded-sm bg-gray-900"></div>
              </div>
              <div class="flex gap-0.5">
                <div class="w-5 shadow-md rounded-sm bg-gray-900"></div>
              </div>
              <div class="flex gap-0.5">
                <div class="w-5 shadow-md rounded-sm bg-gray-900"></div>
                <div class="w-5 shadow-md rounded-sm bg-gray-900"></div>
                <div class="w-5 shadow-md rounded-sm bg-gray-900"></div>
              </div>
            </div>
          </td>
          <td scope="col" class="py-2 px-1">{{ player.LHDH }}</td>
          <td scope="col" class="py-2 px-1 text-apple">{{ player.GPM }}</td>
          <td scope="col" class="py-2 px-1">{{ player.XPM }}</td>
          <td scope="col" class="py-2 px-1">{{ player.Heal }}</td>
          <td scope="col" class="py-2 px-1">{{ player.DMG }}</td>
          <td scope="col" class="py-2 px-1">{{ player.BLD }}</td>
        </tr>
      </tbody>

    </table>
    <table class="w-full table-fixed text-xs text-left text-gray-500 dark:text-gray-100 border border-gray-700">
      <thead class="text-xs text-gray-700 uppercase dark:text-gray-500 border-b border-gray-700 dark:bg-[#212D3D]">
        <tr>
          <th scope="col" class="py-1 px-2 w-[200px]">
            <div class="flex items-center gap-2">
              <a href="#" class="flex h-6 w-9 justify-center">
                <img class="h-6 w-6" src="/src/assets/none/teamNoLogo.svg" alt="teamName">
              </a>
              <a href="#" class="flex text-right text-[13px] text-apple leading-4"> Dota Geniuses
              </a>
            </div>
          </th>
          <th scope="col" class="py-2 px-1 w-[30px]">K</th>
          <th scope="col" class="py-2 px-1 w-[30px]">D</th>
          <th scope="col" class="py-2 px-1 w-[30px]">A</th>
          <th scope="col" class="py-2 px-1 text-apple ">NET</th>
          <th scope="col" class="py-2 px-1 w-[250px]">Items</th>
          <th scope="col" class="py-2 px-1 w-[80px]">LH/DH</th>
          <th scope="col" class="py-2 px-1 w-[65px]">GPM</th>
          <th scope="col" class="py-2 px-1 w-[65px]">XPM</th>
          <th scope="col" class="py-2 px-1 w-[65px]">Heal</th>
          <th scope="col" class="py-2 px-1 w-[65px]">DMG</th>
          <th scope="col" class="py-2 px-1 w-[65px]">BLD</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="player in players" :key="player.id" class="border-b dark:border-gray-700 dark:hover:bg-gray-700">
          <td class="py-1 px-2">
            <div class="flex flex-row gap-2 items-center">
              <img class="w-9 h-6 shadow-md rounded-sm" :src="player.src" :alt="player.hero" />
              <div class="flex-col">
                <div class="flex text-xs leading-none text-white">{{ player.hero }}</div>
                <a href="#" class="text-[10px] leading-none text-gray-400">{{ player.name }}</a>
              </div>
              <div
                class="border border-[#1786ED] text-[9px] px-0.5 rounded-sm text-[#1786ED] font-bold leading-3 h-[14px]">
                3</div>
            </div>
          </td>
          <th scope="col" class="py-2 px-1">{{ player.k }}</th>
          <th scope="col" class="py-2 px-1">{{ player.d }}</th>
          <th scope="col" class="py-2 px-1">{{ player.a }}</th>
          <td scope="col" class="py-2 px-1 text-apple">{{ player.net }}</td>
          <td scope="col" class="py-2 px-1">
            <div class="flex gap-2 w-[240px]">
              <div class="flex gap-0.5">
                <img class="w-5 shadow-md rounded-sm" src="../../assets/dumb/item.png" alt="heroName" />
                <img class="w-5 shadow-md rounded-sm" src="../../assets/dumb/item.png" alt="heroName" />
                <div class="w-5 shadow-md rounded-sm bg-gray-900"></div>
                <div class="w-5 shadow-md rounded-sm bg-gray-900"></div>
                <div class="w-5 shadow-md rounded-sm bg-gray-900"></div>
                <div class="w-5 shadow-md rounded-sm bg-gray-900"></div>
              </div>
              <div class="flex gap-0.5">
                <div class="w-5 shadow-md rounded-sm bg-gray-900"></div>
              </div>
              <div class="flex gap-0.5">
                <div class="w-5 shadow-md rounded-sm bg-gray-900"></div>
                <div class="w-5 shadow-md rounded-sm bg-gray-900"></div>
                <div class="w-5 shadow-md rounded-sm bg-gray-900"></div>
              </div>
            </div>
          </td>
          <td scope="col" class="py-2 px-1">{{ player.LHDH }}</td>
          <td scope="col" class="py-2 px-1 text-apple">{{ player.GPM }}</td>
          <td scope="col" class="py-2 px-1">{{ player.XPM }}</td>
          <td scope="col" class="py-2 px-1">{{ player.Heal }}</td>
          <td scope="col" class="py-2 px-1">{{ player.DMG }}</td>
          <td scope="col" class="py-2 px-1">{{ player.BLD }}</td>
        </tr>
      </tbody>

    </table>
  </div>


</template>

<script setup lang="ts">
import { ref } from 'vue'
const players = ref([
  { id: '0', name: "kiki", hero: "Huskar", src: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/abaddon.png", k: 17, d: 6, a: 4, net: 26345, items: 1, LHDH: "155 (2)", GPM: 432, XPM: 745, Heal: 23, DMG: 23345, BLD: 4231 },
  { id: '0', name: "Denz", hero: "Enchatress", src: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/alchemist.png", k: 17, d: 6, a: 4, net: 23432, items: 1, LHDH: "155 (2)", GPM: 432, XPM: 745, Heal: 23, DMG: 23345, BLD: 4231 },
  { id: '0', name: "Bangee", hero: "Earth Spirit", src: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ancient_apparition.png", k: 17, d: 6, a: 4, net: 234, items: 1, LHDH: "155 (2)", GPM: 432, XPM: 745, Heal: 23, DMG: 23345, BLD: 4231 },
  { id: '0', name: "Vita", hero: "Luna", src: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png", k: 17, d: 6, a: 4, net: 674, items: 1, LHDH: "155 (2)", GPM: 432, XPM: 745, Heal: 23, DMG: 23345, BLD: 4231 },
  { id: '0', name: "Kreen", hero: "Leshrac", src: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/arc_warden.png", k: 17, d: 6, a: 4, net: 65, items: 1, LHDH: "155 (2)", GPM: 432, XPM: 745, Heal: 23, DMG: 23345, BLD: 4231 },
])
</script>
<style scoped>

</style>
