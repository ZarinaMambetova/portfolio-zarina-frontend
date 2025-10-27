<script setup lang="ts">
definePageMeta({
  title: "Создание записи",
});

const post = reactive({
  title: "",
  body: "",
});
const storePost = async () => {
  const res = await $fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: post,
  });

  console.log(res);
};
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
          <a @click.prevent="storePost" href="#">Создать</a>
        </div>
      </div>
    </div>
  </div>
</template>
