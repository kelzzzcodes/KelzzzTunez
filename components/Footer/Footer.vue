<script setup>


</script>
<template>
    <footer class="bg-[#272727] w-full h-16 border-t-2 flex justify-between  ">
        <div class="py-1 items-center justify-center w-[18%]">
            <ul class="flex gap-4 items-center justify-center text-center h-full text-white">
                <li class=" text-2xl">
                    <font-awesome-icon :icon="['fas', 'shuffle']" />
                </li>
                <li class=" text-2xl">
                    <font-awesome-icon :icon="['fas', 'backward-step']" />
                </li>
                <li class=" text-2xl">
                    <font-awesome-icon :icon="['far', 'circle-pause']" />

                </li>

                <li class=" text-2xl">
                    <font-awesome-icon :icon="['fas', 'forward-step']" />
                </li>
                <li class=" text-2xl">
                    <font-awesome-icon :icon="['fass', 'repeat']" />
                </li>
            </ul>
        </div>
        <div class="py-1 flex flex-1 justify-center gap-14">
            <img src="/images/GODDID.jpeg" alt="GODDID" class=" h-full object-contain" />

            <div class="flex flex-col items-center">
                <p>
                    GOD DID
                    <span>Dj Khaled</span>
                </p>

                <ul class="flex items-center gap-2">
                    <li>
                        1:45
                    </li>
                    <li class="bg-green-400 rounded-2xl h-3 w-[500px]">

                    </li>
                    <li>
                        3:45
                    </li>
                </ul>


            </div>
        </div>
        <div class="border-l-2 py-1 w-[20%] flex justify-center text-white">
            <ul class="flex items-center justify-center text-center  gap-4">
                <li class=" text-2xl">
                    <font-awesome-icon :icon="['fas', 'minus']" />
                </li>
                <li class=" text-2xl">
                    <font-awesome-icon :icon="['fasds', 'volume-high']" />
                </li>
                <li class=" text-2xl">
                    <font-awesome-icon :icon="['fas', 'plus']" />
                </li>
                <li class=" text-2xl">
                    <font-awesome-icon :icon="['far', 'heart']" />
                </li>
                <li class=" text-2xl">
                    <font-awesome-icon :icon="['fas', 'ellipsis']" />
                </li>

            </ul>
        </div>
    </footer>
</template>