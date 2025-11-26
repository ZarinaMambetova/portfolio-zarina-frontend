<script setup>
const contactList = [
  {
    title: "email",
    address: "mailto:zmambetova@yandex.ru",
    name: "zmambetova@yandex.ru",
    isLink: true,
  },
  {
    title: "gitHub",
    address: "https://github.com/ZarinaMambetova",
    name: "github.com/ZarinaMambetova",
    isLink: true,
  },
  {
    title: "telegram",
    address: "https://telegram.me/Zarina_loft",
    name: "Zarina_loft",
    isLink: true,
  },
  {
    title: "vk",
    address: "https://vk.com/id98812614",
    name: "vk.com/Zarina",
    isLink: true,
  },
  {
    title: "resume",
    address: "https://career.habr.com/zarina-mambetova-front",
    name: "habr.com/zarina",
    isLink: true,
  },
  {
    title: "portfolio",
    address: "https://zarinamambetova.github.io/portfolio-zarina-frontend/",
    name: "github/portfolio",
    isLink: true,
  },
];
</script>

<template>
  <shared-code-window :codeList="contactList" name="contacts" class="contacts__code"/>
</template>

<style lang="scss">
.contacts {
  &__code {
    margin: 0 auto;
  }
}
</style>
