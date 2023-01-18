<template>
    <Listbox as="div" v-model="selected">
        <!-- <ListboxLabel class="block text-sm font-medium text-gray-700">Лейбл</ListboxLabel> -->
        <div class="relative">
            <ListboxButton
                class="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-2 pr-7 text-left shadow-sm 
                    focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm
                    dark:text-gray-200 dark:bg-gray-800 dark:border-gray-700"
                    >
                <span v-if="selected" class="flex items-center h-4">
                    <img :src="selected.avatar" alt="" class="w-4 flex-shrink-0" />
                    <span class="ml-3 block truncate text-xs">{{ selected.name }}</span>
                </span>
                <span v-else class="flex items-center">
                    <span class="ml-1 block truncate text-xs dark:text-gray-500">Select Game</span>
                </span>
                <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                    <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
            </ListboxButton>

            <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100"
                leave-to-class="opacity-0">
                <ListboxOptions
                    class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 
                    focus:outline-none sm:text-sm
                    dark:text-gray-200 dark:bg-gray-800 dark:border-gray-600">
                    <ListboxOption as="template" v-for="person in people" :key="person.id" :value="person"
                        v-slot="{ active, selected }">
                        <li
                            :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900 dark:text-gray-400', 'relative cursor-default select-none py-2 pl-3 pr-9']">
                            <div class="flex items-center">
                                <img :src="person.avatar" alt="" class="w-4 flex-shrink-0" />
                                <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">{{
                                        person.name
                                }}</span>
                            </div>

                            <span v-if="selected"
                                :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                                <CheckIcon class="h-4 w-4" aria-hidden="true" />
                            </span>
                        </li>
                    </ListboxOption>
                </ListboxOptions>
            </transition>
        </div>
    </Listbox>
</template>
  
<script setup>
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

const people = [
    {
        id: 1,
        name: 'Falcons',
        avatar:
            'https://api.cybersportscore.com/media/logo/_30/t87958.png?28',
    },
    {
        id: 2,
        name: 'BIG',
        avatar:
            'https://api.cybersportscore.com/media/logo/_30/t87958.png?28',
    },
    
]

const selected = ref(people[1])
</script>