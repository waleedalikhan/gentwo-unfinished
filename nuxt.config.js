const strapiBaseUri = process.env.API_URL || "https://cms.gentwo.com/";

export default {
  env: {
    strapiBaseUri,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // eslint-disable-next-line quotes
    title: "GenTwo",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0",
      },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "https://kit.fontawesome.com/2def6b71ee.js",
        crossorigin: "anonymous",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/base.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vue-masonry", ssr: false },
    { src: "~plugins/vimeo-player", ssr: false },
    { src: `~plugins/vuelidate` },
    { src: `~plugins/vue-tailwind-modal` },
    // { src: "~/plugins/aos", ssr: false, mode: "client" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      "~/components",
      "~/components/base",
      "~/components/ui",
      "~/components/svg",
      "~/components/home",
      "~/components/about",
      "~/components/solutions",
      "~/components/ecosystem",
      "~/components/pulse",
      "~/components/pulse/news",
      "~/components/pulse/product-spotlights",
      "~/components/pulse/news/press-release",
      "~/components/pulse/news/blog-longform",
    ],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // strapi integration
    "@nuxtjs/strapi",
    "@nuxtjs/dayjs",
  ],
  strapi: {
    url: strapiBaseUri,
    entities: [
      {
        name: "categories",
        type: "collection",
      },
      {
        name: "pages",
        type: "collection",
      },
      {
        name: "pulses",
        type: "collection",
      },
      {
        name: "global",
        type: "single",
      },
    ],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  dayjs: {
    locales: ["en"],
    defaultLocale: "en",
    //defaultTimeZone: 'Asia/Tokyo',
    // plugins: [
    //   'utc', // import 'dayjs/plugin/utc'
    //   'timezone' // import 'dayjs/plugin/timezone'
    // ]
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ["vue-vimeo-player"],
  },

  target: "static", // default is 'server'

  generate: {
    fallback: true,
  },
};
