<script setup lang="ts">
definePageMeta({
  title: "Pinia&Nuxt",
});

const postStore = usePostStore();

await postStore.getPosts();

</script>

<template>
  <div>
    <h2 class="title">Практика UseFetch()</h2>
    <NuxtLink to="/">Главная</NuxtLink><br></br>

    <NuxtLink :to="{ name: 'learning-pinia_nuxt-createPost' }"
      >Создать запись</NuxtLink
    >

    <!-- Не работает из typescript. А решение мне пока не нравится
      <button @click.prevent="postStore.executePosts()"> Обновить</button> -->

      <div v-for="post in postStore.posts" :key="post.id">
      <h3> 
        <NuxtLink
          :to="{ name: 'learning-pinia_nuxt-id', params: { id: post.id }, query: { title: post.title } }"
          >{{ post.title }}</NuxtLink
        >
      </h3>
      <p>{{ post.body }}</p>
      <NuxtLink :to="{ name: 'learning-pinia_nuxt-id-edit', params: { id: post.id } }"
      >Редактировать</NuxtLink
    >
    <div>
      <button @click.prevent="postStore.deletePost(post)">Удалить</button>
    </div>
    </div>


  </div>
</template>
