<script setup lang="ts">
import { useHead, useRoute } from "nuxt/app";
const route = useRoute();

const postCompositionStore = usePostCompositionStore();

await postCompositionStore.getPost(route);

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
    <NuxtLink :to="{ name: 'learning-pinia_composition' }">Назад</NuxtLink>
    <div>
      <div v-if="postCompositionStore.post">
        <h3>{{ postCompositionStore.post.title }}</h3>
        <p>
          {{ postCompositionStore.post.body }}
        </p>
      </div>
      <div v-else>Загрузка...</div>
    </div>
  </div>
</template>
