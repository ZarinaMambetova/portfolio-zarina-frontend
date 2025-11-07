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
        <img :src="item.logo" alt="логотип" class="item__image" />
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
      {{ charge }}
      </li>
      </ul>

    </div>
    

  </div>

  </li>
</template>

<style lang="scss" scoped>
@use '@/assets/css/variables' as v;

.item {
  cursor: pointer;
  margin-bottom: 20px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -0.6rem;
    width: 1rem;
    height: 1rem;
    background: v.$main-green;
    border-radius: 50%;
  }

  &__content {
    position: relative;
    padding: 1.5rem;
    border: .2rem solid v.$bg-color-light;
    box-shadow: v.$bg-color 0px 0px 15px;
    background-color: v.$bg-color-light;
    padding: 1.5rem;
    border-radius: 10px;
    border-radius: .6rem;
    margin: 0 0 2rem 2rem;
    overflow: hidden;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: v.$bg-color-light;
      z-index: -1;
      transition: .5s;
    }

    &:hover::before {
        width: 100%;
    }
  }

  &__image {
    width: 25px;
  }
 
}

</style>