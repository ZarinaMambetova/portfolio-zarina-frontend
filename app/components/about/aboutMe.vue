<script setup>
import { ref } from "vue";

const description = ref(['Участвую в полном цикле разработки — от верстки до код-ревью и менторства',
    'Создаю чистый, поддерживаемый код',
    'Использую AI-инструменты для оптимизации работы',
    'Эффективно сотрудничаю с аналитиками, дизайнерами и тестировщиками',

])
</script>

<template>
    <div class="about__content">
        <h3 class="about__title">Frontend-разработчик на Vue.js</h3>
        <div class="about__description">
            <p class="about__text">Создаю современные веб-интерфейсы с использованием Vue 2/3 (Composition API), Pinia, Vuex.<br/>
               Разрабатываю кастомные UI-компоненты с документацией в Storybook.<br/><br/>
              Что отличает меня:</p>
    
            <ul class="about__description-list">
                <li class="about__description-item" v-for="desc, index in description" :key="index">
                  <div class="about__description-disc"></div>
                  <div class="about__description-text">{{ desc }}</div>
                </li>
            </ul>
<br/>
            <p class="about__text">Ответственная и дисциплинированная, готова к сложным задачам в вашем проекте.</p>
             
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