<script setup>
definePageMeta({
  middleware: 'auth', // Specify the middleware to protect this page
})
</script>

<template>
  <section>
    <h1 class="h-[1800px]">Welcome to KelzzzTunes</h1>

    <div>
      <h2>New Release</h2>
      <div>
        <img alt="imagenewrelease" />
      </div>
    </div>
  </section>
</template>
