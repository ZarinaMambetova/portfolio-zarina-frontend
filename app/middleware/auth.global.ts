// global  в названии, чтобы правило работало на всем сайте
// Если нет, то можно добавить функционал к определенным страницам, прописав в скрипте:
// definePageMeta({
//   middleware: 'auth',
// });

import type { RouteLocation } from 'vue-router';

export default defineNuxtRouteMiddleware((to: RouteLocation, from: RouteLocation) => {
  const isAuth: boolean = true;

  if (!isAuth && to.fullPath !== '/') {
    return navigateTo('/');
  }
});