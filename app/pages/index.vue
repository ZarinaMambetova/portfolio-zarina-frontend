<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useAnimationStore } from '@/stores/animationStore'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'

const animationStore = useAnimationStore()

// Refs для элементов
const skillsRef = ref(null)
const careerRef = ref(null)

const isShowAnimate = ref(false)
const isShowCareer = ref(false)

// Используем composable
const { isIntersecting: skillsIntersecting } = useIntersectionObserver(
  skillsRef,
  {
    threshold: 0.2,
    rootMargin: '-20% 0px -20% 0px'
  },
  (isIntersecting) => {
    if (isIntersecting && !isShowAnimate.value && animationStore.active) {
      isShowAnimate.value = true
    }
  }
)

const { isIntersecting: careerIntersecting } = useIntersectionObserver(
  careerRef,
  {
    threshold: 0.2,
    rootMargin: '-30% 0px 0px 0px'
  },
  (isIntersecting) => {
    if (isIntersecting && !isShowCareer.value && animationStore.active) {
      isShowCareer.value = true
    }
  }
)

// Остальной код без изменений
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

const homeRef = ref(null)

const handleScroll = () => {
    if (!homeRef.value) return
    
    const scrollY = window.scrollY
    const initialScale = 1
    const minScale = 0
    const fadeStart = 300
    const fadeEnd = 700
    
    let scale = initialScale
    
    if (scrollY > fadeStart) {
        const progress = Math.min((scrollY - fadeStart) / (fadeEnd - fadeStart), 1)
        scale = initialScale - progress * (initialScale - minScale)
    }
    
    homeRef.value.style.transform = `scale(${scale})`
    homeRef.value.style.opacity = scale
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
})
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <div class="wrapper">
      <div class="main">
    
            <section class="section home show-animate" id="home">
                <div class="container home__container"  ref="homeRef">
                    <div class="home__row" >
                    <HomeWelcomeTitle  class="home__title"/>
                    <HomeWelcomeList class="home__code" />
                </div>
                    
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
    min-height: 70vh;
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
    min-height: 100vh;
    position: relative;

    &__container {
        display: flex;
            align-items: center;
        gap: 30px;
        justify-content: center;
        transform-origin: bottom center;
    will-change: transform, opacity;


    }

    &__row {
      display: flex;
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
