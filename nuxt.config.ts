export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  imports: {
    dirs: ['stores'], 
  },
  modules: ['@pinia/nuxt']
})