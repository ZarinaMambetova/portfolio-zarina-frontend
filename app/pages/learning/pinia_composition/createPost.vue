<script setup lang="ts">
import type { Post } from "@/types/interfaces";
definePageMeta({
  title: "Создание записи",
});

const post = reactive({
  title: "",
  body: "",
});
const postCompositionStore = usePostCompositionStore();

</script>

<template>
  <div>
    <h2 class="title">Практика UseFetch()</h2>
    <NuxtLink :to="{ name: 'learning-pinia_composition' }">Назад</NuxtLink>
    <div>
      <h3>Создать запись</h3>
      <div>
        <div>
          <input v-model="post.title" type="text" placeholder="Название" />
        </div>
        <div>
          <textarea v-model="post.body" type="text" placeholder="Ваш текст" />
        </div>
        <div>
          <button @click.prevent="postCompositionStore.createPost(post)">Создать</button>
        </div>
      </div>
    </div>
  </div>
</template>
