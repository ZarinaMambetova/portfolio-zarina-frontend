<template>
    <div class="projects">
            <ul class="projects__list">
         <li 
        v-for="(project, index) in visibleProjects" 
        :key="index" 
        :class="['project', { 'animate': interprojects[index] }]" 
        :ref="el => projectRefs[index] = el"
      >
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
        </li>
    </ul>
        <button 
      v-if="showLoadMore" 
      @click="loadMore" 
      class="button project__button button__black"
    >
      Еще
    </button>
    </div>

</template>

<script setup>
import { ref, computed } from 'vue'

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
            'Vue.js', 'Vite', 'JavaScript', 'SCSS', 'БЭМ', 'Vue router', 'Git', 'Flexbox', 'GridCss', 'GitLab', 'Axios', 'RESTful API', 'API Яндекс.Карты', 'i18n', 'Figma',
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
            'Vue.js', 'Pinia', 'Vite', 'JavaScript', 'Storybook', 'SCSS', 'Flexbox', 'GridCss', 'БЭМ', 'Vue router', 'Git', 'GitLab', 'Axios', 'RESTful API', 'API Яндекс.Карты', 'Swagger', 'SonarQube', 'i18n', 'Figma', 'Pixel Perfect', 'AmChartsV4'
        ]
    },
        {
        
      type: 'projects',
      middleImage: './image/projects/interviews.jpeg',
        title: 'Список собеседований',
        site: 'https://zarinamambetova.github.io/interviews-project/',
        github: 'https://github.com/ZarinaMambetova/interviews-project',
        description: 'Список собеседований с авторизацией и  возможностью фильтровать, добавлять, редактировать и удалять данные о собеседовании. Отдельно настроена статистика по данным.',
        technologies: [
            'Vue.js 3', 'Pinia', 'Vite', 'Typescript', 'CI/CD', 'SCSS', 'Flexbox', 'БЭМ', 'Git', 'GitLab', 'chart.js', 'firebase', 'primevue', 'primeicons',
        ]
    },
            {
        
      type: 'projects',
      middleImage: './image/projects/remember.jpeg',
        title: 'Игра Remember',
        site: 'https://zarinamambetova.github.io/game_on_vue.js-remember/',
        github: 'https://github.com/ZarinaMambetova/game_on_vue.js-remember',
        description: 'Многоуровлевая игра для тренировки памяти. ',
        technologies: ['Vue cli', 'git'
        ]
    },
    {
      type: 'projects',
      middleImage: './image/projects/tkb-promo.jpeg',
        title: 'ТКБ. Бонусы для своих.',
        site: 'https://www.tkbbank.ru/business/promo/',
        github: '',
        description: 'Один из рекламных лендингов для ТКБ Банка. Адаптивная и кроссбраузерная верстка согласно figma-макету. Код на закрытом репозитории банка.',
        technologies: ['html', 'css', 'jquery ui', 'Flexbox', 'bitrix24', 'svg', 'Pixel Perfect', 'BEM', 'parallax', 'git', 'figma'
        ]
    },
        {
      type: 'projects',
      middleImage: './image/projects/tkb-schet.jpeg',
        title: 'ТКБ. Счет для бизнеса бесплатно',
        site: 'https://www.tkbbank.ru/landing/rko5/',
        github: '',
        description: 'Один из рекламных лендингов для ТКБ Банка. Адаптивная и кроссбраузерная верстка согласно figma-макету. Код на закрытом репозитории банка.',
        technologies: ['html', 'css', 'jquery ui', 'Flexbox', 'bitrix24', 'svg', 'Pixel Perfect', 'BEM', 'git', 'figma'
        ]
    },
            {
      type: 'projects',
      middleImage: './image/projects/tkb-controlled.jpeg',
        title: 'ТКБ. Управляемый',
        site: 'https://zarinamambetova.github.io/tkb_controlled/dist/',
        github: 'https://github.com/ZarinaMambetova/tkb_controlled',
        description: 'Один из лендингов для ТКБ Банка. Адаптивная и кроссбраузерная верстка.',
        technologies: ['Gulp', 'html', 'css', 'JavaScript', 'Flexbox', 'svg', 'BEM', 'git'
        ]
    },
                {
      type: 'projects',
      middleImage: './image/projects/tkb-business.jpeg',
        title: 'ТКБ. 1С:Бизнес',
        site: 'https://www.tkbbank.ru/business/promo/1cstart/',
        github: '',
        description: 'Один из рекламных лендингов для ТКБ Банка. Адаптивная и кроссбраузерная верстка согласно figma-макету. Код на закрытом репозитории банка.',
        technologies: ['html', 'css', 'jquery ui', 'Flexbox', 'Pixel Perfect', 'bitrix24', 'svg', 'BEM', 'git', 'figma'
        ]
    },
                    {
      type: 'projects',
      middleImage: './image/projects/tkb-1c.jpeg',
        title: 'ТКБ. 1С:Кредит',
        site: 'https://www.tkbbank.ru/business/promo/1ccredit/',
        github: '',
        description: 'Один из рекламных лендингов для ТКБ Банка. Адаптивная и кроссбраузерная верстка согласно figma-макету. Код на закрытом репозитории банка.',
        technologies: ['html', 'css', 'jquery ui', 'Flexbox', 'Pixel Perfect', 'bitrix24', 'svg', 'BEM', 'git', 'figma'
        ]
    },
                        {
      type: 'projects',
      middleImage: './image/projects/tkb-kassa.jpeg',
        title: 'ТКБ. 1С:Касса',
        site: 'https://www.tkbbank.ru/business/promo/1ckassa/',
        github: '',
        description: 'Один из рекламных лендингов для ТКБ Банка. Адаптивная и кроссбраузерная верстка согласно figma-макету. Код на закрытом репозитории банка.',
        technologies: ['html', 'css', 'jquery ui', 'Flexbox', 'Pixel Perfect', 'bitrix24', 'svg', 'BEM', 'git', 'figma'
        ]
    },
     {
      type: 'projects',
      middleImage: './image/projects/tkb-vacancy.jpeg',
        title: 'ТКБ. Карьера - шаблон для вакансии',
        site: 'https://www.tkbbank.ru/bank/job1/vacancy/sample-vacancy/',
        github: '',
        description: 'Одна из страниц для сайта ТКБ Банка. Адаптивная и кроссбраузерная верстка согласно figma-макету. Код на закрытом репозитории банка.',
        technologies: ['html', 'css', 'jquery ui', 'Flexbox', 'Pixel Perfect', 'bitrix24', 'svg', 'BEM', 'git', 'figma'
        ]
    },
                            {
      type: 'projects',
      middleImage: './image/projects/tkb-lizing.jpeg',
        title: 'Лизинговые закупки (все страницы сайта)',
        site: 'http://lizzak.ru/',
        github: '',
        description: 'Один из рекламных лендингов для ТКБ Банка. Адаптивная и кроссбраузерная верстка согласно figma-макету. Код на закрытом репозитории банка.',
        technologies: ['html', 'css', 'jquery ui', 'Flexbox', 'Pixel Perfect', 'bitrix24', 'svg', 'BEM', 'git', 'figma'
        ]
    },
        {
        type: 'projects',
        middleImage: './image/projects/class-pro.jpeg',
        title: 'Class-cloud (ctrl2go)',
        site: 'https://class-cloud.ru/class.pro',
        github: '',
        description: 'Промо-визитка сайта class-cloud. Адаптивная и кроссбраузерная верстка согласно figma-макету. Код на закрытом репозитории',
        technologies: [
            'Vue.js', 'Vite', 'JavaScript', 'SCSS', 'БЭМ', 'Git', 'Flexbox', 'GitLab', 'Figma',
        ]
    },
         {
      type: 'projects',
      middleImage: './image/projects/burger.jpeg',
        title: 'Мистер Бургер',
        site: 'https://zarinamambetova.github.io/landing-burgers/',
        github: '',
        description: 'Лендинг с адаптивной и кроссбраузерной версткой согласно  макету в Photoshop.',
        technologies: ['html', 'scss', 'JavaScript', 'jquery', 'php', 'Flexbox', 'Pixel Perfect', 'svg', 'One Page Scroll', 'AJAX', 'git'
        ]
    },
             {
      type: 'projects',
      middleImage: './image/projects/lost-shirt.jpeg',
        title: 'Интернет-магазин "Lost-shirt"',
        site: 'https://zarinamambetova.github.io/lost-shirt/',
        github: 'https://github.com/ZarinaMambetova/lost-shirt',
        description: 'Лендинг с адаптивной и кроссбраузерной версткой согласно  макету в Photoshop.',
        technologies: ['html', 'scss', 'JavaScript', 'Flexbox', 'Pixel Perfect', 'svg', 'git'
        ]
    },

         {
      type: 'projects',
      middleImage: './image/projects/todo.jpeg',
        title: 'Список задач на vue.js',
        site: 'https://zarinamambetova.github.io/vue.js-todo_list/',
        github: 'https://github.com/ZarinaMambetova/vue.js-todo_list',
        description: 'Список задач с возможностью добавить, удалить, отметить выполненной задачу.',
        technologies: [ 'html', 'css', 'Vue.js', 'BEM', 'git', 'prepros'
        ]
    },
             {
      type: 'projects',
      middleImage: './image/projects/astahov.jpeg',
        title: 'Сайт-визитка',
        site: 'https://zarinamambetova.github.io/mambetova-vue-project/',
        github: 'https://github.com/ZarinaMambetova/mambetova-vue-project',
        description: 'Лендинг с адаптивной и кроссбраузерной версткой согласно  макету в Photoshop.',
        technologies: ['Vue.js 3', 'pug', 'pcss', 'JavaScript', 'BEM', 'Webpack', 'git', 'Pixel Perfect', 'figma', 'Flexbox', 'GridCss'
        ]
    },

                        {
      type: 'projects',
      middleImage: './image/projects/hyunday.jpeg',
        title: 'Hyundai Azera',
        site: 'https://zarinamambetova.github.io/24TTL_Hyunday/dist/index.html',
        github: 'https://github.com/ZarinaMambetova/24TTL_Hyunday',
        description: 'Верстка согласно figma-макету с вставкой видео и css-аниммцией.',
        technologies: ['Gulp', 'html', 'scss', 'JavaScript', 'Flexbox', 'SVG', 'JQuery', 'git'
        ]
    },
                            {
      type: 'projects',
      middleImage: './image/projects/grid.jpeg',
        title: 'Практика Grid Css',
        site: 'https://zarinamambetova.github.io/grid-practice/',
        github: 'https://github.com/ZarinaMambetova/grid-practice',
        description: 'Страница создана для большей практики c Grid. Адаптивная верстка.',
        technologies: ['html', 'scss', 'grid css', 'flexbox', 'svg', 'git'
        ]
    },
     {
      type: 'projects',
      middleImage: './image/projects/ccr.jpeg',
        title: 'Ccs-проект',
        site: 'https://zarinamambetova.github.io/ccs-project/dist/',
        github: 'https://github.com/ZarinaMambetova/ccs-project',
        description: 'Страница создана для большей практики c Grid. Адаптивная верстка.',
        technologies: ['html', 'scss', 'grid css', 'flexbox', 'svg', 'git'
        ]
    },
     {
      type: 'projects',
      middleImage: './image/projects/mpn.jpeg',
        title: 'MPN_Headliner',
        site: 'https://zarinamambetova.github.io/MPN_Headliner/dist/',
        github: 'https://github.com/ZarinaMambetova/MPN_Headliner',
        description: 'Верстка согласно figma-макету с css-аниммцией.',
        technologies: ['html', 'scss', 'grid css', 'flexbox', 'svg', 'git'
        ]
    },
         {
      type: 'projects',
      middleImage: './image/projects/old-portfolio.jpeg',
        title: 'Учебный сайт-портфолио',
        site: 'https://zarinamambetova.github.io/MySitePortfolio/build/',
        github: 'https://github.com/ZarinaMambetova/MySitePortfolio',
        description: 'Сайт, созданный вов ремя обучения на курсе по vue.js',
        technologies: ['Vue.js 3', 'pug', 'pcss', 'JavaScript', 'BEM', 'Webpack', 'git', 'Pixel Perfect', 'figma', 'Flexbox', 'GridCss'
        ]
    },
]

