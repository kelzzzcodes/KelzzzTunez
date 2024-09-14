<script setup>




</script>

<template>
    <main>
        <section class="flex gap-2 h-[calc(100vh-64px)] bg-[#171717] ">
            <LeftSideBar />
            <div class="flex justify-between gap-2 w-full px-2 py-4">
                <div class="flex flex-1  ">
                    <div class="w-full px-4">
                        <Player />
                        <div class="mt-4">
                            <slot />
                        </div>
                    </div>

                </div>
                <RightSideBar />
            </div>




        </section>



        <Footer />
    </main>
</template>