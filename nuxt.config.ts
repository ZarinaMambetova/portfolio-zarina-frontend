// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.scss'],
  
  modules: ['@pinia/nuxt'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },

      /*
      ** Headers of the page
      */
    head: {
      title: 'Portfolio. Mambetova Zarina',
      htmlAttrs: {
        lang: 'ru',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Сайт-портфолио frontend-разработчика Мамбетовой Зарины' }
      ],
      link: [
        {
          rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'
        },

      ]
    }
  },
})
