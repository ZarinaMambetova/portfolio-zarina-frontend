<script setup>
import { ref } from 'vue';
import titleShared from '@/components/shared/titleShared.vue';
import wayItem from '@/components/career/wayItem.vue';

const education = ref ([{
  id: 1,
  logo: '/svg/vue.svg',
  name: 'Астраханский государственный университет',
  post: 'Факультет мировой экономики и управления',
  dates:'Март 2003 — Май 2007',
  desc:'Менеджер',
},
{
  id: 2,
  logo: '/svg/vue.svg',
  name: 'Loftschool',
  post: 'Веб-разработчик',
  dates:'Сентябрь 2017 — Январь 2018',
  charges: [{
    logo: '/svg/vue.svg',
    text: '',
  }]
},
{
  id: 3,
  logo: '/svg/vue.svg',
  name: 'Астраханский государственный университет',
  post: 'Факультет мировой экономики и управления',
  dates:'Март 2003 — Май 2007',
  desc:'Менеджер',
},
{
  id: 4,
  logo: '/svg/vue.svg',
  name: 'Астраханский государственный университет',
  post: 'Факультет мировой экономики и управления',
  dates:'Март 2003 — Май 2007',
  desc:'Менеджер',
},])

const works = ref ([{
  id: 1,
  path: '/svg/vue.svg',
  name: 'VUEJS'
},])
</script>

<template>
  <div class="career__content" >

    <titleShared title="Образование"/>

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

    <titleShared title="Опыт работы"/>

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

.main-title {
  margin-bottom: 40px;
  font-size: 2.5rem;
  text-align: center;
  
  &__white {
    color: v.$text-color;
    margin-right: 15px;
  }
  &__green {
    color: v.$main-green;
  }
}

</style>