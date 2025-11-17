<template>
    <div class="projects">
        <div v-for="(project, index) in projects" :key="index" :class="['project', { 'animate': interprojects[index] }]" :ref="el => projectRefs[index] = el" >
            <div class="project__middle"  @click="handleSelect(project)">
                <img :src="project.middleImage" alt="" />
            </div>
            <div class="project__left">
                <div class="project__content">
                    <h2 class="project__title">{{ project.title }}</h2>
                    <p class="project__description">{{ project.description }}</p>
                    <ul class="project__charge">
    
                        <li class="project__charge_item" v-for="(technology, index) in project.technologies" :key="index">
                             {{ technology }}
                        </li>
                    </ul>
                    <div class="project__buttons">
                        <NuxtLink :to="project.site" class="button project__button button__blue" target="_blank" :class="{ 'unactive': !project.site }" :disabled="!project.site">
                            Посмотреть
                        </NuxtLink>
                        <NuxtLink :to="project.github" class="button project__button button__black" :class="{ 'unactive': !project.github }" :disabled="!project.github">
                            GitHub
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const projects = [{
        type: 'projects',
        middleImage: './image/projects/my-portfolio.jpeg',
        title: 'Этот самый сайт-портфолио (В процессе)',
        site: 'https://zarinamambetova.github.io/portfolio-zarina-frontend/',
        github: 'https://github.com/ZarinaMambetova/portfolio-zarina-frontend',
        description: 'Разрабатываю  этот сайт с адаптивной, кроссбраузерной версткой и анимацией для себя, чтобы попрактиковаться в Nuxt 4, TS и тестировании. Настроила CI/CD.  Вдохновлен примерами портфолио в открытом доступе.',
        technologies: [
            'Nuxt 4', 'Vue.js', 'JavaScript', 'CI/CD', 'Typescript', 'Pinia', 'SCSS', 'БЭМ', 'Vue router', 'Git', 'GitHub',
        ]
    },
    {
        type: 'projects',
        middleImage: './image/projects/class.jpeg',
        title: 'Class-cloud (ctrl2go)',
        site: 'https://class-cloud.ru/',
        github: '',
        description: 'Разработала с нуля этот сайт платформы CLASS  на Vue.js, с адаптивной и кроссбраузерной версткой согласно figma-макетам, взаимодействием с сервером.',
        technologies: [
            'Vue.js', 'Vite', 'JavaScript', 'SCSS', 'БЭМ', 'Vue router', 'Git', 'GitLab', 'Axios', 'RESTful API', 'API Яндекс.Карты', 'i18n', 'Figma',
        ]
    },
    {
        
      type: 'projects',
      middleImage: './image/projects/pmm.jpeg',
        title: 'Project management module (ctrl2go)',
                site: '',
        github: '',
        description: 'Код на закрытом репозитории GitLab. Настроен вывод/редактирование/удаление данных из разных API (отправка HTTP-запросов к API через Axios), вывод графиков amcharts5, скачивание и загрузка данных из файлов',
        technologies: [
            'Vue.js', 'Pinia', 'Vite', 'JavaScript', 'Storybook', 'SCSS', 'БЭМ', 'Vue router', 'Git', 'GitLab', 'Axios', 'RESTful API', 'API Яндекс.Карты', 'Swagger', 'SonarQube', 'i18n', 'Figma', 'AmChartsV4 '
        ]
    },
        {
        
      type: 'projects',
      middleImage: './image/projects/interviews.jpeg',
        title: 'Список собеседований',
        site: 'https://zarinamambetova.github.io/interviews-project/',
        github: 'https://github.com/ZarinaMambetova/interviews-project',
        description: 'Сайт со списком собеседований с авторизацией и  возможностью фильтровать, добавлять, редактировать и удалять данные о собеседовании. Отдельно настроена статистика по данным. Данные для авторизации читайте в Readme',
        technologies: [
            'Vue.js 3', 'Pinia', 'Vite', 'Typescript', 'SCSS', 'БЭМ', 'Git', 'GitLab', 'chart.js', 'firebase', 'primevue', 'primeicons',
        ]
    },
]

const projectRefs = ref([])
const interprojects = ref(projects.map(() => false))

const initObservers = () => {
    const options = {
        threshold: 0.3,
        rootMargin: '-20% 0px -20% 0px'
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const index = projectRefs.value.findIndex(ref => ref === entry.target)
            if (index !== -1) {
                interprojects.value[index] = entry.isIntersecting
            }
        })
    }, options)

    // Наблюдаем за всеми секциями
    projectRefs.value.forEach((project, index) => {
        if (project) {
            observer.observe(project)
        }
    })

    return observer
};

const emit = defineEmits(['select'])
// Метод для обработки клика
function handleSelect(selectedItem) {
  // Вызвать событие 'select' и передать объект item
  emit('select', selectedItem)
  console.log('select', selectedItem)
}

onMounted(() => {
    const observer = initObservers()

    onUnmounted(() => {
        observer.disconnect()
    })
})
</script>

<style scoped lang="scss">
@use '@/assets/css/variables' as v;

.projects {
    width: 100%;
}

.project {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    min-height: 365px;

        margin-bottom: 4rem;

    &__left,
    &__middle {

        color: #fff;
        box-sizing: border-box;

            position: absolute;
            width: 50%;
            height: 365px;
            transition: all 0.6s ease-in-out;

    }
    &__middle {
        background: #2c3e50;
        right: 0;
        z-index: 2;
                padding: 3px;

        img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            cursor: pointer;
            @media (min-width: 768px) {
                height: 100%;
            }
        }
    }
    &__left {
        background: rgba(44, 62, 80, 0.9);
        left: 50%;
        z-index: 1;
        padding: 10px 14px;
.animate 
        & {
                left: 0;
        }

    } 
    &__content {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: calc(100% - 60px);


    }
        &__title,
        &__description,
        &__charge {
            margin-bottom: 1.3rem;
        }
&__title {
color: #00dc82;
}
        


    &__charge {
      display: flex;
      flex-wrap: wrap;

      &_item {
border-radius: 8px;
    padding: 3px 7px;
    cursor: default;


    background-color: v.$light-gray;
    margin: 0 10px 10px 0;
      }
    }

    &__buttons {display: flex;
    }

    &__button {}
}

// Мобильная версия
@media (max-width: 767px) {
    .project {
        &__middle,
        &__left {
            position: relative;
            width: 100%;
            left: 0;
        }
        &__left {
            order: 2;
        }
        &__middle {
            order: 1;
        }
    }
}
</style>