// Реактивные переменные
const visibleCount = ref(4)
const projectsPerLoad = 4
const projectRefs = ref([])
const interprojects = ref([])
let observer = null

// Вычисляемое свойство для видимых проектов
const visibleProjects = computed(() => 
  projects.slice(0, visibleCount.value)
)

// Показывать ли кнопку "Еще"
const showLoadMore = computed(() => 
  visibleCount.value < projects.length
)

// Инициализация Intersection Observer
const initObservers = () => {
  if (observer) {
    observer.disconnect()
  }

  const options = {
    threshold: 0.3,
    rootMargin: '-20% 0px -20% 0px'
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const index = projectRefs.value.findIndex(ref => ref === entry.target)
      if (index !== -1) {
        interprojects.value[index] = entry.isIntersecting
      }
    })
  }, options)

  // Наблюдаем за всеми видимыми проектами
  nextTick(() => {
    projectRefs.value.forEach((project, index) => {
      if (project && index < visibleCount.value) {
        observer.observe(project)
      }
    })
  })
}

// Функция для подгрузки еще проектов
const loadMore = async () => {
  visibleCount.value += projectsPerLoad
  
  // Ждем обновления DOM и переинициализируем observer
  await nextTick()
  initObservers()
}

const emit = defineEmits(['select'])

function handleSelect(selectedItem) {
  emit('select', selectedItem)
  console.log('select', selectedItem)
}

onMounted(() => {
  // Инициализируем interprojects для всех проектов
  interprojects.value = projects.map(() => false)
  initObservers()
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped lang="scss">
@use '@/assets/css/variables' as v;


    .projects {
       flex-direction: column;
    display: flex;
    align-items: center; 
&__list {
width: 100%;
}

    
}

.project {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    min-height: 365px;

        margin-bottom: 4rem;

        &__button {
          cursor: pointer;
        }

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
        background-color: v.$bg-color-light;
        right: 0;
        z-index: 2;
                padding: 3px;

        img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            cursor: pointer;
            border-radius: 0 40px;
            @media (min-width: 768px) {
                height: 100%;
            }
        }
    }
    &__left {
        background-color: v.$bg-color-light;
        left: 50%;
        z-index: 1;
        padding: 20px 15px;
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