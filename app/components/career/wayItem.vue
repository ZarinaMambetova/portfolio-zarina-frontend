<script setup>
defineProps({
  item: Object,
});
</script>

<template>
  <li 
   class="item"
  >
  <div  class="item__content">
    <div class="item__row item__row-top">
      <div class="item__column">
        <img :src="item.logo" :alt="логотоп" class="item__image" />
      </div>

      <div class="item__column">
        <div class="item__label">{{ item.name }}</div>
        <div class="item__label">{{ item.post }}</div>
        <div class="item__label">{{ item.dates }}</div>
      </div>
    </div>

    <div class="item__row item__row-bottom">
      <p  class="item__desc">{{ item.desc }}</p>
      <ul class="item_charge">
        <li class="item_charge__item"
        v-for="charge in item.charges" 
        :key="charge.id">
      <img :src="item.logo" :alt="логотоп" class="item__image" />
      <p  class="item__desc">{{ item.desc }}</p>
      </li>
      </ul>

    </div>
    

  </div>

  </li>
</template>

<style lang="scss" scoped>
@use '@/assets/css/variables' as v;

.item {
  &__image {
    width: 25px;
  }
 
}

</style>