<script setup lang="ts">
import type { NavItem } from '~/types/interfaces';

const headerLinks: NavItem[] = [{
  path: 'home',
  name: 'Главная'
},
{
  path: 'about',
  name: 'Обо мне'
},
{
  path: 'skills',
  name: 'Мои навыки'
},
{
  path: 'career',
  name: 'Моя карьера'
},

{
  path: 'projects',
  name: 'Мои проекты'
},
{
  path: 'contact',
  name: 'Мои контакты'
},
]
</script>

<template>
    <ul class="navigation__list">

      <li class="navigation__item"
      v-for="link, index in headerLinks" :key="index">
        <NuxtLink 
        class="navigation__link"
          :to="`#${link.path}`">{{link.name}}
        </NuxtLink>

      </li>
  </ul>
</template>

<style lang="scss" scoped>
.navigation {
  &__list {
    display: flex;
    
  }

  &__link {
    padding: 0 1em;
    font-weight: 500;
  }
}
</style>