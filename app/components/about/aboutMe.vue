<script setup>
import { ref } from "vue";

const description = ref(['Разработку и поддержку веб-интерфейсов с использованием Vue.js 2, Vue.js 3 (Options API, Composition API), Pinia, Vuex.',
    'Создание кастомных UI-компонентов с нуля, их документирование и развитие в Storybook.',
    'Интеграцию фронтенда с внутренними и внешними сервисами через REST API, работу с документацией API (Swagger).',
    'Реализацию адаптивной, кроссбраузерной верстки на HTML5, CSS3, SCSS, применяя современные подходы, такие как BEM, Flexbox и Grid.',
    'Опыт работы с системами контроля версий (Git), настройкой сборщиков (Webpack, Vite).',
    'Проведение код-ревью, рефакторинг и исправление ошибок для повышения качества проекта и обучения младшего персонала.',
    'Вовлечена в полный цикл разработки фронтенд-решений, ориентирована на качество кода и эффективность.'
])
</script>

<template>
    <div class="about__content">
        <h3 class="about__title">Frontend Developer</h3>
        <div class="about__description">
            <p class="about__text">Привет, меня зовут Зарина. Мой опыт frontend-разработки включает:</p>
    
            <ul class="about__description-list">
                <li class="about__description-item" v-for="desc, index in description" :key="index">
                  <div class="about__description-disc"></div>
                  <div class="about__description-text">{{ desc }}</div>
                </li>
            </ul>

            <p class="about__text">Я постоянно совершенствую свои навыки, в том числе практикую тестирование (Jest), CI/CD, TypeScript, Nuxt.js, использую AI-ассистентов для повышения продуктивности (например, быстрый рефакторинг). <br/> Мой опыт работы в командах с аналитиками,
            дизайнерами и тестировщиками позволяет эффективно взаимодействовать и достигать общих целей.</p>
            <p class="about__text">Уверена, что моя ответственность и дисциплинированность позволят успешно реализовать все поставленные задачи в вашем проекте.</p>

             
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/css/variables' as v;
.about {
  &__title {
    margin-bottom: 20px;
  }

  &__text {
    text-indent: 30px;
  }

  &__description {
    &-item {
      display: flex;
      margin: 0 0 7px 30px;
    }

    &-disc {
    margin: 7px 10px 0 0;
    background-color: v.$main-green;
    border-radius: 50%;
    width: 6px;
    height: 6px;
    line-height: 22px;
    }
  }
  
}
</style>