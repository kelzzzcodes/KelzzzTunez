<script setup>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

</script>
<template>
    <section class="h-[250px] md:h-[300px] fixed w-[95%] md:w-[55%] top-4 flex flex-col gap-2 ">
        <div class="text-white flex justify-between items-center md:hidden">

            <NuxtLink to="/">KelzzzTunez</NuxtLink>
            <font-awesome-icon :icon="['fas', 'bars']" size="2x" />
        </div>

        <div class="flex items-center justify-center text-center h-full bg-stone-300 rounded-xl w-full ">
            <font-awesome-icon :icon="['fas', 'music']" size="4x" />




        </div>

    </section>
</template>