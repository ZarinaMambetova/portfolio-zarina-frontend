<script setup lang="ts">
import type { Post } from "@/types/interfaces";

definePageMeta({
  title: "useFetch Practic",
});

// С useFetch страница получает данные в момент рендеринга (происходит Suspense). Но useLazyFetch не так. Они выгружаются, когда пришел ответ
// Поэтому при полной отрисовки страницы данных нет, они появляются позже
const { data: postsData, refresh: refreshData, pending: pendingData, } = await useLazyFetch<Post[]>(
  "http://localhost:3001/posts"

);

const deletePost = async (post: { id: string; }) => {
    const res = await $fetch(
    `http://localhost:3001/posts/${post.id}`,
    {
      method: "DELETE",
    }
    );

  await refreshData();

  console.log(res, "DELETE");
}
</script>

<template>
  <div>
    <h2 class="title">Практика UseFetch()</h2>
    <NuxtLink to="/">Главная</NuxtLink>
    <NuxtLink :to="{ name: 'learning-useFetchPractic' }">Назад</NuxtLink>
<br></br><br></br>

    <NuxtLink :to="{ name: 'learning-useFetchPractic-createPost' }"
      >Создать запись</NuxtLink
    >

    <div v-if="pendingData">Загрузка... </div>
    <div v-else v-for="post in postsData" :key="post.id">
      <h3>
        <NuxtLink
          :to="{ name: 'learning-useFetchPractic-id', params: { id: post.id }, query: { title: post.title } }"
          >{{ post.title }}</NuxtLink
        >
      </h3>
      <p>{{ post.body }}</p>
      <NuxtLink :to="{ name: 'learning-useFetchPractic-id-edit', params: { id: post.id } }"
      >Редактировать</NuxtLink
    >
    <div>
      <button @click.prevent="deletePost(post)">Удалить</button>
    </div>
    </div>
  </div>
</template>
