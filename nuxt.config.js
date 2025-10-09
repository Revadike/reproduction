const siteName = 'Reproduction';
const theme = {
  colors: {
    primary: '#FF0000',
    secondary: '#00FF00',
    tertiary: '#0000FF'
  }
};

const isProduction = process.env.NODE_ENV === 'production';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'dayjs-nuxt',
    'nuxt-vuefire',
    'pinia-plugin-persistedstate/nuxt',
    'vuetify-nuxt-module'
  ],

  ssr: false,

  app: {
    head: {
      htmlAttrs: { lang: 'nl', dir: 'ltr' },
      meta: [
        { charset: 'utf-8' },
        { 'http-equiv': 'X-UA-Compatible', 'content': 'IE=edge' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover, minimum-scale=1, user-scalable=no' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: siteName },
        { name: 'theme-color', content: theme.colors.primary },
        { name: 'msapplication-navbutton-color', content: theme.colors.primary },
        { name: 'apple-mobile-web-app-status-bar-style', content: theme.colors.primary }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  runtimeConfig: {
    public: {
      siteName,
      isProduction,
      theme,
      baseUrl: process.env.BASE_URL
    }
  },

  build: {
    transpile: ['vuetify']
  },

  compatibilityDate: '2025-07-15',

  nitro: {
    firebase: { gen: 2 }
  },

  dayjs: {
    locales: ['nl'],
    plugins: ['timezone'],
    defaultLocale: 'nl',
    defaultTimezone: 'Europe/Brussels'
  },

  eslint: {
    config: {
      stylistic: true
    }
  },

  fonts: {
    families: [
      {
        name: 'Roboto',
        provider: 'google',
        weights: [100, 300, 400, 500, 700],
        styles: ['normal', 'italic'],
        subsets: ['latin', 'latin-ext']
      }
    ]
  },

  piniaPluginPersistedstate: {
    storage: 'localStorage'
  },

  vuefire: {
    emulators: !isProduction,
    auth: { enabled: true },
    config: {
      appId: process.env.FIREBASE_APP_ID,
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
    }
  },

  vuetify: {
    vuetifyOptions: {
      icons: {
        defaultSet: 'mdi'
      },
      theme: {
        defaultTheme: 'default',
        themes: {
          default: theme
        }
      }
    }
  }
});
