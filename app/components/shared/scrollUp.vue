<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import IconSvg from '~/assets/icons/arrow-up.svg'

const scrollY = ref(0);

const handleScroll = () => {
  scrollY.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const scrollUp = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
  <button v-if="scrollY > 500" class="scroll__button" @click.prevent="scrollUp" type="button">
    <div class="scroll__icon">
      <IconSvg  class="scroll__icon-pic" />
    </div>
  </button>
</template>

<style lang="scss" scoped>
@use '@/assets/css/variables' as v;

.scroll {
      &__icon-pic {
      color: v.$text-color; /* чтобы наследовать цвет или задавать явно */

    }
  &__button {
    display: inline-block;
    text-align: center;
    padding: 10px;
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 80;
    cursor: pointer;
    border: 2px solid v.$text-color;
    background-color: transparent;
    transition: opacity .5s, visibility .5s;
    border-radius: 50%;

    &:hover {
      border: 2px solid v.$main-green;
      background-color: transparent;
      box-shadow: v.$bg-color 0px 0px 15px;

      .scroll__icon-pic {
        color: v.$main-green;
      }
    } 
  }

    &-pic {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }
</style>
