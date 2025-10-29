<script setup lang="ts">
import type { Post } from "@/types/interfaces";

definePageMeta({
  title: "Редактирование записи",
});

const { getPost, updatePost } = usePost();
const { data: postsData } = await getPost();
</script>

<template>
  <div>
    <h2 class="title">Практика UseFetch()</h2>
    <NuxtLink :to="{ name: 'learning-useFetchPractic' }">Назад</NuxtLink>
    <div>
      <h3>Редактирование записи</h3>
      <div v-if="postsData">
        <div>
          <input v-model="postsData.title" type="text" placeholder="Название" />
        </div>
        <div>
          <textarea
            v-model="postsData.body"
            type="text"
            placeholder="Ваш текст"
          />
        </div>
        <div>
          <button @click.prevent="updatePost(postsData)">Сохранить</button>
        </div>
      </div>
      <div v-else>Запись не выбрана.</div>
    </div>
  </div>
</template>
