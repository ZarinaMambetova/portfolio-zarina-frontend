<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import IconSvg from '/svg/arrow-up.svg'

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
      border: 2px solid v.$text-color;
      background-color: transparent;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
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
