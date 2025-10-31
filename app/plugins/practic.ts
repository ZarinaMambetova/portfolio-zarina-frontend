// Если плагин работает на клиентской части, но нужно назвать: practic.client.ts
// Если нужно , чтобы работало в обоих средах, то нужно назвать: practic.ts
// Если плагин работает на серверной части, но нужно назвать: practic.server.ts
// по умолчанию, в TypeScript, useNuxtApp() возвращает NuxtApp с типом any или unknown в некоторых случаях, если не описать типизацию явно.
// Поэтому я создала отдельно интерфейс для nuxtApp

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('hello', (name: string) => {
    console.log('nuxtApp', name);
  });
});