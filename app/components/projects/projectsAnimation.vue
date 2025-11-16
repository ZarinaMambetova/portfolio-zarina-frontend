<template>
    <div class="sections-container">
        <div v-for="(section, index) in sections" :key="index" :class="['section', { 'animate': intersections[index] }]" :ref="el => sectionRefs[index] = el">
            <div class="middle">
                <img :src="section.middleImage" alt="" />
            </div>
            <div class="left title">
                <div class="content">
                    <h2>{{ section.title }}</h2>
                    <p>{{ section.description }}</p>
                    <ul class="item-charge">
    
                        <li class="item-charge__item" v-for="(technology, index) in section.technologies" :key="index">
                            <span class="item-charge__dot"> • </span> {{ technology }}
                        </li>
                    </ul>
                    <div class="welcome__buttons">
                        <NuxtLink :to="section.site" class="button welcome__button button__black" target="_blank" :class="{ 'unactive': !section.site }" :disabled="!section.site">
                            Посмотреть
                        </NuxtLink>
                        <NuxtLink :to="section.github" class="button welcome__button button__black" :class="{ 'unactive': !section.github }" :disabled="!section.github">
                            GitHub
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const sections = [{
        middleImage: './image/projects/class.jpeg',
        title: 'Project management module (ctrl2go)',
        site: '',
        github: '',
        description: 'Разработала с нуля этот сайт платформы CLASS  на Vue.js, с адаптивной и кроссбраузерной версткой согласно figma-макетам, взаимодействием с сервером.',
        technologies: [
            'Vue.js', 'Vite', 'JavaScript', 'SCSS', 'БЭМ', 'Vue router', 'Git', 'GitLab', 'Axios', 'RESTful API', 'API Яндекс.Карты', 'i18n', 'Figma',
        ]
    },
    {
        middleImage: './image/projects/pmm.jpeg',
        title: 'Class (ctrl2go) (закрытая система)',
        description: 'Код на закрытом репозитории GitLab. Настроен вывод/редактирование/удаление данных из разных API (отправка HTTP-запросов к API через Axios), вывод графиков amcharts5, скачивание и загрузка данных из файлов',
        technologies: [
            'Vue.js', 'Pinia', 'Vite', 'JavaScript', 'Storybook', 'SCSS', 'БЭМ', 'Vue router', 'Git', 'GitLab', 'Axios', 'RESTful API', 'API Яндекс.Карты', 'Swagger', 'SonarQube', 'i18n', 'Figma', 'AmChartsV4 '
        ]
    }
]

const sectionRefs = ref([])
const intersections = ref(sections.map(() => false))

const initObservers = () => {
    const options = {
        threshold: 0.3,
        rootMargin: '-20% 0px -20% 0px'
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const index = sectionRefs.value.findIndex(ref => ref === entry.target)
            if (index !== -1) {
                intersections.value[index] = entry.isIntersecting
            }
        })
    }, options)

    // Наблюдаем за всеми секциями
    sectionRefs.value.forEach((section, index) => {
        if (section) {
            observer.observe(section)
        }
    })

    return observer
}

onMounted(() => {
    const observer = initObservers()

    onUnmounted(() => {
        observer.disconnect()
    })
})
</script>

<style scoped lang="scss">
.sections-container {
    width: 100%;
}

.section {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    min-height: 300px;
    @media (min-width: 768px) {
        height: 500px;
        margin-bottom: 4rem;
    }
    .left,
    .middle {
        padding: 30px;
        color: #fff;
        box-sizing: border-box;
        @media (min-width: 768px) {
            position: absolute;
            width: 33.333%;
            height: 100%;
            transition: all 0.6s ease-in-out;
        }
    }
    .middle {
        background: #2c3e50;
        @media (min-width: 768px) {
            left: 33.33%;
        }
        img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            @media (min-width: 768px) {
                height: 100%;
            }
        }
    }
    .left {
        background: rgba(44, 62, 80, 0.9);
        @media (min-width: 768px) {
            left: 50%;
        }
        .content {
            @media (min-width: 768px) {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                width: calc(100% - 60px);
            }
        }
    } // Анимация при появлении в viewport
    &.animate {
        .left {
            @media (min-width: 768px) {
                left: 0;
            }
        }
    }
    .content {
        h2 {
            font-size: 1.8rem;
            margin-bottom: 1rem;
        }
        p {
            font-size: 1.1rem;
            line-height: 1.6;
            margin-bottom: 1.5rem;
        }
    }
    .btn-primary {
        display: inline-block;
        padding: 12px 24px;
        background: #007bff;
        color: white;
        text-decoration: none;
        border-radius: 5px;
        font-weight: bold;
        &:hover {
            background: #0056b3;
        }
    }
}

// Мобильная версия
@media (max-width: 767px) {
    .section {
        .middle,
        .left {
            position: relative;
            width: 100%;
            left: 0;
        }
        .left {
            order: 2;
        }
        .middle {
            order: 1;
        }
    }
}
</style>