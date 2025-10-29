<script setup lang="ts">
import type { Post } from "@/types/interfaces";

definePageMeta({
  title: "useFetch Practic",
});

const { getPosts, deletePost } = usePost();

const posts = await getPosts();

</script>

<template>
  <div>
    <h2 class="title">Практика UseFetch()</h2>
    <NuxtLink to="/">Главная</NuxtLink><br></br>

    <NuxtLink :to="{ name: 'learning-useFetchPractic-createPost' }"
      >Создать запись</NuxtLink
    >

      <div v-for="post in posts" :key="post.id">
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
