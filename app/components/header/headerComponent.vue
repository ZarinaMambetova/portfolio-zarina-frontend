<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleMobileMenu = () => {
  isOpen.value = !isOpen.value
}

const closeModalMenu = () => {
  isOpen.value = false
}
</script>

<template>
<header class="header"> 
   <div class="header__col header__col-navigation" :class="{ 'navigation-open' : isOpen }"><header-navigation /></div>

  <header-hamburger @addClassOpen="toggleMobileMenu" :isOpen="isOpen"/>
</header>
</template>

<style lang="scss" scoped>
@use '@/assets/css/variables' as v;

.header {
    background-color: rgba(v.$bg-color, .8);
    backdrop-filter: blur(4px);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 2rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 80;
    transition: .3s;
    justify-content: flex-end;
    height: 75px;

  @media (max-width: 900px) {
  &__col-navigation {
    width: 0;
    position: absolute;
    right: 0;
    top: 75px;
    background-color: rgba(v.$bg-color, .8);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: width .3s;
    height: 100vh;
    overflow: auto;
  }

  .navigation-open {
    width: 250px;
    z-index: 90;

    @media (max-width: 480px) {
      width: 100%;
    }
  }
}
}
</style>