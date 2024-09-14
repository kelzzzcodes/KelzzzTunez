// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: false },
 css: [
    '@fortawesome/fontawesome-svg-core/styles.css', // Import FontAwesome styles
    '~/assets/css/main.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

   modules: [],

})
