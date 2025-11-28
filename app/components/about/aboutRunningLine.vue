<template>
  <div class="marquee-container">
    <div class="marquee-content">
      <!-- Первый набор слов -->
      <span 
        v-for="(word, index) in words" 
        :key="`first-${index}`" 
        class="marquee-word"
      >
        {{ word }}
      </span>
      
      <!-- Дублированный набор слов для бесшовности -->
      <span 
        v-for="(word, index) in words" 
        :key="`second-${index}`" 
        class="marquee-word"
      >
        {{ word }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const words = [
  '*', 'Frontend', 'Developer',  
  'Успех', 'Профессионализм', 'Качество'
]
</script>

<style lang="scss"  scoped>
@use '@/assets/css/variables' as v;
.marquee-container {
  width: 100%;
  padding: 10px 0;
  white-space: nowrap;
}

.marquee-content {
  display: inline-block;
  animation: marquee 40s linear infinite;
}

.marquee-word {
  display: inline-block;
    margin: 30px 30px 0;
    font-size: 75px;
  color: v.$light-gray;
  opacity: .3;
  font-style: italic;
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