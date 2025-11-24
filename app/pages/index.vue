<script setup>
import WelcomeTitle from '~/components/home/welcomeTitle.vue';
import MainTitle from '~/components/shared/mainTitle.vue';
import ScrollUp from '~/components/shared/scrollUp.vue';
import ScrollDown from '~/components/shared/scrollDown.vue';
import ModalWindow from '~/components/shared/modalWindow.vue';
import ProjectsAnimation from '~/components/projects/projectsAnimation.vue';

import { ref } from 'vue';
import WayList from '~/components/career/wayList.vue';
import ContactList from '~/components/contacts/contactList.vue';

// Конфигурация анимаций
const animationConfig = {
  skills: {
    threshold: 0.2,
    rootMargin: '-20% 0px -20% 0px'
  },
  career: {
    threshold: 0.2,
    rootMargin: '-25% 0px -25% 0px'
  }
}

const isShowAnimate = ref(false)
const isShowCareer = ref(false)

const { targetRef: skillsRef, isIntersecting: skillsIntersecting } = 
  useIntersectionObserver(animationConfig.skills)

const { targetRef: careerRef, isIntersecting: careerIntersecting } = 
  useIntersectionObserver(animationConfig.career)

// Запускаем анимацию только один раз
watch(skillsIntersecting, (newVal) => {
  if (newVal && !isShowAnimate.value) {
    isShowAnimate.value = true
  }
})

watch(careerIntersecting, (newVal) => {
  if (newVal && !isShowCareer.value) {
    isShowCareer.value = true
  }
})

const isModalOpen = ref(false)
const selectedItem = ref(null)

function showModal(item) {
    selectedItem.value = item
    isModalOpen.value = true
    console.log(selectedItem.value)
}

const parseLinks = (text) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g
  return text.replace(urlRegex, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>')
}
</script>

<template>
    <div class="wrapper">
    
        <header-component/>
    
        <div class="main">
    
            <section class="section home show-animate" id="home">
                <div class="container">
                    <WelcomeTitle></WelcomeTitle>
                    <ScrollDown />
                </div>
            </section>
    
            <section class="section about" id="about">
                <div class="container about__container">
    
                    <MainTitle firstWord="Обо" secondWord="мне" />
    
                    <about-image />
    
                    <AboutMe />
    
                </div>
            </section>
    
            <section class="section skills" id="skills" ref="skillsRef">
                <div class="container">
                    <MainTitle firstWord="Навыки" secondWord=" и инструменты" />
    
                    <SkillsList :isShowAnimate="isShowAnimate" />
                </div>
            </section>
    
            <section class="section career" id="career" ref="careerRef">
                <div class="container career__container">
                    <MainTitle firstWord="Моя" secondWord="карьера" />
                    <WayList @select="showModal" :isShowCareer="isShowCareer"/>
                </div>
            </section>
    
            <section class="section projects" id="projects">
                <div class="container projects__container">
                    <MainTitle firstWord="Мои" secondWord="проекты" />
                    <ProjectsAnimation @select="showModal" />

                </div>
            </section>
    
            <section class="section contact" id="contact">
                <div class="container">
                    <MainTitle firstWord="Мои" secondWord="контакты" />
                    <ContactList/>
                </div>
            </section>
        </div>
    
        <scroll-up/>
    
        <ModalWindow v-model="isModalOpen">
            <template v-if="selectedItem">
                <div v-if="selectedItem.type === 'work'">
                <h2 class="modal__name">{{ selectedItem.name }}</h2>
                <div class="modal__post">{{ selectedItem.post }}</div>
                <div class="modal__dates">{{ selectedItem.dates }}</div>
                    <ul class="modal__progress">
                        <li class="modal__progress_item"
                            v-for="progress, index in selectedItem.progresses" 
                            :key="index">
                            <span class="modal__progress_dot"> • </span>
                            <span v-html="parseLinks(progress)"></span>
                        </li>
                    </ul>
                </div>

                <div v-else-if="selectedItem.type === 'projects'" class="modal-project__content">
                <img  class="modal-project__image" :src="selectedItem.middleImage" alt="" />
                </div>
</template>
        </ModalWindow>
    
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
        border-radius: 7rem 0;
    }
}

.home {
    align-items: center;
    min-height: 100vh;
    position: relative;
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

.modal {
    &__name {
        margin-bottom: 15px;
        color: v.$main-green;
    }
    &__post {
        margin-bottom: 10px;
    }
    &__dates {
        color: v.$light-gray;
        font-size: .875rem;
        margin-bottom: 10px;
    }
    &__progress {
        &_item {
            margin-bottom: 10px;
        }
    }

    &-project__image {
    width: 100%;
    }
}
</style>
