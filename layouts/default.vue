<script setup>




</script>

<template>
    <main class="flex bg-[#171717] h-auto relative w-full">
        <div class=" h-[calc(100vh-64px)] md:w-[8%] lg:w-[15%]">
            <div class="hidden md:flex">

                <LeftSideBar />

            </div>


            <Footer />
        </div>

        <section class="flex gap-2  bg-[#171717] flex-1 h-full ">

            <div class="flex justify-between gap-2 w-full px-2 py-4 ">
                <div class="w-full md:w-[70%] ">
                    <div class=" md:pl-2 md:pr-6">
                        <Player />
                        <div class=" mt-72 md:mt-80 bg-stone-500/50 ">
                            <slot />
                        </div>
                    </div>

                </div>
                <RightSideBar />
            </div>




        </section>


    </main>
</template>
