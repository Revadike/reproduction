// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type InjectionType<A extends Plugin> = A extends {default: Plugin<infer T>} ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/revive-payload.client.js")> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/head/runtime/plugins/unhead.js")> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/pages/runtime/plugins/router.js")> &
  InjectionType<typeof import("../../node_modules/nuxt-site-config/dist/runtime/nuxt/plugins/0.siteConfig.js")> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/navigation-repaint.client.js")> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/check-outdated-build.client.js")> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/revive-payload.server.js")> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/chunk-reload.client.js")> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/pages/runtime/plugins/prefetch.client.js")> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/pages/runtime/plugins/check-if-page-unused.js")> &
  InjectionType<typeof import("../../node_modules/@nuxt/devtools/dist/runtime/plugins/devtools.server.js")> &
  InjectionType<typeof import("../../node_modules/@nuxt/devtools/dist/runtime/plugins/devtools.client.js")> &
  InjectionType<typeof import("../../node_modules/@nuxtjs/seo/dist/runtime/nuxt/plugin/titles.js")> &
  InjectionType<typeof import("../../node_modules/nuxt-link-checker/dist/runtime/nuxt/plugin/ui.client.js")> &
  InjectionType<typeof import("../../node_modules/nuxt-seo-experiments/dist/runtime/nuxt/plugins/siteConfig.js")> &
  InjectionType<typeof import("../../node_modules/nuxt-seo-experiments/dist/runtime/nuxt/plugins/inferSeoMetaPlugin.js")> &
  InjectionType<typeof import("../../node_modules/nuxt-schema-org/dist/runtime/nuxt/plugin/defaults.js")> &
  InjectionType<typeof import("../../node_modules/nuxt-schema-org/dist/runtime/nuxt/plugin/init.js")> &
  InjectionType<typeof import("../../node_modules/nuxt-og-image/dist/runtime/nuxt/plugins/og-image-canonical-urls.server.js")> &
  InjectionType<typeof import("../../node_modules/nuxt-og-image/dist/runtime/nuxt/plugins/route-rule-og-image.server.js")> &
  InjectionType<typeof import("../../node_modules/@nuxtjs/robots/dist/runtime/nuxt/plugins/robot-meta.server.js")> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/dev-server-logs.js")> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/check-if-layout-used.js")> &
  InjectionType<typeof import("../../node_modules/nuxt-seo-experiments/dist/runtime/nuxt/plugins/1.absoluteImageUrls.server.js")> &
  InjectionType<typeof import("../../node_modules/nuxt-seo-experiments/dist/runtime/nuxt/plugins/0.routeRules.server.js")> &
  InjectionType<typeof import("../../node_modules/@nuxtjs/seo/dist/runtime/nuxt/plugin/defaults.js")>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }

  interface NuxtAppLiterals {
    pluginName: 'nuxt:revive-payload:client' | 'nuxt:head' | 'nuxt:router' | 'nuxt-site-config:init' | 'nuxt:revive-payload:server' | 'nuxt:chunk-reload' | 'nuxt:global-components' | 'nuxt:prefetch' | 'nuxt:checkIfPageUnused' | 'nuxt-seo:fallback-titles' | 'nuxt-schema-org:defaults' | 'nuxt-schema-org:init' | 'nuxt:checkIfLayoutUsed' | 'nuxt-seo:defaults'
  }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }
