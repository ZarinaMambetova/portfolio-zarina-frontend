<script setup lang="ts">
import { useRoute } from "nuxt/app";
definePageMeta({
  title: "Редактирование записи",
});
const route = useRoute();

const postStore = usePostStore();
await postStore.getPost(route);
</script>

<template>
  <div>
    <h2 class="title">Практика UseFetch()</h2>
    <NuxtLink :to="{ name: 'learning-pinia_nuxt' }">Назад</NuxtLink>
    <div>
      <h3>Редактирование записи</h3>
      <div v-if="postStore.post">
        <div>
          <input v-model="postStore.post.title" type="text" placeholder="Название" />
        </div>
        <div>
          <textarea
            v-model="postStore.post.body"
            type="text"
            placeholder="Ваш текст"
          />
        </div>
        <div>
          <button @click.prevent="postStore.updatePost()">Сохранить</button>
        </div>
      </div>
      <div v-else>Запись не выбрана.</div>
    </div>
  </div>
</template>
