<template>
    <div class="flex flex-col">
        <img class="w-[136px]" src="../../assets/dumb/map.png" alt="map" />
        <div class="flex w-[141px] justify-center items-center gap-3 pt-5">
            <div class="flex w-[24px] h-[29px] relative" data-tooltip-target="tooltip-default">
                <div class="absolute font-bold text-[10px] w-full text-center top-[1px] text-[#EB5757]">
                    FB
                </div>
                <svg width="24" height="31" viewBox="0 0 24 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.722244 21.2978L0.727002 3.12362L12.0024 0.666687L23.2778 3.12362V21.3049L12.0105 29.6666L0.722244 21.2978Z"
                        stroke="#EB5757" />
                </svg>
            </div>

            <div id="tooltip-default" role="tooltip"
                class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                Tooltip content
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <div class="flex w-[24px] h-[29px] relative">
                <div class="absolute font-bold text-[10px] w-full text-center top-[1px] text-apple">
                    F10
                </div>
                <svg width="24" height="31" viewBox="0 0 24 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.722244 21.2978L0.727002 3.12362L12.0024 0.666687L23.2778 3.12362V21.3049L12.0105 29.6666L0.722244 21.2978Z"
                        stroke="#98AA28" />
                </svg>
            </div>

            <div class="flex w-[24px] h-[29px] relative">
                <div class="absolute font-bold text-[10px] w-full text-center top-[1px] text-[#637488]">
                    T1
                </div>
                <svg width="24" height="31" viewBox="0 0 24 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.722244 21.2978L0.727002 3.12362L12.0024 0.666687L23.2778 3.12362V21.3049L12.0105 29.6666L0.722244 21.2978Z"
                        stroke="#637488" />
                </svg>
            </div>

            <div class="flex w-[24px] h-[29px] relative">
                <div class="absolute font-bold text-[10px] w-full text-center top-[1px] text-[#637488]">
                    R
                </div>
                <svg width="24" height="31" viewBox="0 0 24 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.722244 21.2978L0.727002 3.12362L12.0024 0.666687L23.2778 3.12362V21.3049L12.0105 29.6666L0.722244 21.2978Z"
                        stroke="#637488" />
                </svg>
            </div>

        </div>
    </div>
</template>