<script setup lang="ts">
import type { Post } from "@/types/interfaces";
import { useHead, useRoute } from "nuxt/app";

const route = useRoute();

const { data: postsData } = await useFetch<Post>(
  `https://jsonplaceholder.typicode.com/posts/${route.params.id}`
);

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
      <div v-if="postsData">
        <h3>{{ postsData.title }}</h3>
        <p>
          {{ postsData.body }}
        </p>
      </div>
      <div v-else>Загрузка...</div>
    </div>
  </div>
</template>
