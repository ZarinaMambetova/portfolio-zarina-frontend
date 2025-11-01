<script setup lang="ts">
import type { Post } from "@/types/interfaces";

definePageMeta({
  title: "useFetch Practic",
});

// При выполнении запроса на обновление использовать refresh. 
// А при выполнении отдельной функции по клику лучше использовать execute
// Если данные не нужно сразу выгружать на страницу, а по клику на кнопку, то добавить к запросу {immediate: false}
// pending - этапы загрузки. Можно ставить на true - лоадер
const { data: postsData, refresh: refreshData, pending: pendingData, error: errorData, status: statusData, execute: executeData } = await useFetch<Post[]>(
  "http://localhost:3001/posts", {key: "posts"}
  // {immediate: false}
);

const deletePost = async (post: Post) => {
    if (!post.id) {
    console.error("Post ID is missing");
    return;
  }
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
    <NuxtLink to="/">Главная</NuxtLink><br></br>
    <NuxtLink to="/learning/useFetchPractic/keyCase">Cache</NuxtLink><br></br>
    <NuxtLink to="/learning/useFetchPractic/useLazyFetch">useLazyFetch</NuxtLink>
<br></br><br></br>

    <button @click.prevent="executeData()">Обновить</button>

<br></br><br></br>
    <NuxtLink :to="{ name: 'learning-useFetchPractic-createPost' }"
      >Создать запись</NuxtLink
    >


<div v-if="pendingData">Загрузка...</div>
<div v-if="errorData">Произошла ошибка загрузки. Пожалуйста, повторите позже.</div>
<div v-if="statusData === 'success'">
      <div v-for="post in postsData">
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

  </div>
</template>
