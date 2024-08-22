// Generated by nuxt-seo-experiments.assets

declare module '#app' {
  import { HeadEntry, HeadTag } from '@unhead/schema'

  interface RuntimeNuxtHooks {
    'head:tags': (tag: HeadTag[]) => Promise<void> | void
    'head:entries': (entries: HeadEntry[]) => Promise<void> | void
  }
}
declare module '@unhead/schema' {

  type PublicFiles = '/favicon.ico' | (string & Record<never, never>)
  type JsFiles = (string & Record<never, never>)

  interface SchemaAugmentations {
    link: import('@unhead/schema').UserTagConfigWithoutInnerContent & {
      href: PublicFiles
    }
    script: import('@unhead/schema').TagUserProperties & {
      src: JsFiles
    }
  }
}
export {}
