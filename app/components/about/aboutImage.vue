<script setup>
</script>

<template>
<div class="about__image">
  <img  class="about__pic" src="/image/photo.jpeg" alt="иконка раздела обо мне">
    <span class="about__circle"></span>
  </div>

</template>

<style lang="scss" scoped>
@use '@/assets/css/variables' as v;

.about {  
  &__image {
    position: relative;
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    z-index: 7;
  }

  &__pic {
    filter: saturate(0.5);
    width: 90%;
    border-radius: 50%;
    border: .2rem solid v.$main-green;
  }

  &__circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border-top: .2rem solid v.$bg-color-light;
    border-bottom: .2rem solid v.$bg-color-light;
    border-left: .2rem solid v.$main-green;
    border-right: .2rem solid v.$main-green;
    animation: aboutSpinner 8s linear infinite;
  }
}

@keyframes aboutSpinner {
    100% {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}

</style>