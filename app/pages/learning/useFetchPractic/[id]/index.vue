<script setup lang="ts">
import { useHead, useRoute } from "nuxt/app";

const route = useRoute();

const { getPost } = usePost();

const { data: postData } = await getPost();

// Без хранилища:
// const { data: postsData } = await useFetch<Post>(
//   `http://localhost:3001/posts/${route.params.id}`
// );

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
    <NuxtLink :to="{ name: 'learning-useFetchPractic' }">Назад</NuxtLink>
    <div>
      <div v-if="postData">
        <h3>{{ postData.title }}</h3>
        <p>
          {{ postData.body }}
        </p>
      </div>
      <div v-else>Загрузка...</div>
    </div>
  </div>
</template>
