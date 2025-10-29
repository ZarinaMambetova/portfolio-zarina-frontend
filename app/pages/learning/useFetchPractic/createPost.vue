<script setup lang="ts">
definePageMeta({
  title: "Создание записи",
});

const { storePost } = usePost();
const post = reactive({
  title: "",
  body: "",
});
</script>

<template>
  <div>
    <h2 class="title">Практика UseFetch()</h2>
    <NuxtLink :to="{ name: 'learning-useFetchPractic' }">Назад</NuxtLink>
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
          <a @click.prevent="storePost(post)" href="#">Создать</a>
        </div>
      </div>
    </div>
  </div>
</template>
