// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Nuxt-Test',
      meta: [{ name: 'description', content: 'Evering about Nuxt 3'}],
      link: [{
        rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      }]
    }
  }
})
