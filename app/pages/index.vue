<script setup>
import WelcomeTitle from '~/components/home/welcomeTitle.vue';
import MainTitle from '~/components/shared/mainTitle.vue';
import ScrollUp from '~/components/shared/scrollUp.vue';

import { onMounted } from 'vue';

onMounted(() => {
  const sections = document.querySelectorAll('section');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1  // с какого порога считать, что секция видна
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show-animate');
      } else {
        // если хотите, чтобы анимация повторялась, раскомментируйте
        // entry.target.classList.remove('show-animate');
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
});
</script>

<template>
  <div class="wrapper">

    <header-component/>

    <div class="main">

        <section class="section home show-animate" id="home">
          <div class="container">
            <WelcomeTitle text="Frontend Developer"></WelcomeTitle>
          </div>
        </section>

        <section class="section about" id="about">
          <div class="container about__container">
            
            <MainTitle firstWord="Обо" secondWord="мне" />

            <about-image />

            <AboutMe />

          </div>
        </section>

        <section class="section skills" id="skills">
          <div class="container">
                          <MainTitle firstWord="Навыки и" secondWord="инструменты" />

            <SkillsList/>
          </div>
        </section>

        <section class="section career" id="career">
          <div class="container">
                          <MainTitle firstWord="Моя" secondWord="карьера" />
            <NuxtLink to="/">Главная</NuxtLink>
          </div>
        </section>

        <section class="section contact" id="projects">
          <div class="container">
                          <MainTitle firstWord="Мои" secondWord="контакты" />
            <NuxtLink to="/">Главная</NuxtLink>
          </div>
        </section>

        <section class="section contact" id="contact">
          <div class="container">
                          <MainTitle firstWord="Мои" secondWord="контакты" />
            <NuxtLink to="/">Главная</NuxtLink>
          </div>
        </section>
    </div>

    <scroll-up/>

  </div>
</template>

<style scoped lang="scss">
@use '@/assets/css/variables' as v;

.wrapper {
    display: flex;
    position: relative;
}

.main {
  width: 100%;
}

.section {
  min-height: 100vh;
  display: flex;


  &:nth-child(even) {
    background-color: v.$bg-color-light;
  }
}

.home {
  align-items: center;
}

.about {
  &__container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    margin-bottom: 15px;
  }
}




</style>
