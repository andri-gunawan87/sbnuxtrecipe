export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Resep',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Niconne&amp;display=swap"}
    ],
    script: [
      { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" },
      { src: '/js/resep.js', body: true },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/styles.css',
    '~/assets/css/fontello.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  axios: {
    baseURL: 'https://masak-apa.tomorisakura.vercel.app',
    proxyHeaders: false,
    credentials: false
  },

  pwa: {
    meta: 'Resep Nusantara',
    author: 'Andri Gunawan'
  },

  manifest: {
    name: 'Resep Nusantara',
    short_name: 'Resep',
    lang: 'en'
  }
}
