// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type IsAny<T> = 0 extends 1 & T ? true : false
type InjectionType<A extends Plugin> = IsAny<A> extends true ? unknown : A extends Plugin<infer T> ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/navigation-repaint.client").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/check-outdated-build.client").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/revive-payload.server").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/revive-payload.client").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/chunk-reload.client").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/head/runtime/plugins/unhead").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/pages/runtime/plugins/router").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/pages/runtime/plugins/prefetch.client").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/pages/runtime/plugins/check-if-page-unused").default> &
  InjectionType<typeof import("../../node_modules/@nuxt/devtools/dist/runtime/plugins/devtools.server").default> &
  InjectionType<typeof import("../../node_modules/@nuxt/devtools/dist/runtime/plugins/devtools.client").default> &
  InjectionType<typeof import("../../node_modules/@nuxtjs/seo/dist/runtime/nuxt/plugin/titles").default> &
  InjectionType<typeof import("../../node_modules/@nuxtjs/seo/dist/runtime/nuxt/plugin/defaults").default> &
  InjectionType<typeof import("../../node_modules/nuxt-link-checker/dist/runtime/nuxt/plugin/ui.client").default> &
  InjectionType<typeof import("../../node_modules/nuxt-seo-experiments/dist/runtime/nuxt/plugins/1.absoluteImageUrls.server").default> &
  InjectionType<typeof import("../../node_modules/nuxt-seo-experiments/dist/runtime/nuxt/plugins/0.routeRules.server").default> &
  InjectionType<typeof import("../../node_modules/nuxt-seo-experiments/dist/runtime/nuxt/plugins/siteConfig").default> &
  InjectionType<typeof import("../../node_modules/nuxt-seo-experiments/dist/runtime/nuxt/plugins/inferSeoMetaPlugin").default> &
  InjectionType<typeof import("../../node_modules/nuxt-schema-org/dist/runtime/nuxt/plugin/defaults").default> &
  InjectionType<typeof import("../../node_modules/nuxt-schema-org/dist/runtime/nuxt/plugin/init").default> &
  InjectionType<typeof import("../../node_modules/nuxt-og-image/dist/runtime/nuxt/plugins/og-image-canonical-urls.server").default> &
  InjectionType<typeof import("../../node_modules/nuxt-og-image/dist/runtime/nuxt/plugins/route-rule-og-image.server").default> &
  InjectionType<typeof import("../../node_modules/@nuxtjs/robots/dist/runtime/nuxt/plugins/robot-meta.server").default> &
  InjectionType<typeof import("../../node_modules/nuxt-site-config/dist/runtime/nuxt/plugins/0.siteConfig").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/dev-server-logs").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/check-if-layout-used").default>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }

  interface NuxtAppLiterals {
    pluginName: 'nuxt:revive-payload:client' | 'nuxt:head' | 'nuxt:router' | 'nuxt-site-config:init' | 'nuxt:revive-payload:server' | 'nuxt:chunk-reload' | 'nuxt:global-components' | 'nuxt:prefetch' | 'nuxt:checkIfPageUnused' | 'nuxt-seo:fallback-titles' | 'nuxt-schema-org:defaults' | 'nuxt:checkIfLayoutUsed' | 'nuxt-schema-org:init' | 'nuxt-seo:defaults'
  }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }
