<script setup>
import IconSvg from '/svg/download-pdf.svg'
</script>
<template>
  <div class="welcome show-animate">
        <div class="welcome__content">
            <h1 class="welcome__big-title">Зарина Мамбетова</h1>
                <h3 class="welcome__animate">Frontend Developer</h3>

        <p class="welcome__text">
          6 лет опыта в сфере веб-разработки, из которых более трех лет 
              связана с созданием сложных и качественных интерфейсов на Vue.js (Options API, Composition API), Storybook, Vite, Pinia,
            осуществляю интеграцию фронтенда с внутренними и внешними сервисами через REST API, тестирование на Jest.
             </p>
    
        <div class="welcome__buttons">
            <NuxtLink to="#projects" class="welcome__button button__blue button">Проекты</NuxtLink>
            <a href="/image/photo.jpg" download class="button welcome__button button__black">

              <span>Резюме</span>
              <IconSvg  class="welcome__icon" />
            </a>
        </div>
      </div>
  </div>
</template>

<style lang="scss">
@use '@/assets/css/variables' as v;

.welcome {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__content {
    max-width: 40rem;
    z-index: 99;
    color: v.$text-color;
  }

  &__big-title {
    position: relative;
    display: inline-block;
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.3;
  }

  &__animate {
    position: relative;
    width: 20.8rem;
    font-size: 2.05rem;
    font-weight: 700;
    color: transparent;
    -webkit-text-stroke: 0.7px v.$main-green;
    background-image: linear-gradient(v.$main-green, v.$main-green);
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    background-clip: text;
    background-position: -33rem 0;

    /* Анимация для текста при наличии класса show-animate */
    .show-animate & {
      animation: homeBgText 6s linear infinite 2s;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      border-right: 2px solid v.$main-green;
      z-index: -1;

        /* Анимация для ::before эффектов */
      .show-animate & {
        animation: homeCursorText 6s linear infinite 2s;
      }
    }
    
  }

  &__text {
    padding: 30px 0;
  }

  &__buttons {
    display: flex;
  }

&__icon {
    margin-left: 7px;
  }
}

.button {
  &__blue {
    margin-right: 30px;
  }

  &__black {
    display: flex;
    align-items: flex-end;
  }
}

/* Ключевые кадры для текста фона */
@keyframes homeBgText {
  0%, 10%, 100% {
    background-position: -330px 0;
  }
  65%, 85% {
    background-position: 0 0;
  }
}

/* Ключевые кадры для курсора/границы */
@keyframes homeCursorText {
  0%, 10%, 100% {
    width: 0;
  }
  65%, 78%, 85% {
    width: 100%;
    opacity: 1;
  }
  75%, 81% {
    opacity: 0;
  }
}
</style>