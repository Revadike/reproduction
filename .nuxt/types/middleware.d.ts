import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "anonymous" | "authenticated"
declare module 'nuxt/app' {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}