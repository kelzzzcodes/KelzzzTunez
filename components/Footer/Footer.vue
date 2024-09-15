<script setup>
</script>

<template>
    <footer
        class="bg-[#272727] w-full lg:h-16 border-t-2 flex flex-col lg:flex-row items-center justify-between fixed bottom-0 lg:px-4 py-4 lg:py-2">
        <!-- Left Section -->
        <div class="flex justify-center  lg:w-[18%] py-1">
            <ul class="flex gap-4 items-center justify-center text-center text-white h-full">
                <li class="text-2xl">
                    <font-awesome-icon :icon="['fas', 'shuffle']" />
                </li>
                <li class="text-2xl">
                    <font-awesome-icon :icon="['fas', 'backward-step']" />
                </li>
                <li class="text-2xl">
                    <font-awesome-icon :icon="['far', 'circle-pause']" />
                </li>
                <li class="text-2xl">
                    <font-awesome-icon :icon="['fas', 'forward-step']" />
                </li>
                <li class="text-2xl">
                    <font-awesome-icon :icon="['fas', 'repeat']" />
                </li>
            </ul>
        </div>

        <!-- Center Section -->
        <div class="flex items-center justify-center lg:w-[64%] py-1 gap-4 lg:gap-14">


            <div class="flex flex-col items-center text-white">
                <p>
                    GOD DID
                    <span>Dj Khaled</span>
                </p>

                <ul class="flex items-center gap-2">
                    <li>1:45</li>
                    <li class="h-4 w-[200px]">

                        <progress value="70" max="100"
                            class="w-full h-4 bg-gray-200 rounded overflow-hidden appearance-none">
                            <div class="w-3/4 h-full bg-green-500"></div>
                        </progress>
                    </li>
                    <li>3:45</li>
                </ul>
            </div>
        </div>

        <!-- Right Section -->
        <div class="flex justify-center w-full lg:w-[20%] py-1">
            <ul class="flex items-center justify-center text-white gap-4">
                <li class="text-2xl">
                    <font-awesome-icon :icon="['fas', 'minus']" />
                </li>
                <li class="text-2xl">
                    <font-awesome-icon :icon="['fas', 'volume-high']" />
                </li>
                <li class="text-2xl">
                    <font-awesome-icon :icon="['fas', 'plus']" />
                </li>
                <li class="text-2xl">
                    <font-awesome-icon :icon="['far', 'heart']" />
                </li>
                <li class="text-2xl">
                    <font-awesome-icon :icon="['fas', 'ellipsis']" />
                </li>
            </ul>
        </div>
    </footer>
</template>
