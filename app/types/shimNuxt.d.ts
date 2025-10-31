import { NuxtApp } from 'nuxt/app';

declare module 'nuxt/app' {
  interface NuxtApp {
    $hello: (name: string) => void;
    $getAsyncPosts: () => ReturnType<() => ReturnType<typeof useAsyncData>>;
  }
}