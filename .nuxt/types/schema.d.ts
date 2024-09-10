import { NuxtModule, RuntimeConfig } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `@nuxtjs/google-fonts`
     */
    ["googleFonts"]: typeof import("@nuxtjs/google-fonts").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-site-config/dist/module`
     */
    ["site"]: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/home/roy/Projects/reproduction/reproduction/node_modules/@nuxtjs/robots/dist/module`
     */
    ["robots"]: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/@nuxtjs/robots/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/home/roy/Projects/reproduction/reproduction/node_modules/@nuxtjs/sitemap/dist/module`
     */
    ["sitemap"]: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/@nuxtjs/sitemap/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-og-image/dist/module`
     */
    ["ogImage"]: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-og-image/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-schema-org/dist/module`
     */
    ["schemaOrg"]: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-schema-org/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-seo-experiments/dist/module`
     */
    ["seoExperiments"]: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-seo-experiments/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-link-checker/dist/module`
     */
    ["linkChecker"]: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-link-checker/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/seo`
     */
    ["seo"]: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     */
    ["tailwindcss"]: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/eslint`
     */
    ["eslint"]: typeof import("@nuxt/eslint").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-icon`
     */
    ["icon"]: typeof import("nuxt-icon").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     */
    ["vueuse"]: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@nuxtjs/google-fonts`
     */
    ["googleFonts"]?: typeof import("@nuxtjs/google-fonts").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-site-config/dist/module`
     */
    ["site"]?: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/home/roy/Projects/reproduction/reproduction/node_modules/@nuxtjs/robots/dist/module`
     */
    ["robots"]?: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/@nuxtjs/robots/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/home/roy/Projects/reproduction/reproduction/node_modules/@nuxtjs/sitemap/dist/module`
     */
    ["sitemap"]?: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/@nuxtjs/sitemap/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-og-image/dist/module`
     */
    ["ogImage"]?: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-og-image/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-schema-org/dist/module`
     */
    ["schemaOrg"]?: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-schema-org/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-seo-experiments/dist/module`
     */
    ["seoExperiments"]?: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-seo-experiments/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-link-checker/dist/module`
     */
    ["linkChecker"]?: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-link-checker/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/seo`
     */
    ["seo"]?: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     */
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/eslint`
     */
    ["eslint"]?: typeof import("@nuxt/eslint").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-icon`
     */
    ["icon"]?: typeof import("nuxt-icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     */
    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/google-fonts", Exclude<NuxtConfig["googleFonts"], boolean>] | ["/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["/home/roy/Projects/reproduction/reproduction/node_modules/@nuxtjs/robots/dist/module", Exclude<NuxtConfig["robots"], boolean>] | ["/home/roy/Projects/reproduction/reproduction/node_modules/@nuxtjs/sitemap/dist/module", Exclude<NuxtConfig["sitemap"], boolean>] | ["/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-og-image/dist/module", Exclude<NuxtConfig["ogImage"], boolean>] | ["/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-schema-org/dist/module", Exclude<NuxtConfig["schemaOrg"], boolean>] | ["/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-seo-experiments/dist/module", Exclude<NuxtConfig["seoExperiments"], boolean>] | ["/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-link-checker/dist/module", Exclude<NuxtConfig["linkChecker"], boolean>] | ["@nuxtjs/seo", Exclude<NuxtConfig["seo"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@nuxt/eslint", Exclude<NuxtConfig["eslint"], boolean>] | ["nuxt-icon", Exclude<NuxtConfig["icon"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `@nuxtjs/google-fonts`
     * @see https://www.npmjs.com/package/@nuxtjs/google-fonts
     */
    ["googleFonts"]: typeof import("@nuxtjs/google-fonts").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-site-config/dist/module`
     * @see https://www.npmjs.com/package//home/roy/Projects/reproduction/reproduction/node_modules/nuxt-site-config/dist/module
     */
    ["site"]: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/home/roy/Projects/reproduction/reproduction/node_modules/@nuxtjs/robots/dist/module`
     * @see https://www.npmjs.com/package//home/roy/Projects/reproduction/reproduction/node_modules/@nuxtjs/robots/dist/module
     */
    ["robots"]: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/@nuxtjs/robots/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/home/roy/Projects/reproduction/reproduction/node_modules/@nuxtjs/sitemap/dist/module`
     * @see https://www.npmjs.com/package//home/roy/Projects/reproduction/reproduction/node_modules/@nuxtjs/sitemap/dist/module
     */
    ["sitemap"]: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/@nuxtjs/sitemap/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-og-image/dist/module`
     * @see https://www.npmjs.com/package//home/roy/Projects/reproduction/reproduction/node_modules/nuxt-og-image/dist/module
     */
    ["ogImage"]: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-og-image/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-schema-org/dist/module`
     * @see https://www.npmjs.com/package//home/roy/Projects/reproduction/reproduction/node_modules/nuxt-schema-org/dist/module
     */
    ["schemaOrg"]: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-schema-org/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-seo-experiments/dist/module`
     * @see https://www.npmjs.com/package//home/roy/Projects/reproduction/reproduction/node_modules/nuxt-seo-experiments/dist/module
     */
    ["seoExperiments"]: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-seo-experiments/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-link-checker/dist/module`
     * @see https://www.npmjs.com/package//home/roy/Projects/reproduction/reproduction/node_modules/nuxt-link-checker/dist/module
     */
    ["linkChecker"]: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-link-checker/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/seo`
     * @see https://www.npmjs.com/package/@nuxtjs/seo
     */
    ["seo"]: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     * @see https://www.npmjs.com/package/@nuxtjs/tailwindcss
     */
    ["tailwindcss"]: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/eslint`
     * @see https://www.npmjs.com/package/@nuxt/eslint
     */
    ["eslint"]: typeof import("@nuxt/eslint").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-icon`
     * @see https://www.npmjs.com/package/nuxt-icon
     */
    ["icon"]: typeof import("nuxt-icon").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     * @see https://www.npmjs.com/package/@vueuse/nuxt
     */
    ["vueuse"]: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@nuxtjs/google-fonts`
     * @see https://www.npmjs.com/package/@nuxtjs/google-fonts
     */
    ["googleFonts"]?: typeof import("@nuxtjs/google-fonts").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-site-config/dist/module`
     * @see https://www.npmjs.com/package//home/roy/Projects/reproduction/reproduction/node_modules/nuxt-site-config/dist/module
     */
    ["site"]?: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/home/roy/Projects/reproduction/reproduction/node_modules/@nuxtjs/robots/dist/module`
     * @see https://www.npmjs.com/package//home/roy/Projects/reproduction/reproduction/node_modules/@nuxtjs/robots/dist/module
     */
    ["robots"]?: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/@nuxtjs/robots/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/home/roy/Projects/reproduction/reproduction/node_modules/@nuxtjs/sitemap/dist/module`
     * @see https://www.npmjs.com/package//home/roy/Projects/reproduction/reproduction/node_modules/@nuxtjs/sitemap/dist/module
     */
    ["sitemap"]?: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/@nuxtjs/sitemap/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-og-image/dist/module`
     * @see https://www.npmjs.com/package//home/roy/Projects/reproduction/reproduction/node_modules/nuxt-og-image/dist/module
     */
    ["ogImage"]?: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-og-image/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-schema-org/dist/module`
     * @see https://www.npmjs.com/package//home/roy/Projects/reproduction/reproduction/node_modules/nuxt-schema-org/dist/module
     */
    ["schemaOrg"]?: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-schema-org/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-seo-experiments/dist/module`
     * @see https://www.npmjs.com/package//home/roy/Projects/reproduction/reproduction/node_modules/nuxt-seo-experiments/dist/module
     */
    ["seoExperiments"]?: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-seo-experiments/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-link-checker/dist/module`
     * @see https://www.npmjs.com/package//home/roy/Projects/reproduction/reproduction/node_modules/nuxt-link-checker/dist/module
     */
    ["linkChecker"]?: typeof import("/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-link-checker/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/seo`
     * @see https://www.npmjs.com/package/@nuxtjs/seo
     */
    ["seo"]?: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     * @see https://www.npmjs.com/package/@nuxtjs/tailwindcss
     */
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/eslint`
     * @see https://www.npmjs.com/package/@nuxt/eslint
     */
    ["eslint"]?: typeof import("@nuxt/eslint").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-icon`
     * @see https://www.npmjs.com/package/nuxt-icon
     */
    ["icon"]?: typeof import("nuxt-icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     * @see https://www.npmjs.com/package/@vueuse/nuxt
     */
    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/google-fonts", Exclude<NuxtConfig["googleFonts"], boolean>] | ["/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["/home/roy/Projects/reproduction/reproduction/node_modules/@nuxtjs/robots/dist/module", Exclude<NuxtConfig["robots"], boolean>] | ["/home/roy/Projects/reproduction/reproduction/node_modules/@nuxtjs/sitemap/dist/module", Exclude<NuxtConfig["sitemap"], boolean>] | ["/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-og-image/dist/module", Exclude<NuxtConfig["ogImage"], boolean>] | ["/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-schema-org/dist/module", Exclude<NuxtConfig["schemaOrg"], boolean>] | ["/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-seo-experiments/dist/module", Exclude<NuxtConfig["seoExperiments"], boolean>] | ["/home/roy/Projects/reproduction/reproduction/node_modules/nuxt-link-checker/dist/module", Exclude<NuxtConfig["linkChecker"], boolean>] | ["@nuxtjs/seo", Exclude<NuxtConfig["seo"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@nuxt/eslint", Exclude<NuxtConfig["eslint"], boolean>] | ["nuxt-icon", Exclude<NuxtConfig["icon"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
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