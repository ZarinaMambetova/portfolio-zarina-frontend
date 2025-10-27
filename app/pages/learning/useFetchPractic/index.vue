<script setup lang="ts">
import type { Post } from "@/types/interfaces";

definePageMeta({
  title: "useFetch Practic",
});

const { data: postsData } = await useFetch<Post[]>(
  "https://jsonplaceholder.typicode.com/posts?_limit=5"
);
</script>

<template>
  <div>
    <h2 class="title">Практика UseFetch()</h2>
    <NuxtLink to="/">Главная</NuxtLink>
<br></br>
    <NuxtLink :to="{ name: 'learning-useFetchPractic-createPost' }"
      >Создать запись</NuxtLink
    >

    <div v-for="post in postsData" :key="post.id">
      <h3>
        <NuxtLink
          :to="{ name: 'learning-useFetchPractic-id', params: { id: post.id }, query: { title: post.title } }"
          >{{ post.title }}</NuxtLink
        >
      </h3>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>
