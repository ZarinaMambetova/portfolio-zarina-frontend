<script setup>
defineProps({
  firstWord: String,
  secondWord: String,
});
</script>

<template>
  <h2 class="main-title">
    <span class="main-title__white">{{ firstWord }}</span>
    <span class="main-title__green">{{ secondWord }}</span>
  </h2>
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