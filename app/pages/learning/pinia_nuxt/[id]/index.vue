<script setup lang="ts">
import { useHead, useRoute } from "nuxt/app";
const route = useRoute();

const postStore = usePostStore();

await postStore.getPost(route);

watchEffect(() => {
  const queryTitle = route.query.title as string | undefined;
  useHead({
    titleTemplate: () => {
      return queryTitle ? `${queryTitle}` : "Portfolio. Mambetova Zarina";
    },
  });
});
</script>

<template>
  <div>
    <h2 class="title">Практика UseFetch()</h2>
    <NuxtLink :to="{ name: 'learning-pinia_nuxt' }">Назад</NuxtLink>
    <div>
      <div v-if="postStore.post">
        <h3>{{ postStore.post.title }}</h3>
        <p>
          {{ postStore.post.body }}
        </p>
      </div>
      <div v-else>Загрузка...</div>
    </div>
  </div>
</template>
