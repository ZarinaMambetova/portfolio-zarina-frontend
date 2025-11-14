<script setup>
import WelcomeOverlay from "~/components/shared/welcomeOverlay.vue";

const progressBarEl = ref(null)

// Функция для обновления прогрессбара
const updateProgressBar = () => {
  if (!progressBarEl.value) return
  
  const height = document.body.scrollHeight - window.innerHeight
  const scrollPosition = document.documentElement.scrollTop
  const width = (scrollPosition / height) * 100
  progressBarEl.value.style.width = `${width}%`
}

onMounted(() => {
  // Добавляем обработчик скролла после монтирования
  window.addEventListener('scroll', updateProgressBar)
})

onUnmounted(() => {
  // Убираем обработчик при размонтировании
  window.removeEventListener('scroll', updateProgressBar)
})
</script>

<template>
  <div>
    <WelcomeOverlay />
    
    <div>
      <slot />
    </div>
    
    <div ref="progressBarEl" class="progress-bar"></div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/css/variables' as v;

.progress-bar {
  height: 5px;
  width: 0%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: v.$main-green;
  z-index: 9999;
  transition: width 0.1s ease;
}
</style>