<template>
    <div class="flex py-2 flex-col">
        <div class="flex flex-1 grow items-center gap-1">
            <div v-for="pick in picks"
                class="border border-gray-700 rounded-md shadow-md overflow-hidden relative">
                <img class="w-full" :src="pick.src" :alt="pick.name" />
                <span class="absolute bg-gray-700 block bottom-0 right-0 text-[9px] leading-none p-1 rounded-tl-lg">{{
                        pick.try
                }}</span>
            </div>
            <div class="flex items-center gap-1 text-[10px] text-[#3A4C69] font-bold uppercase w-7 justify-center">pick
            </div>
            <div v-for="pick in picks"
                class="border border-gray-700 rounded-md shadow-md overflow-hidden relative">
                <img class="w-full" :src="pick.src" :alt="pick.name" />
                <span class="absolute bg-gray-700 block bottom-0 right-0 text-[9px] leading-none p-1 rounded-tl-lg">{{
                        pick.try
                }}</span>
            </div>
        </div>

        <div class="flex flex-1 grow items-center gap-1 pt-1">
            <div v-for="ban in bans" class="border border-red-700 rounded-sm shadow-md overflow-hidden relative">
                <img class="w-full" :src="ban.src" :alt="ban.name" />
                <span class="absolute bg-gray-700 block bottom-0 right-0 text-[9px] leading-none p-0.5 rounded-tl-lg">{{
                        ban.try
                }}</span>
            </div>
            <div class="flex items-center gap-1 text-[10px] text-[#3A4C69] font-bold uppercase w-7 justify-center">ban
            </div>
            <div v-for="ban in bans" class="border border-red-700 rounded-sm shadow-md overflow-hidden relative">
                <img class="w-full" :src="ban.src" :alt="ban.name" />
                <span class="absolute bg-gray-700 block bottom-0 right-0 text-[9px] leading-none p-0.5 rounded-tl-lg">{{
                        ban.try
                }}</span>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'

const picks = ref([
    { id: '0', src: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/abaddon.png", name: "Abaddon", try: 1 },
    { id: '1', src: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/alchemist.png", name: "Alchemist", try: 2 },
    { id: '2', src: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ancient_apparition.png", name: "Ancient Apparition", try: 3 },
    { id: '3', src: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png", name: "Anti-Mage", try: 4 },
    { id: '4', src: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/arc_warden.png", name: "Arc Warden", try: 5 }
])
const bans = ref([
    { id: '0', src: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/abaddon.png", name: "Abaddon", try: 8 },
    { id: '1', src: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/alchemist.png", name: "Alchemist", try: 6 },
    { id: '2', src: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ancient_apparition.png", name: "Ancient Apparition", try: 8 },
    { id: '3', src: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png", name: "Anti-Mage", try: 11 },
    { id: '4', src: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/arc_warden.png", name: "Arc Warden", try: 12 },
    { id: '5', src: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/arc_warden.png", name: "Arc Warden", try: 13 },
    { id: '6', src: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/arc_warden.png", name: "Arc Warden", try: 14 }
])
</script>
  
<style scoped>

</style>
  