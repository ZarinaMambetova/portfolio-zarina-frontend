<template>
  <div class="marquee-container">
    <div class="marquee-content">
      <span 
        v-for="(word, index) in duplicatedWords" 
        :key="`first-${index}`" 
        class="marquee-word"
      >
        {{ word }}
      </span>
      
    </div>
  </div>
</template>

<script setup lang="ts">
const words = [
  '⌨️', 'Frontend', 'Developer',  

]

// Дублируем слова 4 раза для плавной анимации
const duplicatedWords = [...words, ...words, ...words, ...words, ...words, ...words, ...words,]
</script>

<style lang="scss"  scoped>
@use '@/assets/css/variables' as v;

.marquee-container {
  width: 100%;
  position: absolute;
  white-space: nowrap;
  z-index: 5;
  top: 25%;
      mask-image: radial-gradient(circle, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);
}

.marquee-content {
  display: inline-block;
  animation: marquee 40s linear infinite;
}

.marquee-word {
  display: inline-block;
  margin: 30px 30px 0;
  font-size: 70px;
  opacity: .3;
  font-weight: 700;
  color: transparent;
  -webkit-text-stroke: 1px v.$light-gray;
  font-family: initial;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>