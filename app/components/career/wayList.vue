<script setup>
import { ref } from 'vue';
import titleShared from '@/components/shared/titleShared.vue';
import wayItem from '@/components/career/wayItem.vue';

const education = ref ([{
  id: 1,
  logo: '/svg/vue.svg',
  name: 'Loftschool',
  post: 'UX/UI-дизайн: базовый',
  dates:'Ноябрь 2019 — Декабрь 2019',
  charges: ['UI/UX дизайн',  'Sketch',  'Проектирование интерфейсов',  'Figma Design',  'Прототипирование']
},
{
  id: 2,
  logo: '/svg/vue.svg',
  name: 'Loftschool',
  post: 'Комплексное обучение: Javascript',
  dates:'Октябрь 2018 — Декабрь 2018',
  desc:'Менеджер',
},
{
  id: 3,
  logo: '/svg/vue.svg',
  name: 'Loftschool',
  post: 'Веб-разработчик',
  dates:'Сентябрь 2017 — Январь 2018',
  charges: [
     'Vue.js', 'JavaScript',  'Webpack', 'HTML', 'CSS', 'Адаптивная верстка',  'Кроссбраузерная верстка',  'Sass',  'БЭМ',  'Верстка лендингов',  'SVG',  'Семантическая верстка',  'Валидная верстка', 'Figma'
]},
{
  id: 4,
  logo: '/svg/vue.svg',
  name: 'Астраханский государственный университет',
  post: 'Факультет мировой экономики и управления',
  dates:'Март 2003 — Май 2007',
  desc:'Менеджер. Государственное и муниципальное управление',
},
])

const works = ref ([{
  id: 1,
  logo: '/svg/vue.svg',
  name: 'Ctrl2GO',
  post: 'Фронтенд разработчик (Middle)',
  dates:'Март 2022 — Апрель 2025 (3 года и 2 месяца)',
  charges: [
     'Vue.js', 'Pinia', 'Vite', 'JavaScript', 'Storybook', 'SCSS', 'БЭМ', 'Vue router', 'Git', 'GitLab', 'Axios', 'RESTful API', 'API Яндекс.Карты', 'Swagger', 'SonarQube', 'i18n', 'Figma', 'AmChartsV4 '
]},
{
  id: 2,
  logo: '/svg/vue.svg',
  name: 'Транскапиталбанк',
  post: 'Frontend/HTML-верстальщик (Junior), контент-менеджмент',
  dates:'Октябрь 2020 — Февраль 2022 (1 год и 5 месяцев)',
  charges: [
     'HTML', 'CSS', 'JQuery', 'Адаптивная верстка', 'БЭМ', 'Верстка лендингов', 'Верстка Email', 'Битрикс24', 'Flex', 'PHP'
]},
{
  id: 3,
  logo: '/svg/vue.svg',
  name: 'Sliza',
  post: 'Junior frontend/HTML-верстальщик',
  dates:'Октябрь 2019 — Июнь 2020 (9 месяцев)',
  charges: [
     'HTML', 'CSS', 'Адаптивная верстка', 'Sass', 'БЭМ', 'Верстка лендингов', 'Кроссбраузерная верстка', 'Семантическая верстка', 'JavaScript'
]},
{
  id: 4,
  logo: '/svg/vue.svg',
  name: 'Sliza',
  post: 'Куратор, верстка',
  dates:'Февраль 2018 — Сентябрь 2019 (1 год и 8 месяцев)',
  charges: [
     'Управление людьми', 'Ведение переговоров', 'Построение команды', 'Разработка интерфейсов'
]},
])
</script>

<template>
  <div class="career__content" >

    <titleShared title="Образование" class="career__title"/>

    <transition-group 
      name="slide" 
      tag="ul" 
      class="career__list" 
    >

        <wayItem v-for="period in education" 
        :key="period.id" 
        :item="period"
        class="career__item" />

    </transition-group>

    <titleShared title="Опыт работы" class="career__title"/>

    <transition-group 
      name="slide" 
      tag="ul" 
      class="career__list" 
    >

        <wayItem v-for="work in works" 
        :item="work"
        :key="work.id" 
        class="career__item" />
        
    </transition-group>

  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/css/variables' as v;

.career {
  &__title {
    margin-bottom: 40px;
  }

  &__list {
    position: relative;
    border-left: .2rem solid v.$main-green;
  }
}

</style>