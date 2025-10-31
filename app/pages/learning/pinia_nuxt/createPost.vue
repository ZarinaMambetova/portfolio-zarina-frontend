<script setup lang="ts">
import type { Post } from "@/types/interfaces";
definePageMeta({
  title: "Создание записи",
});

const postStore = usePostStore();

onMounted(() => {
  postStore.post = {} as Post;
})

</script>

<template>
  <div>
    <h2 class="title">Практика UseFetch()</h2>
    <NuxtLink :to="{ name: 'learning-pinia_nuxt' }">Назад</NuxtLink>
    <div>
      <h3>Создать запись</h3>
      <div>
        <div>
          <input v-model="postStore.post.title" type="text" placeholder="Название" />
        </div>
        <div>
          <textarea v-model="postStore.post.body" type="text" placeholder="Ваш текст" />
        </div>
        <div>
          <button @click.prevent="postStore.createPost()">Создать</button>
        </div>
      </div>
    </div>
  </div>
</template>
