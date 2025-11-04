<script setup>
import { ref } from "vue";
const skills = ref([{
  path: '/svg/vue.svg',
  name: 'VUEJS'
},
{
  path: '/svg/nuxt.svg',
  name: 'NuxtJS'
},
{
  path: '/svg/pinia.svg',
  name: 'Pinia'
},
{
  path: '/svg/vitejs.svg',
  name: 'ViteJS'
},
{
  path: '/svg/js.svg',
  name: 'JS'
},
{
  path: '/svg/html5.svg',
  name: 'HTML5'
},

{
  path: '/svg/css.svg',
  name: 'CSS3'
},
{
  path: '/svg/sass.svg',
  name: 'SASS'
},

{
  path: '/svg/typescript.svg',
  name: 'Typescript'
},

{
  path: '/svg/figma.svg',
  name: 'Figma'
},
{
  path: '/svg/github.svg',
  name: 'Github'
},

{
  path: '/svg/gitlab.svg',
  name: 'Gitlab'
},
{
  path: '/svg/jest.svg',
  name: 'Jest'
},
{
  path: '/svg/npm.svg',
  name: 'npm'
},
{
  path: '/svg/vscode.svg',
  name: 'VSCode'
},
{
  path: '/svg/jquery.svg',
  name: 'JQuery'
},
{
  path: '/svg/json.svg',
  name: 'JSON'
},
{
  path: '/svg/postman.svg',
  name: 'Postman'
},
{
  path: '/svg/gulp.svg',
  name: 'Gulp'
},

])
</script>

<template>
  <div>
      <ul class="skills__list">
    <li class="skills__item" v-for="skill, index in skills" :key="index">
        <img :src="skill.path" alt="skill.name" class="skills__image">
        <div class="skills__label">
            {{skill.name}}
        </div>
    </li>
  </ul>

  </div>

</template>

<style lang="scss" scoped>
@use '@/assets/css/variables' as v;

.skills {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

   &__item { 
    width: 100px;
    text-align: center;
    margin: 10px 20px 20px 0;
  }

  &__image {
    width: 64px;
    height: 64px;
    padding: 8px;
    background: v.$bg-color;
    transition: 100ms ease-out;
  }

  &__label {
    font-size: 14px;
    color: v.$text-color;
    border-radius: 8px;
    font-weight: 600;
    max-width: 100px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>