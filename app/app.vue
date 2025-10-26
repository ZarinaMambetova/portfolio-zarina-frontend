<script setup lang="ts">
import { useRoute } from "vue-router";

// получаем текущий маршрут
const route = useRoute();

// следим за изменением route
watchEffect(() => {
  const metaTitle = route.meta?.title as string | undefined;
  useHead({
    titleTemplate: () => {
      return metaTitle
        ? `${metaTitle} - Portfolio. Mambetova Zarina`
        : "Portfolio. Mambetova Zarina";
    },
  });
});
</script>
<template>
  <div>
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style></style>
