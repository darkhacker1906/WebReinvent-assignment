export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  imports: {
    dirs: ['stores'], 
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  tailwindcss: {
    // Options
  }
  
})