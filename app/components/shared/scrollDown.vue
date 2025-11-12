<script setup>
import IconSvg from '~/assets/icons/arrow-down.svg'

</script>

<template>
  <NuxtLink 
  class="scroll-down"
    :to="`#about`">
    <IconSvg  class="scroll-down__icon" />
  </NuxtLink>
</template>

<style lang="scss" scoped>
@use '@/assets/css/variables' as v;

.scroll-down {
  width: 60px;
  position: absolute;
  bottom: 4%;
  left: 50%;
  transform: translateX(-50%);

  &__icon {
    color: v.$text-color;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    animation: bounce 3s ease-in-out 10;
    animation-delay: 5s;
  }
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-7px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
