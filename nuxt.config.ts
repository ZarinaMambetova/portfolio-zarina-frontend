// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  nitro: {
    preset: 'static',
    output: {
      publicDir: 'dist' 
    }
  },


  css: ['~/assets/css/main.scss'],
  
  modules: ['@pinia/nuxt'],

  vite: {
    plugins: [
      // Вставка svg с возможностью менять состояние
      import('vite-svg-loader').then(m => m.default())
    ]
  },

  app: {
    baseURL: '/portfolio-zarina-frontend/',
    buildAssetsDir: '/assets/',
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

  runtimeConfig: {
    public: {
      baseURL: '/portfolio-zarina-frontend/'
    }
  }
})
