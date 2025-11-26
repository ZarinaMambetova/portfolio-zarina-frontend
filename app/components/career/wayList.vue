<script setup>
import { ref } from 'vue';

const props = defineProps({
  isShowCareer: Boolean,
});

const showAnimation = ref(false);

watch(() => props.isShowCareer, (newVal) => {
  if (newVal) {
    showAnimation.value = true;
  }
});

const education = ref ([{
  id: 1,
  logo: './image/loftschool.png',
  name: 'Loftschool',
  post: 'Веб-разработчик',
  dates:'Сентябрь 2017 — Январь 2018',
  charges: [
     'Vue.js', 'JavaScript',  'Webpack', 'HTML', 'CSS', 'Адаптивная верстка',  'Кроссбраузерная верстка',  'Sass',  'БЭМ',  'Верстка лендингов',  'SVG',  'Семантическая верстка',  'Валидная верстка', 'Figma'
]},
{
  id: 2,
  logo: './image/agu.png',
  name: 'Астраханский государственный университет',
  post: 'Факультет мировой экономики и управления',
  dates:'Март 2003 — Май 2007',
  desc:'Менеджер. Государственное и муниципальное управление',
},
])

const works = ref ([{
  id: 1,
  type: 'work',
  logo: './svg/c2g.svg',
  name: 'Ctrl2GO',
  post: 'Фронтенд разработчик (Middle)',
  dates:'Март 2022 — Апрель 2025 (3 года и 2 месяца)',
  progresses: ['Разработала с нуля сайт платформы CLASS - https://class-cloud.ru/, полностью реализованный мной на Vue.js, с адаптивной и кроссбраузерной версткой согласно figma-макетам. Писала поддерживаемый код для обеспечения адекватного функционирования веб-ресурса.', 'Создала и внедрила подсистему PMM (управление проектами) на Vue 3 (Vite), Pinia, Composition Api, с интеграцией графиков amCharts5.', 'Обеспечила надежное взаимодействие фронтенда с бекендом через API, задокументированные в Swagger, используя axios.', 'Участвовала в создании компонентов для Storybook. ', 'Вела код-ревью, рефакторинг, качество кода обеспечивалось с помощью SonarQube, участвовала в планировании и обсуждении задач в Битрикс24 и Scrum'],
  charges: [
     'Vue.js', 'Pinia', 'Vite', 'JavaScript', 'Storybook', 'SCSS', 'БЭМ', 'Vue router', 'Git', 'GitLab', 'Axios', 'RESTful API', 'API Яндекс.Карты', 'Swagger', 'SonarQube', 'i18n', 'Figma', 'AmChartsV4 '
]},
{
  id: 2,
  type: 'work',
  logo: './svg/tkbbank.svg',
  name: 'Транскапиталбанк',
  post: 'Frontend/HTML-верстальщик (Junior), контент-менеджмент',
  dates:'Октябрь 2020 — Февраль 2022 (1 год и 5 месяцев)',
  progresses: ['Верстала новые страницы и лендинги, дорабатывала старые страницы для сайта банка - https://www.tkbbank.ru/', 'Верстала почтовые рассылки, в том числе под Outlook 13.', 'Участвовала в разработке страниц, тесная работа с дизайнером и заказчиками.', 'Занималась наполнением сайта контентом через админку Битрикс по задачам заказчиков.', 'Разрабатывала и верстала страницы с учетом адаптивности и кроссбраузерной совместимости строго по макетам дизайнера.', 'Работала в crm joomla.', 'Работала через Jira.'],
  charges: [
     'HTML', 'CSS', 'JQuery', 'Адаптивная верстка', 'БЭМ', 'Верстка лендингов', 'Верстка Email', 'Битрикс24', 'Flex', 'PHP'
]},
{
  id: 3,
  type: 'work',
  logo: './image/sliza.png',
  name: 'Sliza',
  post: 'Junior frontend/HTML-верстальщик',
  dates:'Октябрь 2019 — Июнь 2020 (9 месяцев)',
  progresses: ['Верстка лендингов и внутренних страниц.', 'Сбор и анализ данных веб-страниц.', 'Сбор и анализ (парсинг) данных веб-страниц.', 'Выполнение задач в redmine.'],
  charges: [
     'HTML', 'CSS', 'Адаптивная верстка', 'Sass', 'БЭМ', 'Верстка лендингов', 'Кроссбраузерная верстка', 'Семантическая верстка', 'JavaScript'
]},
{
  id: 4,
  type: 'work',
  logo: './image/loftschool.png',
  name: 'Loftschool',
  post: 'Куратор, верстка',
  dates:'Февраль 2018 — Сентябрь 2019 (1 год и 8 месяцев)',
  progresses: ['Организовывала обучение, управление командой наставников и 100+ студентов.', 'Реализовала учебные проекты по дизайнам школы.', 'Вела документацию, редактировала материалы курсов.'],
  charges: [
     'Управление людьми', 'Ведение переговоров', 'Построение команды', 'Разработка интерфейсов'
]},
])

const emit = defineEmits(['select'])

function handleSelect(selectedItem) {
  // Передаем событие дальше в родителя
  emit('select', selectedItem)
} 
</script>

<template>
<div class="career__content" v-if="showAnimation">
    <!-- 1. Опыт работы -->
    <SharedTitleShared 
      title="Опыт работы" 
      class="career__title animated-element"
      :style="{ 'animation-delay': '0.3s' }"
    />

    <!-- 2. Список работ -->
    <ul class="career__list works">
      <CareerWayItem  
        v-for="work, index in works" 
        :item="work"
        :key="work.id" 
        class="career__item animated-element"
        :style="{ 'animation-delay': (0.5 + index * 0.2) + 's' }"
        @select="handleSelect" 
      />
    </ul>

    <!-- 3. Образование -->
    <SharedTitleShared 
      title="Образование" 
      class="career__title animated-element"
      :style="{ 'animation-delay': (0.5 + works.length * 0.2 + 0.2) + 's' }"
    />

    <!-- 4. Список образования -->
    <ul class="career__list">
      <CareerWayItem 
        v-for="period, index in education" 
        :key="period.id" 
        :item="period"
        class="career__item education animated-element"
        :style="{ 'animation-delay': (0.5 + works.length * 0.2 + 0.5 + index * 0.2) + 's' }"
      />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/css/variables' as v;

.career {
  &__title {
    margin-bottom: 40px;
    opacity: 0;
    transform: translateY(30px);
    animation: slideIn 1s forwards;
  }

  &__list {
    position: relative;
    border-left: .2rem solid v.$main-green;
  }

  &__item {
  opacity: 0;
  transform: translateY(100px);
  animation: slideIn 2s forwards;
    
  }
}



@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>