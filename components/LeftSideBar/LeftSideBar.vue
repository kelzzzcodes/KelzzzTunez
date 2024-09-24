<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()


const handleLogout = () => {
    authStore.clearAuthData()  // Clear auth data using the Pinia action
    router.push('/signin')  // Redirect to the signin route
}

</script>
<template>
    <section class="fixed left-0 h-[calc(100vh-64px)] bg-[#272727] hidden md:flex md:w-[8%] lg:w-[15%] border-r-2 p-2">
        <div class="flex flex-col gap-4">
            <NuxtLink to="/" class="text-white font-bold mt-2">
                <p class="flex lg:hidden">KT</p>
                <p class="hidden lg:flex"> KelzzzTunez</p>

            </NuxtLink>
            <div class=" mt-10 flex flex-col flex-1 gap-4">
                <NuxtLink>Home</NuxtLink>
                <NuxtLink>Favourite</NuxtLink>
            </div>


            <button @click="handleLogout" class="bg-white rounded-md p-2">Log Out</button>
        </div>

    </section>
</template>