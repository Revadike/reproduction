// Generated by nuxt-seo-experiments

declare module 'nitropack' {
  interface NitroRouteRules {
     seoMeta?: import('@unhead/schema').UseSeoMetaInput
     head?: import('@unhead/schema').Head
  }
  interface NitroRouteConfig {
    seoMeta?: import('@unhead/schema').UseSeoMetaInput
    head?: import('@unhead/schema').Head
  }
}

declare module '@nuxt/schema' {
  interface MetaObjectRaw { seoMeta?: import('@unhead/schema').UseSeoMetaInput }
}

declare module 'nuxt/schema' {
  interface MetaObjectRaw { seoMeta?: import('@unhead/schema').UseSeoMetaInput }
}

export {}
