// plugins/pinia-plugin-persistedstate.client.ts
import { defineNuxtPlugin } from '#app'
import piniaPersistedState from 'pinia-plugin-persistedstate'
import { Pinia } from 'pinia'

export default defineNuxtPlugin((nuxtApp) => {
  const pinia = nuxtApp.$pinia as Pinia // Explicitly cast to Pinia type
  pinia.use(piniaPersistedState)
})
