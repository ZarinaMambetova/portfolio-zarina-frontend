<script setup>
const contactList = [
  {
    title: "имя",
    address: "",
    name: "Зарина Мамбетова",
    isLink: false,
  },
  {
    title: "Место жительства",
    address: "",
    name: "Москва",
    isLink: false,
  },
      {
    title: "Гражданство",
    address: "",
    name: "Россия",
    isLink: false,
  },
    {
    title: "Статус",
    address: "",
    name: "Ищу работу",
    isLink: false,
  },
  {
    title: "Опыт работы в IT",
    address: "",
    name: "6 лет",
    isLink: false,
  },
  {
    title: "Опыт работы на VueJs",
    address: "",
    name: "3 года",
    isLink: false,
  },
  {
    title: "Навыки",
    address: "",
    name: ['VueJS', 'Pinia', 'JS', 'NuxtJS', 'HTML5', 'SASS', 'Git', 'Storybook', 'TS'],
    isLink: false,
  },
];
</script>

<template>
  <shared-code-window :codeList="contactList" name="frontend"/>
</template>

<style lang="scss">

</style>
