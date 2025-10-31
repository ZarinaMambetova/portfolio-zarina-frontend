<script setup lang="ts">
// В скрипте js не нужно было бы импортировать, но в ts надо
import getNumber from '~/utils/getNumber';


definePageMeta({
  title: "Pinia&Composition Api",
});

const postCompositionStore = usePostCompositionStore();

await postCompositionStore.getPosts();


// ПРИМЕРЫ вывода данных из utils, plugins:
const { $hello, $getAsyncPosts } = useNuxtApp();
$hello('Zarina');

// выводим из созданного плагина для axios:
const {data: postsAsyncData} = $getAsyncPosts();
// получаем массив:
console.log('postsAsyncData', postsAsyncData.value);
// получаем все функции от useFetch для работы с данными:
const res = $getAsyncPosts();
console.log('postsAsyncData res', res);
//  выводим функцию из utils:
console.log(getNumber());
</script>

<template>
  <div>
    <h2 class="title">Практика UseFetch()</h2>
    <NuxtLink to="/">Главная</NuxtLink><br></br>

    <NuxtLink :to="{ name: 'learning-pinia_composition-createPost' }"
      >Создать запись</NuxtLink
    >

      <div v-for="post in postCompositionStore.posts" :key="post.id">
      <h3> 
        <NuxtLink
          :to="{ name: 'learning-pinia_composition-id', params: { id: post.id }, query: { title: post.title } }"
          >{{ post.title }}</NuxtLink
        >
      </h3>
      <p>{{ post.body }}</p>
      <NuxtLink :to="{ name: 'learning-pinia_composition-id-edit', params: { id: post.id } }"
      >Редактировать</NuxtLink
    >
    <div>
      <button @click.prevent="postCompositionStore.deletePost(post)">Удалить</button>
    </div>
    </div>


  </div>
</template>

<style scoped lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
