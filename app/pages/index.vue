<script setup>
import { ref } from 'vue';
import { useAnimationStore } from '@/stores/animationStore'

const animationStore = useAnimationStore()
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

// Запускаем анимацию только один раз, если анимации включены
watch(skillsIntersecting, (newVal) => {
  if (newVal && !isShowAnimate.value && animationStore.active) {
    isShowAnimate.value = true
  }
})

watch(careerIntersecting, (newVal) => {
  if (newVal && !isShowCareer.value && animationStore.active) {
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
    

    
        <div class="main">
    
            <section class="section home show-animate" id="home">
                <div class="container home__container">
                    <HomeWelcomeTitle  class="home__title"/>
                    <HomeWelcomeList class="home__code" />
                    <SharedScrollDown />
                </div>
            </section>
    
            <section class="section about" id="about">
                <div class="container about__container">
    
                    <SharedMainTitle firstWord="Обо" secondWord="мне" />
    
                    <about-image />
    
                    <AboutMe />

                    <AboutRunningLine />
    
                </div>
            </section>
    
            <section class="section skills" id="skills" ref="skillsRef">
                <div class="container">
                    <SharedMainTitle firstWord="Навыки" secondWord=" и инструменты" />
    
                    <SkillsList :isShowAnimate="isShowAnimate" />
                </div>
            </section>
    
            <section class="section career" id="career" ref="careerRef">
                <div class="container career__container">
                    <SharedMainTitle firstWord="Моя" secondWord="карьера" />
                    <CareerWayList @select="showModal" :isShowCareer="isShowCareer"/>
                </div>
            </section>
    
            <section class="section projects" id="projects">
                <div class="container projects__container">
                    <SharedMainTitle firstWord="Мои" secondWord="проекты" />
                    <ProjectsAnimation @select="showModal" />

                </div>
            </section>
    
            <section class="section contact" id="contact">
                <div class="container">
                    <SharedMainTitle firstWord="Мои" secondWord="контакты" />
                    <ContactsContactList/>
                </div>
            </section>
        </div>
    
        <SharedScrollUp/>
    
        <SharedModalWindow v-model="isModalOpen">
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
        </SharedModalWindow>
    
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
    background-color: v.$bg-color;

    &.contact {
        min-height: initial;
    }
    &:nth-child(even) {
        background-color: v.$bg-color-light;
        border-radius: 7rem 0;
    }
}

.home {
    align-items: center;
    min-height: 100vh;
    position: relative;

    &__container {
        display: flex;
        gap: 30px;
        justify-content: center;

        @media (max-width: 1500px) {
          justify-content: space-between;
        }

        @media (max-width: 880px) {
          flex-direction: column;
        }
    }

    &__title {
      width: 40%;

        @media (max-width: 880px) {
          width: 100%;
          margin-bottom: 30px;
        }
    }

    &__code {
      width: 50%;

        @media (max-width: 880px) {
          width: 100%;
          margin: 0 auto 20px;
        }
    }
}

.about {
      overflow: hidden;
      position: relative;
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

.skills {
    overflow: hidden;
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
