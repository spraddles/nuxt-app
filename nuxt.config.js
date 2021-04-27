export default {

  // Hosting type: https://nuxtjs.org/docs/2.x/features/deployment-targets
  target: 'static', // This improves performance as well as SEO and better offline support
  //target: 'server',  // default is 'server

  // Global page headers: https://go.nuxtjs.dev/config-head
  // Nuxt uses 'vue-meta' https://vue-meta.nuxtjs.org
  // 2 header types: Global, Local
  // options: <HTML>: htmlAttrs <HEAD>: title, meta, headAttrs <BODY>: bodyAttrs, style, script, noscript
  head: {
    title: 'My Nuxt app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'hid-description', name: 'hid-name', content: 'hid-content' },
      { global_meta_1: 'global-description-1', name: 'global-name-1', content: 'global-content-1' },
      { global_meta_2: 'global-description-2', name: 'global-name-2', content: 'global-content-2' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
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
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/redirect-module'
  ],

  // from 'redirect-module': https://www.npmjs.com/package/@nuxtjs/redirect-module
  redirect: [
    // Redirect options here
    { from: '^/page-that-doesnt-exist', to: '/secret-page', statusCode: 301 }
  ],

  // Middleware: https://nuxtjs.org/docs/2.x/components-glossary/pages-middleware
  // 2 types of middleware: serverMiddleware + middleware (client side)
  router: [
    //middleware: 'custom-redirect'
  ],

  serverMiddleware: [
    // Server-side redirects
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}