// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon'
  ],

  icon: {
    // Bundle icons for static generation (GitHub Pages)
    clientBundle: {
      scan: true,
      sizeLimitKb: 256
    }
  },

  css: [
    '~/assets/css/main.css'
  ],

  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/offer-guide/' : '/',
    head: {
      title: 'BuyGoods Vendor Offer Guide',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Complete Sales Funnel Structure Guide' }
      ],
      link: []
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },

  typescript: {
    strict: false,
    typeCheck: false
  },

  ssr: false,

  nitro: {
    preset: 'static'
  }
})
