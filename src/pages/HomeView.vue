<template>
    <div class="grid grid-cols-1 md:grid-cols-5 gap-5 p-3 bg-gray-800">
        <!-- <div class="col-span-4 md:col-span-4"> -->
        <div class="col-span-5 md:col-span-5">
            <MatchesList />
        </div>
        <!-- <div class="col-span-4 md:col-span-1">
            <NewsBlock />
            <div id="dropdown-cta" class="p-4 mt-6 bg-blue-50 rounded-lg dark:bg-blue-900" role="alert">
                <div class="flex items-center mb-3"><span
                        class="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">Реклама</span><button
                        type="button"
                        class="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
                        data-collapse-toggle="dropdown-cta" aria-label="Close"><span class="sr-only">Закрыть</span><svg
                            aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg></button></div>
                <p class="mb-3 text-sm text-blue-900 dark:text-blue-400"> Рекламный баннер </p><a
                    class="text-sm text-blue-900 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    href="#">Ссылка</a>
            </div>
        </div> -->
    </div>
</template>


<script setup lang="ts">
import MatchesList from '../components/MatchesList.vue'
import NewsBlock from '../components/matchesList/NewsBlock.vue';

</script>

<style scoped lang="scss">
h1 {
    color: green;

    &:hover {
        color: greenyellow;
    }
}
</style>
