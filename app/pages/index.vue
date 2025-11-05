<script setup>
import WelcomeTitle from '~/components/home/welcomeTitle.vue';
import MainTitle from '~/components/shared/mainTitle.vue';
import ScrollUp from '~/components/shared/scrollUp.vue';

import { onMounted, ref } from 'vue';
import WayList from '~/components/career/wayList.vue';

const isShowAnimate = ref(false);

onMounted(() => {
    const targetSection = document.querySelector('#skills');

    if (!targetSection) return; // Если секция не найдена, ничего не делаем

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7 // или другой порог, который тебе нужен
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.target.id === 'skills') {
                if (entry.isIntersecting) {
                    isShowAnimate.value = true;
                }
                // Не обязательно: убрать класс при исчезновении
                /*
                else {

                }
                */
            }
        });
    }, observerOptions);

    if (targetSection) {
        observer.observe(targetSection);
    }
});
</script>

<template>
    <div class="wrapper">
    
        <header-component/>
    
        <div class="main">
    
            <section class="section home show-animate" id="home">
                <div class="container">
                    <WelcomeTitle></WelcomeTitle>
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
                    <MainTitle firstWord="Навыки" secondWord=" и инструменты" />
    
                    <SkillsList :isShowAnimate="isShowAnimate" />
                </div>
            </section>
    
            <section class="section career" id="career">
                <div class="container">
                    <MainTitle firstWord="Моя" secondWord="карьера" />
                    <WayList/>
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
    display: flex;
    &:nth-child(even) {
        background-color: v.$bg-color-light;
    }
}

.home {
    align-items: center;
    min-height: 100vh;
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
