<script setup>
import { watch, ref } from 'vue';

const props = defineProps({
  isShowAnimate: Boolean,
});
const initialSkills = [{
  id: 1,
  path: '/svg/vue.svg',
  name: 'VUEJS'
},
{
  id: 2,
  path: '/svg/nuxt.svg',
  name: 'NuxtJS'
},
{
  id: 3,
  path: '/svg/pinia.svg',
  name: 'Pinia'
},
{id: 4,
  path: '/svg/vitejs.svg',
  name: 'ViteJS'
},
{id: 5,
  path: '/svg/js.svg',
  name: 'JS'
},
{id: 6,
  path: '/svg/html5.svg',
  name: 'HTML5'
},

{id: 7,
  path: '/svg/css.svg',
  name: 'CSS3'
},
{id: 8,
  path: '/svg/sass.svg',
  name: 'SASS'
},

{id: 9,
  path: '/svg/typescript.svg',
  name: 'Typescript'
},

{id: 10,
  path: '/svg/storybook.svg',
  name: 'Storybook'
},

{id: 11,
  path: '/svg/figma.svg',
  name: 'Figma'
},
{id: 12,
  path: '/svg/github.svg',
  name: 'Github'
},

{id: 13,
  path: '/svg/gitlab.svg',
  name: 'Gitlab'
},
{id: 14,
  path: '/svg/jest.svg',
  name: 'Jest'
},
{id: 15,
  path: '/svg/npm.svg',
  name: 'npm'
},
{id: 16,
  path: '/svg/vscode.svg',
  name: 'VSCode'
},
{id: 17,
  path: '/svg/jquery.svg',
  name: 'JQuery'
},
{id: 18,
  path: '/svg/bem.svg',
  name: 'BEMnaming'
},
{id: 19,
  path: '/svg/json.svg',
  name: 'JSON'
},
{id: 20,
  path: '/svg/postman.svg',
  name: 'Postman'
},
{id: 21,
  path: '/svg/gulp.svg',
  name: 'Gulp'
},
{id: 22,
  path: '/svg/sonarqube.svg',
  name: 'Sonarqube'
},
{id: 23,
  path: '/svg/swagger.svg',
  name: 'Swagger'
},
]
const skills = ref([]);
const positions = [
  { x: -100, y: Math.random() * 200 - 100 }, // слева
  { x: 100, y: Math.random() * 200 - 100 }, // справа
];

// Функция для запуска анимации "слетания"
function runAnimation() {
  // Изначально задаем стартовые позиции
  skills.value.forEach((skill) => {
    const side = Math.random() > 0.5 ? -1 : 1;
    const yOffset = Math.random() * 200 - 100; // случайный сдвиг по вертикали
    skill.style = {
      transform: `translate(${side * 20}vw, ${yOffset}vh)`, // небольшое стартовое смещение
      transition: 'none',
    };
  });

  // Через короткое время анимация запускается, иконки возвращаются в исходную позицию
  setTimeout(() => {
    skills.value.forEach((skill) => {
      skill.style.transform = '';
      skill.style.transition = 'transform 2s ease';
    });
  }, 50);
}

// Следим за prop isShowAnimate
watch(
  () => props.isShowAnimate,
  (newVal) => {
    if (newVal) {
      // Перезагружаем список и запускаем анимацию
      skills.value = initialSkills.map(skill => ({ ...skill, style: {} }));
      runAnimation();
    }
  }
);
</script>

<template>
  
<template>
    <transition-group 
      name="slide" 
      tag="ul" 
      class="skills__list" 
    >
      <li 
        v-for="skill in skills" 
        :key="skill.id" 
        class="skills__item"
        :style="skill.style"
      >
        <img :src="skill.path" :alt="skill.name" class="skills__image" />
        <div class="skills__label">{{ skill.name }}</div>
      </li>
    </transition-group>

</template>

  
</template>

<style lang="scss" scoped>
@use '@/assets/css/variables' as v;

.skills {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 80%;
    margin: 0 auto;
    gap: 15px;
  }

   &__item { 
    width: 100px;
    text-align: center;
    margin: 10px 20px 20px 0;
    transition: transform 3s ease 3s;

    &:hover {
      animation: animSkills 1s ease 0s 1 normal forwards;
      
    }
  }

  &__image {
    width: 64px;
    height: 64px;
    padding: 8px;
    background: v.$bg-color;
    transition: 100ms ease-out;
  }

  &__label {
    font-size: 14px;
    color: v.$text-color;
    border-radius: 8px;
    font-weight: 600;
    max-width: 100px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}

@keyframes animSkills {
0%, 100% {
    transform: translateX(0%);
    transform-origin: 10% 10%;
}
15% {
    transform: translateX(-10px) rotate(-6deg);
}
30% {
    transform: translateX(15px) rotate(6deg);
}
45% {
    transform: translateX(-15px) rotate(-3.6deg);
}
60% {
    transform: translateX(9px) rotate(2.4deg);
}
75% {
    transform: translateX(-6px) rotate(-1.2deg);
}
}
</style>