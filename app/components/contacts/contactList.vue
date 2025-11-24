<script setup>
const contactList = [
  {
    title: "email",
    address: "mailto:zmambetova@yandex.ru",
  },
    {
    title: "gitHub",
    address: "https://github.com/ZarinaMambetova",
  },
  {
    title: "telegram",
    address: "https://telegram.me/Zarina_loft",
  },
  {
    title: "VK",
    address: "https://vk.com/id98812614",
  },
  {
    title: "resume",
    address: "https://career.habr.com/zarina-mambetova-front",
  },
  {
    title: "portfolio",
    address: "https://zarinamambetova.github.io/portfolio-zarina-frontend/",
  },

]
</script>

<template>
  <div
    class="contacts"
  >

    <div class="contacts__row">
      <div class="contacts__lines">
        <div class="contacts__line contacts__line_red"></div>
        <div class="contacts__line contacts__line_orange"></div>
        <div class="contacts__line contacts__line_green"></div>
      </div>
    </div>
    <div
      class="contacts__content"
    >
      
        <div class="contacts__title">
          <span class="contacts__text contacts__text_pink">const</span
          ><span class="contacts__text contacts__text_violet">coder</span
          ><span class="contacts__text contacts__text_pink">=</span
          ><span class="contacts__text contacts__text_grey">{</span>
        </div>
        <ul class="contacts__list">
          <li
        v-for="(contact, index) in contactList"
        :key="index"
        class="contacts__item"
      >
        <div>
          <span class="contacts__text contacts__text_white">{{contact.title}}:</span
          ><span class="contacts__text contacts__text_grey">'</span
          ><span class="text-green-400">{{contact.address}}</span
          ><span class="contacts__text contacts__text_grey">',</span>
        </div>
    </li>
        
        </ul>
    </div>
  </div>
</template>
