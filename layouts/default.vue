<script setup>
</script>

<template>
    <main class="relative min-h-screen bg-[#171717] flex flex-col">
        <!-- Content area, containing the sidebar and main section -->
        <div class="flex flex-1">
            <!-- Left Sidebar -->
            <div class="hidden md:flex bg-[#171717] h-[calc(100vh-64px)] md:w-[8%] lg:w-[15%]">
                <LeftSideBar />

            </div>
            <Player />

            <!-- Main content area (Player and slot) -->
            <section class="flex-1 px-4 py-4 flex flex-col">

                <!-- Slot content below Player -->
                <div class=" mt-64 md:mt-80 bg-stone-500/50 flex-grow ">
                    <slot />
                </div>
            </section>
        </div>

        <!-- Footer always at the bottom -->
        <footer class="w-full bg-black text-white py-4 mt-auto">
            <Footer />
        </footer>
    </main>
</template>
