<script setup lang="ts">
import type { NavItem } from '~/types/interfaces';

const headerLinks: NavItem[] = [{
  path: '/',
  name: 'Главная'
},
{
  path: '/about',
  name: 'Обо мне'
},
{
  path: '/education',
  name: 'Образование'
},
{
  path: '/skills',
  name: 'Навыки'
},
{
  path: '/learning',
  name: 'Практика'
},
{
  path: '/contact',
  name: 'Контакты'
},
]
</script>

<template>
    <ul class="navigation__list">

      <li class="navigation__item"
      v-for="link, index in headerLinks" :key="index">
        <NuxtLink 
        class="navigation__link"
          :to="link.path">{{link.name}}
        </NuxtLink>

      </li>
  </ul>
</template>

<style lang="scss" scoped>
@import '@/assets/css/variables';

.navigation {
  &__list {
    display: flex;
  }

  &__link {
    padding: 0 15px;
  }
}
</style>