import { NuxtModule, RuntimeConfig } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["googleFonts"]?: typeof import("@nuxtjs/google-fonts").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["site"]?: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["robots"]?: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/@nuxtjs/robots/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["sitemap"]?: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/@nuxtjs/sitemap/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["ogImage"]?: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-og-image/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["schemaOrg"]?: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-schema-org/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["seoExperiments"]?: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-seo-experiments/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["linkChecker"]?: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-link-checker/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["seo"]?: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["eslint"]?: typeof import("@nuxt/eslint").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["icon"]?: typeof import("nuxt-icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,  modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/google-fonts", Exclude<NuxtConfig["googleFonts"], boolean>] | ["/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["/home/roy/Projects/reproduction/reproduction/node_modules/@nuxtjs/robots/dist/module", Exclude<NuxtConfig["robots"], boolean>] | ["/home/roy/Projects/reproduction/reproduction/node_modules/@nuxtjs/sitemap/dist/module", Exclude<NuxtConfig["sitemap"], boolean>] | ["/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-og-image/dist/module", Exclude<NuxtConfig["ogImage"], boolean>] | ["/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-schema-org/dist/module", Exclude<NuxtConfig["schemaOrg"], boolean>] | ["/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-seo-experiments/dist/module", Exclude<NuxtConfig["seoExperiments"], boolean>] | ["/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-link-checker/dist/module", Exclude<NuxtConfig["linkChecker"], boolean>] | ["@nuxtjs/seo", Exclude<NuxtConfig["seo"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@nuxt/eslint", Exclude<NuxtConfig["eslint"], boolean>] | ["nuxt-icon", Exclude<NuxtConfig["icon"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["googleFonts"]?: typeof import("@nuxtjs/google-fonts").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["site"]?: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["robots"]?: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/@nuxtjs/robots/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["sitemap"]?: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/@nuxtjs/sitemap/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["ogImage"]?: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-og-image/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["schemaOrg"]?: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-schema-org/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["seoExperiments"]?: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-seo-experiments/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["linkChecker"]?: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-link-checker/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["seo"]?: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["eslint"]?: typeof import("@nuxt/eslint").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["icon"]?: typeof import("nuxt-icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,  modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/google-fonts", Exclude<NuxtConfig["googleFonts"], boolean>] | ["/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["/home/roy/Projects/reproduction/reproduction/node_modules/@nuxtjs/robots/dist/module", Exclude<NuxtConfig["robots"], boolean>] | ["/home/roy/Projects/reproduction/reproduction/node_modules/@nuxtjs/sitemap/dist/module", Exclude<NuxtConfig["sitemap"], boolean>] | ["/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-og-image/dist/module", Exclude<NuxtConfig["ogImage"], boolean>] | ["/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-schema-org/dist/module", Exclude<NuxtConfig["schemaOrg"], boolean>] | ["/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-seo-experiments/dist/module", Exclude<NuxtConfig["seoExperiments"], boolean>] | ["/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-link-checker/dist/module", Exclude<NuxtConfig["linkChecker"], boolean>] | ["@nuxtjs/seo", Exclude<NuxtConfig["seo"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@nuxt/eslint", Exclude<NuxtConfig["eslint"], boolean>] | ["nuxt-icon", Exclude<NuxtConfig["icon"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   nitro: {
      envPrefix: string,
   },

   sitemap: {
      isI18nMapped: boolean,

      sitemapName: string,

      isMultiSitemap: boolean,

      excludeAppSources: Array<any>,

      cacheMaxAgeSeconds: number,

      autoLastmod: boolean,

      defaultSitemapsChunkSize: number,

      minify: boolean,

      sortEntries: boolean,

      debug: boolean,

      discoverImages: boolean,

      discoverVideos: boolean,

      sitemapsPathPrefix: string,

      isNuxtContentDocumentDriven: boolean,

      xsl: string,

      xslTips: boolean,

      xslColumns: Array<{

      }>,

      credits: boolean,

      version: string,

      sitemaps: {
         "sitemap.xml": {
            sitemapName: string,

            route: string,

            defaults: any,

            include: Array<any>,

            exclude: Array<string>,

            includeAppSources: boolean,
         },
      },
   },

   "nuxt-site-config": {
      stack: Array<{

      }>,

      version: string,

      debug: boolean,
   },

   "nuxt-robots": {
      version: string,

      usingNuxtContent: boolean,

      debug: boolean,

      credits: boolean,

      groups: Array<{

      }>,

      sitemap: Array<string>,

      header: boolean,

      robotsEnabledValue: string,

      robotsDisabledValue: string,

      cacheControl: string,
   },

   "nuxt-simple-robots": {
      version: string,

      usingNuxtContent: boolean,

      debug: boolean,

      credits: boolean,

      groups: Array<{

      }>,

      sitemap: Array<string>,

      header: boolean,

      robotsEnabledValue: string,

      robotsDisabledValue: string,

      cacheControl: string,
   },

   "nuxt-og-image": {
      version: string,

      satoriOptions: any,

      resvgOptions: any,

      sharpOptions: any,

      publicStoragePath: string,

      defaults: {
         emojis: string,

         renderer: string,

         component: string,

         extension: string,

         width: number,

         height: number,

         cacheMaxAgeSeconds: number,
      },

      debug: boolean,

      baseCacheKey: string,

      fonts: Array<{

      }>,

      hasNuxtIcon: boolean,

      colorPreference: string,

      isNuxtContentDocumentDriven: boolean,
   },
  }
  interface PublicRuntimeConfig {
   "nuxt-schema-org": {
      reactive: boolean,

      minify: boolean,

      scriptAttributes: {
         id: string,
      },

      identity: any,

      version: string,
   },

   "nuxt-link-checker": {
      version: string,

      hasSitemapModule: boolean,

      rootDir: string,

      isNuxtContentDocumentDriven: boolean,

      excludeLinks: Array<any>,

      skipInspections: Array<any>,

      fetchTimeout: number,

      showLiveInspections: boolean,

      fetchRemoteUrls: boolean,
   },

   "nuxt-seo": {
      canonicalQueryWhitelist: Array<string>,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }