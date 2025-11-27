<script setup>
defineProps({
  item: Object,
});
const emit = defineEmits(['select'])
// Метод для обработки клика
function handleClick(item) {
  // Вызвать событие 'select' и передать объект item
  emit('select', item)
}
</script>

<template>
  <li 
   class="item"
   @click="handleClick(item)"
  >
  <div  class="item__content">
    <div class="item__dates">{{ item.dates }}</div>
    <div class="item__row item__row-top">
      <div class="item__column">
        <img :src="item.logo" alt="логотип" class="item__image" />
      </div>

      <div class="item__column">
        <div class="item__label">{{ item.name }}</div>
        <div class="item__post">
          <div class="item__post-name">{{ item.post }}</div>
          <div v-if="item.type === 'work'" class="item__post-more">Подробнее</div>
        </div>
        

      </div>
    </div>

    <div class="item__row item__row-bottom">
      <p  class="item__desc">{{ item.desc }}</p>
      <ul class="item-charge">
        
        <li class="item-charge__item"
        v-for="charge in item.charges" 
        :key="charge.id">
        <span class="item-charge__dot"> • </span>
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
  
  margin-bottom: 50px;
  position: relative;

  .works & {
    cursor: pointer;
  }

  &:before {
    content: '';
    position: absolute;
    top: -7px;
    left: -0.6rem;
    width: 1rem;
    height: 1rem;
    background: v.$main-green;
    border-radius: 50%;
  }

  &__content {
    position: relative;
    border: .1rem solid v.$light-gray;
    box-shadow: v.$light-gray 0px 0px 15px;
    background-color: v.$bg-color-light;
    padding: 1.5rem;
    border-radius: .6rem;
    margin: 0 0 2rem 2rem;
    transform: none;
    transition: transform 0.3s ease;

    .works &:hover {
      transform: translateY(0px) scale(1.01) translateZ(0px);
      cursor: pointer;
    }

    @media (max-width: 580px) {
        padding: 4rem 1.5rem 1.5rem 1.5rem;
    }

    @media (max-width: 400px) {
      margin: 0 0 2rem 1rem;
    }
  }

  &__dates {
    position: absolute;
    top: -18px;
    left: 22px;
    background-color: v.$main-green;
    color: #081b29;
    border-radius: 17px;
    padding: 5px 15px;
@media (max-width: 580px) {
    margin-right: 10px;
}
  }

  &__label {
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 5px;
  }  

  &__post {
    display: flex;
    gap: 15px;

    @media (max-width: 890px) {
      flex-direction: column;
      gap: 5px;
    }
    
    &-more {
      color: v.$main-green;
      font-weight: bold;
    }
  }
    

  &__row {
    &-top {
      display: flex;
      align-items: center;
      margin-bottom: 15px;

      @media (max-width: 445px) {
    flex-direction: column;
}
    }
  }

  &__column {
    display: flex;
    flex-direction: column;

    &:first-child {
      margin: 0 20px 0 0;
      @media (max-width: 445px) {
        margin: 0 0 20px ;
      }
    }
  }

  &__image {
    width: 50px;
        height: 50px;
    display: block;
        border-radius: 50%;
    background-color: #fff;

          @media (max-width: 445px) {
            width: 65px;
        height: 65px;
      }
  }

  &-charge {
    display: flex;
    color: v.$text-color;
    flex-wrap: wrap;

    &__item {
      display: flex;
      margin-right: 10px;
      
    }

    &__dot {
      margin-right: 5px;
    }
  }
 
}

</style>