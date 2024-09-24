<!-- <script setup>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

</script>
<template>
    <section class="h-[250px] md:h-[300px]  flex flex-col gap-2  ">
        <div class="text-white flex justify-between items-center md:hidden">

            <NuxtLink to="/">KelzzzTunez</NuxtLink>
            <font-awesome-icon :icon="['fas', 'bars']" size="2x" />
        </div>

        <div class="flex items-center justify-center text-center h-full bg-stone-300 rounded-xl w-full ">
            <font-awesome-icon :icon="['fas', 'music']" size="4x" />




        </div>

    </section>
</template> -->

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
    <section
        class="fixed rounded-md  px-4 right-0 h-[250px] md:h-[300px] flex flex-col w-full md:w-[calc(100vw-10%)] lg:w-[calc(100vw-16%)]">
        <!-- Mobile view header -->
        <div class="bg-[#272727] text-white flex justify-between items-center py-4  px-2 md:hidden  ">
            <NuxtLink to="/" class="text-2xl font-bold">KelzzzTunez</NuxtLink>
            <font-awesome-icon :icon="['fas', 'bars']" size="2x" />
        </div>
        <div class="border-2 flex bg-[#272727] items-center text-white">

            <input type="search" class="w-full p-2  text-white bg-[#272727] outline-none" />
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" size="2xl" />
        </div>

        <!-- Main player area -->
        <div class="flex items-center justify-center text-center h-full bg-stone-300  rounded-b-xl w-full">
            <font-awesome-icon :icon="['fas', 'music']" size="4x" />
        </div>
    </section>
</template>
